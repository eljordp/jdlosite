"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getVisitor, saveVisitor } from "@/lib/visitor";

const niches = [
  "Restaurant", "Bar / Nightclub", "Catering", "Bakery",
  "Retail", "E-commerce", "Clothing Brand", "Dropshipping",
  "Salon", "Barber Shop", "Auto Shop", "Cleaning Service", "Landscaping", "Plumbing", "HVAC",
  "Real Estate", "Property Management",
  "Gym / Fitness", "Personal Trainer", "Med Spa", "Dentist", "Chiropractor",
  "Agency", "Law Firm", "Accounting", "Consulting", "Insurance",
  "Photography", "Videography", "Music Producer", "Content Creator", "Tattoo Artist",
  "Dispensary", "Cannabis Brand",
  "Event Planner", "Promoter",
  "Construction", "Roofing", "Electrician",
  "Tech Startup", "Logistics", "Automotive",
  "Non-Profit", "Other",
];

interface PackageData {
  name: string;
  price: string;
  tagline: string;
  desc: string;
  includes: string[];
  popular?: boolean;
}

function getPackagesForNiche(niche: string): PackageData[] {
  // High-ticket niches
  const highTicket = ["Law Firm", "Real Estate", "Consulting", "Insurance", "Property Management", "Construction", "Roofing", "Med Spa"];
  // Appointment-based
  const appointment = ["Salon", "Barber Shop", "Dentist", "Chiropractor", "Personal Trainer", "Therapist", "Gym / Fitness", "Tattoo Artist"];
  // Local service
  const localService = ["Restaurant", "Bar / Nightclub", "Catering", "Bakery", "Auto Shop", "Cleaning Service", "Landscaping", "Plumbing", "HVAC", "Electrician", "Appliance Repair", "Dispensary"];
  // E-commerce / product
  const ecommerce = ["E-commerce", "Clothing Brand", "Dropshipping", "Cannabis Brand", "Retail"];
  // Creative
  const creative = ["Photography", "Videography", "Music Producer", "Content Creator", "Agency", "Event Planner", "Promoter"];

  if (highTicket.includes(niche)) {
    return [
      {
        name: "Starter",
        price: "$1,500",
        tagline: "Professional online presence.",
        desc: `A clean, professional website for your ${niche.toLowerCase()} that builds trust before the first meeting. Contact forms, booking, SEO — everything you need to look established.`,
        includes: ["Custom multi-page website", "Mobile responsive", "Contact forms + booking", "SEO + Google Business", "Delivered in 2 weeks"],
      },
      {
        name: "Growth",
        price: "$5,000",
        tagline: "Attract and convert high-value clients.",
        popular: true,
        desc: `Website + lead capture + CRM pipeline. For ${niche.toLowerCase()} businesses that want to stop losing leads to disorganization and start closing more.`,
        includes: ["Full custom website", "CRM + lead pipeline", "Automated follow-ups", "Email capture system", "Analytics + tracking", "Admin panel", "30 days support"],
      },
      {
        name: "Full Operation",
        price: "$10,000+",
        tagline: "Your entire digital operation.",
        desc: `Everything your ${niche.toLowerCase()} needs online. Website, automation, AI intake, client portal, CRM — one system that runs your business while you focus on clients.`,
        includes: ["Everything in Growth", "AI receptionist / intake", "Client portal", "Advanced automation", "Internal dashboard", "Team onboarding", "Payment plans available"],
      },
    ];
  }

  if (appointment.includes(niche)) {
    return [
      {
        name: "Starter",
        price: "$997",
        tagline: "Get booked online.",
        desc: `A clean website with online booking so your ${niche.toLowerCase()} clients can schedule without calling. Stop losing appointments to phone tag.`,
        includes: ["Custom website", "Online booking system", "Mobile responsive", "Google Business setup", "Delivered in 10 days"],
      },
      {
        name: "Growth",
        price: "$2,500",
        tagline: "Fill your calendar automatically.",
        popular: true,
        desc: `Website + booking + automated reminders + review requests. For ${niche.toLowerCase()} businesses that want a full calendar without chasing people.`,
        includes: ["Full custom website", "Advanced booking system", "Automated reminders (SMS/email)", "Review request automation", "Email capture", "SEO + analytics", "30 days support"],
      },
      {
        name: "Full Operation",
        price: "$5,000",
        tagline: "Run your business on autopilot.",
        desc: `Website + booking + AI receptionist + CRM. Never miss a call, never lose a client, never double-book. Everything automated.`,
        includes: ["Everything in Growth", "AI receptionist (24/7 calls)", "CRM + client management", "Automated follow-ups", "Admin dashboard", "Team scheduling", "Payment plans available"],
      },
    ];
  }

  if (ecommerce.includes(niche)) {
    return [
      {
        name: "Quick Store",
        price: "$497",
        tagline: "Start selling today.",
        desc: `Get your ${niche.toLowerCase()} store live in 24-48 hours. Your branding, your products, Stripe checkout. Perfect for testing an idea or getting started fast.`,
        includes: ["Custom branded store", "Up to 20 products", "Stripe checkout", "Mobile responsive", "Live in 24-48 hours"],
      },
      {
        name: "Starter Store",
        price: "$1,500",
        tagline: "A real online store.",
        popular: true,
        desc: `Custom design, up to 50 products, payment processing, inventory management. For ${niche.toLowerCase()} businesses ready to sell online seriously.`,
        includes: ["Custom design", "Up to 50 products", "Payment processing", "Inventory management", "Shipping setup", "SEO foundations", "Delivered in 1 week"],
      },
      {
        name: "Full Store",
        price: "$3,500+",
        tagline: "The whole e-commerce operation.",
        desc: `Unlimited products, customer accounts, automated shipping, abandoned cart recovery, discount system, analytics dashboard. Agencies charge $15K-$30K for this.`,
        includes: ["Everything in Starter", "Unlimited products", "Customer accounts", "Abandoned cart recovery", "Discount / promo system", "Analytics dashboard", "Admin panel", "30 days support"],
      },
    ];
  }

  if (creative.includes(niche)) {
    return [
      {
        name: "Portfolio",
        price: "$997",
        tagline: "Show your work. Get hired.",
        desc: `A portfolio site that makes your ${niche.toLowerCase()} work look incredible. Clean, fast, designed to get you booked.`,
        includes: ["Custom portfolio website", "Work showcase / gallery", "Contact form", "Social media integration", "Mobile responsive", "Delivered in 10 days"],
      },
      {
        name: "Growth",
        price: "$2,500",
        tagline: "Attract clients on autopilot.",
        popular: true,
        desc: `Portfolio + email capture + SEO + booking. For ${niche.toLowerCase()} professionals who want inbound clients, not just a pretty site.`,
        includes: ["Full custom website", "Portfolio / gallery", "Online booking", "Email capture system", "SEO + analytics", "Social proof section", "30 days support"],
      },
      {
        name: "Full Brand",
        price: "$5,000",
        tagline: "Your entire online brand.",
        desc: `Website + brand identity + content system + automation. For ${niche.toLowerCase()} businesses that want to look like a premium operation.`,
        includes: ["Everything in Growth", "Brand kit (logo, colors, fonts)", "Content templates", "Automated follow-ups", "CRM + pipeline", "Admin panel", "Payment plans available"],
      },
    ];
  }

  // Local service (default)
  return [
    {
      name: "Starter",
      price: "$997",
      tagline: "Get found. Look legit.",
      desc: `A professional website for your ${niche.toLowerCase()} business. Show up on Google, look trustworthy, and give customers a way to reach you.`,
      includes: ["Custom website (up to 5 pages)", "Mobile responsive", "Contact forms", "Google Business setup", "SEO foundations", "Delivered in 2 weeks"],
    },
    {
      name: "Growth",
      price: "$2,500",
      tagline: "Get more customers automatically.",
      popular: true,
      desc: `Website + AI receptionist + email capture. For ${niche.toLowerCase()} businesses that want to stop missing calls and start getting more jobs.`,
      includes: ["Full custom website", "AI receptionist (answers calls 24/7)", "Email capture", "Automated follow-ups", "Review request system", "SEO + analytics", "30 days support"],
    },
    {
      name: "Full Operation",
      price: "$5,000",
      tagline: "Your entire business online.",
      desc: `Everything your ${niche.toLowerCase()} business needs. Website, AI phone system, CRM, booking, automation — one system that runs while you're on the job.`,
      includes: ["Everything in Growth", "CRM + pipeline", "Online booking", "Automated scheduling", "Internal dashboard", "Team management", "Payment plans available"],
    },
  ];
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
  const [niche, setNiche] = useState("Other");
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
            <div className="mt-4 flex flex-wrap gap-2 pb-4" style={{ animation: "fadeIn 0.2s ease-out" }}>
              {niches.map(n => (
                <button
                  key={n}
                  onClick={() => selectNiche(n)}
                  className={`px-3 py-1.5 rounded-full text-[13px] border transition-all duration-200 ${
                    niche === n
                      ? "bg-text text-bg border-text"
                      : "border-border text-text-muted hover:text-text hover:border-text/30"
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
      <section className="section-gap">
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
                  className={`${pkg.popular ? "magnetic-btn" : "ghost-btn"} w-full justify-center`}
                >
                  {pkg.popular ? <span className="relative z-10">Get Started</span> : "Get Started"}
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
