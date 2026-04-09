import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JDLO — Enter the Experience",
  description: "Immersive 3D interactive experience. Sites. Systems. AI. Built by Jordan Lopez.",
};

/* Isolated dark layout — no global nav, no PageTransition, no film grain */
export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", background: "transparent" }}>
      {children}
    </div>
  );
}
