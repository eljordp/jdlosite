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
const deliverables = [
  {
    num: "01",
    title: "Custom design that matches your brand",
    desc: "Not a template with your logo slapped on. Every page is designed around your business, your customers, and what makes you different.",
  },
  {
    num: "02",
    title: "Built to convert",
    desc: "Every page has a job. Whether it's booking a call, buying a product, or filling out a form — your site moves people to action.",
  },
  {
    num: "03",
    title: "Mobile-first",
    desc: "Over half your visitors are on their phone. Your site will look and work perfectly on every screen size, every time.",
  },
  {
    num: "04",
    title: "Fast load times",
    desc: "Slow sites lose customers. Your pages load instantly — which means better search rankings, lower bounce rates, and more revenue.",
  },
  {
    num: "05",
    title: "SEO foundations",
    desc: "Show up when people search for what you sell. Every site is built with the technical foundations that search engines reward.",
  },
  {
    num: "06",
    title: "Full ownership",
    desc: "No monthly lock-in. No hostage situation. You own your site, your domain, your content — forever.",
  },
];

function WhatYouGet() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-20">
            What You Get
          </p>
        </RevealOnScroll>

        <div className="max-w-[960px]">
          {deliverables.map((item, i) => (
            <RevealOnScroll key={item.num} delay={(i % 5) + 1}>
              <div className="py-10 md:py-14 border-b border-border first:border-t first:border-border group">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-text-muted text-[12px] font-mono tracking-wider shrink-0 pt-1">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-[600px]">
                      {item.desc}
                    </p>
                  </div>
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
  const packages = [
    {
      name: "Landing Page",
      price: "$997",
      desc: "One high-converting page. Perfect for launches, funnels, or testing an idea fast.",
      includes: ["1 custom-designed page", "Mobile responsive", "Contact form or CTA", "Delivered in 5 days"],
      cta: "Buy Now",
      href: "/contact?package=landing-page",
    },
    {
      name: "Starter Website",
      price: "$1,500",
      desc: "A real website that makes you look legit. 5 pages, fully custom, ready to grow.",
      includes: ["Up to 5 pages", "Custom design", "Mobile responsive", "Basic SEO setup", "Contact form", "Delivered in 10 days"],
      cta: "Buy Now",
      href: "/contact?package=starter-website",
      popular: true,
    },
    {
      name: "Full Custom",
      price: "From $3K",
      desc: "E-commerce, dashboards, complex sites, integrations. Tell me what you need.",
      includes: ["Unlimited pages", "Custom everything", "E-commerce / booking / portal", "SEO + analytics", "30 days post-launch support", "Payment plans available"],
      cta: "Let\u2019s Talk",
      href: "/contact?package=full-custom",
    },
  ];

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
            Packages
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em] mb-4">
            Pick your level.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-[500px] mb-16">
            Start small or go all in. Every package is custom built &mdash; no templates, no shortcuts.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <RevealOnScroll key={pkg.name} delay={i + 1}>
              <div className={`rounded-2xl border ${pkg.popular ? "border-text" : "border-border"} p-8 flex flex-col h-full relative`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 bg-text text-bg text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <p className="text-[11px] font-mono text-text-muted tracking-[0.2em] uppercase mb-3">{pkg.name}</p>
                <p className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-none mb-4">{pkg.price}</p>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-8">{pkg.desc}</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-text mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={pkg.href} className={`${pkg.popular ? "magnetic-btn" : "ghost-btn"} w-full justify-center`}>
                  {pkg.popular ? <span className="relative z-10">{pkg.cta}</span> : pkg.cta}
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <p className="text-text-muted text-[13px] text-center mt-10">
            Not sure which one? <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">DM me on Instagram</a> and I&apos;ll help you pick.
          </p>
        </RevealOnScroll>
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
