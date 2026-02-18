import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SpotlightCard from "@/components/SpotlightCard";

/* ── Nav ── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between">
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
    <section className="min-h-screen flex flex-col justify-end relative px-6 pb-[12vh]">
      {/* Ambient glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-[#ff6b35]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="max-w-[900px]">
          <p className="text-text-muted text-[11px] tracking-[0.4em] uppercase mb-6 hero-animate hero-delay-1 font-mono">
            Jordan Lopez &mdash; AI Operator
          </p>

          <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.04em] mb-0 hero-animate hero-delay-2">
            <span className="text-text">I don&apos;t teach</span>
            <br />
            <span className="gradient-text-blue">theory.</span>
          </h1>

          <div className="mt-8 mb-12 hero-animate hero-delay-3">
            <div className="w-[80px] h-px bg-accent/40 mb-8" />
            <p className="text-text-secondary text-xl md:text-2xl leading-relaxed max-w-[480px] font-light">
              Every skill I&apos;ve built running real businesses &mdash; now available to the right people.
            </p>
          </div>

          <div className="flex items-center gap-6 hero-animate hero-delay-4">
            <a href="#skills" className="glow-btn">
              See What I Teach
            </a>
            <a href="#apply" className="text-text-secondary text-[14px] hover:text-text transition-colors duration-300 group">
              Apply Now <span className="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Right-aligned stat */}
        <div className="hidden lg:block absolute right-0 bottom-0">
          <div className="text-right">
            <p className="text-[80px] font-bold tracking-[-0.05em] leading-none gradient-text-blue opacity-20">
              6
            </p>
            <p className="text-text-muted text-[11px] tracking-[0.2em] uppercase mt-2">
              Disciplines
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hero-animate hero-delay-4">
        <div className="w-px h-12 bg-gradient-to-b from-text-muted/50 to-transparent" />
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
    <section className="border-y border-border py-4 overflow-hidden">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-text-muted text-[12px] tracking-[0.2em] uppercase whitespace-nowrap px-8 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ── Skills / Bento Grid ── */
const skills = [
  {
    title: "AI & Automation",
    desc: "Build AI agents, automate workflows, integrate AI into real business operations. This is what I run my companies on.",
    price: "$2,500",
    tag: "Most Popular",
    size: "large" as const,
  },
  {
    title: "Sales Systems",
    desc: "The exact frameworks I use to close. Scripts, objection handling, pipeline management, CRM automation.",
    price: "$1,500",
    tag: null,
    size: "normal" as const,
  },
  {
    title: "Prompt Engineering",
    desc: "Advanced techniques that 99% don't know. Get what you want from any model, every time.",
    price: "$800",
    tag: null,
    size: "normal" as const,
  },
  {
    title: "Content & Brand",
    desc: "Build a personal brand that prints. Strategy, production systems, distribution — AI-accelerated.",
    price: "$1,200",
    tag: null,
    size: "normal" as const,
  },
  {
    title: "Team & Operations",
    desc: "Hiring, SOPs, management frameworks. Systems that let you scale without burning out.",
    price: "$2,000",
    tag: null,
    size: "normal" as const,
  },
  {
    title: "1-on-1 Mentorship",
    desc: "Direct access. Weekly calls, custom roadmap, async support. Limited to 5 spots.",
    price: "$5,000/mo",
    tag: "Limited",
    size: "large" as const,
  },
];

