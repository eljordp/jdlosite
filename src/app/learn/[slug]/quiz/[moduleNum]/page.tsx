"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getCourse, courses } from "@/lib/courses";
import { getModuleQuiz, getLessonKeys } from "@/lib/content";
import {
  isModuleQuizPassed,
  saveQuizPass,
  getQuizProgress,
  isCourseFullyCompleted,
} from "@/lib/quiz-progress";
import { syncQuizPass } from "@/lib/progress-sync";
import CustomCursor from "@/components/CustomCursor";

const STORAGE_PREFIX = "jdlo_access_";

export default function QuizPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = params.slug as string;
  const moduleNum = params.moduleNum as string;

  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [wrongIndices, setWrongIndices] = useState<number[]>([]);
  const [passed, setPassed] = useState(false);
  const [alreadyPassed, setAlreadyPassed] = useState(false);

  const course = getCourse(slug);
  const quiz = getModuleQuiz(slug, moduleNum);
  const mod = course?.modules.find((m) => m.num === moduleNum);

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

  // Check if already passed
  useEffect(() => {
    if (!authorized) return;
    if (isModuleQuizPassed(slug, moduleNum)) {
      setAlreadyPassed(true);
      const progress = getQuizProgress(slug);
      const saved = progress[moduleNum]?.answers;
      if (saved) setAnswers(saved);
    }
  }, [authorized, slug, moduleNum]);

  const code =
    typeof window !== "undefined"
      ? localStorage.getItem(`${STORAGE_PREFIX}${slug}`)
      : "";
  const codeParam = code ? `?code=${code}` : "";

  if (!course || !quiz || !mod) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center cursor-none">
        <CustomCursor />
        <p className="text-text-secondary">Quiz not found.</p>
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

  // Course gating (skip if course.gated === false)
  const courseIdx = courses.findIndex((c) => c.slug === slug);
  const isGated = course?.gated !== false;
  const prevCourse = isGated && courseIdx > 0 ? courses[courseIdx - 1] : null;
  if (prevCourse) {
    const prevKeys = getLessonKeys(prevCourse.slug);
    const prevModuleNums = prevCourse.modules.map((m) => m.num);
    if (!isCourseFullyCompleted(prevCourse.slug, prevKeys, prevModuleNums)) {
      router.push(`/learn/${slug}`);
      return null;
    }
  }

  const handleSubmit = () => {
    const wrong: number[] = [];

    quiz.questions.forEach((q, i) => {
      if (q.type === "mc") {
        if (answers[i] !== q.correctIndex) wrong.push(i);
      } else if (q.type === "short") {
        const text = (answers[i] as string) || "";
        if (text.trim().length < q.minLength) wrong.push(i);
      }
    });

    setWrongIndices(wrong);
    setSubmitted(true);

    if (wrong.length === 0) {
      setPassed(true);
      saveQuizPass(slug, moduleNum, answers);
      syncQuizPass(slug, moduleNum, answers, quiz.questions.length);
    }
  };

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

        {/* Header */}
        <div className="mt-8 mb-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-3">
            Module {moduleNum} — {mod.title}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-text tracking-[-0.03em] mb-3">
            {quiz.title}
          </h1>
          <p className="text-text-muted text-[12px] font-mono">
            {quiz.questions.length} questions
          </p>
        </div>

        {/* Already passed banner */}
        {alreadyPassed && !passed && (
          <div className="mb-8 p-5 border border-accent/30 rounded-2xl bg-accent/[0.05] text-center">
            <div className="text-3xl text-accent mb-2">&#10003;</div>
            <p className="text-text font-semibold mb-1">
              You&apos;ve passed this quiz
            </p>
            <p className="text-text-muted text-[13px]">
              Your answers are shown below.
            </p>
          </div>
        )}

        {/* Just passed banner */}
        {passed && (
          <div className="mb-8 p-5 border border-accent/30 rounded-2xl bg-accent/[0.05] text-center">
            <div className="text-3xl text-accent mb-2">&#10003;</div>
            <p className="text-text font-semibold mb-1">Quiz passed!</p>
            <p className="text-text-muted text-[13px] mb-4">
              Nice work. Keep going.
            </p>
            <Link
              href={`/learn/${slug}${codeParam}`}
              className="inline-block py-2.5 px-6 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              Continue →
            </Link>
          </div>
        )}

        {/* Questions */}
        <div className="space-y-8">
          {quiz.questions.map((q, i) => {
            const isWrong = submitted && wrongIndices.includes(i);
            const isReadOnly = alreadyPassed || passed;

            return (
              <div
                key={i}
                className={`p-6 border rounded-2xl transition-colors ${
                  isWrong
                    ? "border-red-400/40 bg-red-400/[0.03]"
                    : "border-border bg-surface/20"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-accent text-[11px] font-mono mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] text-text leading-relaxed">
                    {q.question}
                  </p>
                </div>

                {q.type === "mc" && (
                  <div className="space-y-2 ml-7">
                    {q.options.map((opt, j) => {
                      const selected = answers[i] === j;
                      return (
                        <button
                          key={j}
                          disabled={isReadOnly}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, [i]: j }))
                          }
                          className={`w-full text-left px-4 py-3 rounded-xl border text-[14px] transition-all ${
                            selected
                              ? "border-accent bg-accent/10 text-text"
                              : "border-border bg-surface/30 text-text-secondary hover:border-accent/40"
                          } ${isReadOnly ? "opacity-70 cursor-default" : ""}`}
                        >
                          <span className="text-accent text-[11px] font-mono mr-3">
                            {String.fromCharCode(65 + j)}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {q.type === "short" && (
                  <div className="ml-7">
                    <textarea
                      disabled={isReadOnly}
                      value={(answers[i] as string) || ""}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [i]: e.target.value,
                        }))
                      }
                      placeholder="Write your answer..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface/30 text-text text-[14px] leading-relaxed resize-none focus:border-accent focus:outline-none disabled:opacity-70"
                    />
                    <div className="flex justify-between mt-1">
                      <p className="text-text-muted text-[11px] font-mono">
                        Min {q.minLength} characters
                      </p>
                      <p
                        className={`text-[11px] font-mono ${
                          ((answers[i] as string) || "").length >= q.minLength
                            ? "text-accent"
                            : "text-text-muted"
                        }`}
                      >
                        {((answers[i] as string) || "").length}/{q.minLength}
                      </p>
                    </div>
                  </div>
                )}

                {isWrong && (
                  <p className="text-red-400 text-[12px] font-mono mt-2 ml-7">
                    {q.type === "mc"
                      ? "Incorrect — try again"
                      : "Answer too short"}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit */}
        {!alreadyPassed && !passed && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              Submit Quiz
            </button>
          </div>
        )}

        {submitted && !passed && wrongIndices.length > 0 && (
          <p className="text-center text-text-muted text-[13px] mt-4">
            {wrongIndices.length} question
            {wrongIndices.length > 1 ? "s" : ""} need attention. Fix and
            resubmit.
          </p>
        )}
      </div>
    </div>
  );
}
