export default function AboutPage() {
  return (
    <div className="font-sans">
      <section className="space-y-8 mt-6 text-left">
        <div className="space-y-3">
          <p className="text-sm text-yellow-400/90 font-medium">About networkzone</p>
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-50">
            Remote IT support built for small and growing businesses
          </h1>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl">
            networkzone is a remote IT support service that helps businesses fix problems quickly
            without waiting for on-site visits. Your clients download a simple remote tool, share
            their Client ID, and you connect securely to diagnose and solve the issue.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-sm text-zinc-200">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 space-y-1">
            <p className="text-xs text-yellow-400/90 uppercase tracking-[0.18em]">
              Who we help
            </p>
            <p>
              Pharmacies, clinics, accounting offices, small agencies, and retail shops that need
              reliable IT help but don&apos;t have a full in-house IT team.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 space-y-1">
            <p className="text-xs text-yellow-400/90 uppercase tracking-[0.18em]">
              What we do
            </p>
            <p>
              Troubleshooting Windows issues, network and internet problems, email configuration,
              software setup, and basic security checks.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 space-y-1">
            <p className="text-xs text-yellow-400/90 uppercase tracking-[0.18em]">
              How it works
            </p>
            <p>
              Your client downloads the networkzone tool, shares their Client ID, and you start a
              secure remote session to fix the issue while they watch.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm md:text-base text-zinc-200">
          <h2 className="text-lg md:text-xl font-semibold text-zinc-50">Why networkzone?</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>Simple steps for the client: download, open, share ID.</li>
            <li>Consistent process for every remote session through your website.</li>
            <li>Clear record of support requests via the online form and email.</li>
            <li>Branded experience using your own remote tool instead of generic apps.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
