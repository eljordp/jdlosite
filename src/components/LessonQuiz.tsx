'use client';

import { useState, useEffect } from 'react';
import type { QuizQuestion } from '@/lib/courseData';

interface LessonQuizProps {
  quiz: QuizQuestion[];
  lessonKey: string;
  userId: string;
}

type QuizState = 'idle' | 'in-progress' | 'results';

interface SavedResult {
  score: number;
  total: number;
  passed: boolean;
  answers: number[];
}

interface QuestionResult {
  correct: boolean;
  explanation: string;
}

export default function LessonQuiz({ quiz, lessonKey, userId }: LessonQuizProps) {
  const [quizState, setQuizState] = useState<QuizState>('idle');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(quiz.length).fill(null)
  );
  const [results, setResults] = useState<QuestionResult[] | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [passed, setPassed] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [previousResult, setPreviousResult] = useState<SavedResult | null>(null);
  const [checkingPrevious, setCheckingPrevious] = useState(true);

  // On mount, check if user already took this quiz
  useEffect(() => {
    if (!userId) return;
    fetch(`/api/academy/quiz?lessonKey=${encodeURIComponent(lessonKey)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.result) {
          setPreviousResult(data.result);
          // Reconstruct results from saved answers + quiz correctIdx
          const reconstructed = quiz.map((q, i) => ({
            correct: data.result.answers[i] === q.correctIdx,
            explanation: q.explanation,
          }));
          setResults(reconstructed);
          setScore(data.result.score);
          setPassed(data.result.passed);
          setSelectedAnswers(data.result.answers);
          setQuizState('results');
        }
      })
      .catch(() => {
        // Ignore fetch errors — just show idle state
      })
      .finally(() => {
        setCheckingPrevious(false);
      });
  }, [lessonKey, userId, quiz]);

  function startQuiz() {
    setSelectedAnswers(Array(quiz.length).fill(null));
    setCurrentQuestion(0);
    setResults(null);
    setScore(null);
    setPassed(null);
    setQuizState('in-progress');
  }

  function selectOption(idx: number) {
    setSelectedAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestion] = idx;
      return updated;
    });
  }

  async function submitQuiz() {
    setLoading(true);
    try {
      const res = await fetch('/api/academy/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonKey, answers: selectedAnswers }),
      });
      const data = await res.json();
      if (res.ok) {
        setResults(data.results);
        setScore(data.score);
        setPassed(data.passed);
        setQuizState('results');
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }

  function handleNext() {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      submitQuiz();
    }
  }

  if (checkingPrevious) {
    return null;
  }

  const q = quiz[currentQuestion];
  const isLastQuestion = currentQuestion === quiz.length - 1;
  const currentSelected = selectedAnswers[currentQuestion];

  return (
    <div className="border border-[#e5e5e5] rounded-2xl p-6 mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#888] uppercase mb-1">
            Knowledge Check
          </p>
          <h3 className="text-[17px] font-semibold text-[#111]">Test your understanding</h3>
        </div>
        {quizState === 'results' && score !== null && (
          <div
            className={`px-3 py-1.5 rounded-full text-[12px] font-mono border ${
              passed
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-red-50 text-red-700 border-red-200'
            }`}
          >
            {passed ? 'Passed' : 'Not yet'}
          </div>
        )}
      </div>

      {/* IDLE */}
      {quizState === 'idle' && (
        <div>
          <p className="text-[14px] text-[#666] leading-[1.7] mb-5">
            {quiz.length} questions covering the key concepts from this lesson.
          </p>
          <button
            onClick={startQuiz}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-[13px] font-medium px-4 py-2.5 rounded-xl hover:bg-[#333] transition-colors"
          >
            Take Quiz
          </button>
        </div>
      )}

      {/* IN PROGRESS */}
      {quizState === 'in-progress' && (
        <div>
          {/* Progress */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1.5">
              {quiz.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === currentQuestion
                      ? 'w-6 bg-[#1a1a1a]'
                      : i < currentQuestion
                      ? 'w-3 bg-[#bbb]'
                      : 'w-3 bg-[#e5e5e5]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-mono text-[#999]">
              {currentQuestion + 1} of {quiz.length}
            </span>
          </div>

          {/* Question */}
          <p className="text-[15px] font-medium text-[#111] leading-[1.6] mb-5">{q.question}</p>

          {/* Options */}
          <div className="space-y-2.5 mb-6">
            {q.options.map((option, i) => (
              <button
                key={i}
                onClick={() => selectOption(i)}
                className={`w-full border rounded-xl px-4 py-3 text-left text-[14px] leading-[1.6] transition-all ${
                  currentSelected === i
                    ? 'border-[#111] bg-[#f9f9f9] text-[#111]'
                    : 'border-[#e5e5e5] text-[#444] hover:border-[#111]'
                }`}
              >
                <span className={`font-mono text-[11px] mr-3 ${currentSelected === i ? 'text-[#888]' : 'text-[#ccc]'}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                {option}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentQuestion((p) => Math.max(0, p - 1))}
              disabled={currentQuestion === 0}
              className="text-[13px] text-[#888] hover:text-[#111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={currentSelected === null || loading}
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-[13px] font-medium px-4 py-2.5 rounded-xl hover:bg-[#333] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : isLastQuestion ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {quizState === 'results' && results && score !== null && (
        <div>
          {/* Score card */}
          <div
            className={`rounded-xl p-5 mb-6 border ${
              passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
            }`}
          >
            <p className={`text-[28px] font-semibold ${passed ? 'text-green-700' : 'text-red-700'}`}>
              {score}/{quiz.length}
            </p>
            <p className={`text-[13px] mt-1 ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {passed
                ? 'You passed. Solid understanding of this material.'
                : `You need ${Math.ceil(quiz.length * 0.7)} correct to pass. Review the lesson and try again.`}
            </p>
          </div>

          {/* Per-question breakdown */}
          <div className="space-y-4 mb-6">
            {quiz.map((q, i) => {
              const userAnswer = selectedAnswers[i] as number;
              const isCorrect = results[i].correct;
              return (
                <div key={i} className="border border-[#e5e5e5] rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-[#fafafa] border-b border-[#e5e5e5]">
                    <p className="text-[13px] font-medium text-[#111] leading-[1.5]">{q.question}</p>
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    {q.options.map((option, j) => {
                      const isSelected = userAnswer === j;
                      const isCorrectOption = j === q.correctIdx;
                      let optionClass = 'border border-[#e5e5e5] text-[#888]';
                      if (isSelected && isCorrect) {
                        optionClass = 'border-l-4 border-l-green-500 border-y border-r border-green-200 bg-green-50 text-green-800';
                      } else if (isSelected && !isCorrect) {
                        optionClass = 'border-l-4 border-l-red-500 border-y border-r border-red-200 bg-red-50 text-red-800';
                      } else if (isCorrectOption && !isCorrect) {
                        optionClass = 'border-l-4 border-l-green-500 border-y border-r border-green-200 bg-green-50 text-green-800';
                      }
                      return (
                        <div key={j} className={`rounded-lg px-3 py-2 text-[13px] leading-[1.5] ${optionClass}`}>
                          <span className="font-mono text-[11px] mr-2.5 opacity-60">
                            {String.fromCharCode(65 + j)}
                          </span>
                          {option}
                          {isCorrectOption && (
                            <span className="ml-2 text-[11px] font-mono text-green-600 opacity-80">correct</span>
                          )}
                        </div>
                      );
                    })}
                    <p className="text-[12px] text-[#666] leading-[1.6] mt-2 pt-2 border-t border-[#efefef]">
                      {results[i].explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Retake */}
          <button
            onClick={startQuiz}
            className="inline-flex items-center gap-2 border border-[#e5e5e5] text-[#444] text-[13px] font-medium px-4 py-2.5 rounded-xl hover:border-[#111] hover:text-[#111] transition-colors"
          >
            Retake Quiz
          </button>
          {previousResult && score === previousResult.score && (
            <p className="text-[11px] font-mono text-[#bbb] mt-3">
              Previous score: {previousResult.score}/{previousResult.total}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
