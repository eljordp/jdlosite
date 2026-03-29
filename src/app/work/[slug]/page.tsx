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
  liveUrl?: string;
  customSections?: boolean;
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
    liveUrl: "https://quantplay-ten.vercel.app/play",
  },
  "club-bot": {
    name: "Club Bot / Velvet",
    category: "AI System / SaaS",
    headline: "AI-powered nightclub promoter platform — the product and the SaaS behind it",
    description: "Club Bot started as a custom build for Lauren Rees, a Vegas nightclub promoter moving 500+ people per week across Tao Group venues — Hakkasan, OMNIA, TAO, Marquee, Jewel. She was manually texting every single person, saving contacts one by one to her phone, and inputting info into Tao's system by hand. Club Bot replaced all of that: AI concierge chat handles bookings, guest list signups happen automatically, follow-ups go out on their own, and referral tracking runs in the background. One system replaced an entire manual operation.",
    stats: [
      { value: "500+", label: "Guests/week" },
      { value: "30hrs/wk", label: "Time saved" },
      { value: "SaaS", label: "Velvet platform" },
    ],
    screenshot: "/screenshots/club-bot.png",
    liveUrl: "https://www.reesvip.com",
    customSections: true,
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
    liveUrl: "https://poika.vercel.app",
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
    liveUrl: "https://dhltranslator.vercel.app",
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
    liveUrl: "https://dhl.training.cubic.guru",
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
    liveUrl: "https://west-coast-terpz.vercel.app",
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
    liveUrl: "https://vacavilleappliance.vercel.app",
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
    liveUrl: "https://the-sticker-smith.vercel.app",
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
    liveUrl: "https://fw-wheels.vercel.app",
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
    liveUrl: "https://onhizm.com",
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
    liveUrl: "https://cubicship.vercel.app",
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
    liveUrl: "https://robotstore.vercel.app",
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
    liveUrl: "https://bestoddscorp.com",
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
    liveUrl: "https://jdlo-game.vercel.app",
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
    liveUrl: "https://jdlo-wii.vercel.app",
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
    liveUrl: "https://pomaikai-dashboard.vercel.app",
  },
  "manza-visuals": {
    name: "Manza Visuals",
    category: "Website",
    headline: "Portfolio site for a Bay Area videographer and visual artist",
    description: "Custom portfolio website for Manza Visuals — a videographer and visual artist out of the Bay Area. Showcases video work, photography, and client projects with a clean, cinematic design that lets the visuals speak for themselves.",
    stats: [
      { value: "Custom", label: "Design" },
      { value: "Video", label: "Portfolio" },
      { value: "Lead", label: "Capture" },
    ],
    liveUrl: "https://manzavisuals.com",
  },
  "lonely-love": {
    name: "Lonely Love",
    category: "Fashion",
    headline: "E-commerce site for a clothing brand with a following",
    description: "Custom online store for Lonely Love — a clothing brand building a community. Clean design, full product catalog, and a shopping experience that matches the brand's aesthetic and energy.",
    stats: [
      { value: "Custom", label: "E-commerce" },
      { value: "Brand", label: "Identity" },
      { value: "Full", label: "Store" },
    ],
    liveUrl: "https://www.shoplonelylove.com",
  },
  "cwby-studios": {
    name: "CWBY Studios",
    category: "Agency",
    headline: "Creative studio and agency site based in Hollywood",
    description: "Website for CWBY Studios — a creative studio and agency operating out of Hollywood. Showcases their creative work, services, and team with a design that reflects their high-end production quality.",
    stats: [
      { value: "Hollywood", label: "Based" },
      { value: "Creative", label: "Agency" },
      { value: "Premium", label: "Design" },
    ],
    liveUrl: "https://www.cwbystudio.com",
  },
  "jdlo-crm": {
    name: "JDLO CRM",
    category: "SaaS / Tool",
    headline: "Custom CRM for managing clients, leads, and pipeline",
    description: "Built a full CRM system from scratch to manage my own client pipeline. Track leads, deals, follow-ups, and revenue all in one place. Uses it daily to run my business.",
    stats: [
      { value: "Full", label: "CRM" },
      { value: "Pipeline", label: "Management" },
      { value: "Custom", label: "Built" },
    ],
    liveUrl: "https://jdlo-crm.vercel.app",
  },
  "joon11ee": {
    name: "Joon11ee",
    category: "Casino / 3D",
    headline: "3D casino experience with voice chat and real-time multiplayer",
    description: "The most complex project in the portfolio. A full 3D casino environment with WebRTC voice chat, real-time multiplayer, player avatars, and immersive gameplay. Built entirely from scratch.",
    stats: [
      { value: "3D", label: "Environment" },
      { value: "Voice", label: "Chat" },
      { value: "Real-time", label: "Multiplayer" },
    ],
    liveUrl: "https://www.joon11ee.com",
  },
  "muddled-by-mia": {
    name: "Muddled by Mia",
    category: "Website",
    headline: "Website for a cocktail and mixology brand",
    description: "Custom website for Muddled by Mia — a cocktail and mixology brand. Clean, appetizing design that showcases recipes, services, and brand identity.",
    stats: [
      { value: "Custom", label: "Design" },
      { value: "Brand", label: "Identity" },
      { value: "Full", label: "Website" },
    ],
    liveUrl: "https://muddledbymia.com",
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

          {/* Live Preview */}
          {project.liveUrl && (
            <RevealOnScroll>
              <div className="mt-16">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-text-muted text-[11px] font-mono tracking-[0.3em] uppercase">Live Preview</p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted text-[12px] font-mono hover:text-text transition-colors"
                  >
                    Open full site &rarr;
                  </a>
                </div>
                <div className="rounded-2xl border border-border overflow-hidden max-w-[960px] shadow-lg bg-surface">
                  <iframe
                    src={project.liveUrl}
                    title={`${project.name} live preview`}
                    className="w-full aspect-[16/10] border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  />
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Screenshot fallback (no live URL) */}
          {!project.liveUrl && project.screenshot && (
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
        </div>
      </section>

      {/* Club Bot / Velvet custom sections */}
      {slug === "club-bot" && (
        <>
          {/* The Product — ReesVIP */}
          <section className="section-gap border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <RevealOnScroll>
                <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                  The Product
                </p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-4">
                  ReesVIP
                </h2>
                <p className="text-text-secondary text-[17px] leading-[1.8] max-w-[680px] mb-4">
                  The client-facing product. Lauren&apos;s guests visit reesvip.com, browse upcoming events at every Tao Group venue, and get on the guest list in seconds. The AI concierge answers questions about dress codes, venues, and availability — then handles the signup automatically. No more Lauren texting 500 people one by one.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <div className="max-w-[640px] mt-8">
                  {["AI chat concierge that knows every venue, event, and policy", "Automated guest list signup — name, party size, done", "Event calendar with venue filtering and date selection", "Referral tracking — see who's bringing the most people", "SMS/email confirmations sent automatically", "Promoter dashboard with real-time guest counts"].map((item, i) => (
                    <div key={i} className="py-3 border-b border-border flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                      <span className="text-text-secondary text-[15px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </section>

          {/* The SaaS — Velvet */}
          <section className="section-gap border-t border-border bg-surface">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <RevealOnScroll>
                <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                  The SaaS
                </p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-4">
                  Velvet
                </h2>
                <p className="text-text-secondary text-[17px] leading-[1.8] max-w-[680px] mb-4">
                  Velvet is the white-label platform behind Club Bot. Any nightclub promoter can deploy their own version — their own branding, their own venues, their own AI concierge. One codebase, infinite deployments. ReesVIP was the first. Velvet is the business.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <div className="max-w-[640px] mt-8 mb-12">
                  {["White-label — each promoter gets their own branded site", "Multi-tenant architecture — one platform, unlimited promoters", "AI concierge customized per promoter's venues and style", "CRM with contact management and guest history", "Revenue tracking and referral analytics", "Self-serve onboarding for new promoters", "Subscription pricing model"].map((item, i) => (
                    <div key={i} className="py-3 border-b border-border flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                      <span className="text-text-secondary text-[15px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={2}>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-text-muted text-[11px] font-mono tracking-[0.3em] uppercase">Velvet — Live Preview</p>
                  <a href="https://velvet-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-text-muted text-[12px] font-mono hover:text-text transition-colors">
                    Open full site &rarr;
                  </a>
                </div>
                <div className="rounded-2xl border border-border overflow-hidden max-w-[960px] shadow-lg">
                  <iframe
                    src="https://velvet-ai.vercel.app"
                    title="Velvet SaaS platform"
                    className="w-full aspect-[16/10] border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </section>

          {/* The Story */}
          <section className="section-gap border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <RevealOnScroll>
                <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                  The Story
                </p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-8">
                  One client. One product. One SaaS.
                </h2>
                <div className="max-w-[680px] space-y-6">
                  <p className="text-text-secondary text-[17px] leading-[1.8]">
                    Lauren Rees promotes at Tao Group venues in Vegas — Hakkasan, OMNIA, TAO, Marquee, Jewel. She moves 400-500+ people per week through guest lists. Her workflow before Club Bot: manually text every person, manually save contacts to her phone one by one, manually input info into Tao&apos;s system. No CRM. Just her phone contacts and the Notes app.
                  </p>
                  <p className="text-text-secondary text-[17px] leading-[1.8]">
                    Club Bot replaced all of that. AI concierge handles the conversations, guest list signups are automatic, follow-ups go out on their own, referral tracking runs in the background. One system replaced an entire manual operation — and freed up 30+ hours per week.
                  </p>
                  <p className="text-text-secondary text-[17px] leading-[1.8]">
                    Then the question became: if it works for Lauren, why not every promoter? That&apos;s Velvet. Same system, white-labeled, multi-tenant. Any promoter can spin up their own Club Bot in minutes. The product became the SaaS.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </section>
        </>
      )}

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
