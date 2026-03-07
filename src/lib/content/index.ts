import type { CourseContent, CourseQuizzes, ModuleQuiz } from "./types";
import { aiAutomation } from "./ai-automation";
import { salesSystems } from "./sales-systems";
import { operatorPlaybook } from "./operator-playbook";
import { aiMastery } from "./ai-mastery";
import { aiAutomationQuizzes } from "./ai-automation";
import { salesSystemsQuizzes } from "./sales-systems";
import { operatorPlaybookQuizzes } from "./operator-playbook";
import { aiMasteryQuizzes } from "./ai-mastery";

export type {
  LessonData,
  CourseContent,
  CourseQuizzes,
  ModuleQuiz,
  QuizQuestion,
  MultipleChoiceQuestion,
  ShortAnswerQuestion,
} from "./types";

const allContent: Record<string, CourseContent> = {
  "ai-automation": aiAutomation,
  "sales-systems": salesSystems,
  "operator-playbook": operatorPlaybook,
  "ai-mastery": aiMastery,
};

const allQuizzes: Record<string, CourseQuizzes> = {
  "ai-automation": aiAutomationQuizzes,
  "sales-systems": salesSystemsQuizzes,
  "operator-playbook": operatorPlaybookQuizzes,
  "ai-mastery": aiMasteryQuizzes,
};

export function getLessonContent(courseSlug: string, lessonKey: string) {
  return allContent[courseSlug]?.[lessonKey] ?? null;
}

export function getCourseContent(courseSlug: string) {
  return allContent[courseSlug] ?? null;
}

export function getLessonKeys(courseSlug: string): string[] {
  const content = allContent[courseSlug];
  if (!content) return [];
  return Object.keys(content).sort((a, b) => {
    const [am, al] = a.split("-").map(Number);
    const [bm, bl] = b.split("-").map(Number);
    return am !== bm ? am - bm : al - bl;
  });
}

export function getModuleQuiz(
  courseSlug: string,
  moduleNum: string
): ModuleQuiz | null {
  return allQuizzes[courseSlug]?.[moduleNum] ?? null;
}

export function getCourseQuizzes(courseSlug: string): CourseQuizzes | null {
  return allQuizzes[courseSlug] ?? null;
}
