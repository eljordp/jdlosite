import type { Metadata } from "next";
import IndiaContent from "./IndiaContent";

export const metadata: Metadata = {
  title: "JDLO India — Websites & Systems for Indian Businesses",
  description:
    "We build websites and systems for Indian businesses. Fashion brands, wedding photographers, coaches. WhatsApp-first. Razorpay payments. Built in 2 weeks.",
  openGraph: {
    title: "JDLO India — Websites & Systems for Indian Businesses",
    description:
      "Websites and systems for Indian businesses. WhatsApp-first. Razorpay payments. Built in 2 weeks.",
    url: "https://jdlo.site/india",
  },
};

export default function IndiaPage() {
  return <IndiaContent />;
}
