// src/components/GetAppSection.tsx
export default function GetAppSection() {
  return (
    <section id="get-pawcare" className="bg-[#050505] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-10 px-6">
        {/* CARD 1 – Get PawCare / early access */}
        <div className="rounded-3xl bg-white/95 shadow-xl shadow-black/10">
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#ff751f]">
              Get PawCare
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Be first to try PawCare
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Add your App Store / Google Play links here when you’re live. For now, 
              we&apos;ll collect early access emails so you can notify people when the app launches.
            </p>

            {/* App buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#ff751f] px-5 py-2 text-sm font-semibold text-white">
                App Store (coming soon)
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700">
                Google Play (coming soon)
              </button>
            </div>

            {/* Notify form (placeholder) */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Early access
              </p>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent outline-none placeholder:text-slate-400"
                  />
                </div>

                <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white sm:shrink-0">
                  Notify me
                </button>
              </div>

              <p className="mt-2 text-[11px] text-slate-400">
                This is a placeholder form — we’ll wire it up later.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 – FAQ */}
        <div className="rounded-3xl bg-white/95 shadow-xl shadow-black/10">
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              FAQ
            </h3>

            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className="font-semibold text-slate-900">Is PawCare a clinic?</dt>
                <dd className="mt-1 text-slate-600">
                  No — PawCare helps you discover pet services and request bookings. 
                  The provider delivers the service; PawCare connects you.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-900">
                  Will prices always be fixed?
                </dt>
                <dd className="mt-1 text-slate-600">
                  Some visits vary depending on findings. PawCare helps you request and 
                  manage bookings, but final pricing is set by the provider.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-900">
                  When is the app launching?
                </dt>
                <dd className="mt-1 text-slate-600">
                  We&apos;re preparing the first release now. You can join early access with 
                  your email above and we’ll notify you when it’s ready.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
