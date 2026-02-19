"use client";

import { useEffect } from "react";

/* ── Scroll reveal ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".r");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const reveal: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(32px)",
  transition: "opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)",
};

/* ── Package card ── */
function PackageCard({
  tag,
  title,
  setup,
  monthly,
  note,
  features,
  featured = false,
}: {
  tag: string;
  title: string;
  setup: string;
  monthly: string;
  note: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className="r"
      style={{
        ...reveal,
        background: featured ? "rgba(180,140,80,0.07)" : "rgba(255,250,240,0.02)",
        border: featured ? "1px solid rgba(180,140,80,0.4)" : "1px solid rgba(255,250,240,0.08)",
        borderRadius: 4,
        padding: "3rem 2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.75rem",
        position: "relative",
      }}
    >
      {featured && (
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#b48c50",
          color: "#0d0a06",
          fontSize: "0.6rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          padding: "0.35rem 1.25rem",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          borderRadius: 2,
        }}>
          Recommended
        </div>
      )}

      <span style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: "0.7rem",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color: "#7a6a52",
      }}>
        {tag}
      </span>

      <div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 600,
          color: "#f5f0e8",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
        }}>
          {title}
        </h3>
      </div>

      <div style={{ height: 1, background: "rgba(255,250,240,0.07)" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.2rem,4vw,3rem)",
            fontWeight: 700,
            color: "#b48c50",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>
            {setup}
          </span>
          <span style={{ color: "#7a6a52", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif" }}>
            deployment
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            fontWeight: 500,
            color: featured ? "#b48c50" : "#a89070",
          }}>
            {monthly}
          </span>
          <span style={{ color: "#7a6a52", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif" }}>
            /month — scales with value
          </span>
        </div>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: "#5a4e3a",
          marginTop: "0.25rem",
        }}>
          {note.toUpperCase()}
        </span>
      </div>

      <div style={{ height: 1, background: "rgba(255,250,240,0.07)" }} />

      <ul style={{ display: "flex", flexDirection: "column", gap: "0.9rem", flex: 1 }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "#c8bba8",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "#b48c50", marginTop: 2, fontSize: "0.6rem", flexShrink: 0 }}>◆</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Main ── */
