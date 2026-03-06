"use client";

import { useEffect } from "react";
import { courses } from "@/lib/courses";

const PROGRESS_PREFIX = "jdlo_progress_";
const QUIZ_PREFIX = "jdlo_quizzes_";

export default function ProgressMigration() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("jdlo_migrated")) return;

    async function migrate() {
      for (const course of courses) {
        const slug = course.slug;

        // Migrate lesson progress
        const progressRaw = localStorage.getItem(`${PROGRESS_PREFIX}${slug}`);
        if (progressRaw) {
          try {
            const lessons: string[] = JSON.parse(progressRaw);
            for (const lessonKey of lessons) {
              await fetch("/api/progress", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  course_slug: slug,
                  lesson_key: lessonKey,
                }),
              }).catch(() => {});
            }
          } catch {
            // skip malformed data
          }
        }

        // Migrate quiz progress
        const quizRaw = localStorage.getItem(`${QUIZ_PREFIX}${slug}`);
        if (quizRaw) {
          try {
            const quizzes = JSON.parse(quizRaw);
            for (const [moduleNum, data] of Object.entries(quizzes)) {
              const qd = data as {
                passed: boolean;
                answers: Record<number, string | number>;
              };
              if (qd.passed) {
                await fetch("/api/quiz-progress", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    course_slug: slug,
                    module_num: moduleNum,
                    passed: true,
                    score: Object.keys(qd.answers).length,
                    answers: qd.answers,
                  }),
                }).catch(() => {});
              }
            }
          } catch {
            // skip malformed data
          }
        }
      }

      localStorage.setItem("jdlo_migrated", "1");
    }

    migrate();
  }, []);

  return null;
}
