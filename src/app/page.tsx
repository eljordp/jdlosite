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
            AI, sales, automation, operations &mdash;
            every skill I use to run real businesses, taught to the right people.
          </p>
          <div>
            <GlowLink href="/courses">
              Browse Courses
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
    desc: "Build AI agents, automate workflows, integrate AI into real operations. Master prompting, the API, and deploy systems that run while you sleep.",
    price: "$297",
    href: "/courses/ai-automation",
  },
  {
    title: "Sales Systems",
    desc: "Scripts, objection handling, pipeline management, CRM automation. Plus hiring, SOPs, and the management systems to build a team that runs without you.",
    price: "$197",
    href: "/courses/sales-systems",
  },
  {
    title: "The Operator Playbook",
    desc: "Discipline, mindset, resilience, networking — then how to run businesses, build systems, and position yourself for equity and leadership.",
    price: "$297",
    href: "/courses/operator-playbook",
  },
  {
    title: "AI Mastery — Expert",
    desc: "Claude Code, MCP servers, Agent SDK, computer use, vision. The full power of AI — nothing held back. For serious builders only.",
    price: "$9,997",
    href: "/courses/ai-mastery",
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
              Tracks
            </p>
            <p className="text-text-muted text-[11px] font-mono hidden md:block">
              05 tracks
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

/* ── Testimonials ── */
function Testimonials() {
  /* TODO: Replace with real testimonials */
  const testimonials = [
    {
      quote: "Add your first testimonial here.",
      name: "Name",
      role: "Role / Company",
    },
    {
      quote: "Add your second testimonial here.",
      name: "Name",
      role: "Role / Company",
    },
    {
      quote: "Add your third testimonial here.",
      name: "Name",
      role: "Role / Company",
    },
  ];

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
            What people say
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i + 1}>
              <div className="border border-border rounded-2xl p-8 h-full flex flex-col">
                <p className="text-text-secondary text-[15px] leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-text text-[14px] font-medium">{t.name}</p>
                  <p className="text-text-muted text-[12px] font-mono">{t.role}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
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

/* ── Results ── */
function Results() {
  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
            The receipts
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-0">
          {[
            { num: "$0", label: "Starting capital", desc: "No connections. No playbook. No safety net." },
            { num: "90", label: "Days to enterprise", desc: "Zero to closing DHL and P.F. Chang's." },
            { num: "$92B+", label: "Client revenue", desc: "Combined revenue of companies we've closed." },
          ].map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i + 1}>
              <div className={`py-8 md:py-0 md:pr-12 ${i < 2 ? "md:border-r border-border" : ""} ${i > 0 ? "md:pl-12" : ""}`}>
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
            { num: "01", title: "Take the quiz", desc: "Find out which track fits your goals. Takes 2 minutes." },
            { num: "02", title: "Pick your course", desc: "Each course is built on real systems I use daily." },
            { num: "03", title: "Execute", desc: "Learn, implement, see results. Top performers get real paid work." },
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
    { q: "Why different prices?", a: "Each course has different depth and scope. AI Mastery is $10K because it's 8 weeks of expert-level systems that can make you millions. The others are priced for accessibility — this is a soft launch." },
    { q: "Can I learn multiple skills?", a: "Yes. Most start with one and come back. Mentorship students get guidance across all tracks." },
    { q: "What makes this different?", a: "I run businesses on AI. Every system I teach, I use. You're learning from someone in the trenches — not someone who read about it." },
    { q: "What happens after the course?", a: "Top performers get access to real paid projects from my network. The best of those get offered a spot on my team. It's a pipeline, not a certificate." },
    { q: "How do I know which course to take?", a: "Take the skills quiz. 2 minutes. It'll tell you exactly where to start based on your goals." },
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
              Start with the quiz or browse the courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowLink href="/quiz">
                Take the Quiz
              </GlowLink>
              <Link href="/courses" className="ghost-btn">
                Browse Courses
              </Link>
            </div>
            <p className="text-text-muted text-[13px] mt-8">
              Want 1-on-1?{" "}
              <Link href="/mentorship" className="text-accent hover:underline">
                Apply for mentorship
              </Link>
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
      <Testimonials />
      <About />
      <Results />
      <Process />
      <FAQ />
      <Apply />
      <Footer />
    </main>
  );
}
