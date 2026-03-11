"use client";

import { useState, useEffect } from "react";
import type { KnowledgeCheck } from "@/lib/content/types";

const STORAGE_PREFIX = "jdlo_checks_";

function getStorageKey(slug: string, lessonKey: string) {
  return `${STORAGE_PREFIX}${slug}_${lessonKey}`;
}

function getSavedAnswers(
  slug: string,
  lessonKey: string
): Record<number, number> {
  if (typeof window === "undefined") return {};
  const raw = localStorage.getItem(getStorageKey(slug, lessonKey));
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveAnswer(
  slug: string,
  lessonKey: string,
  checkIndex: number,
  answer: number
) {
  const saved = getSavedAnswers(slug, lessonKey);
  saved[checkIndex] = answer;
  localStorage.setItem(
    getStorageKey(slug, lessonKey),
    JSON.stringify(saved)
  );
}

export default function InlineCheck({
  check,
  index,
  slug,
  lessonKey,
}: {
  check: KnowledgeCheck;
  index: number;
  slug: string;
  lessonKey: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = getSavedAnswers(slug, lessonKey);
    if (saved[index] !== undefined) {
      setSelected(saved[index]);
      setRevealed(true);
      setCollapsed(true);
    }
  }, [slug, lessonKey, index]);

  const handleSelect = (optIdx: number) => {
    if (revealed) return;
    setSelected(optIdx);
    setRevealed(true);
    saveAnswer(slug, lessonKey, index, optIdx);
  };

  const isCorrect = selected === check.correctIndex;

  // Collapsed state — just show a chip
  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className={`my-6 w-full flex items-center gap-3 px-5 py-3 rounded-xl border text-[13px] font-mono transition-colors ${
          isCorrect
            ? "border-blue-300 bg-blue-50 text-blue-600 hover:bg-blue-100"
            : "border-red-300 bg-red-50 text-red-500 hover:bg-red-100"
        }`}
      >
        <span>{isCorrect ? "\u2713" : "\u2717"}</span>
        <span>Knowledge Check {index + 1}</span>
        <span className="ml-auto text-neutral-400 text-[11px]">tap to review</span>
      </button>
    );
  }

  return (
    <div className="my-8 p-5 border border-blue-200 rounded-2xl bg-blue-50/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-blue-500 text-[10px] tracking-[0.4em] uppercase font-mono">
          Knowledge Check
        </p>
        {revealed && (
          <button
            onClick={() => setCollapsed(true)}
            className="text-neutral-400 text-[11px] font-mono hover:text-neutral-600 transition-colors"
          >
            collapse
          </button>
        )}
      </div>

      {/* Question */}
      <p className="text-[15px] text-neutral-900 leading-relaxed mb-4">
        {check.question}
      </p>

      {/* Options */}
      <div className="space-y-2 mb-1">
        {check.options.map((opt, j) => {
          const isThisCorrect = j === check.correctIndex;
          const isSelected = selected === j;

          let style = "";
          if (revealed) {
            if (isThisCorrect) {
              style = "border-blue-400 bg-blue-100 text-neutral-900";
            } else if (isSelected && !isThisCorrect) {
              style =
                "border-red-300 bg-red-50 text-neutral-900 line-through decoration-red-400/40";
            } else {
              style = "border-neutral-200 bg-neutral-50 text-neutral-400";
            }
          } else {
            style =
              "border-neutral-200 bg-white text-neutral-900 hover:border-blue-300 cursor-pointer";
          }

          return (
            <button
              key={j}
              disabled={revealed}
              onClick={() => handleSelect(j)}
              className={`w-full text-left px-4 py-3 rounded-xl border text-[14px] transition-all ${style} ${
                revealed ? "cursor-default" : ""
              }`}
            >
              <span
                className={`text-[11px] font-mono mr-3 ${
                  revealed && isThisCorrect
                    ? "text-blue-500"
                    : revealed && isSelected && !isThisCorrect
                    ? "text-red-400"
                    : "text-blue-500"
                }`}
              >
                {revealed && isThisCorrect
                  ? "\u2713"
                  : revealed && isSelected && !isThisCorrect
                  ? "\u2717"
                  : String.fromCharCode(65 + j)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {revealed && (
        <div
          className={`mt-4 p-4 rounded-xl text-[13px] leading-relaxed text-neutral-700 ${
            isCorrect
              ? "bg-blue-50 border border-blue-200"
              : "bg-red-50 border border-red-200"
          }`}
        >
          <span
            className={`font-semibold font-mono text-[11px] uppercase tracking-wider ${
              isCorrect ? "text-blue-500" : "text-red-400"
            }`}
          >
            {isCorrect ? "Correct" : "Incorrect"} &mdash;{" "}
          </span>
          {check.explanation}
        </div>
      )}
    </div>
  );
}
