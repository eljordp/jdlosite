"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ROICalculator from "@/components/ROICalculator";
import BeforeAfter from "@/components/BeforeAfter";


export default function ProductPage() {
  const includes = [
    "24/7 call answering",
    "Lead qualification",
    "Appointment booking",
    "Follow-up messages",
    "Call routing",
    "Custom voice + script",
    "Admin dashboard",
    "Analytics + reporting",
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
            Never miss a call again.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            An AI-powered phone system that answers calls, qualifies leads, books appointments, and follows up. 24/7, while you sleep.
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $1,500</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">That&apos;s the setup fee. Here&apos;s what you&apos;re getting: an AI that answers every call to your business 24/7, qualifies whether the person is worth your time, books appointments directly on your calendar, sends confirmation texts, follows up with no-shows, and gives you a dashboard showing every call, every lead, every booking. The alternative is hiring a receptionist at $3K/month who still misses calls and takes lunch breaks. This pays for itself in the first month.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=ai-receptionist" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <ROICalculator
        title="See What You're Missing"
        subtitle="Pick your industry or drag the sliders to match your business."
        product="ai-receptionist"
        nichePresets={[
          { label: "Restaurant", values: [40, 35, 80] },
          { label: "Salon / Barber", values: [30, 30, 90] },
          { label: "Auto Shop", values: [25, 25, 200] },
          { label: "Med Spa", values: [20, 25, 300] },
          { label: "Real Estate", values: [15, 40, 500] },
          { label: "Plumber / HVAC", values: [20, 40, 350] },
        ]}
        sliders={[
          { label: "Calls per day", min: 5, max: 100, step: 5, default: 20 },
          { label: "Missed calls (%)", min: 10, max: 80, step: 5, default: 30, suffix: "%" },
          { label: "Average customer value", min: 50, max: 2000, step: 50, default: 200, prefix: "$" },
        ]}
        results={[
          { label: "Missed calls per month", calculate: (v) => `${Math.round(v[0] * 30 * (v[1] / 100))} calls` },
          { label: "Revenue you're losing monthly", calculate: (v) => `$${Math.round(v[0] * 30 * (v[1] / 100) * v[2] * 0.3).toLocaleString()}` },
          { label: "Annual revenue recovered", calculate: (v) => `$${Math.round(v[0] * 30 * (v[1] / 100) * v[2] * 0.3 * 12).toLocaleString()}` },
        ]}
      />

      <BeforeAfter
        product="ai-receptionist"
        before={{
          title: "Without an AI receptionist",
          items: [
            "Missing calls after hours = missing money",
            "Paying $3K+/month for a human receptionist",
            "Customers get voicemail and go to competitors",
            "No one books appointments at 2am",
            "Your team wastes hours on repetitive questions",
            "Leads go cold while you sleep",
          ],
        }}
        after={{
          title: "With an AI receptionist",
          items: [
            "Every call answered, every time, 24/7",
            "Books appointments, answers questions, routes calls",
            "Costs a fraction of a human receptionist",
            "Leads captured and followed up automatically",
            "Your team focuses on real work",
            "Customers think they&apos;re talking to a person",
          ],
        }}
      />

      {/* Case Study */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">AI</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">Club Bot / Velvet</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">AI-powered guest list system automating 500+ guests per week for Vegas promoters</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "500+", l: "guests/wk" }, { v: "Fully", l: "automated" }, { v: "Vegas", l: "nightlife" }].map(s => (
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
                <Link href="/contact?product=ai-receptionist" className="magnetic-btn">
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
