import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GlowLink } from "@/components/GlowButton";
import SplitText from "@/components/SplitText";
import NewsletterCapture from "@/components/NewsletterCapture";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = [
  {
    num: "01",
    title: "Web Design Systems",
    href: "/services/web-design-systems",
    summary:
      "A credible website connected to calls, forms, booking, follow-up, and measurement.",
    outcomes: ["Get found", "Capture demand", "Convert traffic"],
  },
  {
    num: "02",
    title: "Client Communication Systems",
    href: "/services/client-communication-systems",
    summary:
      "Lead intake, FAQs, estimates, reminders, and follow-up—without the owner becoming the inbox.",
    outcomes: ["Faster replies", "Fewer missed leads", "Less repetitive admin"],
  },
  {
    num: "03",
    title: "Business Operating Systems",
    href: "/services/business-operating-systems",
    summary:
      "CRM, dashboards, scheduling, automation, and custom tools that make the business easier to run.",
    outcomes: ["One source of truth", "Cleaner handoffs", "More owner leverage"],
  },
];

type CaseStudy = {
  name: string;
  category: string;
  image?: string;
  visualLabel?: string;
  href: string;
  headline: string;
  body: string;
  metrics: string[];
  note?: string;
};

const cases: CaseStudy[] = [
  {
    name: "Pearls Farm",
    category: "Website + demand engine + social distribution",
    image: "/screenshots/pearls-farm-site.png",
    href: "/work/pearls-farm",
    headline: "A new public website connected to buyer demand, recruiting, and field proof.",
    body:
      "As a contractor for Pearls Farm Labor, Jordan rebuilt the company website, created the crew-request and bilingual hiring paths, sourced high-capacity buyer opportunities, and is building the social system that turns real field work into demand.",
    metrics: ["18 ready buyer contacts", "8 active vineyard + field buyers", "308 workers across the top 2 opportunities"],
    note: "Live demand queue, Jul 22, 2026. Sourced opportunities are not presented as closed contracts.",
  },
  {
    name: "JOON11EE",
    category: "Multi-market rental platform",
    image: "/screenshots/joon11ee.png",
    href: "/work/joon11ee",
    headline: "A real audience moving through fleet discovery and qualified booking paths.",
    body:
      "Vehicle discovery, market-specific inventory, booking intake, conversion tracking, and operator workflows across Miami, LA/OC, and San Francisco.",
    metrics: ["275 visitors in 7 days", "750 page views in 7 days", "92% mobile audience"],
    note: "Vercel Analytics, Jul 14-21, 2026.",
  },
  {
    name: "The Sticker Smith / TSSPrint",
    category: "Local print + search system",
    image: "/screenshots/sticker-smith.png",
    href: "/work/sticker-smith",
    headline: "A production client site earning real search discovery and service demand.",
    body:
      "Local-service pages, sticker and print discovery, portfolio proof, quote paths, and an operating layer for a Bay Area print business.",
    metrics: ["187 visitors in 7 days", "401 page views in 7 days", "85 visitors from Google"],
    note: "Vercel Analytics, Jul 14-21, 2026. Live at tssprint.com.",
  },
  {
    name: "Vacaville Appliance",
    category: "Local service business",
    image: "/screenshots/vacaville-appliance.png",
    href: "/work/vacaville-appliance",
    headline: "A service business becoming a connected operating ecosystem.",
    body:
      "Since joining around August 2025, the website and AI receptionist have expanded into lead capture, service information, customer intake, and day-to-day workflows.",
    metrics: ["$144.3K invoiced in 2026 through Jul 19", "57 new one-off jobs in June", "17 new leads in June"],
    note: "Business figures observed in Jobber. They show the environment the system supports; they are not presented as revenue created by JDLO alone.",
  },
  {
    name: "Mo / CubicShip / DHL / Travelyt",
    category: "Nine-workstream operator ecosystem",
    image: "/screenshots/dhl-translator.png",
    href: "/work/dhl-translator",
    headline: "One relationship spanning customer service, training, logistics, sales, and partnership decisions.",
    body:
      "Nine documented workstreams across the DHL counter, CubicShip, MEA freight, Travelyt, a private command center, and experimental sales prototypes.",
    metrics: ["9 documented workstreams", "4 operating lanes", "Ongoing relationship"],
  },
];

