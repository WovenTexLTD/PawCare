import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-zinc-900" />
          PawCare
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-600 sm:flex">
          <a className="hover:text-zinc-900" href="#business">
            For businesses
          </a>
          <a className="hover:text-zinc-900" href="#download">
            Get the app
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button href="#download" variant="primary" className="hidden sm:inline-flex">
            Get the app
          </Button>
          <Button href="mailto:hello@pawcare.app" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
