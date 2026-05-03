import type { Metadata } from "next";
import { Team, AboutKamesh, Roadmap, FinalCTA } from "../sections";

export const metadata: Metadata = {
  title: "About — JDLO India",
  description:
    "Meet the team. JP builds. Kamesh Malhotra runs JDLO India from Jammu (J&K). Long-term plans: Academy, AI WhatsApp tools.",
};

export default function AboutPage() {
  return (
    <>
      <Team />
      <AboutKamesh />
      <Roadmap />
      <FinalCTA />
    </>
  );
}