function Hero() {
  return (
    <section className="px-4 pt-[5.5rem] pb-10 sm:px-6 md:min-h-screen md:flex md:items-center md:px-10 md:pt-0 md:pb-0 overflow-hidden" data-analytics-section="hero">
      <div className="max-w-[1400px] mx-auto w-full md:pt-24 md:pb-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-accent text-[10px] md:text-[11px] tracking-[0.28em] md:tracking-[0.5em] uppercase font-mono mb-5 md:mb-8 hero-animate hero-delay-1">
              AI receptionist · revenue website · operations
            </p>
            <h1 className="font-display text-[clamp(3rem,7.4vw,7.2rem)] leading-[0.9] tracking-[-0.04em] hero-animate hero-delay-2">
              <SplitText staggerMs={38}>Stop losing leads</SplitText>
              <br />
              <SplitText delay={0.18} staggerMs={38}>between the call</SplitText>
              <br />
              <span className="text-text-secondary"><SplitText delay={0.36} staggerMs={38}>and the follow-up.</SplitText></span>
            </h1>
            <div className="mt-7 md:mt-10 max-w-[650px] hero-animate hero-delay-3">
              <p className="text-text-secondary text-[17px] md:text-xl leading-[1.55] md:leading-relaxed">
                I connect your website, customer communication, and internal workflow so more inquiries become revenue—and fewer questions depend on you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-7 md:mt-9">
                <GlowLink href="/contact?ref=home-hero" className="w-full sm:w-auto">Find My Revenue Leak</GlowLink>
                <Link href="#case-studies" className="ghost-btn w-full sm:w-auto">See Revenue Systems at Work</Link>
              </div>
              <Link href="/work/pearls-farm" className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-3.5 lg:hidden">
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.22em] font-mono text-text-muted">Pearls Farm · live demand system</span>
                  <span className="block mt-1.5 text-sm text-text">8 active buyers · 308 workers across the top 2</span>
                </span>
                <span className="text-lg" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block hero-animate hero-delay-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
              <Image src="/photos/suit-lv.jpg" alt="Jordan Lopez, JDLO" fill priority className="object-cover object-top" sizes="38vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7 pt-24">
                <p className="text-white text-sm font-medium">Jordan Lopez</p>
                <p className="text-white/60 text-xs font-mono mt-1">Designer · systems builder · operator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeStrip() {
  return (
    <section className="border-y border-border bg-surface" data-analytics-section="outcome-strip">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-4 md:py-6 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 md:gap-6">
        {["More qualified leads", "Faster client responses", "Less repetitive admin", "Clearer operating data"].map((item) => (
          <p key={item} className="text-[10px] md:text-[12px] leading-snug font-mono text-text-secondary flex items-center gap-2 md:gap-3">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-accent" />{item}
          </p>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-16 md:py-28 lg:py-40" id="services" data-analytics-section="services">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[10px] md:text-[11px] tracking-[0.38em] md:tracking-[0.5em] uppercase font-mono mb-4 md:mb-6">Three ways I create leverage</p>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] tracking-[-0.035em] leading-[0.95] max-w-[900px] mb-8 md:mb-16">
            Three systems. <span className="text-text-secondary">One outcome: less leakage.</span>
          </h2>
        </RevealOnScroll>
        <div className="grid lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index + 1}>
              <Link href={service.href} className="group block bg-bg p-5 md:p-9 h-full hover:bg-surface transition-colors">
                <span className="text-accent text-xs font-mono">{service.num}</span>
                <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.03em] leading-[1] mt-5 md:mt-10 mb-3 md:mb-5">{service.title}</h3>
                <p className="text-text-secondary text-[14px] md:text-[15px] leading-relaxed mb-5 md:mb-9">{service.summary}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5 md:block md:space-y-3 md:mb-10">
                  {service.outcomes.map((outcome) => <p key={outcome} className="text-xs font-mono text-text-muted">+ {outcome}</p>)}
                </div>
                <span className="text-sm font-mono group-hover:text-accent transition-colors">Explore service →</span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="py-16 md:py-28 lg:py-40 border-t border-border" id="case-studies" data-analytics-section="case-studies">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[10px] md:text-[11px] tracking-[0.38em] md:tracking-[0.5em] uppercase font-mono mb-4 md:mb-6">Case studies</p>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] tracking-[-0.035em] leading-[0.95] mb-8 md:mb-16">
            Systems inside real businesses.
          </h2>
          <p className="-mt-4 mb-6 text-[11px] uppercase tracking-[0.24em] font-mono text-text-muted lg:hidden">Swipe through the systems →</p>
        </RevealOnScroll>
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 no-scrollbar sm:-mx-6 sm:px-6 lg:mx-0 lg:block lg:space-y-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {cases.map((item, index) => (
            <RevealOnScroll key={item.name} delay={(index % 3) + 1} className="w-[88vw] max-w-[390px] shrink-0 snap-start lg:w-auto lg:max-w-none">
              <Link href={item.href} className="group grid h-full lg:grid-cols-[0.78fr_1.22fr] border border-border rounded-2xl overflow-hidden bg-surface hover:border-text/20 transition-colors">
                {item.image ? (
                  <div className="relative min-h-[190px] sm:min-h-[240px] lg:min-h-[390px] overflow-hidden">
                    <Image src={item.image} alt={`${item.name} system`} fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 40vw" />
                  </div>
                ) : (
                  <div className="min-h-[210px] sm:min-h-[240px] lg:min-h-[390px] bg-[#171b13] text-[#e8e1cf] p-6 md:p-12 flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-[#e8e1cf]/10" />
                    <span className="text-[10px] tracking-[0.45em] font-mono text-[#e8e1cf]/55">JDLO / FIELD SYSTEM</span>
                    <p className="font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.94] whitespace-pre-line">{item.visualLabel}</p>
                    <span className="text-[11px] font-mono text-[#e8e1cf]/55">EMAIL · PHONE · BRAND</span>
                  </div>
                )}
                <div className="p-5 md:p-10 lg:p-12 flex flex-col justify-center">
                  <p className="text-accent text-[10px] tracking-[0.35em] uppercase font-mono mb-4">{item.category}</p>
                  <h3 className="font-display text-[clamp(2rem,4vw,3.7rem)] tracking-[-0.035em] leading-[0.98] mb-5">{item.name}</h3>
                  <p className="text-text text-[17px] md:text-lg leading-relaxed max-w-[660px] mb-3 md:mb-4">{item.headline}</p>
                  <p className="text-text-secondary text-[13px] md:text-[14px] leading-relaxed max-w-[660px] mb-5 md:mb-8">{item.body}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-3">
                    {item.metrics.map((metric) => <div key={metric} className="border-t border-border py-2 sm:pt-3 sm:pb-0 text-[11px] md:text-[12px] text-text-muted font-mono leading-relaxed">{metric}</div>)}
                  </div>
                  {item.note && <p className="text-[10px] leading-relaxed text-text-muted/70 mt-5">{item.note}</p>}
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll>
          <div className="mt-10 text-center"><Link href="/work" className="ghost-btn">See the full project archive</Link></div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    ["Capture", "Turn traffic, calls, and messages into structured leads instead of scattered conversations."],
    ["Answer", "Put frequent questions, service details, pricing context, and next steps where clients can get them quickly."],
    ["Convert", "Create a clear path from interest to estimate, booking, payment, or the next meaningful sales action."],
    ["Operate", "Give the team a shared view of customers, work, follow-up, and performance so fewer things fall through."],
    ["Automate", "Remove reminders, duplicate entry, repetitive replies, and handoffs that software can handle safely."],
    ["Measure", "Track where leads come from, what converts, and where money or time leaks out of the process."],
  ];
  return (
    <section className="py-16 md:py-28 lg:py-40 border-t border-border bg-surface" data-analytics-section="business-outcomes">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[10px] md:text-[11px] tracking-[0.38em] md:tracking-[0.5em] uppercase font-mono mb-4 md:mb-6">What changes</p>
          <h2 className="font-display text-[clamp(2.2rem,4.8vw,4.4rem)] tracking-[-0.035em] leading-[0.98] max-w-[820px] mb-8 md:mb-16">The business becomes easier to buy from and easier to run.</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {benefits.map(([title, body], i) => (
            <RevealOnScroll key={title} delay={(i % 3) + 1}>
              <div className="bg-bg p-4 sm:p-5 md:p-9 h-full">
                <h3 className="font-display text-2xl md:text-3xl mb-2 md:mb-4">{title}</h3>
                <p className="text-text-secondary text-[12px] md:text-sm leading-relaxed">{body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-28 lg:py-40" data-analytics-section="final-cta">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center">
        <RevealOnScroll>
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8">Start with the bottleneck</p>
          <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] tracking-[-0.045em] leading-[0.9] mb-9">Tell me where the business is leaking time or money.</h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-[620px] mx-auto mb-10">I’ll map the smallest system that creates a real business result. No invented stack. No technology for its own sake.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <GlowLink href="/contact?ref=home-bottom" className="w-full sm:w-auto">Start a Project</GlowLink>
            <a href="mailto:eljordp@gmail.com" className="ghost-btn w-full sm:w-auto">eljordp@gmail.com</a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function OperatorNotes() {
  return (
    <section className="border-t border-border px-4 py-16 sm:px-6 md:px-10 md:py-28" data-analytics-section="operator-notes">
      <div className="max-w-[1400px] mx-auto rounded-2xl md:rounded-3xl bg-[#111] text-white px-5 py-8 md:px-12 md:py-14 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-12 lg:items-end">
        <div>
          <p className="text-white/45 text-[11px] tracking-[0.45em] uppercase font-mono mb-7">JDLO / Operator Notes</p>
          <h2 className="font-display text-[clamp(2.8rem,5.6vw,5.4rem)] tracking-[-0.04em] leading-[0.92] max-w-[760px]">Systems, decisions, and what actually happened.</h2>
        </div>
        <div>
          <p className="text-white/65 text-[16px] leading-relaxed mb-7">One useful teardown, build lesson, or business observation at a time. No recycled AI news and no daily noise.</p>
          <NewsletterCapture />
          <p className="text-white/35 text-[11px] font-mono mt-4">Useful when there is something worth sending. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 pb-24 md:pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-8 md:items-end md:justify-between">
        <div>
          <p className="font-semibold mb-2">JDLO</p>
          <p className="text-text-muted text-sm max-w-[430px]">Web design, client communication, and business operating systems built to create revenue and owner leverage.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-mono text-text-muted">
          <Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><a href="mailto:eljordp@gmail.com">eljordp@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <HomeNav />
      <Hero />
      <OutcomeStrip />
      <CaseStudies />
      <Services />
      <Benefits />
      <OperatorNotes />
      <FinalCTA />
      <Footer />
    </main>
  );
}
