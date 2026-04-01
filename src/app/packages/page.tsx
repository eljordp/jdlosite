"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getVisitor, saveVisitor } from "@/lib/visitor";

const niches = [
  "Restaurant / Food",
  "E-Commerce",
  "Real Estate",
  "Nightlife / Events",
  "Cannabis / Dispensary",
  "Salon / Barber",
  "Beauty / Lash & Nails",
  "Gym / Fitness",
  "Agency / Consulting",
  "Service Business",
  "Other",
];

interface PackageData {
  name: string;
  price: string;
  tagline: string;
  desc: string;
  includes: string[];
  popular?: boolean;
  inquire?: boolean;
}

function getPackagesForNiche(niche: string): PackageData[] {
  switch (niche) {
    case "Restaurant / Food":
      return [
        {
          name: "Get Online",
          price: "$1,500",
          tagline: "Look real. Get found.",
          desc: "Custom website with your menu, hours, location, and a way to order or reserve. Built to show up when people search for you.",
          includes: ["Custom multi-page website", "Menu + hours integration", "Google Business setup", "Contact / reservation form", "Mobile responsive", "SEO foundations"],
        },
        {
          name: "Fill the Room",
          price: "$3,500",
          tagline: "Reservations and reviews on autopilot.",
          popular: true,
          desc: "Website + online ordering or reservation system + automated review requests after every visit. The combo that drives repeat business without lifting a finger.",
          includes: ["Everything in Get Online", "Online ordering or reservation system", "Automated review follow-up SMS/email", "Email capture + loyalty sequence", "Analytics dashboard", "30 days support"],
        },
        {
          name: "Full Operation",
          price: "$6,500",
          tagline: "Your restaurant runs itself online.",
          desc: "Online ordering, reservations, waitlist management, AI phone receptionist, loyalty program, and a staff ops dashboard. Built this exact system for real restaurants.",
          includes: ["Everything in Fill the Room", "AI phone receptionist (never miss a call)", "Waitlist + table management system", "SMS loyalty program", "Staff scheduling dashboard", "Payment plans available"],
          inquire: true,
        },
      ];

    case "Nightlife / Events":
      return [
        {
          name: "Presence",
          price: "$1,500",
          tagline: "Look like the move.",
          desc: "A site that makes your venue or events look elite. Event listings, ticket links, table inquiry form. Built for nightlife. Not some generic template.",
          includes: ["Custom website", "Event listings page", "Table / bottle inquiry form", "Social media integration", "Mobile responsive", "SEO + Google setup"],
        },
        {
          name: "Club Bot",
          price: "$3,500",
          tagline: "Automate your guest list.",
          popular: true,
          desc: "The system I built for Vegas promoters. Handles 500+ guest list RSVPs/week automatically via DM. No more spreadsheets, no more chasing people. Built and proven.",
          includes: ["Custom website", "Automated guest list via Instagram / SMS", "RSVP confirmation + reminder flows", "Promoter tracking dashboard", "VIP table booking system", "Ticket sales integration", "30 days support"],
        },
        {
          name: "Full Ops",
          price: "$6,500",
          tagline: "Run the whole operation.",
          desc: "Club Bot + ticketing + payout automation + promoter management dashboard. Everything a venue or promoter needs to run a professional operation at scale.",
          includes: ["Everything in Club Bot", "Multi-promoter dashboard", "Automated payout tracking", "Event analytics + check-in system", "Email / SMS marketing flows", "Admin panel", "Payment plans available"],
          inquire: true,
        },
      ];

    case "Cannabis / Dispensary":
      return [
        {
          name: "Compliant & Online",
          price: "$2,000",
          tagline: "Age-gated, legal, professional.",
          desc: "A dispensary website built right. Age verification, compliance-ready design, menu integration, and local SEO so people find you over the competition.",
          includes: ["Age-gated custom website", "Menu integration (Jane, Dutchie, or custom)", "Compliance-ready design", "Google Business + local SEO", "Contact + order form", "Mobile responsive"],
        },
        {
          name: "Loyalty Machine",
          price: "$4,000",
          tagline: "Turn one-time buyers into regulars.",
          popular: true,
          desc: "Website + SMS loyalty program + reorder campaigns. Dispensaries that do this see 40-60% repeat purchase rates. I've built this system. It works.",
          includes: ["Everything in Compliant & Online", "SMS loyalty + points system", "Automated reorder campaigns", "New product drop announcements", "Email capture + nurture sequence", "Analytics dashboard", "30 days support"],
        },
        {
          name: "Full Dispensary OS",
          price: "$7,500",
          tagline: "Your dispensary runs itself.",
          desc: "Loyalty, e-commerce, inventory alerts, staff scheduling, compliance tracking, and a full admin dashboard. One system for the whole operation.",
          includes: ["Everything in Loyalty Machine", "Online pre-order system", "Inventory + restock alerts", "Staff scheduling tool", "Compliance tracking dashboard", "Admin panel", "Payment plans available"],
          inquire: true,
        },
      ];

    case "E-Commerce":
      return [
        {
          name: "Launch Store",
          price: "$1,500",
          tagline: "Start selling this week.",
          desc: "Custom branded store with your products, Stripe checkout, and shipping setup. No templates. Built around your brand. Most stores go live in under a week.",
          includes: ["Custom store design", "Up to 30 products", "Stripe / payment processing", "Shipping setup", "Mobile responsive", "SEO foundations"],
        },
        {
          name: "Growth Store",
          price: "$3,500",
          tagline: "Built to scale.",
          popular: true,
          desc: "Full e-commerce build with abandoned cart recovery, upsells, discount system, and customer accounts. This is the store that actually makes money. Not just looks good.",
          includes: ["Everything in Launch Store", "Unlimited products", "Abandoned cart recovery", "Upsell + cross-sell flows", "Customer accounts + order history", "Discount / promo system", "Analytics dashboard", "30 days support"],
        },
        {
          name: "Brand Machine",
          price: "$6,000",
          tagline: "Store + marketing on autopilot.",
          desc: "Full store + email marketing sequences + influencer outreach automation + drop launch funnels. The setup that turns a store into a real brand.",
          includes: ["Everything in Growth Store", "Drop launch waitlist funnel", "Post-purchase email sequences", "Review + referral automation", "Influencer outreach system", "AI product descriptions at scale", "Payment plans available"],
          inquire: true,
        },
      ];

    case "Real Estate":
      return [
        {
          name: "Agent Site",
          price: "$1,500",
          tagline: "Look like a top producer.",
          desc: "A professional site that makes you look like you've been in the game for 20 years. Listing pages, bio, testimonials, lead capture. Show up when people search your area.",
          includes: ["Custom agent website", "Listing showcase pages", "Lead capture forms", "Testimonials section", "Google Business + local SEO", "Mobile responsive"],
        },
        {
          name: "Lead Machine",
          price: "$4,500",
          tagline: "Never lose a lead again.",
          popular: true,
          desc: "Website + CRM + instant lead follow-up automation. 78% of deals go to the first agent who responds. This system responds in under 5 minutes, every time.",
          includes: ["Everything in Agent Site", "CRM + lead pipeline", "Instant lead follow-up (< 5 min)", "Automated nurture sequences", "Showing scheduler", "AI-generated listing descriptions", "Analytics dashboard", "30 days support"],
        },
        {
          name: "Full Brokerage OS",
          price: "$8,500",
          tagline: "Run a team like a machine.",
          desc: "Lead machine + AI listing tools + team pipeline + client portal. For brokers and team leads who want the whole operation running without micromanaging.",
          includes: ["Everything in Lead Machine", "Team pipeline + lead routing", "Client portal + document sharing", "Market report automation", "AI listing description generator", "Admin dashboard", "Payment plans available"],
          inquire: true,
        },
      ];

    case "Salon / Barber":
      return [
        {
          name: "Book Online",
          price: "$997",
          tagline: "Stop losing clients to phone tag.",
          desc: "Clean website with online booking so clients can schedule 24/7 without calling. Calendar syncs, confirmations sent automatically. Most shops recoup this in a month.",
          includes: ["Custom website", "Online booking system", "Calendar sync", "Automated confirmations + reminders", "Google Business setup", "Mobile responsive"],
        },
        {
          name: "Full Calendar",
          price: "$2,500",
          tagline: "Stay booked solid.",
          popular: true,
          desc: "Booking + automated review requests after every appointment + rebooking reminders. The shops doing this are always full. It's not luck, it's the system.",
          includes: ["Everything in Book Online", "Automated review requests (SMS)", "Rebooking reminder sequences", "Waitlist management", "Email capture + loyalty", "SEO + analytics", "30 days support"],
        },
        {
          name: "Grow the Brand",
          price: "$4,500",
          tagline: "Multi-stylist. Multi-location ready.",
          desc: "Full booking system for multiple stylists + AI receptionist for calls + referral program. Scale past one chair without losing quality or clients.",
          includes: ["Everything in Full Calendar", "Multi-stylist booking management", "AI phone receptionist", "Referral program automation", "Staff performance dashboard", "Payment plans available"],
          inquire: true,
        },
      ];

    case "Beauty / Lash & Nails":
      return [
        {
          name: "Book Me",
          price: "$897",
          tagline: "Clients book you 24/7. No more DM tag.",
          desc: "A clean website with online booking so clients can see your availability and book anytime without messaging you back and forth. Automated confirmations and reminders so nobody no-shows. You wake up to a full calendar.",
          includes: ["Custom website with your portfolio", "Online booking system", "Automated confirmation texts", "24hr reminder before appointment", "Google Business setup", "Mobile responsive", "Link-in-bio ready"],
        },
        {
          name: "Stay Booked",
          price: "$2,200",
          tagline: "ManyChat + booking + rebooking on autopilot.",
          popular: true,
          desc: "Website + ManyChat automation for Instagram DMs. When someone comments or DMs, they get auto-replied with your booking link, prices, and availability. Plus automatic rebooking reminders so clients come back every 2-3 weeks without you chasing them.",
          includes: ["Everything in Book Me", "ManyChat Instagram automation", "Auto-reply with booking link + prices", "Comment-to-DM funnels", "Rebooking reminder sequences (SMS)", "Review request after every appointment", "Deposit collection upfront", "30 days support"],
        },
        {
          name: "Full Beauty OS",
          price: "$4,000",
          tagline: "Run your whole business from your phone.",
          desc: "Booking + ManyChat + waitlist + referral program + client gallery. For artists scaling past walk-ins who want a real business, not just a chair. Clients refer friends automatically, your waitlist fills itself, and you never chase a payment again.",
          includes: ["Everything in Stay Booked", "Waitlist management system", "Referral program (clients get credit)", "Client gallery / portfolio page", "Gift card + package deals system", "No-show protection (deposits + policy)", "Payment plans available"],
          inquire: true,
        },
      ];

    case "Gym / Fitness":
      return [
        {
          name: "Get Found",
          price: "$1,200",
          tagline: "Show up when people are looking.",
          desc: "Custom website with class schedule, pricing, and a free trial signup form. SEO-optimized so you show up when people search for gyms in your area.",
          includes: ["Custom website", "Class schedule + pricing page", "Free trial / lead capture form", "Google Business + local SEO", "Mobile responsive", "Social media integration"],
        },
        {
          name: "Fill the Floor",
          price: "$3,000",
          tagline: "Turn leads into members automatically.",
          popular: true,
          desc: "Website + trial booking funnel + automated onboarding + churn prevention. Gyms doing this keep members 2x longer on average. I'll show you exactly how.",
          includes: ["Everything in Get Found", "Trial booking funnel", "Automated member onboarding", "Class reminder + no-show follow-up", "Churn prevention sequences", "Analytics dashboard", "30 days support"],
        },
        {
          name: "Full Gym OS",
          price: "$5,500",
          tagline: "Run the whole operation.",
          desc: "Booking + check-in system + member portal + referral program + staff scheduling. One platform that handles everything from front desk to retention.",
          includes: ["Everything in Fill the Floor", "Digital check-in system", "Member portal + progress tracking", "Referral program automation", "Staff scheduling tool", "Admin dashboard", "Payment plans available"],
          inquire: true,
        },
      ];

    case "Agency / Consulting":
      return [
        {
          name: "Presence",
          price: "$2,000",
          tagline: "Look like the real deal.",
          desc: "A website that positions you as a premium agency. Case studies, service pages, testimonials, and a clear path to getting on the phone with you.",
          includes: ["Custom multi-page website", "Case study / work section", "Services pages", "Lead capture + contact form", "SEO + Google Business", "Mobile responsive"],
        },
        {
          name: "Lead Engine",
          price: "$4,500",
          tagline: "Fill your pipeline consistently.",
          popular: true,
          desc: "Website + CRM + automated proposal delivery + follow-up sequences. Stop manually chasing every lead. The system handles it so you can focus on closing.",
          includes: ["Everything in Presence", "CRM + client pipeline", "Automated proposal delivery", "Follow-up sequences", "Intake form + project qualifier", "Client portal", "Analytics dashboard", "30 days support"],
        },
        {
          name: "Agency OS",
          price: "$8,000",
          tagline: "Your entire operation in one place.",
          desc: "Lead engine + internal ops dashboard + client reporting + team workflows. Built for agencies scaling past one person who need systems, not chaos.",
          includes: ["Everything in Lead Engine", "Internal ops dashboard", "Automated client reporting", "Team task + workflow management", "Onboarding automation", "Admin panel", "Payment plans available"],
          inquire: true,
        },
      ];

    case "Service Business":
      return [
        {
          name: "Get Found",
          price: "$1,200",
          tagline: "Show up. Look legit. Get calls.",
          desc: "A clean website that makes your service business look professional and shows up when people search locally. Contact form, Google maps, reviews section.",
          includes: ["Custom website (up to 5 pages)", "Contact + quote request form", "Google Business + local SEO", "Reviews / testimonials section", "Mobile responsive", "Delivered in 2 weeks"],
        },
        {
          name: "Never Miss a Job",
          price: "$3,000",
          tagline: "Stop losing leads to missed calls.",
          popular: true,
          desc: "Website + AI receptionist + automated follow-up. Every call gets answered, every lead gets followed up with. The service businesses doing this are booked out weeks ahead.",
          includes: ["Everything in Get Found", "AI phone receptionist (24/7)", "Automated lead follow-up", "Online quote + booking request", "Review request automation", "Analytics dashboard", "30 days support"],
        },
        {
          name: "Full Service OS",
          price: "$5,500",
          tagline: "Run the whole operation.",
          desc: "AI receptionist + CRM + job scheduling + invoicing automation + customer portal. One system that handles everything from first call to getting paid.",
          includes: ["Everything in Never Miss a Job", "CRM + job pipeline", "Scheduling + dispatch system", "Invoicing automation", "Customer portal", "Admin dashboard", "Payment plans available"],
          inquire: true,
        },
      ];

    default: // Other
      return [
        {
          name: "Custom Starter",
          price: "From $1,500",
          tagline: "Built around your business.",
          desc: "Tell me what you do and I'll tell you exactly what you need. Every build starts with a conversation. No packages that don't fit, no upsells on stuff you won't use.",
          includes: ["Custom website", "Contact / lead forms", "Mobile responsive", "SEO foundations", "Google Business setup", "Delivered in 2 weeks"],
        },
        {
          name: "Custom Growth",
          price: "From $3,500",
          tagline: "Systems that grow with you.",
          popular: true,
          desc: "Website + the specific automation your business needs, whether that's booking, CRM, AI receptionist, e-commerce, or something else entirely. Built to your situation.",
          includes: ["Custom website", "Your specific automation stack", "CRM or booking (as needed)", "Email + SMS sequences", "Analytics dashboard", "30 days support"],
        },
        {
          name: "Full Build",
          price: "From $6,000",
          tagline: "The whole digital operation.",
          desc: "Website + full automation + admin dashboard. Everything your business needs to run and grow online, built custom for how you actually operate.",
          includes: ["Everything in Custom Growth", "Full automation stack", "Admin + ops dashboard", "Team access", "Advanced integrations", "Payment plans available"],
          inquire: true,
        },
      ];
  }
}

