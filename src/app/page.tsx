import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GlowLink } from "@/components/GlowButton";
import HomeNav from "@/components/HomeNav";
import EmailCapture from "@/components/EmailCapture";
import QuickQuote from "@/components/QuickQuote";
import NewsletterCapture from "@/components/NewsletterCapture";
import SplitText from "@/components/SplitText";
import CountUp from "@/components/CountUp";

/* ── Hero ── */
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-10">

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-2 hero-animate hero-delay-1 font-mono">
              Jordan Lopez, Operator
            </p>
            <p className="text-text-muted text-[11px] tracking-[0.08em] mb-10 hero-animate hero-delay-1 font-mono">
              20+ businesses built &middot; Restaurants, nightclubs, cannabis, real estate, DHL, fashion, print shops
            </p>

            <h1 className="font-display hero-animate hero-delay-2 text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.95] tracking-[-0.03em]">
              <SplitText staggerMs={55}>If you can think it,</SplitText>
              <br />
              <SplitText delay={0.3} staggerMs={55}>I can build it.</SplitText>
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

          {/* Photo */}
          <div className="hidden lg:block hero-animate hero-delay-4">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border clip-reveal visible" style={{transition: 'clip-path 1.6s 0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
              <Image
                src="/photos/suit-lv.jpg"
                alt="Jordan Lopez"
                fill
                className="object-cover object-top"
                sizes="40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Academy Banner ── */
function AcademyBanner() {
  return (
    <div className="border-t border-b border-border bg-surface-raised">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Link
          href="/academy"
          className="flex items-center justify-between py-4 group"
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.5em] uppercase font-mono text-text-muted">New</span>
            <span className="text-sm font-medium text-text-primary">
              JDLO Academy — Learn to build what I build
            </span>
          </div>
          <span className="text-text-muted group-hover:text-text-primary transition-colors text-sm">→</span>
        </Link>
      </div>
    </div>
  );
}

/* ── Services ── */
const services = [
  {
    title: "Apps & Systems",
    desc: "AI tools, dashboards, booking systems, automation, internal ops. Anything your business needs to run faster, save time, and make more money.",
    tag: "See products",
    href: "/services/apps-systems",
  },
  {
    title: "Creative & Custom",
    desc: "Video games, online casinos, enterprise tools, quizzes, whatever you can imagine. If it can be built, I've probably already built something like it.",
    tag: "See products",
    href: "/services/creative",
  },
  {
    title: "Websites & E-commerce",
    desc: "Sites that make you money and make people take you seriously. Not templates. Custom built, designed to convert, ready to grow with you.",
    tag: "See products",
    href: "/services/websites",
  },
];

