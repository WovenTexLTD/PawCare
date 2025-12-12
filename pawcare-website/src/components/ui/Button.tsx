import clsx from "clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800"
      : "border border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300";

  return (
    <a href={href} className={clsx(base, styles, className)}>
      {children}
    </a>
  );
}
