"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getCourse } from "@/lib/courses";
import { getCourseContent, getLessonKeys } from "@/lib/content";
import CustomCursor from "@/components/CustomCursor";

const STORAGE_PREFIX = "jdlo_access_";
const PROGRESS_PREFIX = "jdlo_progress_";

export default function LearnDashboard() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const course = getCourse(slug);
  const content = getCourseContent(slug);
  const lessonKeys = getLessonKeys(slug);

  // Check access
  useEffect(() => {
    const codeFromUrl = searchParams.get("code");
    const stored = localStorage.getItem(`${STORAGE_PREFIX}${slug}`);

    if (codeFromUrl) {
      // Validate code via API
      fetch(`/api/access?code=${codeFromUrl}&course=${slug}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.valid) {
            localStorage.setItem(`${STORAGE_PREFIX}${slug}`, codeFromUrl);
            setAuthorized(true);
          }
          setChecking(false);
        })
        .catch(() => setChecking(false));
    } else if (stored) {
      // Re-validate stored code
      fetch(`/api/access?code=${stored}&course=${slug}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.valid) {
            setAuthorized(true);
          } else {
            localStorage.removeItem(`${STORAGE_PREFIX}${slug}`);
          }
          setChecking(false);
        })
        .catch(() => {
          // Offline? Trust localStorage
          setAuthorized(true);
          setChecking(false);
        });
    } else {
      setChecking(false);
    }
  }, [slug, searchParams]);

  // Load progress
  useEffect(() => {
    if (!authorized) return;
    const saved = localStorage.getItem(`${PROGRESS_PREFIX}${slug}`);
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved));
      } catch {
        /* ignore */
      }
    }
  }, [authorized, slug]);

  if (!course || !content) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center cursor-none">
        <CustomCursor />
        <p className="text-text-secondary">Course not found.</p>
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
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 cursor-none">
        <CustomCursor />
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-text mb-3">{course.title}</h1>
          <p className="text-text-secondary text-sm mb-8">
            You need access to view this course. Purchase the course to get your
            access link.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href={`/checkout?course=${encodeURIComponent(course.title)}&price=${encodeURIComponent(course.price)}&amount=${course.amount}`}
              className="magnetic-btn"
            >
              Buy Now — {course.price}
            </Link>
            <Link
              href={`/courses/${slug}`}
              className="text-text-muted text-[13px] font-mono hover:text-accent transition-colors"
            >
              View course details →
            </Link>
          </div>
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-text-muted text-[12px] mb-3">
              Already purchased? Enter your access code:
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const code = (
                  form.elements.namedItem("code") as HTMLInputElement
                ).value;
                if (code) {
                  router.push(`/learn/${slug}?code=${code}`);
                }
              }}
              className="flex gap-2 max-w-xs mx-auto"
            >
              <input
                name="code"
                type="text"
                placeholder="Access code"
                className="flex-1 px-3 py-2 bg-surface rounded-lg border border-border text-text text-sm font-mono focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/80 transition-colors"
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Authorized — show course dashboard
  const totalLessons = lessonKeys.length;
  const completed = completedLessons.length;
  const progress = totalLessons > 0 ? (completed / totalLessons) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#050505] cursor-none">
      <CustomCursor />
      <div className="max-w-[800px] mx-auto px-6 py-10">
        {/* Header */}
        <Link
          href="/"
          className="text-text-muted text-[12px] font-mono hover:text-accent transition-colors"
        >
          ← Home
        </Link>

        <div className="mt-6 mb-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-3">
            Course
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text tracking-[-0.03em] mb-2">
            {course.title}
          </h1>
          <p className="text-text-secondary text-[15px]">{course.tagline}</p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-muted text-[12px] font-mono">
              Progress
            </span>
            <span className="text-text-muted text-[12px] font-mono">
              {completed}/{totalLessons} lessons
            </span>
          </div>
          <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <p className="text-accent text-[13px] font-semibold mt-3">
              Course complete — you&apos;re eligible for a paid project
              assignment.
            </p>
          )}
        </div>

        {/* Modules */}
        <div className="space-y-6">
          {course.modules.map((mod) => {
            const moduleLessons = lessonKeys.filter((k) =>
              k.startsWith(`${mod.num}-`)
            );
            const moduleCompleted = moduleLessons.filter((k) =>
              completedLessons.includes(k)
            ).length;
            const allDone = moduleCompleted === moduleLessons.length;

            return (
              <div
                key={mod.num}
                className="border border-border rounded-2xl overflow-hidden"
              >
                <div className="px-6 py-5 bg-surface/30 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-accent text-[12px] font-mono">
                      {mod.num}
                    </span>
                    <h2 className="text-lg font-semibold text-text tracking-[-0.02em]">
                      {mod.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-text-muted text-[11px] font-mono">
                      {moduleCompleted}/{moduleLessons.length}
                    </span>
                    {allDone && (
                      <span className="text-accent text-sm">&#10003;</span>
                    )}
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {mod.lessons.map((lessonTitle, j) => {
                    const key = `${mod.num}-${j + 1}`;
                    const lesson = content[key];
                    const done = completedLessons.includes(key);
                    const code = localStorage.getItem(
                      `${STORAGE_PREFIX}${slug}`
                    );

                    return (
                      <Link
                        key={key}
                        href={`/learn/${slug}/${key}${code ? `?code=${code}` : ""}`}
                        className="flex items-center gap-4 px-6 py-4 hover:bg-surface/50 transition-colors group"
                      >
                        <span
                          className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 text-[11px] font-mono ${
                            done
                              ? "bg-accent border-accent text-white"
                              : "border-border text-text-muted"
                          }`}
                        >
                          {done ? "✓" : j + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] text-text group-hover:text-accent transition-colors truncate">
                            {lessonTitle}
                          </p>
                          {lesson && (
                            <p className="text-text-muted text-[11px] font-mono">
                              {lesson.duration}
                            </p>
                          )}
                        </div>
                        <span className="text-text-muted text-sm group-hover:text-accent transition-colors shrink-0">
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pipeline reminder */}
        <div className="mt-12 p-8 border border-border rounded-2xl bg-surface/20 text-center">
          <h3 className="text-lg font-semibold text-text mb-2">
            The Pipeline
          </h3>
          <p className="text-text-secondary text-[14px] leading-relaxed max-w-md mx-auto">
            Complete every lesson → get assigned a real paid project → top
            performers join the team. This isn&apos;t a certificate. It&apos;s a
            direct pipeline into real work.
          </p>
        </div>
      </div>
    </div>
  );
}
