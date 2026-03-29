import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import ROICalculator from "@/components/ROICalculator";

export const metadata = {
  title: "E-commerce Store | JDLO",
  description: "A full online store with product management, checkout, and everything you need to process orders while you sleep.",
};

export default function EcommerceStoreProduct() {
  const tiers = [
    {
      name: "Quick Store — $497",
      desc: "Pre-built template customized with your brand, colors, and up to 20 products. Stripe checkout. Live in 24-48 hours. Perfect for dropshipping, testing an idea, or just getting started.",
    },
    {
      name: "Starter Store — $1,500",
      desc: "Custom design, up to 50 products, payment processing, inventory management, shipping setup, SEO foundations. Delivered in 1 week.",
    },
    {
      name: "Full Store — $3,500+",
      desc: "This is the real deal. Custom design from scratch, unlimited products, advanced inventory with variant management, customer accounts with order history, automated shipping labels + tracking, discount/promo system, abandoned cart recovery emails, analytics dashboard showing revenue + conversion rates, admin panel for managing everything, and 30 days post-launch support. Agencies charge $15K-$30K for this stack. Payment plans available.",
    },
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
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Three Tiers</p>
          </RevealOnScroll>
          <div className="max-w-[640px]">
            {tiers.map((tier, i) => (
              <RevealOnScroll key={i} delay={(i % 4) + 1}>
                <div className="py-6 border-b border-border">
                  <p className="text-text font-medium text-[16px] mb-2">{tier.name}</p>
                  <p className="text-text-secondary text-[15px] leading-relaxed">{tier.desc}</p>
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">Starting at $497</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">Three tiers depending on what you need. From a quick template store live in 48 hours to a full custom e-commerce platform with everything built in.</p>
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

      <ROICalculator
        title="Project Your Revenue"
        subtitle="Input your numbers. See what an online store could do for your business."
        product="e-commerce-store"
        sliders={[
          { label: "Products you'd sell", min: 5, max: 500, step: 5, default: 30 },
          { label: "Average product price", min: 10, max: 500, step: 10, default: 50, prefix: "$" },
          { label: "Expected orders per month", min: 10, max: 1000, step: 10, default: 100 },
        ]}
        results={[
          { label: "Monthly revenue", calculate: (v) => `$${Math.round(v[1] * v[2]).toLocaleString()}` },
          { label: "Annual revenue", calculate: (v) => `$${Math.round(v[1] * v[2] * 12).toLocaleString()}` },
          { label: "ROI on a $3,500 store", calculate: (v) => `${Math.round((v[1] * v[2] * 12) / 3500)}x return` },
        ]}
      />

    </PageShell>
  );
}
