"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getCourse, courses } from "@/lib/courses";
import { getCourseContent, getLessonKeys, getCourseQuizzes } from "@/lib/content";
import {
  isModuleQuizPassed,
  isCourseFullyCompleted,
  getQuizProgress,
} from "@/lib/quiz-progress";
import { hydrateFromServer } from "@/lib/progress-sync";
import ProgressMigration from "@/components/ProgressMigration";
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
  const [quizzesPassed, setQuizzesPassed] = useState<Record<string, boolean>>(
    {}
  );

  const course = getCourse(slug);
  const content = getCourseContent(slug);
  const lessonKeys = getLessonKeys(slug);
  const quizzes = getCourseQuizzes(slug);

  // Course gating: find previous course (skip if course.gated === false)
  const courseIdx = courses.findIndex((c) => c.slug === slug);
  const isGated = course?.gated !== false;
  const prevCourse = isGated && courseIdx > 0 ? courses[courseIdx - 1] : null;

  // Check access
  useEffect(() => {
    const codeFromUrl = searchParams.get("code");
    const stored = localStorage.getItem(`${STORAGE_PREFIX}${slug}`);

    if (codeFromUrl) {
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
          setAuthorized(true);
          setChecking(false);
        });
    } else {
      setChecking(false);
    }
  }, [slug, searchParams]);

  // Load progress (localStorage first, then hydrate from server)
  useEffect(() => {
    if (!authorized) return;
    // Instant read from localStorage
    const saved = localStorage.getItem(`${PROGRESS_PREFIX}${slug}`);
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved));
      } catch {
        /* ignore */
      }
    }
    if (course) {
      const qp = getQuizProgress(slug);
      const passed: Record<string, boolean> = {};
      course.modules.forEach((mod) => {
        passed[mod.num] = qp[mod.num]?.passed === true;
      });
      setQuizzesPassed(passed);
    }
    // Then hydrate from server (updates localStorage + state)
    hydrateFromServer(slug).then(({ lessons, quizzes }) => {
      setCompletedLessons(lessons);
      if (course) {
        const passed: Record<string, boolean> = {};
        course.modules.forEach((mod) => {
          passed[mod.num] = quizzes[mod.num]?.passed === true;
        });
        setQuizzesPassed(passed);
      }
    });
  }, [authorized, slug, course]);

  // Check if previous course is fully completed (course gating)
  const [prevCourseCompleted, setPrevCourseCompleted] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    if (!prevCourse) {
      setPrevCourseCompleted(true);
      return;
    }
    // Check if previous course is fully completed
    const prevKeys = getLessonKeys(prevCourse.slug);
    const prevModuleNums = prevCourse.modules.map((m) => m.num);
    const completed = isCourseFullyCompleted(
      prevCourse.slug,
      prevKeys,
      prevModuleNums
    );
    setPrevCourseCompleted(completed);
  }, [prevCourse]);

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

  // Course gating — show locked screen if previous course not done
  if (prevCourse && prevCourseCompleted === false) {
    const prevKeys = getLessonKeys(prevCourse.slug);
    const prevSaved = localStorage.getItem(
      `${PROGRESS_PREFIX}${prevCourse.slug}`
    );
    let prevCompleted: string[] = [];
    try {
      prevCompleted = prevSaved ? JSON.parse(prevSaved) : [];
    } catch {
      /* ignore */
    }
    const prevQuizProgress = getQuizProgress(prevCourse.slug);
    const prevQuizzesPassed = prevCourse.modules.filter(
      (m) => prevQuizProgress[m.num]?.passed
    ).length;
    const prevTotal = prevKeys.length + prevCourse.modules.length;
    const prevDone = prevCompleted.length + prevQuizzesPassed;
    const prevPercent = prevTotal > 0 ? (prevDone / prevTotal) * 100 : 0;

    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 cursor-none">
        <CustomCursor />
        <div className="max-w-md w-full text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-text mb-3">{course.title}</h1>
          <p className="text-text-secondary text-sm mb-6">
            Complete <strong className="text-text">{prevCourse.title}</strong> to
            unlock this course.
          </p>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-text-muted text-[12px] font-mono">
                {prevCourse.title} Progress
              </span>
              <span className="text-text-muted text-[12px] font-mono">
                {prevDone}/{prevTotal}
              </span>
            </div>
            <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-500"
                style={{ width: `${prevPercent}%` }}
              />
            </div>
          </div>
          <Link
            href={`/learn/${prevCourse.slug}`}
            className="inline-block py-2.5 px-6 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #2997ff, #0a84ff)",
            }}
          >
            Continue {prevCourse.title} →
          </Link>
        </div>
      </div>
    );
  }

  // Authorized — show course dashboard
  const totalModules = course.modules.length;
  const totalItems = lessonKeys.length + totalModules; // lessons + quizzes
  const passedQuizCount = Object.values(quizzesPassed).filter(Boolean).length;
  const completedItems = completedLessons.length + passedQuizCount;
  const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  const code = localStorage.getItem(`${STORAGE_PREFIX}${slug}`);
  const codeParam = code ? `?code=${code}` : "";

  return (
    <div className="min-h-screen bg-[#050505] cursor-none">
      <CustomCursor />
      <ProgressMigration />
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
              {completedItems}/{totalItems}
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
            const quizPassed = quizzesPassed[mod.num] === true;
            const hasQuiz = quizzes && quizzes[mod.num];
            const allDone =
              moduleCompleted === moduleLessons.length &&
              (!hasQuiz || quizPassed);

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
                      {moduleCompleted + (quizPassed ? 1 : 0)}/
                      {moduleLessons.length + (hasQuiz ? 1 : 0)}
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

                    return (
                      <Link
                        key={key}
                        href={`/learn/${slug}/${key}${codeParam}`}
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

                  {/* Quiz row */}
                  {hasQuiz && (
                    <Link
                      href={`/learn/${slug}/quiz/${mod.num}${codeParam}`}
                      className="flex items-center gap-4 px-6 py-4 hover:bg-surface/50 transition-colors group bg-accent/[0.02]"
                    >
                      <span
                        className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 text-[11px] font-mono ${
                          quizPassed
                            ? "bg-accent border-accent text-white"
                            : "border-accent/40 text-accent"
                        }`}
                      >
                        {quizPassed ? "✓" : "?"}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] text-accent group-hover:text-accent transition-colors truncate font-medium">
                          Module {mod.num} Quiz
                        </p>
                        <p className="text-text-muted text-[11px] font-mono">
                          {quizPassed ? "Passed" : `${quizzes[mod.num].questions.length} questions`}
                        </p>
                      </div>
                      <span className="text-accent text-sm group-hover:translate-x-0.5 transition-transform shrink-0">
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next course teaser */}
        {progress === 100 && courseIdx < courses.length - 1 && (
          <div className="mt-8 p-6 border border-accent/30 rounded-2xl bg-accent/[0.05] text-center">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-mono mb-2">
              Next Course Unlocked
            </p>
            <h3 className="text-lg font-semibold text-text mb-3">
              {courses[courseIdx + 1].title}
            </h3>
            <Link
              href={`/learn/${courses[courseIdx + 1].slug}${codeParam}`}
              className="inline-block py-2.5 px-6 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              Start {courses[courseIdx + 1].title} →
            </Link>
          </div>
        )}

        {/* Pipeline reminder */}
        <div className="mt-12 p-8 border border-border rounded-2xl bg-surface/20 text-center">
          <h3 className="text-lg font-semibold text-text mb-2">
            The Pipeline
          </h3>
          <p className="text-text-secondary text-[14px] leading-relaxed max-w-md mx-auto">
            Complete every lesson and pass every quiz → get assigned a real paid
            project → top performers join the team. This isn&apos;t a
            certificate. It&apos;s a direct pipeline into real work.
          </p>
        </div>
      </div>
    </div>
  );
}