function Services() {
  return (
    <section id="services" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex items-baseline justify-between mb-6">
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
                <span className="skill-price">{service.tag}</span>
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
              desc: "You get progress updates along the way. I move fast. Most websites ship in under 2 weeks. AI systems and sales ops depend on scope.",
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

/* ── Work (featured 6) ── */
const featured = [
  { category: "Casino", name: "Quanta", headline: "23 games, real-time multiplayer, $50K+ platform", stat: "$50K+", img: "/screenshots/quanta.png", slug: "quanta" },
  { category: "AI / SaaS", name: "Velvet", headline: "Automates 500+ guest lists/week for Vegas promoters", stat: "500+ guests/wk", img: "/screenshots/club-bot.png", slug: "club-bot" },
  { category: "Agency", name: "Pomaika\u2018i Co", headline: "Replaced 5 tools, saved 20hrs/week for a six-figure agency", stat: "$5K project", img: "/screenshots/pomaikai.png", slug: "pomaikai" },
  { category: "Enterprise", name: "DHL Training", headline: "Gamified training app for 100+ stores across Chicago, DHL premier partner", stat: "100+ stores", img: "/screenshots/dhl-translator.png", slug: "dhl-translator", link: "https://dhltranslator.vercel.app" },
  { category: "E-commerce", name: "West Coast Terpz", headline: "Went from Instagram DMs to $12K+/mo in online sales", stat: "$12K+/mo", img: "/screenshots/west-coast-terpz.png", slug: "west-coast-terpz" },
  { category: "Game", name: "JDLO The Game", headline: "Full RPG. 7 chapters, 20+ characters, original story", stat: "7 chapters", img: "/screenshots/jdlo-the-game.png", slug: "jdlo-the-game" },
];

function Work() {
  return (
    <section id="work" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
            Selected Work
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-16">
            20+ projects shipped.<br />
            <span className="text-text-secondary">Here are a few.</span>
          </h2>
        </RevealOnScroll>

        {/* Project grid with screenshots */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <RevealOnScroll key={project.name} delay={(i % 3) + 1}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="rounded-xl border border-border overflow-hidden mb-4 bg-surface">
                  <Image
                    src={project.img}
                    alt={project.name}
                    width={600}
                    height={350}
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <h3 className="font-display text-[clamp(1.1rem,2vw,1.5rem)] tracking-[-0.02em] leading-[1.1] group-hover:text-text-muted transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className="text-[13px] font-semibold tracking-[-0.02em] shrink-0">
                      {project.stat}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-text-muted leading-relaxed">
                    {project.headline}
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        {/* Big CTA to see all work */}
        <RevealOnScroll>
          <Link
            href="/work"
            className="group block mt-12 py-6 sm:py-8 bg-text text-bg rounded-2xl text-center hover:bg-text/90 transition-all duration-300"
          >
            <span className="text-[clamp(1rem,2vw,1.3rem)] font-semibold tracking-[-0.01em]">
              See all 20+ projects &rarr;
            </span>
            <span className="block text-bg/60 text-[13px] mt-1">
              Filter by category: websites, apps, AI, games, casinos, enterprise
            </span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Mid-page CTA ── */
function MidCTA({ text, href, label }: { text: string; href: string; label: string }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-8 sm:py-10 px-8 sm:px-12 border border-border rounded-2xl">
            <p className="text-[clamp(1.1rem,2vw,1.4rem)] font-medium tracking-[-0.02em] max-w-[500px]">
              {text}
            </p>
            <div className="flex gap-3 shrink-0">
              <Link href={href} className="magnetic-btn !py-2.5 !px-6 !text-[13px]">
                <span className="relative z-10">{label}</span>
              </Link>
              <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn !py-2.5 !px-6 !text-[13px]">
                DM @jdlo
              </a>
            </div>
          </div>
        </RevealOnScroll>
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
            { label: "Projects shipped", desc: "Websites, apps, games, AI tools, dashboards, casinos, for every kind of business and idea.", countEnd: 20, suffix: "+", plainNum: null },
            { label: "Average turnaround", desc: "Most projects go from first message to live fast. No dragging it out, no endless meetings.", countEnd: null, suffix: "", plainNum: "2 weeks" },
            { label: "Custom built", desc: "No templates. No page builders. No shortcuts. Everything is built from scratch, designed for you.", countEnd: 100, suffix: "%", plainNum: null },
          ].map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i + 1}>
              <div className={`py-5 md:py-0 md:pr-12 ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""} ${i > 0 ? "md:pl-12" : ""}`}>
                {stat.countEnd !== null ? (
                  <CountUp end={stat.countEnd} suffix={stat.suffix} className="text-[clamp(2rem,4vw,3.5rem)] font-display tracking-[-0.04em] gradient-text" />
                ) : (
                  <span className="text-[clamp(2rem,4vw,3.5rem)] font-display tracking-[-0.04em] gradient-text">
                    {stat.plainNum}
                  </span>
                )}
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

/* ── Testimonials ── */
function Testimonials() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
            What They Say
          </p>
        </RevealOnScroll>

        {/* Featured testimonial - Malachi (big quote) */}
        <RevealOnScroll>
          <div className="max-w-[800px] mb-20">
            <p className="font-display text-[8rem] leading-none text-text/10 mb-[-2rem]">&ldquo;</p>
            <blockquote className="font-display italic text-[clamp(1.8rem,3.8vw,3.2rem)] tracking-[-0.02em] leading-[1.25] mb-8">
              JP built our entire digital operation in two weeks. Website, dashboard, client portal — all of it. We were paying for five different tools and none of them talked to each other. He replaced all of that with one system. I don&apos;t know how he does it that fast, but it works and it hasn&apos;t broken once.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                <span className="text-text font-display text-lg">M</span>
              </div>
              <div>
                <p className="text-text text-[14px] font-medium">Malachi Pesta</p>
                <p className="text-text-muted text-[13px]">CEO & Founder, Pomaika&apos;i Co</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Additional shorter testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              quote: "Went from DMs and spreadsheets to a full e-commerce site doing $12K a month. Jordan built it in like 10 days. Still can't believe it.",
              name: "West Coast Terpz",
              role: "E-commerce",
            },
            {
              quote: "We needed something to handle 500+ guest lists a week. He built an AI system that does it automatically. Our promoters just send a name and it handles everything.",
              name: "Club Bot / Velvet",
              role: "AI Platform",
            },
            {
              quote: "He built us a translator app that handles 100+ stores across Chicago. We're expanding to Canada now. The app just works.",
              name: "Cubicship / DHL",
              role: "Enterprise",
            },
          ].map((t, i) => (
            <RevealOnScroll key={t.name} delay={i + 1}>
              <div className="border border-border rounded-xl p-6 h-full flex flex-col">
                <p className="text-text-secondary text-[14px] leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-text text-[14px] font-medium">{t.name}</p>
                  <p className="text-text-muted text-[12px]">{t.role}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Quick Quote Form ── */
function QuickQuoteSection() {
  return (
    <section className="section-gap bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-[700px]">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
              Free Quote
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1] mb-4">
              Tell me what you need.
            </h2>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-12 max-w-[480px]">
              Pick your industry, select what you need, and I&apos;ll send you a personalized plan + price within 24 hours. No calls, no BS.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <QuickQuote />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── Clients ── */
const clients = [
  { name: "West Coast Terpz", built: "E-commerce store", result: "$12K+/mo online sales" },
  { name: "Club Bot / Velvet", built: "AI promoter platform", result: "500+ guests/wk automated" },
  { name: "Cubicship / DHL", built: "Enterprise translator", result: "100+ stores" },
  { name: "Pomaika\u2018i Co", built: "Agency site + dashboard", result: "Replaced 5 tools" },
  { name: "Quanta Casino", built: "Full online casino", result: "23 games, multiplayer" },
  { name: "Aesthetics By Kayy", built: "Website + booking", result: "Luxury studio, Hawaii" },
];

function Clients() {
  return (
    <section id="about" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">
          {/* Photo accent */}
          <RevealOnScroll>
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border border-border shrink-0">
              <Image
                src="/jordan-2.jpg"
                alt="Jordan Lopez"
                fill
                className="object-cover object-center"
                sizes="128px"
              />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                Who I&apos;ve Built For
              </p>
            </RevealOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client, i) => (
                <RevealOnScroll key={client.name} delay={(i % 3) + 1}>
                  <div className="border border-border rounded-xl p-5 bg-surface hover:border-border-hover hover:bg-bg transition-all duration-300">
                    <p className="text-[15px] font-semibold tracking-[-0.02em] mb-1">
                      {client.name}
                    </p>
                    <p className="text-text-muted text-[13px] mb-3">
                      {client.built}
                    </p>
                    <p className="text-text-secondary text-[13px] font-medium">
                      {client.result}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-accent text-[14px] font-mono font-medium hover:text-white border-b border-accent/40 hover:border-white pb-0.5 transition-all duration-300 mt-8 group"
              >
                See all projects
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </Link>
            </RevealOnScroll>
          </div>
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
      a: "Websites start at $3K. Price depends on scope. A 5-page business site is different from a full e-commerce platform. I'll give you an exact quote within 24 hours of your first message.",
    },
    {
      q: "How long does it take?",
      a: "Most websites ship in under 2 weeks. AI systems and sales operations depend on complexity, but I'll give you a clear timeline upfront. No surprises.",
    },
    {
      q: "Do I own the code?",
      a: "100%. Everything I build is yours. Full source code, deployed on your infrastructure, no vendor lock-in. You can hire someone else to maintain it if you want, but you won't need to.",
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
      a: "That's fine. Most clients start with a website and come back for AI or sales ops later. No pressure to buy a package. Just tell me what you need right now.",
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
                    <span className="text-[16px] font-medium pr-6">{faq.q}</span>
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
                className="group border border-border rounded-2xl p-8 text-center hover:border-text/20 transition-all duration-300 glow-pulse"
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
              Or email directly: <a href="mailto:jordanl4solar@gmail.com" className="text-text hover:underline transition-colors">jordanl4solar@gmail.com</a>
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
          <div className="max-w-[280px]">
            <p className="text-text text-[14px] font-semibold tracking-[-0.02em] mb-2">
              JDLO
            </p>
            <p className="text-text-muted text-[13px] leading-relaxed mb-6">
              Apps, AI systems, websites, games, casinos. Whatever your business needs.
            </p>
            <p className="text-text text-[12px] font-medium mb-3">Stay in the loop</p>
            <NewsletterCapture />
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
                <a href="mailto:jordanl4solar@gmail.com" className="text-text-muted text-[12px] hover:text-text transition-colors">jordanl4solar@gmail.com</a>
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

/* ── Experience Teaser ── */
function ExperienceTeaser() {
  return (
    <section className="border-t border-border">
      <Link
        href="/experience"
        className="group block relative overflow-hidden bg-[#040810] px-6 md:px-10 py-28 sm:py-40 text-center hover:bg-[#060c18] transition-colors duration-700"
      >
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#4de8cc]/6 blur-[100px] group-hover:bg-[#4de8cc]/12 transition-all duration-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-[#C9A84C]/6 blur-[80px] group-hover:bg-[#C9A84C]/10 transition-all duration-700" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <p className="font-mono text-[11px] tracking-[0.5em] uppercase text-[#4de8cc] mb-8">
            Interactive Experience — Click to Enter
          </p>
          <h2
            className="tracking-[-0.04em] leading-[0.85] text-[#dde8f0] mb-6 group-hover:text-white transition-colors duration-500"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(5rem, 20vw, 18rem)",
            }}
          >
            JDLO
          </h2>
          <p className="text-[#dde8f0]/40 text-[13px] sm:text-[15px] font-mono tracking-[0.2em] uppercase mb-10 group-hover:text-[#4de8cc]/80 transition-colors duration-500">
            3D · WebGL · Scroll-driven · Immersive
          </p>
          <div className="inline-flex items-center gap-3 border border-[#dde8f0]/12 rounded-full px-7 py-3.5 group-hover:border-[#4de8cc]/50 transition-all duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4de8cc] animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#dde8f0]/35 uppercase group-hover:text-[#4de8cc] transition-colors duration-500">
              Enter →
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <main>
      <HomeNav />
      <Hero />
      <AcademyBanner />
      <Services />
      <Process />
      <Work />
      <ExperienceTeaser />
      <MidCTA text="Know what you need? Let's skip the small talk." href="/contact" label="Start a Project" />
      <Results />
      <Testimonials />
      <QuickQuoteSection />
      <Clients />
      <FAQ />
      <ReachOut />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
