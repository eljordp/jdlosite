import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ScrollHighlightText from "@/components/ScrollHighlightText";

export const metadata = {
  title: "Apps & Systems | JDLO",
  description:
    "Custom apps, AI receptionists, automation workflows, dashboards, and business systems that save 40+ hours a week and generate revenue while you sleep.",
};

const offerings = [
  {
    num: "01",
    title: "AI Receptionists",
    desc: "Answers calls, books appointments, qualifies leads, and follows up with customers — 24 hours a day, 7 days a week. Never misses a call. Never takes a day off. Never loses a lead.",
  },
  {
    num: "02",
    title: "Automation Workflows",
    desc: "Replace 40+ hours of manual work every week. The repetitive tasks eating your team alive — data entry, follow-ups, scheduling, reporting — handled automatically, every time, without mistakes.",
  },
  {
    num: "03",
    title: "Custom Dashboards",
    desc: "See your entire business on one screen. Revenue, leads, team performance, customer activity — real-time, always current, designed for how you actually make decisions.",
  },
  {
    num: "04",
    title: "Booking & Scheduling",
    desc: "Let customers book without the back-and-forth. No more phone tag, no more email chains. They pick a time, it shows up on your calendar, and everyone gets a confirmation. Done.",
  },
  {
    num: "05",
    title: "Internal Tools",
    desc: "Custom apps built for exactly how your team works. Not some off-the-shelf software you have to bend your process around — a tool that bends around you.",
  },
  {
    num: "06",
    title: "CRM & Pipeline Systems",
    desc: "Track every lead from first touch to closed deal. Know exactly where your money is coming from, what's stuck, and what needs attention — so you never lose a sale to disorganization.",
  },
];

const caseStudies = [
  {
    category: "AI System",
    name: "Club Bot",
    headline: "AI concierge handling 500+ guests a week for Vegas nightclub promoters",
    desc: "Automated the entire guest list operation — bookings, follow-ups, referral tracking, and capacity management. Replaced a workflow that used to take a full-time person and still dropped the ball.",
    stats: [
      { value: "500+", label: "Guests/week" },
      { value: "30hrs/wk", label: "Time saved" },
      { value: "3x", label: "List capacity" },
    ],
  },
  {
    category: "AI Receptionist",
    name: "Vacaville Appliance",
    headline: "AI receptionist booking 40+ appointments per month, automatically, 24/7",
    desc: "Built a system that answers calls, qualifies whether the lead is worth pursuing, and books the appointment — all without a human touching it. Targeted property managers specifically, their highest-value segment.",
    stats: [
      { value: "40+", label: "Bookings/mo" },
      { value: "24/7", label: "Availability" },
      { value: "$8K+", label: "Revenue added" },
    ],
  },
  {
    category: "Full Platform",
    name: "Quanta Casino",
    headline: "Complete online sweepstakes casino — 6 game types, real-time multiplayer, admin panel",
    desc: "Built the entire platform from nothing. Slots, crash games, blackjack, live player balances, house edge management, promotional systems, and compliance-ready architecture. A $50K+ platform.",
    stats: [
      { value: "6", label: "Game types" },
      { value: "Real-time", label: "Multiplayer" },
      { value: "$50K+", label: "Platform value" },
    ],
    link: "https://quantplay-ten.vercel.app/play",
  },
];

export default function AppsSystemsPage() {
  return (
    <PageShell activeSlug="services">
      {/* ── Hero ── */}
      <section className="min-h-[90vh] flex items-center relative">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10 pt-20">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
            Apps & Systems
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,7.5vw,6.5rem)] font-normal tracking-[-0.03em] leading-[0.9] max-w-[900px] mb-10 hero-animate hero-delay-2">
            Systems that run your business
            <br />
            <span className="text-text-secondary">while you sleep.</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[520px] hero-animate hero-delay-3">
            You shouldn&apos;t be doing the same thing twice. I build the apps,
            automations, and AI tools that replace manual work &mdash; so your
            business makes money and saves time without you in the middle of it.
          </p>
        </div>
      </section>

      {/* ── What I Build ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="flex items-baseline justify-between mb-4">
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono">
                What I Build
              </p>
              <p className="text-text-muted text-[11px] font-mono hidden md:block">
                06 capabilities
              </p>
            </div>
          </RevealOnScroll>

          <div className="max-w-[860px]">
            {offerings.map((item, i) => (
              <RevealOnScroll key={item.num} delay={(i % 3) + 1}>
                <div
                  className={`py-10 ${i < offerings.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="flex items-baseline gap-6 mb-4">
                    <span className="text-accent text-[11px] font-mono shrink-0">
                      {item.num}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-[15px] leading-relaxed max-w-[580px] pl-[calc(11px+1.5rem)] sm:pl-[calc(22px+1.5rem)]">
                    {item.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Impact ── */}
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollHighlightText
            text="Most businesses waste 20 to 40 hours a week on things a system could handle. Answering the same questions. Manually booking appointments. Copying data between spreadsheets. I build the thing that does it all for you — and it never calls in sick."
            className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,4vw,3.5rem)] tracking-[-0.03em] leading-[1.2] max-w-[900px]"
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

            <div className="max-w-[680px]">
              <RevealOnScroll>
                <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,4rem)] font-normal tracking-[-0.03em] leading-[0.95] mb-8">
                  Apps &amp; systems start at $5,000.
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <p className="text-text-secondary text-[16px] leading-relaxed mb-6">
                  Scope determines the final price. A booking system is different
                  from a full CRM. An AI receptionist is different from a
                  multi-user platform. I&apos;ll give you an exact number within
                  24 hours of your first message.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={2}>
                <p className="text-text-secondary text-[16px] leading-relaxed border-l-2 border-border pl-6">
                  Complex platforms &mdash; casinos, enterprise tools, multi-user
                  systems with real-time features &mdash; are quoted individually.
                  These are bigger builds with bigger impact, and the investment
                  reflects that.
                </p>
              </RevealOnScroll>
            </div>
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
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-20">
              Systems I&apos;ve built.<br />
              <span className="text-text-secondary">Results they produced.</span>
            </h2>
          </RevealOnScroll>

          <div className="space-y-0">
            {caseStudies.map((project, i) => (
              <RevealOnScroll key={project.name} delay={(i % 3) + 1}>
                <div className="py-10 sm:py-14 border-b border-border last:border-0">
                  {/* Category + Name */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,4vw,3rem)] tracking-[-0.02em] leading-[1.05] mt-2">
                      {project.name}
                    </h3>
                  </div>

                  {/* Headline */}
                  <p className="text-text-secondary text-[clamp(1rem,2vw,1.25rem)] leading-relaxed font-medium mb-4 max-w-[640px]">
                    {project.headline}
                  </p>

                  {/* Description */}
                  <p className="text-text-muted text-[14px] leading-relaxed max-w-[640px] mb-8">
                    {project.desc}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <span className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold tracking-[-0.03em] block leading-none">
                          {stat.value}
                        </span>
                        <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-1 block">
                          {stat.label}
                        </span>
                      </div>
                    ))}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent text-[13px] font-mono font-medium border-b border-accent/40 hover:border-accent pb-0.5 transition-all duration-300 group ml-4"
                      >
                        View live
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          &rarr;
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <RevealOnScroll>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-normal tracking-[-0.03em] leading-[0.9] mb-4">
              Let&apos;s automate your business.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[460px] mx-auto mb-10">
              Tell me what&apos;s eating your time. I&apos;ll tell you exactly
              what I&apos;d build, what it costs, and how much time you&apos;ll
              get back.
            </p>
            <Link href="/contact" className="magnetic-btn">
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
