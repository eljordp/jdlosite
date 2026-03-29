"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ROICalculator from "@/components/ROICalculator";

export default function ProductPage() {
  const includes = [
    "Online booking page",
    "Calendar integration",
    "Automatic confirmations",
    "Reminder emails/SMS",
    "Rescheduling + cancellation",
    "Custom availability rules",
    "Mobile friendly",
    "Admin overview",
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
            Let them book without<br />the back-and-forth.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Customers pick a time, it shows up on your calendar, everyone gets a confirmation. No phone tag, no email chains.
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $1,000</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">Simple booking systems that let customers pick a time without the back-and-forth. Calendar syncs, automatic confirmations, reminder texts/emails, rescheduling. Starts at $1K for basic booking. Complex scheduling with team management, multiple locations, or custom rules runs higher.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=booking-scheduling" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <ROICalculator
        title="Calculate Your Recovered Revenue"
        subtitle="How many appointments does your business lose to phone tag and scheduling friction?"
        product="booking-scheduling"
        sliders={[
          { label: "Appointment requests per week", min: 5, max: 100, step: 5, default: 20 },
          { label: "Lost to scheduling friction (%)", min: 10, max: 60, step: 5, default: 30, suffix: "%" },
          { label: "Average appointment value", min: 25, max: 500, step: 25, default: 100, prefix: "$" },
        ]}
        results={[
          { label: "Appointments lost per month", calculate: (v) => `${Math.round(v[0] * 4 * (v[1] / 100))} appointments` },
          { label: "Revenue lost monthly", calculate: (v) => `$${Math.round(v[0] * 4 * (v[1] / 100) * v[2]).toLocaleString()}` },
          { label: "Annual revenue recovered", calculate: (v) => `$${Math.round(v[0] * 4 * (v[1] / 100) * v[2] * 12).toLocaleString()}` },
        ]}
      />
    </PageShell>
  );
}
