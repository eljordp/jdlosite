"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ROICalculator from "@/components/ROICalculator";
import BeforeAfter from "@/components/BeforeAfter";


export default function ProductPage() {
  const includes = [
    "Workflow analysis + mapping",
    "Custom automation build",
    "Integration with your existing tools",
    "Email/SMS automation",
    "Data sync between platforms",
    "Testing + optimization",
    "Training walkthrough",
    "30 days support",
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-end pb-16 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
            Apps & Systems
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">
            Stop doing it manually.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            I build the systems that handle your repetitive work: data entry, follow-ups, scheduling, reporting. So you can focus on what actually makes money.
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
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">I map out every repetitive task in your business, then build systems that handle them automatically. Data entry, follow-ups, scheduling, invoicing, reporting. Gone. Most clients save 20-40 hours per week. At even $25/hr that&apos;s $2K-$4K/month in saved labor. This pays for itself before the first invoice is due.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=automation-workflows" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <ROICalculator
        title="Calculate Your Savings"
        subtitle="Pick your industry or drag the sliders to match your business."
        product="automation-workflows"
        nichePresets={[
          { label: "Restaurant", values: [30, 20, 3] },
          { label: "E-Commerce", values: [20, 25, 2] },
          { label: "Real Estate", values: [15, 40, 2] },
          { label: "Agency", values: [25, 50, 3] },
          { label: "Cannabis", values: [35, 22, 4] },
          { label: "Service Business", values: [20, 30, 2] },
        ]}
        sliders={[
          { label: "Hours spent on manual tasks per week", min: 5, max: 80, step: 5, default: 25 },
          { label: "Hourly cost of that labor", min: 15, max: 100, step: 5, default: 30, prefix: "$" },
          { label: "Team members doing this work", min: 1, max: 20, step: 1, default: 2 },
        ]}
        results={[
          { label: "Hours saved per month", calculate: (v) => `${Math.round(v[0] * v[2] * 4 * 0.8)} hours` },
          { label: "Monthly savings", calculate: (v) => `$${Math.round(v[0] * v[2] * 4 * 0.8 * v[1]).toLocaleString()}` },
          { label: "Annual savings", calculate: (v) => `$${Math.round(v[0] * v[2] * 4 * 0.8 * v[1] * 12).toLocaleString()}` },
        ]}
      />

      <BeforeAfter
        product="automation-workflows"
        before={{
          title: "Without automation",
          items: [
            "Copy-pasting data between spreadsheets",
            "Manually sending follow-up emails",
            "Things falling through the cracks weekly",
            "Your team does the same tasks every single day",
            "No visibility into what&apos;s happening when",
            "You&apos;re the bottleneck in every process",
          ],
        }}
        after={{
          title: "With JDLO automation",
          items: [
            "Data flows between systems automatically",
            "Follow-ups send themselves on schedule",
            "Nothing gets missed — the system catches everything",
            "Your team focuses on work that actually matters",
            "Real-time visibility into every workflow",
            "The business runs even when you&apos;re not looking",
          ],
        }}
      />

      {/* Case Study */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">Agency</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">Pomaika&apos;i Co</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">Operations dashboard that replaced 5 different tools and saved 20 hours per week</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "5", l: "tools replaced" }, { v: "20hrs/wk", l: "saved" }, { v: "$5K", l: "project" }].map(s => (
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
                <Link href="/contact?product=automation-workflows" className="magnetic-btn">
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
