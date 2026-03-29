import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "E-commerce Store | JDLO",
  description: "A full online store with product management, checkout, and everything you need to process orders while you sleep.",
};

export default function EcommerceStoreProduct() {
  const includes = [
    "Full product catalog",
    "Shopping cart + checkout",
    "Payment processing (Stripe/PayPal)",
    "Order management",
    "Inventory tracking",
    "Customer accounts",
    "Shipping integration",
    "Mobile optimized",
    "SEO + marketing foundations",
  ];

  return (
    <PageShell>
      <section className="min-h-[50vh] flex items-end pb-16 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">Websites</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">Sell online. 24/7.<br />On autopilot.</h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">A full online store with product management, checkout, and everything you need to process orders while you sleep.</p>
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $3,500</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-4">Depends on number of products, payment integrations, and features needed.</p>
              <p className="text-text-secondary text-[14px] leading-relaxed mb-8">2-4 weeks depending on catalog size and features.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=e-commerce-store" className="magnetic-btn"><span className="relative z-10">Get Started</span></Link>
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
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">E-commerce</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">West Coast Terpz</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">E-commerce doing $12K+/mo</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">$12K+/mo revenue</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">24/7 order processing</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">3x customer reach</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </PageShell>
  );
}
