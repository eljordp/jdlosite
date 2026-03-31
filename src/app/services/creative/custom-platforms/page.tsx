"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import IsThisForYou from "@/components/IsThisForYou";
import BeforeAfter from "@/components/BeforeAfter";

export default function ProductPage() {
  const includes = [
    "Discovery + scoping session",
    "Custom architecture",
    "Full development",
    "User accounts + auth",
    "Admin panel",
    "Integrations",
    "Launch + deployment",
    "Ongoing support + iteration",
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-end pb-16 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
            Creative & Custom
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">
            If it doesn&apos;t exist yet, I&apos;ll build it.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Whatever your business needs that you can&apos;t find off the shelf. You describe it, I make it real.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">What&apos;s Included</p>
          </RevealOnScroll>
          <div className="max-w-[640px]">
            {includes.map((item, i) => (
              <RevealOnScroll key={i} delay={(i % 4) + 1}>
                <div className="py-4 border-b border-border flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">{item}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="max-w-[600px]">
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">Custom quote</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">If you&apos;re reading this page, you probably have an idea that doesn&apos;t fit any category. Good. Those are my favorite projects. Tell me what you&apos;re imagining and I&apos;ll tell you exactly what it takes: timeline, cost, and whether it&apos;s even possible. No charge for the conversation.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=custom-platforms" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <BeforeAfter
        product="custom-platforms"
        before={{
          title: "Without a custom platform",
          items: [
            "Using 5 different tools duct-taped together",
            "Paying monthly for software that doesn&apos;t fit",
            "Manual processes that should be automated",
            "Your team works around the tool, not with it",
            "No competitive advantage — everyone uses the same stuff",
            "Scaling means paying more per seat",
          ],
        }}
        after={{
          title: "With a JDLO platform",
          items: [
            "One platform built for exactly what you need",
            "Automated workflows that save hours daily",
            "Your team&apos;s actual process, digitized",
            "Competitive edge no one else has",
            "One-time build, no per-seat licensing",
            "Built to scale with you",
          ],
        }}
      />

      <IsThisForYou
        product="custom-platforms"
        statements={[
          "I have an idea for something that doesn't exist yet",
          "I've looked for off-the-shelf solutions and nothing fits",
          "I need user accounts, admin panels, or complex logic",
          "I want to own the platform, not rent it",
          "I'm ready to invest in building something real",
          "I want one person who builds the whole thing, not an agency",
        ]}
        threshold={3}
        yesMessage="This is exactly what I do. Let's talk."
      />

      {/* Case Study */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">Enterprise</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">Cubicship Translator</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">Enterprise translation app for DHL covering 100+ stores across Chicago</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "100+", l: "stores" }, { v: "DHL", l: "partner" }, { v: "Expanding to", l: "Canada" }].map(s => (
                  <div key={s.l} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-text/20 shrink-0" />
                    <span className="text-text font-medium text-[14px]">{s.v} {s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="max-w-[600px]">
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">
                Ready to build yours?
              </h2>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
                Tell me about your project and I&apos;ll give you a clear plan, timeline, and price within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=custom-platforms" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">
                  DM @jdlo
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
