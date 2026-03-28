"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";

/* ────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────── */

type Category =
  | "All"
  | "Website"
  | "AI"
  | "Enterprise"
  | "E-commerce"
  | "Casino"
  | "Game"
  | "Fashion"
  | "SaaS"
  | "Pitch"
  | "Tool";

const CATEGORIES: Category[] = [
  "All",
  "Website",
  "AI",
  "E-commerce",
  "Enterprise",
  "SaaS",
  "Casino",
  "Game",
  "Pitch",
  "Tool",
  "Fashion",
];

interface Project {
  name: string;
  slug: string;
  categories: Category[];
  headline: string;
  stats: [string, string, string];
}

const PROJECTS: Project[] = [
  { name: "Quanta", slug: "quanta", categories: ["Casino"], headline: "Full online sweepstakes casino from scratch", stats: ["6 game types", "Real-time multiplayer", "$50K+ platform value"] },
  { name: "Club Bot", slug: "club-bot", categories: ["AI", "SaaS"], headline: "AI concierge running a Vegas nightclub operation", stats: ["500+ guests/week", "30hrs/wk saved", "3x list capacity"] },
  { name: "Pomaika\u2018i Co", slug: "pomaikai", categories: ["Website", "AI"], headline: "Centralized operations for a six-figure consultancy", stats: ["$5K project", "5+ tools replaced", "20hrs/wk saved"] },
  { name: "DHL Translator", slug: "dhl-translator", categories: ["Enterprise", "Tool"], headline: "Desktop app processing thousands of shipments monthly", stats: ["10K+ shipments/mo", "15hrs/wk saved", "Desktop native app"] },
  { name: "DHL CRA Quiz", slug: "dhl-cra-quiz", categories: ["Enterprise"], headline: "Competency assessment for enterprise onboarding", stats: ["200+ employees", "85% faster onboarding", "Auto certification"] },
  { name: "PF Chang\u2019s AI Receptionist", slug: "pf-changs", categories: ["AI", "Enterprise"], headline: "AI phone system demo for national restaurant chain", stats: ["Enterprise demo", "Auto call routing", "Lead qualification"] },
  { name: "AI Receptionist", slug: "ai-receptionist", categories: ["AI", "SaaS"], headline: "White-label AI phone system for local businesses", stats: ["Multi-tenant", "24/7 call handling", "Auto booking"] },
  { name: "Loan Agent", slug: "loan-agent", categories: ["AI", "SaaS"], headline: "Multi-tenant loan processing system with AI underwriting", stats: ["Multi-tenant", "Auto processing", "PDF generation"] },
  { name: "West Coast Terpz", slug: "west-coast-terpz", categories: ["Website", "E-commerce"], headline: "E-commerce platform that turned a local brand online", stats: ["$12K+/mo revenue", "24/7 order processing", "3x customer reach"] },
  { name: "Vacaville Appliance", slug: "vacaville-appliance", categories: ["Website", "AI"], headline: "AI receptionist that books appointments while they sleep", stats: ["40+ bookings/mo", "24/7 availability", "$8K+ revenue added"] },
  { name: "The Sticker Smith", slug: "sticker-smith", categories: ["Website", "E-commerce"], headline: "Brand website that turned a print shop into a real business", stats: ["5x online visibility", "New revenue channel", "Pro brand identity"] },
  { name: "Dank Slaps", slug: "dank-slaps", categories: ["E-commerce"], headline: "Niche dropship store system \u2014 one template, infinite niches", stats: ["Instant deploy", "Auto fulfillment", "Scalable system"] },
  { name: "Miiir Beats", slug: "miiir-beats", categories: ["Website", "E-commerce"], headline: "Beat store for a producer with 107M+ streams", stats: ["107M+ streams", "3 license tiers", "Auto delivery"] },
  { name: "fw.wheels", slug: "fw-wheels", categories: ["Website"], headline: "Wheel catalog and ordering system for auto dealer", stats: ["Full catalog", "MRR potential", "Custom built"] },
  { name: "Onhizm", slug: "onhizm", categories: ["Website", "Fashion"], headline: "Custom site for a brand worn by celebrities", stats: ["Empire connections", "Custom redesign", "Premium brand"] },
  { name: "Cubicship", slug: "cubicship", categories: ["Website", "Enterprise"], headline: "Returns portal and main site for DHL premier partner", stats: ["Refund workflow", "Returns portal", "2 platforms"] },
  { name: "Robot Producer", slug: "robot-producer", categories: ["Pitch", "Website"], headline: "Full B2B sales system for selling robots to businesses", stats: ["Full sales kit", "ROI calculator", "4 platforms"] },
  { name: "Best Odds", slug: "best-odds", categories: ["Pitch"], headline: "Interactive presentation for casino odds and strategy", stats: ["Data-driven", "Visual slides", "Animated"] },
  { name: "JDLO The Game", slug: "jdlo-the-game", categories: ["Game"], headline: "Full RPG video game with 7 chapters and cutscenes", stats: ["7 chapters", "20+ characters", "Full original story"] },
  { name: "JDLO Wii", slug: "jdlo-wii", categories: ["Game"], headline: "Wii Sports-inspired multiplayer web game", stats: ["1v1 multiplayer", "Web-based", "Original game"] },
  { name: "Pomaika\u2018i Dashboard", slug: "pomaikai-dashboard", categories: ["Tool", "AI"], headline: "Internal team ops dashboard tracking everything in real time", stats: ["Real-time data", "Team tracking", "Revenue metrics"] },
  { name: "Eagles Automotive", slug: "eagles-automotive", categories: ["Website"], headline: "Auto dealership site with real inventory and photos", stats: ["Live inventory", "Photo gallery", "Lead capture"] },
];

