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

const STORAGE_PREFIX = "jdlo_access_";

export default function QuizPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = params.slug as string;
  const moduleNum = params.moduleNum as string;

  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
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
      setSubmitted(true);
      const progress = getQuizProgress(slug);
      const saved = progress[moduleNum]?.answers;
      if (saved) {
        const parsed: Record<number, number> = {};
        Object.entries(saved).forEach(([k, v]) => {
          parsed[Number(k)] = v as number;
        });
        setAnswers(parsed);
      }
    }
  }, [authorized, slug, moduleNum]);

  const code =
    typeof window !== "undefined"
      ? localStorage.getItem(`${STORAGE_PREFIX}${slug}`)
      : "";
  const codeParam = code ? `?code=${code}` : "";

  if (!course || !quiz || !mod) {
    return (
      <div className="light-mode min-h-screen bg-bg flex items-center justify-center">
        <p className="text-text-secondary">Quiz not found.</p>
      </div>
    );
  }

  if (checking) {
    return (
      <div className="light-mode min-h-screen bg-bg flex items-center justify-center">
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
    let correct = 0;
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) correct++;
    });

    const total = quiz.questions.length;
    setScore({ correct, total });
    setSubmitted(true);

    if (correct === total) {
      setPassed(true);
      saveQuizPass(slug, moduleNum, answers);
      syncQuizPass(slug, moduleNum, answers, total);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore({ correct: 0, total: 0 });
    setPassed(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
  const allAnswered = quiz.questions.every((_, i) => answers[i] !== undefined);

  return (
    <div className="light-mode min-h-screen bg-bg">
      <div className="max-w-[700px] mx-auto px-6 py-10">
        {/* Nav */}
        <Link
          href={`/learn/${slug}${codeParam}`}
          className="text-text-muted text-[12px] font-mono hover:text-accent transition-colors"
        >
          &larr; Back to {course.title}
        </Link>

        {/* Header */}
        <div className="mt-8 mb-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-3">
            Module {moduleNum} &mdash; {mod.title}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-text tracking-[-0.03em] mb-3">
            {quiz.title}
          </h1>
          <p className="text-text-muted text-[12px] font-mono">
            {quiz.questions.length} questions &middot; Multiple choice &middot; Must get 100% to pass
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
              Your answers and explanations are shown below.
            </p>
          </div>
        )}

        {/* Score banner after submit */}
        {submitted && !alreadyPassed && (
          <div className={`mb-8 p-5 border rounded-2xl text-center ${
            passed
              ? "border-accent/30 bg-accent/[0.05]"
              : "border-red-400/30 bg-red-400/[0.05]"
          }`}>
            {passed ? (
              <>
                <div className="text-3xl text-accent mb-2">&#10003;</div>
                <p className="text-text font-semibold mb-1">Quiz passed!</p>
                <p className="text-accent text-2xl font-bold font-mono mb-1">{pct}%</p>
                <p className="text-text-muted text-[13px] mb-4">
                  {score.correct}/{score.total} correct. Nice work.
                </p>
                <Link
                  href={`/learn/${slug}${codeParam}`}
                  className="inline-block py-2.5 px-6 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #2997ff, #0a84ff)",
                  }}
                >
                  Continue &rarr;
                </Link>
              </>
            ) : (
              <>
                <p className="text-red-400 text-2xl font-bold font-mono mb-1">{pct}%</p>
                <p className="text-text font-semibold mb-1">
                  {score.correct}/{score.total} correct
                </p>
                <p className="text-text-muted text-[13px] mb-4">
                  Review the explanations below, then retry.
                </p>
                <button
                  onClick={handleRetry}
                  className="inline-block py-2.5 px-6 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #2997ff, #0a84ff)",
                  }}
                >
                  Retry Quiz
                </button>
              </>
            )}
          </div>
        )}

        {/* Questions */}
        <div className="space-y-8">
          {quiz.questions.map((q, i) => {
            const userAnswer = answers[i];
            const isCorrect = submitted && userAnswer === q.correctIndex;
            const isWrong = submitted && userAnswer !== undefined && userAnswer !== q.correctIndex;
            const showExplanation = submitted;

            return (
              <div
                key={i}
                className={`p-6 border rounded-2xl transition-colors ${
                  submitted
                    ? isCorrect
                      ? "border-accent/40 bg-accent/[0.03]"
                      : isWrong
                      ? "border-red-400/40 bg-red-400/[0.03]"
                      : "border-border bg-surface/20"
                    : "border-border bg-surface/20"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className={`text-[11px] font-mono mt-0.5 shrink-0 ${
                    submitted ? (isCorrect ? "text-accent" : isWrong ? "text-red-400" : "text-accent") : "text-accent"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] text-text leading-relaxed">
                    {q.question}
                  </p>
                </div>

                <div className="space-y-2 ml-7">
                  {q.options.map((opt, j) => {
                    const selected = userAnswer === j;
                    const isThisCorrect = j === q.correctIndex;
                    const isReadOnly = submitted || alreadyPassed;

                    let optionStyle = "";
                    if (submitted) {
                      if (isThisCorrect) {
                        optionStyle = "border-accent bg-accent/10 text-text";
                      } else if (selected && !isThisCorrect) {
                        optionStyle = "border-red-400/60 bg-red-400/10 text-text line-through decoration-red-400/40";
                      } else {
                        optionStyle = "border-border/50 bg-surface/10 text-text-muted";
                      }
                    } else {
                      optionStyle = selected
                        ? "border-accent bg-accent/10 text-text"
                        : "border-border bg-surface/30 text-text-secondary hover:border-accent/40";
                    }

                    return (
                      <button
                        key={j}
                        disabled={isReadOnly}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, [i]: j }))
                        }
                        className={`w-full text-left px-4 py-3 rounded-xl border text-[14px] transition-all ${optionStyle} ${
                          isReadOnly ? "cursor-default" : ""
                        }`}
                      >
                        <span className={`text-[11px] font-mono mr-3 ${
                          submitted && isThisCorrect ? "text-accent" : submitted && selected && !isThisCorrect ? "text-red-400" : "text-accent"
                        }`}>
                          {submitted && isThisCorrect ? "\u2713" : submitted && selected && !isThisCorrect ? "\u2717" : String.fromCharCode(65 + j)}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showExplanation && q.explanation && (
                  <div className={`mt-4 ml-7 p-4 rounded-xl text-[13px] leading-relaxed ${
                    isCorrect
                      ? "bg-accent/[0.06] border border-accent/20 text-text-secondary"
                      : "bg-red-400/[0.06] border border-red-400/20 text-text-secondary"
                  }`}>
                    <span className={`font-semibold font-mono text-[11px] uppercase tracking-wider ${
                      isCorrect ? "text-accent" : "text-red-400"
                    }`}>
                      {isCorrect ? "Correct" : "Incorrect"} &mdash;{" "}
                    </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit */}
        {!submitted && !alreadyPassed && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="px-8 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-[1.02] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              Submit Quiz
            </button>
          </div>
        )}

        {!submitted && !allAnswered && (
          <p className="text-center text-text-muted text-[12px] font-mono mt-4">
            Answer all {quiz.questions.length} questions to submit
          </p>
        )}
      </div>
    </div>
  );
}
