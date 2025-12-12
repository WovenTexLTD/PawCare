// src/components/MyPetSection.jsx

import Image from "next/image";

export default function MyPetSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* ORANGE DECOR SHAPES */}
      {/* bottom-left quarter circle */}
      <div className="pointer-events-none absolute -left-40 bottom-[-140px] h-[360px] w-[360px] rounded-full bg-[#ff751f]" />
      {/* top-right quarter circle */}
      <div className="pointer-events-none absolute right-[-140px] -top-40 h-[360px] w-[360px] rounded-full bg-[#ff751f]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center">
        {/* LEFT – text content */}
        <div className="w-full max-w-xl lg:flex-1">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#1b2733]">
            USER &amp; ACCOUNT
          </p>

          <h2 className="mt-2 text-4xl font-semibold text-[#1b2733] sm:text-5xl">
            My Pet
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#1b2733]/80">
            The My Pets section gives owners a personalized hub for each pet,
            organizing essential information, health history, appointments, and
            care actions in one place. This creates daily utility, increases
            retention, and positions PawCare as the long-term home for every
            pet&apos;s wellbeing.
          </p>
        </div>

       {/* RIGHT – phone-in-hand image */}
<div className="relative flex flex-1 items-center justify-end -mr-6 lg:-mr-24">
  <div className="relative h-[560px] w-auto">
    <Image
      src="/hand.svg"            // keep your SVG path
      alt="PawCare My Pets screen"
      width={420}                 // bigger image
      height={840}
      className="h-full w-auto"
      priority
    />
  </div>
</div>

      </div>
    </section>
  );
}
