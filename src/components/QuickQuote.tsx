"use client";

import { useState } from "react";

const industries = ["Restaurant", "Retail", "E-commerce", "Real Estate", "Agency", "Service Business", "Entertainment", "Other"];
const needs = ["Website", "AI System", "App / Dashboard", "E-commerce Store", "Automation", "Something Custom"];

export default function QuickQuote() {
  const [form, setForm] = useState({ name: "", email: "", industry: "", needs: [] as string[], details: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const toggleNeed = (need: string) => {
    setForm(f => ({
      ...f,
      needs: f.needs.includes(need) ? f.needs.filter(n => n !== need) : [...f.needs, need],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.name) return;
    setStatus("sending");
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "inquiry",
        name: form.name,
        email: form.email,
        service: form.needs.join(", ") || "Not specified",
        message: `Industry: ${form.industry || "Not specified"}. Needs: ${form.needs.join(", ") || "Not specified"}. Details: ${form.details || "None"}`,
        budget: "Quick quote request",
      }),
    });
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] mb-3">Got it.</p>
        <p className="text-text-secondary text-[15px]">I&apos;ll send you a plan + price within 24 hours. Check your inbox.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2">Name</label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text text-[15px] placeholder:text-text-muted/50 focus:outline-none focus:border-text/30 transition-colors min-h-[48px]"
          />
        </div>
        <div>
          <label className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2">Email</label>
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text text-[15px] placeholder:text-text-muted/50 focus:outline-none focus:border-text/30 transition-colors min-h-[48px]"
          />
        </div>
      </div>

      {/* Industry */}
      <div>
        <label className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-3">What kind of business?</label>
        <div className="flex flex-wrap gap-2">
          {industries.map(ind => (
            <button
              key={ind}
              type="button"
              onClick={() => setForm(f => ({ ...f, industry: ind }))}
              className={`px-4 py-2 rounded-full text-[13px] border transition-all duration-200 ${
                form.industry === ind
                  ? "bg-text text-bg border-text"
                  : "border-border text-text-muted hover:text-text hover:border-text/30"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* What do you need */}
      <div>
        <label className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-3">What do you need? <span className="normal-case">(pick all that apply)</span></label>
        <div className="flex flex-wrap gap-2">
          {needs.map(need => (
            <button
              key={need}
              type="button"
              onClick={() => toggleNeed(need)}
              className={`px-4 py-2 rounded-full text-[13px] border transition-all duration-200 ${
                form.needs.includes(need)
                  ? "bg-text text-bg border-text"
                  : "border-border text-text-muted hover:text-text hover:border-text/30"
              }`}
            >
              {need}
            </button>
          ))}
        </div>
      </div>

      {/* Details */}
      <div>
        <label className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2">Anything else? <span className="normal-case">(optional)</span></label>
        <textarea
          rows={3}
          placeholder="Tell me about your project..."
          value={form.details}
          onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
          className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text text-[15px] placeholder:text-text-muted/50 focus:outline-none focus:border-text/30 transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="magnetic-btn w-full sm:w-auto !py-3.5 !px-10"
      >
        <span className="relative z-10">
          {status === "sending" ? "Sending..." : "Get My Free Quote"}
        </span>
      </button>
      <p className="text-text-muted text-[12px]">
        Or DM me directly: <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">@jdlo</a>
      </p>
    </form>
  );
}
