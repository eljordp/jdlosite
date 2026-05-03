"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SplitText from "@/components/SplitText";
import { copy, LANG_LABELS, type Lang, type CopyShape } from "./copy";

const WHATSAPP_NUMBER = "919797596601";
const WHATSAPP_GREETING =
  "Hi%20Kamesh%2C%20I%20saw%20JDLO%20India%20and%20want%20to%20talk%20about%20a%20website%20for%20my%20business.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_GREETING}`;

const LANG_KEY = "jdlo_india_lang";
const DEFAULT_LANG: Lang = "hi";

/* ── India Nav ── */
function IndiaNav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const langs: Lang[] = ["hi", "en"];

  const links =
    lang === "hi"
      ? [
          { label: "प्राइसिंग", href: "#pricing" },
          { label: "Kamesh के बारे में", href: "#about" },
          { label: "आगे क्या आ रहा है", href: "#roadmap" },
          { label: "Receipts", href: "#receipts" },
        ]
      : [
          { label: "Pricing", href: "#pricing" },
          { label: "About Kamesh", href: "#about" },
          { label: "What's Coming", href: "#roadmap" },
          { label: "Receipts", href: "#receipts" },
        ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link href="/india" className="text-[15px] font-semibold tracking-tight">
            JDLO <span className="text-text-muted font-normal">India</span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-[13px] text-text-secondary">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-text transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-bg/40 border border-border rounded-full p-1">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-full transition-colors ${
                    lang === l
                      ? "bg-text text-bg"
                      : "text-text-muted hover:text-text"
                  }`}
                  aria-label={`Switch to ${LANG_LABELS[l]}`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#25D366] text-black font-semibold tracking-tight px-3.5 py-1.5 rounded-full text-[12px] hover:bg-[#1ebe57] transition-colors duration-200"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -mr-1 text-text-muted hover:text-text transition-colors"
              aria-label="Open menu"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor">
                <rect width="20" height="1.5" rx="0.75" />
                <rect y="6.25" width="20" height="1.5" rx="0.75" />
                <rect y="12.5" width="20" height="1.5" rx="0.75" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] bg-bg flex flex-col px-6 py-5 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/india"
            onClick={() => setOpen(false)}
            className="text-[15px] font-semibold tracking-tight"
          >
            JDLO <span className="text-text-muted font-normal">India</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-text-muted hover:text-text text-4xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col flex-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[1.5rem] sm:text-[2rem] font-semibold tracking-[-0.03em] text-text-secondary hover:text-text transition-colors duration-200 py-2.5 border-b border-border/40 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-8 flex flex-col gap-3">
          <div className="flex items-center justify-center gap-1 bg-bg/40 border border-border rounded-full p-1 self-center">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[12px] font-mono tracking-wide px-4 py-1.5 rounded-full transition-colors ${
                  lang === l
                    ? "bg-text text-bg"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] text-black font-semibold tracking-tight px-6 py-3 rounded-full text-[14px]"
          >
            WhatsApp Kamesh
          </a>
        </div>
      </div>
    </>
  );
}

/* ── WhatsApp CTA Button ── */
function WhatsAppButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold tracking-tight px-6 py-3 rounded-full text-[14px] hover:bg-[#1ebe57] transition-colors duration-200 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      {children}
    </a>
  );
}

/* ── Hero ── */
function Hero({ c, lang }: { c: CopyShape; lang: Lang }) {
  return (
    <section className="min-h-[85vh] md:min-h-[92vh] flex flex-col justify-center relative px-6 md:px-10 pt-20">
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <p className="text-text-muted text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-6 md:mb-8 font-mono hero-animate hero-delay-1">
          {c.hero.eyebrow}
        </p>

        <h1
          key={`hero-${lang}`}
          className="font-display hero-animate hero-delay-2 text-[clamp(2rem,8vw,7rem)] leading-[1] md:leading-[0.92] tracking-[-0.035em] max-w-[1100px]"
        >
          <SplitText staggerMs={45}>{c.hero.h1a}</SplitText>
          <br />
          <span className="text-text-secondary italic">
            <SplitText delay={0.3} staggerMs={45}>
              {c.hero.h1b}
            </SplitText>
          </span>
        </h1>

        <div className="hero-animate hero-delay-3 mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
          <p className="text-text-secondary text-base md:text-xl leading-relaxed max-w-[560px]">
            {c.hero.desc}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <WhatsAppButton>{c.hero.ctaPrimary}</WhatsAppButton>
            <a href="#pricing" className="ghost-btn">
              {c.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Problem ── */
function Problem({ c }: { c: CopyShape }) {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            {c.problem.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-10 md:mb-16">
            {c.problem.h2a} <br />
            <span className="text-text-secondary">{c.problem.h2b}</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-2 max-w-[1100px]">
          {c.problem.symptoms.map((s, i) => (
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

/* ── Niches ── */
function Niches({ c }: { c: CopyShape }) {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            {c.niches.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[1000px] mb-4">
            {c.niches.h2}
          </h2>
          <p className="text-text-secondary text-lg max-w-[640px] mb-12 md:mb-20">
            {c.niches.sub}
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {c.niches.items.map((n, i) => (
            <RevealOnScroll key={n.num} delay={(i % 3) + 1}>
              <div className="bg-bg p-6 md:p-10 h-full">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="text-accent text-[11px] font-mono tracking-[0.2em]">
                    {n.num}
                  </span>
                  <span className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase">
                    Niche
                  </span>
                </div>
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] tracking-[-0.03em] leading-[1.05] mb-2">
                  {n.title}
                </h3>
                <p className="text-text-muted text-[12px] font-mono tracking-[0.15em] uppercase mb-6">
                  {n.sub}
                </p>
                <p className="text-text-secondary text-[15px] leading-relaxed">
                  {n.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Deliverables ── */
function Deliverables({ c }: { c: CopyShape }) {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            {c.deliverables.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-10 md:mb-16">
            {c.deliverables.h2a}{" "}
            <span className="text-text-secondary">{c.deliverables.h2b}</span>
          </h2>
        </RevealOnScroll>

        <div>
          {c.deliverables.items.map((d, i) => (
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

/* ── Proof ── */
function Proof({ c }: { c: CopyShape }) {
  return (
    <section id="receipts" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            {c.proof.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-6">
            {c.proof.h2a} <br />
            <span className="text-text-secondary">{c.proof.h2b}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[640px] mb-10 md:mb-16">
            {c.proof.sub}
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.proof.items.map((p, i) => (
            <RevealOnScroll key={p.slug} delay={(i % 3) + 1}>
              <a
                href={`/work/${p.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border rounded-2xl p-7 md:p-8 h-full bg-bg hover:border-text/20 transition-colors duration-300"
              >
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.cats.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-mono tracking-[0.15em] uppercase text-text-muted border border-border rounded-full px-2.5 py-1"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="flex items-baseline justify-between mb-4 gap-3">
                  <h3 className="font-display text-[clamp(1.3rem,2vw,1.7rem)] tracking-[-0.02em] leading-[1.05]">
                    {p.name}
                  </h3>
                  <span className="text-[11px] font-semibold tracking-[-0.02em] shrink-0 gradient-text font-mono">
                    {p.stat}
                  </span>
                </div>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-4">
                  {p.headline}
                </p>
                <span className="text-accent text-[12px] font-mono group-hover:text-text transition-colors">
                  {c.proof.caseStudy}
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ── */
function Pricing({ c }: { c: CopyShape }) {
  return (
    <section
      id="pricing"
      className="section-gap border-t border-border bg-surface"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            {c.pricing.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] mb-6 max-w-[900px]">
            {c.pricing.h2a} <br />
            <span className="text-text-secondary">{c.pricing.h2b}</span>
          </h2>
          <p className="text-text-secondary text-[15px] leading-relaxed max-w-[640px] mb-10 md:mb-16">
            {c.pricing.sub}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {c.pricing.tiers.map((t, i) => (
            <RevealOnScroll key={t.name} delay={(i % 3) + 1}>
              <div
                className={`border rounded-2xl p-6 md:p-8 lg:p-10 h-full flex flex-col ${
                  t.featured
                    ? "border-accent/40 bg-bg shadow-[0_0_40px_rgba(255,255,255,0.04)]"
                    : "border-border bg-bg"
                }`}
              >
                {t.featured && (
                  <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-4">
                    {c.pricing.mostPopular}
                  </p>
                )}
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                  {t.name}
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-[clamp(2.6rem,5vw,3.6rem)] tracking-[-0.04em] leading-none gradient-text">
                    {t.inr}
                  </span>
                </div>
                <p className="text-text-muted text-[12px] font-mono mb-6">
                  {t.usd} · {t.sub}
                </p>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-6 flex-grow">
                  {t.desc}
                </p>
                <p className="text-text text-[12px] font-mono tracking-wide mb-2">
                  {t.fit}
                </p>
                <p className="text-text-muted text-[12px] font-mono tracking-wide mb-6">
                  {t.monthly}
                </p>
                <WhatsAppButton className="w-full justify-center">
                  {t.cta}
                </WhatsAppButton>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <p className="text-text-muted text-[12px] font-mono tracking-wide pt-12 max-w-[640px]">
            {c.pricing.note}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Process ── */
function Process({ c }: { c: CopyShape }) {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            {c.process.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] mb-12 md:mb-20">
            {c.process.h2a}{" "}
            <span className="text-text-secondary">{c.process.h2b}</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {c.process.steps.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i + 1}>
              <div
                className={`py-5 md:py-0 md:pr-12 ${
                  i < 2
                    ? "md:border-r border-b md:border-b-0 border-border"
                    : ""
                } ${i > 0 ? "md:pl-12" : ""}`}
              >
                <span className="text-accent text-[11px] font-mono">
                  {step.num}
                </span>
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

/* ── Team ── */
function Team({ c }: { c: CopyShape }) {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            {c.team.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] mb-10 md:mb-16 max-w-[900px]">
            {c.team.h2a}{" "}
            <span className="text-text-secondary">{c.team.h2b}</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          <RevealOnScroll>
            <div className="bg-bg p-8 md:p-12 h-full">
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                {c.team.jpRole}
              </p>
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.03em] leading-[1.05] mb-4">
                {c.team.jpName}
              </h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                {c.team.jpDesc}
              </p>
              <a
                href="#receipts"
                className="text-accent text-[13px] font-mono hover:text-text transition-colors"
              >
                {c.team.jpLink}
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="bg-bg p-8 md:p-12 h-full flex flex-col">
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                {c.team.kameshRole}
              </p>
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.03em] leading-[1.05] mb-2">
                {c.team.kameshName}
              </h3>
              <p className="text-accent text-[12px] font-mono tracking-wide mb-1">
                {c.team.kameshTitle}
              </p>
              <p className="text-text-muted text-[12px] font-mono tracking-wide mb-5">
                {c.team.kameshLocation} · {c.team.kameshLangs}
              </p>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                {c.team.kameshDesc}
              </p>
              <div className="mt-auto flex flex-col gap-3">
                <WhatsAppButton>{c.team.kameshCta}</WhatsAppButton>
                <a
                  href={`mailto:${c.team.kameshEmail}`}
                  className="text-text-muted hover:text-text text-[12px] font-mono transition-colors"
                >
                  {c.team.kameshEmail}
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── About Kamesh ── */
function AboutKamesh({ c }: { c: CopyShape }) {
  return (
    <section id="about" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            {c.about.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[1000px] mb-10 md:mb-16">
            {c.about.h2a} <br />
            <span className="text-text-secondary">{c.about.h2b}</span>
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <RevealOnScroll>
              <p className="text-text-secondary text-[16px] md:text-[17px] leading-relaxed">
                {c.about.storyP1}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <p className="text-text-secondary text-[16px] md:text-[17px] leading-relaxed">
                {c.about.storyP2}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="text-text-secondary text-[16px] md:text-[17px] leading-relaxed">
                {c.about.storyP3}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={3}>
              <blockquote className="border-l-2 border-accent pl-6 mt-10 italic text-text text-[17px] md:text-[19px] leading-relaxed font-display tracking-tight">
                &ldquo;{c.about.quote}&rdquo;
                <footer className="not-italic font-sans text-text-muted text-[12px] font-mono tracking-wide mt-3 normal-case">
                  — Kamesh Malhotra
                </footer>
              </blockquote>
            </RevealOnScroll>
          </div>

          <div className="space-y-8 lg:sticky lg:top-24">
            <RevealOnScroll>
              <div className="border border-border rounded-2xl p-7 md:p-8 bg-bg">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                  {c.about.qualHeader}
                </p>
                <ul className="space-y-3">
                  {c.about.quals.map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent text-[11px] font-mono mt-1.5 shrink-0">
                        0{i + 1}
                      </span>
                      <span className="text-text-secondary text-[14px] leading-relaxed">
                        {q}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={1}>
              <div className="border border-border rounded-2xl p-7 md:p-8 bg-bg">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                  {c.about.contactHeader}
                </p>
                <div className="space-y-3 mb-7 text-[14px] leading-relaxed">
                  <p className="text-text-secondary">{c.about.contactWa}</p>
                  <p>
                    <a
                      href={`mailto:${c.team.kameshEmail}`}
                      className="text-text-secondary hover:text-text transition-colors"
                    >
                      {c.about.contactEmail}
                    </a>
                  </p>
                  <p className="text-text-muted">{c.about.contactLoc}</p>
                </div>
                <WhatsAppButton className="w-full justify-center">
                  {c.about.cta}
                </WhatsAppButton>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Roadmap ── */
function Roadmap({ c }: { c: CopyShape }) {
  return (
    <section id="roadmap" className="section-gap border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            {c.roadmap.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.7rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-6">
            {c.roadmap.h2a} <br />
            <span className="text-text-secondary">{c.roadmap.h2b}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[640px] mb-10 md:mb-16">
            {c.roadmap.sub}
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {c.roadmap.items.map((r, i) => (
            <RevealOnScroll key={r.title} delay={(i % 3) + 1}>
              <div className="bg-bg p-6 md:p-10 h-full">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted">
                    Coming
                  </span>
                  <span className="text-accent text-[11px] font-mono tracking-[0.15em]">
                    {r.eta}
                  </span>
                </div>
                <h3 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] tracking-[-0.03em] leading-[1.05] mb-4">
                  {r.title}
                </h3>
                <p className="text-text-secondary text-[14px] leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ({ c }: { c: CopyShape }) {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-24">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-24">
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
                {c.faq.eyebrow}
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1]">
                {c.faq.h2}
              </h2>
            </div>
          </RevealOnScroll>

          <div>
            {c.faq.items.map((faq, i) => (
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
function FinalCTA({ c }: { c: CopyShape }) {
  return (
    <section className="section-gap relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-text/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <RevealOnScroll>
          <div className="max-w-[840px] mx-auto text-center">
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
              {c.finalCta.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-8">
              {c.finalCta.h2a} <br />
              <span className="text-text-secondary">{c.finalCta.h2b}</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-14 max-w-[560px] mx-auto">
              {c.finalCta.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton className="!px-8 !py-4 !text-[15px]">
                {c.finalCta.ctaPrimary}
              </WhatsAppButton>
              <a
                href="https://instagram.com/jdlo"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn"
              >
                {c.finalCta.ctaSecondary}
              </a>
            </div>

            <p className="text-text-muted text-[13px] mt-10">
              {c.finalCta.note}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function IndiaContent() {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored === "en" || stored === "hi") {
        setLangState(stored);
      }
    } catch {}
    setHydrated(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {}
  };

  const c = copy[lang];

  return (
    <main lang={lang === "hi" ? "hi" : "en"} className="india-main">
      <IndiaNav lang={lang} setLang={setLang} />
      <div key={hydrated ? lang : "ssr"}>
        <Hero c={c} lang={lang} />
        <Problem c={c} />
        <Niches c={c} />
        <Deliverables c={c} />
        <Proof c={c} />
        <Pricing c={c} />
        <Process c={c} />
        <Team c={c} />
        <AboutKamesh c={c} />
        <Roadmap c={c} />
        <FAQ c={c} />
        <FinalCTA c={c} />
      </div>
    </main>
  );
}
