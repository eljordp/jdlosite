import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

/* Project data — add details here as we build out each page */
const projects: Record<string, {
  name: string;
  category: string;
  headline: string;
  description: string;
  stats: { value: string; label: string }[];
  link?: string;
  revenue?: string;
}> = {
  quanta: {
    name: "Quanta",
    category: "Casino",
    headline: "Full online sweepstakes casino from scratch",
    description: "Real-time multiplayer casino with slots, crash games, blackjack, and a complete admin panel. Live player balances, house edge management, promotional systems, and compliance-ready architecture.",
    stats: [
      { value: "6", label: "Game types" },
      { value: "Real-time", label: "Multiplayer" },
      { value: "$50K+", label: "Platform value" },
    ],
    link: "https://quantplay-ten.vercel.app/play",
  },
  "club-bot": {
    name: "Club Bot",
    category: "AI System",
    headline: "AI concierge running a Vegas nightclub operation",
    description: "Automated guest list management for a promoter moving 500+ people per week across Tao Group venues. AI handles bookings, follow-ups, and referral tracking — replaced an entire manual workflow.",
    stats: [
      { value: "500+", label: "Guests/week" },
      { value: "30hrs/wk", label: "Time saved" },
      { value: "3x", label: "List capacity" },
    ],
  },
  "pomaikai": {
    name: "Pomaika\u2018i Co",
    category: "Agency",
    headline: "Centralized operations for a six-figure consultancy",
    description: "Full agency website with a custom admin dashboard that tracks leads, revenue, team performance, and client engagement in real time. One system replaced five different tools they were paying for.",
    stats: [
      { value: "$5K", label: "Project value" },
      { value: "5+", label: "Tools replaced" },
      { value: "20hrs/wk", label: "Time saved" },
    ],
    revenue: "$5,000",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <PageShell activeSlug="work">
      {/* Hero */}
      <section className="min-h-[60vh] flex items-end relative pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-20">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6 hero-animate hero-delay-1">
            {project.category}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">
            {project.name}
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[600px] hero-animate hero-delay-3">
            {project.headline}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text text-[14px] font-mono font-medium border-b border-text/30 hover:border-text pb-0.5 transition-all duration-300 mt-8 hero-animate hero-delay-4"
            >
              View live &rarr;
            </a>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-16">
            {project.stats.map((stat) => (
              <RevealOnScroll key={stat.label}>
                <div>
                  <span className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.04em] block leading-none">
                    {stat.value}
                  </span>
                  <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-2 block">
                    {stat.label}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
            {project.revenue && (
              <RevealOnScroll>
                <div>
                  <span className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.04em] block leading-none">
                    {project.revenue}
                  </span>
                  <span className="text-text-muted text-[11px] font-mono tracking-wider uppercase mt-2 block">
                    Revenue
                  </span>
                </div>
              </RevealOnScroll>
            )}
          </div>

          {/* Description */}
          <RevealOnScroll>
            <div className="max-w-[680px]">
              <p className="text-text-secondary text-[17px] leading-[1.8]">
                {project.description}
              </p>
            </div>
          </RevealOnScroll>

          {/* Video placeholder — Remotion videos go here */}
          <RevealOnScroll>
            <div className="mt-16 rounded-2xl border border-border bg-surface flex items-center justify-center aspect-video max-w-[800px]">
              <p className="text-text-muted text-[14px] font-mono">
                Walkthrough video coming soon
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="max-w-[600px]">
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">
                Want something like this?
              </h2>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
                Tell me what you&apos;re building and I&apos;ll tell you exactly what it takes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="magnetic-btn">
                  <span className="relative z-10">Start a Project</span>
                </Link>
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
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
