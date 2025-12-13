// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          Contact PawCare
        </h1>
        <p className="mt-3 text-sm text-black/70">
          Share a few details about your clinic or pet business and we&apos;ll
          get back to you.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-black">
              Business name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-[#ff751f]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Contact email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-[#ff751f]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Website (optional)
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-[#ff751f]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Message
            </label>
            <textarea
              rows={5}
              className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-[#ff751f]"
              placeholder="Tell us about your clinic, what you’re looking for, and how we can help."
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center rounded-full bg-[#ff751f] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#e66917]"
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
