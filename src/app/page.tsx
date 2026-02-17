import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-green text-sm font-bold tracking-wider">
            JDLO
          </span>
          <span className="text-border-bright">|</span>
          <span className="text-text-dim text-xs font-mono">SYS.ONLINE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-text-dim">
          <a href="#ops" className="hover:text-text transition-colors">
            [OPERATIONS]
          </a>
          <a href="#paths" className="hover:text-text transition-colors">
            [PROGRAMS]
          </a>
          <a href="#stack" className="hover:text-text transition-colors">
            [STACK]
          </a>
          <Link
            href="#paths"
            className="border border-green/30 text-green px-4 py-1.5 hover:bg-green/10 transition-colors"
          >
            ENTER →
          </Link>
        </div>
        <Link
          href="#paths"
          className="md:hidden border border-green/30 text-green px-3 py-1 text-xs font-mono hover:bg-green/10 transition-colors"
        >
          ENTER →
        </Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center relative grid-bg">
      {/* Corner decorations */}
      <div className="absolute top-20 left-6 font-mono text-text-dim text-[10px] hidden md:block">
        <p>LAT 21.3069° N</p>
        <p>LON 157.8583° W</p>
        <p className="mt-2 text-green/40">/// ACTIVE</p>
      </div>
      <div className="absolute top-20 right-6 font-mono text-text-dim text-[10px] text-right hidden md:block">
        <p>BUILD 2.0.26</p>
        <p>SECTOR: AI.EDU</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-20">
        <div className="animate-in delay-1">
          <p className="font-mono text-green text-xs tracking-[0.3em] mb-6">
            {'>'} JORDAN LOPEZ // AI OPERATOR
          </p>
        </div>

        <h1 className="text-4xl md:text-7xl font-black leading-[0.95] mb-8 animate-in delay-2">
          I teach people &<br />
          businesses how to<br />
          <span className="text-green">actually use AI.</span>
        </h1>

        <div className="max-w-xl animate-in delay-3">
          <p className="text-text-mid text-lg leading-relaxed mb-4">
            Not theory. Not hype. The real systems, workflows, and skills that
            are making people dangerous right now.
          </p>
          <p className="text-text-dim text-sm leading-relaxed">
            Courses for individuals. Training for teams. Mentorship for people
            who want to move fast. I built the operation — now I&apos;m showing
            others how.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-10 animate-in delay-4">
          <a
            href="#paths"
            className="bg-green text-bg font-mono font-bold text-sm px-8 py-3.5 hover:bg-green/90 transition-colors text-center"
          >
            SEE PROGRAMS →
          </a>
          <a
            href="#ops"
            className="border border-border-bright text-text-mid font-mono text-sm px-8 py-3.5 hover:border-text-dim hover:text-text transition-colors text-center"
          >
            HOW IT WORKS
          </a>
        </div>

        {/* Terminal line */}
        <div className="mt-20 border-t border-border pt-6 font-mono text-xs text-text-dim animate-in delay-5">
          <span className="text-green">$</span> jdlo --status{" "}
          <span className="text-text-mid">
            → courses: building | mentorship: open | consulting: booking
          </span>
        </div>
      </div>
    </section>
  );
}

