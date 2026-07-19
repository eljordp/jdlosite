import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Privacy Policy | JDLO",
  description: "Privacy Policy for jdlo.site",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="py-24 md:py-32">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
            Legal
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[0.92] mb-6">
            Privacy Policy
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
                This policy explains what data we collect, how we use it, and your rights. JDLO (operated by Jordan Lopez) respects your privacy and will never sell your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                What We Collect
              </h2>
              <ul className="space-y-3">
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span><strong className="text-text">Name &amp; email</strong> - when you create an account or make a purchase</span>
                </li>
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span><strong className="text-text">Payment information</strong> - processed securely through Stripe (we never store your card details)</span>
                </li>
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span><strong className="text-text">Usage data</strong> - pages visited, features used, collected via analytics</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Services We Use
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8] mb-4">
                Your data is processed by the following third-party services, each with their own privacy policies:
              </p>
              <ul className="space-y-3">
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span><strong className="text-text">Supabase</strong> - authentication and database</span>
                </li>
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span><strong className="text-text">Stripe</strong> - payment processing</span>
                </li>
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span><strong className="text-text">Resend</strong> - transactional emails</span>
                </li>
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span><strong className="text-text">PostHog</strong> - product analytics</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                How We Use Your Data
              </h2>
              <ul className="space-y-3">
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span>To deliver services and projects you&apos;ve contracted</span>
                </li>
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span>To process payments and send receipts</span>
                </li>
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span>To send important updates about your account or purchases</span>
                </li>
                <li className="text-text-secondary text-[15px] leading-[1.8] flex gap-3">
                  <span className="text-accent shrink-0">-</span>
                  <span>To improve the site experience through analytics</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                We Never Sell Your Data
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                Your personal information is never sold, rented, or traded to third parties for marketing purposes. Period.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Your Rights (California Residents)
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                Under the CCPA, California residents have the right to know what personal data we collect, request deletion of your data, and opt out of data sales (we don&apos;t sell data, but the right still applies). To exercise any of these rights, email us.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Cookies
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                We use essential cookies for authentication and session management, plus analytics cookies through PostHog to understand how people use the site. No advertising cookies.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold tracking-[-0.02em] mb-4">
                Changes to This Policy
              </h2>
              <p className="text-text-secondary text-[15px] leading-[1.8]">
                We may update this policy as our services evolve. Any changes will be reflected on this page with an updated date.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-text-muted text-[13px] leading-[1.8]">
                Questions about your data? Reach out at{" "}
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
