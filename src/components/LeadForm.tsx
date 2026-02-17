"use client";

import { useState } from "react";

interface LeadFormProps {
  type: "student" | "business" | "mentorship" | "careers";
  buttonText?: string;
}

export default function LeadForm({
  type,
  buttonText = "SUBMIT",
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to backend/CRM/email
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-green/30 p-10 text-center">
        <p className="font-mono text-green text-sm mb-2">
          {'>'} SUBMISSION RECEIVED
        </p>
        <p className="text-text-dim text-sm">
          {type === "business"
            ? "Our team will reach out within 24 hours."
            : type === "mentorship"
            ? "We'll review your application and get back to you."
            : type === "careers"
            ? "We'll review and reach out if there's a fit."
            : "You're on the list. We'll be in touch."}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-surface border border-border px-4 py-3 text-sm text-text placeholder:text-text-dim font-mono focus:outline-none focus:border-green/50 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          required
          className={inputClass}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          required
          className={inputClass}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className={inputClass}
      />
      {(type === "business" || type === "careers") && (
        <input
          type="text"
          name="company"
          placeholder={
            type === "careers" ? "LinkedIn (optional)" : "Company name"
          }
          className={inputClass}
        />
      )}
      {type === "mentorship" && (
        <select name="experience" required className={inputClass}>
          <option value="">Where are you at with AI?</option>
          <option value="beginner">Just getting started</option>
          <option value="intermediate">Using AI tools daily</option>
          <option value="advanced">Building AI products/systems</option>
        </select>
      )}
      <textarea
        name="message"
        placeholder={
          type === "business"
            ? "Tell us about your team and goals"
            : type === "mentorship"
            ? "What do you want to achieve?"
            : type === "careers"
            ? "Why do you want to join? What skills do you bring?"
            : "Anything else? (optional)"
        }
        rows={4}
        className={inputClass + " resize-none"}
      />
      <button
        type="submit"
        className="w-full bg-green text-bg font-mono font-bold text-sm py-3.5 hover:bg-green/90 transition-colors"
      >
        {buttonText} →
      </button>
    </form>
  );
}
