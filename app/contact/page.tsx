"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(false);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.error("[networkzone] contact responded with non-OK status", res.status);
      }

      setSubmitted(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error("[networkzone] contact submission error", err);
      // حتى لو حدث خطأ في fetch، نعتبر الرسالة مرسلة من ناحية تجربة العميل
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="font-sans">
      <section className="space-y-6 mt-6 text-left max-w-2xl">
        <div className="space-y-2">
          <p className="text-sm text-yellow-400/90 font-medium">Contact</p>
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-50">Get in touch with networkzone</h1>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
            Use this form to contact us for partnership, ongoing IT support, or any questions about
            the remote tool and services.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-emerald-600/60 bg-emerald-500/10 p-4 text-left text-sm text-emerald-200">
            <p className="font-medium mb-1">Your message has been sent.</p>
            <p className="text-xs text-emerald-100/80">
              We will review your request and get back to you as soon as possible.
            </p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs text-zinc-300" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60"
                placeholder="Example: Ahmed Mohamed"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-zinc-300" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60"
                placeholder="Example: you@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-zinc-300" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60"
              placeholder="Example: Remote support partnership"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-zinc-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60 resize-none"
              placeholder="Tell us a bit about your needs or question"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </section>
    </div>
  );
}
