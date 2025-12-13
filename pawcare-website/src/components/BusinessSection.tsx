// src/components/BusinessSection.tsx
import Image from "next/image";

export default function BusinessSection() {
  return (
    <section className="bg-black text-white">
      {/* 2-column layout: image on the left, content on the right */}
      <div className="grid min-h-[520px] lg:min-h-[580px] lg:grid-cols-2">
        {/* LEFT: full-height person.svg */}
        <div className="relative h-64 lg:h-auto">
          <Image
            src="/person.svg" // make sure this path matches your file
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
              <h2 className="text-3xl font-semibold sm:text-4xl">
                For clinics &amp; pet businesses
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                PawCare helps businesses get discovered and reduce friction in
                scheduling. If you want to be listed (or want priority
                visibility), we’d love to talk.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-full bg-white text-black px-5 py-3 text-sm">
                  Clear profile: services, hours, contact info
                </div>
                <div className="rounded-full bg-white text-black px-5 py-3 text-sm">
                  Booking requests routed cleanly
                </div>
                <div className="rounded-full bg-white text-black px-5 py-3 text-sm">
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
