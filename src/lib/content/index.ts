import type { CourseContent } from "./types";
import { aiAutomation } from "./ai-automation";
import { salesSystems } from "./sales-systems";
import { promptEngineering } from "./prompt-engineering";
import { contentBrand } from "./content-brand";
import { teamOperations } from "./team-operations";
import { personalGrowth } from "./personal-growth";
import { operatorPlaybook } from "./operator-playbook";

export type { LessonData, CourseContent } from "./types";

const allContent: Record<string, CourseContent> = {
  "ai-automation": aiAutomation,
  "sales-systems": salesSystems,
  "prompt-engineering": promptEngineering,
  "content-brand": contentBrand,
  "team-operations": teamOperations,
  "personal-growth": personalGrowth,
  "operator-playbook": operatorPlaybook,
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
