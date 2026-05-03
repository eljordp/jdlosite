import type { Metadata } from "next";
import { Pricing, FAQ, FinalCTA } from "../sections";

export const metadata: Metadata = {
  title: "Pricing — JDLO India",
  description:
    "Five tiers from ₹15,000 to ₹5,00,000. Razorpay, UPI, EMI built in. Payment plans available. No hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
