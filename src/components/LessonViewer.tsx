'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import type { Lesson } from '@/lib/courseData';
import LessonQuiz from '@/components/LessonQuiz';

interface LessonViewerProps {
  lesson: Lesson;
  moduleNum: string;
  moduleTitle: string;
  moduleDescription: string;
  moduleLessons: { title: string }[];
  lessonIdx: number;
  lessonKey: string;
  userId: string;
  prevLesson: { mod: string; idx: number; title: string } | null;
  nextLesson: { mod: string; idx: number; title: string } | null;
}

interface Highlight {
  text: string;
  sectionIdx: number;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  selectedText: string;
  sectionIdx: number;
}

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        setValue(JSON.parse(stored) as T);
      }
    } catch {
      // ignore
    }
  }, [key]);

  const set = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof newValue === 'function' ? (newValue as (p: T) => T)(prev) : newValue;
        try {
          localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          // ignore
        }
        return resolved;
      });
    },
    [key]
  );

  return [value, set] as const;
}

export default function LessonViewer({
  lesson,
  moduleNum,
  moduleTitle,
  moduleDescription,
  moduleLessons,
  lessonIdx,
  lessonKey,
  userId,
  prevLesson,
  nextLesson,
}: LessonViewerProps) {
  const [notes, setNotes] = useLocalStorage<string>(`lesson-notes-${lessonKey}`, '');
  const [highlights, setHighlights] = useLocalStorage<Highlight[]>(
    `lesson-highlights-${lessonKey}`,
    []
  );
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    selectedText: '',
    sectionIdx: 0,
  });

  // Assignment submission state
  const [submission, setSubmission] = useState('');
  const [submissionLoaded, setSubmissionLoaded] = useState(false);
  const [savingSubmission, setSavingSubmission] = useState(false);
  const [submissionSaved, setSubmissionSaved] = useState(false);

  const notesDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Load saved submission on mount
  useEffect(() => {
    async function loadSubmission() {
      try {
        const res = await fetch(`/api/academy/assignment?lessonKey=${encodeURIComponent(lessonKey)}`);
        if (res.ok) {
          const json = await res.json();
          if (json.submission) {
            setSubmission(json.submission);
          }
        }
      } finally {
        setSubmissionLoaded(true);
      }
    }
    loadSubmission();
  }, [lessonKey]);

  async function saveSubmission() {
    if (!submission.trim()) return;
    setSavingSubmission(true);
    setSubmissionSaved(false);
    try {
      const res = await fetch('/api/academy/assignment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonKey, response: submission }),
      });
      if (res.ok) {
        setSubmissionSaved(true);
        // Auto-mark lesson complete in localStorage
        try {
          const raw = localStorage.getItem('academy-completed-lessons');
          const completed: string[] = raw ? JSON.parse(raw) : [];
          if (!completed.includes(lessonKey)) {
            localStorage.setItem(
              'academy-completed-lessons',
              JSON.stringify([...completed, lessonKey])
            );
          }
        } catch {
          // ignore
        }
      }
    } finally {
      setSavingSubmission(false);
    }
  }

  // Dismiss tooltip on click outside
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-highlight-tooltip]')) {
        setTooltip((t) => ({ ...t, visible: false }));
      }
    }
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  function handleMouseUp(sectionIdx: number) {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setTooltip((t) => ({ ...t, visible: false }));
      return;
    }
    const text = selection.toString().trim();
    if (!text || text.length < 3) {
      setTooltip((t) => ({ ...t, visible: false }));
      return;
    }

    // Check that selection is inside this section
    const container = sectionRefs.current[sectionIdx];
    if (!container) return;
    const range = selection.getRangeAt(0);
    if (!container.contains(range.commonAncestorContainer)) {
      setTooltip((t) => ({ ...t, visible: false }));
      return;
    }

    const rect = range.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + window.scrollY - 40,
      selectedText: text,
      sectionIdx,
    });
  }

  function saveHighlight() {
    const { selectedText, sectionIdx } = tooltip;
    if (!selectedText) return;
    setHighlights((prev) => {
      // Avoid exact duplicates
      if (prev.some((h) => h.text === selectedText && h.sectionIdx === sectionIdx)) return prev;
      return [...prev, { text: selectedText, sectionIdx }];
    });
    setTooltip((t) => ({ ...t, visible: false }));
    window.getSelection()?.removeAllRanges();
  }

  function removeHighlight(idx: number) {
    setHighlights((prev) => prev.filter((_, i) => i !== idx));
  }

  function renderBodyWithHighlights(body: string, sectionIdx: number) {
    const sectionHighlights = highlights.filter((h) => h.sectionIdx === sectionIdx);
    if (sectionHighlights.length === 0) return body;

    // Simple approach: replace highlight text occurrences with marked spans
    // We return segments as an array for React rendering
    let remaining = body;
    const parts: { text: string; highlighted: boolean; hlIdx?: number }[] = [];

    // Sort highlights by their position in the text to avoid overlaps
    const sorted = sectionHighlights
      .map((h, i) => ({ ...h, origIdx: i }))
      .sort((a, b) => remaining.indexOf(a.text) - remaining.indexOf(b.text));

    for (const hl of sorted) {
      const pos = remaining.indexOf(hl.text);
      if (pos === -1) continue;
      if (pos > 0) {
        parts.push({ text: remaining.slice(0, pos), highlighted: false });
      }
      parts.push({ text: hl.text, highlighted: true, hlIdx: hl.origIdx });
      remaining = remaining.slice(pos + hl.text.length);
    }
    if (remaining) {
      parts.push({ text: remaining, highlighted: false });
    }

    if (parts.length === 0) return body;

    return (
      <>
        {parts.map((part, i) =>
          part.highlighted ? (
            <mark
              key={i}
              className="bg-yellow-100 text-[#1a1a1a] rounded px-0.5 cursor-pointer"
              title="Click to remove highlight"
              onClick={() => typeof part.hlIdx === 'number' && removeHighlight(part.hlIdx)}
            >
              {part.text}
            </mark>
          ) : (
            <span key={i}>{part.text}</span>
          )
        )}
      </>
    );
  }

  function handleNotesChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const val = e.target.value;
    if (notesDebounceRef.current) clearTimeout(notesDebounceRef.current);
    notesDebounceRef.current = setTimeout(() => {
      setNotes(val);
    }, 500);
    // Also update display immediately
    e.target.value = val;
  }

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] relative">
      {/* Highlight tooltip */}
      {tooltip.visible && (
        <div
          data-highlight-tooltip
          style={{ position: 'absolute', left: tooltip.x, top: tooltip.y, transform: 'translateX(-50%)' }}
          className="z-50"
        >
          <button
            onClick={saveHighlight}
            className="bg-[#1a1a1a] text-white text-[12px] font-mono px-3 py-1.5 rounded-lg shadow-lg hover:bg-[#333] transition-colors whitespace-nowrap"
          >
            Highlight
          </button>
          <div className="w-2 h-2 bg-[#1a1a1a] rotate-45 mx-auto -mt-1" />
        </div>
      )}

      <div className="flex min-h-screen">
        {/* LEFT SIDEBAR — desktop only */}
        <aside className="hidden md:flex flex-col w-[240px] shrink-0 border-r border-[#e8e8e8] fixed top-0 left-0 h-screen overflow-y-auto py-8 px-5 bg-white z-10">
          <Link
            href="/academy/dashboard"
            className="flex items-center gap-2 text-[12px] font-mono text-[#888] hover:text-[#1a1a1a] transition-colors mb-8 group"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Dashboard
          </Link>

          <div className="mb-6">
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#999] uppercase mb-1">
              Module {moduleNum}
            </p>
            <p className="text-[13px] font-semibold text-[#1a1a1a] leading-snug">{moduleTitle}</p>
          </div>

          <nav className="space-y-0.5">
            {moduleLessons.map((l, i) => {
              const isActive = i === lessonIdx;
              return (
                <Link
                  key={i}
                  href={`/academy/lesson/${moduleNum}/${i}`}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#1a1a1a] text-white'
                      : 'text-[#555] hover:text-[#1a1a1a] hover:bg-[#f5f5f5]'
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono shrink-0 ${
                      isActive ? 'text-[#888]' : 'text-[#bbb]'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="leading-snug">{l.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Module description */}
          <div className="mt-auto pt-8">
            <p className="text-[11px] text-[#bbb] leading-relaxed">{moduleDescription}</p>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 md:ml-[240px] md:mr-[260px]">
          <div className="max-w-[680px] mx-auto px-6 md:px-12 py-12 md:py-16">
            {/* Mobile back link */}
            <Link
              href="/academy/dashboard"
              className="md:hidden flex items-center gap-2 text-[12px] font-mono text-[#888] hover:text-[#1a1a1a] transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Dashboard
            </Link>

            {/* Lesson header */}
            <header className="mb-10">
              <p className="text-[11px] font-mono tracking-[0.3em] text-[#888] uppercase mb-4">
                Module {moduleNum} — Lesson {String(lessonIdx + 1).padStart(2, '0')}
              </p>
              <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#111] tracking-tight leading-[1.1] mb-5">
                {lesson.title}
              </h1>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#999] bg-[#f5f5f5] rounded-full px-3 py-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 3.5V6L7.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {lesson.readingTime}
                </span>
              </div>

              <div className="mt-6 pb-8 border-b border-[#efefef]">
                <p className="text-[16px] leading-[1.75] text-[#555]">{lesson.overview}</p>
              </div>
            </header>

            {/* Sections */}
            <div className="space-y-0">
              {lesson.sections.map((section, i) => (
                <div
                  key={i}
                  ref={(el) => { sectionRefs.current[i] = el; }}
                  data-highlightable="true"
                  onMouseUp={() => handleMouseUp(i)}
                  className="mb-8"
                >
                  <h2 className="text-[17px] font-semibold text-[#111] mt-10 mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-[16px] leading-[1.85] text-[#333] select-text">
                    {renderBodyWithHighlights(section.body, i)}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="bg-[#f5f5f5] rounded-xl p-6 mt-10">
              <p className="text-[10px] font-mono tracking-[0.3em] text-[#888] uppercase mb-4">
                Key Takeaways
              </p>
              <ul className="space-y-2.5">
                {lesson.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#bbb] shrink-0" />
                    <span className="text-[14px] leading-[1.7] text-[#444]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assignment */}
            <div className="bg-[#fffbf0] border border-[#e8d5a3] rounded-xl p-6 mt-6">
              <p className="text-[10px] font-mono tracking-[0.3em] text-[#b08030] uppercase mb-3">
                This Week
              </p>
              <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-3">
                {lesson.assignment.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-[#555] mb-5">
                {lesson.assignment.description}
              </p>
              <div className="bg-[#fff8e6] border border-[#e8d5a3] rounded-lg p-4">
                <p className="text-[10px] font-mono tracking-[0.25em] text-[#b08030] uppercase mb-2">
                  Deliverable
                </p>
                <p className="text-[13px] leading-[1.7] text-[#555]">
                  {lesson.assignment.deliverable}
                </p>
              </div>

              {/* Submission */}
              <textarea
                value={submissionLoaded ? submission : ''}
                onChange={(e) => {
                  setSubmission(e.target.value);
                  setSubmissionSaved(false);
                }}
                placeholder="Your submission"
                className="w-full border border-[#e0e0e0] rounded-xl p-4 text-[14px] min-h-[100px] focus:border-[#111] outline-none resize-none mt-3"
                spellCheck={false}
              />
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={saveSubmission}
                  disabled={savingSubmission || !submission.trim()}
                  className="bg-[#111] text-white text-[13px] px-4 py-2 rounded-lg hover:bg-[#222] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {savingSubmission ? 'Saving...' : 'Save submission'}
                </button>
                {submissionSaved && (
                  <span className="text-[13px] text-green-600 font-mono">Saved ✓</span>
                )}
              </div>
            </div>

            {/* Quiz */}
            {lesson.quiz && lesson.quiz.length > 0 && (
              <LessonQuiz quiz={lesson.quiz} lessonKey={lessonKey} userId={userId} />
            )}

            {/* Bottom navigation */}
            <nav className="mt-14 pt-8 border-t border-[#efefef] flex items-center justify-between gap-4">
              {prevLesson ? (
                <Link
                  href={`/academy/lesson/${prevLesson.mod}/${prevLesson.idx}`}
                  className="flex items-center gap-2 group max-w-[45%]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="shrink-0 text-[#bbb] group-hover:text-[#1a1a1a] transition-colors"
                  >
                    <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-[10px] font-mono tracking-[0.2em] text-[#bbb] uppercase mb-0.5">
                      Previous
                    </p>
                    <p className="text-[13px] text-[#333] group-hover:text-[#1a1a1a] transition-colors leading-snug line-clamp-2">
                      {prevLesson.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <Link
                  href={`/academy/lesson/${nextLesson.mod}/${nextLesson.idx}`}
                  className="flex items-center gap-2 group max-w-[45%] text-right ml-auto"
                >
                  <div>
                    <p className="text-[10px] font-mono tracking-[0.2em] text-[#bbb] uppercase mb-0.5">
                      Next
                    </p>
                    <p className="text-[13px] text-[#333] group-hover:text-[#1a1a1a] transition-colors leading-snug line-clamp-2">
                      {nextLesson.title}
                    </p>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="shrink-0 text-[#bbb] group-hover:text-[#1a1a1a] transition-colors"
                  >
                    <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </div>
        </main>

        {/* RIGHT NOTES PANEL — desktop only */}
        <aside className="hidden md:flex flex-col w-[260px] shrink-0 border-l border-[#e8e8e8] fixed top-0 right-0 h-screen py-8 px-5 bg-[#fafafa] z-10">
          <div className="mb-5">
            <p className="text-[11px] font-mono tracking-[0.25em] text-[#888] uppercase">
              My Notes
            </p>
            <p className="text-[11px] text-[#bbb] mt-1">Auto-saved</p>
          </div>

          <textarea
            key={lessonKey}
            defaultValue={notes}
            onChange={handleNotesChange}
            placeholder="Write anything here... thoughts, questions, ideas."
            className="flex-1 w-full resize-none bg-white border border-[#e8e8e8] rounded-lg p-3.5 text-[13px] text-[#333] leading-[1.7] placeholder-[#ccc] focus:outline-none focus:border-[#ccc] transition-colors"
            spellCheck={false}
          />

          <div className="mt-3 flex items-center justify-between">
            <p className="text-[11px] font-mono text-[#ccc]">
              {notes.length} chars
            </p>
          </div>

          {/* Highlights summary */}
          {highlights.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#e8e8e8]">
              <p className="text-[10px] font-mono tracking-[0.25em] text-[#888] uppercase mb-3">
                Highlights ({highlights.length})
              </p>
              <div className="space-y-2 overflow-y-auto max-h-[180px]">
                {highlights.map((hl, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 group"
                  >
                    <span className="mt-1 w-2 h-2 bg-yellow-200 border border-yellow-300 rounded-sm shrink-0" />
                    <p className="text-[12px] text-[#666] leading-snug line-clamp-2 flex-1">
                      {hl.text}
                    </p>
                    <button
                      onClick={() => removeHighlight(i)}
                      className="opacity-0 group-hover:opacity-100 shrink-0 text-[#ccc] hover:text-[#999] transition-all"
                      aria-label="Remove highlight"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
