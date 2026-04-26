import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GlowLink } from "@/components/GlowButton";
import HomeNav from "@/components/HomeNav";
import SplitText from "@/components/SplitText";

export const metadata: Metadata = {
  title: "The Operator Stack — JDLO",
  description:
    "Stop losing leads. Book more jobs. Without adding hours. I install the system that runs your business — site, CRM, follow-up automation, and a dashboard that shows you what's working.",
  openGraph: {
    title: "The Operator Stack — JDLO",
    description:
      "I install the system that runs your business so you stop being the bottleneck.",
    url: "https://jdlo.site/operator",
  },
};

/* ── Hero ── */
function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col justify-center relative px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-8 hero-animate hero-delay-1 font-mono">
          The Operator Stack
        </p>

        <h1 className="font-display hero-animate hero-delay-2 text-[clamp(2.6rem,8vw,7rem)] leading-[0.92] tracking-[-0.035em] max-w-[1100px]">
          <SplitText staggerMs={45}>Your business is leaking money</SplitText>
          <br />
          <span className="text-text-secondary italic">
            <SplitText delay={0.3} staggerMs={45}>
              between &ldquo;interested&rdquo; and &ldquo;paid.&rdquo;
            </SplitText>
          </span>
        </h1>

        <div className="hero-animate hero-delay-3 mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[560px]">
            I install the system that runs your business — so you stop being the
            bottleneck. One stack. One bill. Ships in two weeks.
          </p>
          <div className="flex items-center gap-4">
            <GlowLink href="/contact?ref=operator">Book a 20-min call</GlowLink>
            <a
              href="https://instagram.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn"
            >
              DM @jdlo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── The Problem ── */
