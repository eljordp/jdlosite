"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getCourse, courses } from "@/lib/courses";
import { getLessonContent, getLessonKeys, getCourseQuizzes } from "@/lib/content";
import { isCourseFullyCompleted, getQuizProgress } from "@/lib/quiz-progress";
import {
  syncLessonComplete,
  syncLessonUncomplete,
  hydrateFromServer,
} from "@/lib/progress-sync";
import CustomCursor from "@/components/CustomCursor";

const STORAGE_PREFIX = "jdlo_access_";
const PROGRESS_PREFIX = "jdlo_progress_";

function renderContent(raw: string) {
  const blocks = raw.trim().split("\n\n");
  return blocks.map((block, i) => {
    const trimmed = block.trim();

    // Subheading
    if (trimmed.startsWith("## ")) {
      return (
        <h3
          key={i}
          className="text-lg font-semibold text-text mt-8 mb-3 tracking-[-0.02em]"
        >
          {trimmed.slice(3)}
        </h3>
      );
    }

    // List block
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[15px] text-text-secondary leading-relaxed"
            >
              <span className="text-accent text-[10px] mt-2 shrink-0">●</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: formatInline(item.slice(2)),
                }}
              />
            </li>
          ))}
        </ul>
      );
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l));
      return (
        <ol key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[15px] text-text-secondary leading-relaxed"
            >
              <span className="text-accent text-[11px] font-mono mt-0.5 shrink-0">
                {String(j + 1).padStart(2, "0")}
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: formatInline(item.replace(/^\d+\.\s/, "")),
                }}
              />
            </li>
          ))}
        </ol>
      );
    }

    // Code block
    if (trimmed.startsWith("```")) {
      const code = trimmed.replace(/^```\w*\n?/, "").replace(/\n?```$/, "");
      return (
        <pre
          key={i}
          className="bg-surface-2 border border-border rounded-xl p-4 my-4 overflow-x-auto text-[13px] text-text-secondary font-mono leading-relaxed"
        >
          {code}
        </pre>
      );
    }

    // Regular paragraph
    return (
      <p
        key={i}
        className="text-[15px] text-text-secondary leading-relaxed my-3"
        dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
      />
    );
  });
}

function formatInline(text: string): string {
  return text
    .replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="text-text font-semibold">$1</strong>'
    )
    .replace(
      /`(.+?)`/g,
      '<code class="bg-surface-2 px-1.5 py-0.5 rounded text-[13px] font-mono text-accent">$1</code>'
    )
    .replace(/\n/g, "<br />");
}

