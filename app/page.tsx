import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans space-y-10">
      <section className="grid gap-10 md:grid-cols-[1.4fr_1fr] items-start mt-6">
          <div className="space-y-6 text-left md:order-1">
            <p className="text-sm text-yellow-400/90 font-medium">Online IT support</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
              Take control of your clients&apos; devices remotely
              <span className="block text-yellow-400 mt-2">
                using your own remote tool from networkzone
              </span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl">
              Save time and deliver professional IT support from anywhere. Your clients visit the
              website, download the remote tool, start a session, and you securely connect to fix
              the issue.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-start gap-3 mt-4">
              <Link
                href="/request-remote"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400 px-6 py-2.5 text-sm font-medium text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
              >
                Request a remote session
              </Link>
            
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition-colors"
              >
                Download remote tool
              </Link>
            </div>

            <div className="mt-6 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-xs text-yellow-400/80 mb-1">Built for small businesses</p>
                <p className="leading-relaxed">
                  Perfect for pharmacies, accounting offices, startups, and retail shops that need
                  reliable IT support without hiring a full-time in-house engineer.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-xs text-yellow-400/80 mb-1">Secure remote access</p>
                <p className="leading-relaxed">
                  Start a secure remote session, view the user&apos;s screen, and walk through the fix
                  step by step using the networkzone remote tool.
                </p>
              </div>
            </div>
          </div>

          <div className="md:order-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_0_120px_-40px_rgba(250,204,21,0.8)]">
              <p className="text-xs font-medium text-yellow-400 mb-4 text-left">
                Example client screen inside networkzone
              </p>
              <div className="rounded-xl border border-zinc-800 bg-black/60 p-4 text-xs text-zinc-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">CLIENT ID</span>
                  <span className="font-mono text-sm">NZ-9482-1130</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">Status</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300 border border-emerald-500/40">
                    Online · waiting for technician
                  </span>
                </div>
                <div className="h-px bg-zinc-800" />
                <div className="space-y-1">
                  <p className="text-[11px] text-zinc-400">Client steps:</p>
                  <ol className="list-decimal list-inside space-y-0.5 text-[11px] text-zinc-300 text-left">
                    <li>Download the networkzone tool from the website.</li>
                    <li>Open the tool and share your Client ID.</li>
                    <li>Wait for the technician to connect and start the session.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-start">
        <div className="space-y-4 text-left">
          <h2 className="text-lg md:text-xl font-semibold text-zinc-50">How networkzone works</h2>
          <ol className="space-y-3 text-sm text-zinc-300 list-decimal list-inside">
            <li>
              <span className="font-medium text-zinc-50">Client downloads the tool.</span> They go to
              your website and download the networkzone remote tool for Windows.
            </li>
            <li>
              <span className="font-medium text-zinc-50">Client shares their Client ID.</span> They
              open the tool, read the Client ID, and send it to you through the request form.
            </li>
            <li>
              <span className="font-medium text-zinc-50">You connect and fix the issue.</span> You
              start a secure remote session, see their screen, and solve the problem while they
              watch.
            </li>
          </ol>
        </div>

        <div className="space-y-3 text-left text-sm text-zinc-300">
          <h3 className="text-sm font-semibold text-zinc-50">Who is this for?</h3>
          <p>
            networkzone is ideal for solo IT engineers and small IT teams who support multiple
            clients and want a simple, repeatable way to start remote sessions.
          </p>
          <p>
            Instead of sending random remote links every time, you have a single place where
            clients download the tool and request a session, all under your own brand.
          </p>
        </div>
      </section>
    </div>
  );
}