function Skills() {
  return (
    <section id="skills" className="section-gap">
      <div className="max-w-[1400px] mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-3 font-mono">
                What I Teach
              </p>
              <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[1]">
                Every skill required
                <br />
                <span className="text-text-secondary">to operate.</span>
              </h2>
            </div>
            <p className="text-text-muted text-[14px] max-w-[300px] leading-relaxed">
              Each discipline taught at the level I actually use it. Not watered down.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <RevealOnScroll
              key={skill.title}
              delay={(i % 3) + 1}
              className={skill.size === "large" ? "lg:col-span-2" : ""}
            >
              <SpotlightCard className="skill-card h-full group cursor-pointer">
                <div className="flex items-start justify-between mb-8">
                  {skill.tag ? (
                    <span className="text-[10px] tracking-[0.15em] uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full font-medium">
                      {skill.tag}
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="text-[28px] font-bold tracking-[-0.03em] text-text/10 group-hover:text-text/20 transition-colors duration-500">
                    {skill.price}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] mb-3">
                  {skill.title}
                </h3>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-8">
                  {skill.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                  <span className="text-[13px] text-text-muted font-mono">
                    From {skill.price}
                  </span>
                  <span className="text-accent text-[13px] font-medium opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                    Explore &rarr;
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

/* ── Statement ── */
function Statement() {
  return (
    <section className="section-gap">
      <div className="max-w-[1400px] mx-auto px-6">
        <RevealOnScroll>
          <div className="max-w-[800px]">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.1] text-text-secondary">
              This isn&apos;t a course from someone who{" "}
              <span className="text-text">read about AI.</span>{" "}
              This is the playbook from someone{" "}
              <span className="gradient-text-blue">in the arena.</span>
            </h2>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── For Businesses ── */
function ForBusinesses() {
  return (
    <section className="section-gap">
      <div className="max-w-[1400px] mx-auto px-6">
        <RevealOnScroll>
          <div className="relative rounded-[28px] border border-border overflow-hidden">
            {/* Gradient mesh bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface via-bg to-surface" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#ff6b35]/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-[500px]">
                <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-4 font-mono">
                  For Businesses
                </p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] leading-[1.05] mb-6">
                  Your team is operating
                  <br />
                  <span className="text-text-secondary">at 10%.</span>
                </h2>
                <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
                  I audit your workflows, train your team on AI, and build the systems
                  that 10x your output. This isn&apos;t a workshop.
                </p>
                <Link href="/businesses" className="glow-btn">
                  Book a Strategy Call
                </Link>
              </div>

              <div className="flex flex-col gap-4 lg:min-w-[280px]">
                {["Workflow Audit", "Team Training", "System Build", "Advisory"].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm"
                  >
                    <span className="text-accent text-[11px] font-mono">0{i + 1}</span>
                    <span className="text-[14px] text-text-secondary">{item}</span>
                  </div>
                ))}
                <p className="text-text-muted text-[12px] font-mono mt-2 pl-1">
                  Starting at $10,000
                </p>
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
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
          <div>
            <RevealOnScroll>
              <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-4 font-mono">
                About
              </p>
              <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[1] mb-10">
                Not a guru.
                <br />
                <span className="text-text-secondary">An operator.</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-[560px]">
                <p>
                  I build and run businesses on AI. Sales teams, content engines,
                  automation systems &mdash; the full stack of what it takes to win right now.
                </p>
                <p>
                  Everything I teach, I use. Every system I sell, I built for myself first.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={2}>
            <div className="space-y-6">
              {[
                { num: "500+", label: "Students Trained" },
                { num: "50+", label: "Businesses Served" },
                { num: "6", label: "Skill Disciplines" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-4">
                  <p className="text-[48px] font-bold tracking-[-0.04em] leading-none gradient-text-blue min-w-[100px]">
                    {stat.num}
                  </p>
                  <p className="text-text-muted text-[13px] tracking-[0.1em] uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── Process ── */
function Process() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1]">
              How it works.
            </h2>
            <p className="text-text-muted text-[14px] max-w-[300px]">
              Simple. Selective. Not everyone gets in.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-0 border border-border rounded-[20px] overflow-hidden">
          {[
            { num: "01", title: "Apply", desc: "Tell me what you want to learn and where you're at." },
            { num: "02", title: "Get Matched", desc: "I recommend the right skill track and format for your goals." },
            { num: "03", title: "Execute", desc: "Learn from my systems. Implement immediately. See results." },
          ].map((step, i) => (
            <RevealOnScroll key={step.num} delay={i + 1}>
              <div className={`p-10 md:p-12 ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""} group hover:bg-surface/50 transition-colors duration-500`}>
                <span className="text-accent text-[11px] font-mono tracking-wider">{step.num}</span>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] mt-4 mb-4">
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
      a: "Each skill has different depth, duration, and value. You're paying for the specific systems and frameworks I use daily, not a generic course.",
    },
    {
      q: "Can I learn multiple skills?",
      a: "Yes. Most serious students start with one and come back. Mentorship students get guidance across all disciplines.",
    },
    {
      q: "What makes this different?",
      a: "I'm not a content creator who read about AI. I run businesses on it. Every system I teach, I use. You're learning from someone in the trenches.",
    },
    {
      q: "How do I know if I'm a good fit?",
      a: "Apply. Tell me your goals. If I can help, I'll tell you. If I can't, I'll tell you that too.",
    },
  ];

  return (
    <section id="faq" className="section-gap">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-24">
              <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[1] mb-6">
                Questions
                <span className="text-text-muted">.</span>
              </h2>
              <p className="text-text-secondary text-[16px] leading-relaxed max-w-[360px]">
                If your question isn&apos;t here, apply and ask me directly.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <RevealOnScroll key={i} delay={(i % 3) + 1}>
                <details className="group border-b border-border/50 last:border-0">
                  <summary className="flex items-center justify-between py-6 cursor-pointer">
                    <span className="text-[15px] font-medium pr-4">{faq.q}</span>
                    <span className="text-text-muted group-open:rotate-45 transition-transform duration-300 text-lg shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="pb-6">
                    <p className="text-text-secondary text-[14px] leading-relaxed">
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

/* ── CTA / Apply ── */
function Apply() {
  return (
    <section id="apply" className="section-gap relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/30 to-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
        <RevealOnScroll>
          <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-6 font-mono">
            Limited Spots
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-[0.95] mb-8">
            Ready to operate
            <br />
            <span className="gradient-text-blue">differently?</span>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <p className="text-text-secondary text-lg mb-12 max-w-[400px] mx-auto">
            Apply and I&apos;ll get back to you personally.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              book a strategy call
            </Link>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[15px] font-semibold tracking-tight">JDLO</span>
            <span className="text-text-muted text-[11px] font-mono tracking-wider">AI EDUCATION & OPS</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/careers" className="text-[12px] text-text-muted hover:text-text transition-colors duration-300">
              Careers
            </Link>
            <a
              href="https://instagram.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-text-muted hover:text-text transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-text-muted hover:text-text transition-colors duration-300"
            >
              X
            </a>
          </div>
        </div>
        <p className="text-text-muted/50 text-[10px] text-center mt-8 font-mono tracking-wider">
          &copy; {new Date().getFullYear()} JDLO
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
      <Statement />
      <ForBusinesses />
      <About />
      <Process />
      <FAQ />
      <Apply />
      <Footer />
    </main>
  );
}
