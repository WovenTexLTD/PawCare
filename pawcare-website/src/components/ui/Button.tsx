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
    ? "bg-[#ff751f] text-white hover:bg-[#e5671b]"
    : "border border-black/10 bg-white text-black hover:border-black/30";

  return (
    <a href={href} className={clsx(base, styles, className)}>
      {children}
    </a>
  );
}
