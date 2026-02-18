import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="text-sm font-medium tracking-[0.2em]">JDLO</span>
        <div className="hidden md:flex items-center gap-10 text-[13px] text-text-secondary">
          <a href="#about" className="hover:text-text transition-colors">
            About
          </a>
          <a href="#programs" className="hover:text-text transition-colors">
            Programs
          </a>
          <a href="#faq" className="hover:text-text transition-colors">
            FAQ
          </a>
          <Link
            href="#apply"
            className="text-text hover:text-accent transition-colors"
          >
            Apply
          </Link>
        </div>
        <Link
          href="#apply"
          className="md:hidden text-[13px] text-text"
        >
          Apply
        </Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      <div className="max-w-3xl">
        <h1 className="font-serif text-5xl md:text-8xl font-medium leading-[1.05] mb-8 animate-in delay-1">
          Learn AI.<br />
          Build with AI.<br />
          Win with AI.
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-lg mx-auto mb-12 animate-in delay-2">
          Courses, mentorship, and consulting for people
          who are serious about it.
        </p>
        <a
          href="#programs"
          className="inline-block border border-accent/30 text-accent text-[13px] tracking-[0.15em] px-10 py-4 hover:bg-accent/5 transition-all animate-in delay-3"
        >
          EXPLORE PROGRAMS
        </a>
      </div>

      {/* Video slot */}
      <div className="mt-20 w-full max-w-4xl animate-in delay-4">
        <div className="aspect-video bg-surface border border-border flex items-center justify-center">
          <div className="text-center">
            <p className="text-text-muted text-sm mb-2">
              Your intro video goes here
            </p>
            <p className="text-text-muted text-xs">
              Replace this div with an iframe or video element
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoGrid() {
  return (
    <section className="py-4 px-4">
      <div className="photo-grid grid grid-cols-3 md:grid-cols-5 gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="aspect-[4/5] bg-surface border border-border flex items-center justify-center"
          >
            <span className="text-text-muted text-xs">Photo {i}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-10 animate-in">
          Who I Am
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed mb-8">
          I&apos;m Jordan Lopez. I build AI systems, lead teams, and help
          businesses integrate AI into their operations. I&apos;ve built the
          infrastructure — sales team, management, content — and now
          I&apos;m making the knowledge accessible.
        </p>
        <p className="text-text-secondary leading-relaxed">
          This isn&apos;t a course from someone who read about AI.
          This is from someone who runs on it every day.
        </p>
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          What I Do
        </h2>
        <p className="font-serif italic text-2xl text-accent mb-16">
          AI knowledge into real leverage.
        </p>
        <div className="grid md:grid-cols-3 gap-16 text-center">
          {[
            {
              title: "Educate",
              desc: "Courses and training that teach what actually works right now.",
            },
            {
              title: "Mentor",
              desc: "1-on-1 guidance for people who want to move faster than everyone else.",
            },
            {
              title: "Consult",
              desc: "AI implementation for businesses that want to stop leaving money on the table.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="py-32">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-6">
          Programs
        </h2>
        <p className="text-text-secondary text-center mb-20 max-w-lg mx-auto">
          Three ways to work with me, depending on where you&apos;re at.
        </p>

        <div className="space-y-px">
          {[
            {
              label: "AI Course",
              audience: "For individuals",
              desc: "Self-paced. Learn prompt engineering, automation, and building with AI. Join the waitlist for early access.",
              href: "/students",
              cta: "Join Waitlist",
            },
            {
              label: "Team Training & Consulting",
              audience: "For businesses",
              desc: "We audit your workflows, train your team, and implement AI systems that save real time and money.",
              href: "/businesses",
              cta: "Book a Call",
            },
            {
              label: "1-on-1 Mentorship",
              audience: "For serious individuals",
              desc: "Direct access to me. Weekly calls, custom roadmap, async support. Limited spots.",
              href: "/mentorship",
              cta: "Apply",
            },
          ].map((program) => (
            <Link
              key={program.label}
              href={program.href}
              className="block border border-border hover:border-border-hover p-10 md:p-12 transition-all group hover:bg-surface/50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-2">
                    {program.audience}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-3">
                    {program.label}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-lg">
                    {program.desc}
                  </p>
                </div>
                <span className="text-text-muted text-sm group-hover:text-text transition-colors whitespace-nowrap">
                  {program.cta} &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoGrid2() {
  return (
    <section className="py-4 px-4">
      <div className="photo-grid grid grid-cols-3 md:grid-cols-5 gap-1">
        {[6, 7, 8, 9, 10].map((i) => (
          <div
            key={i}
            className="aspect-[4/5] bg-surface border border-border flex items-center justify-center"
          >
            <span className="text-text-muted text-xs">Photo {i}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-32">
      <div className="max-w-2xl mx-auto px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-20">
          Questions
        </h2>
        <div className="space-y-px">
          {[
            {
              q: "Who is this for?",
              a: "Students who want to break into AI, professionals who want to level up, and businesses that want to integrate AI into their operations.",
            },
            {
              q: "What makes this different from other AI courses?",
              a: "I'm not a content creator who read about AI. I run businesses on it. You're learning from someone in the trenches, not the sidelines.",
            },
            {
              q: "How does the mentorship work?",
              a: "Weekly 1-on-1 calls, a custom roadmap based on your goals, and direct message access between sessions. You apply, and if it's a fit, we start.",
            },
            {
              q: "What if I'm a complete beginner?",
              a: "The course is designed to take you from zero. The mentorship meets you where you're at. Either way, you'll move faster than trying to figure it out alone.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group border border-border hover:border-border-hover transition-colors"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-[15px]">{item.q}</span>
                <span className="text-text-muted group-open:rotate-45 transition-transform text-xl ml-4">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-4">
          Careers
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Want to work with me?
        </h2>
        <p className="text-text-secondary mb-10 max-w-md mx-auto">
          Building a team of hungry, talented people who want to be
          at the forefront of AI education.
        </p>
        <Link
          href="/careers"
          className="inline-block border border-border text-text-secondary text-[13px] tracking-[0.15em] px-8 py-3.5 hover:border-border-hover hover:text-text transition-all"
        >
          VIEW OPEN ROLES
        </Link>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section id="apply" className="py-32">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <h2 className="font-serif text-4xl md:text-6xl mb-6">
          If you&apos;re serious about AI,
        </h2>
        <p className="font-serif italic text-2xl text-accent mb-4">
          let&apos;s talk.
        </p>
        <div className="divider max-w-xs mx-auto my-12" />
        <p className="text-text-secondary mb-10">
          Pick the program that fits you and apply.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/students"
            className="border border-border text-text-secondary text-[13px] tracking-[0.15em] px-8 py-3.5 hover:border-border-hover hover:text-text transition-all"
          >
            COURSE
          </Link>
          <Link
            href="/businesses"
            className="border border-border text-text-secondary text-[13px] tracking-[0.15em] px-8 py-3.5 hover:border-border-hover hover:text-text transition-all"
          >
            CONSULTING
          </Link>
          <Link
            href="/mentorship"
            className="border border-accent/30 text-accent text-[13px] tracking-[0.15em] px-8 py-3.5 hover:bg-accent/5 transition-all"
          >
            MENTORSHIP
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="divider mb-12" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm tracking-[0.2em] mb-1">JDLO</p>
            <p className="text-text-muted text-xs">
              AI Education & Mentorship
            </p>
          </div>
          <div className="flex gap-8 text-[13px] text-text-muted">
            <a
              href="https://instagram.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              X
            </a>
          </div>
        </div>
        <p className="text-center text-text-muted text-[11px] mt-10">
          &copy; {new Date().getFullYear()} JDLO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PhotoGrid />
      <About />
      <div className="divider max-w-2xl mx-auto" />
      <WhatIDo />
      <Programs />
      <PhotoGrid2 />
      <FAQ />
      <Careers />
      <Apply />
      <Footer />
    </main>
  );
}
