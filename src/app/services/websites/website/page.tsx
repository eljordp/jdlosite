"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import BeforeAfter from "@/components/BeforeAfter";

const tiers = [
  {
    name: "Quick Site",
    price: "$497",
    tagline: "Get online. Fast.",
    desc: "One custom page with your branding. Perfect for launches, link-in-bio, funnels, or just getting something live while you figure out the rest.",
    includes: [
      "1 custom-designed page",
      "Mobile responsive",
      "Contact form or booking link",
      "Basic SEO",
      "Delivered in 3-5 days",
    ],
  },
  {
    name: "Standard",
    price: "$1,500",
    tagline: "Look legit. Get found.",
    desc: "A full multi-page website that makes your business look professional and shows up when people search for you. The most popular option.",
    popular: true,
    includes: [
      "Up to 5 custom pages",
      "Custom design around your brand",
      "Mobile responsive",
      "SEO + Google Business setup",
      "Contact forms + booking integration",
      "Social media integration",
      "Analytics setup",
      "Delivered in ~2 weeks",
    ],
  },
  {
    name: "Premium",
    price: "$3,500",
    tagline: "The full operation.",
    desc: "Here\u2019s what $3,500 gets you that $1,500 doesn\u2019t: unlimited pages designed around YOUR customer journey. Advanced SEO that actually ranks. Email capture with automated follow-ups. An admin panel so you can update content yourself. Analytics + conversion tracking. 30 days of post-launch support. Most agencies charge $10K-$20K for this \u2014 and take 3 months.",
    includes: [
      "Unlimited pages",
      "Custom design around your customer journey",
      "Advanced SEO + content strategy",
      "Email capture + automated follow-ups",
      "Admin panel \u2014 update content yourself",
      "Analytics + conversion tracking",
      "E-commerce or booking ready",
      "30 days post-launch support",
      "Payment plans available",
    ],
  },
];

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
            Pick your level.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Three options. No templates. Every site is custom built, mobile responsive, and yours to own forever.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <RevealOnScroll key={tier.name} delay={i + 1}>
                <div className={`rounded-2xl border ${tier.popular ? "border-text" : "border-border"} p-8 flex flex-col h-full relative`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-6 bg-text text-bg text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <p className="text-[11px] font-mono text-text-muted tracking-[0.2em] uppercase mb-3">{tier.name}</p>
                  <p className="font-display text-[clamp(2.2rem,4vw,3.2rem)] tracking-[-0.03em] leading-none mb-2">{tier.price}</p>
                  <p className="font-display text-[1.1rem] tracking-[-0.02em] text-text-secondary mb-4">{tier.tagline}</p>
                  <p className="text-text-secondary text-[14px] leading-relaxed mb-8">{tier.desc}</p>
                  <ul className="space-y-3 mb-10 flex-1">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-text mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?product=website-${tier.name.toLowerCase().replace(" ", "-")}`}
                    className={`${tier.popular ? "magnetic-btn" : "ghost-btn"} w-full justify-center`}
                  >
                    {tier.popular ? <span className="relative z-10">Get Started</span> : "Get Started"}
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-12 max-w-[600px]">
              <p className="text-text-secondary text-[15px] leading-relaxed mb-2">
                <strong className="text-text">Need a redesign?</strong> Same pricing applies. I audit what you have, rebuild from scratch, and keep your Google ranking intact with proper redirects.
              </p>
              <p className="text-text-muted text-[13px] mt-6">
                Not sure which one? <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">DM me on Instagram</a> and I&apos;ll help you pick.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* What Every Site Includes */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
              Every Website Includes
            </p>
          </RevealOnScroll>
          <div className="max-w-[640px]">
            {[
              "Custom design \u2014 not a template with your logo slapped on",
              "Mobile responsive \u2014 looks perfect on every screen",
              "Built to convert \u2014 every page has a purpose",
              "SEO foundations \u2014 show up when people search for you",
              "Full ownership \u2014 yours forever, no monthly lock-in",
              "Hosting setup + deployment included",
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

      <BeforeAfter
        product="website"
        before={{
          title: "Without a real website",
          items: [
            "People Google you and find nothing",
            "Your Instagram bio link goes to Linktree",
            "Customers can't tell if you're legit",
            "You're losing business to competitors who look professional",
            "No way to capture leads while you sleep",
            "You send people your IG instead of a real site",
          ],
        }}
        after={{
          title: "With a JDLO website",
          items: [
            "Show up when people search for what you sell",
            "Custom site that looks like you spent six figures",
            "Visitors turn into leads and customers automatically",
            "You look more established than businesses 10x your size",
            "Email capture and booking working 24/7",
            "A link you're actually proud to share",
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
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">$5K agency website + ops dashboard that replaced 5 different tools</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "$5K", l: "project" }, { v: "5+", l: "tools replaced" }, { v: "20hrs/wk", l: "time saved" }].map(s => (
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
                Tell me about your business and I&apos;ll tell you which tier makes sense. No pressure, no sales pitch.
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
