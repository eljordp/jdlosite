"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const REF_KEY = "jdlo_ref";

export function getReferralCode(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(REF_KEY);
}

export default function ReferralCapture() {
  const searchParams = useSearchParams();
  const [showBanner, setShowBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const refFromUrl = searchParams.get("ref");

    if (refFromUrl) {
      // Store referral code
      localStorage.setItem(REF_KEY, refFromUrl);

      // Track click
      fetch("/api/referral/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: refFromUrl, event: "click" }),
      }).catch(() => {});

      setShowBanner(true);
    } else {
      // Check if we already have a stored ref
      const stored = localStorage.getItem(REF_KEY);
      if (stored) setShowBanner(true);
    }

    // Check if already dismissed this session
    if (sessionStorage.getItem("jdlo_ref_dismissed")) {
      setDismissed(true);
    }
  }, [searchParams]);

  if (!showBanner || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] px-4 pb-4 pointer-events-none">
      <div className="max-w-[500px] mx-auto pointer-events-auto">
        <div className="bg-[#111] border border-accent/30 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 shadow-lg shadow-accent/5">
          <div>
            <p className="text-text text-[14px] font-semibold">
              You&apos;ve got 10% off
            </p>
            <p className="text-text-muted text-[12px] mt-0.5">
              Use code <span className="text-accent font-mono font-bold">JDLO10</span> at checkout
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/courses"
              className="px-4 py-2 rounded-xl text-white text-[12px] font-semibold transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              Browse
            </Link>
            <button
              onClick={() => {
                setDismissed(true);
                sessionStorage.setItem("jdlo_ref_dismissed", "1");
              }}
              className="text-text-muted text-[18px] hover:text-text transition-colors leading-none"
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
