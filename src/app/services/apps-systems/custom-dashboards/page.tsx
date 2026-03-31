"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ROICalculator from "@/components/ROICalculator";
import BeforeAfter from "@/components/BeforeAfter";

export default function ProductPage() {
  const includes = [
    "Custom design + layout",
    "Real-time data connections",
    "Revenue + lead tracking",
    "Team performance metrics",
    "Customer activity feed",
    "Mobile responsive",
    "Export + reporting",
    "Admin controls",
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
            See your entire business<br />on one screen.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Real-time data, clean interface, designed for how you actually make decisions. No more spreadsheets, no more guessing.
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $3,000</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">For $3K you get a custom-built command center for your business. Real-time revenue tracking, lead pipeline visibility, team performance metrics, customer activity feeds, all on one screen, updated live. No more switching between 5 different tools. No more asking &apos;how are we doing this month?&apos; and waiting for someone to pull a spreadsheet. You open one page and know everything. Includes mobile access, export/reporting, and admin controls.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=custom-dashboards" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <ROICalculator
        title="How Much Time Are You Wasting?"
        subtitle="Pick your industry or drag the sliders to match your business."
        product="custom-dashboards"
        nichePresets={[
          { label: "Agency", values: [12, 6, 50] },
          { label: "E-Commerce", values: [8, 5, 35] },
          { label: "Real Estate", values: [10, 4, 50] },
          { label: "Restaurant", values: [8, 4, 25] },
          { label: "Cannabis", values: [15, 7, 35] },
          { label: "Service Business", values: [10, 5, 40] },
        ]}
        sliders={[
          { label: "Hours pulling reports per week", min: 2, max: 40, step: 2, default: 10 },
          { label: "Tools you switch between", min: 2, max: 10, step: 1, default: 5 },
          { label: "Hourly cost of that time", min: 20, max: 100, step: 10, default: 40, prefix: "$" },
        ]}
        results={[
          { label: "Hours saved per month", calculate: (v) => `${Math.round(v[0] * 4 * 0.8)} hours` },
          { label: "Monthly savings", calculate: (v) => `$${Math.round(v[0] * 4 * 0.8 * v[2]).toLocaleString()}` },
          { label: "Tools replaced", calculate: (v) => `${v[1]} → 1` },
        ]}
      />

      <BeforeAfter
        product="custom-dashboards"
        before={{
          title: "Without a real dashboard",
          items: [
            "Checking 5 different apps to see what&apos;s happening",
            "Asking your team for updates instead of seeing them",
            "No real-time visibility into revenue or operations",
            "Excel spreadsheets you stopped updating weeks ago",
            "Decisions based on gut feel, not data",
            "You find out about problems too late",
          ],
        }}
        after={{
          title: "With a JDLO dashboard",
          items: [
            "Everything you need to know on one screen",
            "Real-time data from every part of your business",
            "Your team updates automatically — no nagging",
            "KPIs, revenue, operations at a glance",
            "Problems show up before they become crises",
            "Make decisions based on what&apos;s actually happening",
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
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">Real-time ops dashboard tracking clients, projects, and revenue in one place</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "5", l: "tools replaced" }, { v: "Real-time", l: "data" }, { v: "20hrs/wk", l: "saved" }].map(s => (
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
                <Link href="/contact?product=custom-dashboards" className="magnetic-btn">
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
