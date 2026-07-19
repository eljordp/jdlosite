"use client";

import { useState } from "react";
import { saveVisitor } from "@/lib/visitor";
import { captureSiteEvent } from "@/lib/analytics";

export default function NewsletterCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "newsletter",
          name: "Subscriber",
          email,
          message: "Newsletter signup from JDLO Operator Notes",
        }),
      });
      if (!response.ok) throw new Error("Newsletter signup failed");
      saveVisitor({ email });
      captureSiteEvent("newsletter_subscribed", { form: "homepage_operator_notes" });
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return <p className="text-text-muted text-[13px]">You&apos;re in. I&apos;ll keep you posted.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 bg-white border border-white/15 rounded-lg px-4 py-3 text-[#141414] text-[14px] placeholder:text-[#6b6b6b] focus:outline-none focus:ring-2 focus:ring-white/40 transition-shadow min-h-[48px]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="shrink-0 bg-white text-[#141414] text-[13px] font-semibold px-5 py-3 rounded-lg hover:bg-[#ececec] transition-colors min-h-[48px]"
      >
        {status === "sending" ? "..." : "Subscribe"}
      </button>
      </div>
      {status === "error" ? <p className="text-[#ffb4a8] text-[12px]">That didn&apos;t go through. Try again or email eljordp@gmail.com.</p> : null}
    </form>
  );
}
