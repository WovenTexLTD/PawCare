// /MyPetSection.jsx

import Image from "next/image";

export default function MyPetSection() {
  return (
    <section
      id="my-pets"
      className="border-t border-black/5 bg-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
        {/* LEFT – copy */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#ff751f]">
            My Pets
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            Keep every pet&apos;s health in one simple view.
          </h2>
          <p className="mt-3 text-black/70">
            The My Pets tab lets owners manage essential info for each pet:
            upcoming vet visits, vaccinations, medical records and more—without
            digging through emails or paper notes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-black">
                🐾 Book appointments
              </div>
              <p className="mt-1 text-sm text-black/70">
                Request vet or grooming visits directly from your pet&apos;s
                profile.
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-black">
                💉 Vaccinations
              </div>
              <p className="mt-1 text-sm text-black/70">
                Track past and upcoming vaccines so nothing is missed.
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-black">
                📄 Medical records
              </div>
              <p className="mt-1 text-sm text-black/70">
                Store key vet history in one place for quick reference.
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-black">
                👥 Caregivers
              </div>
              <p className="mt-1 text-sm text-black/70">
                Share information with partners, sitters, or family members.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-black/50">
            This section is for demonstration only. Actual booking and record
            management will happen in the PawCare app.
          </p>
        </div>

        {/* RIGHT – phone mock / illustration */}
        {/* RIGHT – phone mock / illustration */}
<div className="flex items-center justify-center lg:justify-end">
  <div className="relative h-[420px] w-auto">
    <Image
      src="/phone.svg"
      alt="PawCare My Pets screen"
      width={360}
      height={720}
      className="h-full w-auto drop-shadow-xl"
      priority
    />
  </div>
</div>

