import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ScrollHighlightText from "@/components/ScrollHighlightText";
import { GlowLink } from "@/components/GlowButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites — JDLO",
  description:
    "Custom websites that generate revenue, build credibility, and convert visitors into customers. Starting at $3,000.",
  openGraph: {
    title: "Websites — JDLO",
    description:
      "Custom websites that generate revenue, build credibility, and convert visitors into customers.",
  },
};

/* ────────────────────────────────────────────────── */
/*  Hero                                              */
/* ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-end relative px-6 md:px-10 pb-[10vh]">
      {/* ambient light */}
      <div className="absolute top-[18%] right-[6%] w-[600px] h-[600px] bg-text/[0.018] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-10 hero-animate hero-delay-1 font-mono">
          Service &mdash; Websites
        </p>

        <h1 className="font-display hero-animate hero-delay-2 text-[clamp(2.6rem,7vw,7rem)] leading-[0.95] tracking-[-0.03em] max-w-[900px]">
          Websites that make
          <br />
          you money.
        </h1>

        <div className="hero-animate hero-delay-3 mt-14 max-w-[520px]">
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
            Your website is the first thing customers see. If it doesn&apos;t
            look credible, load fast, and make it dead simple to buy &mdash; you&apos;re
            losing money every single day.
          </p>
        </div>

        <div className="hero-animate hero-delay-4 mt-12">
          <GlowLink href="/contact">Start Your Project</GlowLink>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────── */
/*  What You Get                                      */
/* ────────────────────────────────────────────────── */
const products = [
  {
    num: "01",
    title: "Landing Page",
    desc: "One high-converting page. Perfect for launches, funnels, link-in-bio, or just getting online fast. Delivered in 3-5 days.",
    price: "$497",
    href: "/services/websites/landing-page",
  },
  {
    num: "02",
    title: "Website",
    desc: "A full custom website for your business. Two tiers: $1,500 standard or $3,500 premium with advanced SEO, email capture, admin panel, and 30 days support.",
    price: "From $1.5K",
    href: "/services/websites/website",
  },
  {
    num: "03",
    title: "E-commerce Store",
    desc: "Sell online 24/7. Quick store for $497 if you just need to get selling, up to a full custom store with inventory, shipping, and customer accounts.",
    price: "From $497",
    href: "/services/websites/e-commerce-store",
  },
];

function WhatYouGet() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono">
              Products
            </p>
            <p className="text-text-muted text-[11px] font-mono hidden md:block">
              03 products
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-[960px]">
          {products.map((item, i) => (
            <RevealOnScroll key={item.num} delay={(i % 5) + 1}>
              <Link href={item.href} className="block py-10 md:py-14 border-b border-border group hover:bg-surface/50 -mx-6 px-6 sm:-mx-10 sm:px-10 transition-colors duration-300">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-text-muted text-[12px] font-mono tracking-wider shrink-0 pt-1">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4 mb-4">
                      <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] group-hover:text-text-secondary transition-colors duration-300">
                        {item.title}
                        <span className="inline-block ml-2 text-text-muted text-[0.5em] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
                      </h3>
                      <span className="text-[14px] font-semibold tracking-[-0.02em] shrink-0 font-mono">{item.price}</span>
                    </div>
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[600px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────── */
/*  Who This Is For                                   */
/* ────────────────────────────────────────────────── */
function WhoThisIsFor() {
  return (
    <section className="section-gap bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
            Who This Is For
          </p>
        </RevealOnScroll>

        <div className="max-w-[900px]">
          <ScrollHighlightText
            text="Local businesses that need customers to find them online. Brands that are tired of looking cheap. E-commerce stores that need to actually sell. Anyone who knows their website is holding them back."
            className="font-display text-[clamp(1.8rem,3.8vw,3.2rem)] leading-[1.2] tracking-[-0.02em]"
          />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────── */
/*  Pricing                                           */
/* ────────────────────────────────────────────────── */
const included = [
  "Strategy call to understand your business and goals",
  "Custom design — no templates, no shortcuts",
  "Fully responsive across all devices",
  "Contact forms, booking, or e-commerce — whatever you need",
  "SEO setup so search engines can find you",
  "Launch support and handoff",
  "30 days of post-launch fixes included",
];

function Pricing() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-20">
            Pricing
          </p>
        </RevealOnScroll>

        <div className="max-w-[900px]">
          <RevealOnScroll>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] mb-8">
              Websites start at $997.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[560px] mb-6">
              Most projects deliver in under 2 weeks. Payment plans available. Price depends on scope.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <Link href="/packages" className="inline-flex items-center gap-2 text-text text-[14px] font-mono font-medium border-b border-text/30 hover:border-text pb-0.5 transition-all duration-300 mb-16 group">
              See all digital presence packages
              <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <p className="text-text-muted text-[11px] tracking-[0.3em] uppercase font-mono mb-8">
              Every build includes
            </p>
          </RevealOnScroll>

          <div className="max-w-[640px]">
            {included.map((item, i) => (
              <RevealOnScroll key={i} delay={(i % 4) + 1}>
                <div className="py-4 border-b border-border flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] md:text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────── */
/*  Relevant Work                                     */
/* ────────────────────────────────────────────────── */
const caseStudies = [
  {
    name: "Pomaika\u2018i Co",
    result:
      "Full agency website and internal operations dashboard for a growing creative agency.",
    stats: ["$5K build", "20 hrs/wk saved on ops"],
  },
  {
    name: "The Sticker Smith",
    result:
      "Brand website that opened a completely new revenue channel and put the business in front of 5x more customers online.",
    stats: ["New revenue channel", "5x online visibility"],
  },
  {
    name: "West Coast Terpz",
    result:
      "E-commerce storefront processing orders around the clock — no manual work, no missed sales.",
    stats: ["$12K+/mo revenue", "24/7 order processing"],
  },
];

function RelevantWork() {
  return (
    <section className="section-gap bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-20">
            Relevant Work
          </p>
        </RevealOnScroll>

        <div className="max-w-[960px]">
          {caseStudies.map((study, i) => (
            <RevealOnScroll key={study.name} delay={(i % 3) + 1}>
              <div
                className={`py-14 md:py-20 ${
                  i < caseStudies.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <h3 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-5">
                  {study.name}
                </h3>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[600px] mb-8">
                  {study.result}
                </p>
                <div className="flex flex-wrap gap-x-10 gap-y-3">
                  {study.stats.map((stat) => (
                    <span
                      key={stat}
                      className="text-[13px] font-mono tracking-wider text-text-muted"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────── */
/*  CTA                                               */
/* ────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <RevealOnScroll>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] mb-10">
            Let&apos;s build your site.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[480px] mx-auto mb-12">
            Tell me about your business and what you need. I&apos;ll get back to
            you within 24 hours with a plan and a price.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={2}>
          <GlowLink href="/contact">Start Your Project</GlowLink>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────── */
/*  Page                                              */
/* ────────────────────────────────────────────────── */
export default function WebsitesPage() {
  return (
    <PageShell activeSlug="services">
      <Hero />
      <WhatYouGet />
      <WhoThisIsFor />
      <Pricing />
      <RelevantWork />
      <CTA />
    </PageShell>
  );
}