function Operations() {
  return (
    <section id="ops" className="py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="w-2 h-2 bg-green" />
          <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
            THE OPERATION
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              This isn&apos;t a one-man<br />
              YouTube channel.
            </h3>
            <p className="text-text-mid leading-relaxed">
              I have a head of sales, a team managing outreach, and an
              operation built to deliver. When you work with me, you&apos;re
              plugging into a system — not watching a course and hoping for
              the best.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                role: "FOUNDER / INSTRUCTOR",
                name: "Jordan Lopez",
                status: "active",
              },
              {
                role: "HEAD OF SALES",
                name: "On team",
                status: "active",
              },
              {
                role: "SALES & OUTREACH TEAM",
                name: "Active reps",
                status: "active",
              },
              {
                role: "OPERATIONS",
                name: "Management layer",
                status: "active",
              },
            ].map((member) => (
              <div
                key={member.role}
                className="flex items-center justify-between border border-border p-4 hover:border-border-bright transition-colors"
              >
                <div>
                  <p className="font-mono text-[10px] text-green tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-mid mt-1">{member.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />
                  <span className="font-mono text-[10px] text-text-dim">
                    {member.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            {
              num: "01",
              title: "Learn",
              desc: "Self-paced AI courses that teach you what actually works. Prompt engineering, automation, building with AI.",
            },
            {
              num: "02",
              title: "Build",
              desc: "Apply it. Projects, systems, workflows. You don't just learn — you leave with something that works.",
            },
            {
              num: "03",
              title: "Scale",
              desc: "Mentorship and consulting to take it further. Whether that's a career, a business, or a team.",
            },
          ].map((step) => (
            <div key={step.num} className="bg-bg p-10">
              <span className="font-mono text-green text-xs">{step.num}</span>
              <h4 className="text-2xl font-bold mt-3 mb-4">{step.title}</h4>
              <p className="text-text-dim text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Paths() {
  return (
    <section id="paths" className="py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-green" />
          <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
            SELECT PROGRAM
          </h2>
        </div>
        <p className="text-3xl md:text-4xl font-bold mb-16">
          Where are you at?
        </p>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            {
              tag: "INDIVIDUAL",
              title: "AI Course",
              desc: "Self-paced. Learn prompt engineering, automation, and how to build with AI. For students, career switchers, and anyone who wants to stop being behind.",
              features: [
                "Video modules + projects",
                "Private community",
                "Certificate on completion",
              ],
              cta: "Join Waitlist",
              href: "/students",
            },
            {
              tag: "ENTERPRISE",
              title: "Team Training & Consulting",
              desc: "We audit your workflows, train your team, and implement AI systems that actually save time and money. Your sales team talks to our sales team.",
              features: [
                "Custom AI audit",
                "Team training sessions",
                "Implementation support",
              ],
              cta: "Book a Call",
              href: "/businesses",
            },
            {
              tag: "HIGH-TICKET",
              title: "1-on-1 Mentorship",
              desc: "Direct access to me. Weekly calls, personalized roadmap, async support. For people who are serious and want to move at 10x speed.",
              features: [
                "Weekly 1-on-1 calls",
                "Custom AI roadmap",
                "Direct message access",
              ],
              cta: "Apply",
              href: "/mentorship",
            },
          ].map((path) => (
            <div
              key={path.tag}
              className="bg-bg p-10 flex flex-col group"
            >
              <span className="font-mono text-[10px] text-green tracking-wider mb-4">
                {path.tag}
              </span>
              <h3 className="text-2xl font-bold mb-4">{path.title}</h3>
              <p className="text-text-dim text-sm leading-relaxed mb-8 flex-grow">
                {path.desc}
              </p>
              <ul className="space-y-2 mb-8">
                {path.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-text-mid font-mono"
                  >
                    <span className="text-green text-[10px]">→</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={path.href}
                className="border border-green/30 text-green font-mono text-sm py-3 text-center hover:bg-green/10 transition-colors"
              >
                {path.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-green" />
          <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
            WHAT YOU&apos;LL LEARN
          </h2>
        </div>
        <p className="text-3xl md:text-4xl font-bold mb-16">
          The AI stack that matters.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {[
            "ChatGPT & Claude",
            "Prompt Engineering",
            "AI Automation",
            "AI Agents",
            "API Integrations",
            "Workflow Design",
            "AI for Sales",
            "AI for Content",
            "No-Code AI Tools",
            "Custom GPTs",
            "AI Strategy",
            "Building w/ AI",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-bg p-6 hover:bg-surface transition-colors group"
            >
              <p className="text-sm text-text-mid group-hover:text-text transition-colors font-mono">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-green" />
              <span className="font-mono text-xs tracking-[0.3em] text-text-dim">
                CAREERS
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Want to work with me?
            </h3>
            <p className="text-text-dim leading-relaxed mb-6">
              I&apos;m building a team of people who are hungry and want to be
              at the front of AI. If that&apos;s you, I want to hear from you.
            </p>
            <Link
              href="/careers"
              className="inline-block border border-green/30 text-green font-mono text-sm px-6 py-3 hover:bg-green/10 transition-colors"
            >
              VIEW OPEN ROLES →
            </Link>
          </div>
          <div className="space-y-3">
            {["Sales", "Content", "Community", "Operations"].map((dept) => (
              <div
                key={dept}
                className="flex items-center justify-between border border-border p-4 hover:border-border-bright transition-colors"
              >
                <span className="font-mono text-sm text-text-mid">{dept}</span>
                <span className="font-mono text-[10px] text-green">
                  HIRING
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-mono text-green text-xs tracking-[0.3em] mb-6">
          {'>'} READY?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          The people learning AI now<br />
          are the ones running things next.
        </h2>
        <p className="text-text-dim mb-10">
          Your move.
        </p>
        <a
          href="#paths"
          className="inline-block bg-green text-bg font-mono font-bold text-sm px-10 py-4 hover:bg-green/90 transition-colors"
        >
          GET STARTED →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-green text-sm font-bold">JDLO</span>
            <span className="text-border-bright">|</span>
            <span className="font-mono text-text-dim text-[10px]">
              AI EDUCATION & OPS
            </span>
          </div>
          <div className="flex gap-6 font-mono text-[11px] text-text-dim">
            <a
              href="https://instagram.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              IG
            </a>
            <a
              href="https://twitter.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              X
            </a>
            <Link href="/careers" className="hover:text-text transition-colors">
              CAREERS
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center font-mono text-[10px] text-text-dim">
          &copy; {new Date().getFullYear()} JDLO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Operations />
      <Paths />
      <Stack />
      <Careers />
      <CTA />
      <Footer />
    </main>
  );
}
