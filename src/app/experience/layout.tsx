import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JDLO — Enter the Experience",
  description: "Immersive 3D interactive experience. Sites. Systems. AI. Built by Jordan Lopez.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        html, body { background: #060e1c !important; }
        body::after { display: none !important; }
        .page-transition { background: transparent !important; }
      `}</style>
      <div style={{ minHeight: "100vh", background: "transparent" }}>
        {children}
      </div>
    </>
  );
}
