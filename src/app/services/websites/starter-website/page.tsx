import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Starter Website | JDLO",
  description: "A real multi-page website that makes your business look professional and shows up when people search for you.",
};

export default function StarterWebsiteProduct() {
  const includes = [
    "Up to 5 custom pages",
    "Mobile responsive design",
    "Contact form + booking integration",
    "SEO setup + Google Business",
    "Social media integration",
    "Email capture",
    "Analytics setup",
    "14-day delivery",
  ];

  return (
    <PageShell>
      <section className="min-h-[50vh] flex items-end pb-16 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">Websites</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">Look legit. Get found.<br />Start selling.</h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">A real multi-page website that makes your business look professional and shows up when people search for you.</p>
        </div>
      </section>

      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">What&apos;s Included</p>
          </RevealOnScroll>
          <div className="max-w-[640px]">
            {includes.map((item, i) => (
              <RevealOnScroll key={i} delay={(i % 4) + 1}>
                <div className="py-4 border-b border-border flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">{item}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="max-w-[600px]">
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">$997</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-4">Everything you need to get your business online and looking professional.</p>
              <p className="text-text-secondary text-[14px] leading-relaxed mb-8">Delivered in about 2 weeks. Payment plans available.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=starter-website" className="magnetic-btn"><span className="relative z-10">Get Started</span></Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">Local Business</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">Vacaville Appliance</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">Website + AI receptionist for local service business</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">40+ bookings/mo</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">24/7 availability</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">$8K+ revenue added</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </PageShell>
  );
}
