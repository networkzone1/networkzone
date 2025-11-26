export default function PricingPage() {
  return (
    <div className="font-sans">
      <section className="space-y-8 mt-6 text-left">
        <div className="space-y-3">
          <p className="text-sm text-yellow-400/90 font-medium">Pricing</p>
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-50">
            Simple pricing for remote IT support
          </h1>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl">
            Start with a clear, predictable structure. Use one-time sessions for quick fixes, and
            recurring plans for clients who need ongoing IT help.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-sm text-zinc-200">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-xs text-yellow-400/90 uppercase tracking-[0.18em]">
                One-time session
              </p>
              <p className="text-lg font-semibold text-zinc-50">Remote support</p>
              <p className="text-xs text-zinc-400">Good for quick fixes and small incidents.</p>
            </div>
            <div className="mt-4 space-y-1 text-xs text-zinc-300">
              <p>• Single remote session for one device</p>
              <p>• Troubleshooting for one main issue</p>
              <p>• Basic report of what was done</p>
            </div>
          </div>

          <div className="rounded-xl border border-yellow-500/80 bg-yellow-500/10 p-4 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-xs text-yellow-400/90 uppercase tracking-[0.18em]">
                Recommended
              </p>
              <p className="text-lg font-semibold text-zinc-50">Monthly support plan</p>
              <p className="text-xs text-zinc-400">Ideal for small businesses with recurring needs.</p>
            </div>
            <div className="mt-4 space-y-1 text-xs text-zinc-300">
              <p>• A fixed number of remote sessions per month</p>
              <p>• Priority response for urgent issues</p>
              <p>• Basic monitoring and advice</p>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-xs text-yellow-400/90 uppercase tracking-[0.18em]">
                Custom
              </p>
              <p className="text-lg font-semibold text-zinc-50">Custom IT package</p>
              <p className="text-xs text-zinc-400">For offices with more devices or special needs.</p>
            </div>
            <div className="mt-4 space-y-1 text-xs text-zinc-300">
              <p>• Mix of on-site and remote work</p>
              <p>• Servers, firewalls, backups, and more</p>
              <p>• Fully tailored to your clients&apos; environment</p>
            </div>
          </div>
        </div>

        <p className="text-xs md:text-sm text-zinc-400 max-w-2xl">
          You can adjust the real prices and details directly in this page later. For now, this
          gives your clients a clear idea of how you structure your IT services.
        </p>
      </section>
    </div>
  );
}
