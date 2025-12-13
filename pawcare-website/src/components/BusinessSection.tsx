// src/components/BusinessSection.jsx (or .tsx)
import Image from "next/image";

export default function BusinessSection() {
  return (
    <section
      id="business"
      className="bg-[#111216] text-white" // dark grey instead of pure black
    >
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        {/* LEFT: full-height image */}
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src="/person.svg"
            alt="PawCare business user holding phone"
            width={900}
            height={900}
            className="h-auto w-full max-w-[900px] object-contain"
            priority
          />
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col justify-center px-6 py-16 lg:px-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            For clinics &amp; pet businesses
          </h2>

          <p className="mt-3 max-w-xl text-sm text-white/70">
            PawCare helps businesses get discovered and reduce friction in
            scheduling. If you want to be listed (or want priority visibility),
            we’d love to talk.
          </p>

          {/* Benefit pills */}
          <div className="mt-8 flex flex-col gap-3">
            <div className="w-full max-w-xl rounded-full border border-white/5 bg-white/95 px-5 py-3 text-sm text-black shadow-sm">
              Clear profile: services, hours, contact info
            </div>

            <div className="w-full max-w-xl rounded-full border border-white/5 bg-white/95 px-5 py-3 text-sm text-black shadow-sm">
              Booking requests routed cleanly
            </div>

            <div className="w-full max-w-xl rounded-full border border-white/5 bg-white/95 px-5 py-3 text-sm text-black shadow-sm">
              Less admin work, fewer missed calls
            </div>
          </div>

          {/* CTA button */}
          <button className="mt-8 inline-flex w-fit items-center rounded-full bg-[#ff751f] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#e56716] transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
