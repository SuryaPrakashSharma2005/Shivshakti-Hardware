import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-body font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-rust text-paper hover:bg-rust-dark",
  secondary: "bg-ink text-paper hover:bg-ink-soft",
  ghost: "bg-transparent text-ink hover:bg-ink/5 border border-line",
  "outline-light": "bg-transparent text-paper border border-paper/40 hover:bg-paper/10",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  target?: string;
  rel?: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  target,
  rel,
}: ButtonAsLink) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${variants[variant]} ${sizes[size]} rounded-sm ${className}`}
    >
      {children}
    </Link>
  );
}

interface ButtonAsButton
  extends Omit<CommonProps, "children">,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonAsButton) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} rounded-sm ${className}`} {...props}>
      {children}
    </button>
  );
}
