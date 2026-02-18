"use client";

import { useState } from "react";

interface LeadFormProps {
  type: "student" | "business" | "mentorship" | "careers";
  buttonText?: string;
}

export default function LeadForm({
  type,
  buttonText = "Submit Application",
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to backend/CRM/email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border p-12 text-center">
        <h3 className="font-serif text-2xl mb-3">Received.</h3>
        <p className="text-text-secondary text-sm">
          {type === "business"
            ? "Our team will reach out within 24 hours to schedule a call."
            : type === "mentorship"
            ? "We'll review your application and be in touch."
            : type === "careers"
            ? "We'll review and reach out if there's a fit."
            : "You're on the list. We'll be in touch."}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-border px-4 py-3.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-border-hover transition-colors";

  const labelClass = "block text-[13px] text-text-secondary mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className={inputClass}
          />
        </div>
      </div>

      {type === "business" && (
        <>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Company *</label>
              <input
                type="text"
                name="company"
                placeholder="Your company name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Team Size *</label>
              <select name="teamSize" required className={inputClass}>
                <option value="">Select team size</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-200">51–200</option>
                <option value="200+">200+</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Industry *</label>
              <select name="industry" required className={inputClass}>
                <option value="">Select industry</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing / Agency</option>
                <option value="ecommerce">E-commerce</option>
                <option value="healthcare">Healthcare</option>
                <option value="real-estate">Real Estate</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Current AI Usage</label>
              <select name="aiUsage" className={inputClass}>
                <option value="">How much does your team use AI?</option>
                <option value="none">Not at all</option>
                <option value="basic">Basic tools (ChatGPT, etc.)</option>
                <option value="moderate">Some workflows automated</option>
                <option value="advanced">Heavily integrated</option>
              </select>
            </div>
          </div>
        </>
      )}

      {type === "mentorship" && (
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Where are you at with AI? *</label>
            <select name="experience" required className={inputClass}>
              <option value="">Select your level</option>
              <option value="beginner">Just getting started</option>
              <option value="intermediate">Using AI tools daily</option>
              <option value="advanced">Building AI products/systems</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Primary Goal *</label>
            <select name="goal" required className={inputClass}>
              <option value="">What are you trying to achieve?</option>
              <option value="career">Land an AI role</option>
              <option value="business">Grow my business with AI</option>
              <option value="skills">Master AI skills</option>
              <option value="build">Build an AI product</option>
            </select>
          </div>
        </div>
      )}

      {type === "careers" && (
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Role Interest *</label>
            <select name="role" required className={inputClass}>
              <option value="">What role interests you?</option>
              <option value="sales">Sales</option>
              <option value="content">Content</option>
              <option value="community">Community</option>
              <option value="operations">Operations</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>LinkedIn (optional)</label>
            <input
              type="text"
              name="linkedin"
              placeholder="Your LinkedIn URL"
              className={inputClass}
            />
          </div>
        </div>
      )}

      <div>
        <label className={labelClass}>
          {type === "business"
            ? "What's your biggest challenge right now? *"
            : type === "mentorship"
            ? "Why do you want mentorship? *"
            : type === "careers"
            ? "Why do you want to join? *"
            : "Anything else? (optional)"}
        </label>
        <textarea
          name="message"
          placeholder={
            type === "business"
              ? "Tell us about your team and what you're trying to solve"
              : type === "mentorship"
              ? "What are your goals and what's holding you back?"
              : type === "careers"
              ? "What skills do you bring and why this team?"
              : "Share any additional context..."
          }
          rows={4}
          required={type !== "student"}
          className={inputClass + " resize-none"}
        />
      </div>

      {type === "business" && (
        <div>
          <label className={labelClass}>How did you hear about us?</label>
          <input
            type="text"
            name="referral"
            placeholder="e.g. Referral, social media, etc."
            className={inputClass}
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full border border-accent/30 text-accent text-[13px] tracking-[0.15em] py-4 hover:bg-accent/5 transition-all"
      >
        {buttonText} &rarr;
      </button>
    </form>
  );
}
