"use client";

import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 flex items-center justify-center px-4 font-sans">
      <main className="w-full max-w-3xl py-12 space-y-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm uppercase tracking-[0.25em] text-yellow-400/80">
              networkzone
            </span>
            <h1 className="text-2xl font-semibold text-zinc-50">Download remote tool</h1>
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
            From here your clients can download the <span className="text-yellow-400">networkzone</span>
            {" "}
            remote tool, which allows you as the technician to access their device securely and fix
            issues remotely.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
            <div className="space-y-1 text-left">
              <p className="text-sm font-medium text-zinc-50">Windows build</p>
              <p className="text-xs text-zinc-400">
                Works with most Windows 10 and Windows 11 machines. This is the first MVP release —
                more platforms will be added later.
              </p>
            </div>
            <a
              href="/networkzone-remote.exe"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
              download
            >
              Download networkzone for Windows
            </a>
          </div>

          <div className="border border-zinc-800 rounded-xl p-4 space-y-3 text-left text-xs text-zinc-300 bg-black/40">
            <p className="text-yellow-400/90 font-medium text-[11px]">Client steps after download</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Download the tool file to your computer.</li>
              <li>Open the file and follow any setup instructions if needed.</li>
              <li>
                When the tool opens, you will see a <span className="text-yellow-300">Client ID</span> for
                your device.
              </li>
              <li>
                Go to the
                {" "}
                <Link
                  href="/request-remote"
                  className="text-yellow-300 underline underline-offset-2"
                >
                  Request remote session
                </Link>
                {" "}
                page and fill in your details along with the Client ID.
              </li>
              <li>Wait for the technician to contact you and start the session.</li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}
