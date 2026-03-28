import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GlowLink } from "@/components/GlowButton";
import ScrollHighlightText from "@/components/ScrollHighlightText";
import HomeNav from "@/components/HomeNav";

/* ── Hero ── */
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end relative px-6 md:px-10 pb-[12vh]">
      <div className="absolute top-[20%] right-[8%] w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-10 hero-animate hero-delay-1 font-mono">
          Jordan Lopez &mdash; Operator
        </p>

        <h1 className="font-display hero-animate hero-delay-2 text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.95] tracking-[-0.03em] max-w-[1100px]">
          I build websites that
          <span className="gradient-text-blue"> make money.</span>
        </h1>

        <div className="hero-animate hero-delay-3 mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[480px]">
            Plus AI systems and sales operations. For local businesses, brands, and anyone serious about growing.
          </p>
          <div>
            <GlowLink href="/contact">
              Start a Project
            </GlowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
const services = [
  {
    title: "Websites",
    desc: "Custom sites that look like you spent six figures. Built to convert visitors into customers — not just sit there looking pretty. Real code, real design, real results.",
    price: "From $3K",
    href: "/contact",
  },
  {
    title: "AI Systems",
    desc: "Chatbots, AI receptionists, automation workflows. Systems that replace 40+ hours of manual work per week and run while you sleep.",
    price: "From $5K",
    href: "/contact",
  },
  {
    title: "Sales Operations",
    desc: "Pipeline setup, CRM automation, booking flows, outbound systems. Everything your sales team needs to close more without hiring more.",
    price: "From $2K",
    href: "/contact",
  },
];

