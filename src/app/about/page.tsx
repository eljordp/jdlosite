import Image from 'next/image';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import RevealOnScroll from '@/components/RevealOnScroll';
import ScrollHighlightText from '@/components/ScrollHighlightText';

export default function AboutPage() {
  return (
    <PageShell activeSlug="about">
      {/* ── Hero ── */}
      <section className="min-h-[90vh] flex items-center relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10 pt-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-3 hero-animate hero-delay-1">
                About
              </p>
              <p className="text-text-secondary text-[13px] mb-8 hero-animate hero-delay-1">
                20+ businesses built &middot; Apps, AI, casinos, enterprise, e-commerce, games
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] tracking-[-0.03em] leading-[0.9] mb-10 hero-animate hero-delay-2">
                I build things
                <br />
                <span className="text-text-secondary">that work.</span>
              </h1>
              <p className="text-text-secondary text-xl leading-relaxed max-w-[500px] hero-animate hero-delay-3">
                I&apos;m a builder and operator. I ship websites, apps, AI systems, games, casinos, and enterprise tools for real businesses &mdash; then use the same systems to run my own.
              </p>
            </div>

            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border hero-animate hero-delay-4">
              <Image
                src="/jordan-2.jpg"
                alt="Jordan Lopez"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">
            <RevealOnScroll>
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono lg:pt-2">
                The Story
              </p>
            </RevealOnScroll>

            <div className="max-w-[680px] space-y-12">
              <ScrollHighlightText
                text="I started selling websites for a couple hundred bucks. No degree, no portfolio, no connections. Just cold outreach and figuring it out in real time. Every project I took on was something I'd never done before. That was the whole point."
                className="text-[18px] font-normal leading-[1.85] tracking-normal"
              />
              <ScrollHighlightText
                text="In about five months I taught myself how to build anything. Websites, apps, AI tools, dashboards, games — from building real things for real clients who were paying me to figure it out."
                className="text-[18px] font-normal leading-[1.85] tracking-normal"
              />
              <ScrollHighlightText
                text="Now I build whatever businesses need. Online casinos, AI systems, enterprise tools, e-commerce stores, custom platforms. Restaurants, cannabis brands, clothing labels, nightclub promoters, DHL partners, print shops. 20+ projects shipped and counting."
                className="text-[18px] font-normal leading-[1.85] tracking-normal"
              />
              <ScrollHighlightText
                text="Everything I deliver to a client, I use myself. My own business runs on the same systems I build for other people. If it doesn't work for me, I'm not selling it to you."
                className="text-[18px] font-normal leading-[1.85] tracking-normal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Build ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[-0.03em] leading-[0.95] mb-20">
              What I build.
            </h2>
          </RevealOnScroll>

          <div className="max-w-[860px]">
            {[
              {
                title: "Apps & Systems",
                desc: "AI receptionists, automation workflows, dashboards, booking systems, CRM pipelines, internal tools. Anything that makes your business run faster and saves you time.",
                href: "/services/apps-systems",
              },
              {
                title: "Creative & Custom",
                desc: "Video games, online casinos, enterprise platforms, interactive experiences. The projects nobody else says yes to.",
                href: "/services/creative",
              },
              {
                title: "Websites & E-commerce",
                desc: "Custom sites and online stores designed to convert. From $497 landing pages to full e-commerce operations.",
                href: "/services/websites",
              },
            ].map((service, i) => (
              <RevealOnScroll key={service.title} delay={i + 1}>
                <Link href={service.href} className="block py-10 border-b border-border last:border-0 group hover:bg-surface/50 -mx-6 px-6 sm:-mx-10 sm:px-10 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-12">
                    <div>
                      <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.03em] leading-tight mb-3 group-hover:text-text-secondary transition-colors duration-300">
                        {service.title}
                        <span className="inline-block ml-2 text-text-muted text-[0.5em] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
                      </h3>
                      <p className="text-text-secondary text-[16px] leading-relaxed max-w-[480px]">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-text text-[14px] font-mono font-medium border-b border-text/30 hover:border-text pb-0.5 transition-all duration-300 mt-12 group"
            >
              See all 20+ projects
              <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="max-w-[600px]">
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">
                Let&apos;s build something.
              </h2>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
                Tell me what you need. I&apos;ll tell you exactly how I&apos;d build it and what it costs. No discovery calls, no runaround.
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
