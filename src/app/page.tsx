import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import CustomCursor from "@/components/CustomCursor";
import { GlowLink } from "@/components/GlowButton";
import ScrollHighlightText from "@/components/ScrollHighlightText";
import HomeNav from "@/components/HomeNav";

/* ── Hero ── */
function Hero() {
  return (
    <section className="h-screen flex flex-col justify-end relative px-6 md:px-10 pb-[10vh]">
      {/* Ambient */}
      <div className="absolute top-[15%] right-[5%] w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase mb-8 hero-animate hero-delay-1 font-mono">
          Jordan Lopez
        </p>

        <h1 className="hero-animate hero-delay-2">
          <span className="block text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.9] tracking-[-0.05em]">
            I teach how
          </span>
          <span className="block text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.9] tracking-[-0.05em] gradient-text-blue">
            I operate.
          </span>
        </h1>

        <div className="hero-animate hero-delay-3 mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[420px]">
            AI, sales, automation, content, management &mdash;
            every skill I use to run real businesses, taught to the right people.
          </p>
          <div>
            <GlowLink href="#apply">
              Apply Now
            </GlowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Skills ── */
const skills = [
  {
    title: "AI & Automation",
    desc: "Build AI agents, automate workflows, integrate AI into real operations. This is what I run my companies on.",
    price: "$1,250",
    href: "/courses/ai-automation",
  },
  {
    title: "Sales Systems",
    desc: "Scripts, objection handling, pipeline management, CRM automation. The exact frameworks I use to close.",
    price: "$750",
    href: "/courses/sales-systems",
  },
  {
    title: "Prompt Engineering",
    desc: "Advanced techniques that 99% don't know. Get what you want from any model, every time.",
    price: "$400",
    href: "/courses/prompt-engineering",
  },
  {
    title: "Content & Brand",
    desc: "Strategy, production systems, distribution — all AI-accelerated. Build a brand that prints.",
    price: "$600",
    href: "/courses/content-brand",
  },
  {
    title: "Team & Operations",
    desc: "Hiring, SOPs, management frameworks. The systems that let you scale without burning out.",
    price: "$1,000",
    href: "/courses/team-operations",
  },
  {
    title: "1:1 Mentorship",
    desc: "Direct access. Weekly calls, custom roadmap, async support. Limited to 5 spots at any time.",
    price: "$2,500/mo",
    href: "/mentorship",
  },
];

function Skills() {
  return (
    <section id="skills" className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono">
              Disciplines
            </p>
            <p className="text-text-muted text-[11px] font-mono hidden md:block">
              06 skills
            </p>
          </div>
        </RevealOnScroll>

        <div>
          {skills.map((skill, i) => (
            <RevealOnScroll key={skill.title} delay={(i % 3) + 1}>
              <Link href={skill.href} className="skill-row group block">
                <div>
                  <span className="skill-title">{skill.title}</span>
                  <div className="skill-desc">
                    <p className="text-text-secondary text-[14px] leading-relaxed pt-4 max-w-[500px]">
                      {skill.desc}
                    </p>
                  </div>
                </div>
                <span className="skill-price">{skill.price}</span>
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

/* ── Statement ── */
function Statement() {
  return (
    <section className="section-gap">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollHighlightText
          text="This isn't a course from someone who read about AI. This is from someone who runs on it every day."
          className="text-[clamp(1.8rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] leading-[1.15] max-w-[700px]"
        />
      </div>
    </section>
  );
}

/* ── For Businesses ── */
function ForBusinesses() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
              For Businesses
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1] mb-8">
              Your team is
              <br />
              operating at 10%.
            </h2>
            <p className="text-text-secondary text-[16px] leading-relaxed mb-10 max-w-[440px]">
              I audit your workflows, train your team on AI, and build the systems
              that 10x your output.
            </p>
            <GlowLink href="https://calendar.app.google/uZVeQYHLMe5croEn8" external>
              Book a Strategy Call
            </GlowLink>
            <a
              href="/quiz/operator"
              className="inline-flex items-center gap-2 text-text-muted text-[12px] font-mono hover:text-accent transition-colors duration-300 mt-6"
            >
              Not sure if we&apos;re a fit? Take the quiz →
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <div className="flex flex-col justify-end h-full">
              {["Workflow Audit", "Team Training", "System Build", "Ongoing Advisory"].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-5 border-b border-border group cursor-default"
                >
                  <span className="text-[15px] text-text-secondary group-hover:text-text transition-colors duration-300">
                    {item}
                  </span>
                  <span className="text-text-muted text-[11px] font-mono">0{i + 1}</span>
                </div>
              ))}
              <p className="text-text-muted text-[12px] font-mono mt-6">
                Engagements start at $5,000
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
  return (
    <section id="about" className="section-gap">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
              About
            </p>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[-0.04em] leading-[0.95] mb-10">
              Not a guru.
              <br />
              <span className="text-text-secondary">An operator.</span>
            </h2>
            <ScrollHighlightText
              text="Started with nothing. Sold websites for a few hundred bucks. Now running AI-powered sales teams and working with companies doing billions in revenue. Everything I teach, I lived."
              className="text-lg leading-relaxed max-w-[500px]"
            />
            <Link href="/about" className="inline-flex items-center gap-2 text-accent text-[14px] font-mono font-medium hover:text-white border-b border-accent/40 hover:border-white pb-0.5 transition-all duration-300 mt-10 group">
              The full story
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
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

/* ── Process ── */
function Process() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-20">
            The Process
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-0">
          {[
            { num: "01", title: "Apply", desc: "Tell me what you want to learn. Not everyone gets in." },
            { num: "02", title: "Get matched", desc: "I recommend the right track based on your goals." },
            { num: "03", title: "Execute", desc: "Learn from my systems. Implement. See results." },
          ].map((step, i) => (
            <RevealOnScroll key={step.num} delay={i + 1}>
              <div className={`py-8 md:py-0 md:pr-12 ${i < 2 ? "md:border-r border-border" : ""} ${i > 0 ? "md:pl-12" : ""}`}>
                <span className="text-accent text-[11px] font-mono">{step.num}</span>
                <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-semibold tracking-[-0.03em] mt-3 mb-4 leading-[1.1]">
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
    { q: "Who is this for?", a: "People who are serious. If you want motivation, this isn't it. If you want execution, you're in the right place." },
    { q: "Why different prices?", a: "Each skill has different depth and value. You're paying for specific systems I use daily, not a generic course." },
    { q: "Can I learn multiple skills?", a: "Yes. Most start with one and come back. Mentorship students get guidance across all." },
    { q: "What makes this different?", a: "I run businesses on AI. Every system I teach, I use. You're learning from someone in the trenches." },
    { q: "How do I know if I fit?", a: "Apply. If I can help, I'll tell you. If I can't, I'll tell you that too." },
  ];

  return (
    <section id="faq" className="section-gap">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 lg:gap-24">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-24">
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
                FAQ
              </p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] leading-[1]">
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
function Apply() {
  return (
    <section id="apply" className="section-gap relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <RevealOnScroll>
          <div className="max-w-[600px] mx-auto text-center">
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
              Limited
            </p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] leading-[0.95] mb-8">
              Ready to
              <br />
              <span className="gradient-text-blue">operate?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-12">
              Apply and I&apos;ll get back to you personally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowLink href="/mentorship">
                Apply for Mentorship
              </GlowLink>
              <Link href="/students" className="ghost-btn">
                Browse Courses
              </Link>
            </div>
            <p className="text-text-muted text-[13px] mt-8">
              Businesses &mdash;{" "}
              <a href="https://calendar.app.google/uZVeQYHLMe5croEn8" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                book a strategy call
              </a>
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
    <footer className="py-8 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-text-muted text-[11px] font-mono tracking-wider">
            &copy; {new Date().getFullYear()} JDLO
          </span>
          <div className="flex items-center gap-6">
            <Link href="/careers" className="text-[12px] text-text-muted hover:text-text transition-colors duration-300">
              Careers
            </Link>
            <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="text-[12px] text-text-muted hover:text-text transition-colors duration-300">
              @jdlo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <main className="cursor-none md:cursor-none">
      <CustomCursor />
      <HomeNav />
      <Hero />
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
