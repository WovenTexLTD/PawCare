import Image from "next/image";
import Button from "@/components/ui/Button";
import FAQ from "@/components/FAQ";
import { Pacifico } from "next/font/google";
import MyPetSection from "@/components/MyPetSection";
import BusinessSection from "@/components/BusinessSection";
import GetAppSection from "@/components/GetAppSection";
const pawcareFont = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

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
            <div
  className={`${pawcareFont.className} text-5xl sm:text-6xl`}
style={{
  color: "#ffffff",
  textShadow: "0.08em 0.06em 0 #f4a667",
}}
>
  PawCare
</div>

            <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Pet care, made simple.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base text-white/90 sm:text-lg">
              PawCare helps pet owners discover trusted vets, groomers, daycare,
              trainers, and pet services, then book faster with fewer headaches.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#download" variant="secondary">
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
      <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
              <div className="absolute inset-0 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]" />
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src="/phone.svg"
                  alt="PawCare app preview"
                  width={400}
                  height={800}
                  className="drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* FEATURES */}
      <section className="relative overflow-hidden bg-white">
      <div className="max-w-5xl px-6 py-16 lg:py-24 lg:pl-24">
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            What PawCare offers
          </h2>
          <p className="mt-2 max-w-xl text-sm text-black/70 sm:text-base">
            A clean experience for discovery and booking — designed for speed, clarity,
            and trust.
          </p>

          {/* Cards, pushed left with a max width */}
          <div className="mt-10 max-w-4xl space-y-6 md:grid md:max-w-none md:grid-cols-3 md:gap-6 md:space-y-0">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-[#ff751f] px-6 py-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-black/10"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dog illustration bottom-right */}
   <div className="pointer-events-none absolute -bottom-4 right-0 w-[260px] sm:w-[360px] md:w-[480px]">
  <Image
    src="/dog.svg"
    alt="Happy dog"
    width={480}
    height={480}
    className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      </section>

{/* HOW IT WORKS */}
<section id="how-it-works" className="bg-[#f3f4f6] py-20">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-8">

{/* LEFT: step.svg – bigger via scale, without widening layout */}
<div className="flex-shrink-0 -translate-x-4">
  <div className="origin-left scale-[1.4]">
    <Image
      src="/step.svg"
      alt="How PawCare works: Find, Book, Manage"
      width={800}             // original logical width
      height={400}
      className="w-[700px] h-auto"
      priority
    />
  </div>
</div>


    {/* RIGHT: flip card – moved slightly right & 40% bigger */}
    <div className="flex-shrink-0 translate-x-4">
      <div className="card scale-[1.4] origin-center">
        <div className="card-inner">
          {/* FRONT: white background, big black title */}
          <div className="card-front">
            <h2>How it works</h2>
          </div>

          {/* BACK: orange background, white body text */}
          <div className="card-back">
            <p>
              PawCare helps pet owners discover trusted vets, groomers and
              daycare, then book and manage everything in one place with
              fewer headaches.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* MY PET SECTION */}
      <MyPetSection />
      
      {/* FOR BUSINESSES */}
    <BusinessSection />

      {/* DOWNLOAD / CTA */}
    <GetAppSection />
      
    </main>
  );
}
