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
      <div className="absolute top-[20%] right-[8%] w-[500px] h-[500px] bg-text/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-10 hero-animate hero-delay-1 font-mono">
          Jordan Lopez &mdash; Operator
        </p>

        <h1 className="font-display hero-animate hero-delay-2 text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.95] tracking-[-0.03em] max-w-[1100px]">
          If you can think it,
          <br />I can build it.
        </h1>

        <div className="hero-animate hero-delay-3 mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[480px]">
            Websites. Apps. AI systems. Games. Dashboards. Online casinos. If it lives on a screen and makes you money, I build it.
          </p>
          <div className="flex items-center gap-4">
            <GlowLink href="/contact">
              Start a Project
            </GlowLink>
            <a
              href="https://instagram.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn"
            >
              DM @jdlo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
const services = [
  {
    title: "Websites & E-commerce",
    desc: "Sites that make you money and make people take you seriously. Not templates — custom built, designed to convert, ready to grow with you.",
    price: "From $3K",
    href: "/services/websites",
  },
  {
    title: "Apps & Systems",
    desc: "AI tools, dashboards, booking systems, automation, internal ops — anything your business needs to run faster, save time, and make more money.",
    price: "From $5K",
    href: "/services/apps-systems",
  },
  {
    title: "Creative & Custom",
    desc: "Video games, online casinos, enterprise tools, quizzes, whatever you can imagine. If it can be built, I've probably already built something like it.",
    price: "Let\u2019s talk",
    href: "/services/creative",
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

/* ── Work (featured 3) ── */
const featured = [
  {
    category: "Casino",
    name: "Quanta",
    headline: "Full online sweepstakes casino from scratch",
    stats: [
      { value: "6", label: "Game types" },
      { value: "Real-time", label: "Multiplayer" },
      { value: "$50K+", label: "Platform value" },
    ],
  },
  {
    category: "AI System",
    name: "Club Bot",
    headline: "AI concierge running a Vegas nightclub operation",
    stats: [
      { value: "500+", label: "Guests/week" },
      { value: "30hrs/wk", label: "Time saved" },
      { value: "3x", label: "List capacity" },
    ],
  },
  {
    category: "Agency",
    name: "Pomaika\u2018i Co",
    headline: "Centralized operations for a six-figure consultancy",
    stats: [
      { value: "$5K", label: "Project value" },
      { value: "5+", label: "Tools replaced" },
      { value: "20hrs/wk", label: "Time saved" },
    ],
  },
];

function Work() {
  return (
    <section id="work" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                Selected Work
              </p>
              <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95]">
                Real clients.<br />
                <span className="text-text-secondary">Real results.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-text-secondary text-[14px] font-mono font-medium hover:text-text border-b border-border-hover hover:border-text pb-0.5 transition-all duration-300 group shrink-0"
            >
              See all work
              <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
            </Link>
          </div>
        </RevealOnScroll>

        <div className="space-y-0">
          {featured.map((project, i) => (
            <RevealOnScroll key={project.name} delay={i + 1}>
              <div className="py-10 sm:py-14 border-b border-border last:border-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-display text-[clamp(1.6rem,4vw,3rem)] tracking-[-0.02em] leading-[1.05] mt-2 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-text-secondary text-[clamp(1rem,2vw,1.15rem)] leading-relaxed max-w-[500px]">
                      {project.headline}
                    </p>
                  </div>
                  <div className="flex flex-wrap sm:flex-col gap-x-8 gap-y-4 sm:gap-y-5 sm:items-end sm:text-right shrink-0">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <span className="text-[1.4rem] sm:text-[1.6rem] font-semibold tracking-[-0.03em] block leading-none">
                          {stat.value}
                        </span>
                        <span className="text-text-muted text-[10px] font-mono tracking-wider uppercase mt-1 block">
                          {stat.label}
                        </span>
                      </div>
                    ))}
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
            { num: "30+", label: "Projects shipped", desc: "Websites, apps, games, AI tools, dashboards, casinos — for every kind of business and idea." },
            { num: "2 weeks", label: "Average turnaround", desc: "Most projects go from first message to live fast. No dragging it out, no endless meetings." },
            { num: "100%", label: "Custom built", desc: "No templates. No page builders. No shortcuts. Everything is built from scratch, designed for you." },
          ].map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i + 1}>
              <div className={`py-5 md:py-0 md:pr-12 ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""} ${i > 0 ? "md:pl-12" : ""}`}>
                <span className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.04em] gradient-text">
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
          text="Websites. Apps. AI systems. Games. Casinos. Enterprise tools. I don't specialize in one thing — I specialize in building whatever you need, fast, and making sure it actually works."
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
                I started with nothing &mdash; no portfolio, no connections, no playbook. Taught myself how to build anything a business could need. Websites, apps, AI tools, games, enterprise systems &mdash; 30+ projects shipped and counting.
              </p>
              <p className="text-text-secondary text-[16px] leading-relaxed">
                Everything I build for clients, I use in my own businesses. If it doesn&apos;t make me money or save me time, I&apos;m not selling it to you.
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