/* ────────────────────────────────────────────────────────────
   CALCULATOR TYPES
   ──────────────────────────────────────────────────────────── */

interface Answers {
  industry: string;
  hasWebsite: string;
  bookings: string;
  marketing: string;
  marketingTypes: string[];
  teamSize: string;
}

const EMPTY_ANSWERS: Answers = {
  industry: "",
  hasWebsite: "",
  bookings: "",
  marketing: "",
  marketingTypes: [],
  teamSize: "",
};

/* ────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────── */

export default function WorkPage() {
  /* ── Filter state ── */
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [filterKey, setFilterKey] = useState(0);

  const handleFilter = (cat: Category) => {
    setActiveFilter(cat);
    setFilterKey((k) => k + 1);
  };

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.categories.includes(activeFilter as Exclude<Category, "All">)
        );

  /* ── Calculator state ── */
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [stepVisible, setStepVisible] = useState(true);

  const advanceTo = useCallback((next: number) => {
    setStepVisible(false);
    setTimeout(() => {
      setStep(next);
      setStepVisible(true);
    }, 250);
  }, []);

  const resetCalc = () => {
    setStepVisible(false);
    setTimeout(() => {
      setStep(0);
      setAnswers(EMPTY_ANSWERS);
      setStepVisible(true);
    }, 250);
  };

  /* ── Build recommendations ── */
  const getRecommendations = () => {
    const recs: string[] = [];
    if (answers.hasWebsite === "No")
      recs.push("Custom website designed to convert");
    if (answers.bookings === "Yes, manually")
      recs.push("AI-powered booking system (saves ~15hrs/week)");
    if (answers.marketing === "No")
      recs.push("Marketing foundation + SEO setup");
    if (answers.teamSize === "5-20 people" || answers.teamSize === "20+")
      recs.push("Internal dashboard for team management");
    if (
      answers.industry === "E-commerce" ||
      answers.industry === "Retail"
    )
      recs.push("Online store with automated ordering");
    if (answers.industry === "Entertainment")
      recs.push("Custom platform for your audience");
    /* Always at least 2 */
    if (recs.length === 0) {
      recs.push("Custom website designed to convert");
      recs.push("Business automation system");
    }
    if (recs.length === 1) {
      recs.push("Business automation system");
    }
    return recs;
  };

  const getTimeSaved = () => {
    let hrs = 10;
    if (answers.bookings === "Yes, manually") hrs += 15;
    if (answers.marketing === "No") hrs += 5;
    if (answers.teamSize === "5-20 people" || answers.teamSize === "20+")
      hrs += 10;
    return hrs >= 30 ? "25-40 hours per week" : "15-25 hours per week";
  };

  const getEstimatedValue = () => {
    let low = 3;
    let high = 8;
    if (answers.hasWebsite === "No") {
      low += 2;
      high += 3;
    }
    if (answers.bookings === "Yes, manually") {
      low += 1;
      high += 2;
    }
    if (answers.teamSize === "5-20 people" || answers.teamSize === "20+") {
      low += 2;
      high += 4;
    }
    return `$${low}K - $${high > 15 ? 15 : high}K`;
  };

  /* ── Reveal-on-scroll ── */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Pill button helper ── */
  const pillClass = (active: boolean) =>
    `px-5 py-2 rounded-full text-[13px] font-medium tracking-[-0.01em] transition-all duration-300 cursor-pointer whitespace-nowrap ${
      active
        ? "bg-text text-bg"
        : "border border-border text-text-muted hover:text-text hover:border-border-hover"
    }`;

  /* ── Calculator option button ── */
  const optionClass = (selected: boolean) =>
    `min-h-[52px] px-6 py-3 rounded-xl text-[15px] font-medium tracking-[-0.01em] border transition-all duration-300 cursor-pointer text-left ${
      selected
        ? "bg-text text-bg border-text"
        : "bg-transparent border-border text-text-secondary hover:text-text hover:border-border-hover"
    }`;

  /* ── Marketing toggle ── */
  const toggleClass = (active: boolean) =>
    `px-5 py-2.5 rounded-lg text-[14px] font-medium border transition-all duration-300 cursor-pointer ${
      active
        ? "bg-text text-bg border-text"
        : "bg-transparent border-border text-text-secondary hover:text-text hover:border-border-hover"
    }`;

  return (
    <PageShell activeSlug="work">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO + FILTER + PROJECTS
          ═══════════════════════════════════════════════════════════ */}
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Hero */}
          <div className="mb-24 md:mb-32">
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
              Work
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-[-0.03em] leading-[0.9] mb-8 hero-animate hero-delay-2">
              Everything I&apos;ve built.
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed max-w-[560px] hero-animate hero-delay-3">
              Casinos, enterprise tools, e-commerce platforms, AI systems,
              games, brand sites &mdash; for businesses from local shops to
              six-figure operations.
            </p>
          </div>

          {/* Filter bar */}
          <div className="mb-16 hero-animate hero-delay-4">
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  className={pillClass(activeFilter === cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects list */}
          <div
            key={filterKey}
            className="transition-opacity duration-500 ease-out"
            style={{ animation: "fadeIn 0.5s ease-out" }}
          >
            {filtered.map((project, i) => (
              <Link
                key={project.name}
                href={`/work/${project.slug}`}
                className="block py-10 sm:py-14 border-b border-border last:border-b-0 group hover:bg-surface/50 -mx-6 px-6 sm:-mx-10 sm:px-10 transition-colors duration-300"
              >
                {/* Category tag */}
                <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-text-muted mb-4">
                  {project.categories.join(" / ")}
                </p>

                {/* Project name */}
                <h2 className="font-display text-[clamp(1.75rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1] mb-3 group-hover:text-text-secondary transition-colors duration-300">
                  {project.name}
                  <span className="inline-block ml-3 text-text-muted text-[0.5em] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
                </h2>

                {/* Headline */}
                <p className="text-text-secondary text-[17px] sm:text-lg leading-relaxed mb-8 max-w-[600px]">
                  {project.headline}
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-x-10 gap-y-3">
                  {project.stats.map((stat) => (
                    <div key={stat} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-text/20 shrink-0" />
                      <span className="text-text font-medium text-[14px] tracking-[-0.01em]">
                        {stat}
                      </span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}

            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-text-muted text-lg">
                  No projects in this category yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — BUSINESS CALCULATOR
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-surface">
        <div className="section-gap">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {/* Section header */}
            <div className="reveal mb-20 md:mb-28">
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
                Interactive
              </p>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">
                What would I build for you?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-[520px]">
                Answer a few quick questions. I&apos;ll show you exactly what
                systems your business needs and what they&apos;re worth.
              </p>
            </div>

            {/* Calculator */}
            <div className="reveal max-w-[680px]">
              {/* Step indicator */}
              {step < 5 && (
                <div className="flex items-center gap-2 mb-10">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        s <= step
                          ? "bg-text w-8"
                          : "bg-border w-4"
                      }`}
                    />
                  ))}
                  <span className="ml-3 font-mono text-[11px] text-text-muted tracking-wider">
                    {step + 1}/5
                  </span>
                </div>
              )}

              {/* Steps container */}
              <div
                className="transition-opacity duration-300 ease-out"
                style={{ opacity: stepVisible ? 1 : 0 }}
              >
                {/* ── Step 0: Industry ── */}
                {step === 0 && (
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] leading-[1.1] mb-10">
                      What kind of business do you run?
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        "Restaurant",
                        "Retail",
                        "E-commerce",
                        "Real Estate",
                        "Agency",
                        "Service Business",
                        "Entertainment",
                        "Other",
                      ].map((opt) => (
                        <button
                          key={opt}
                          className={optionClass(answers.industry === opt)}
                          onClick={() => {
                            setAnswers({ ...answers, industry: opt });
                            advanceTo(1);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Step 1: Website ── */}
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] leading-[1.1] mb-10">
                      Do you have a website?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {["Yes", "No"].map((opt) => (
                        <button
                          key={opt}
                          className={`${optionClass(
                            answers.hasWebsite === opt
                          )} sm:flex-1`}
                          onClick={() => {
                            setAnswers({ ...answers, hasWebsite: opt });
                            advanceTo(2);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {answers.hasWebsite === "No" && (
                      <p className="mt-5 text-text-secondary text-[14px] italic">
                        You&apos;re leaving money on the table.
                      </p>
                    )}
                  </div>
                )}

                {/* ── Step 2: Bookings ── */}
                {step === 2 && (
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] leading-[1.1] mb-10">
                      Do you book appointments or take orders?
                    </h3>
                    <div className="flex flex-col gap-3">
                      {["Yes, manually", "Yes, automated", "No"].map((opt) => (
                        <button
                          key={opt}
                          className={optionClass(answers.bookings === opt)}
                          onClick={() => {
                            setAnswers({ ...answers, bookings: opt });
                            advanceTo(3);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {answers.bookings === "Yes, manually" && (
                      <p className="mt-5 text-text-secondary text-[14px] italic">
                        That&apos;s costing you 10-20 hours a week.
                      </p>
                    )}
                  </div>
                )}

                {/* ── Step 3: Marketing ── */}
                {step === 3 && (
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] leading-[1.1] mb-10">
                      Do you do any online marketing?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                      {["Yes", "No"].map((opt) => (
                        <button
                          key={opt}
                          className={`${optionClass(
                            answers.marketing === opt
                          )} sm:flex-1`}
                          onClick={() => {
                            setAnswers({
                              ...answers,
                              marketing: opt,
                              marketingTypes:
                                opt === "No" ? [] : answers.marketingTypes,
                            });
                            if (opt === "No") advanceTo(4);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    {/* Sub-question: marketing types */}
                    {answers.marketing === "Yes" && (
                      <div className="mt-8">
                        <p className="text-text-muted text-[13px] font-mono tracking-wider uppercase mb-4">
                          What kind?
                        </p>
                        <div className="flex flex-wrap gap-2.5 mb-8">
                          {["Social Media", "Paid Ads", "Email", "SEO"].map(
                            (type) => {
                              const active =
                                answers.marketingTypes.includes(type);
                              return (
                                <button
                                  key={type}
                                  className={toggleClass(active)}
                                  onClick={() =>
                                    setAnswers({
                                      ...answers,
                                      marketingTypes: active
                                        ? answers.marketingTypes.filter(
                                            (t) => t !== type
                                          )
                                        : [...answers.marketingTypes, type],
                                    })
                                  }
                                >
                                  {type}
                                </button>
                              );
                            }
                          )}
                        </div>
                        <button
                          onClick={() => advanceTo(4)}
                          className="magnetic-btn"
                        >
                          <span className="relative z-10">Continue</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* ── Step 4: Team size ── */}
                {step === 4 && (
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] leading-[1.1] mb-10">
                      How big is your team?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["Just me", "2-5 people", "5-20 people", "20+"].map(
                        (opt) => (
                          <button
                            key={opt}
                            className={optionClass(answers.teamSize === opt)}
                            onClick={() => {
                              setAnswers({ ...answers, teamSize: opt });
                              advanceTo(5);
                            }}
                          >
                            {opt}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* ── Step 5: Results ── */}
                {step === 5 && (
                  <div>
                    <h3 className="font-display text-[clamp(1.75rem,4vw,3rem)] tracking-[-0.03em] leading-[1] mb-12">
                      Here&apos;s what I&apos;d build for you
                    </h3>

                    {/* Recommendations list */}
                    <div className="mb-14">
                      {getRecommendations().map((rec, i) => (
                        <div
                          key={rec}
                          className="flex items-start gap-4 py-5 border-b border-border last:border-b-0"
                          style={{
                            animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`,
                          }}
                        >
                          <span className="font-mono text-[12px] text-text-muted mt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-text text-[17px] font-medium tracking-[-0.01em] leading-snug">
                            {rec}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Value metrics */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-14">
                      <div className="bg-bg rounded-2xl border border-border p-8">
                        <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-text-muted mb-3">
                          Time saved
                        </p>
                        <p className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] tracking-[-0.02em]">
                          {getTimeSaved()}
                        </p>
                      </div>
                      <div className="bg-bg rounded-2xl border border-border p-8">
                        <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-text-muted mb-3">
                          Estimated value
                        </p>
                        <p className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] tracking-[-0.02em]">
                          {getEstimatedValue()}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                      <Link href="/contact" className="magnetic-btn">
                        <span className="relative z-10">
                          Let&apos;s make this happen
                        </span>
                      </Link>
                      <button
                        onClick={resetCalc}
                        className="text-text-muted text-[14px] hover:text-text transition-colors cursor-pointer"
                      >
                        Start over
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — CTA
          ═══════════════════════════════════════════════════════════ */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <div className="reveal">
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-[-0.03em] leading-[0.9] mb-4">
              Ready to start?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[440px] mx-auto mb-10">
              Tell me what you need. No discovery calls, no runaround &mdash;
              just a straight answer on what I&apos;d build and what it costs.
            </p>
            <Link href="/contact" className="magnetic-btn">
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Inline keyframe for filter fade */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </PageShell>
  );
}
