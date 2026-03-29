import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

const projects: Record<string, {
  name: string;
  category: string;
  headline: string;
  description: string;
  stats: { value: string; label: string }[];
  link?: string;
  revenue?: string;
  screenshot?: string;
  video?: string;
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
    screenshot: "/screenshots/quanta.png",
    video: "/videos/quanta.mp4",
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
    screenshot: "/screenshots/club-bot.png",
    video: "/videos/club-bot.mp4",
  },
  pomaikai: {
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
    screenshot: "/screenshots/pomaikai.png",
    video: "/videos/pomaikai.mp4",
  },
  "dhl-translator": {
    name: "DHL Translator",
    category: "Enterprise",
    headline: "Desktop app processing thousands of shipments monthly",
    description: "Translation system built for a DHL premier partner handling international logistics. Processes shipping documents, customs forms, and manifests at scale — eliminating hours of manual translation work every single day.",
    stats: [
      { value: "10K+", label: "Shipments/mo" },
      { value: "15hrs/wk", label: "Time saved" },
      { value: "Native", label: "Desktop app" },
    ],
    screenshot: "/screenshots/cubicship.png",
  },
  "dhl-cra-quiz": {
    name: "DHL CRA Quiz",
    category: "Enterprise",
    headline: "Competency assessment for enterprise onboarding",
    description: "Full assessment system that evaluates new hires across compliance, operations, and role-specific knowledge. Automated scoring, progress tracking, and certification — built for a company with 200+ employees.",
    stats: [
      { value: "200+", label: "Employees" },
      { value: "85%", label: "Faster onboarding" },
      { value: "Auto", label: "Certification" },
    ],
    screenshot: "/screenshots/cubicship.png",
  },
  "pf-changs": {
    name: "PF Chang\u2019s AI Receptionist",
    category: "AI / Enterprise",
    headline: "AI phone system demo for national restaurant chain",
    description: "Built an AI-powered phone system that handles incoming calls, routes them to the right department, qualifies leads, and books reservations automatically. Demoed to a national chain.",
    stats: [
      { value: "Enterprise", label: "Demo" },
      { value: "Auto", label: "Call routing" },
      { value: "AI", label: "Lead qualification" },
    ],
  },
  "ai-receptionist": {
    name: "AI Receptionist",
    category: "AI / SaaS",
    headline: "White-label AI phone system for local businesses",
    description: "A multi-tenant AI receptionist product that any local business can use. Answers calls 24/7, qualifies leads, books appointments, and sends follow-ups. Designed to be white-labeled and resold.",
    stats: [
      { value: "Multi-tenant", label: "Architecture" },
      { value: "24/7", label: "Call handling" },
      { value: "Auto", label: "Booking" },
    ],
  },
  "loan-agent": {
    name: "Loan Agent",
    category: "AI / SaaS",
    headline: "Multi-tenant loan processing system with AI underwriting",
    description: "Full loan processing platform that automates applications, document review, and underwriting decisions. Multi-tenant so multiple brokerages can use it. Generates PDFs, tracks pipelines, and manages compliance.",
    stats: [
      { value: "Multi-tenant", label: "Platform" },
      { value: "Auto", label: "Processing" },
      { value: "PDF", label: "Generation" },
    ],
  },
  "west-coast-terpz": {
    name: "West Coast Terpz",
    category: "E-commerce",
    headline: "E-commerce platform that turned a local brand online",
    description: "Full online store with wholesale ordering, product management, and integrated checkout. Took a business from Instagram DMs to a real e-commerce operation processing orders 24/7.",
    stats: [
      { value: "$12K+", label: "Monthly revenue" },
      { value: "24/7", label: "Order processing" },
      { value: "3x", label: "Customer reach" },
    ],
    revenue: "$900+",
    screenshot: "/screenshots/west-coast-terpz.png",
  },
  "vacaville-appliance": {
    name: "Vacaville Appliance",
    category: "AI System",
    headline: "AI receptionist that books appointments while they sleep",
    description: "Website plus an AI-powered receptionist that answers calls, qualifies leads, and books appointments automatically. Targeted specifically at property managers — their highest-value customer segment.",
    stats: [
      { value: "40+", label: "Bookings/mo" },
      { value: "24/7", label: "Availability" },
      { value: "$8K+", label: "Revenue added" },
    ],
    revenue: "$1,300",
    screenshot: "/screenshots/vacaville-appliance.png",
  },
  "sticker-smith": {
    name: "The Sticker Smith",
    category: "Website + Marketing",
    headline: "Brand website that turned a print shop into a real business",
    description: "Complete brand identity, website, and marketing system for a Bay Area print shop. Went from word-of-mouth only to showing up online, getting orders, and looking legitimate to wholesale buyers.",
    stats: [
      { value: "5x", label: "Online visibility" },
      { value: "New", label: "Revenue channel" },
      { value: "Pro", label: "Brand identity" },
    ],
    revenue: "~$1,000",
    screenshot: "/screenshots/sticker-smith.png",
  },
  "dank-slaps": {
    name: "Dank Slaps",
    category: "E-commerce",
    headline: "Niche dropship store system — one template, infinite niches",
    description: "A reusable e-commerce template system where JP drops a niche and a full store gets deployed. Sticker Smith handles fulfillment. Instant deploy, auto fulfillment, infinitely scalable.",
    stats: [
      { value: "Instant", label: "Deploy" },
      { value: "Auto", label: "Fulfillment" },
      { value: "Scalable", label: "System" },
    ],
  },
  "miiir-beats": {
    name: "Miiir Beats",
    category: "E-commerce",
    headline: "Beat store for a producer with 107M+ streams",
    description: "Custom beat store for 415miiir — a Bay Area producer with 107M+ streams and 205 credits. Browse beats, audio preview, 3 license tiers (Basic Lease, Ultimate Lease, Exclusive Buyout), Stripe checkout, and auto-delivery.",
    stats: [
      { value: "107M+", label: "Streams" },
      { value: "3", label: "License tiers" },
      { value: "Auto", label: "Delivery" },
    ],
    screenshot: "/screenshots/miiir-beats.png",
  },
  "fw-wheels": {
    name: "fw.wheels",
    category: "Website",
    headline: "Wheel catalog and ordering system for auto dealer",
    description: "Full product catalog with ordering system for a wheel dealer. Clean design, easy browsing, built for repeat customers. MRR revenue share model in discussion.",
    stats: [
      { value: "Full", label: "Catalog" },
      { value: "MRR", label: "Potential" },
      { value: "Custom", label: "Built" },
    ],
    revenue: "$650",
    screenshot: "/screenshots/fw-wheels.png",
  },
  onhizm: {
    name: "Onhizm",
    category: "Fashion",
    headline: "Custom site for a brand worn by celebrities",
    description: "Replaced a basic Shopify setup with a custom-designed site that matches the brand's level. Onhizm has traction with rappers and artists out of the Bay — was at Empire. Their site needed to match that energy.",
    stats: [
      { value: "Empire", label: "Connections" },
      { value: "Custom", label: "Full redesign" },
      { value: "Premium", label: "Brand elevation" },
    ],
    screenshot: "/screenshots/fw-wheels.png",
  },
  cubicship: {
    name: "Cubicship",
    category: "Enterprise",
    headline: "Returns portal and main site for DHL premier partner",
    description: "Two platforms for a DHL premier shipping partner: the main business site with a refund workflow system, and a standalone returns portal. Handles customer refunds, return processing, and tracking.",
    stats: [
      { value: "Refund", label: "Workflow" },
      { value: "Returns", label: "Portal" },
      { value: "2", label: "Platforms" },
    ],
    screenshot: "/screenshots/cubicship.png",
  },
  "robot-producer": {
    name: "Robot Producer",
    category: "B2B Sales",
    headline: "Full B2B sales system for selling robots to businesses",
    description: "Complete sales infrastructure: pitch deck with ROI calculator, product storefront with video demos, and regional network sites for Napa and Suisun areas. Four platforms working together as one sales machine.",
    stats: [
      { value: "Full", label: "Sales kit" },
      { value: "ROI", label: "Calculator" },
      { value: "4", label: "Platforms" },
    ],
  },
  "best-odds": {
    name: "Best Odds",
    category: "Pitch / Presentation",
    headline: "Interactive presentation for casino odds and strategy",
    description: "Data-driven interactive slideshow that breaks down casino odds, house edges, and strategy. Animated transitions, visual data, and a compelling narrative flow. Built to educate and entertain.",
    stats: [
      { value: "Data", label: "Driven" },
      { value: "Visual", label: "Slides" },
      { value: "Animated", label: "Transitions" },
    ],
  },
  "jdlo-the-game": {
    name: "JDLO The Game",
    category: "Video Game",
    headline: "Full RPG video game with 7 chapters and cutscenes",
    description: "Pokemon Platinum-style RPG built as an interactive portfolio. 7 playable chapters, original story, boss battles, minigames, and cinematic cutscenes. Not a demo — a real game people play start to finish.",
    stats: [
      { value: "7", label: "Chapters" },
      { value: "20+", label: "Characters" },
      { value: "Full", label: "Original story" },
    ],
    screenshot: "/screenshots/jdlo-the-game.png",
  },
  "jdlo-wii": {
    name: "JDLO Wii",
    category: "Video Game",
    headline: "Wii Sports-inspired multiplayer web game",
    description: "A Wii Sports-inspired web game with 1v1 multiplayer. Play directly in the browser — no downloads, no installs. Original game mechanics and design.",
    stats: [
      { value: "1v1", label: "Multiplayer" },
      { value: "Web", label: "Based" },
      { value: "Original", label: "Game" },
    ],
  },
  "pomaikai-dashboard": {
    name: "Pomaika\u2018i Dashboard",
    category: "Tool / AI",
    headline: "Internal team ops dashboard tracking everything in real time",
    description: "Custom internal dashboard for Pomaika\u2018i Co that tracks leads, revenue, team performance, and client engagement all in one place. Real-time data, clean interface, replaces spreadsheets and multiple tools.",
    stats: [
      { value: "Real-time", label: "Data" },
      { value: "Team", label: "Tracking" },
      { value: "Revenue", label: "Metrics" },
    ],
    screenshot: "/screenshots/pomaikai-dashboard.png",
  },
  "eagles-automotive": {
    name: "Eagles Automotive",
    category: "Website",
    headline: "Auto dealership site with real inventory and photos",
    description: "Full dealership website with live inventory management, photo galleries for each vehicle, and lead capture forms. Built for a real auto dealer who needed to look professional online.",
    stats: [
      { value: "Live", label: "Inventory" },
      { value: "Photo", label: "Gallery" },
      { value: "Lead", label: "Capture" },
    ],
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

          {/* Screenshot */}
          {project.screenshot && (
            <RevealOnScroll>
              <div className="mt-16 rounded-2xl border border-border overflow-hidden max-w-[900px] shadow-lg">
                <Image
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  width={1200}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </RevealOnScroll>
          )}

          {/* Showcase Video */}
          {project.video && (
            <RevealOnScroll>
              <div className="mt-10 rounded-2xl border border-border overflow-hidden max-w-[900px]">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover"
                />
              </div>
            </RevealOnScroll>
          )}
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
