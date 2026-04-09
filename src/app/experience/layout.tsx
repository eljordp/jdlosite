import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JDLO — Enter the Experience",
  description: "Immersive 3D interactive experience. Sites. Systems. AI. Built by Jordan Lopez.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*
        Inject a style tag that overrides EVERYTHING that could show a background.
        The <style> tag in the head (via Next.js layout) runs before globals.css
        in priority, so we use !important on everything.
      */}
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            html, body { background: #060e1c !important; }
            body::after, body::before { display: none !important; }
            .page-transition, .page-visible, .page-entering {
              transform: none !important;
              will-change: auto !important;
              background: transparent !important;
            }
          `,
        }}
      />
      {children}
    </>
  );
}
