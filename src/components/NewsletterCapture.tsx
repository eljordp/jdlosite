"use client";

import { useState } from "react";
import { saveVisitor } from "@/lib/visitor";

export default function NewsletterCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "newsletter",
          name: "Subscriber",
          email,
          message: "Newsletter signup from footer",
        }),
      });
      saveVisitor({ email });
    } catch {
      // silently fail
    }
    setStatus("sent");
    setEmail("");
  };

  if (status === "sent") {
    return <p className="text-text-muted text-[13px]">You&apos;re in. I&apos;ll keep you posted.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 bg-surface border border-border rounded-lg px-3 py-2 text-text text-[13px] placeholder:text-text-muted/50 focus:outline-none focus:border-text/30 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="shrink-0 bg-text text-bg text-[12px] font-medium px-4 py-2 rounded-lg hover:bg-text/90 transition-colors"
      >
        {status === "sending" ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
