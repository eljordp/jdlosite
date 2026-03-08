"use client";

import { Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function CheckoutContent() {
  const searchParams = useSearchParams();
  const course = searchParams.get("course") || "";
  const price = searchParams.get("price") || "";
  const amount = searchParams.get("amount") || "0";

  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseName: course,
        price,
        amount: parseInt(amount),
      }),
    });
    const data = await res.json();
    return data.clientSecret;
  }, [course, price, amount]);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <CustomCursor />
      <div className="px-6 py-6">
        <Link
          href={`/courses`}
          className="text-text-secondary text-[13px] font-mono hover:text-accent transition-colors"
        >
          ← Back to courses
        </Link>
      </div>

      <div className="flex-1 max-w-[600px] w-full mx-auto px-4 pb-12">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-text mb-2">
            Enroll in {course}
          </h1>
          <p className="text-text-secondary text-sm">{price}</p>
        </div>

        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ fetchClientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex items-center justify-center">
          <p className="text-text-secondary text-lg">Loading checkout...</p>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
