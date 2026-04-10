import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Terms of Service | JDLO",
  description: "Terms of Service for jdlo.site",
};

export default function TermsPage() {
  return (
    <PageShell>
      <section className="py-24 md:py-32">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            Legal
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[0.92] mb-6">
            Terms of Service
          </h1>
          <p className="text-text-muted text-[13px] font-mono mb-16">
            Last updated: March 6, 2026
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Overview
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                This website, jdlo.site, is operated by Jordan Lopez (&quot;JDLO&quot;). By accessing or purchasing any product or service on this site, you agree to the following terms. If you don&apos;t agree, don&apos;t use the site.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Products &amp; Access
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                JDLO provides custom development services including websites, apps, AI systems, and other digital products. All project work is scoped, quoted, and agreed upon before development begins. Deliverables are owned by the client upon full payment.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                No Redistribution
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                Custom work delivered to you is yours to use. However, JDLO retains the right to showcase the work in our portfolio unless otherwise agreed in writing. You may not resell or redistribute any proprietary tools, templates, or systems provided by JDLO to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Refunds
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                Project deposits are non-refundable. Final payments are due upon delivery. Retainer agreements can be cancelled with 30 days notice. For full details, see our{" "}
                <a href="/refund" className="text-accent hover:underline">
                  Refund Policy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Content Updates
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                JDLO reserves the right to update tools, processes, and service offerings at any time. Active projects will be completed as scoped.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Limitation of Liability
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                JDLO provides custom development services. Results depend on project scope, client input, and market conditions. We make no guarantees of specific revenue outcomes. JDLO is not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount you paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Governing Law
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                These terms are governed by the laws of the State of California. Any disputes will be resolved in the courts of California.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Changes to These Terms
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                We may update these terms at any time. Continued use of the site after changes means you accept the updated terms.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-text-muted text-[13px] leading-[1.8]">
                Questions? Reach out at{" "}
                <a
                  href="mailto:jordanl4solar@gmail.com"
                  className="text-accent hover:underline"
                >
                  jordanl4solar@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
