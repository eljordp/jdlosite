import { createClient } from "@/lib/supabase/client";

const PROGRESS_PREFIX = "jdlo_progress_";
const QUIZ_PREFIX = "jdlo_quizzes_";

type QuizProgressEntry = {
  passed: boolean;
  passedAt: string;
  answers: Record<number, string | number>;
};

export type QuizProgress = Record<string, QuizProgressEntry>;

function isAuthenticated(): boolean {
  try {
    const supabase = createClient();
    // Check synchronously via stored session
    const key = Object.keys(localStorage).find((k) =>
      k.startsWith("sb-") && k.endsWith("-auth-token")
    );
    return !!key && !!localStorage.getItem(key);
  } catch {
    return false;
  }
}

// ── Lesson Progress ──

export async function fetchProgress(slug: string): Promise<string[]> {
  try {
    const res = await fetch(`/api/progress/${slug}`);
    if (!res.ok) return getLocalProgress(slug);
    const data = await res.json();
    const lessons: string[] = (data.lessons ?? []).map(
      (l: { lesson_key: string }) => l.lesson_key
    );
    localStorage.setItem(`${PROGRESS_PREFIX}${slug}`, JSON.stringify(lessons));
    return lessons;
  } catch {
    return getLocalProgress(slug);
  }
}

export function getLocalProgress(slug: string): string[] {
  const raw = localStorage.getItem(`${PROGRESS_PREFIX}${slug}`);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function syncLessonComplete(
  slug: string,
  lessonKey: string
): Promise<void> {
  // Update localStorage immediately
  const arr = getLocalProgress(slug);
  if (!arr.includes(lessonKey)) {
    arr.push(lessonKey);
    localStorage.setItem(`${PROGRESS_PREFIX}${slug}`, JSON.stringify(arr));
  }
  // Sync to server
  if (!isAuthenticated()) return;
  try {
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ course_slug: slug, lesson_key: lessonKey }),
    });
  } catch {
    // localStorage is already updated, server sync can retry later
  }
}

export async function syncLessonUncomplete(
  slug: string,
  lessonKey: string
): Promise<void> {
  // Update localStorage immediately
  const arr = getLocalProgress(slug).filter((k) => k !== lessonKey);
  localStorage.setItem(`${PROGRESS_PREFIX}${slug}`, JSON.stringify(arr));
  // Sync to server
  if (!isAuthenticated()) return;
  try {
    await fetch("/api/progress", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ course_slug: slug, lesson_key: lessonKey }),
    });
  } catch {
    // localStorage is already updated
  }
}

// ── Quiz Progress ──

export async function fetchQuizResults(slug: string): Promise<QuizProgress> {
  try {
    const res = await fetch(`/api/quiz-progress/${slug}`);
    if (!res.ok) return getLocalQuizProgress(slug);
    const data = await res.json();
    const results: QuizProgress = {};
    for (const r of data.results ?? []) {
      results[r.module_num] = {
        passed: r.passed,
        passedAt: r.completed_at,
        answers: r.answers ?? {},
      };
    }
    localStorage.setItem(`${QUIZ_PREFIX}${slug}`, JSON.stringify(results));
    return results;
  } catch {
    return getLocalQuizProgress(slug);
  }
}

function getLocalQuizProgress(slug: string): QuizProgress {
  const raw = localStorage.getItem(`${QUIZ_PREFIX}${slug}`);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export async function syncQuizPass(
  slug: string,
  moduleNum: string,
  answers: Record<number, string | number>,
  totalQuestions: number
): Promise<void> {
  // localStorage is already updated by saveQuizPass()
  if (!isAuthenticated()) return;
  try {
    await fetch("/api/quiz-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course_slug: slug,
        module_num: moduleNum,
        passed: true,
        score: totalQuestions,
        answers,
      }),
    });
  } catch {
    // localStorage is already updated
  }
}

// ── Full Hydration ──

export async function hydrateFromServer(
  slug: string
): Promise<{ lessons: string[]; quizzes: QuizProgress }> {
  if (!isAuthenticated()) {
    return {
      lessons: getLocalProgress(slug),
      quizzes: getLocalQuizProgress(slug),
    };
  }
  const [lessons, quizzes] = await Promise.all([
    fetchProgress(slug),
    fetchQuizResults(slug),
  ]);
  return { lessons, quizzes };
}
