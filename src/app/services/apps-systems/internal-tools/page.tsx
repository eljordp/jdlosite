import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Internal Tools | JDLO",
  description: "Custom internal tools built for exactly how your team works — not off-the-shelf software you bend your process around.",
};

export default function ProductPage() {
  const includes = [
    "Custom app design",
    "Role-based access",
    "Team workflows",
    "Data management",
    "Integrations with existing tools",
    "Mobile + desktop",
    "Training + onboarding",
    "Ongoing support",
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
            Built for exactly how<br />your team works.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Not some off-the-shelf software you bend your process around — a tool that bends around you.
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $5,000</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">This isn&apos;t a quick build — this is a custom application for your team. Role-based access so everyone sees what they need and nothing they don&apos;t. Custom workflows that match exactly how your team operates. Data management, integrations with your existing tools, mobile + desktop access. The kind of software companies pay $50K-$100K to have built by an agency with a 6-month timeline. I build it in weeks, not months, and you own it forever.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=internal-tools" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
