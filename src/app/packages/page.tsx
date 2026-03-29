import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Packages | JDLO",
  description: "Digital presence packages — websites, branding, content, automation, and everything your business needs to look legit and make money online.",
};

const packages = [
  {
    name: "Starter",
    price: "$997",
    tagline: "Get online. Look legit.",
    desc: "For businesses that need a professional web presence fast. No fluff, just a clean site that makes you look real.",
    includes: [
      "1-page website (landing page)",
      "Mobile responsive",
      "Contact form or booking link",
      "Basic SEO setup",
      "Delivered in 5 days",
    ],
    href: "/contact?package=starter",
  },
  {
    name: "Growth",
    price: "$2,500",
    tagline: "Everything you need to grow.",
    popular: true,
    desc: "A full website plus the systems behind it. For businesses ready to stop winging it and start converting.",
    includes: [
      "Full multi-page website (up to 8 pages)",
      "Custom design + brand alignment",
      "Contact forms + booking integration",
      "SEO + Google Business setup",
      "Social media link hub",
      "Email capture + auto-responder",
      "30 days post-launch support",
      "Delivered in 2 weeks",
    ],
    href: "/contact?package=growth",
  },
  {
    name: "Digital Presence",
    price: "$5,000",
    tagline: "Your entire online operation.",
    desc: "Website, automation, content foundation, and systems that run while you sleep. For businesses that want to dominate online.",
    includes: [
      "Full custom website (unlimited pages)",
      "AI receptionist or booking automation",
      "CRM setup + lead pipeline",
      "Email marketing system",
      "Social media content templates",
      "Analytics + conversion tracking",
      "Monthly strategy call (first 3 months)",
      "Priority support",
    ],
    href: "/contact?package=digital-presence",
  },
  {
    name: "Full Operation",
    price: "$10K+",
    tagline: "I build your entire business online.",
    desc: "E-commerce, AI systems, dashboards, automation, apps — the whole thing. For businesses that need everything and want one person to handle it all.",
    includes: [
      "Everything in Digital Presence",
      "E-commerce or custom app",
      "Advanced AI automation",
      "Internal dashboard + admin panel",
      "Team onboarding + training",
      "Ongoing retainer option",
      "Payment plans available",
    ],
    href: "/contact?package=full-operation",
  },
];

const addons = [
  { name: "Logo + Brand Kit", price: "$500" },
  { name: "Social Media Content (30 posts)", price: "$750" },
  { name: "Email Sequence (5 emails)", price: "$400" },
  { name: "AI Chatbot / Receptionist", price: "$1,500" },
  { name: "Monthly Maintenance", price: "$300/mo" },
  { name: "Photography Direction", price: "$500" },
];

export default function PackagesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-end pb-16 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
            Packages
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">
            Digital presence packages.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Stop piecing it together. Pick a package and get everything your business needs to look professional, attract customers, and make money online.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <RevealOnScroll key={pkg.name} delay={(i % 2) + 1}>
                <div className={`rounded-2xl border ${pkg.popular ? "border-text" : "border-border"} p-8 sm:p-10 flex flex-col h-full relative`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-6 bg-text text-bg text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-baseline justify-between mb-2">
                    <p className="text-[11px] font-mono text-text-muted tracking-[0.2em] uppercase">{pkg.name}</p>
                    <p className="font-display text-[clamp(1.8rem,3vw,2.5rem)] tracking-[-0.03em] leading-none">{pkg.price}</p>
                  </div>
                  <p className="font-display text-[clamp(1.2rem,2vw,1.6rem)] tracking-[-0.02em] mb-2">{pkg.tagline}</p>
                  <p className="text-text-secondary text-[14px] leading-relaxed mb-8">{pkg.desc}</p>
                  <ul className="space-y-3 mb-10 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-text mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={pkg.href} className={`${pkg.popular ? "magnetic-btn" : "ghost-btn"} w-full justify-center`}>
                    {pkg.popular ? <span className="relative z-10">Get Started</span> : "Get Started"}
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <p className="text-text-muted text-[13px] text-center mt-10">
              Not sure which one? <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">DM me on Instagram</a> and I&apos;ll help you pick.
            </p>
          </RevealOnScroll>
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
                Ready to get your business online?
              </h2>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
                Pick a package or tell me what you need. Either way, you&apos;ll hear from me within 24 hours with a clear plan.
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
