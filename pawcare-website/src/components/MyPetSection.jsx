"use client";

import Image from "next/image";

export default function MyPetSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-16">
      {/* ORANGE CIRCLES / BLOBS */}
      {/* Bottom-left big circle */}
      <div
        className="
          pointer-events-none
          absolute -left-40 bottom-[-220px]
          h-[420px] w-[420px]
          rounded-full
          bg-gradient-to-tr from-[#ff751f] via-[#ff9a3c] to-[#ff751f]
          opacity-80
        "
      />
      {/* Top-right circle behind the phone */}
      <div
        className="
          pointer-events-none
          absolute right-[-140px] top-[-120px]
          h-[280px] w-[280px]
          rounded-full
          bg-gradient-to-tr from-[#ff751f] via-[#ff9a3c] to-[#ff751f]
          opacity-70
        "
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex w-full items-center justify-between px-6 lg:px-16">
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

   {/* RIGHT SIDE: phone + hand SVG, pushed to the right */}
<div className="relative flex flex-1 items-center justify-end -mr-6 lg:-mr-12">
  <div className="relative h-[420px] w-auto">
    <Image
      src="/phone.svg"              // your SVG file
      alt="PawCare app preview"
      width={360}
      height={720}
      className="h-full w-auto"
      priority
    />
  </div>
</div>