/* ── Reach Out ── */
function ReachOut() {
  return (
    <section className="section-gap relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-text/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <RevealOnScroll>
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
              Let&apos;s work together
            </p>
            <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-8">
              I only take on a few
              <br />projects at a time.
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-14 max-w-[520px] mx-auto">
              If you&apos;re serious about building something, reach out now. I respond to every message within 24 hours.
            </p>

            {/* Two paths */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-[640px] mx-auto mb-10">
              {/* Instagram DM */}
              <a
                href="https://instagram.com/jdlo"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border rounded-2xl p-8 text-center hover:border-text/20 transition-all duration-300"
              >
                <span className="text-[2rem] block mb-4">&#9998;</span>
                <span className="block text-[15px] font-semibold mb-2">DM me on Instagram</span>
                <span className="block text-text-secondary text-[14px] mb-4">Fastest way to reach me. Send a message and I&apos;ll respond same day.</span>
                <span className="inline-flex items-center gap-1.5 text-text font-mono text-[13px] font-medium group-hover:gap-2.5 transition-all duration-300">
                  @jdlo <span>&rarr;</span>
                </span>
              </a>

              {/* Contact Form */}
              <Link
                href="/contact"
                className="group border border-border rounded-2xl p-8 text-center hover:border-text/20 transition-all duration-300"
              >
                <span className="text-[2rem] block mb-4">&#9993;</span>
                <span className="block text-[15px] font-semibold mb-2">Fill out the form</span>
                <span className="block text-text-secondary text-[14px] mb-4">Tell me about your project, budget, and timeline. I&apos;ll send you a plan.</span>
                <span className="inline-flex items-center gap-1.5 text-text font-mono text-[13px] font-medium group-hover:gap-2.5 transition-all duration-300">
                  Start a project <span>&rarr;</span>
                </span>
              </Link>
            </div>

            <p className="text-text-muted text-[13px]">
              Or email directly: <a href="mailto:eljordp@gmail.com" className="text-text hover:underline transition-colors">eljordp@gmail.com</a>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="py-16 pb-24 md:pb-16 border-t border-border">
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

/* ── Sticky Mobile CTA ── */
function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border bg-bg/90 backdrop-blur-lg px-4 py-3">
      <div className="flex gap-3">
        <Link href="/contact" className="magnetic-btn flex-1 justify-center !py-2.5 !text-[13px]">
          <span className="relative z-10">Start a Project</span>
        </Link>
        <a
          href="https://instagram.com/jdlo"
          target="_blank"
          rel="noopener noreferrer"
          className="ghost-btn flex-1 justify-center !py-2.5 !text-[13px]"
        >
          DM @jdlo
        </a>
      </div>
    </div>
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
      <ReachOut />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
