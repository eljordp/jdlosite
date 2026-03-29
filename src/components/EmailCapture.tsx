"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "audit",
          name: name || "Visitor",
          email,
          message: "Requested free website audit from homepage",
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="text-center py-8">
        <p className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-semibold tracking-[-0.02em] mb-2">
          Check your inbox.
        </p>
        <p className="text-text-secondary text-[14px]">
          I&apos;ll send your free audit within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-[520px]">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 min-w-0 bg-surface border border-border rounded-xl px-4 py-3 text-text text-[15px] placeholder:text-text-muted/50 focus:outline-none focus:border-text/30 transition-colors min-h-[48px]"
      />
      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 bg-surface border border-border rounded-xl px-4 py-3 text-text text-[15px] placeholder:text-text-muted/50 focus:outline-none focus:border-text/30 transition-colors min-h-[48px]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="magnetic-btn shrink-0 !py-3 !px-6 !text-[14px]"
      >
        <span className="relative z-10">
          {status === "sending" ? "Sending..." : "Get Free Audit"}
        </span>
      </button>
    </form>
  );
}
