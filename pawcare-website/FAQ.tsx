const faqs = [
  {
    q: "Is PawCare a clinic?",
    a: "No — PawCare helps you discover pet services and request bookings. The provider delivers the service.",
  },
  {
    q: "Will prices always be fixed?",
    a: "Some visits vary depending on findings. PawCare helps you request and manage bookings, but final pricing is set by the provider.",
  },
  {
    q: "When is the app launching?",
    a: "We’re preparing the first release. You can join early access and we’ll notify you.",
  },
];

export default function FAQ() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h3 className="text-xl font-semibold">FAQ</h3>
      <div className="mt-6 grid gap-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-zinc-200 p-5">
            <div className="font-medium">{f.q}</div>
            <p className="mt-2 text-sm text-zinc-600">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