export default function LessonPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = params.slug as string;
  const lessonKey = params.lesson as string;

  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [completed, setCompleted] = useState(false);

  const course = getCourse(slug);
  const lesson = getLessonContent(slug, lessonKey);
  const allKeys = getLessonKeys(slug);
  const currentIdx = allKeys.indexOf(lessonKey);
  const prevKey = currentIdx > 0 ? allKeys[currentIdx - 1] : null;
  const nextKey =
    currentIdx < allKeys.length - 1 ? allKeys[currentIdx + 1] : null;

  // Find module info
  const [modNum] = lessonKey.split("-");
  const mod = course?.modules.find((m) => m.num === modNum);
  const quizzes = getCourseQuizzes(slug);

  // Course gating (skip if course.gated === false)
  const courseIdx = courses.findIndex((c) => c.slug === slug);
  const isGated = course?.gated !== false;
  const prevCourse = isGated && courseIdx > 0 ? courses[courseIdx - 1] : null;

  // Check if this is the last lesson in the module (for quiz nav)
  const moduleLessons = allKeys.filter((k) => k.startsWith(`${modNum}-`));
  const isLastInModule =
    moduleLessons.length > 0 &&
    lessonKey === moduleLessons[moduleLessons.length - 1];
  const moduleHasQuiz = quizzes && quizzes[modNum];

  // Check access
  useEffect(() => {
    const codeFromUrl = searchParams.get("code");
    const stored = localStorage.getItem(`${STORAGE_PREFIX}${slug}`);
    const code = codeFromUrl || stored;

    if (code) {
      fetch(`/api/access?code=${code}&course=${slug}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.valid) {
            if (codeFromUrl)
              localStorage.setItem(`${STORAGE_PREFIX}${slug}`, codeFromUrl);
            setAuthorized(true);
          }
          setChecking(false);
        })
        .catch(() => {
          if (stored) setAuthorized(true);
          setChecking(false);
        });
    } else {
      setChecking(false);
    }
  }, [slug, searchParams]);

  // Load completion state (localStorage first, then server)
  useEffect(() => {
    if (!authorized) return;
    const saved = localStorage.getItem(`${PROGRESS_PREFIX}${slug}`);
    if (saved) {
      try {
        const arr = JSON.parse(saved) as string[];
        setCompleted(arr.includes(lessonKey));
      } catch {
        /* ignore */
      }
    }
    hydrateFromServer(slug).then(({ lessons }) => {
      setCompleted(lessons.includes(lessonKey));
    });
  }, [authorized, slug, lessonKey]);

  const toggleComplete = () => {
    if (completed) {
      syncLessonUncomplete(slug, lessonKey);
    } else {
      syncLessonComplete(slug, lessonKey);
    }
    setCompleted(!completed);
  };

  const code = typeof window !== "undefined" ? localStorage.getItem(`${STORAGE_PREFIX}${slug}`) : "";
  const codeParam = code ? `?code=${code}` : "";

  if (!course || !lesson) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center cursor-none">
        <CustomCursor />
        <p className="text-text-secondary">Lesson not found.</p>
      </div>
    );
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center cursor-none">
        <CustomCursor />
        <p className="text-text-secondary text-sm font-mono">
          Verifying access...
        </p>
      </div>
    );
  }

  if (!authorized) {
    router.push(`/learn/${slug}`);
    return null;
  }

  // Course gating: check if previous course is fully completed
  if (prevCourse) {
    const prevKeys = getLessonKeys(prevCourse.slug);
    const prevModuleNums = prevCourse.modules.map((m) => m.num);
    if (!isCourseFullyCompleted(prevCourse.slug, prevKeys, prevModuleNums)) {
      router.push(`/learn/${slug}`);
      return null;
    }
  }

  // Lesson gating: check if all prior lessons (+ quizzes) are completed
  if (currentIdx > 0) {
    const savedProgress = localStorage.getItem(`${PROGRESS_PREFIX}${slug}`);
    let completedLessons: string[] = [];
    try {
      completedLessons = savedProgress ? JSON.parse(savedProgress) : [];
    } catch { /* ignore */ }
    const qp = getQuizProgress(slug);

    for (let i = 0; i < currentIdx; i++) {
      if (!completedLessons.includes(allKeys[i])) {
        router.push(`/learn/${slug}${codeParam}`);
        return null;
      }
      // If crossing module boundary, check quiz
      const [prevMod] = allKeys[i].split("-");
      const [nextMod] = (allKeys[i + 1] ?? "").split("-");
      if (prevMod !== nextMod && quizzes && quizzes[prevMod] && !qp[prevMod]?.passed) {
        router.push(`/learn/${slug}${codeParam}`);
        return null;
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] cursor-none">
      <CustomCursor />
      <div className="max-w-[700px] mx-auto px-6 py-10">
        {/* Nav */}
        <Link
          href={`/learn/${slug}${codeParam}`}
          className="text-text-muted text-[12px] font-mono hover:text-accent transition-colors"
        >
          ← Back to {course.title}
        </Link>

        {/* Module + Lesson header */}
        <div className="mt-8 mb-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-3">
            Module {modNum} — {mod?.title}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-text tracking-[-0.03em] mb-3">
            {lesson.title}
          </h1>
          <div className="flex items-center gap-4 text-text-muted text-[12px] font-mono">
            <span>{lesson.duration}</span>
            <span className="w-px h-3 bg-border" />
            <span>
              Lesson {currentIdx + 1} of {allKeys.length}
            </span>
          </div>
        </div>

        {/* Video placeholder */}
        <div className="mb-10 rounded-2xl border border-border bg-surface/30 overflow-hidden">
          <div className="aspect-video flex items-center justify-center bg-surface-2/50">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-surface-3 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl text-text-muted">▶</span>
              </div>
              <p className="text-text-muted text-[13px] font-mono">
                Video coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Written content */}
        <div className="mb-10">{renderContent(lesson.content)}</div>

        {/* Key takeaways */}
        <div className="mb-10 p-6 border border-border rounded-2xl bg-surface/20">
          <h3 className="text-[11px] tracking-[0.5em] uppercase font-mono text-accent mb-4">
            Key Takeaways
          </h3>
          <div className="space-y-3">
            {lesson.takeaways.map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-accent text-[11px] font-mono mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] text-text-secondary leading-snug">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise */}
        {lesson.exercise && (
          <div className="mb-10 p-6 border border-accent/20 rounded-2xl bg-accent/[0.03]">
            <h3 className="text-[11px] tracking-[0.5em] uppercase font-mono text-accent mb-3">
              Exercise
            </h3>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              {lesson.exercise}
            </p>
          </div>
        )}

        {/* Mark complete */}
        <div className="mb-10 flex justify-center">
          <button
            onClick={toggleComplete}
            className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all ${
              completed
                ? "bg-accent/10 text-accent border border-accent/30"
                : "bg-accent text-white hover:bg-accent/80"
            }`}
          >
            {completed ? "✓ Completed" : "Mark as Complete"}
          </button>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center justify-between border-t border-border pt-8">
          {prevKey ? (
            <Link
              href={`/learn/${slug}/${prevKey}${codeParam}`}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
            >
              <span className="text-sm group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              <span className="text-[13px] font-mono">Previous</span>
            </Link>
          ) : (
            <div />
          )}
          {isLastInModule && moduleHasQuiz ? (
            <Link
              href={`/learn/${slug}/quiz/${modNum}${codeParam}`}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
            >
              <span className="text-[13px] font-mono font-medium">
                Take Module Quiz
              </span>
              <span className="text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ) : nextKey ? (
            <Link
              href={`/learn/${slug}/${nextKey}${codeParam}`}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
            >
              <span className="text-[13px] font-mono">Next</span>
              <span className="text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ) : (
            <Link
              href={`/learn/${slug}${codeParam}`}
              className="text-accent text-[13px] font-mono hover:underline"
            >
              Back to Dashboard →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
