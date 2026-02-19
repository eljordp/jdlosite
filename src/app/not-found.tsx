import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import { GlowLink } from "@/components/GlowButton";

export default function NotFound() {
  return (
    <main className="cursor-none min-h-screen flex flex-col items-center justify-center px-6 relative">
      <CustomCursor />
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">JDLO</Link>
        </div>
      </nav>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="max-w-[480px] w-full text-center relative z-10">
        <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6">404</p>
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.05em] leading-[0.92] mb-6">
          Wrong
          <br />
          <span className="gradient-text-blue">turn.</span>
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-[340px] mx-auto">
          This page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlowLink href="/">Back to Home</GlowLink>
          <Link href="/quiz" className="ghost-btn">Take the Quiz</Link>
        </div>
      </div>
    </main>
  );
}
