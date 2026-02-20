'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';

// ── 8 Questions, 0-3 pts each = max 24 raw. Display as round(raw/24*10) = 1-10. Pass = 7+
const questions = [
  {
    q: "What are you trying to do?",
    options: [
      { label: "Build something — product, business, or side project", value: 'build', score: 3 },
      { label: "Pivot my career into AI or a higher-leverage role", value: 'career', score: 3 },
      { label: "Upskill — make my current work faster and better", value: 'upskill', score: 2 },
      { label: "Still figuring out where AI fits for me", value: 'exploring', score: 1 },
    ],
  },
  {
    q: "How specific is what you want to achieve?",
    options: [
      { label: "Very specific — I know exactly what I want and by when", value: 'specific', score: 3 },
      { label: "Clear direction, working on the details", value: 'clear', score: 2 },
      { label: "General idea — want to learn AI and see what unfolds", value: 'general', score: 1 },
      { label: "Not sure yet — that's part of why I need help", value: 'unsure', score: 0 },
    ],
  },
  {
    q: "When do you want this figured out?",
    options: [
      { label: "I'm already behind — I needed this yesterday", value: 'urgent', score: 3 },
      { label: "In the next 1–3 months", value: 'soon', score: 3 },
      { label: "By end of year", value: 'endofyear', score: 2 },
      { label: "Whenever it happens — no real timeline", value: 'whenever', score: 0 },
    ],
  },
  {
    q: "Have you tried to learn AI on your own?",
    options: [
      { label: "Yes — courses, content, tools. I need personalized direction now", value: 'tried_stuck', score: 3 },
      { label: "Yes — I started but lost momentum or got overwhelmed", value: 'tried_lost', score: 3 },
      { label: "A little — dipped my toes but haven't gone deep", value: 'little', score: 2 },
      { label: "No — this is the beginning for me", value: 'none', score: 1 },
    ],
  },
  {
    q: "What's your biggest obstacle right now?",
    options: [
      { label: "I don't know what to focus on — there's too much noise", value: 'direction', score: 3 },
      { label: "I know what I want but can't stay accountable on my own", value: 'accountability', score: 3 },
      { label: "I'm moving, but too slowly — I need to compress the timeline", value: 'speed', score: 3 },
      { label: "I need someone to validate my approach before I commit", value: 'validation', score: 2 },
    ],
  },
  {
    q: "How do you respond to direct, hard feedback?",
    options: [
      { label: "I want it — brutal honesty is the point", value: 'want_it', score: 3 },
      { label: "Open to it — I know I have blind spots", value: 'open', score: 2 },
      { label: "Depends — I trust my own instincts pretty strongly", value: 'selective', score: 1 },
      { label: "I mostly know what I need — just need someone to execute with", value: 'stubborn', score: 0 },
    ],
  },
  {
    q: "Can you commit to 1 weekly call + 5–10 hours of work between sessions?",
    options: [
      { label: "Yes — I'm building this into my schedule now", value: 'yes', score: 3 },
      { label: "Yes — I'd shift a few things to make it happen", value: 'adjust', score: 2 },
      { label: "Tight, but I'd prioritize it if the ROI is there", value: 'tight', score: 1 },
      { label: "That's more than I can commit to right now", value: 'no', score: 0 },
    ],
  },
  {
    q: "The mentorship is $5,000/month. Can you invest at this level?",
    options: [
      { label: "Yes — I've budgeted for this", value: 'ready', score: 3 },
      { label: "Yes — I can make it work for the right outcome", value: 'can_do', score: 2 },
      { label: "It's a stretch, but I'd find a way for the right fit", value: 'stretch', score: 1 },
      { label: "That's out of reach right now", value: 'no', score: 0 },
    ],
  },
];

const MAX_RAW = 24; // 8 questions × 3 pts

type Step = 'intro' | number | 'contact' | 'result';

function calcDisplayScore(raw: number) {
  return Math.max(1, Math.round((raw / MAX_RAW) * 10));
}

function getResult(raw: number, answers: string[]) {
  const display = calcDisplayScore(raw);

  const noTimeline = answers[2] === 'whenever';
  const cantCommit = answers[6] === 'no';
  const noBudget = answers[7] === 'no';

  const hardFail = noTimeline || cantCommit || noBudget;
  const pass = display >= 7 && !hardFail;

  return {
    pass,
    display,
    headline: pass ? "You're a strong candidate." : "Not the right fit — yet.",
    body: pass
      ? "You have a clear goal, real urgency, and you're willing to put in the work. That's the profile of someone who gets results from mentorship. I'll review your application personally — if there's a fit, you'll hear from me."
      : noBudget
      ? "The mentorship investment is $5,000/month. If that's not in reach right now, a course is a better starting point. Build some traction, then come back."
      : cantCommit
      ? "Mentorship only works if you show up for it. Weekly calls and real work between sessions are non-negotiable. When your schedule frees up, the door is open."
      : noTimeline
      ? "Mentorship is built for people moving with urgency. If there's no timeline, there's no forcing function — and results follow. Come back when you're ready to move."
      : "Based on your answers, a 1-on-1 mentorship might not be the highest-leverage move right now. Starting with a structured course will get you further faster.",
    cta: pass ? "Apply for Mentorship" : "Browse Courses Instead",
    ctaHref: pass ? "/mentorship#apply" : "/students",
    ctaExternal: false,
  };
}