export default function PitchPage() {
  useReveal();

  return (
    <div style={{
      background: "#0d0a06",
      minHeight: "100vh",
      color: "#f5f0e8",
      fontFamily: "'Inter', -apple-system, sans-serif",
      overflowX: "hidden",
    }}>

      {/* Google fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

        .r {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1);
        }

        .addon-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          padding: 1.75rem 0;
          border-bottom: 1px solid rgba(255,250,240,0.07);
          gap: 1rem;
        }
        .addon-row:first-child { border-top: 1px solid rgba(255,250,240,0.07); }

        .pkg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .pkg-grid { grid-template-columns: 1fr; }
        }

        .caps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,250,240,0.07);
        }
        @media (max-width: 700px) {
          .caps-grid { grid-template-columns: 1fr; }
        }

        .stat-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        @media (max-width: 700px) {
          .stat-row { grid-template-columns: repeat(2,1fr); }
        }

        .scale-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        @media (max-width: 700px) {
          .scale-row { grid-template-columns: repeat(2,1fr); }
        }
      `}</style>

      {/* ── Hero ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 clamp(2rem, 6vw, 8rem) clamp(5rem, 12vh, 10rem)",
        position: "relative",
      }}>
        {/* Warm amber glow */}
        <div style={{
          position: "absolute",
          top: "5%",
          right: "0%",
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(180,140,80,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "0%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(120,60,30,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Horizontal rule top */}
        <div style={{
          position: "absolute",
          top: "clamp(2rem,5vh,4rem)",
          left: "clamp(2rem,6vw,8rem)",
          right: "clamp(2rem,6vw,8rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.7rem",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "#5a4e3a",
          }}>
            Confidential
          </span>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.7rem",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "#5a4e3a",
          }}>
            2026
          </span>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.75rem",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "#7a6a52",
            marginBottom: "2rem",
          }}>
            AI Hospitality Robotics
          </p>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(4rem,12vw,11rem)",
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            marginBottom: "3.5rem",
          }}>
            <span style={{ display: "block", color: "#f5f0e8" }}>The robot</span>
            <span style={{ display: "block", color: "#f5f0e8" }}>that runs</span>
            <span style={{ display: "block", color: "#b48c50", fontStyle: "italic" }}>the room.</span>
          </h1>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            maxWidth: 560,
          }}>
            <p style={{
              fontSize: "1.05rem",
              color: "#a89070",
              lineHeight: 1.75,
              fontWeight: 300,
            }}>
              A physical AI robot — permanently deployed in your venue.
              It sees every guest, remembers every face, speaks every language,
              and generates more content than your entire marketing budget.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.65rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#5a4e3a",
              }}>
                Already deployed
              </span>
              <div style={{ height: 1, width: 40, background: "#5a4e3a" }} />
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                color: "#7a6a52",
              }}>
                Westin &nbsp;·&nbsp; Marriott
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ height: 1, background: "rgba(255,250,240,0.07)", margin: "0 clamp(2rem,6vw,8rem)" }} />

      {/* ── Anchor line ── */}
      <section style={{ padding: "4rem clamp(2rem,6vw,8rem)" }}>
        <div className="r" style={{ ...reveal, maxWidth: 800 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.4rem,3vw,2rem)",
            lineHeight: 1.6,
            color: "#c8bba8",
            fontStyle: "italic",
            fontWeight: 400,
          }}>
            "Hotels like the Westin pay{" "}
            <span style={{ color: "#b48c50", fontStyle: "normal", fontWeight: 600 }}>
              $50,000–$70,000
            </span>
            {" "}for a 2–3 week pop-up. A permanent, custom-built deployment in a venue like yours
            is a different conversation entirely."
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ height: 1, background: "rgba(255,250,240,0.07)", margin: "0 clamp(2rem,6vw,8rem)" }} />

      {/* ── Stats ── */}
      <section style={{ padding: "7rem clamp(2rem,6vw,8rem)" }}>
        <p className="r" style={{
          ...reveal,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.7rem",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "#5a4e3a",
          marginBottom: "4rem",
        }}>
          Why it works
        </p>

        <div className="stat-row">
          {[
            { val: "100%", label: "of visitors film it. Every one posts." },
            { val: "∞", label: "Earned media. Zero ad spend required." },
            { val: "24 / 7", label: "Every tasting. Every day. Never misses." },
            { val: "Day 1", label: "Data collection begins immediately." },
          ].map(({ val, label }) => (
            <div className="r" key={val} style={{ ...reveal }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                fontWeight: 600,
                color: "#b48c50",
                lineHeight: 1,
                marginBottom: "0.75rem",
              }}>
                {val}
              </div>
              <p style={{ fontSize: "0.8rem", color: "#7a6a52", lineHeight: 1.6, maxWidth: 180 }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section style={{ padding: "0 0 7rem" }}>
        <div style={{ padding: "0 clamp(2rem,6vw,8rem)", marginBottom: "3rem" }}>
          <p className="r" style={{
            ...reveal,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.7rem",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "#5a4e3a",
            marginBottom: "1.5rem",
          }}>
            Capabilities
          </p>
          <h2 className="r" style={{
            ...reveal,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 600,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "#f5f0e8",
          }}>
            What it actually does.
          </h2>
        </div>

        <div className="caps-grid">
          {[
            {
              n: "I",
              title: "Sees & Remembers",
              desc: "Facial recognition across every visit. Returning guests are recognized instantly — name, preferences, last visit. No venue in wine country has this.",
            },
            {
              n: "II",
              title: "Talks & Engages",
              desc: "Natural conversation. Multiple languages. It knows your wines, your history, your story. It makes jokes. It dances. Every interaction is shareable content.",
            },
            {
              n: "III",
              title: "Collects & Reports",
              desc: "Every interaction logged. What guests ask, what moves them, peak times, demographics. A data layer that didn't exist before.",
            },
            {
              n: "IV",
              title: "Moves & Performs",
              desc: "This is a physical robot in the room. It walks toward guests. It has presence. Phones come out the moment people see it — every time.",
            },
            {
              n: "V",
              title: "Wears Your Brand",
              desc: "Custom costumes, seasonal looks, harvest-specific appearances. The robot is a character. The character is yours.",
            },
            {
              n: "VI",
              title: "Gets Smarter Monthly",
              desc: "New capabilities ship every month. The robot you have in month 12 is dramatically more powerful than the one that arrived on day one.",
            },
          ].map(({ n, title, desc }) => (
            <div
              className="r"
              key={n}
              style={{
                ...reveal,
                background: "#0d0a06",
                padding: "3rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                color: "#5a4e3a",
              }}>
                {n}
              </span>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#f5f0e8",
                lineHeight: 1.1,
              }}>
                {title}
              </h3>
              <p style={{
                fontSize: "0.85rem",
                color: "#7a6a52",
                lineHeight: 1.7,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Packages ── */}
      <section style={{ padding: "7rem clamp(2rem,6vw,8rem)" }}>
        <p className="r" style={{
          ...reveal,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.7rem",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "#5a4e3a",
          marginBottom: "1.5rem",
        }}>
          Deployments
        </p>
        <h2 className="r" style={{
          ...reveal,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2.5rem,6vw,5rem)",
          fontWeight: 600,
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          color: "#f5f0e8",
          marginBottom: "4rem",
        }}>
          Choose your<br />
          <span style={{ color: "#b48c50", fontStyle: "italic" }}>experience.</span>
        </h2>

        <div className="pkg-grid">
          <PackageCard
            tag="Single · 01"
            title="One Robot"
            setup="$100,000"
            monthly="From $5,000"
            note="12-month minimum"
            features={[
              "One full-size AI robot, permanently on-site",
              "Custom AI personality — your brand, your story, your wines",
              "Guest recognition — remembers returning visitors",
              "Real-time data dashboard",
              "Monthly performance reports",
              "Quarterly on-site maintenance",
              "Monthly software upgrades included",
            ]}
          />
          <PackageCard
            tag="Dual · 02"
            title="Two Robots"
            setup="$175,000"
            monthly="From $8,500"
            note="12-month minimum"
            features={[
              "Two robots — greeter and roaming companion",
              "Multi-robot coordination and interaction",
              "Advanced analytics: sentiment, demographics, conversion",
              "Robot-branded social media accounts",
              "Dedicated content strategy from robot interactions",
              "Priority support — on-site within 24 hours",
              "Everything in One Robot, elevated",
            ]}
            featured
          />
          <PackageCard
            tag="Enterprise · 03"
            title="Multi-Location"
            setup="Custom"
            monthly="Custom"
            note="18-month minimum"
            features={[
              "3+ robots across multiple properties",
              "Unified guest platform — one profile across all venues",
              "Cross-location recognition and upselling",
              "Dedicated engineering support",
              "Quarterly executive business reviews",
              "Revenue share structures available",
              "First-mover exclusivity in your market",
            ]}
          />
        </div>

        {/* Rent to own note */}
        <div className="r" style={{
          ...reveal,
          marginTop: "2rem",
          padding: "2rem 2.5rem",
          border: "1px solid rgba(255,250,240,0.07)",
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#5a4e3a",
          }}>
            Rent-to-own available
          </span>
          <p style={{ fontSize: "0.85rem", color: "#7a6a52", lineHeight: 1.6, maxWidth: 620 }}>
            Prefer to own the hardware outright? 36-month structures are available.
            At month 36 the hardware is yours — the AI platform continues on subscription.
            Ask us for terms.
          </p>
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section style={{ padding: "0 clamp(2rem,6vw,8rem) 7rem" }}>
        <p className="r" style={{
          ...reveal,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.7rem",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "#5a4e3a",
          marginBottom: "1.5rem",
        }}>
          Add-ons
        </p>
        <h2 className="r" style={{
          ...reveal,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2.5rem,6vw,5rem)",
          fontWeight: 600,
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          color: "#f5f0e8",
          marginBottom: "4rem",
        }}>
          Stack what<br />
          <span style={{ color: "#b48c50", fontStyle: "italic" }}>you need.</span>
        </h2>

        <div className="r" style={{ ...reveal }}>
          {[
            { name: "Dance Battle Mode", price: "$2,000", desc: "The robot challenges guests to a dance-off. The single most viral feature we offer." },
            { name: "Custom Voice & Personality", price: "$1,500", desc: "Fully bespoke voice — tone, accent, humor. Trained around your brand." },
            { name: "Event Host Mode", price: "$3,000 / event", desc: "The robot MCs private events, harvest parties, corporate tastings. It commands a room." },
            { name: "Seasonal Costume", price: "$1,500 / look", desc: "Harvest season, holidays, special releases — the robot wears the moment." },
            { name: "Multi-Language Pack", price: "$1,000", desc: "5+ languages, culturally aware. Essential for international guests." },
            { name: "Social Content Engine", price: "$2,500", desc: "Robot gets branded accounts. Interaction highlights auto-generated and published." },
            { name: "Deep Data Reports", price: "$2,000", desc: "Quarterly business intelligence: visitor trends, conversion, predictive insights." },
          ].map(({ name, price, desc }) => (
            <div key={name} className="addon-row">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.2rem,2.5vw,1.75rem)",
                  fontWeight: 600,
                  color: "#f5f0e8",
                  letterSpacing: "-0.01em",
                }}>
                  {name}
                </span>
                <span style={{ fontSize: "0.8rem", color: "#5a4e3a", lineHeight: 1.5 }}>
                  {desc}
                </span>
              </div>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1rem",
                color: "#b48c50",
                whiteSpace: "nowrap",
                fontStyle: "italic",
              }}>
                {price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Scaling section ── */}
      <section style={{
        padding: "7rem clamp(2rem,6vw,8rem)",
        background: "rgba(180,140,80,0.03)",
        borderTop: "1px solid rgba(255,250,240,0.06)",
        borderBottom: "1px solid rgba(255,250,240,0.06)",
      }}>
        <p className="r" style={{
          ...reveal,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.7rem",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "#5a4e3a",
          marginBottom: "1.5rem",
        }}>
          How it grows
        </p>
        <h2 className="r" style={{
          ...reveal,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(2.2rem,5vw,4rem)",
          fontWeight: 600,
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          color: "#f5f0e8",
          marginBottom: "4rem",
        }}>
          The monthly scales up.<br />
          <span style={{ color: "#b48c50", fontStyle: "italic" }}>Because the value does too.</span>
        </h2>

        <div className="scale-row">
          {[
            { phase: "Month 1–3", price: "Starting rate", desc: "Robot is live. Data collection begins. Guests start filming immediately." },
            { phase: "Month 4–6", price: "+40%", desc: "Guest memory active. First data reports delivered. Personality tuned from real interactions." },
            { phase: "Month 7–12", price: "+60%", desc: "Custom features live. Social engine running. Seasonal modes activated." },
            { phase: "Month 13+", price: "We renegotiate", desc: "By now the robot is core to your operation. We revisit the deal from a position of proven value." },
          ].map(({ phase, price, desc }) => (
            <div className="r" key={phase} style={{ ...reveal, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.65rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#5a4e3a",
              }}>
                {phase}
              </span>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "2rem",
                fontWeight: 600,
                color: "#b48c50",
                fontStyle: "italic",
              }}>
                {price}
              </span>
              <p style={{ fontSize: "0.8rem", color: "#7a6a52", lineHeight: 1.65 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "10rem clamp(2rem,6vw,8rem)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(180,140,80,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <p className="r" style={{
          ...reveal,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.7rem",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          color: "#5a4e3a",
        }}>
          Let&apos;s talk
        </p>

        <h2 className="r" style={{
          ...reveal,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(3.5rem,10vw,9rem)",
          fontWeight: 600,
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          color: "#f5f0e8",
          position: "relative",
          zIndex: 1,
        }}>
          Be first.<br />
          <span style={{ color: "#b48c50", fontStyle: "italic" }}>Everyone else</span><br />
          will follow.
        </h2>

        <p className="r" style={{
          ...reveal,
          fontSize: "1rem",
          color: "#7a6a52",
          maxWidth: 460,
          lineHeight: 1.75,
          fontWeight: 300,
          position: "relative",
          zIndex: 1,
        }}>
          No other venue in wine country has deployed this. First-mover advantage
          in Napa and Suisun Valley is available right now. It will not be for long.
        </p>

        <div className="r" style={{ ...reveal, position: "relative", zIndex: 1 }}>
          <a
            href="mailto:jordan@jdlo.site"
            style={{
              display: "inline-block",
              padding: "1rem 3rem",
              background: "#b48c50",
              color: "#0d0a06",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "0.85rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 600,
              borderRadius: 2,
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        padding: "2.5rem clamp(2rem,6vw,8rem)",
        borderTop: "1px solid rgba(255,250,240,0.07)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.65rem",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#3a3228",
        }}>
          Confidential — Do Not Distribute
        </span>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          color: "#3a3228",
        }}>
          © 2026 · AI Robotics Partnership
        </span>
      </footer>
    </div>
  );
}
