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
                JDLO offers digital courses ($197&ndash;$997) and mentorship ($2,500/mo). Courses are delivered as digital products. Upon purchase, you&apos;ll receive an access code to unlock your course content. This access is for your personal use only.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                No Redistribution
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                You may not copy, share, resell, redistribute, or publicly display any course content, materials, templates, or resources provided through JDLO. Violating this will result in immediate access revocation with no refund.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Refunds
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                Because courses are digital products, all sales are final once your access code has been delivered. Mentorship subscriptions can be cancelled but are not refunded for the current billing period. For full details, see our{" "}
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
                JDLO reserves the right to update, modify, or remove course content at any time. We do this to keep the material current and valuable. Updated content will be available to existing customers at no additional cost.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Limitation of Liability
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                JDLO provides educational content and mentorship. Results vary and depend on individual effort. We make no guarantees of specific outcomes, income, or results. JDLO is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our products or services. Our total liability is limited to the amount you paid for the specific product or service in question.
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
                  href="mailto:eljordp@gmail.com"
                  className="text-accent hover:underline"
                >
                  eljordp@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
