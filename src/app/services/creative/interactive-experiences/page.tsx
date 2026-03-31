"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import BeforeAfter from "@/components/BeforeAfter";

export default function ProductPage() {
  const includes = [
    "Custom interaction design",
    "Animated transitions",
    "Data capture + lead gen",
    "Results/output generation",
    "Mobile responsive",
    "Analytics integration",
    "Shareable results",
    "Fast load times",
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
            Make people stop scrolling.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Quizzes, calculators, configurators, interactive stories. Anything that turns passive visitors into engaged users.
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $2,000</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">Quizzes, calculators, configurators. Anything that turns a passive visitor into an engaged lead. These convert 3-5x better than static pages. At $2K that&apos;s one of the highest-ROI things you can add to your site.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=interactive-experiences" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <BeforeAfter
        product="interactive-experiences"
        before={{
          title: "Without interactive content",
          items: [
            "Static pages that people scroll past",
            "1-2% conversion rate on landing pages",
            "No way to qualify leads before they reach out",
            "Generic contact forms that everyone ignores",
            "Content that looks like every other business",
          ],
        }}
        after={{
          title: "With an interactive experience",
          items: [
            "Visitors stop scrolling and start engaging",
            "3-5x higher conversion rates",
            "Leads qualify themselves through your quiz/calculator",
            "You capture email + data before they even contact you",
            "Content that people share and come back to",
          ],
        }}
      />
    </PageShell>
  );
}
