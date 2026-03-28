import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ScrollHighlightText from "@/components/ScrollHighlightText";

export default function CreativePage() {
  return (
    <PageShell activeSlug="services">
      {/* ── Hero ── */}
      <section className="min-h-[90vh] flex items-end relative px-6 md:px-10 pb-[14vh]">
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] bg-text/[0.02] rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-10 hero-animate hero-delay-1">
            Creative &amp; Custom Builds
          </p>

          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em] max-w-[1000px] hero-animate hero-delay-2">
            If you can dream it,
            <br />
            <span className="text-text-secondary">I can build it.</span>
          </h1>

          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[540px] mt-12 hero-animate hero-delay-3">
            The projects that don&apos;t fit in a box. Games, casinos, enterprise
            platforms, custom tools &mdash; whatever you can imagine, brought to
            life from scratch.
          </p>
        </div>
      </section>

      {/* ── What This Looks Like ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-20">
              What This Looks Like
            </p>
          </RevealOnScroll>

          <div className="max-w-[860px]">
            {[
              {
                title: "Video games",
                desc: "Full playable games with stories, characters, and progression. Not prototypes. Not demos. Real games people actually play.",
              },
              {
                title: "Online casinos",
                desc: "Real-time multiplayer platforms with house edge management, promotional systems, and compliance-ready architecture. The whole thing, from slots to admin panel.",
              },
              {
                title: "Enterprise tools",
                desc: "Assessment systems, onboarding platforms, translation tools, internal dashboards. The kind of software companies pay six figures for, built faster and better.",
              },
              {
                title: "Interactive experiences",
                desc: "Quizzes, calculators, product configurators, interactive stories. Anything that makes someone stop scrolling and start engaging.",
              },
              {
                title: "Custom platforms",
                desc: "Whatever your business needs that doesn't exist yet. If you've looked for it and can't find it, that's where I come in.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={(i % 3) + 1}>
                <div className="py-10 border-b border-border last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-16">
                    <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] tracking-[-0.02em] leading-[1.05] shrink-0 sm:w-[260px]">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-[16px] leading-relaxed max-w-[480px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Pitch ── */}
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollHighlightText
            text="Most developers say no to the weird stuff. I say yes. A full RPG video game? Built it. An online casino from scratch? Built it. A competency quiz for a Fortune 500 partner? Built it. The harder the project, the more interested I am."
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1.2] max-w-[900px]"
          />
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">
            <RevealOnScroll>
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono lg:pt-2">
                Pricing
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={1}>
              <div className="max-w-[640px]">
                <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[-0.03em] leading-[0.95] mb-8">
                  Creative &amp; custom projects
                  <br />
                  <span className="text-text-secondary">
                    are quoted individually.
                  </span>
                </h2>
                <p className="text-text-secondary text-[16px] leading-relaxed mb-6">
                  Every project is different. A browser-based game is a different
                  conversation than an enterprise assessment platform. There&apos;s
                  no starting price because there&apos;s no starting template.
                </p>
                <p className="text-text-secondary text-[16px] leading-relaxed">
                  Tell me what you&apos;re imagining and I&apos;ll tell you exactly
                  what it takes to make it real.
                </p>
                <div className="mt-12">
                  <Link href="/contact" className="magnetic-btn">
                    <span className="relative z-10">Tell Me Your Idea</span>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Relevant Work ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
              Relevant Work
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-20">
              The proof is in
              <br />
              <span className="text-text-secondary">what already exists.</span>
            </h2>
          </RevealOnScroll>

          <div className="space-y-0">
            {/* Quanta */}
            <RevealOnScroll>
              <div className="py-12 sm:py-16 border-b border-border">
                <span className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase">
                  Casino
                </span>
                <h3 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] tracking-[-0.02em] leading-[1.05] mt-2">
                  Quanta
                </h3>
                <p className="text-text-secondary text-[clamp(1rem,2vw,1.25rem)] leading-relaxed font-medium mt-4 mb-4 max-w-[640px]">
                  Full online sweepstakes casino built from scratch &mdash;
                  real-time multiplayer, six game types, and a complete operations
                  backend.
                </p>
                <p className="text-text-muted text-[14px] leading-relaxed max-w-[640px] mb-8">
                  Slots, crash, blackjack, dice, roulette, and wheel games.
                  Live player balances, house edge management, promotional
                  systems, admin panel, and compliance-ready architecture.
                  A $50K+ platform delivered as a single turnkey build.
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                  <div>
                    <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                      6
                    </span>
                    <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                      Game types
                    </span>
                  </div>
                  <div>
                    <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                      Real-time
                    </span>
                    <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                      Multiplayer
                    </span>
                  </div>
                  <div>
                    <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                      $50K+
                    </span>
                    <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                      Platform value
                    </span>
                  </div>
                </div>

                <a
                  href="https://quantplay-ten.vercel.app/play"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent text-[14px] font-mono font-medium hover:text-text-secondary border-b border-accent/40 hover:border-text-secondary pb-0.5 transition-all duration-300 group"
                >
                  View live
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    &rarr;
                  </span>
                </a>
              </div>
            </RevealOnScroll>

            {/* JDLO The Game */}
            <RevealOnScroll delay={1}>
              <div className="py-12 sm:py-16 border-b border-border">
                <span className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase">
                  Game
                </span>
                <h3 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] tracking-[-0.02em] leading-[1.05] mt-2">
                  JDLO The Game
                </h3>
                <p className="text-text-secondary text-[clamp(1rem,2vw,1.25rem)] leading-relaxed font-medium mt-4 mb-4 max-w-[640px]">
                  A full RPG video game with seven chapters, original characters,
                  and a story nobody expected from a portfolio piece.
                </p>
                <p className="text-text-muted text-[14px] leading-relaxed max-w-[640px] mb-8">
                  Pokemon Platinum-style adventure built from the ground up.
                  Twenty-plus characters, boss battles, minigames, cinematic
                  cutscenes, and a progression system that keeps people playing.
                  Not a demo &mdash; a real game.
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div>
                    <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                      7
                    </span>
                    <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                      Chapters
                    </span>
                  </div>
                  <div>
                    <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                      20+
                    </span>
                    <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                      Characters
                    </span>
                  </div>
                  <div>
                    <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                      Full
                    </span>
                    <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                      Original story
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* DHL CRA Quiz */}
            <RevealOnScroll delay={2}>
              <div className="py-12 sm:py-16">
                <span className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase">
                  Enterprise
                </span>
                <h3 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] tracking-[-0.02em] leading-[1.05] mt-2">
                  DHL CRA Quiz
                </h3>
                <p className="text-text-secondary text-[clamp(1rem,2vw,1.25rem)] leading-relaxed font-medium mt-4 mb-4 max-w-[640px]">
                  Enterprise competency assessment that transformed onboarding
                  for 200+ employees at a Fortune 500 logistics partner.
                </p>
                <p className="text-text-muted text-[14px] leading-relaxed max-w-[640px] mb-8">
                  Evaluates new hires across compliance, operations, and
                  role-specific knowledge. Automated scoring, progress tracking,
                  and certification &mdash; replacing a manual process that used
                  to take weeks.
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div>
                    <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                      200+
                    </span>
                    <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                      Employees
                    </span>
                  </div>
                  <div>
                    <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                      85%
                    </span>
                    <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                      Faster onboarding
                    </span>
                  </div>
                  <div>
                    <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                      Auto
                    </span>
                    <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                      Certification
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-gap border-t border-border relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-text/[0.02] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <RevealOnScroll>
            <div className="max-w-[700px] mx-auto text-center">
              <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-8">
                Let&apos;s build something
                <br />
                nobody&apos;s seen before.
              </h2>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-14 max-w-[480px] mx-auto">
                You bring the idea. I&apos;ll bring it to life. Tell me what
                you&apos;re imagining and let&apos;s figure out how to make it
                real.
              </p>
              <Link href="/contact" className="magnetic-btn">
                <span className="relative z-10">Start a Conversation</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