const addons = [
  { name: "Logo + Brand Kit", price: "$500" },
  { name: "Social Media Content (30 posts)", price: "$750" },
  { name: "Email Sequence (5 emails)", price: "$400" },
  { name: "AI Chatbot / Receptionist", price: "$1,500" },
  { name: "Monthly Maintenance", price: "$300/mo" },
  { name: "Photography Direction", price: "$500" },
];

export default function PackagesPage() {
  const [niche, setNiche] = useState("Restaurant / Food");
  const [showNiches, setShowNiches] = useState(false);

  useEffect(() => {
    const v = getVisitor();
    if (v.industry) setNiche(v.industry);
  }, []);

  const selectNiche = (n: string) => {
    setNiche(n);
    saveVisitor({ industry: n });
    setShowNiches(false);
  };

  const packages = getPackagesForNiche(niche);

  return (
    <PageShell>
      {/* Hero */}
      <section className="min-h-[40vh] flex items-end pb-12 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
            Packages
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">
            Built for your business.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Pick your industry. See packages and pricing tailored to what your business actually needs.
          </p>
        </div>
      </section>

      {/* Niche Selector */}
      <section className="py-8 border-t border-border sticky top-12 z-40 bg-bg/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-text-muted text-[12px] font-mono shrink-0">Your business:</p>
            <button
              onClick={() => setShowNiches(!showNiches)}
              className="inline-flex items-center gap-2 bg-text text-bg text-[14px] font-medium px-5 py-2.5 rounded-full hover:bg-text/90 transition-colors"
            >
              {niche}
              <span className={`transition-transform duration-200 ${showNiches ? "rotate-180" : ""}`}>&#9662;</span>
            </button>
          </div>

          {showNiches && (
            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-3 pb-4" style={{ animation: "fadeIn 0.2s ease-out" }}>
              {niches.map(n => (
                <button
                  key={n}
                  onClick={() => selectNiche(n)}
                  className={`px-5 py-2.5 rounded-full text-[14px] border transition-all duration-200 ${
                    niche === n
                      ? "bg-text text-bg border-text"
                      : "border-border text-text-secondary hover:text-text hover:border-text/40"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Packages */}
      <section className="py-8 md:py-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6" key={niche}>
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border ${pkg.popular ? "border-text" : "border-border"} p-8 sm:p-10 flex flex-col h-full relative`}
                style={{ animation: `fadeIn 0.4s ease-out ${i * 0.1}s both` }}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 bg-text text-bg text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <p className="text-[11px] font-mono text-text-muted tracking-[0.2em] uppercase mb-3">{pkg.name}</p>
                <p className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-none mb-2">{pkg.price}</p>
                <p className="font-display text-[1.1rem] tracking-[-0.02em] text-text-secondary mb-4">{pkg.tagline}</p>
                <p className="text-text-secondary text-[14px] leading-relaxed mb-8">{pkg.desc}</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-text mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?package=${pkg.name.toLowerCase().replace(/ /g, "-")}&niche=${encodeURIComponent(niche)}`}
                  className={`${pkg.inquire ? "ghost-btn" : pkg.popular ? "magnetic-btn" : "ghost-btn"} w-full justify-center`}
                >
                  {pkg.inquire
                    ? "Inquire →"
                    : pkg.popular
                    ? <span className="relative z-10">Get Started</span>
                    : "Get Started"}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-text-muted text-[13px] text-center mt-10">
            Not sure which one? <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">DM me on Instagram</a> and I&apos;ll help you pick.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
              Add-ons
            </p>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em] leading-[1] mb-4">
              Need something extra?
            </h2>
            <p className="text-text-secondary text-[15px] leading-relaxed max-w-[440px] mb-12">
              Stack these onto any package or buy them standalone.
            </p>
          </RevealOnScroll>

          <div className="max-w-[700px]">
            {addons.map((addon, i) => (
              <RevealOnScroll key={addon.name} delay={(i % 3) + 1}>
                <div className="flex items-center justify-between py-5 border-b border-border">
                  <span className="text-[15px] font-medium">{addon.name}</span>
                  <span className="text-[14px] font-mono text-text-muted">{addon.price}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="max-w-[600px]">
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">
                Ready to get started?
              </h2>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
                Pick a package or tell me what you need. Either way, you&apos;ll hear from me within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="magnetic-btn">
                  <span className="relative z-10">Start a Project</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">
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
