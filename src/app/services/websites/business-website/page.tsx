import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Business Website | JDLO",
  description: "Fully custom, designed to convert, built to grow with you. For businesses that are done looking amateur online.",
};

export default function BusinessWebsiteProduct() {
  const includes = [
    "Unlimited pages",
    "Fully custom design",
    "Advanced SEO + content strategy",
    "E-commerce or booking ready",
    "Email marketing integration",
    "Analytics + conversion tracking",
    "Admin panel if needed",
    "30 days post-launch support",
    "Payment plans available",
  ];

  return (
    <PageShell>
      <section className="min-h-[50vh] flex items-end pb-16 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">Websites</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">The site your business<br />actually deserves.</h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">Fully custom, designed to convert, built to grow with you. For businesses that are done looking amateur online.</p>
        </div>
      </section>

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

      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="max-w-[600px]">
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $3,000</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">Here&apos;s what $3K gets you that a $997 site doesn&apos;t: unlimited pages designed around YOUR customer journey. A/B tested layouts. Advanced SEO that actually ranks. Analytics so you know what&apos;s working. Email capture with automated follow-ups. An admin panel so you can update content yourself. 30 days of support after launch. Payment plans available. Most agencies charge $10K-$20K for this — and take 3 months.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=business-website" className="magnetic-btn"><span className="relative z-10">Get Started</span></Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">Agency Website + Ops</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">Pomaika&apos;i Co</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">$5K agency website + ops dashboard</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">$5K project</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">5+ tools replaced</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">20hrs/wk saved</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </PageShell>
  );
}
