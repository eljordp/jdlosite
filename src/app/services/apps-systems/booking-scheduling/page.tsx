"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ROICalculator from "@/components/ROICalculator";
import BeforeAfter from "@/components/BeforeAfter";

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
        subtitle="Pick your industry or drag the sliders to match your business."
        product="booking-scheduling"
        nichePresets={[
          { label: "Restaurant", values: [30, 35, 50] },
          { label: "Salon / Barber", values: [35, 25, 80] },
          { label: "Med Spa", values: [20, 20, 200] },
          { label: "Gym / Fitness", values: [40, 30, 60] },
          { label: "Real Estate", values: [15, 20, 300] },
          { label: "Auto Shop", values: [25, 30, 150] },
        ]}
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

      <BeforeAfter
        product="booking-scheduling"
        before={{
          title: "Without a booking system",
          items: [
            "Playing phone tag with every customer",
            "Double-bookings because you&apos;re managing a spreadsheet",
            "Customers can&apos;t book outside business hours",
            "No-shows because no one sends reminders",
            "You spend hours coordinating schedules",
            "Losing business to competitors with online booking",
          ],
        }}
        after={{
          title: "With a JDLO booking system",
          items: [
            "Customers book 24/7 from your website",
            "Automatic reminders cut no-shows in half",
            "Calendar syncs with your existing tools",
            "Payments collected upfront — no more chasing",
            "Your schedule fills itself while you work",
            "Looks professional, works perfectly on mobile",
          ],
        }}
      />

      {/* Case Study */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">Lifestyle</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">Aesthetics By Kayy</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">Booking system for luxury aesthetics studio in Hawaii</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "24/7", l: "booking" }, { v: "Big Island", l: "Hawaii" }, { v: "Luxury", l: "studio" }].map(s => (
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
                <Link href="/contact?product=booking-scheduling" className="magnetic-btn">
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