function useElapsed(active: boolean) {
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    if (startRef.current === null) startRef.current = Date.now();
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current!) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [active]);

  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const ss = String(elapsed % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

export default function MentorshipQuizPage() {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<{ label: string; value: string; score: number }[]>([]);
  const [selected, setSelected] = useState<{ label: string; value: string; score: number } | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const quizActive = step !== 'intro' && step !== 'result';
  const timer = useElapsed(quizActive);

  const totalQ = questions.length;
  const currentIdx = typeof step === 'number' ? step - 1 : 0;
  const currentQ = typeof step === 'number' ? questions[currentIdx] : null;

  const handleNext = () => {
    if (!selected) return;
    const next = [...answers, selected];
    setAnswers(next);
    setSelected(null);
    if (typeof step === 'number' && step >= totalQ) {
      setStep('contact');
    } else if (typeof step === 'number') {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    setSubmitError(false);

    const raw = answers.reduce((sum, a) => sum + a.score, 0);
    const display = calcDisplayScore(raw);
    const result = getResult(raw, answers.map(a => a.value));

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'mentorship',
          name,
          email,
          message: `[Mentorship Quiz — ${result.pass ? 'PASS' : 'FAIL'} ${display}/10] Raw: ${raw}/${MAX_RAW}\n\n${
            answers.map((a, i) => `Q${i + 1}: ${a.label}`).join('\n')
          }`,
        }),
      });

      // Fire-and-forget: store structured data for analytics
      fetch('/api/quiz-store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'mentorship',
          answers: answers.map(a => ({ value: a.value, score: a.score })),
          score: display,
          pass: result.pass,
        }),
      }).catch(() => {});

      setStep('result');
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setStep('intro');
    setAnswers([]);
    setSelected(null);
    setName('');
    setEmail('');
    setSubmitError(false);
  };

  const Nav = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-semibold tracking-tight">JDLO</Link>
        <Link href="/mentorship" className="text-text-muted text-[12px] font-mono hover:text-text transition-colors duration-300">
          ← Mentorship
        </Link>
      </div>
    </nav>
  );

  // ── Intro ──
  if (step === 'intro') {
    return (
      <main className="cursor-none min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
        <CustomCursor />
        <Nav />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[560px] w-full text-center relative z-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6">1-on-1 Mentorship</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[0.92] mb-6">
            Are you
            <br />
            <span className="gradient-text">ready?</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4 max-w-[420px] mx-auto">
            8 questions. You&apos;ll get a score from 1–10 and a straight answer on whether 1-on-1 mentorship is the right move for you right now.
          </p>
          <p className="text-text-muted text-[12px] font-mono mb-10">Pass = 7 or higher. No fluff.</p>
          <button onClick={() => setStep(1)} className="magnetic-btn">
            <span className="relative z-10">See If You Qualify</span>
          </button>
          <p className="text-text-muted text-[11px] font-mono mt-8">Takes about 2 minutes</p>
        </div>
      </main>
    );
  }

  // ── Contact capture ──
  if (step === 'contact') {
    return (
      <main className="cursor-none min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
        <CustomCursor />
        <Nav />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[480px] w-full relative z-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Almost Done</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.05em] leading-[0.95] mb-4">
            Your score is ready.
          </h2>
          <p className="text-text-secondary text-[15px] leading-relaxed mb-10">
            Drop your info to see your result. If you&apos;re a fit, I&apos;ll reach out personally.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full bg-white/[0.04] border border-border rounded-[12px] px-5 py-3.5 text-[14px] text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors duration-200"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full bg-white/[0.04] border border-border rounded-[12px] px-5 py-3.5 text-[14px] text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors duration-200"
            />
            {submitError && (
              <p className="text-red-400 text-[12px] font-mono">Something went wrong. Try again.</p>
            )}
            <button
              type="submit"
              disabled={submitting || !name.trim() || !email.trim()}
              className="magnetic-btn w-full disabled:opacity-30 disabled:pointer-events-none"
            >
              <span className="relative z-10">
                {submitting ? 'Calculating…' : 'See My Score →'}
              </span>
            </button>
          </form>
          <p className="text-text-muted text-[11px] font-mono mt-6 text-center">
            No spam. Results sent directly.
          </p>
        </div>
      </main>
    );
  }

  // ── Result ──
  if (step === 'result') {
    const raw = answers.reduce((sum, a) => sum + a.score, 0);
    const result = getResult(raw, answers.map(a => a.value));

    return (
      <main className="cursor-none min-h-screen px-6 py-24 relative">
        <CustomCursor />
        <Nav />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[620px] mx-auto relative z-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Your Score</p>

          {/* Score display */}
          <div className="flex items-end gap-4 mb-6">
            <span className={`text-[6rem] font-bold leading-none tracking-[-0.05em] ${result.pass ? 'gradient-text' : 'text-text-secondary'}`}>
              {result.display}
            </span>
            <div className="pb-3">
              <span className="text-text-muted text-[2rem] font-bold">/10</span>
              <div className={`inline-flex items-center ml-4 px-3 py-1 rounded-full text-[11px] font-mono tracking-[0.2em] uppercase ${
                result.pass ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-surface border border-border text-text-muted'
              }`}>
                {result.pass ? 'PASS' : 'FAIL'}
              </div>
            </div>
          </div>

          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.04em] leading-[1] mb-8">
            {result.headline}
          </h1>

          <div className={`rounded-[20px] p-8 md:p-10 mb-8 border ${
            result.pass ? 'border-accent/25 bg-accent/[0.03]' : 'border-border bg-surface/30'
          }`}>
            <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
              {result.body}
            </p>
            <Link href={result.ctaHref} className="magnetic-btn inline-flex">
              <span className="relative z-10">{result.cta} →</span>
            </Link>
          </div>

          {/* Score breakdown */}
          <div className="border border-border rounded-[16px] p-6 mb-10">
            <p className="text-text-muted text-[10px] tracking-[0.4em] uppercase font-mono mb-5">Score Breakdown</p>
            <div className="space-y-3">
              {answers.map((a, i) => {
                const isDisqualifier =
                  (i === 2 && a.value === 'whenever') ||
                  (i === 6 && a.value === 'no') ||
                  (i === 7 && a.value === 'no');
                return (
                  <div key={i} className={`rounded-[12px] border px-4 py-3 ${
                    isDisqualifier ? 'border-red-500/30 bg-red-500/[0.04]' : 'border-border bg-surface/30'
                  }`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-text-muted text-[10px] font-mono mb-0.5">{questions[i].q}</p>
                        <p className="text-text-secondary text-[13px] leading-snug">{a.label}</p>
                        {isDisqualifier && (
                          <p className="text-red-400 text-[10px] font-mono mt-1">automatic disqualifier</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 shrink-0 pt-3">
                        {[1, 2, 3].map(dot => (
                          <div key={dot} className={`w-2 h-2 rounded-full ${
                            dot <= a.score
                              ? isDisqualifier ? 'bg-red-400' : a.score === 3 ? 'bg-accent' : 'bg-text-muted'
                              : 'bg-border'
                          }`} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <span className="text-text-muted text-[11px] font-mono">Raw score</span>
              <span className="text-text text-[13px] font-mono font-semibold">
                {answers.reduce((s, a) => s + a.score, 0)} / {answers.length * 3}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={reset} className="ghost-btn">Retake</button>
            <Link href="/mentorship" className="text-text-muted text-[13px] hover:text-text transition-colors duration-300 font-mono">
              ← Back to Mentorship
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── Question ──
  return (
    <main className="cursor-none min-h-screen flex flex-col justify-center px-6 py-20">
      <CustomCursor />
      <Nav />
      <div className="max-w-[560px] mx-auto w-full">
        {/* Progress */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex gap-1 flex-1">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-[2px] flex-1 rounded-full transition-colors duration-500 ${
                  i < (step as number) ? 'bg-accent' : 'bg-border'
                }`}
              />
            ))}
          </div>
          <p className="text-text-muted text-[11px] font-mono shrink-0">{step as number} / {totalQ}</p>
          <p className="text-text-muted text-[11px] font-mono shrink-0 tabular-nums">{timer}</p>
        </div>

        <h2 className="text-[clamp(1.5rem,3.5vw,2.4rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-10">
          {currentQ!.q}
        </h2>

        <div className="space-y-2.5 mb-10">
          {currentQ!.options.map(opt => (
            <button
              key={opt.value}
              onClick={() => setSelected(opt)}
              className={`w-full text-left px-5 py-4 rounded-[14px] border text-[14px] leading-snug transition-all duration-200 ${
                selected?.value === opt.value
                  ? 'border-accent/60 bg-accent/[0.08] text-text'
                  : 'border-border text-text-secondary hover:border-border-hover hover:text-text'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!selected}
          className="magnetic-btn disabled:opacity-25 disabled:cursor-not-allowed disabled:pointer-events-none"
        >
          <span className="relative z-10">
            {(step as number) >= totalQ ? 'Continue →' : 'Next →'}
          </span>
        </button>
      </div>
    </main>
  );
}
