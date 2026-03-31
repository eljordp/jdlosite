"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ROICalculator from "@/components/ROICalculator";
import BeforeAfter from "@/components/BeforeAfter";


export default function ProductPage() {
  const includes = [
    "Lead capture + import",
    "Pipeline stages",
    "Deal tracking",
    "Follow-up reminders",
    "Revenue reporting",
    "Team assignments",
    "Email integration",
    "Custom fields + filters",
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
            Never lose a sale<br />to disorganization.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Track every lead from first touch to closed deal. Know exactly where your money is coming from and what needs attention.
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $2,500</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">A CRM built around YOUR sales process. Not some generic tool you have to bend your workflow around. Lead capture from your website, pipeline stages that match how you actually sell, deal tracking with revenue forecasting, follow-up reminders so nothing falls through the cracks, team assignments if you have salespeople, and reporting that shows you where your money is coming from. HubSpot charges $800/month for this. Salesforce charges $1,500/month. This is a one-time build and it&apos;s yours.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=crm-pipeline" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <ROICalculator
        title="What Are Lost Leads Costing You?"
        subtitle="Pick your industry or drag the sliders to match your business."
        product="crm-pipeline"
        nichePresets={[
          { label: "Restaurant", values: [40, 25, 500] },
          { label: "Real Estate", values: [30, 30, 5000] },
          { label: "Nightlife", values: [50, 20, 800] },
          { label: "E-Commerce", values: [200, 25, 150] },
          { label: "Service Business", values: [60, 30, 1500] },
          { label: "Cannabis", values: [80, 20, 300] },
        ]}
        sliders={[
          { label: "Leads per month", min: 10, max: 500, step: 10, default: 50 },
          { label: "Leads you lose to follow-up gaps (%)", min: 10, max: 50, step: 5, default: 25, suffix: "%" },
          { label: "Average deal value", min: 100, max: 10000, step: 100, default: 1000, prefix: "$" },
        ]}
        results={[
          { label: "Deals lost per month", calculate: (v) => `${Math.round(v[0] * (v[1] / 100))} deals` },
          { label: "Revenue lost monthly", calculate: (v) => `$${Math.round(v[0] * (v[1] / 100) * v[2]).toLocaleString()}` },
          { label: "Revenue recovered annually", calculate: (v) => `$${Math.round(v[0] * (v[1] / 100) * v[2] * 12 * 0.5).toLocaleString()}` },
        ]}
      />

      <BeforeAfter
        product="crm-pipeline"
        before={{
          title: "Without a real CRM",
          items: [
            "Leads in your DMs, email, notes app, and head",
            "No idea where each deal stands",
            "Following up late or not at all",
            "Losing track of who said what when",
            "Revenue feels random instead of predictable",
            "You&apos;re guessing instead of managing",
          ],
        }}
        after={{
          title: "With a JDLO CRM",
          items: [
            "Every lead, deal, and conversation in one place",
            "Pipeline view shows exactly where everything stands",
            "Automatic reminders so nothing falls through",
            "Follow-up templates that don&apos;t feel automated",
            "Revenue becomes predictable, not random",
            "You manage your business instead of chasing it",
          ],
        }}
      />

      {/* Case Study */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">E-commerce</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">West Coast Terpz</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">From Instagram DMs to a full pipeline doing $12K+/month in online sales</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "$12K+/mo", l: "" }, { v: "Full", l: "pipeline" }, { v: "DM to", l: "checkout" }].map(s => (
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
                <Link href="/contact?product=crm-pipeline" className="magnetic-btn">
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
