"use client";

import Image from "next/image";
// Remove this line if you don't actually need a separate CSS file:
// import "./MyPetSection.css";

export default function MyPetSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* ORANGE CIRCLES / BLOBS */}
      {/* Bottom-left large circle */}
      <div
        className="
          pointer-events-none
          absolute -left-40 bottom-[-220px]
          h-[520px] w-[520px]
          rounded-full
          bg-gradient-to-tr from-[#ff751f] via-[#ff9a3c] to-[#ff751f]
          opacity-80
        "
      />
      {/* Top-right circle behind the phone */}
      <div
        className="
          pointer-events-none
          absolute right-[-180px] top-[-120px]
          h-[360px] w-[360px]
          rounded-full
          bg-gradient-to-tr from-[#ff751f] via-[#ff9a3c] to-[#ff751f]
          opacity-70
        "
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-10 px-6 lg:px-8">
        {/* LEFT: copy */}
        <div className="max-w-xl space-y-5">
          <p className="text-xs font-semibold tracking-[0.25em] text-zinc-500">
            USER & ACCOUNT
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            My Pet
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
            The My Pets section gives owners a personalized hub for each pet,
            organizing essential information, health history, appointments, and
            care actions in one place. This creates daily utility, increases
            retention, and positions PawCare as the long-term home for every
            pet’s wellbeing.
          </p>
        </div>

        {/* RIGHT: hand + phone image */}
        <div className="relative flex-1">
          <div
            className="
              relative z-10 ml-auto
              w-[360px] sm:w-[420px] md:w-[460px] lg:w-[520px]
              lg:mr-[-80px] xl:mr-[-120px]
            "
          >
            <Image
              src="/hand.svg"
              alt="PawCare My Pet screen on a phone in hand"
              width={520}
              height={760}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
