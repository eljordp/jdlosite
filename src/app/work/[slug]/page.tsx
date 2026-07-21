import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
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
  liveUrl?: string;
  noEmbed?: boolean;
  customSections?: boolean;
  quote?: string;
  quoteAttribution?: string;
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
    liveUrl: "https://quantplay-ten.vercel.app/play",
  },
  joon11ee: {
    name: "JOON11EE",
    category: "Website + Booking System",
    headline: "A multi-market exotic rental platform built around discovery, trust, and qualified demand",
    description: "JOON11EE connects a large vehicle fleet across Miami, Los Angeles and Orange County, and San Francisco to location-aware browsing, detailed vehicle pages, availability requests, analytics, and an operator-facing lead workflow. In Vercel Analytics for Jul 14-21, 2026, the site recorded 275 visitors and 750 page views; 92% of those visitors were on mobile.",
    stats: [
      { value: "275", label: "Visitors / 7 days" },
      { value: "750", label: "Page views / 7 days" },
      { value: "92%", label: "Mobile visitors" },
    ],
    screenshot: "/screenshots/joon11ee.png",
    liveUrl: "https://joon11ee.com",
    noEmbed: true,
  },
  cubicship: {
    name: "CubicShip",
    category: "Website + Customer Operations",
    headline: "One public front door for a distributed shipping and counter-service operation",
    description: "CubicShip turns a wide operating footprint into a navigable customer system: quote intake, service orders, DHL Express locations, shipment tracking, freight help, printing and signage, account onboarding, and status handoffs. The public site represents 15 managed locations and 512 Google reviews; its Vercel Analytics recorded 34 visitors and 67 page views for Jul 14-21, 2026.",
    stats: [
      { value: "15", label: "Managed locations" },
      { value: "512", label: "Google reviews represented" },
      { value: "67", label: "Page views / 7 days" },
    ],
    screenshot: "/screenshots/cubicship.png",
    liveUrl: "https://cubicship.com",
    noEmbed: true,
  },
  "lauren-rees": {
    name: "Lauren Rees / ReesVIP",
    category: "Client Platform + AI Operations",
    headline: "A promoter's guest-list operation turned into an AI concierge, CRM, and reusable platform",
    description: "Lauren Rees is the client. ReesVIP is the customer-facing website and Club Bot is the operating system inside it: event discovery, AI-assisted answers, guest-list intake, confirmations, referral tracking, contact history, and promoter reporting. Velvet explores how that custom system could become a white-label product for other promoters. The relationship and the business problem lead; the product names sit underneath them.",
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
    category: "Business Platform + Brand System",
    headline: "A multi-route business platform that connects positioning, programs, partnerships, and systems proof",
    description: "Pomaika\u2018i is a broader business-platform build, not a one-page portfolio. The public experience now spans Growth, Leadership, Capital, Institute, Collective, and Partnerships, while the systems section explains real production work and preserves visible JDLO AI builder credit. Placeholder proof is intentionally excluded until the client supplies real testimonials, reviews, and social evidence.",
    stats: [
      { value: "6", label: "Public business routes" },
      { value: "3", label: "Production system stories" },
      { value: "JDLO AI", label: "Visible builder credit" },
    ],
    screenshot: "/screenshots/pomaikai.png",
    liveUrl: "https://pomaikai-co.vercel.app",
    noEmbed: true,
  },
  "dhl-translator": {
    name: "Mo / DHL Systems",
    category: "Enterprise + Operations",
    headline: "One operator relationship became an ecosystem of customer, training, logistics, and decision-support systems",
    description: "The translator was one entry point. Work for Mo has expanded into a private operations hub, customer onboarding and workflow materials, freight tools, public briefing pages, and decision support across Cubicship, MEA, and Travelyt. The proof is the range of systems built around how his businesses actually operate, not a claim that DHL corporate hired JDLO directly.",
    stats: [
      { value: "6+", label: "Connected systems" },
      { value: "100+", label: "Store-network context" },
      { value: "Ongoing", label: "Working relationship" },
    ],
    screenshot: "/screenshots/dhl-translator.png",
    liveUrl: "https://cubicship-translator.vercel.app",
    noEmbed: true,
  },
  "vacaville-appliance": {
    name: "Vacaville Appliance",
    category: "Website + Operations",
    headline: "A local service business becoming a connected revenue system",
    description: "Since Jordan joined the business around August 2025, the engagement has centered on the website and AI receptionist, then expanded into lead capture, service information, customer intake, and the systems around daily operations. Current Jobber figures show the scale the ecosystem supports; they are not claimed as revenue created by JDLO alone.",
    stats: [
      { value: "$144.3K", label: "2026 invoiced through Jul 19" },
      { value: "57", label: "New one-off jobs in June" },
      { value: "17", label: "New leads in June" },
    ],
    revenue: "$1,300",
    screenshot: "/screenshots/vacaville-appliance.png",
    liveUrl: "https://vacavilleappliance.vercel.app",
  },
  "pearls-farm": {
    name: "Pearls Farm",
    category: "Web + Social + Winery Infrastructure",
    headline: "Building the digital infrastructure for a vineyard-services company and its wine brand",
    description: "Pearls Farm hired Jordan as its W-2 Social Media and Marketing Coordinator. The role covers two websites—Pearls Farm and Prosperando—plus multi-channel content planning, field photo and video, machinery-rental promotion, direct-message handling, and monthly reporting. The work is a connected winery and agricultural marketing operation, not a standalone AI experiment. Access, analytics, lead routing, and proof are being established before paid growth.",
    stats: [
      { value: "2", label: "Websites in scope" },
      { value: "4+", label: "Publishing channels" },
      { value: "W-2", label: "Embedded company role" },
    ],
    customSections: true,
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
    liveUrl: "https://tssprint.vercel.app",
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
    description: "Replaced a basic Shopify setup with a custom-designed site that matches the brand's level. Onhizm has traction with rappers and artists out of the Bay, was at Empire. Their site needed to match that energy.",
    stats: [
      { value: "Empire", label: "Connections" },
      { value: "Custom", label: "Full redesign" },
      { value: "Premium", label: "Brand elevation" },
    ],
    liveUrl: "https://onhizm.com",
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
  "jdlo-wii": {
    name: "JDLO Wii",
    category: "Video Game",
    headline: "Wii Sports-inspired multiplayer web game",
    description: "A Wii Sports-inspired web game with 1v1 multiplayer. Play directly in the browser. No downloads, no installs. Original game mechanics and design.",
    stats: [
      { value: "1v1", label: "Multiplayer" },
      { value: "Web", label: "Based" },
      { value: "Original", label: "Game" },
    ],
    liveUrl: "https://jdlo-wii.vercel.app",
  },
  "manza-visuals": {
    name: "Manza Visuals",
    category: "Website",
    headline: "Portfolio site for a Bay Area videographer and visual artist",
    description: "Custom portfolio website for Manza Visuals, a videographer and visual artist out of the Bay Area. Showcases video work, photography, and client projects with a clean, cinematic design that lets the visuals speak for themselves.",
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
    description: "Custom online store for Lonely Love, a clothing brand building a community. Clean design, full product catalog, and a shopping experience that matches the brand's aesthetic and energy.",
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
    description: "Website for CWBY Studios, a creative studio and agency operating out of Hollywood. Showcases their creative work, services, and team with a design that reflects their high-end production quality.",
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
  "hoa-dispute": {
    name: "HOA Dispute Bot",
    category: "AI / Tool",
    headline: "AI desktop app that coaches homeowners through HOA disputes in real time",
    description: "An Electron app built for hoadispute.com that runs alongside you during the dispute process, similar to how Cluely works during interviews. The app reads context from the screen, pulls relevant HOA laws and precedents, and feeds you the right language to use in real time. Homeowners go in prepared instead of getting steamrolled by property managers.",
    stats: [
      { value: "Electron", label: "Desktop app" },
      { value: "AI overlay", label: "Real-time" },
      { value: "On-screen", label: "Guidance" },
    ],
    liveUrl: "https://hoadispute.com",
  },
  "olylife-ohana": {
    name: "OlyLife Ohana",
    category: "Website + E-commerce",
    headline: "Health & wellness brand site for PEMF and Terahertz therapy devices",
    description: "Custom website for OlyLife Ohana, a health and wellness brand selling PEMF and Terahertz therapy devices trusted by 50,000+ people worldwide. Product showcase, how-it-works flow, customer stories, and a full e-commerce setup built to convert.",
    stats: [
      { value: "50K+", label: "Customers worldwide" },
      { value: "E-commerce", label: "Product store" },
      { value: "Custom", label: "Design" },
    ],
    liveUrl: "https://www.olylifeohana.com",
  },
  "muddled-by-mia": {
    name: "Muddled by Mia",
    category: "Website",
    headline: "Website for a cocktail and mixology brand",
    description: "Custom website for Muddled by Mia, a cocktail and mixology brand. Clean, appetizing design that showcases recipes, services, and brand identity.",
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

const noIndexProjects = new Set(["quanta", "best-odds", "jdlo-wii"]);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found | JDLO" };

  const description = `${project.headline}. ${project.description}`.slice(0, 158);

  return {
    title: `${project.name} Case Study | JDLO`,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.name} Case Study | JDLO`,
      description,
      url: `https://jdlo.site/work/${slug}`,
      images: project.screenshot ? [{ url: project.screenshot, alt: `${project.name} system` }] : undefined,
    },
    robots: noIndexProjects.has(slug) ? { index: false, follow: true } : undefined,
  };
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

          {project.quote && (
            <RevealOnScroll>
              <figure className="max-w-[820px] mt-14 border-l-2 border-accent pl-6 md:pl-9 py-2">
                <blockquote className="font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.12] tracking-[-0.02em]">
                  “{project.quote}”
                </blockquote>
                <figcaption className="text-text-muted text-[11px] font-mono mt-6 uppercase tracking-[0.12em]">
                  {project.quoteAttribution}
                </figcaption>
              </figure>
            </RevealOnScroll>
          )}

          {/* Live Preview — iframe */}
          {project.liveUrl && !project.noEmbed && (
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

          {/* Live Preview — screenshot (site blocks iframes) */}
          {project.liveUrl && project.noEmbed && project.screenshot && (
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
                <div className="rounded-2xl border border-border overflow-hidden max-w-[960px] shadow-lg relative group">
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} preview`}
                    width={1200}
                    height={750}
                    className="w-full h-auto"
                  />
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bg text-text text-[13px] font-mono tracking-wider px-5 py-2.5 rounded-full border border-border">
                      Visit Site &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Screenshot only (no live URL) */}
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

      {/* Mo / DHL relationship ecosystem */}
      {slug === "dhl-translator" && (
        <>
          <section className="section-gap border-t border-border bg-surface">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <RevealOnScroll>
                <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                  The Relationship
                </p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.8rem)] tracking-[-0.03em] leading-[0.95] mb-6 max-w-[820px]">
                  Not one tool. A growing operating ecosystem.
                </h2>
                <p className="text-text-secondary text-[17px] leading-[1.8] max-w-[760px]">
                  The first visible build was a translator. The relationship kept expanding because each shipped tool exposed the next bottleneck: staff training, customer communication, internal coordination, freight intake, and decision support across several businesses.
                </p>
              </RevealOnScroll>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-14">
                {[
                  {
                    number: "01",
                    title: "DHL Store Translator",
                    body: "A customer-facing translation tool built around real ServicePoint conversations so language does not stop a shipment or consume the counter team.",
                  },
                  {
                    number: "02",
                    title: "CRA Training Simulator",
                    body: "A structured competency and onboarding experience that turns operating knowledge into repeatable staff training instead of verbal handoffs.",
                  },
                  {
                    number: "03",
                    title: "Cubicship Customer Systems",
                    body: "Public pages, returns and shipping workflows, onboarding materials, and customer-facing tools connected to the wider store operation.",
                  },
                  {
                    number: "04",
                    title: "Private Operations Hub",
                    body: "A living command center for active initiatives, meeting context, project memory, decisions, and the next useful action across Mo’s operating lanes.",
                  },
                  {
                    number: "05",
                    title: "MEA + Freight Workflows",
                    body: "Intake, quote-support, service explanations, and carrier-partner coordination materials designed to reduce back-and-forth without overstating the company’s role.",
                  },
                  {
                    number: "06",
                    title: "Travelyt Decision Support",
                    body: "Opportunity briefs, custody and airline-acceptance research, public explanations, and decision tools used to move a complex travel concept toward viable partnerships.",
                  },
                ].map((system, index) => (
                  <RevealOnScroll key={system.number} delay={index % 3}>
                    <article className="h-full rounded-2xl border border-border bg-bg p-7 md:p-8">
                      <p className="text-accent text-[10px] tracking-[0.35em] uppercase font-mono mb-7">
                        System {system.number}
                      </p>
                      <h3 className="font-display text-[1.7rem] tracking-[-0.025em] leading-[1.05] mb-4">
                        {system.title}
                      </h3>
                      <p className="text-text-secondary text-[14px] leading-[1.75]">
                        {system.body}
                      </p>
                    </article>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>

          <section className="section-gap border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <RevealOnScroll>
                <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                  What This Proves
                </p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.8rem)] tracking-[-0.03em] leading-[0.95] mb-7 max-w-[760px]">
                  The value is in seeing the next system before it becomes another disconnected problem.
                </h2>
                <p className="text-text-secondary text-[17px] leading-[1.8] max-w-[760px]">
                  This is not presented as a direct engagement with DHL corporate. It is a long-running relationship with an operator working across DHL ServicePoint, Cubicship, MEA, and Travelyt contexts. The result is stronger proof than a single demo: JDLO can stay inside a business, learn how it moves, and keep building the connected layer around it.
                </p>
              </RevealOnScroll>
            </div>
          </section>
        </>
      )}

      {/* Lauren Rees / ReesVIP custom sections */}
      {slug === "lauren-rees" && (
        <>
          {/* The Product - ReesVIP */}
          <section className="section-gap border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <RevealOnScroll>
                <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                  The Client System
                </p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-4">
                  ReesVIP
                </h2>
                <p className="text-text-secondary text-[17px] leading-[1.8] max-w-[680px] mb-4">
                  Lauren&apos;s guests visit reesvip.com, browse upcoming events at Tao Group venues, and get on the guest list in seconds. The AI concierge answers repeat questions about dress codes, venues, and availability, then routes the guest into a structured signup. The case is Lauren&apos;s operating transformation; ReesVIP and Club Bot are the systems built for it.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <div className="max-w-[640px] mt-8">
                  {["AI chat concierge that knows every venue, event, and policy", "Automated guest list signup: name, party size, done", "Event calendar with venue filtering and date selection", "Referral tracking, see who's bringing the most people", "SMS/email confirmations sent automatically", "Promoter dashboard with real-time guest counts"].map((item, i) => (
                    <div key={i} className="py-3 border-b border-border flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                      <span className="text-text-secondary text-[15px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </section>

          {/* The SaaS - Velvet */}
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
                  Velvet is the product direction derived from Lauren&apos;s custom system: a promoter could deploy their own branding, venues, workflows, and AI concierge from a shared platform. It is presented as a product path, not as a separate client or a substitute for Lauren&apos;s case study.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <div className="max-w-[640px] mt-8 mb-12">
                  {["White-label: each promoter gets their own branded site", "Multi-tenant architecture: one platform, unlimited promoters", "AI concierge customized per promoter's venues and style", "CRM with contact management and guest history", "Revenue tracking and referral analytics", "Self-serve onboarding for new promoters", "Subscription pricing model"].map((item, i) => (
                    <div key={i} className="py-3 border-b border-border flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                      <span className="text-text-secondary text-[15px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={2}>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-text-muted text-[11px] font-mono tracking-[0.3em] uppercase">Velvet / Live Preview</p>
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
                    Lauren Rees promotes at Tao Group venues in Vegas: Hakkasan, OMNIA, TAO, Marquee, Jewel. She moves 400-500+ people per week through guest lists. Her workflow before Club Bot: manually text every person, manually save contacts to her phone one by one, manually input info into Tao&apos;s system. No CRM. Just her phone contacts and the Notes app.
                  </p>
                  <p className="text-text-secondary text-[17px] leading-[1.8]">
                    Club Bot replaced all of that. AI concierge handles the conversations, guest list signups are automatic, follow-ups go out on their own, referral tracking runs in the background. One system replaced an entire manual operation and freed up 30+ hours per week.
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

      {/* Pearls Farm embedded-role scope */}
      {slug === "pearls-farm" && (
        <>
          <section className="section-gap border-t border-border bg-surface">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <RevealOnScroll>
                <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">The Role</p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.8rem)] tracking-[-0.03em] leading-[0.95] mb-6 max-w-[860px]">
                  Embedded across the company, the field, and the customer-facing layer.
                </h2>
                <p className="text-text-secondary text-[17px] leading-[1.8] max-w-[780px]">
                  Jordan reports to the owner and independently coordinates the monthly content calendar, publishing cadence, field capture, website work, direct messages, and performance reporting. That makes the engagement stronger than a site handoff: the digital system is being built from inside the operation it has to represent.
                </p>
              </RevealOnScroll>
              <div className="grid md:grid-cols-2 gap-4 mt-14">
                {[
                  { number: "01", title: "Pearls Farm website", body: "Take ownership of the company website, domain, forms, service information, conversion paths, Search Console, analytics, and the proof vineyard owners need before contacting the team.", href: "https://pearlsfarminc.com", link: "Visit Pearls Farm" },
                  { number: "02", title: "Prosperando wine brand", body: "Build the reference website and digital direction for Prosperando, connecting the Flores family story, Napa wine positioning, product presentation, and the path toward a compliant production experience.", href: "https://prosperando-omega.vercel.app", link: "View the reference site" },
                  { number: "03", title: "Social operating system", body: "Plan and publish across Instagram, Facebook, LinkedIn, and YouTube; capture field photo and video; test hooks and formats; manage responses; and turn seasonal farm work into an evidence-backed content engine.", href: "https://www.instagram.com/pearlsfarminc/", link: "View Instagram" },
                  { number: "04", title: "Measurement + lead routing", body: "Reconcile contact data, separate vineyard-owner inquiries from job applicants, establish conversion tracking, and report reach, engagement, leads, and growth before the company spends on paid distribution.", href: "https://pearlsfarminc.com/contact", link: "View the public contact path" },
                ].map((system, index) => (
                  <RevealOnScroll key={system.number} delay={index % 2}>
                    <article className="h-full rounded-2xl border border-border bg-bg p-7 md:p-8 flex flex-col">
                      <p className="text-accent text-[10px] tracking-[0.35em] uppercase font-mono mb-7">Workstream {system.number}</p>
                      <h3 className="font-display text-[1.7rem] tracking-[-0.025em] leading-[1.05] mb-4">{system.title}</h3>
                      <p className="text-text-secondary text-[14px] leading-[1.75] flex-1">{system.body}</p>
                      <a href={system.href} target="_blank" rel="noopener noreferrer" className="text-[12px] font-mono mt-7 hover:text-accent transition-colors">{system.link} &rarr;</a>
                    </article>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>

          <section className="section-gap border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <RevealOnScroll>
                <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">What This Proves</p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.8rem)] tracking-[-0.03em] leading-[0.95] mb-7 max-w-[820px]">
                  A digital presence is infrastructure when it connects ownership, publishing, communication, and measurement.
                </h2>
                <p className="text-text-secondary text-[17px] leading-[1.8] max-w-[780px]">
                  The Pearls Farm work spans a vineyard-services company and a Napa wine brand. Current proof is the role, the systems, and the live surfaces; traffic, lead, and revenue outcomes will be added only after the new measurement layer has enough data.
                </p>
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
