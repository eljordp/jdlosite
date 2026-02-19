import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import { courses } from "@/lib/courses";

export default function StudentsPage() {
  return (
    <PageShell ctaText="Take the Quiz" ctaHref="/quiz">
      <section className="min-h-[55vh] flex items-center justify-center text-center relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <p className="text-accent text-[13px] tracking-[0.3em] uppercase mb-6 hero-animate hero-delay-1">
            Courses
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-8 hero-animate hero-delay-2">
            <span className="gradient-text">Pick your</span>
            <br />
            <span className="gradient-text-blue">skill track.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-[480px] mx-auto hero-animate hero-delay-3">
            Five disciplines. Real systems. Every course built on what Jordan uses daily.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-[800px] mx-auto px-6 space-y-3">
          {courses.map((course, i) => (
            <RevealOnScroll key={course.slug} delay={(i % 3) + 1}>
              <Link
                href={`/courses/${course.slug}`}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface/50 p-7 hover:border-border-hover transition-all duration-500"
              >
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold tracking-[-0.02em] mb-1 group-hover:text-accent transition-colors duration-300">
                    {course.title}
                  </h2>
                  <p className="text-text-secondary text-[14px] leading-relaxed">
                    {course.tagline}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-text text-[15px] font-semibold">{course.price}</p>
                  <p className="text-text-muted text-[12px] font-mono">{course.duration}</p>
                </div>
                <span className="text-accent text-lg shrink-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        <div className="text-center mt-14">
          <p className="text-text-muted text-[14px] mb-4">Not sure where to start?</p>
          <Link href="/quiz" className="text-accent text-[14px] hover:underline font-mono">
            Take the skills quiz →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
