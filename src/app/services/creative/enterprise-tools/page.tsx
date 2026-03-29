"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import BeforeAfter from "@/components/BeforeAfter";

export default function ProductPage() {
  const includes = [
    "Custom architecture design",
    "Multi-user/multi-tenant",
    "Role-based permissions",
    "Data processing at scale",
    "Admin controls + reporting",
    "Integration with existing systems",
    "Security + compliance",
    "Training + documentation",
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
            Software companies charge six figures. I don&apos;t.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Assessment systems, onboarding platforms, translation tools, internal dashboards — the kind of tools that run real operations.
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $10,000</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">Enterprise tools need proper architecture — multi-user support, role-based permissions, data processing at scale, security, and integration with existing systems. For $10K+ you&apos;re getting software that companies normally pay six figures for from agencies that take 6 months. I build it in weeks. You own it. No licensing fees, no per-seat charges, no monthly subscription to use your own tool.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=enterprise-tools" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <BeforeAfter
        product="enterprise-tools"
        before={{
          title: "Without a custom enterprise tool",
          items: [
            "Paying six figures for off-the-shelf software",
            "Per-seat licensing that scales with your headcount",
            "Features you don't need, missing features you do",
            "6-month implementation timelines",
            "Vendor lock-in — they own your data",
            "Support tickets that go nowhere",
          ],
        }}
        after={{
          title: "With a custom build",
          items: [
            "One-time build, no recurring license fees",
            "Every feature built for YOUR operations",
            "Deployed in weeks, not months",
            "You own the code and the data — forever",
            "Direct line to the person who built it",
            "Scales with you, no per-seat charges",
          ],
        }}
      />
    </PageShell>
  );
}
