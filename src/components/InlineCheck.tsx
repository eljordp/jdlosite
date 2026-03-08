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
            ? "border-accent/30 bg-accent/[0.04] text-accent hover:bg-accent/[0.08]"
            : "border-red-400/30 bg-red-400/[0.04] text-red-400 hover:bg-red-400/[0.08]"
        }`}
      >
        <span>{isCorrect ? "\u2713" : "\u2717"}</span>
        <span>Knowledge Check {index + 1}</span>
        <span className="ml-auto text-text-muted text-[11px]">tap to review</span>
      </button>
    );
  }

  return (
    <div className="my-8 p-5 border border-accent/20 rounded-2xl bg-accent/[0.02]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-mono">
          Knowledge Check
        </p>
        {revealed && (
          <button
            onClick={() => setCollapsed(true)}
            className="text-text-muted text-[11px] font-mono hover:text-text transition-colors"
          >
            collapse
          </button>
        )}
      </div>

      {/* Question */}
      <p className="text-[15px] text-text leading-relaxed mb-4">
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
              style = "border-accent bg-accent/10 text-text";
            } else if (isSelected && !isThisCorrect) {
              style =
                "border-red-400/60 bg-red-400/10 text-text line-through decoration-red-400/40";
            } else {
              style = "border-border/50 bg-surface/10 text-text-muted";
            }
          } else {
            style =
              "border-border bg-surface/30 text-text-secondary hover:border-accent/40 cursor-pointer";
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
                    ? "text-accent"
                    : revealed && isSelected && !isThisCorrect
                    ? "text-red-400"
                    : "text-accent"
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
          className={`mt-4 p-4 rounded-xl text-[13px] leading-relaxed ${
            isCorrect
              ? "bg-accent/[0.06] border border-accent/20 text-text-secondary"
              : "bg-red-400/[0.06] border border-red-400/20 text-text-secondary"
          }`}
        >
          <span
            className={`font-semibold font-mono text-[11px] uppercase tracking-wider ${
              isCorrect ? "text-accent" : "text-red-400"
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
