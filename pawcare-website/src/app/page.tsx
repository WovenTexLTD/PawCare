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
      <section className="relative overflow-hidden border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700">
                <span className="h-2 w-2 rounded-full bg-zinc-900" />
                PawCare is launching soon
              </p>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Pet care, made simple.
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-lg text-zinc-600">
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

              <p className="mt-4 text-sm text-zinc-500">
                Informational website — the app handles bookings.
              </p>
            </div>

            {/* Mock phone card */}
            <div className="relative">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">PawCare</div>
                  <div className="text-xs text-zinc-500">Austin, TX</div>
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-zinc-200 p-4">
                    <div className="text-sm font-medium">Vet Clinics</div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Browse clinics & availability
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 p-4">
                    <div className="text-sm font-medium">Groomers</div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Find grooming near you
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 p-4">
                    <div className="text-sm font-medium">Daycare & Boarding</div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Compare options quickly
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white">
                  Request a booking
                </div>
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
