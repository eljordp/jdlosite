import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourse, getAllSlugs } from "@/lib/courses";
import LeadForm from "@/components/LeadForm";
import CustomCursor from "@/components/CustomCursor";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main className="cursor-none min-h-screen relative">
      <CustomCursor />

      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">
            JDLO
          </Link>
          <Link
            href={`/courses/${slug}`}
            className="text-text-muted text-[12px] font-mono hover:text-text transition-colors duration-300"
          >
            ← {course.title}
          </Link>
        </div>
      </nav>

      <div className="pt-12 flex flex-col justify-center min-h-screen px-6 py-20 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-[520px] mx-auto w-full relative z-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
            Apply to Enroll
          </p>
          <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.04em] leading-[1] mb-3">
            {course.title}
          </h1>
          <p className="text-text-muted text-[13px] font-mono mb-10">
            {course.price} · {course.duration} · Enrollment reviewed
          </p>

          <LeadForm type="student" course={course.title} buttonText="Submit Application" />
        </div>
      </div>
    </main>
  );
}
