import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Refund Policy | JDLO",
  description: "Refund Policy for jdlo.site",
};

export default function RefundPage() {
  return (
    <PageShell ctaText="Browse Courses" ctaHref="/courses">
      <section className="py-24 md:py-32">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            Legal
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[0.92] mb-6">
            Refund Policy
          </h1>
          <p className="text-text-muted text-[13px] font-mono mb-16">
            Last updated: March 6, 2026
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                The Short Version
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                We want you to get value from everything you buy. But because our products are digital and access is delivered immediately, we can&apos;t offer refunds after delivery. If something is genuinely broken, we&apos;ll make it right.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Courses ($197&ndash;$997)
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                All course purchases are final once your access code has been delivered. Courses are digital products &mdash; once you have access, the sale is complete. No refunds, no exceptions on delivered access codes.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Mentorship ($2,500/mo)
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                Mentorship is a monthly subscription. You can cancel anytime and won&apos;t be charged for the next billing cycle. However, there are no refunds for the current billing period. Once a month has started, that month is paid for.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Technical Issues
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                If a technical issue prevents you from accessing content you&apos;ve paid for, reach out immediately. We&apos;ll fix the issue and restore your access. If we can&apos;t resolve it, we&apos;ll issue a full refund. We&apos;re not here to take your money and leave you hanging.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                How to Request Help
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                For any billing questions, access issues, or refund requests related to technical problems, email us directly. Include your name, the product you purchased, and a description of the issue. We respond fast.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-text-muted text-[13px] leading-[1.8]">
                Need help? Email{" "}
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
