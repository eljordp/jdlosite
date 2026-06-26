import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GlowLink } from "@/components/GlowButton";

export const metadata = {
  title: "Services | JDLO",
  description:
    "JDLO services: the Operator Stack, custom websites, AI systems, apps, dashboards, e-commerce, and custom digital products for businesses.",
};

const servicePaths = [
  {
    eyebrow: "Main offer",
    title: "The Operator Stack",
    href: "/operator",
    desc: "Website, CRM, AI follow-up, booking, payments, automation, and owner dashboard. Built as one connected system instead of five random tools.",
    proof: "Best for owners who know a website alone will not fix the bottleneck.",
  },
  {
    eyebrow: "Websites",
    title: "Websites & E-commerce",
    href: "/services/websites",
    desc: "Custom sites, landing pages, booking flows, product catalogs, and stores that make the business look serious and convert real traffic.",
    proof: "West Coast Terpz went from Instagram DMs to $12K+/mo online.",
  },
  {
    eyebrow: "Systems",
    title: "Apps & Systems",
    href: "/services/apps-systems",
    desc: "AI receptionists, automations, dashboards, internal tools, CRM systems, scheduling, and custom workflows for teams that are tired of manual work.",
    proof: "Velvet handles 500+ guest-list entries a week with automation.",
  },
  {
    eyebrow: "Custom",
    title: "Creative & Custom",
    href: "/services/creative",
    desc: "Games, casinos, interactive experiences, enterprise tools, marketplaces, and unusual builds where the answer is not a normal website template.",
    proof: "Quanta is a full sweepstakes casino with games, balances, and admin tools.",
  },
];

const proof = [
  {
    name: "Vacaville Appliance",
    stat: "40+ bookings/mo",
    img: "/screenshots/vacaville-appliance.png",
  },
  {
    name: "Cubicship / DHL",
    stat: "100+ stores",
    img: "/screenshots/dhl-translator.png",
  },
  {
    name: "Pomaika'i Co",
    stat: "5 tools replaced",
    img: "/screenshots/pomaikai.png",
  },
];

export default function ServicesPage() {
  return (
    <PageShell activeSlug="services">
      <section className="min-h-[82vh] flex items-center relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 w-full pt-20">
          <div className="grid min-w-0 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
            <RevealOnScroll className="min-w-0">
              <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
                Services
              </p>
              <h1 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] tracking-[-0.035em] leading-[0.92] mb-10 max-w-[900px]">
                Not just a site.
                <br />
                <span className="text-text-secondary">The system around it.</span>
              </h1>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[580px] mb-10">
                I am JDLO. The personal brand is broad because I build a lot.
                The business offer is simple: make you look bigger online and
                install the digital pieces that help the business run.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                <GlowLink href="/contact?ref=services" className="w-full sm:w-auto">Start a Project</GlowLink>
                <Link href="/operator" className="ghost-btn w-full sm:w-auto">
                  See Operator Stack
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={1}>
              <div className="grid gap-4">
                {proof.map((item) => (
                  <Link
                    key={item.name}
                    href="/work"
                    className="group grid grid-cols-[96px_minmax(0,1fr)] sm:grid-cols-[180px_minmax(0,1fr)] border border-border rounded-xl overflow-hidden bg-surface hover:border-text/20 transition-colors"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        loading="eager"
                        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="180px"
                      />
                    </div>
                    <div className="min-w-0 p-4 sm:p-5 flex flex-col justify-center">
                      <p className="font-display text-[clamp(1.25rem,2.4vw,1.8rem)] tracking-[-0.02em] leading-[1.05]">
                        {item.name}
                      </p>
                      <p className="text-text-muted text-[12px] font-mono mt-2">
                        {item.stat}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="flex items-baseline justify-between mb-16">
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono">
                What to hire me for
              </p>
              <p className="text-text-muted text-[11px] font-mono hidden md:block">
                04 paths
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {servicePaths.map((service, i) => (
              <RevealOnScroll key={service.title} delay={(i % 2) + 1}>
                <Link
                  href={service.href}
                  className="group block bg-bg p-8 md:p-10 h-full hover:bg-surface transition-colors duration-300"
                >
                  <div className="flex items-baseline justify-between mb-10 gap-4">
                    <span className="text-accent text-[11px] font-mono tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <span className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase">
                      {service.eyebrow}
                    </span>
                  </div>
                  <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] tracking-[-0.03em] leading-[1] mb-5 group-hover:text-text-secondary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-relaxed max-w-[520px] mb-8">
                    {service.desc}
                  </p>
                  <p className="text-text-muted text-[12px] font-mono leading-relaxed mb-8">
                    {service.proof}
                  </p>
                  <span className="text-[13px] font-mono text-text group-hover:text-accent transition-colors">
                    Open service &rarr;
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
              Simple way to decide
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.03em] leading-[1.05] max-w-[900px] mb-10">
              If you are unsure, do not pick a service.
              <br />
              <span className="text-text-secondary">Tell me the business problem.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[660px] mb-12">
              Most clients do not need to know whether they need a CRM, an AI
              receptionist, a dashboard, or a custom app. They need more leads
              captured, fewer messages dropped, cleaner payments, and a site
              that makes the business feel legit. I will map the build from there.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <GlowLink href="/contact?ref=services-bottom" className="w-full sm:w-auto">Tell me what you need</GlowLink>
              <a
                href="https://instagram.com/jdlo"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn w-full sm:w-auto"
              >
                DM @jdlo
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
