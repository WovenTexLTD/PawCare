import Image from "next/image";

export default function MyPetSection() {
  return (
<section className="relative overflow-hidden bg-white py-16 lg:py-24 min-h-[520px] lg:min-h-[640px]">
      {/* ORANGE DECOR SHAPES */}
      <div className="pointer-events-none absolute -left-40 bottom-[-140px] h-[360px] w-[360px] rounded-full bg-[#ff751f]" />
      <div className="pointer-events-none absolute right-[-140px] -top-40 h-[360px] w-[360px] rounded-full bg-[#ff751f]" />

     <div className="max-w-xl">
  <p className="text-xs font-semibold tracking-[0.22em] text-[#1b2733]">
    USER &amp; ACCOUNT
  </p>

  <h2 className="mt-2 text-4xl font-semibold text-[#1b2733] sm:text-5xl">
    My Pet
  </h2>

  <p className="mt-6 text-base leading-relaxed text-[#1b2733]/80">
    The My Pets section gives owners a personalized hub for each pet, organizing
    essential information, health history, appointments, and care actions in one
    place. This creates daily utility, increases retention, and positions PawCare
    as the long-term home for every pet&apos;s wellbeing.
  </p>

  {/* Orange feature tags */}
  <div className="mt-6 flex flex-wrap gap-3">
    <div className="rounded-lg bg-[#ff751f] px-4 py-2">
      <span className="text-sm font-semibold text-white">
        Organization
      </span>
    </div>

    <div className="rounded-lg bg-[#ff751f] px-4 py-2">
      <span className="text-sm font-semibold text-white">
        Reminders
      </span>
    </div>

    <div className="rounded-lg bg-[#ff751f] px-4 py-2">
      <span className="text-sm font-semibold text-white">
        Records
      </span>
    </div>
  </div>
</div>


{/* PHONE – DESKTOP: HAND IMAGE IN TOP-RIGHT, FULLY VISIBLE */}
<div className="pointer-events-auto absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex">
  <Image
    src="/hand.svg"           // <-- use your exact file path here
    alt="PawCare My Pets screen"
    width={480}
    height={960}
    className="w-[480px] h-auto"
    priority
  />
</div>

      {/* PHONE – MOBILE: CENTERED BELOW TEXT */}
      <div className="mt-10 flex justify-center lg:hidden">
        <div className="relative h-[420px] w-auto">
          <Image
            src="/hand.svg"
            alt="PawCare My Pets screen"
            width={360}
            height={720}
            className="h-full w-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
