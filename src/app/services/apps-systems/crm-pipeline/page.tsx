"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ROICalculator from "@/components/ROICalculator";


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
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">A CRM built around YOUR sales process — not some generic tool you have to bend your workflow around. Lead capture from your website, pipeline stages that match how you actually sell, deal tracking with revenue forecasting, follow-up reminders so nothing falls through the cracks, team assignments if you have salespeople, and reporting that shows you where your money is coming from. HubSpot charges $800/month for this. Salesforce charges $1,500/month. This is a one-time build and it&apos;s yours.</p>
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
        subtitle="Most businesses lose 20-40% of leads to disorganization. See what a CRM would recover."
        product="crm-pipeline"
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

    </PageShell>
  );
}
