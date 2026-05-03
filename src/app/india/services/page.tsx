import type { Metadata } from "next";
import { Deliverables, Process, FinalCTA } from "../sections";

export const metadata: Metadata = {
  title: "Services — JDLO India",
  description:
    "What you get with JDLO India: custom websites, Razorpay/UPI checkout, WhatsApp integration, Instagram sync, lead inbox. Live in 5–14 days.",
};

export default function ServicesPage() {
  return (
    <>
      <Deliverables />
      <Process />
      <FinalCTA />
    </>
  );
}
