'use client';

import { useState } from 'react';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';

// ── Questions ──
const questions = [
  {
    q: "What's your role?",
    options: [
      { label: "Owner or founder", value: 'founder', score: 3 },
      { label: "Executive or director", value: 'exec', score: 3 },
      { label: "Manager or team lead", value: 'manager', score: 2 },
      { label: "Solo operator looking to scale", value: 'solo', score: 1 },
    ],
  },
  {
    q: "How big is your team?",
    options: [
      { label: "50+ people", value: '50plus', score: 3 },
      { label: "11–50 people", value: '11to50', score: 2 },
      { label: "2–10 people", value: '2to10', score: 1 },
      { label: "Just me right now", value: 'solo', score: 0 },
    ],
  },
  {
    q: "Where are you losing the most time or money?",
    options: [
      { label: "Manual work my team does that AI should handle", value: 'manual', score: 3 },
      { label: "Inconsistent output — speed and quality vary too much", value: 'inconsistent', score: 2 },
      { label: "No real AI strategy — everyone's doing their own thing", value: 'nostrategy', score: 3 },
      { label: "Sales and pipeline aren't hitting targets", value: 'sales', score: 2 },
    ],
  },
  {
    q: "How does your team use AI today?",
    options: [
      { label: "Not at all — starting from zero", value: 'none', score: 3 },
      { label: "Basic tools here and there, nothing systematic", value: 'basic', score: 3 },
      { label: "Some workflows automated, but it's inconsistent", value: 'some', score: 2 },
      { label: "Heavy users — want to go deeper and build real systems", value: 'heavy', score: 1 },
    ],
  },
  {
    q: "How quickly are you looking to move?",
    options: [
      { label: "I need to start now — this is urgent", value: 'now', score: 3 },
      { label: "In the next 30–60 days", value: 'soon', score: 2 },
      { label: "This quarter, when the timing is right", value: 'quarter', score: 1 },
      { label: "Just scoping — no firm timeline yet", value: 'scoping', score: 0 },
    ],
  },
];

type Step = 'intro' | number | 'contact' | 'result';

// Pass = score >= 8 AND not just scoping AND not solo team
function getResult(score: number, answers: string[]) {
  const isScoping = answers[4] === 'scoping';
  const isSoloTeam = answers[1] === 'solo';
  const pass = score >= 8 && !isScoping && !isSoloTeam;

  if (pass) {
    return {
      pass: true as const,
      headline: "You're a fit. Let's talk.",
      body: "Your team has a real AI gap, you have urgency, and there's clear ROI to capture. This is exactly the situation I step into. Book a call — I'll tell you within the first 10 minutes if we should work together.",
      cta: "Book a Strategy Call",
      ctaHref: "https://calendar.app.google/uZVeQYHLMe5croEn8",
      ctaExternal: true,
    };
  }
  return {
    pass: false as const,
    headline: "Not the right fit — yet.",
    body: isScoping
      ? "Come back when you're ready to move. Consulting works best when there's urgency and a specific problem. Right now, a course will do more for you."
      : isSoloTeam
      ? "Consulting is built for teams. Right now, the highest-leverage thing for you is building your own skills first. Start with a course."
      : "Based on your answers, a full consulting engagement isn't the right move yet. The foundation needs to be built first — and I have courses for exactly that.",
    cta: "Browse Courses Instead",
    ctaHref: "/students",
    ctaExternal: false,
  };
}

export default function OperatorQuizPage() {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<{ label: string; value: string; score: number }[]>([]);
  const [selected, setSelected] = useState<{ label: string; value: string; score: number } | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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

    const score = answers.reduce((sum, a) => sum + a.score, 0);
    const result = getResult(score, answers.map(a => a.value));

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'business',
          name,
          email,
          company: company || '—',
          message: `[Operator Quiz — ${result.pass ? 'PASS' : 'FAIL'}] Score: ${score}/15\n\n${
            answers.map((a, i) => `Q${i + 1}: ${a.label}`).join('\n')
          }`,
        }),
      });
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
    setCompany('');
    setSubmitError(false);
  };

  const Nav = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-semibold tracking-tight">JDLO</Link>
        <Link href="/businesses" className="text-text-muted text-[12px] font-mono hover:text-text transition-colors duration-300">
          ← For Businesses
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
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6">For Teams & Operators</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[0.92] mb-6">
            Are we a
            <br />
            <span className="gradient-text-blue">fit?</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-[380px] mx-auto">
            5 questions. Find out if consulting makes sense for your team right now — and what it would look like.
          </p>
          <button onClick={() => setStep(1)} className="magnetic-btn">
            <span className="relative z-10">Find Out</span>
          </button>
          <p className="text-text-muted text-[11px] font-mono mt-8">Takes about 60 seconds</p>
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
            Your assessment is ready.
          </h2>
          <p className="text-text-secondary text-[15px] leading-relaxed mb-10">
            Drop your info. I&apos;ll send your result and reach out personally if there&apos;s a fit.
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
              placeholder="Work email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full bg-white/[0.04] border border-border rounded-[12px] px-5 py-3.5 text-[14px] text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors duration-200"
            />
            <input
              type="text"
              placeholder="Company (optional)"
              value={company}
              onChange={e => setCompany(e.target.value)}
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
                {submitting ? 'Sending…' : 'See My Assessment →'}
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
    const score = answers.reduce((sum, a) => sum + a.score, 0);
    const result = getResult(score, answers.map(a => a.value));

    return (
      <main className="cursor-none min-h-screen px-6 py-24 relative">
        <CustomCursor />
        <Nav />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[620px] mx-auto relative z-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Your Assessment</p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.05em] leading-[0.95] mb-8">
            {result.headline}
          </h1>

          <div className={`rounded-[20px] p-8 md:p-10 mb-8 border ${
            result.pass
              ? 'border-accent/25 bg-accent/[0.03]'
              : 'border-border bg-surface/30'
          }`}>
            <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
              {result.body}
            </p>
            {result.ctaExternal ? (
              <a
                href={result.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn inline-flex"
              >
                <span className="relative z-10">{result.cta} →</span>
              </a>
            ) : (
              <Link href={result.ctaHref} className="magnetic-btn inline-flex">
                <span className="relative z-10">{result.cta} →</span>
              </Link>
            )}
          </div>

          {/* Answers summary */}
          <div className="border border-border rounded-[16px] p-6 mb-10">
            <p className="text-text-muted text-[10px] tracking-[0.4em] uppercase font-mono mb-4">Your Answers</p>
            <div className="space-y-2">
              {answers.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-accent text-[11px] font-mono mt-0.5 shrink-0">0{i + 1}</span>
                  <p className="text-text-secondary text-[13px]">{a.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={reset} className="ghost-btn">Retake</button>
            <Link href="/" className="text-text-muted text-[13px] hover:text-text transition-colors duration-300 font-mono">
              ← Back to Home
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
          <div className="flex gap-1.5 flex-1">
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
