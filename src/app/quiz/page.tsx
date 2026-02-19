'use client';

import { useState } from 'react';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';

// ── Questions ──
const questions = [
  {
    q: "What's your #1 goal right now?",
    options: [
      { label: "Automate my work — systems, not hours", skill: 'ai-automation' },
      { label: "Close more deals and build a repeatable sales machine", skill: 'sales-systems' },
      { label: "Build an audience and brand that actually converts", skill: 'content-brand' },
      { label: "Scale my team and stop being the bottleneck", skill: 'team-operations' },
      { label: "Get elite results from AI every time I use it", skill: 'prompt-engineering' },
    ],
  },
  {
    q: "What's costing you the most right now?",
    options: [
      { label: "Doing everything manually when AI should handle it", skill: 'ai-automation' },
      { label: "Inconsistent revenue — I can't predict what I'll close", skill: 'sales-systems' },
      { label: "No one knows who I am. I have nothing to show for it", skill: 'content-brand' },
      { label: "My business can't function without me in it", skill: 'team-operations' },
      { label: "AI gives me mediocre output and I don't know why", skill: 'prompt-engineering' },
    ],
  },
  {
    q: "What does your average day look like?",
    options: [
      { label: "Buried in repetitive tasks that should be automated", skill: 'ai-automation' },
      { label: "On calls, writing follow-ups, chasing deals", skill: 'sales-systems' },
      { label: "Creating content or trying to figure out where to start", skill: 'content-brand' },
      { label: "Managing people, fires, operations — never building", skill: 'team-operations' },
      { label: "Using AI tools but never quite getting the right output", skill: 'prompt-engineering' },
    ],
  },
  {
    q: "What would change your business most?",
    options: [
      { label: "Workflows running 24/7 without me touching them", skill: 'ai-automation' },
      { label: "A system that consistently generates and closes revenue", skill: 'sales-systems' },
      { label: "An audience that trusts me and buys what I offer", skill: 'content-brand' },
      { label: "A team that executes without me being in every room", skill: 'team-operations' },
      { label: "Prompts that get exactly what I want, every time", skill: 'prompt-engineering' },
    ],
  },
  {
    q: "Be honest — where do you come from?",
    options: [
      { label: "Tech-minded — I love tools, systems, and building things", skill: 'ai-automation' },
      { label: "Sales or business — I'm built to close and persuade", skill: 'sales-systems' },
      { label: "Creative — content, video, and writing is my world", skill: 'content-brand' },
      { label: "Operator — I run businesses and manage people", skill: 'team-operations' },
      { label: "Mixed — I use AI but I'm not deep in any one area", skill: 'prompt-engineering' },
    ],
  },
];

// ── Skill info ──
const SKILL_INFO = {
  'ai-automation': {
    title: 'AI & Automation',
    tagline: 'Build the systems that run businesses.',
    price: '$2,500',
    duration: '6 weeks',
    href: '/courses/ai-automation',
    desc: "You're wired for systems. This course takes you from understanding AI to building real automated workflows, agents, and integrations — the kind that save 20+ hours a week.",
  },
  'sales-systems': {
    title: 'Sales Systems',
    tagline: 'The playbook I use to close. Systematized.',
    price: '$1,500',
    duration: '4 weeks',
    href: '/courses/sales-systems',
    desc: "Your instincts are revenue-driven. This course gives you the exact scripts, frameworks, and CRM systems to close consistently and build a predictable pipeline.",
  },
  'content-brand': {
    title: 'Content & Brand',
    tagline: 'Build a brand that makes money while you sleep.',
    price: '$1,200',
    duration: '4 weeks',
    href: '/courses/content-brand',
    desc: "You understand that attention is the real asset. This course builds the production system, strategy, and distribution engine to turn your brand into a revenue channel.",
  },
  'team-operations': {
    title: 'Team & Operations',
    tagline: 'Build a team. Build systems. Scale without breaking.',
    price: '$2,000',
    duration: '5 weeks',
    href: '/courses/team-operations',
    desc: "You're an operator. This course teaches you to hire right, build SOPs, manage performance, and create a business that runs without you in every room.",
  },
  'prompt-engineering': {
    title: 'Prompt Engineering',
    tagline: 'Get what you want from AI. Every time.',
    price: '$800',
    duration: '2 weeks',
    href: '/courses/prompt-engineering',
    desc: "You know AI is powerful — you just aren't unlocking it. This course closes that gap with advanced prompting techniques that most people don't know exist.",
  },
};

type SkillKey = keyof typeof SKILL_INFO;
type Step = 'intro' | number | 'contact' | 'results';

