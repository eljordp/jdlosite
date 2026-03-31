import Image from 'next/image';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import RevealOnScroll from '@/components/RevealOnScroll';

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
              <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] tracking-[-0.03em] leading-[0.9] mb-10 hero-animate hero-delay-2">
                I build things
                <br />
                <span className="text-text-secondary">that work.</span>
              </h1>
              <p className="text-text-secondary text-xl leading-relaxed max-w-[500px] hero-animate hero-delay-3">
                Not a studio. Not an agency. One person who builds whatever your business needs and actually uses the same systems to run his own.
              </p>
            </div>

            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border hero-animate hero-delay-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/4bf5d8f06_image.png"
                alt="Jordan Lopez — Universal Studios"
                className="w-full h-full object-cover object-top"
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

            <div className="max-w-[680px]">
              <RevealOnScroll>
                <p className="text-[18px] leading-[1.85] text-text-secondary mb-10">
                  Five months. That&apos;s how long it took me to go from selling websites for a couple hundred bucks to building full platforms for real businesses. No degree. No bootcamp. I just kept saying yes to projects I didn&apos;t know how to do yet and figured it out before the deadline.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={1}>
                <p className="text-[18px] leading-[1.85] text-text-secondary mb-10">
                  Every project taught me something the last one didn&apos;t. A restaurant needed online ordering. A promoter needed guest list automation. A cannabis brand needed a full e-commerce store. A logistics company needed an enterprise app for 100+ locations. I built all of it. Most of it I&apos;d never touched before.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={2}>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border mb-10">
                  <Image
                    src="/jordan-2.jpg"
                    alt="Jordan Lopez"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 680px"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={2.5}>
                <p className="text-[18px] leading-[1.85] text-text mb-10">
                  That&apos;s the thing people don&apos;t get about me. I don&apos;t specialize in one thing. I specialize in figuring out what you need and building it fast. Websites, apps, AI systems, games, casinos, dashboards. If it lives on a screen and makes you money, I&apos;ve probably already built something like it.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={3}>
                <p className="text-[18px] leading-[1.85] text-text-secondary">
                  Everything I sell, I use. My own business runs on the same systems I build for clients. If it doesn&apos;t work for me, I&apos;m not selling it to you. That&apos;s the whole philosophy.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo Strip ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes photoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` }} />
      <section className="py-16 md:py-24 overflow-hidden">
        <div
          className="flex gap-[5px] hover:[animation-play-state:paused]"
          style={{
            animation: 'photoScroll 50s linear infinite',
          }}
        >
          {[...Array(2)].flatMap((_, setIdx) =>
            [
              { src: "/photos/suit-lv.jpg", alt: "Suit in front of Louis Vuitton, Vegas" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/4b6dbfd71_image.png", alt: "Palm trees LA street" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/12b79f88f_image.png", alt: "Beach lobster", lobster: true },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/654292d81_image.png", alt: "Boat trip turquoise water" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/4bf5d8f06_image.png", alt: "Universal Studios night, Challenger" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/841333415_image.png", alt: "Best friend neon background" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/39df25997_image.png", alt: "Vineyard work" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/d5f039ffb_image.png", alt: "Dino attack Hawaii mountains" },
            ].map((photo, i) => {
              const key = `${setIdx}-${i}`;
              if ('lobster' in photo && photo.lobster) {
                return (
                  <div key={key} className="h-[220px] md:h-[300px] rounded-xl overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-auto object-cover scale-110"
                      style={{ objectPosition: 'center 40%' }}
                    />
                  </div>
                );
              }
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={key}
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-[220px] md:h-[300px] w-auto rounded-xl object-cover flex-shrink-0"
                />
              );
            })
          )}
        </div>
      </section>

      {/* ── Receipts ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
              The receipts
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {[
              { num: "20+", label: "Projects shipped", sub: "Restaurants, casinos, cannabis, fashion, DHL, nightclubs, real estate" },
              { num: "5 months", label: "Self-taught", sub: "Went from zero to building full platforms for paying clients" },
              { num: "2 weeks", label: "Avg delivery", sub: "Most websites go live in under 2 weeks. Bigger builds depend on scope." },
              { num: "100%", label: "Custom built", sub: "No templates. No page builders. Everything from scratch." },
            ].map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i + 1}>
                <div className="bg-bg p-8 h-full">
                  <p className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-[-0.04em] leading-none mb-3">
                    {stat.num}
                  </p>
                  <p className="text-text text-[14px] font-medium mb-2">{stat.label}</p>
                  <p className="text-text-muted text-[13px] leading-relaxed">{stat.sub}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I Work ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">
            <RevealOnScroll>
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono lg:pt-2">
                How I work
              </p>
            </RevealOnScroll>

            <div className="max-w-[680px]">
              <RevealOnScroll>
                <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em] leading-[0.95] mb-10">
                  You tell me what you need.<br />
                  <span className="text-text-secondary">I build it.</span>
                </h2>
              </RevealOnScroll>

              <div className="space-y-0">
                {[
                  { title: "No discovery calls", body: "Send me a message. I respond within 24 hours with a plan, timeline, and price." },
                  { title: "No middlemen", body: "You talk to me. I do the work. There's no project manager translating your words into something I never hear." },
                  { title: "No disappearing after launch", body: "Tweaks, updates, support. I stick around. If you need ongoing work, we set up a retainer." },
                  { title: "No selling you stuff you don't need", body: "If a $497 landing page solves your problem, I'll tell you that. I'd rather you come back for the bigger build later than oversell you now." },
                ].map((item, i) => (
                  <RevealOnScroll key={item.title} delay={i + 1}>
                    <div className="py-8 border-b border-border last:border-0">
                      <p className="text-text text-[16px] font-medium mb-2">{item.title}</p>
                      <p className="text-text-secondary text-[15px] leading-relaxed">{item.body}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-12">
              Who I&apos;ve built for
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "West Coast Terpz", what: "E-commerce store", result: "$12K+/mo in online sales" },
              { name: "Club Bot / Velvet", what: "AI promoter platform", result: "500+ guests automated per week" },
              { name: "Cubicship / DHL", what: "Enterprise translator app", result: "100+ stores, expanding to Canada" },
              { name: "Pomaika'i Co", what: "Agency site + ops dashboard", result: "Replaced 5 tools, saved 20hrs/wk" },
              { name: "Quanta Casino", what: "Full online casino", result: "23 games, real-time multiplayer" },
              { name: "Aesthetics By Kayy", what: "Website + booking", result: "Luxury studio, Big Island Hawaii" },
            ].map((client, i) => (
              <RevealOnScroll key={client.name} delay={(i % 3) + 1}>
                <div className="p-6 border border-border rounded-xl">
                  <p className="text-text text-[15px] font-medium mb-1">{client.name}</p>
                  <p className="text-text-muted text-[13px] mb-3">{client.what}</p>
                  <p className="text-text-secondary text-[14px]">{client.result}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-text text-[14px] font-mono font-medium border-b border-text/30 hover:border-text pb-0.5 transition-all duration-300 mt-10 group"
            >
              See all projects
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
                Tell me what you need. I&apos;ll tell you exactly how I&apos;d build it and what it costs. No calls, no runaround.
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
