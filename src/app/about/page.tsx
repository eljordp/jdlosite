import Image from 'next/image';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import RevealOnScroll from '@/components/RevealOnScroll';
import ScrollHighlightText from '@/components/ScrollHighlightText';

const milestones = [
  { year: "Start", label: "Selling websites for a few hundred dollars. No experience, no connections, no roadmap. Just outworking everyone else." },
  { year: "First win", label: "Same websites, now closing at $3,000. The product didn't change. The positioning did. First lesson: value is perception." },
  { year: "Leverage", label: "Built an AI receptionist product from scratch. Clients paying monthly. Revenue coming in without trading hours for dollars." },
  { year: "Investment", label: "Put real money into education: mentors, programs, courses. Compressed years of learning into months. This is where the edge was built." },
  { year: "Now", label: "Running a sales team on AI. Closing enterprise-level clients: DHL ($92B, Chicago), P.F. Chang's ($1B+). 2–3 months in. This is what's possible." },
];

const stats = [
  { value: "$0", label: "What it started with", sub: "No connections. No playbook. No safety net." },
  { value: "90 days", label: "Zero to enterprise clients", sub: "DHL. P.F. Chang's. From scratch." },
  { value: "$92B+", label: "Revenue of companies we've closed", sub: "The room you end up in when you move fast." },
];

export default function AboutPage() {
  return (
    <PageShell ctaText="Work With Me" ctaHref="/#apply" activeSlug="about">
      {/* ── Hero ── */}
      <section className="min-h-[90vh] flex items-center relative">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text left */}
            <div>
              <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
                The Story
              </p>
              <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-[-0.05em] leading-[0.88] mb-10 hero-animate hero-delay-2">
                Not a guru.
                <br />
                <span className="text-text-secondary">An operator.</span>
              </h1>
              <p className="text-text-secondary text-xl leading-relaxed max-w-[480px] hero-animate hero-delay-3">
                2–3 months from beginner to closing DHL and P.F. Chang&apos;s. This is what moving with urgency actually looks like.
              </p>
            </div>
            {/* Photo right */}
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-border hero-animate hero-delay-4">
              <Image
                src="/jordan-3.jpg"
                alt="Jordan Lopez"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Photos + Intro ── */}
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Photos grid */}
            <RevealOnScroll>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border">
                  <Image
                    src="/jordan.jpg"
                    alt="Jordan Lopez"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border mt-8">
                  <Image
                    src="/jordan-2.jpg"
                    alt="Jordan Lopez"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/*
                  Add more photos below — duplicate this block and swap the src:

                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border">
                    <Image src="/your-photo.jpg" alt="..." fill className="object-cover object-center" sizes="..." />
                  </div>
                */}
              </div>
            </RevealOnScroll>

            {/* Story text */}
            <div className="space-y-10">
              <ScrollHighlightText
                text="2–3 months ago I was a beginner. Not saying that to be humble. Saying it because it matters. Most people look at where someone is and assume they were always there. They weren't. I started selling websites for a couple hundred dollars with no playbook, no connections, no guarantees."
                className="text-[17px] font-normal leading-[1.8] tracking-normal"
              />
              <ScrollHighlightText
                text="I moved fast. Websites went to $3K. Then I built an AI receptionist product: clients paying monthly, systems running without me. Recurring revenue from something I built. That feeling changes you. You stop thinking like an employee and start thinking like an operator."
                className="text-[17px] font-normal leading-[1.8] tracking-normal"
              />
              <ScrollHighlightText
                text="I invested heavily in education. Real money into real mentors and programs. Not everyone does that. Most people look for the free version. The people who invest in the paid version get there faster. Not an opinion, it's what I lived."
                className="text-[17px] font-normal leading-[1.8] tracking-normal"
              />
              <ScrollHighlightText
                text="Now I run a sales team built entirely on AI systems. We work with enterprise clients: DHL ($92B, Chicago), P.F. Chang's ($1B+). Companies with more employees than most people have followers. The result of moving with urgency, investing in the right things, and building real systems. That's what JDLO teaches."
                className="text-[17px] font-normal leading-[1.8] tracking-normal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
              The Journey
            </p>
          </RevealOnScroll>
          <div className="max-w-[720px] space-y-0">
            {milestones.map((m, i) => (
              <RevealOnScroll key={i} delay={(i % 3) + 1}>
                <div className="grid grid-cols-[120px_1fr] gap-8 py-8 border-b border-border last:border-0">
                  <p className="text-accent text-[11px] font-mono tracking-[0.2em] uppercase pt-1">{m.year}</p>
                  <p className="text-text-secondary text-[15px] leading-[1.7]">{m.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid sm:grid-cols-3 gap-0">
            {stats.map((s, i) => (
              <RevealOnScroll key={i} delay={i + 1}>
                <div className={`py-12 flex flex-col gap-4 ${i < stats.length - 1 ? 'sm:border-r border-border sm:pr-12' : ''} ${i > 0 ? 'sm:pl-12' : ''} ${i > 0 ? 'border-t sm:border-t-0 border-border pt-12 sm:pt-12' : ''}`}>
                  <div className="w-6 h-px bg-accent mb-2" />
                  <p className="text-[clamp(2.8rem,6vw,5rem)] font-bold tracking-[-0.05em] gradient-text leading-none">{s.value}</p>
                  <div>
                    <p className="text-text text-[15px] font-medium leading-snug mb-1">{s.label}</p>
                    <p className="text-text-muted text-[13px] leading-relaxed">{s.sub}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Ecosystem ── */}
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
            <RevealOnScroll>
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
                The Ecosystem
              </p>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[0.95] mb-8">
                Once you&apos;re in,
                <br />
                <span className="text-text-secondary">it compounds.</span>
              </h2>
              <p className="text-text-secondary text-[16px] leading-relaxed max-w-[440px]">
                JDLO isn&apos;t a course platform. It&apos;s an ecosystem. The skills stack on each other.
                The network grows. The results snowball. Every piece connects: courses, mentorship, tools, operators.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div className="space-y-4">
                {[
                  { title: "True operators", desc: "We don't teach theory. We run real systems, real teams, real clients. And we show you exactly how." },
                  { title: "Nothing slips", desc: "When you're in our ecosystem, you're backed by a team. Every deliverable, every workflow, every result. We're on it." },
                  { title: "The network compounds", desc: "The people you meet inside JDLO are operators. That network has real value: clients, collaborators, opportunities." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-surface/30 p-6 hover:border-border-hover transition-colors duration-300">
                    <span className="text-accent text-[15px] mt-0.5 shrink-0">→</span>
                    <div>
                      <h3 className="text-[15px] font-semibold tracking-[-0.02em] mb-1">{item.title}</h3>
                      <p className="text-text-secondary text-[13px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <RevealOnScroll>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[0.95] mb-8">
              Ready to get in?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/students" className="magnetic-btn">
                <span className="relative z-10">Browse Courses</span>
              </Link>
              <Link href="/mentorship" className="ghost-btn">
                Apply for Mentorship
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
