import type { Metadata } from "next";
import "./brochure.css";

export const metadata: Metadata = {
  title: "JDLO — Operator Stack Brochure",
  description:
    "JDLO brochure: services, pricing, projects, and how we install the Operator Stack for service businesses.",
  openGraph: {
    title: "JDLO — Operator Stack Brochure",
    description:
      "Websites, CRMs, AI agents, and automations — installed in weeks, run as one stack.",
    url: "https://jdlo.site/brochure",
  },
  robots: { index: false, follow: false },
};

export default function BrochurePage() {
  return (
    <main className="brochure-root">
      {/* COVER */}
      <section className="page cover">
        <div className="stamp">
          <span className="small">JDLO &middot; Operations &amp; Growth Systems</span>
          <span className="pill">Brochure / 2026</span>
        </div>

        <div>
          <h1>Built systems for owners who outgrew their setup.</h1>
          <div className="rule" style={{ marginTop: 36 }} />
          <p className="sub">
            Websites, CRMs, AI agents, and automations &mdash; installed in weeks, run as
            one stack. We don&rsquo;t sell hours. We sell operators.
          </p>
        </div>

        <div className="meta">
          <div>JDLO &middot; India &amp; US</div>
          <div>jdlo.site</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="page">
        <span className="small">01 / About</span>
        <h2 style={{ marginTop: 6 }}>What JDLO is.</h2>
        <div className="rule" />

        <div className="two">
          <div>
            <p className="lede">
              JDLO is a build studio for service businesses. We design and install the
              operating stack a modern company needs to run &mdash; the site, the CRM,
              the AI, the automations &mdash; and then we keep improving it every month.
            </p>
          </div>
          <div>
            <p>
              Most owners we work with are doing real revenue but running it through their
              phone. Leads sit in DMs. Quotes get lost in email. Follow-ups never happen.
              The website is a brochure that doesn&rsquo;t bring anyone in.
            </p>
            <p>
              We replace that with a system. One stack. One operator. Built fast, owned by
              you, improved monthly.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <h4>How we&rsquo;re different</h4>
          <div className="three" style={{ marginTop: 14 }}>
            <div>
              <h3>Same operator, end to end.</h3>
              <p className="muted">
                From the first call to launch to monthly improvements &mdash; you talk to
                the same person who built it.
              </p>
            </div>
            <div>
              <h3>Built in weeks, not months.</h3>
              <p className="muted">
                Most sites go live in 7&ndash;14 days. Full Operator Stack lands inside 30.
              </p>
            </div>
            <div>
              <h3>A system, not a deliverable.</h3>
              <p className="muted">
                You don&rsquo;t just get assets. You get an operating layer that runs lead
                flow, follow-up, and reporting on its own.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-mark">JDLO</div>
        <div className="pagenum">01</div>
      </section>

      {/* OPERATOR STACK */}
      <section className="page">
        <span className="small">02 / The Offer</span>
        <h2 style={{ marginTop: 6 }}>The JDLO Operator Stack.</h2>
        <div className="rule" />

        <p className="lede" style={{ maxWidth: "6in" }}>
          One install. Five pieces. Everything an owner needs to run lead flow, sales, and
          delivery without taping it together themselves.
        </p>

        <div className="stack" style={{ marginTop: 24 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3 style={{ fontSize: "18pt" }}>Operator Stack</h3>
              <p className="muted" style={{ margin: "6px 0 0" }}>
                Full install + monthly partnership
              </p>
            </div>
            <div className="price">$5,000 install &middot; $1,500 / mo</div>
          </div>

          <ul>
            <li>
              <span className="label">Conversion site</span>
              <span className="desc">
                Custom-built, fast, mobile-first. Wired to capture leads, not just display
                information.
              </span>
            </li>
            <li>
              <span className="label">CRM build-out</span>
              <span className="desc">
                Central pipeline for every lead, quote, and customer. Replaces
                spreadsheets and DMs.
              </span>
            </li>
            <li>
              <span className="label">AI Operator</span>
              <span className="desc">
                Qualifies leads, answers FAQs, books calls, and follows up &mdash; trained
                on your business.
              </span>
            </li>
            <li>
              <span className="label">Automations</span>
              <span className="desc">
                Forms, invoicing, scheduling, reminders, internal notifications. The admin
                work disappears.
              </span>
            </li>
            <li>
              <span className="label">Monthly partnership</span>
              <span className="desc">
                New features, optimization, reporting, support. Your stack gets better
                every month.
              </span>
            </li>
          </ul>
        </div>

        <div className="footer-mark">JDLO</div>
        <div className="pagenum">02</div>
      </section>

      {/* SERVICES */}
      <section className="page">
        <span className="small">03 / Services</span>
        <h2 style={{ marginTop: 6 }}>What we build.</h2>
        <div className="rule" />

        <p>
          Stack pieces can be installed as standalone projects or bundled into the full
          Operator Stack.
        </p>

        <div style={{ marginTop: 18 }}>
          {[
            {
              h: "Custom websites",
              p: "Conversion-first design. Built from scratch, not from a template. Fast, mobile-first, and tied to your CRM and analytics from day one.",
            },
            {
              h: "CRM & pipeline systems",
              p: "Lead capture, stages, tasks, reporting. Built to match how your business actually runs — not a generic SaaS layout.",
            },
            {
              h: "AI agents & chatbots",
              p: "Trained operators that handle inbound chat, lead qualification, FAQ, booking, and follow-up across web, WhatsApp, and Instagram.",
            },
            {
              h: "Sales & ops automation",
              p: "Invoicing, contracts, reminders, scheduling, intake forms, internal alerts. Owner gets time back, customers get faster response.",
            },
            {
              h: "E-commerce",
              p: "Custom storefronts with payments, inventory, and customer accounts. For brands that have outgrown Shopify themes.",
            },
            {
              h: "Mobile apps",
              p: "iOS and Android apps for service businesses — booking, tracking, customer-facing tools. Native feel, faster build.",
            },
            {
              h: "Internal tools & dashboards",
              p: "Admin panels, ops dashboards, team tools. Built around your workflow so the team actually uses them.",
            },
            {
              h: "Brand & content systems",
              p: "Identity, positioning, content calendars, pitch assets. The frame your sales work actually lives inside.",
            },
          ].map((s) => (
            <div key={s.h} className="svc">
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>

        <div className="footer-mark">JDLO</div>
        <div className="pagenum">03</div>
      </section>

      {/* NICHES */}
      <section className="page">
        <span className="small">04 / Niches</span>
        <h2 style={{ marginTop: 6 }}>Who we build for.</h2>
        <div className="rule" />

        <p>
          We work with owner-operators across service, product, and operations-heavy
          businesses. The pattern is the same: real revenue, broken admin, no central
          system.
        </p>

        <div className="three" style={{ marginTop: 20, rowGap: 18 }}>
          {[
            ["Freight & logistics", "Quote tools, shipment tracking, customs & ops dashboards, customer portals."],
            ["Home & trade services", "Restoration, repair, contracting. Lead capture, scheduling, quoting, follow-up."],
            ["E-commerce & D2C", "Custom storefronts, subscription, wholesale portals, brand experience builds."],
            ["Hospitality & events", "Booking systems, event sites, deposit flows, guest management."],
            ["Sports, gaming & iGaming", "Data-driven products, prediction tools, white-label storefronts, member portals."],
            ["Consulting & agencies", "Pitch sites, lead funnels, client portals, internal ops tools."],
            ["Health, fitness & coaching", "Booking, programs, member areas, content delivery, payment plans."],
            ["Real estate & brokerage", "Listings, lead capture, CRM, property search, client portals."],
            ["Local service businesses", "Appliance, salon, auto, repair. The full digital storefront most owners never get."],
          ].map(([h, p]) => (
            <div key={h} className="niche">
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>

        <div className="footer-mark">JDLO</div>
        <div className="pagenum">04</div>
      </section>

      {/* PAIN POINTS */}
      <section className="page">
        <span className="small">05 / Pain Points &rarr; Solutions</span>
        <h2 style={{ marginTop: 6 }}>The problems we actually solve.</h2>
        <div className="rule" />

        <p>
          Every owner we sign up to the Operator Stack walks in with the same handful of
          problems. Here&rsquo;s what they are and what we install.
        </p>

        <table className="pain" style={{ marginTop: 18 }}>
          <thead>
            <tr>
              <th>The pain</th>
              <th>What JDLO installs</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "“My website doesn’t bring me leads.”",
                "Conversion-first rebuild with proper lead capture, tracking, and direct wiring into the CRM. Every visitor counted, every lead followed up.",
              ],
              [
                "“I’m losing leads in DMs, email, and WhatsApp.”",
                "One CRM that pulls every channel into a single pipeline. AI Operator follows up automatically so nothing dies in your inbox.",
              ],
              [
                "“I waste hours on quotes, invoicing, and admin.”",
                "Automated intake forms, quoting, invoicing, scheduling, and reminders. The admin layer runs itself.",
              ],
              [
                "“I have no idea what’s actually working.”",
                "A live dashboard for leads, revenue, pipeline, and conversion. You see the business in real numbers, not gut feel.",
              ],
              [
                "“My team isn’t consistent without me.”",
                "SOPs encoded into the system. AI agents and automations enforce the process so the business doesn’t depend on memory.",
              ],
              [
                "“I can’t scale without hiring an ops team.”",
                "The Operator Stack gives one owner the leverage of an operations department — without the payroll.",
              ],
              [
                "“Agencies charge me a lot and still leave me waiting.”",
                "Same operator from pitch to ship to monthly partnership. Direct line, fast turnaround, no account managers in the middle.",
              ],
            ].map(([p, s]) => (
              <tr key={p}>
                <td>{p}</td>
                <td>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer-mark">JDLO</div>
        <div className="pagenum">05</div>
      </section>

      {/* WORK */}
      <section className="page">
        <span className="small">06 / Selected Work</span>
        <h2 style={{ marginTop: 6 }}>Projects we&rsquo;ve shipped.</h2>
        <div className="rule" />

        <p>
          A cross-section of recent builds. Available on request: live links, walkthroughs,
          and references.
        </p>

        <div style={{ marginTop: 18 }}>
          {[
            ["BayParlays", "AI-driven sports prediction platform with subscription tiers, payments, and live data feeds.", "Sports / AI"],
            ["Travelyt", "Door-to-airport baggage service. Quote flow, booking, customer notifications, mobile app.", "Logistics"],
            ["DHL Translator", "Internal counter tool that translates customer requests and instructions in real time.", "Logistics / Ops"],
            ["WCT", "E-commerce storefront with custom checkout, inventory management, and order workflows.", "E-commerce"],
            ["Sticker Smith", "D2C brand site with custom storefront, order flow, and content layer.", "D2C"],
            ["Vacaville Appliance", "Local service business site with quoting, lead capture, and Google Business integration.", "Local Service"],
            ["Carusso Restorations", "Bay Area furniture restoration brand. Conversion site, lead pipeline, Google Business packet.", "Trades"],
            ["Pomaika‘i Co", "Hospitality brand site with booking flow and content system.", "Hospitality"],
            ["Habana Modern", "White-label iGaming storefront, fully reskinned for licensee partner.", "iGaming"],
            ["JDLO Operator", "In-house AI agent for inbound lead handling across Telegram and Instagram.", "AI Agent"],
          ].map(([name, what, tag]) => (
            <div key={name} className="project">
              <div className="name">{name}</div>
              <div className="what">{what}</div>
              <div className="tag">{tag}</div>
            </div>
          ))}
        </div>

        <div className="footer-mark">JDLO</div>
        <div className="pagenum">06</div>
      </section>

      {/* PRICING */}
      <section className="page">
        <span className="small">07 / Pricing</span>
        <h2 style={{ marginTop: 6 }}>Packages.</h2>
        <div className="rule" />

        <p>
          Clear tiers for the most common scopes. Custom builds and enterprise scopes are
          quoted after a discovery call. All prices in USD. INR equivalents available on
          request.
        </p>

        <div className="three" style={{ marginTop: 20, rowGap: 20, alignItems: "stretch" }}>
          <div className="pkg">
            <h3>Starter Site</h3>
            <div className="pkg-price">$2,500</div>
            <p>For owners who need a real online presence fast.</p>
            <ul>
              <li>Custom 1&ndash;3 page site</li>
              <li>Mobile-first design</li>
              <li>Lead capture form</li>
              <li>Analytics &amp; tracking</li>
              <li>Launch in 7&ndash;10 days</li>
            </ul>
          </div>

          <div className="pkg">
            <h3>Pro Site + CRM</h3>
            <div className="pkg-price">$5,000</div>
            <p>The full conversion site, wired into a real pipeline.</p>
            <ul>
              <li>Multi-page custom site</li>
              <li>CRM build-out</li>
              <li>Lead routing &amp; tagging</li>
              <li>Basic automations</li>
              <li>Launch in 2&ndash;3 weeks</li>
            </ul>
          </div>

          <div className="pkg feature">
            <h3>Operator Stack</h3>
            <div className="pkg-price">$5,000 + $1,500/mo</div>
            <p>The full system. Owner-level leverage, monthly partnership.</p>
            <ul>
              <li>Conversion site + CRM</li>
              <li>AI Operator (chat, qualify, follow-up)</li>
              <li>Sales &amp; ops automation</li>
              <li>Reporting dashboard</li>
              <li>Monthly improvements &amp; support</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <h4>Add-ons</h4>
          <div className="thin-rule" />
          <div className="two">
            <div>
              <p><strong>E-commerce storefront</strong> &middot; from $3,500</p>
              <p><strong>Mobile app (iOS + Android)</strong> &middot; from $6,000</p>
              <p><strong>Branding &amp; identity</strong> &middot; from $1,500</p>
            </div>
            <div>
              <p><strong>WhatsApp / Instagram AI agent</strong> &middot; from $1,500</p>
              <p><strong>Internal dashboard / admin tool</strong> &middot; from $2,500</p>
              <p><strong>Content system + calendar</strong> &middot; from $1,000</p>
            </div>
          </div>
        </div>

        <p className="muted" style={{ marginTop: 24, fontSize: "9.5pt" }}>
          Payment plans available on builds over $3,000 with a 40% deposit.
        </p>

        <div className="footer-mark">JDLO</div>
        <div className="pagenum">07</div>
      </section>

      {/* PROCESS */}
      <section className="page">
        <span className="small">08 / Process</span>
        <h2 style={{ marginTop: 6 }}>How we work.</h2>
        <div className="rule" />

        <p>
          Five steps from first call to live system. No long discovery cycles, no account
          managers, no surprise invoices.
        </p>

        <div style={{ marginTop: 20 }}>
          {[
            ["01", "Discovery call (30 minutes, free)", "We map your offer, current systems, and biggest bottleneck. You leave the call with a clear plan even if we never work together."],
            ["02", "Proposal & scope (within 48 hours)", "One-page proposal with package, price, timeline, and deliverables. No fluff, no “phase one of seven.”"],
            ["03", "Build (1–4 weeks)", "You stay in the loop with a working preview link. We don’t disappear for a month and reveal a draft."],
            ["04", "Launch & handoff", "System goes live. You get access, training, and clean documentation. Everything is owned by you."],
            ["05", "Monthly partnership (Operator Stack)", "Every month: new features, optimization, reporting, and direct access for support. Your stack gets sharper, not stale."],
          ].map(([n, h, p]) => (
            <div key={n} className="step">
              <div className="n">{n}</div>
              <div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-mark">JDLO</div>
        <div className="pagenum">08</div>
      </section>

      {/* CONTACT */}
      <section className="page">
        <span className="small">09 / Contact</span>
        <h2 style={{ marginTop: 6 }}>Let&rsquo;s talk.</h2>
        <div className="rule" />

        <div className="close-card">
          <h2 style={{ fontSize: "22pt" }}>
            Most clients we work with come in with the same line.
          </h2>
          <p className="lede" style={{ marginTop: 14 }}>
            &ldquo;I know I&rsquo;m sitting on something. I just don&rsquo;t have the
            system to run it properly.&rdquo;
          </p>
          <p style={{ marginTop: 14 }}>
            If that&rsquo;s you, book a discovery call. Thirty minutes, no pitch. You
            leave with a clear map of what to install and in what order &mdash; whether we
            build it for you or not.
          </p>

          <div className="contact-grid">
            <div>
              <h4>JDLO &middot; Founder</h4>
              <p>JP / Jordi</p>
              <p>
                <a href="mailto:eljordp@gmail.com">eljordp@gmail.com</a>
              </p>
              <p>
                <a href="https://jdlo.site">jdlo.site</a>
              </p>
            </div>
            <div>
              <h4>JDLO India &middot; Partnerships</h4>
              <p>Kamesh Malhotra</p>
              <p>
                Instagram:{" "}
                <a href="https://instagram.com/k._malhotraa">@k._malhotraa</a>
              </p>
              <p>WhatsApp on request</p>
            </div>
          </div>
        </div>

        <p
          className="muted"
          style={{ marginTop: 36, fontSize: "9.5pt", textAlign: "center" }}
        >
          JDLO &middot; Operations &amp; Growth Systems for Service Businesses &middot; 2026
        </p>

        <div className="footer-mark">JDLO</div>
        <div className="pagenum">09</div>
      </section>
    </main>
  );
}
