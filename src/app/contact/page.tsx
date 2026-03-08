"use client";

import { useState } from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <PageShell ctaText="Browse Courses" ctaHref="/courses">
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-24">
        <div className="max-w-[480px] w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
            Contact
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[0.95] mb-4">
            Get in touch.
          </h1>
          <p className="text-text-secondary text-[15px] leading-relaxed mb-10">
            Question about a course, interested in working together, or just want to connect — drop a message.
          </p>

          {status === "sent" ? (
            <div className="border border-border rounded-2xl p-8 text-center">
              <div className="text-3xl text-accent mb-4">&#10003;</div>
              <p className="text-text font-medium mb-2">Message sent.</p>
              <p className="text-text-secondary text-[14px]">
                I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text text-[16px] placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 transition-colors min-h-[44px]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text text-[16px] placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 transition-colors min-h-[44px]"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text text-[16px] placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="magnetic-btn w-full mt-2"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-[13px] text-center">
                  Something went wrong. Try emailing{" "}
                  <a href="mailto:eljordp@gmail.com" className="underline">eljordp@gmail.com</a> directly.
                </p>
              )}
              <p className="text-text-muted text-[12px] text-center">
                Or email directly:{" "}
                <a href="mailto:eljordp@gmail.com" className="text-accent hover:underline">
                  eljordp@gmail.com
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}