function Services() {
  return (
    <section id="services" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono">
              Services
            </p>
            <p className="text-text-muted text-[11px] font-mono hidden md:block">
              03 offerings
            </p>
          </div>
        </RevealOnScroll>

        <div>
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} delay={(i % 3) + 1}>
              <Link href={service.href} className="skill-row group block">
                <div>
                  <span className="skill-title font-display">{service.title}</span>
                  <div className="skill-desc">
                    <p className="text-text-secondary text-[14px] leading-relaxed pt-4 max-w-[500px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
                <span className="skill-price">{service.price}</span>
                <span className="skill-number" aria-hidden="true">
                  0{i + 1}
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process ── */
function Process() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-20">
            How It Works
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {[
            {
              num: "01",
              title: "You tell me what you need",
              desc: "Fill out the form or send me a message. I'll respond within 24 hours with a clear plan, timeline, and price. No discovery calls, no runaround.",
            },
            {
              num: "02",
              title: "I build it",
              desc: "You get progress updates along the way. I move fast — most websites ship in under 2 weeks. AI systems and sales ops depend on scope.",
            },
            {
              num: "03",
              title: "You launch & grow",
              desc: "Everything I build is yours. Full code ownership, deployed live, ready to make money. I stick around for tweaks and support after launch.",
            },
          ].map((step, i) => (
            <RevealOnScroll key={step.num} delay={i + 1}>
              <div className={`py-5 md:py-0 md:pr-12 ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""} ${i > 0 ? "md:pl-12" : ""}`}>
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

/* ── Work ── */
const clients = [
  {
    name: "Pomaika\u2018i Co",
    desc: "Full-service agency website + internal ops dashboard",
    tags: ["Website", "Dashboard"],
  },
  {
    name: "West Coast Terpz",
    desc: "E-commerce platform with wholesale ordering",
    tags: ["Website", "E-commerce"],
  },
  {
    name: "Club Bot",
    desc: "AI concierge that automates guest lists for Vegas nightclub promoters",
    tags: ["AI System", "Automation"],
  },
  {
    name: "Vacaville Appliance",
    desc: "Website + AI receptionist targeting property managers",
    tags: ["Website", "AI System"],
  },
  {
    name: "The Sticker Smith",
    desc: "Brand website + marketing system for Bay Area print shop",
    tags: ["Website", "Marketing"],
  },
  {
    name: "Onhizm",
    desc: "Custom site for Bay Area clothing brand with celebrity traction",
    tags: ["Website"],
  },
];

function Work() {
  return (
    <section id="work" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
            Selected Work
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-20">
            Real clients.<br />
            <span className="text-text-secondary">Real results.</span>
          </h2>
        </RevealOnScroll>

        <div>
          {clients.map((client, i) => (
            <RevealOnScroll key={client.name} delay={(i % 3) + 1}>
              <div className="py-6 sm:py-8 border-b border-border group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-8">
                  <h3 className="font-display text-[clamp(1.4rem,3vw,2.6rem)] tracking-[-0.02em] leading-[1.1] group-hover:text-accent transition-colors duration-500">
                    {client.name}
                  </h3>
                  <p className="text-text-muted text-[14px] sm:text-[15px] leading-relaxed sm:text-right max-w-[400px]">
                    {client.desc}
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  {client.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-text-muted border border-border rounded-full px-3 py-0.5">
                      {tag}
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

/* ── Results ── */
function Results() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
            The Receipts
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {[
            { num: "30+", label: "Projects shipped", desc: "Websites, AI systems, dashboards, e-commerce — across every kind of business." },
            { num: "2 weeks", label: "Average turnaround", desc: "Most websites go from first message to live in under 14 days. No dragging it out." },
            { num: "$0", label: "Templates used", desc: "Every project is custom. No Wix. No Squarespace. No Shopify themes. Real code, real design." },
          ].map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i + 1}>
              <div className={`py-5 md:py-0 md:pr-12 ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""} ${i > 0 ? "md:pl-12" : ""}`}>
                <span className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.04em] gradient-text-blue">
                  {stat.num}
                </span>
                <h3 className="text-[15px] font-medium mt-2 mb-2">
                  {stat.label}
                </h3>
                <p className="text-text-secondary text-[14px] leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Statement ── */
function Statement() {
  return (
    <section className="section-gap">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollHighlightText
          text="Your website is the first thing people see. If it looks like a template, they treat you like a template. I build sites that make people take you seriously — then I build the systems behind them that actually make you money."
          className="font-display text-[clamp(1.8rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1.2] max-w-[900px]"
        />
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
  return (
    <section id="about" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-10">
              About
            </p>
            <h2 className="font-display text-[clamp(2.4rem,5vw,5rem)] tracking-[-0.03em] leading-[0.95] mb-10">
              Not a guru.<br />
              <span className="text-text-secondary">An operator.</span>
            </h2>
            <div className="space-y-6 max-w-[500px]">
              <p className="text-text-secondary text-[16px] leading-relaxed">
                I started selling websites for a few hundred bucks with no portfolio and no connections. Taught myself the entire modern stack in 5 months. Now I build AI&nbsp;systems, sales operations, and custom platforms for businesses that need to grow.
              </p>
              <p className="text-text-secondary text-[16px] leading-relaxed">
                Everything I offer, I run myself. My own businesses use the same tools, the same automation, the same systems I build for clients. If it doesn&apos;t work for me, I&apos;m not selling it to you.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent text-[14px] font-mono font-medium hover:text-white border-b border-accent/40 hover:border-white pb-0.5 transition-all duration-300 mt-10 group"
            >
              The full story
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                &rarr;
              </span>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <Image
                src="/jordan.jpg"
                alt="Jordan Lopez"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
      q: "How much does a website cost?",
      a: "Websites start at $3K. Price depends on scope — a 5-page business site is different from a full e-commerce platform. I'll give you an exact quote within 24 hours of your first message.",
    },
    {
      q: "How long does it take?",
      a: "Most websites ship in under 2 weeks. AI systems and sales operations depend on complexity, but I'll give you a clear timeline upfront. No surprises.",
    },
    {
      q: "Do I own the code?",
      a: "100%. Everything I build is yours. Full source code, deployed on your infrastructure, no vendor lock-in. You can hire someone else to maintain it if you want — but you won't need to.",
    },
    {
      q: "What makes you different from agencies?",
      a: "I'm one person who builds everything with AI. That means you get agency-quality work at a fraction of the cost, faster, with direct communication. No project managers, no telephone game.",
    },
    {
      q: "Do you do maintenance after launch?",
      a: "Yes. I don't disappear after delivery. Tweaks, updates, and support are part of the deal. For ongoing work, we can set up a monthly retainer.",
    },
    {
      q: "What if I just need one thing?",
      a: "That's fine. Most clients start with a website and come back for AI or sales ops later. No pressure to buy a package — just tell me what you need right now.",
    },
  ];

  return (
    <section id="faq" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-24">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-24">
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
                FAQ
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1]">
                Questions.
              </h2>
            </div>
          </RevealOnScroll>

          <div>
            {faqs.map((faq, i) => (
              <RevealOnScroll key={i} delay={(i % 3) + 1}>
                <details className="group border-b border-border">
                  <summary className="flex items-center justify-between py-6 cursor-pointer">
                    <span className="text-[15px] font-medium pr-6">{faq.q}</span>
                    <span className="text-text-muted group-open:rotate-45 transition-transform duration-500 text-lg shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="pb-6">
                    <p className="text-text-secondary text-[14px] leading-relaxed max-w-[500px]">
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

/* ── CTA ── */
function CTA() {
  return (
    <section className="section-gap relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <RevealOnScroll>
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-8">
              Ready to build?
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-14 max-w-[500px] mx-auto">
              Tell me what you need. I&apos;ll tell you exactly how I&apos;d build it, what it costs, and how fast you&apos;ll see results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowLink href="/contact">
                Start a Project
              </GlowLink>
              <Link href="/#work" className="ghost-btn">
                See My Work
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
          <div>
            <p className="text-text text-[14px] font-semibold tracking-[-0.02em] mb-2">
              JDLO
            </p>
            <p className="text-text-muted text-[13px] leading-relaxed max-w-[280px]">
              Websites, AI systems, and sales operations for businesses that want to grow.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div>
              <p className="text-text text-[13px] font-semibold mb-4">Pages</p>
              <div className="flex flex-col gap-2.5">
                <Link href="/about" className="text-text-muted text-[12px] hover:text-text transition-colors">About</Link>
                <Link href="/contact" className="text-text-muted text-[12px] hover:text-text transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-text text-[13px] font-semibold mb-4">Legal</p>
              <div className="flex flex-col gap-2.5">
                <Link href="/terms" className="text-text-muted text-[12px] hover:text-text transition-colors">Terms</Link>
                <Link href="/privacy" className="text-text-muted text-[12px] hover:text-text transition-colors">Privacy</Link>
              </div>
            </div>
            <div>
              <p className="text-text text-[13px] font-semibold mb-4">Connect</p>
              <div className="flex flex-col gap-2.5">
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="text-text-muted text-[12px] hover:text-text transition-colors">Instagram</a>
                <a href="mailto:eljordp@gmail.com" className="text-text-muted text-[12px] hover:text-text transition-colors">eljordp@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-text-muted text-[11px] font-mono tracking-wider">
            &copy; {new Date().getFullYear()} JDLO
          </span>
          <span className="text-text-muted text-[11px] font-mono">
            Jordan Lopez
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <main>
      <HomeNav />
      <Hero />
      <Services />
      <Process />
      <Work />
      <Results />
      <Statement />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
