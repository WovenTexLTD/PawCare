// src/components/BusinessSection.tsx
import Image from "next/image";

export default function BusinessSection() {
  return (
    // 1) Dark grey instead of pure black
    <section className="bg-[#75706d] text-white">
      {/* 2-column layout: image on the left, content on the right */}
      {/* 2) Make the whole block taller so more of person.svg is visible */}
      <div className="grid min-h-[650px] lg:min-h-[720px] lg:grid-cols-2">
        {/* LEFT: full-height person.svg */}
        {/* 3) Remove h-70 and give the column a min-height as well */}
        <div className="relative min-h-[650px] lg:min-h-[720px]">
          <Image
            src="/person.svg"
            alt="Pet clinic owner illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT: heading, copy, bullets & button */}
        <div className="flex items-center">
          <div className="mx-auto w-full max-w-3xl px-6 py-12 lg:px-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                For All Pet Businesses
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                PawCare helps businesses get discovered and reduce friction in
                scheduling. If you want to be listed (or want priority
                visibility), we’d love to talk.
              </p>

             <div className="mt-8 space-y-4">
  <div className="inline-flex w-fit rounded-full bg-white text-black px-5 py-3 text-sm shadow-sm">
    Clear profile: services, hours, contact info
  </div>
  <div className="inline-flex w-fit rounded-full bg-white text-black px-5 py-3 text-sm shadow-sm">
    Booking requests routed cleanly
  </div>
  <div className="inline-flex w-fit rounded-full bg-white text-black px-5 py-3 text-sm shadow-sm">
    Less admin work, fewer missed calls
  </div>
</div>

              <button className="mt-8 inline-flex items-center rounded-full bg-[#ff751f] px-6 py-2 text-sm font-semibold text-white">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
