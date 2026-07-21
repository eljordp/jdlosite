import type { Metadata } from "next";
import { Receipts, FinalCTA } from "../sections";

export const metadata: Metadata = {
  title: "Work — JDLO India",
  description:
    "24 live projects verified. Fashion brands, service businesses, e-commerce stores, AI tools. Real receipts from real businesses.",
};

export default function WorkPage() {
  return (
    <>
      <Receipts />
      <FinalCTA />
    </>
  );
}
