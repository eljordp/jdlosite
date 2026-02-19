import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Hospitality Robotics — Partnership Deck",
  description: "Confidential partnership deck. AI-powered physical robots for luxury hospitality venues.",
  icons: { icon: "/favicon.ico" },
  robots: { index: false, follow: false },
};

export default function PitchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
