import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GlowLink } from "@/components/GlowButton";
import SplitText from "@/components/SplitText";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = [
  {
    num: "01",
    title: "Web Design Systems",
    href: "/services/web-design-systems",
    summary:
      "A credible website connected to the actions that create revenue: calls, forms, booking, checkout, follow-up, and measurement.",
    outcomes: ["Get found", "Capture demand", "Convert traffic"],
  },
  {
    num: "02",
    title: "Client Communication Systems",
    href: "/services/client-communication-systems",
    summary:
      "Lead intake, FAQs, estimates, reminders, status updates, and follow-up designed so customers get answers without the owner becoming the inbox.",
    outcomes: ["Faster replies", "Fewer missed leads", "Less repetitive admin"],
  },
  {
    num: "03",
    title: "Business Operating Systems",
    href: "/services/business-operating-systems",
    summary:
      "The internal layer: CRM, dashboards, scheduling, automation, and custom tools that make the business easier to run and ready to grow.",
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
    name: "Vacaville Appliance",
    category: "Local service business",
    image: "/screenshots/vacaville-appliance.png",
    href: "/work/vacaville-appliance",
    headline: "A service business becoming a connected operating ecosystem.",
    body:
      "Since joining the business around August 2025, the work has expanded beyond a website into lead capture, service information, customer intake, and the systems around day-to-day operations.",
    metrics: ["$144.3K invoiced in 2026 through Jul 19", "57 new one-off jobs in June", "17 new leads in June"],
    note: "Business figures observed in Jobber. They show the environment the system supports; they are not presented as revenue created by JDLO alone.",
  },
  {
    name: "Mo / DHL Systems",
    category: "Enterprise + operator systems",
    image: "/screenshots/dhl-translator.png",
    href: "/work/dhl-translator",
    headline: "A long-term systems relationship, not a one-off website.",
    body:
      "Work for Mo has grown across translation, private operations hubs, customer workflows, freight tools, public briefing pages, and decision support for his DHL-affiliated and logistics businesses.",
    metrics: ["DHL store translator", "Private operations hub", "Customer + freight workflows"],
  },
  {
    name: "Pearl Farms / Napa",
    category: "Current build / Napa",
    visualLabel: "PEARL FARMS\nNAPA, CALIFORNIA\nSYSTEM IN PROGRESS",
    href: "/work/pearl-farms",
    headline: "Connecting a working operation to a modern wine brand.",
    body:
      "Current scope: integrate AI into company email and phone workflows, reduce repetitive administration, and create the digital presence for a Napa wine brand. This is active work, not a finished-results claim.",
    metrics: ["AI-assisted email", "Phone intake + FAQs", "Wine brand digital presence"],
    note: "In progress. Results will be added only after the systems are live and measured.",
  },
];

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
              JDLO / Revenue systems
            </p>
            <h1 className="font-display text-[clamp(3rem,7.4vw,7.2rem)] leading-[0.9] tracking-[-0.04em] hero-animate hero-delay-2">
              <SplitText staggerMs={45}>I turn scattered</SplitText>
              <br />
              <SplitText delay={0.25} staggerMs={45}>businesses into</SplitText>
              <br />
              <span className="text-text-secondary"><SplitText delay={0.5} staggerMs={45}>revenue systems.</SplitText></span>
            </h1>
            <div className="mt-10 max-w-[650px] hero-animate hero-delay-3">
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                I connect the website, lead flow, client communication, and internal operations so more opportunities turn into revenue and less of the business depends on you answering every question.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-9">
                <GlowLink href="/contact?ref=home-hero" className="w-full sm:w-auto">Build My System</GlowLink>
                <Link href="#case-studies" className="ghost-btn w-full sm:w-auto">See the proof</Link>
              </div>
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
    <section className="border-y border-border bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["More qualified leads", "Faster client responses", "Less repetitive admin", "Clearer operating data"].map((item) => (
          <p key={item} className="text-[12px] font-mono text-text-secondary flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />{item}
          </p>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-gap" id="services">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Three ways I create leverage</p>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] tracking-[-0.035em] leading-[0.95] max-w-[900px] mb-16">
            Not a made-up package. <span className="text-text-secondary">Three real systems a business needs.</span>
          </h2>
        </RevealOnScroll>
        <div className="grid lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index + 1}>
              <Link href={service.href} className="group block bg-bg p-7 md:p-9 h-full hover:bg-surface transition-colors">
                <span className="text-accent text-xs font-mono">{service.num}</span>
                <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] tracking-[-0.03em] leading-[1] mt-10 mb-5">{service.title}</h3>
                <p className="text-text-secondary text-[15px] leading-relaxed mb-9">{service.summary}</p>
                <div className="space-y-3 mb-10">
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
    <section className="section-gap border-t border-border" id="case-studies">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Case studies</p>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] tracking-[-0.035em] leading-[0.95] mb-16">
            Systems inside real businesses.
          </h2>
        </RevealOnScroll>
        <div className="space-y-6">
          {cases.map((item, index) => (
            <RevealOnScroll key={item.name} delay={(index % 3) + 1}>
              <Link href={item.href} className="group grid lg:grid-cols-[0.78fr_1.22fr] border border-border rounded-2xl overflow-hidden bg-surface hover:border-text/20 transition-colors">
                {item.image ? (
                  <div className="relative min-h-[240px] lg:min-h-[390px] overflow-hidden">
                    <Image src={item.image} alt={`${item.name} system`} fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 40vw" />
                  </div>
                ) : (
                  <div className="min-h-[240px] lg:min-h-[390px] bg-[#171b13] text-[#e8e1cf] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-[#e8e1cf]/10" />
                    <span className="text-[10px] tracking-[0.45em] font-mono text-[#e8e1cf]/55">JDLO / FIELD SYSTEM</span>
                    <p className="font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.94] whitespace-pre-line">{item.visualLabel}</p>
                    <span className="text-[11px] font-mono text-[#e8e1cf]/55">EMAIL · PHONE · BRAND</span>
                  </div>
                )}
                <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
                  <p className="text-accent text-[10px] tracking-[0.35em] uppercase font-mono mb-4">{item.category}</p>
                  <h3 className="font-display text-[clamp(2rem,4vw,3.7rem)] tracking-[-0.035em] leading-[0.98] mb-5">{item.name}</h3>
                  <p className="text-text text-lg leading-relaxed max-w-[660px] mb-4">{item.headline}</p>
                  <p className="text-text-secondary text-[14px] leading-relaxed max-w-[660px] mb-8">{item.body}</p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {item.metrics.map((metric) => <div key={metric} className="border-t border-border pt-3 text-[12px] text-text-muted font-mono leading-relaxed">{metric}</div>)}
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
    <section className="section-gap border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">What changes</p>
          <h2 className="font-display text-[clamp(2.2rem,4.8vw,4.4rem)] tracking-[-0.035em] leading-[0.98] max-w-[820px] mb-16">The business becomes easier to buy from and easier to run.</h2>
        </RevealOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {benefits.map(([title, body], i) => (
            <RevealOnScroll key={title} delay={(i % 3) + 1}>
              <div className="bg-bg p-7 md:p-9 h-full">
                <h3 className="font-display text-3xl mb-4">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
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
    <section className="section-gap">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <RevealOnScroll>
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8">Start with the bottleneck</p>
          <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] tracking-[-0.045em] leading-[0.9] mb-9">Tell me where the business is leaking time or money.</h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-[620px] mx-auto mb-10">I’ll map the smallest system that creates a real business result. No invented stack. No technology for its own sake.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <GlowLink href="/contact?ref=home-bottom" className="w-full sm:w-auto">Start a Project</GlowLink>
            <a href="mailto:joo@meaship.com" className="ghost-btn w-full sm:w-auto">joo@meaship.com</a>
          </div>
        </RevealOnScroll>
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
          <Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><a href="mailto:joo@meaship.com">joo@meaship.com</a>
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
      <Services />
      <CaseStudies />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  );
}
