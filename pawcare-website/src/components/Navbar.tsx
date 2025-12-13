"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f3f4f6]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        {/* LEFT: logo + name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="PawCare logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-sm font-semibold tracking-tight text-black sm:text-base">
            PawCare
          </span>
        </Link>

        {/* RIGHT: buttons */}
        <div className="flex items-center gap-3">
          {/* Scrolls to GetAppSection (make sure that section has id="download") */}
          <Link
            href="#download"
            className="rounded-full bg-[#ff751f] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#e66917] sm:text-sm"
          >
            Get the app
          </Link>

          {/* Goes to the simple contact page for businesses */}
          <Link
            href="/contact"
            className="rounded-full border border-black/10 bg-white px-5 py-2 text-xs font-semibold text-black transition hover:bg-black/5 sm:text-sm"
          >
            For businesses
          </Link>
        </div>
      </div>
    </header>
  );
}
