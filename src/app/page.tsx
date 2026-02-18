import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SpotlightCard from "@/components/SpotlightCard";

/* ── Nav ── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-semibold tracking-tight">
          JDLO
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[13px] text-text-secondary">
          <a href="#skills" className="hover:text-text transition-colors duration-300">
            Skills
          </a>
          <a href="#about" className="hover:text-text transition-colors duration-300">
            About
          </a>
          <a href="#faq" className="hover:text-text transition-colors duration-300">
            FAQ
          </a>
        </div>
        <Link href="#apply" className="glow-btn !py-1.5 !px-4 !text-[13px]">
          Work With Me
        </Link>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[900px] text-center relative z-10">
        <p className="text-text-muted text-[13px] tracking-[0.3em] uppercase mb-8 hero-animate hero-delay-1">
          AI Operator &middot; Educator &middot; Builder
        </p>

        <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-8 hero-animate hero-delay-2">
          <span className="gradient-text">I don&apos;t teach theory.</span>
          <br />
          <span className="gradient-text-blue">I teach how I operate.</span>
        </h1>

        <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[560px] mx-auto mb-12 hero-animate hero-delay-3">
          Every skill I&apos;ve built running real businesses &mdash;
          AI, sales, automation, content, management &mdash;
          now available to the right people.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate hero-delay-4">
          <a href="#skills" className="glow-btn">
            See What I Teach
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M8 3v10m0 0l4-4m-4 4L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#apply" className="ghost-btn">
            Apply Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-animate hero-delay-4">
        <span className="text-text-muted text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}

/* ── Ticker ── */
function Ticker() {
  const items = [
    "AI Systems", "Sales", "Automation", "Content Strategy", "Prompt Engineering",
    "Team Building", "Operations", "Consulting", "Management", "AI Development",
  ];
  return (
    <section className="border-y border-border py-5 overflow-hidden">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-text-muted text-[13px] tracking-[0.15em] uppercase whitespace-nowrap px-8"
          >
            {item}
            <span className="inline-block ml-8 text-border-hover">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ── Skills / Services ── */
const skills = [
  {
    icon: "01",
    title: "AI & Automation",
    desc: "Learn to build AI agents, automate workflows, and integrate AI into real business operations. This is what I run my companies on.",
    price: "Starting at $2,500",
    tag: "Most Popular",
  },
  {
    icon: "02",
    title: "Sales Systems",
    desc: "The exact frameworks I use to close deals — scripts, objection handling, pipeline management, CRM automation. Proven at scale.",
    price: "Starting at $1,500",
    tag: null,
  },
  {
    icon: "03",
    title: "Prompt Engineering",
    desc: "Advanced prompting techniques that 99% of people don't know. Get exactly what you want from any model, every time.",
    price: "Starting at $800",
    tag: null,
  },
  {
    icon: "04",
    title: "Content & Brand",
    desc: "How to build a personal brand that prints. Content strategy, production systems, distribution — all AI-accelerated.",
    price: "Starting at $1,200",
    tag: null,
  },
  {
    icon: "05",
    title: "Team & Operations",
    desc: "Build and manage high-performing teams. Hiring, SOPs, management frameworks, and the systems that let you scale without burning out.",
    price: "Starting at $2,000",
    tag: null,
  },
  {
    icon: "06",
    title: "1-on-1 Mentorship",
    desc: "Direct access. Weekly calls, custom roadmap, async support between sessions. Limited to 5 spots at any time.",
    price: "$5,000 / month",
    tag: "Limited",
  },
];

function Skills() {
  return (
    <section id="skills" className="section-gap">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <p className="text-accent text-[13px] tracking-[0.3em] uppercase text-center mb-4">
            What I Teach
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.03em] text-center mb-4">
            Every skill required to operate.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={2}>
          <p className="text-text-secondary text-center max-w-[500px] mx-auto mb-20">
            Each discipline I&apos;ve mastered running businesses &mdash;
            taught at the level I actually use it.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <RevealOnScroll key={skill.icon} delay={i < 6 ? (i % 3) + 1 : 1}>
              <SpotlightCard className="skill-card h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-text-muted text-xs font-mono">{skill.icon}</span>
                  {skill.tag && (
                    <span className="text-[11px] tracking-[0.1em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {skill.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] mb-3">
                  {skill.title}
                </h3>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-8 flex-1">
                  {skill.desc}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <span className="text-[13px] text-text-muted">{skill.price}</span>
                  <span className="text-accent text-[13px] font-medium group-hover:translate-x-1 transition-transform">
                    Learn more &rarr;
                  </span>
                </div>
              </SpotlightCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── For Businesses ── */
function ForBusinesses() {
  return (
    <section className="section-gap">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <div className="relative rounded-[24px] border border-border bg-surface overflow-hidden p-12 md:p-20">
            {/* Ambient */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-[600px]">
              <p className="text-accent text-[13px] tracking-[0.3em] uppercase mb-6">
                For Businesses
              </p>
              <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-semibold tracking-[-0.03em] mb-6">
                Your team is operating at 10%.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10">
                I audit your workflows, train your team on AI, and build the systems
                that 10x your output. This isn&apos;t a workshop &mdash;
                it&apos;s an overhaul.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/businesses" className="glow-btn">
                  Book a Strategy Call
                </Link>
                <span className="text-text-muted text-[13px] self-center">
                  Starting at $10,000
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
  return (
    <section id="about" className="section-gap">
      <div className="max-w-[800px] mx-auto px-6">
        <RevealOnScroll>
          <p className="text-accent text-[13px] tracking-[0.3em] uppercase text-center mb-4">
            Who I Am
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.03em] text-center mb-12">
            Not a guru. An operator.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={2}>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed text-center">
            <p>
              I build and run businesses on AI &mdash; sales teams, content engines,
              automation systems, the full stack of what it takes to win right now.
            </p>
            <p>
              Everything I teach, I use. Every system I sell, I built for myself first.
              This isn&apos;t theory from someone who watched a YouTube video. This is the
              playbook from someone in the arena.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={3}>
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            {[
              { num: "500+", label: "Students Trained" },
              { num: "50+", label: "Businesses Served" },
              { num: "6", label: "Skill Disciplines" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text-blue mb-2">
                  {stat.num}
                </p>
                <p className="text-text-muted text-[13px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Apply",
      desc: "Tell me what you want to learn and where you're at. Not everyone gets in.",
    },
    {
      num: "02",
      title: "Get Matched",
      desc: "I'll recommend the right skill track and format based on your goals.",
    },
    {
      num: "03",
      title: "Execute",
      desc: "Learn directly from my systems. Implement immediately. See results.",
    },
  ];

  return (
    <section className="section-gap">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <p className="text-accent text-[13px] tracking-[0.3em] uppercase text-center mb-4">
            The Process
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.03em] text-center mb-20">
            Simple. Selective. Effective.
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i + 1}>
              <div className="text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-muted text-sm font-mono mb-6">
                  {step.num}
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.02em] mb-3">
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

/* ── FAQ ── */
function FAQ() {
  const faqs = [
    {
      q: "Who is this for?",
      a: "People who are serious about leveling up — whether you want to master AI, build a business, or get hired. If you're looking for motivation, this isn't it. If you're looking for execution, you're in the right place.",
    },
    {
      q: "Why are the prices different for each skill?",
      a: "Each skill has different depth, duration, and value. Some are quick intensives, others are deep dives. You're paying for the specific systems and frameworks I use daily, not a generic course.",
    },
    {
      q: "Can I learn multiple skills?",
      a: "Yes. Most serious students start with one and come back. Mentorship students get guidance across all disciplines.",
    },
    {
      q: "What makes this different from every other AI course?",
      a: "I'm not a content creator who read about AI. I run businesses on it. You're learning from someone in the trenches, not the sidelines. Every system I teach, I use.",
    },
    {
      q: "How do I know if I'm a good fit?",
      a: "Apply. Tell me your goals and where you're at. If I can help you, I'll tell you. If I can't, I'll tell you that too. No hard sell.",
    },
  ];

  return (
    <section id="faq" className="section-gap">
      <div className="max-w-[700px] mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.03em] text-center mb-16">
            Questions
          </h2>
        </RevealOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={(i % 3) + 1}>
              <details className="group rounded-2xl border border-border hover:border-border-hover transition-all duration-300 bg-surface/50">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <span className="text-[15px] font-medium pr-4">{faq.q}</span>
                  <span className="text-text-muted group-open:rotate-45 transition-transform duration-300 text-xl shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-text-secondary text-[14px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA / Apply ── */
function Apply() {
  return (
    <section id="apply" className="section-gap relative">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[600px] mx-auto px-6 text-center relative z-10">
        <RevealOnScroll>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-[-0.03em] mb-6">
            <span className="gradient-text">Ready to operate</span>
            <br />
            <span className="gradient-text-blue">at a different level?</span>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <p className="text-text-secondary text-lg mb-10">
            Spots are limited. Apply and I&apos;ll get back to you personally.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/mentorship" className="glow-btn">
              Apply for Mentorship
            </Link>
            <Link href="/students" className="ghost-btn">
              Browse Courses
            </Link>
          </div>
          <p className="text-text-muted text-[13px]">
            Businesses &mdash;{" "}
            <Link href="/businesses" className="text-accent hover:underline">
              book a strategy call instead
            </Link>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Careers ── */
function Careers() {
  return (
    <section className="py-20">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <RevealOnScroll>
          <div className="divider mb-16" />
          <p className="text-text-muted text-[13px] tracking-[0.2em] uppercase mb-4">
            Careers
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-4">
            Want to work with me?
          </h3>
          <p className="text-text-secondary text-[14px] mb-8">
            Building a team of people who move fast and care about the work.
          </p>
          <Link href="/careers" className="ghost-btn">
            View Open Roles
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[15px] font-semibold tracking-tight">JDLO</span>
            <span className="text-text-muted text-[13px]">AI Education & Operations</span>
          </div>
          <div className="flex gap-6 text-[13px] text-text-muted">
            <a
              href="https://instagram.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors duration-300"
            >
              X
            </a>
          </div>
        </div>
        <p className="text-text-muted text-[11px] text-center mt-8">
          &copy; {new Date().getFullYear()} JDLO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <Skills />
      <ForBusinesses />
      <About />
      <div className="divider max-w-[200px] mx-auto" />
      <HowItWorks />
      <FAQ />
      <Apply />
      <Careers />
      <Footer />
    </main>
  );
}
