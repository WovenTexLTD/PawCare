export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-semibold">PawCare</div>
            <p className="mt-1 text-sm text-zinc-600">
              Helping pet owners find care faster.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600">
            <a className="hover:text-zinc-900" href="#business">
              For businesses
            </a>
            <a className="hover:text-zinc-900" href="#download">
              Get the app
            </a>
            <a className="hover:text-zinc-900" href="/privacy/">
              Privacy
            </a>
            <a className="hover:text-zinc-900" href="/terms/">
              Terms
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-500">
          © {year} PawCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