export default function QuizPage() {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<{ label: string; skill: SkillKey }[]>([]);
  const [selected, setSelected] = useState<{ label: string; skill: SkillKey } | null>(null);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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

  const getResults = () => {
    const scores: Partial<Record<SkillKey, number>> = {};
    answers.forEach(a => { scores[a.skill] = (scores[a.skill] ?? 0) + 1; });
    const sorted = (Object.entries(scores) as [SkillKey, number][]).sort((a, b) => b[1] - a[1]);
    return { primary: sorted[0]?.[0], secondary: sorted[1]?.[0] };
  };

  const handleContactSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    setSubmitError(false);
    const { primary, secondary } = getResults();
    try {
      await fetch('/api/quiz-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          primary: primary ? SKILL_INFO[primary].title : 'Unknown',
          secondary: secondary ? SKILL_INFO[secondary].title : null,
          answers: answers.map(a => a.label),
        }),
      });
      setStep('results');
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

  // ── Intro ──
  if (step === 'intro') {
    return (
      <main className="cursor-none min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
        <CustomCursor />
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">JDLO</Link>
        </div>
      </nav>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[560px] w-full text-center relative z-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Skills Quiz</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[0.92] mb-6">
            Find your
            <br />
            <span className="gradient-text-blue">skill stack.</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-[380px] mx-auto">
            5 questions. Get a straight answer on where to start — and what to stack on next.
          </p>
          <button onClick={() => setStep(1)} className="magnetic-btn">
            <span className="relative z-10">Start the Quiz</span>
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
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">JDLO</Link>
        </div>
      </nav>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[480px] w-full relative z-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Almost There</p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.05em] leading-[0.95] mb-4">
            Your results are ready.
          </h2>
          <p className="text-text-secondary text-[15px] leading-relaxed mb-10">
            Drop your name and email. I&apos;ll send your results and reach out personally if I think you&apos;re a fit.
          </p>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="First name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full bg-white/[0.04] border border-border rounded-[12px] px-5 py-3.5 text-[14px] text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors duration-200"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full bg-white/[0.04] border border-border rounded-[12px] px-5 py-3.5 text-[14px] text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors duration-200"
              />
            </div>
            {submitError && (
              <p className="text-red-400 text-[12px] font-mono">Something went wrong. Try again.</p>
            )}
            <button
              type="submit"
              disabled={submitting || !name.trim() || !email.trim()}
              className="magnetic-btn w-full disabled:opacity-30 disabled:pointer-events-none"
            >
              <span className="relative z-10">
                {submitting ? 'Sending…' : 'See My Results →'}
              </span>
            </button>
          </form>
          <p className="text-text-muted text-[11px] font-mono mt-6 text-center">
            No spam. I actually read these.
          </p>
        </div>
      </main>
    );
  }

  // ── Results ──
  if (step === 'results') {
    const { primary, secondary } = getResults();
    if (!primary) return null;
    const p = SKILL_INFO[primary];
    const s = secondary ? SKILL_INFO[secondary] : null;

    return (
      <main className="cursor-none min-h-screen px-6 py-24 relative">
        <CustomCursor />
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">JDLO</Link>
        </div>
      </nav>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[680px] mx-auto relative z-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Your Results</p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.05em] leading-[0.92] mb-4">
            Here&apos;s where
            <br />
            <span className="gradient-text-blue">you start.</span>
          </h1>
          <p className="text-text-muted text-[13px] font-mono mb-14">
            Results sent to {email}
          </p>

          {/* Primary */}
          <div className="mb-6">
            <p className="text-[10px] tracking-[0.4em] uppercase font-mono text-accent mb-4">Primary Skill</p>
            <div className="border border-accent/25 rounded-[20px] p-8 md:p-10 bg-accent/[0.03]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.03em]">{p.title}</h2>
                  <p className="text-text-muted text-[13px] mt-1">{p.tagline}</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-text text-[16px] font-semibold">{p.price}</p>
                  <p className="text-text-muted text-[12px] font-mono">{p.duration}</p>
                </div>
              </div>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-7">{p.desc}</p>
              <Link href={p.href} className="magnetic-btn inline-flex">
                <span className="relative z-10">See Course →</span>
              </Link>
            </div>
          </div>

          {/* Secondary */}
          {s && (
            <div className="mb-14">
              <p className="text-[10px] tracking-[0.4em] uppercase font-mono text-text-muted mb-4">Stack This Next</p>
              <div className="border border-border rounded-[20px] p-7 md:p-8 hover:border-border-hover transition-colors duration-500">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.03em]">{s.title}</h3>
                    <p className="text-text-muted text-[13px] mt-1">{s.tagline}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-text text-[14px] font-semibold">{s.price}</p>
                    <p className="text-text-muted text-[11px] font-mono">{s.duration}</p>
                  </div>
                </div>
                <Link href={s.href} className="inline-block mt-5 text-accent text-[13px] font-mono hover:underline">
                  See Course →
                </Link>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={reset} className="ghost-btn">Retake Quiz</button>
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

        {/* Question */}
        <h2 className="text-[clamp(1.5rem,3.5vw,2.4rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-10">
          {currentQ!.q}
        </h2>

        {/* Options */}
        <div className="space-y-2.5 mb-10">
          {currentQ!.options.map(opt => (
            <button
              key={opt.skill}
              onClick={() => setSelected(opt as { label: string; skill: SkillKey })}
              className={`w-full text-left px-5 py-4 rounded-[14px] border text-[14px] leading-snug transition-all duration-200 ${
                selected?.skill === opt.skill
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
