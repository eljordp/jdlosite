import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GlowLink } from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Revenue Systems: Web Design, Client Communication & Operations | JDLO",
  description: "JDLO builds web design systems, client communication systems, and business operating systems that help businesses capture leads, save time, and create revenue.",
  alternates: { canonical: "/services" },
};

const paths = [
  { num: "01", title: "Web Design Systems", href: "/services/web-design-systems", desc: "Get found, earn trust, capture demand, and connect the public website to booking, checkout, follow-up, and measurement.", result: "Best when the business is stronger than its current online presence." },
  { num: "02", title: "Client Communication Systems", href: "/services/client-communication-systems", desc: "Connect lead intake, FAQs, estimates, reminders, status updates, and follow-up so clients get answers without making the owner the inbox.", result: "Best when opportunities arrive but communication is scattered or repetitive." },
  { num: "03", title: "Business Operating Systems", href: "/services/business-operating-systems", desc: "CRM, dashboards, scheduling, reporting, workflow automation, and internal tools built around the way the business actually operates.", result: "Best when growth creates too much admin or the truth lives in one person’s head." },
];

export default function ServicesPage() {
  return (
    <PageShell activeSlug="services">
      <section className="min-h-[84vh] flex items-end pb-[10vh] px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto w-full pt-28">
          <RevealOnScroll>
            <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-9">Services / Revenue systems</p>
            <h1 className="font-display text-[clamp(3rem,7.4vw,7.2rem)] tracking-[-0.045em] leading-[0.9] max-w-[1100px] mb-10">A business should be easier to find, <span className="text-text-secondary">buy from, and run.</span></h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[710px] mb-10">I build the connected digital systems that make that happen. Sometimes the entry point is a website. Sometimes it is follow-up, a CRM, a dashboard, or a custom tool. The outcome decides the build.</p>
            <GlowLink href="/contact?ref=services">Show Me the Bottleneck</GlowLink>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll><p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-12">Choose the system, not a made-up bundle</p></RevealOnScroll>
          <div className="grid lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {paths.map((path, i) => <RevealOnScroll key={path.title} delay={i + 1}><Link href={path.href} className="group block bg-bg hover:bg-surface p-8 md:p-10 h-full transition-colors"><span className="text-accent text-xs font-mono">{path.num}</span><h2 className="font-display text-[clamp(2rem,3.4vw,3.2rem)] tracking-[-0.035em] leading-[0.98] mt-12 mb-6">{path.title}</h2><p className="text-text-secondary text-[15px] leading-relaxed mb-8">{path.desc}</p><p className="text-text-muted text-xs font-mono leading-relaxed mb-10">{path.result}</p><span className="text-sm font-mono group-hover:text-accent">Explore →</span></Link></RevealOnScroll>)}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-border bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          <RevealOnScroll><p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">How I think</p><h2 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] tracking-[-0.035em] leading-[0.96]">Join the system. Find the leak. Connect the pieces.</h2></RevealOnScroll>
          <RevealOnScroll delay={1}><div className="space-y-7 text-text-secondary text-lg leading-relaxed"><p>A website alone does not create a viable business. Neither does AI, a CRM, or another dashboard.</p><p>The leverage comes from connecting the parts: how demand enters, how clients get answers, how work moves, how the team sees truth, and how the owner knows what is making money.</p><p>That is what JDLO brings to the table.</p></div></RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
