"use client";

import { useState } from "react";
import Link from "next/link";

export default function RequestRemotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitted(false);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/request-remote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit request");
      }

      setSubmitted(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong while submitting your request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-zinc-50 flex items-center justify-center px-4 font-sans">
      <main className="w-full max-w-3xl py-12 space-y-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm uppercase tracking-[0.25em] text-yellow-400/80">
              networkzone
            </span>
            <h1 className="text-2xl font-semibold text-zinc-50">Request remote session</h1>
          </div>
          <Link
            href="/"
            className="text-sm text-zinc-300 hover:text-yellow-400 transition-colors"
          >
            Back to home
          </Link>
        </header>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-6">
          <p className="text-sm text-zinc-200 leading-relaxed text-left">
            Use this form to request a remote support session. After submitting, we&apos;ll review your
            request and contact you to confirm the session time and start the connection to your
            device.
          </p>

          {error ? (
            <div className="rounded-xl border border-red-600/60 bg-red-500/10 p-4 text-left text-sm text-red-200">
              <p className="font-medium mb-1">Could not send your request.</p>
              <p className="text-xs text-red-100/80">{error}</p>
            </div>
          ) : null}

          {submitted ? (
            <div className="rounded-xl border border-emerald-600/60 bg-emerald-500/10 p-4 text-left text-sm text-emerald-200">
              <p className="font-medium mb-1">Your request has been received.</p>
              <p className="text-xs text-emerald-100/80">
                For now, the request is stored only in the browser console. In the next step, we
                will connect it to email or a database so you can track all sessions.
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1 text-left">
                <label className="text-xs text-zinc-300" htmlFor="company">
                  Company / business name
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60"
                  placeholder="Example: Al Salam Pharmacy"
                />
              </div>
              <div className="space-y-1 text-left">
                <label className="text-xs text-zinc-300" htmlFor="name">
                  Contact person name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60"
                  placeholder="Example: Ahmed Mohamed"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1 text-left">
                <label className="text-xs text-zinc-300" htmlFor="phone">
                  Mobile number
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60"
                  placeholder="Example: +20 100 000 0000"
                />
              </div>
              <div className="space-y-1 text-left">
                <label className="text-xs text-zinc-300" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60"
                  placeholder="Example: support@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1 text-left">
                <label className="text-xs text-zinc-300" htmlFor="issueType">
                  Issue type
                </label>
                <select
                  id="issueType"
                  name="issueType"
                  className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60"
                  defaultValue="network"
                >
                  <option value="network">Network / internet issue</option>
                  <option value="windows">Operating system issue</option>
                  <option value="email">Email issue</option>
                  <option value="software">Specific software issue</option>
                  <option value="security">Security / malware issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-1 text-left">
                <label className="text-xs text-zinc-300" htmlFor="priority">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60"
                  defaultValue="normal"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs text-zinc-300" htmlFor="clientId">
                Client ID from the networkzone tool
              </label>
              <input
                id="clientId"
                name="clientId"
                required
                className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60 font-mono"
                placeholder="Example: NZ-1234-5678"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs text-zinc-300" htmlFor="description">
                Short description of the issue
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/60 resize-none"
                placeholder="Describe the problem so the technician can help as quickly as possible"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit request"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
