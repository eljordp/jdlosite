'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { courseData, getTotalLessons } from '@/lib/courseData';

const STORAGE_KEY = 'academy-completed-lessons';

export function useCompletedLessons() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(new Set(JSON.parse(raw)));
    } catch {
      // ignore
    }
  }, []);

  return { completed, mounted };
}

export default function AcademyModules() {
  const { completed, mounted } = useCompletedLessons();
  const totalLessons = getTotalLessons();
  const completedCount = mounted ? completed.size : 0;

  return (
    <div>
      {/* Overall progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono text-[#888] tracking-[0.3em] uppercase">
            Course Progress
          </span>
          <span className="text-[11px] font-mono text-[#888]">
            {completedCount} of {totalLessons} lessons completed
          </span>
        </div>
        <div className="h-[2px] bg-[#e5e5e5] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1a1a1a] rounded-full transition-all duration-500"
            style={{ width: `${totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Module cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {courseData.map((mod) => {
          const modCompleted = mounted
            ? mod.lessons.filter((_, i) => completed.has(`${mod.num}-${i}`)).length
            : 0;
          const modTotal = mod.lessons.length;

          return (
            <div
              key={mod.num}
              className="bg-white border border-[#e5e5e5] rounded-2xl p-6 flex flex-col"
            >
              {/* Module header */}
              <div className="mb-5">
                <span className="text-[11px] font-mono text-[#888] tracking-[0.3em]">
                  {mod.num}
                </span>
                <h2 className="font-display text-[1.4rem] tracking-[-0.02em] text-[#1a1a1a] mt-1 leading-tight">
                  {mod.title}
                </h2>
                <p className="text-[13px] text-[#555] mt-2 leading-relaxed">
                  {mod.description}
                </p>
              </div>

              {/* Lesson list */}
              <div className="flex-1 space-y-1">
                {mod.lessons.map((lesson, i) => {
                  const key = `${mod.num}-${i}`;
                  const isDone = mounted && completed.has(key);

                  return (
                    <Link
                      key={i}
                      href={`/academy/lesson/${mod.num}/${i}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f9f9f9] transition-colors duration-150 group border-l-2 border-transparent hover:border-[#e5e5e5]"
                    >
                      {/* Completion dot */}
                      <span className="w-4 shrink-0 flex items-center justify-center">
                        {isDone ? (
                          <span className="w-2 h-2 rounded-full bg-green-500 block" />
                        ) : (
                          <span className="text-[10px] font-mono text-[#bbb]">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        )}
                      </span>

                      {/* Title */}
                      <span className="text-[13px] text-[#333] group-hover:text-[#1a1a1a] transition-colors flex-1 leading-snug">
                        {lesson.title}
                      </span>

                      {/* Reading time */}
                      <span className="text-[11px] font-mono text-[#bbb] shrink-0 ml-2">
                        {lesson.readingTime}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Module progress footer */}
              <div className="mt-5 pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#bbb]">
                  {modCompleted}/{modTotal} lessons
                </span>
                {modCompleted > 0 && (
                  <span className="text-[11px] font-mono text-green-600">
                    {Math.round((modCompleted / modTotal) * 100)}% done
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
