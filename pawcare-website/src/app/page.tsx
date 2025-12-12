import Image from "next/image";
import Button from "@/components/ui/Button";
import FAQ from "@/components/FAQ";

const features = [
  {
    title: "Find trusted pet services",
    desc: "Browse vets, groomers, daycare, training, and pet shops with clear info and fast navigation.",
  },
  {
    title: "Book with confidence",
    desc: "Request appointments and keep everything organized — without endless back-and-forth.",
  },
  {
    title: "Built for busy pet parents",
    desc: "Simple, mobile-first experience that helps you get care faster and reduce stress.",
  },
];

const steps = [
  { k: "1", title: "Search", desc: "Find providers near you in seconds." },
  { k: "2", title: "Compare", desc: "Check services, hours, and key details." },
  { k: "3", title: "Book", desc: "Request a slot and keep your plans in one place." },
];

export default function HomePage() {
  return (
    <main>
             {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10 bg-[#ff751f]">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:py-20">
          {/* LEFT SIDE: text */}
          <div className="relative flex-1">
            <div className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              PawCare
            </div>

            <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Pet care, made simple.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base text-white/90 sm:text-lg">
              PawCare helps pet owners discover trusted vets, groomers, daycare,
              trainers, and pet services — then book faster with fewer headaches.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#download" variant="primary">
                Get the app
              </Button>
              <Button href="#business" variant="secondary">
                For businesses
              </Button>
            </div>

            <p className="mt-4 text-sm text-white/85">
              Informational website — the app handles bookings.
            </p>
          </div>

          {/* RIGHT SIDE: white circle + phone */}
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative h-[520px] w-[520px] sm:h-[560px] sm:w-[560px]">
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]" />
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src="/phone.svg"
                  alt="PawCare app preview"
                  width={440}
                  height={880}
                  className="drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          What PawCare offers
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600">
          A clean experience for discovery and booking — designed for speed, clarity,
          and trust.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How it works
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.k}
                className="rounded-3xl border border-zinc-200 bg-white p-6"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
                  {s.k}
                </div>
                <div className="mt-4 text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR BUSINESSES */}
      <section id="business" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              For clinics & pet businesses
            </h2>
            <p className="mt-3 text-zinc-600">
              PawCare helps businesses get discovered and reduce friction in scheduling.
              If you want to be listed (or want priority visibility), we’d love to talk.
            </p>

            <ul className="mt-6 grid gap-3 text-zinc-700">
              <li className="rounded-2xl border border-zinc-200 bg-white p-4">
                Clear profile: services, hours, contact info
              </li>
              <li className="rounded-2xl border border-zinc-200 bg-white p-4">
                Booking requests routed cleanly
              </li>
              <li className="rounded-2xl border border-zinc-200 bg-white p-4">
                Less admin work, fewer missed calls
              </li>
            </ul>

            <div className="mt-8">
              <Button href="mailto:hello@pawcare.app" variant="primary">
                Contact us
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-zinc-900">
              Example listing preview
            </div>
            <div className="mt-4 rounded-2xl border border-zinc-200 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold">Happy Tails Veterinary</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Wellness • Vaccines • Urgent Care
                  </div>
                </div>
                <div className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
                  Open today
                </div>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-zinc-700">
                <div>📍 Austin, TX</div>
                <div>🕒 9:00–18:00</div>
                <div>📞 (000) 000-0000</div>
              </div>
              <div className="mt-5 rounded-2xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white">
                Request a booking
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD / CTA */}
      <section id="download" className="border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Get PawCare
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Add your App Store / Google Play links here when ready. For now, you can
              collect early access emails.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#" variant="primary">
                App Store (coming soon)
              </Button>
              <Button href="#" variant="secondary">
                Google Play (coming soon)
              </Button>
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-200 p-5">
              <div className="text-sm font-semibold">Early access</div>
              <p className="mt-1 text-sm text-zinc-600">
                Replace this with a real form later.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                  placeholder="Email address"
                />
                <button className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white">
                  Notify me
                </button>
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                (This is a placeholder — we’ll wire it up later.)
              </p>
            </div>
          </div>

          <div className="mt-10">
            <FAQ />
          </div>
        </div>
      </section>
    </main>
  );
}
