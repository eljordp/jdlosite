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
      {/* Ambient glow */}
      <div className="absolute top-[20%] right-[8%] w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-10 hero-animate hero-delay-1 font-mono">
          Jordan Lopez &mdash; Operator
        </p>

        <h1 className="font-display hero-animate hero-delay-2 text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.95] tracking-[-0.03em] max-w-[1100px]">
          I build websites, AI&nbsp;systems, and sales operations.
        </h1>

        <div className="hero-animate hero-delay-3 mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[480px]">
            For local businesses, brands, and anyone serious about growing.
          </p>
          <div>
            <GlowLink href="/contact">
              Let&apos;s Talk
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
    desc: "Custom sites that convert. Not templates. Not drag-and-drop. Real sites built to make money.",
    price: "From $3K",
    href: "/contact",
  },
  {
    title: "AI Systems",
    desc: "Chatbots, AI receptionists, automation workflows. Systems that replace manual work and run while you sleep.",
    price: "From $5K",
    href: "/contact",
  },
  {
    title: "Sales Operations",
    desc: "Pipeline setup, CRM automation, booking flows, team systems. Everything your sales team needs to close.",
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

/* ── Work ── */
const clients = [
  {
    name: "Pomaika\u2018i Co",
    desc: "Full-service agency website + internal ops dashboard",
  },
  {
    name: "West Coast Terpz",
    desc: "E-commerce platform for cannabis brand",
  },
  {
    name: "Club Bot",
    desc: "AI concierge system for Vegas nightclub promoters",
  },
  {
    name: "Vacaville Appliance",
    desc: "Website + AI receptionist for local service business",
  },
  {
    name: "The Sticker Smith",
    desc: "Brand website + marketing for print shop",
  },
  {
    name: "Onhizm",
    desc: "Website for Bay Area clothing brand",
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
              <div className="py-6 sm:py-8 border-b border-border group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-8">
                <h3 className="font-display text-[clamp(1.4rem,3vw,2.6rem)] tracking-[-0.02em] leading-[1.1] group-hover:text-accent transition-colors duration-500">
                  {client.name}
                </h3>
                <p className="text-text-muted text-[14px] sm:text-[15px] leading-relaxed sm:text-right max-w-[400px]">
                  {client.desc}
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
          text="I don't pitch. I build it, show you it works, and let the results talk. Every system I sell, I use myself. Every client I work with gets the same tools I run my own businesses on."
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
                I started selling websites for a few hundred bucks. Now I build AI&nbsp;systems, sales operations, and custom platforms for businesses that need to grow &mdash; not just look good online.
              </p>
              <p className="text-text-secondary text-[16px] leading-relaxed">
                Everything I offer, I run myself. My own businesses use the same tools, the same automation, the same systems I build for clients. That&apos;s the difference between someone who sells solutions and someone who lives in them.
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
          {/* Left — brand */}
          <div>
            <p className="text-text text-[14px] font-semibold tracking-[-0.02em] mb-2">
              JDLO
            </p>
            <p className="text-text-muted text-[13px] leading-relaxed max-w-[280px]">
              Websites, AI systems, and sales operations for businesses that want to grow.
            </p>
          </div>

          {/* Right — links */}
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
      <Work />
      <Statement />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
