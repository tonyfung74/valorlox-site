"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/PLACEHOLDER";

const interests = [
  { value: "", label: "Select your interest area" },
  { value: "municipality", label: "Municipality / Pilot Partner" },
  { value: "investor", label: "Investor" },
  { value: "manufacturing", label: "Manufacturing Partner" },
  { value: "research", label: "Research Partner" },
  { value: "media", label: "Media / Press" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-slate mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-brand-slate placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="org" className="block text-sm font-medium text-brand-slate mb-1.5">
            Organization
          </label>
          <input
            id="org"
            name="organization"
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-brand-slate placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
            placeholder="City of Annapolis"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-slate mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-brand-slate placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
          placeholder="jane@cityof.gov"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-brand-slate mb-1.5">
          Interest Area <span className="text-red-500">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent bg-white"
        >
          {interests.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-slate mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-brand-slate placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent resize-none"
          placeholder="Tell us about your site, flooding challenges, or investment interest..."
        />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm">
          <CheckCircle size={18} className="shrink-0" />
          Thank you! We&apos;ll be in touch within 2 business days.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          <AlertCircle size={18} className="shrink-0" />
          Something went wrong. Please email us directly at{" "}
          <a href="mailto:contact@valorlox.com" className="underline">
            contact@valorlox.com
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-dark text-white font-semibold px-7 py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send size={16} />
      </button>
    </form>
  );
}
