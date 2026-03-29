import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Website | JDLO",
  description: "Custom websites from $1,500 to $3,500+. Designed to convert, built to grow with your business.",
};

export default function ProductPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-end pb-16 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
            Websites
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">
            A real website for a real business.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Not a template. Not a page builder. A custom site designed around your business, your customers, and what makes you money.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
              Every Website Includes
            </p>
          </RevealOnScroll>
          <div className="max-w-[640px]">
            {[
              "Custom design — not a template with your logo slapped on",
              "Mobile responsive — looks perfect on every screen",
              "Built to convert — every page has a purpose",
              "SEO foundations — show up when people search for you",
              "Contact forms, booking, or whatever you need",
              "Full ownership — it's yours, forever, no monthly lock-in",
            ].map((item, i) => (
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

      {/* Pricing Tiers */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
              Pricing
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-16">
              Two levels. Pick what fits.
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 gap-6 max-w-[800px]">
            {/* Standard */}
            <RevealOnScroll delay={1}>
              <div className="rounded-2xl border border-border p-8 flex flex-col h-full">
                <p className="text-[11px] font-mono text-text-muted tracking-[0.2em] uppercase mb-3">Standard</p>
                <p className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-none mb-4">$1,500</p>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-8">
                  Up to 5 pages. Custom design. SEO. Contact forms. Everything a small business needs to look professional and get found online. Delivered in 2 weeks.
                </p>
                <ul className="space-y-3 mb-10 flex-1">
                  {["Up to 5 custom pages", "Mobile responsive", "SEO + Google Business setup", "Contact form + booking link", "Social media integration", "Analytics setup", "Delivered in ~2 weeks"].map(item => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-text mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?product=website-standard" className="ghost-btn w-full justify-center">Get Started</Link>
              </div>
            </RevealOnScroll>

            {/* Premium */}
            <RevealOnScroll delay={2}>
              <div className="rounded-2xl border border-text p-8 flex flex-col h-full relative">
                <span className="absolute -top-3 left-6 bg-text text-bg text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full">
                  Best Value
                </span>
                <p className="text-[11px] font-mono text-text-muted tracking-[0.2em] uppercase mb-3">Premium</p>
                <p className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-none mb-4">$3,500</p>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-8">
                  Here&apos;s what $3,500 gets you that $1,500 doesn&apos;t: unlimited pages designed around YOUR customer journey. Advanced SEO that actually ranks. Email capture with automated follow-ups. An admin panel so you can update content yourself. Analytics + conversion tracking. 30 days of post-launch support. Most agencies charge $10K-$20K for this — and take 3 months.
                </p>
                <ul className="space-y-3 mb-10 flex-1">
                  {["Unlimited pages", "Custom design around your customer journey", "Advanced SEO + content strategy", "Email capture + automated follow-ups", "Admin panel — update content yourself", "Analytics + conversion tracking", "E-commerce or booking ready", "30 days post-launch support", "Payment plans available"].map(item => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-text mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?product=website-premium" className="magnetic-btn w-full justify-center">
                  <span className="relative z-10">Get Started</span>
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <p className="text-text-muted text-[13px] mt-10 max-w-[500px]">
              Need a redesign of an existing site? Same pricing applies — I audit what you have, then rebuild it from scratch. Your Google ranking stays intact.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">Agency</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">Pomaika&apos;i Co</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">$5K agency website + ops dashboard that replaced 5 different tools</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "$5K", l: "Project" }, { v: "5+", l: "Tools replaced" }, { v: "20hrs/wk", l: "Time saved" }].map(s => (
                  <div key={s.l} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-text/20 shrink-0" />
                    <span className="text-text font-medium text-[14px]">{s.v} {s.l.toLowerCase()}</span>
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
                Want something like this?
              </h2>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
                Tell me what you&apos;re building and I&apos;ll tell you exactly what it takes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="magnetic-btn">
                  <span className="relative z-10">Start a Project</span>
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
