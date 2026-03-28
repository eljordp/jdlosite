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
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10 pt-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
                About
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6.5rem)] font-normal tracking-[-0.03em] leading-[0.9] mb-10 hero-animate hero-delay-2">
                I build things
                <br />
                <span className="text-text-secondary">that work.</span>
              </h1>
              <p className="text-text-secondary text-xl leading-relaxed max-w-[500px] hero-animate hero-delay-3">
                Not a guru. Not a course creator. I&apos;m a builder and operator
                who ships websites, AI systems, and sales operations for
                real businesses &mdash; then uses the same tools to run my own.
              </p>
            </div>

            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border hero-animate hero-delay-4">
              <Image
                src="/jordan-3.jpg"
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
                text="In about five months I taught myself how to build anything. Websites, apps, AI tools, dashboards, games — not from a bootcamp. From building real things for real clients who were paying me to figure it out."
                className="text-[18px] font-normal leading-[1.85] tracking-normal"
              />
              <ScrollHighlightText
                text="Now I build whatever businesses need. Websites that convert, AI systems that save 40 hours a week, apps, games, online casinos, enterprise tools. Restaurants, cannabis brands, clothing labels, nightclub promoters, appliance companies, print shops. 30+ projects shipped."
                className="text-[18px] font-normal leading-[1.85] tracking-normal"
              />
              <ScrollHighlightText
                text="Everything I deliver to a client, I use myself. That's not a sales line. My own business runs on the same systems I build for other people. If it doesn't work for me, I'm not selling it to you."
                className="text-[18px] font-normal leading-[1.85] tracking-normal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Do ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,4rem)] font-normal tracking-[-0.03em] leading-[0.95] mb-20">
              What I build.
            </h2>
          </RevealOnScroll>

          <div className="max-w-[860px]">
            {/* Service 1 */}
            <RevealOnScroll>
              <div className="py-10 border-b border-border group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-12">
                  <div>
                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em] leading-tight mb-3">
                      Websites
                    </h3>
                    <p className="text-text-secondary text-[16px] leading-relaxed max-w-[480px]">
                      Custom sites that look like you spent six figures, built fast
                      and designed to convert. No templates, no Wix, no page builders.
                      Real code, real design, real results.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="ghost-btn shrink-0 self-start"
                  >
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Service 2 */}
            <RevealOnScroll delay={1}>
              <div className="py-10 border-b border-border group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-12">
                  <div>
                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em] leading-tight mb-3">
                      AI Systems
                    </h3>
                    <p className="text-text-secondary text-[16px] leading-relaxed max-w-[480px]">
                      Automation that replaces the busywork — AI receptionists, lead
                      qualification, CRM workflows, internal tools. Systems that run
                      while you sleep and save 40+ hours a week.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="ghost-btn shrink-0 self-start"
                  >
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Service 3 */}
            <RevealOnScroll delay={2}>
              <div className="py-10 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-12">
                  <div>
                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em] leading-tight mb-3">
                      Sales Operations
                    </h3>
                    <p className="text-text-secondary text-[16px] leading-relaxed max-w-[480px]">
                      Pipeline setup, scripts, CRM automation, outbound systems, and
                      the SOPs to run it all without babysitting. Built for businesses
                      that want to close more without hiring more.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="ghost-btn shrink-0 self-start"
                  >
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <RevealOnScroll>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-normal tracking-[-0.03em] leading-[0.9] mb-4">
              Let&apos;s build something.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[440px] mx-auto mb-10">
              Tell me what you need. I&apos;ll tell you exactly how I&apos;d build it
              and what it costs. No discovery calls, no runaround.
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
