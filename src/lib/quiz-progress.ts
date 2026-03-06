const QUIZ_PREFIX = "jdlo_quizzes_";
const PROGRESS_PREFIX = "jdlo_progress_";

export type QuizProgress = Record<
  string,
  {
    passed: boolean;
    passedAt: string;
    answers: Record<number, string | number>;
  }
>;

export function getQuizProgress(slug: string): QuizProgress {
  const raw = localStorage.getItem(`${QUIZ_PREFIX}${slug}`);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function isModuleQuizPassed(slug: string, moduleNum: string): boolean {
  return getQuizProgress(slug)[moduleNum]?.passed === true;
}

export function areAllQuizzesPassed(
  slug: string,
  moduleNums: string[]
): boolean {
  const progress = getQuizProgress(slug);
  return moduleNums.every((num) => progress[num]?.passed === true);
}

export function saveQuizPass(
  slug: string,
  moduleNum: string,
  answers: Record<number, string | number>
): void {
  const progress = getQuizProgress(slug);
  progress[moduleNum] = {
    passed: true,
    passedAt: new Date().toISOString(),
    answers,
  };
  localStorage.setItem(`${QUIZ_PREFIX}${slug}`, JSON.stringify(progress));
}

export function isCourseFullyCompleted(
  slug: string,
  lessonKeys: string[],
  moduleNums: string[]
): boolean {
  // All lessons completed
  const lessonRaw = localStorage.getItem(`${PROGRESS_PREFIX}${slug}`);
  let completedLessons: string[] = [];
  try {
    completedLessons = lessonRaw ? JSON.parse(lessonRaw) : [];
  } catch {
    /* ignore */
  }
  const allLessonsDone = lessonKeys.every((k) =>
    completedLessons.includes(k)
  );

  // All quizzes passed
  const allQuizzesDone = areAllQuizzesPassed(slug, moduleNums);

  return allLessonsDone && allQuizzesDone;
}
