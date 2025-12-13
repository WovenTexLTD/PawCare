// src/components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: logo + name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="PawCare logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-lg font-semibold tracking-tight text-black">
            PawCare
          </span>
        </Link>

        {/* Right: buttons */}
        <nav className="flex items-center gap-3">
          {/* Scrolls down to GetAppSection */}
          <a
            href="#get-pawcare"
            className="rounded-full bg-[#ff751f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e66917] transition"
          >
            Get the app
          </a>

          {/* Takes them to contact page */}
          <Link
            href="/contact"
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold text-black hover:bg-black/5 transition"
          >
            For businesses
          </Link>
        </nav>
      </div>
    </header>
  );
}
