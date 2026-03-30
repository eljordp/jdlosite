"use client";

import { useState, useEffect } from "react";
import PageShell from "@/components/PageShell";

const serviceOptions = [
  "Website",
  "AI System",
  "Sales Operations",
  "Something else",
];

const budgetOptions = [
  "Under $3K",
  "$3K \u2013 $5K",
  "$5K \u2013 $10K",
  "$10K+",
  "Not sure yet",
];

const inputClass =
  "w-full bg-surface border border-border rounded-xl px-4 py-3 text-text text-[16px] placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 transition-colors min-h-[44px]";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    budget: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    const pkg = params.get("package");
    if (product || pkg) {
      const label = (product || pkg || "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      setForm(f => ({ ...f, message: f.message || `Interested in: ${label}` }));
    }
  }, []);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "inquiry",
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          budget: form.budget,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", service: "", message: "", budget: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <PageShell activeSlug="contact">
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Header */}
          <div className="max-w-[620px] mx-auto text-center mb-20">
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] tracking-[-0.03em] leading-[1] mb-6">
              Let&apos;s work together.
            </h1>
            <p className="text-text-secondary text-[17px] leading-relaxed max-w-[440px] mx-auto mb-6">
              Tell me about your project and I&apos;ll get back to you within 24
              hours.
            </p>
            <p className="text-text-muted text-[14px]">
              Want a faster response? <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="text-text font-medium hover:underline">DM me on Instagram @jdlo</a>
            </p>
          </div>

          {/* Form / Success */}
          <div className="max-w-[540px] mx-auto">
            {status === "sent" ? (
              <div className="py-20 text-center">
                <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center mx-auto mb-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] leading-[1.1] mb-4">
                  Got it.
                </h2>
                <p className="text-text-secondary text-[16px] leading-relaxed">
                  I&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2"
                  >
                    What do you need?
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2"
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="What are you building? What problem are you solving?"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="text-text-muted text-[11px] font-mono tracking-wider uppercase block mb-2"
                  >
                    Budget range
                  </label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) =>
                      setForm({ ...form, budget: e.target.value })
                    }
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="magnetic-btn w-full mt-4"
                >
                  {status === "sending" ? "Sending..." : "Send Inquiry"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-[13px] text-center">
                    Something went wrong. Try emailing{" "}
                    <a
                      href="mailto:eljordp@gmail.com"
                      className="underline"
                    >
                      eljordp@gmail.com
                    </a>{" "}
                    directly.
                  </p>
                )}

                {/* Fallback */}
                <p className="text-text-muted text-[13px] text-center pt-2">
                  Or email me directly:{" "}
                  <a
                    href="mailto:eljordp@gmail.com"
                    className="text-accent hover:underline transition-colors"
                  >
                    eljordp@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