function Problem() {
  const symptoms = [
    "Leads come in. Half of them get forgotten.",
    "You're answering DMs at midnight to keep up.",
    "Five different tools. None of them talk to each other.",
    "You don't actually know which marketing works.",
    "If you took a week off, the business would stall.",
  ];

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            The Problem
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-16">
            You&apos;re great at the work. <br />
            <span className="text-text-secondary">The system around the work is what&apos;s holding you back.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-2 max-w-[1100px]">
          {symptoms.map((s, i) => (
            <RevealOnScroll key={i} delay={(i % 3) + 1}>
              <div className="flex items-start gap-4 py-5 border-b border-border">
                <span className="text-accent text-[11px] font-mono mt-1 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-[15px] md:text-[17px] leading-snug">{s}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Four Pillars ── */
const pillars = [
  {
    num: "01",
    title: "Funnel",
    sub: "How leads find you",
    desc: "A site that makes people take you seriously and actually convert. Not a brochure. Built around the one action you want every visitor to take.",
  },
  {
    num: "02",
    title: "Capture",
    sub: "What happens when they show up",
    desc: "Every form, DM, and inquiry lands in one place. Tagged, qualified, sorted. No more leads buried in a notes app or a group chat.",
  },
  {
    num: "03",
    title: "Follow-up",
    sub: "What happens between interested and paid",
    desc: "An AI agent that responds in seconds, qualifies the lead, and books the call. Trained on your voice, your offer, your rules. It works while you sleep.",
  },
  {
    num: "04",
    title: "Visibility",
    sub: "Do you actually know what&apos;s working",
    desc: "One dashboard that shows you leads in, calls booked, jobs closed, revenue. No spreadsheets. No guessing. The numbers in front of you every day.",
  },
];

function Pillars() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            What I Install
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[1000px] mb-4">
            Every business needs four things to run.
          </h2>
          <p className="text-text-secondary text-lg max-w-[640px] mb-20">
            Most have one. Maybe two. The owner is the bottleneck for the rest. That&apos;s why
            you&apos;re stuck where you are. The Operator Stack installs all four.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {pillars.map((p, i) => (
            <RevealOnScroll key={p.num} delay={(i % 2) + 1}>
              <div className="bg-bg p-8 md:p-12 h-full">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="text-accent text-[11px] font-mono tracking-[0.2em]">
                    {p.num}
                  </span>
                  <span className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase">
                    Pillar
                  </span>
                </div>
                <h3 className="font-display text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.03em] leading-[1] mb-2">
                  {p.title}
                </h3>
                <p className="text-text-muted text-[12px] font-mono tracking-[0.15em] uppercase mb-6">
                  {p.sub.replace("&apos;", "'")}
                </p>
                <p className="text-text-secondary text-[15px] leading-relaxed max-w-[440px]">
                  {p.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── What You Get ── */
const deliverables = [
  {
    label: "Custom website",
    desc: "Built around your one main offer. Designed to convert, not impress your designer friends.",
  },
  {
    label: "CRM + lead inbox",
    desc: "Every lead in one place. Tagged, qualified, sorted by stage. Searchable. Yours forever.",
  },
  {
    label: "AI follow-up agent",
    desc: "Responds within seconds. Qualifies the lead. Books the call. Trained on your voice and rules.",
  },
  {
    label: "Automation flows",
    desc: "Reminders, confirmations, no-show recovery, review requests. The little stuff that compounds.",
  },
  {
    label: "Owner dashboard",
    desc: "Leads, calls, jobs, revenue. One screen. Updated live. The numbers you actually need.",
  },
  {
    label: "30 days of tuning",
    desc: "After launch I sit with you, watch the data, and tighten the system based on real usage.",
  },
];

function Deliverables() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            What You Get
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-16">
            Six pieces. <span className="text-text-secondary">One stack.</span>
          </h2>
        </RevealOnScroll>

        <div>
          {deliverables.map((d, i) => (
            <RevealOnScroll key={d.label} delay={(i % 3) + 1}>
              <div className="grid md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-12 py-8 border-b border-border items-baseline">
                <span className="text-accent text-[11px] font-mono tracking-[0.2em]">
                  0{i + 1}
                </span>
                <h3 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] tracking-[-0.02em] leading-[1.05]">
                  {d.label}
                </h3>
                <p className="text-text-secondary text-[15px] leading-relaxed max-w-[560px]">
                  {d.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ── */
function Pricing() {
  return (
    <section className="section-gap border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
              Pricing
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] mb-6">
              One number.<br />
              <span className="text-text-secondary">No tiers. No upsells.</span>
            </h2>
            <p className="text-text-secondary text-[15px] leading-relaxed max-w-[440px]">
              Same offer for every business. Payment plan available with 50% down.
              If it&apos;s not a fit, I&apos;ll tell you in five minutes on the call.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="space-y-4">
              <div className="border border-border rounded-2xl p-8 md:p-10 bg-bg">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                  Install
                </p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-[clamp(3.5rem,8vw,6rem)] tracking-[-0.04em] leading-none gradient-text">
                    $5,000
                  </span>
                  <span className="text-text-muted text-[14px]">one-time</span>
                </div>
                <p className="text-text-secondary text-[14px] leading-relaxed max-w-[480px]">
                  Site, CRM, AI follow-up agent, automation flows, dashboard. Everything
                  built, deployed, tested, and yours. Two-week build window.
                </p>
              </div>

              <div className="border border-border rounded-2xl p-8 md:p-10 bg-bg">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                  Retainer
                </p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-[clamp(3.5rem,8vw,6rem)] tracking-[-0.04em] leading-none gradient-text">
                    $1,500
                  </span>
                  <span className="text-text-muted text-[14px]">/ month</span>
                </div>
                <p className="text-text-secondary text-[14px] leading-relaxed max-w-[480px]">
                  Tuning, new features, bug fixes, copy changes, AI agent retraining.
                  I&apos;m on your team. Cancel anytime after the first 90 days.
                </p>
              </div>

              <p className="text-text-muted text-[12px] font-mono tracking-wide pt-2">
                Total first year: $23,000 → less than half the cost of one mid-level employee.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── Proof ── */
const proof = [
  {
    name: "West Coast Terpz",
    line: "Went from DMs and spreadsheets to $12K+/mo in online sales. Built in 10 days.",
    stat: "$12K+/mo",
  },
  {
    name: "Pomaika'i Co",
    line: "Replaced five tools with one system. Saved 20 hours a week for a six-figure agency.",
    stat: "20 hrs/wk saved",
  },
  {
    name: "Velvet (Vegas)",
    line: "AI agent automates 500+ guest list entries every week. Promoters just send a name.",
    stat: "500+/wk",
  },
  {
    name: "DHL Translator",
    line: "Enterprise tool deployed across 100+ stores in Chicago. Now expanding to Canada.",
    stat: "100+ stores",
  },
];

function Proof() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            Receipts
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-16">
            I&apos;ve done this before.
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {proof.map((p, i) => (
            <RevealOnScroll key={p.name} delay={(i % 2) + 1}>
              <div className="border border-border rounded-2xl p-8 md:p-10 h-full flex flex-col bg-bg hover:border-text/20 transition-colors duration-300">
                <div className="flex items-baseline justify-between mb-6 gap-4">
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] tracking-[-0.02em] leading-[1.05]">
                    {p.name}
                  </h3>
                  <span className="text-[13px] font-semibold tracking-[-0.02em] shrink-0 gradient-text">
                    {p.stat}
                  </span>
                </div>
                <p className="text-text-secondary text-[15px] leading-relaxed">
                  {p.line}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-accent text-[14px] font-mono font-medium hover:text-white border-b border-accent/40 hover:border-white pb-0.5 transition-all duration-300 mt-12 group"
          >
            See all 20+ projects
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              &rarr;
            </span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Process ── */
function Process() {
  const steps = [
    {
      num: "01",
      title: "20-min call",
      desc: "I ask you ten questions about your business. If the stack doesn't fit, I tell you on the call. No pitch deck, no sales sequence.",
    },
    {
      num: "02",
      title: "Two-week build",
      desc: "I build the entire stack in two weeks. You get progress updates every few days. You see it before it ships, not after.",
    },
    {
      num: "03",
      title: "Launch + 30 days",
      desc: "We turn it on. I sit with the data for a month and tune the system. After that, the retainer keeps it sharp.",
    },
  ];

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            How It Works
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] mb-20">
            Three steps. <span className="text-text-secondary">No fluff.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i + 1}>
              <div
                className={`py-5 md:py-0 md:pr-12 ${
                  i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""
                } ${i > 0 ? "md:pl-12" : ""}`}
              >
                <span className="text-accent text-[11px] font-mono">{step.num}</span>
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] tracking-[-0.02em] mt-3 mb-4 leading-[1.1]">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-[14px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Who It's For / Not ── */
function Fit() {
  const yes = [
    "Service business doing $20K–$80K/mo",
    "Owner-operator who's the bottleneck",
    "Leads coming in but slipping through",
    "Ready to spend on the system, not on ads",
  ];
  const no = [
    "Pre-revenue or just starting out",
    "Looking for a $500 template site",
    "Want a full agency with project managers",
    "Not sure who your customer actually is",
  ];

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            Who This Is For
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] mb-16">
            Some businesses. <span className="text-text-secondary">Not all.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          <RevealOnScroll>
            <div className="bg-bg p-8 md:p-10 h-full">
              <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-text mb-6">
                Yes — if
              </p>
              <ul className="space-y-4">
                {yes.map((y, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-accent text-[11px] font-mono mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed">{y}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <div className="bg-bg p-8 md:p-10 h-full">
              <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                No — if
              </p>
              <ul className="space-y-4">
                {no.map((n, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-text-muted text-[11px] font-mono mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed text-text-secondary">
                      {n}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const faqs = [
    {
      q: "Why is it $5K when I can get a website for $500?",
      a: "Because this isn't a website. A website is one piece of one pillar. The Operator Stack is the whole system. Site, CRM, AI agent, automation, dashboard — all of it talking to each other. That's why one bill replaces five tools.",
    },
    {
      q: "What does the AI follow-up agent actually do?",
      a: "It reads every new lead — form fill, DM, inquiry — and responds within seconds in your voice. It asks the qualifying questions you'd ask, books the call on your calendar if they qualify, and tags the lead so nothing gets lost. You wake up to booked calls, not a backlog.",
    },
    {
      q: "Do I own everything you build?",
      a: "Yes. Source code, domain, data, everything. Nothing is locked behind my account. If you want to fire me after install, you keep the entire system. The retainer is for tuning and new features, not access.",
    },
    {
      q: "Can it really ship in two weeks?",
      a: "Yes. I've done it for ten-plus businesses. Two weeks because I've already built the pieces — I'm fitting them to your business, not inventing them. Most agencies take two months because they're starting from a blank file.",
    },
    {
      q: "What if I just need a website?",
      a: "Then this isn't for you, and that's fine. I still do standalone websites starting at $3K. The Operator Stack is for owners who know the site alone won't fix what's broken.",
    },
    {
      q: "What's the retainer actually for?",
      a: "Tuning the AI agent as your offer evolves, adding new automations as you spot opportunities, fixing anything that breaks, and writing new copy or pages when you need them. It's not 'maintenance.' It's me staying on your team.",
    },
  ];

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-24">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-24">
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
                FAQ
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1]">
                What people ask.
              </h2>
            </div>
          </RevealOnScroll>

          <div>
            {faqs.map((faq, i) => (
              <RevealOnScroll key={i} delay={(i % 3) + 1}>
                <details className="group border-b border-border">
                  <summary className="flex items-center justify-between py-6 cursor-pointer">
                    <span className="text-[16px] font-medium pr-6">{faq.q}</span>
                    <span className="text-text-muted group-open:rotate-45 transition-transform duration-500 text-lg shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="pb-6">
                    <p className="text-text-secondary text-[14px] leading-relaxed max-w-[620px]">
                      {faq.a}
                    </p>
                  </div>
                </details>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ── */
function FinalCTA() {
  return (
    <section className="section-gap relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-text/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <RevealOnScroll>
          <div className="max-w-[840px] mx-auto text-center">
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
              Book the call
            </p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-8">
              Twenty minutes. <br />
              <span className="text-text-secondary">Five if it&apos;s not a fit.</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-14 max-w-[560px] mx-auto">
              I take on three Operator Stack clients a month. If you&apos;re serious, get on the
              call and I&apos;ll tell you straight if this is the move for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowLink href="/contact?ref=operator">Book the call</GlowLink>
              <a
                href="https://instagram.com/jdlo"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn"
              >
                DM @jdlo
              </a>
            </div>

            <p className="text-text-muted text-[13px] mt-10">
              Or email directly:{" "}
              <a
                href="mailto:jordanl4solar@gmail.com"
                className="text-text hover:underline transition-colors"
              >
                jordanl4solar@gmail.com
              </a>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function OperatorPage() {
  return (
    <main>
      <HomeNav />
      <Hero />
      <Problem />
      <Pillars />
      <Deliverables />
      <Pricing />
      <Proof />
      <Process />
      <Fit />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
