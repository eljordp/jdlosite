import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import HomeNav from "@/components/HomeNav";
import SplitText from "@/components/SplitText";

const WHATSAPP_NUMBER = "919797596601";
const WHATSAPP_GREETING = "Hi%20Kamesh%2C%20I%20saw%20JDLO%20India%20and%20want%20to%20talk%20about%20a%20website%20for%20my%20business.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_GREETING}`;

export const metadata: Metadata = {
  title: "JDLO India — Websites & Systems for Indian Businesses",
  description:
    "We build websites and systems for Indian businesses. Fashion brands, wedding photographers, coaches. WhatsApp-first. Razorpay payments. Built in 2 weeks.",
  openGraph: {
    title: "JDLO India — Websites & Systems for Indian Businesses",
    description:
      "Websites and systems for Indian businesses. WhatsApp-first. Razorpay payments. Built in 2 weeks.",
    url: "https://jdlo.site/india",
  },
};

/* ── WhatsApp CTA Button ── */
function WhatsAppButton({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold tracking-tight px-6 py-3 rounded-full text-[14px] hover:bg-[#1ebe57] transition-colors duration-200 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      {children}
    </a>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col justify-center relative px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-8 hero-animate hero-delay-1 font-mono">
          JDLO India · वेबसाइट्स + सिस्टम्स
        </p>

        <h1 className="font-display hero-animate hero-delay-2 text-[clamp(2.6rem,8vw,7rem)] leading-[0.92] tracking-[-0.035em] max-w-[1100px]">
          <SplitText staggerMs={45}>Your business runs on WhatsApp.</SplitText>
          <br />
          <span className="text-text-secondary italic">
            <SplitText delay={0.3} staggerMs={45}>
              Your website should too.
            </SplitText>
          </span>
        </h1>

        <div className="hero-animate hero-delay-3 mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[560px]">
            We build websites and systems for Indian businesses — fashion brands,
            wedding photographers, coaches. WhatsApp-first. Razorpay built in.
            Live in two weeks.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <WhatsAppButton>WhatsApp Kamesh</WhatsAppButton>
            <a
              href="#pricing"
              className="ghost-btn"
            >
              See pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── The Problem ── */
function Problem() {
  const symptoms = [
    "Customers ask for a website link. You send them your Insta.",
    "Orders pile up in WhatsApp. Half get lost in the chat.",
    "You're charging the same rate as someone with no portfolio site.",
    "Bigger brands are taking your customers because they look more legit.",
    "You spend hours every day answering the same 5 questions.",
  ];

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            The Problem
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-16">
            Your work is great. <br />
            <span className="text-text-secondary">Your online presence makes you look smaller than you are.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-2 max-w-[1100px]">
          {symptoms.map((s, i) => (
            <RevealOnScroll key={i} delay={(i % 3) + 1}>
              <div className="flex items-start gap-4 py-5 border-b border-border">
                <span className="text-accent text-[11px] font-mono mt-1 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-[15px] md:text-[17px] leading-snug">{s}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Who It's For (Niches) ── */
const niches = [
  {
    num: "01",
    title: "Fashion & D2C Brands",
    sub: "Selling on WhatsApp + Insta",
    desc: "A clean catalog site that pulls from your Instagram, lets customers browse without DM-ing, and checks out via Razorpay or sends straight to WhatsApp. Look like the brand you actually are.",
  },
  {
    num: "02",
    title: "Wedding Photographers & Planners",
    sub: "Premium portfolios for premium clients",
    desc: "A portfolio site that makes families pay your full rate without negotiating. Galleries, packages, inquiry form, WhatsApp booking. The kind of site that gets shared at chai and books weddings.",
  },
  {
    num: "03",
    title: "Coaches & Educators",
    sub: "IELTS, fitness, business, dance",
    desc: "A landing page + course checkout that does the selling for you. Razorpay subscriptions, EMI option, automated WhatsApp follow-up. Stop chasing payments — let the system do it.",
  },
];

function Niches() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            Who We Build For
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[1000px] mb-4">
            Three kinds of businesses.
          </h2>
          <p className="text-text-secondary text-lg max-w-[640px] mb-20">
            We&apos;re not a generic web shop. We build for the businesses we&apos;ve seen
            scale fast in India. If you&apos;re one of these, we already know what you need.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {niches.map((n, i) => (
            <RevealOnScroll key={n.num} delay={(i % 3) + 1}>
              <div className="bg-bg p-8 md:p-10 h-full">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="text-accent text-[11px] font-mono tracking-[0.2em]">
                    {n.num}
                  </span>
                  <span className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase">
                    Niche
                  </span>
                </div>
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] tracking-[-0.03em] leading-[1.05] mb-2">
                  {n.title}
                </h3>
                <p className="text-text-muted text-[12px] font-mono tracking-[0.15em] uppercase mb-6">
                  {n.sub}
                </p>
                <p className="text-text-secondary text-[15px] leading-relaxed">
                  {n.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── What You Get ── */
const deliverables = [
  {
    label: "Custom website",
    desc: "Built around your business, not a template. Mobile-first because that's where your customers are.",
  },
  {
    label: "Razorpay + UPI checkout",
    desc: "Accept payments from anywhere in India. Cards, UPI, net banking, EMI — all built in.",
  },
  {
    label: "WhatsApp integration",
    desc: "One-tap WhatsApp button on every page. Auto-replies, order forms, customer chat — your way.",
  },
  {
    label: "Instagram catalog sync",
    desc: "Your latest posts and products auto-pull onto your site. Update Insta, your site updates too.",
  },
  {
    label: "Lead inbox + dashboard",
    desc: "Every inquiry, order, and booking in one place. Searchable. Never lose a customer in WhatsApp again.",
  },
  {
    label: "Hindi or English (or both)",
    desc: "Built for your audience. Hindi, English, or bilingual — your call. Kamesh handles the language work.",
  },
];

function Deliverables() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            What You Get
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-16">
            Six pieces. <span className="text-text-secondary">One system.</span>
          </h2>
        </RevealOnScroll>

        <div>
          {deliverables.map((d, i) => (
            <RevealOnScroll key={d.label} delay={(i % 3) + 1}>
              <div className="grid md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-12 py-8 border-b border-border items-baseline">
                <span className="text-accent text-[11px] font-mono tracking-[0.2em]">
                  0{i + 1}
                </span>
                <h3 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] tracking-[-0.02em] leading-[1.05]">
                  {d.label}
                </h3>
                <p className="text-text-secondary text-[15px] leading-relaxed max-w-[560px]">
                  {d.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Proof / Receipts ── */
const proof = [
  {
    name: "Lonely Love",
    slug: "lonely-love",
    cats: ["Fashion", "E-commerce"],
    headline: "Custom e-commerce site for a clothing brand with a real following.",
    stat: "Full storefront",
  },
  {
    name: "Onhizm",
    slug: "onhizm",
    cats: ["Fashion", "Website"],
    headline: "Custom site for a brand worn by celebrities. Premium positioning.",
    stat: "Empire connections",
  },
  {
    name: "Aesthetics By Kayy",
    slug: "aesthetics-by-kayy",
    cats: ["Website", "Booking"],
    headline: "Luxury skin, brow & lash studio with full booking system.",
    stat: "Hawaii-based",
  },
  {
    name: "Vacaville Appliance",
    slug: "vacaville-appliance",
    cats: ["AI", "Service Business"],
    headline: "AI receptionist that books appointments while the owner sleeps.",
    stat: "40+ bookings/mo",
  },
  {
    name: "West Coast Terpz",
    slug: "west-coast-terpz",
    cats: ["E-commerce", "Website"],
    headline: "Turned a local brand into an online business doing real revenue.",
    stat: "$12K+/mo",
  },
  {
    name: "Pomaika'i Co",
    slug: "pomaikai",
    cats: ["Website", "AI"],
    headline: "Centralized operations for a six-figure consultancy. Five tools → one.",
    stat: "20 hrs/wk saved",
  },
];

function Proof() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            Receipts
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-6">
            We&apos;ve done this before. <br />
            <span className="text-text-secondary">For real businesses doing real numbers.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[640px] mb-16">
            30+ projects shipped — fashion brands, service businesses, e-commerce
            stores, AI tools. Click any project to see the full case study.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proof.map((p, i) => (
            <RevealOnScroll key={p.slug} delay={(i % 3) + 1}>
              <Link
                href={`/work/${p.slug}`}
                className="group block border border-border rounded-2xl p-7 md:p-8 h-full bg-bg hover:border-text/20 transition-colors duration-300"
              >
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.cats.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] font-mono tracking-[0.15em] uppercase text-text-muted border border-border rounded-full px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="flex items-baseline justify-between mb-4 gap-3">
                  <h3 className="font-display text-[clamp(1.3rem,2vw,1.7rem)] tracking-[-0.02em] leading-[1.05]">
                    {p.name}
                  </h3>
                  <span className="text-[11px] font-semibold tracking-[-0.02em] shrink-0 gradient-text font-mono">
                    {p.stat}
                  </span>
                </div>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-4">
                  {p.headline}
                </p>
                <span className="text-accent text-[12px] font-mono group-hover:text-text transition-colors">
                  See case study →
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-accent text-[14px] font-mono font-medium hover:text-text border-b border-accent/40 hover:border-text pb-0.5 transition-all duration-300 mt-12 group"
          >
            See all 30+ projects
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Pricing ── */
const tiers = [
  {
    name: "Starter",
    inr: "₹85,000",
    usd: "≈ $1,000",
    sub: "one-time",
    desc: "Single-page site, WhatsApp + Razorpay integration, mobile-first design. Live in 7 days.",
    fit: "Best for: small D2C brands, solo coaches, individual photographers",
    monthly: "+ ₹4,000/mo hosting & care",
  },
  {
    name: "Studio",
    inr: "₹2,50,000",
    usd: "≈ $3,000",
    sub: "one-time",
    desc: "Multi-page site, full catalog, lead inbox, Instagram sync, automated WhatsApp follow-up. Live in 14 days.",
    fit: "Best for: established fashion brands, wedding studios, coaching businesses",
    monthly: "+ ₹8,000/mo hosting & care",
    featured: true,
  },
  {
    name: "Brand",
    inr: "₹5,00,000",
    usd: "≈ $6,000",
    sub: "one-time",
    desc: "Everything in Studio + custom features, AI follow-up agent, multi-language (Hindi + English), priority support.",
    fit: "Best for: brands doing ₹10L+/mo who want to look the part",
    monthly: "+ ₹15,000/mo hosting & care",
  },
];

function Pricing() {
  return (
    <section id="pricing" className="section-gap border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            Pricing
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] mb-6 max-w-[900px]">
            Three tiers. <br />
            <span className="text-text-secondary">Pick what fits your business.</span>
          </h2>
          <p className="text-text-secondary text-[15px] leading-relaxed max-w-[640px] mb-16">
            All prices in INR. Payment plans available — 50% to start, 50% on delivery.
            EMI option through Razorpay. No hidden fees, no surprise bills.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <RevealOnScroll key={t.name} delay={(i % 3) + 1}>
              <div
                className={`border rounded-2xl p-8 md:p-10 h-full flex flex-col ${
                  t.featured
                    ? "border-accent/40 bg-bg shadow-[0_0_40px_rgba(255,255,255,0.04)]"
                    : "border-border bg-bg"
                }`}
              >
                {t.featured && (
                  <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-4">
                    Most Popular
                  </p>
                )}
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                  {t.name}
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-[clamp(2.6rem,5vw,3.6rem)] tracking-[-0.04em] leading-none gradient-text">
                    {t.inr}
                  </span>
                </div>
                <p className="text-text-muted text-[12px] font-mono mb-6">
                  {t.usd} · {t.sub}
                </p>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-6 flex-grow">
                  {t.desc}
                </p>
                <p className="text-text text-[12px] font-mono tracking-wide mb-2">
                  {t.fit}
                </p>
                <p className="text-text-muted text-[12px] font-mono tracking-wide mb-6">
                  {t.monthly}
                </p>
                <WhatsAppButton className="w-full justify-center">
                  Talk to Kamesh
                </WhatsAppButton>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <p className="text-text-muted text-[12px] font-mono tracking-wide pt-12 max-w-[640px]">
            Not sure which tier? WhatsApp Kamesh — he&apos;ll ask you 5 questions
            and tell you straight which one fits.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── How It Works ── */
function Process() {
  const steps = [
    {
      num: "01",
      title: "WhatsApp Kamesh",
      desc: "Send a message. He'll ask about your business, your customers, and what you need. 10 minutes, in Hindi or English. No sales pitch.",
    },
    {
      num: "02",
      title: "Pay 50%, we start",
      desc: "Lock your slot with 50% via Razorpay or UPI. We start the build the same day. You get progress updates every few days on WhatsApp.",
    },
    {
      num: "03",
      title: "Site goes live",
      desc: "7 to 14 days depending on tier. You see it before launch, not after. Pay the remaining 50% on delivery. Site is yours forever.",
    },
  ];

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            How It Works
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] mb-20">
            Three steps. <span className="text-text-secondary">No middlemen.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i + 1}>
              <div
                className={`py-5 md:py-0 md:pr-12 ${
                  i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""
                } ${i > 0 ? "md:pl-12" : ""}`}
              >
                <span className="text-accent text-[11px] font-mono">{step.num}</span>
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] tracking-[-0.02em] mt-3 mb-4 leading-[1.1]">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-[14px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── The Team ── */
function Team() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            The Team
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] mb-16 max-w-[900px]">
            Built by JDLO. <span className="text-text-secondary">Run in India by Kamesh.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          <RevealOnScroll>
            <div className="bg-bg p-8 md:p-12 h-full">
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                JDLO · Founder
              </p>
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.03em] leading-[1.05] mb-4">
                JP — Builder
              </h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                Builds the entire system. 20+ projects shipped. Clients in the US,
                Vegas, Hawaii, and now India. Every site is built personally — no
                outsourcing, no templates, no agency fluff.
              </p>
              <Link
                href="/work"
                className="text-accent text-[13px] font-mono hover:text-text transition-colors"
              >
                See the work →
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="bg-bg p-8 md:p-12 h-full">
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6">
                JDLO India · Director
              </p>
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] tracking-[-0.03em] leading-[1.05] mb-4">
                Kamesh Malhotra — Your Point of Contact
              </h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                Based in India. Speaks your language. Handles every conversation
                from first WhatsApp message to launch day. Knows the Indian market
                inside out — what works, what doesn&apos;t, and what you can actually charge.
              </p>
              <WhatsAppButton>Message Kamesh</WhatsAppButton>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const faqs = [
    {
      q: "Why ₹85,000 when I can get a website for ₹10,000?",
      a: "Because that ₹10,000 site is a Wix template that breaks in 6 months and makes you look like every other small business. We build custom — your branding, your offer, your customer flow. Razorpay, WhatsApp, Instagram sync, lead inbox, all integrated. It's not a website, it's a system.",
    },
    {
      q: "How do payments work? Razorpay or international?",
      a: "All payments to us go through Razorpay or UPI in INR. No need for international banking, no currency conversion headaches. Kamesh handles all collection. You pay in rupees like any other Indian business.",
    },
    {
      q: "Can I pay in EMI?",
      a: "Yes. Razorpay supports no-cost EMI on most credit cards (3-12 months). For Studio and Brand tiers we also offer a 50/50 plan — half upfront to start, half on delivery.",
    },
    {
      q: "Will the site be in Hindi or English?",
      a: "Whichever you want. Most of our clients do bilingual — English for credibility, Hindi for warmth. We can also do regional languages (Tamil, Telugu, Marathi, etc.) on the Brand tier.",
    },
    {
      q: "Do I own everything you build?",
      a: "Yes. Source code, domain, customer data, all of it. Nothing locked behind our account. If you want to leave us after launch, you keep the entire system. We just won't be there to fix things when they break.",
    },
    {
      q: "What if I just need a simple WhatsApp catalog?",
      a: "Then go with Starter — that's exactly what it's for. WhatsApp catalog, basic site, payments. Live in 7 days for ₹85K. Most fashion D2C brands start here.",
    },
    {
      q: "Can you handle SEO for India?",
      a: "Basic SEO is included in every tier — Google My Business setup, meta tags, sitemap. Deep SEO (content, backlinks, ranking work) is a separate engagement we can scope after launch.",
    },
  ];

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-24">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-24">
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
                FAQ
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1]">
                What people ask.
              </h2>
            </div>
          </RevealOnScroll>

          <div>
            {faqs.map((faq, i) => (
              <RevealOnScroll key={i} delay={(i % 3) + 1}>
                <details className="group border-b border-border">
                  <summary className="flex items-center justify-between py-6 cursor-pointer">
                    <span className="text-[16px] font-medium pr-6">{faq.q}</span>
                    <span className="text-text-muted group-open:rotate-45 transition-transform duration-500 text-lg shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="pb-6">
                    <p className="text-text-secondary text-[14px] leading-relaxed max-w-[620px]">
                      {faq.a}
                    </p>
                  </div>
                </details>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ── */
function FinalCTA() {
  return (
    <section className="section-gap relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-text/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <RevealOnScroll>
          <div className="max-w-[840px] mx-auto text-center">
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
              Ready to start
            </p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-8">
              One WhatsApp message. <br />
              <span className="text-text-secondary">That&apos;s how it starts.</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-14 max-w-[560px] mx-auto">
              Tell Kamesh about your business. He&apos;ll tell you straight if we
              can help, what tier fits, and how fast we can ship. No sales call,
              no pitch deck.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton className="!px-8 !py-4 !text-[15px]">
                WhatsApp Kamesh Now
              </WhatsAppButton>
              <a
                href="https://instagram.com/jdlo"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn"
              >
                See JDLO on Instagram
              </a>
            </div>

            <p className="text-text-muted text-[13px] mt-10">
              Kamesh responds within 2 hours · 9am–11pm IST
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function IndiaPage() {
  return (
    <main>
      <HomeNav />
      <Hero />
      <Problem />
      <Niches />
      <Deliverables />
      <Proof />
      <Pricing />
      <Process />
      <Team />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
