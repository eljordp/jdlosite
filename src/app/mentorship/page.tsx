import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";

export default function MentorshipPage() {
  return (
    <PageShell ctaText="Apply" ctaHref="#apply">
      <section className="min-h-[70vh] flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6 animate-in delay-1">
            1-on-1 Mentorship
          </p>
          <h1 className="font-serif text-4xl md:text-7xl leading-[1.05] mb-8 animate-in delay-2">
            Skip the learning curve.
          </h1>
          <p className="text-text-secondary text-lg max-w-lg mx-auto animate-in delay-3">
            Direct access to me. Personalized roadmap, weekly calls,
            and accountability. For people who are serious.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-20">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 gap-px">
            {[
              { title: "Weekly 1-on-1 Calls", desc: "60 minutes. We work through your challenges, review progress, plan next moves." },
              { title: "Custom AI Roadmap", desc: "A personalized plan based on your goals — career, business, or project." },
              { title: "Direct Access", desc: "Message me between calls. Get answers and feedback so you're never stuck." },
              { title: "Accountability", desc: "Weekly goals, progress tracking, honest feedback. I push you to move faster." },
            ].map((item) => (
              <div key={item.title} className="border border-border p-8 hover:border-border-hover transition-colors">
                <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="font-serif text-3xl text-center mb-12">
            This is for you if...
          </h2>
          <div className="space-y-px">
            {[
              "You're serious about mastering AI and willing to put in the work",
              "You want personalized guidance, not generic courses",
              "You're building something and need an edge",
              "You value speed over figuring it out alone",
              "You want someone in your corner who's actually doing this",
            ].map((item) => (
              <div key={item} className="border border-border p-5 flex items-center gap-4">
                <span className="text-text-muted text-xs">&rarr;</span>
                <p className="text-text-secondary text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-32">
        <div className="max-w-lg mx-auto px-8">
          <h2 className="font-serif text-3xl text-center mb-4">
            Apply for Mentorship
          </h2>
          <p className="text-text-secondary text-sm text-center mb-12">
            Spots are limited. Tell me about yourself and what
            you&apos;re trying to achieve.
          </p>
          <LeadForm type="mentorship" buttonText="Submit Application" />
        </div>
      </section>
    </PageShell>
  );
}
