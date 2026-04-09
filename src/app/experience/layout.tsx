import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JDLO — Enter the Experience",
  description: "Immersive 3D interactive experience. Sites. Systems. AI. Built by Jordan Lopez.",
};

/* Isolated dark layout — no global nav, no PageTransition, no film grain */
export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#040810",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
