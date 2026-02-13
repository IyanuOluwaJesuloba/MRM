"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { cx } from "@/lib/cx";

const baseClasses =
  "button-ripple inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--color-navy)_65%,white)] active:scale-95 active:duration-150 hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--color-navy)_20%,transparent)] hover:-translate-y-px";

const variantMap = {
  brand: "bg-brand text-white",
  outline:
    "border border-[color-mix(in_srgb,var(--color-navy)_30%,transparent)] text-[var(--color-navy)] hover:bg-brand hover:text-white hover:border-brand",
  outlineLight: "border border-white/30 text-white hover:bg-white/10 hover:border-white/50",
  navy: "bg-navy text-white hover:bg-brand",
  ghost: "bg-white/10 text-white hover:bg-white/20 hover:border-white/30",
  subtle: "border border-[color-mix(in_srgb,var(--color-navy)_15%,transparent)] text-[var(--color-navy)] hover:bg-brand hover:text-white hover:border-brand",
} as const;

type Variant = keyof typeof variantMap;

type ButtonBaseProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonLinkProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps;

type ButtonProps = ButtonBaseProps & Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps>;

export function ButtonLink({
  variant = "brand",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <motion.span
      className="inline-flex"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
    >
      <Link {...props} className={cx(baseClasses, variantMap[variant], className)}>
        {children}
      </Link>
    </motion.span>
  );
}

export function Button({
  variant = "brand",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      {...props}
      className={cx(baseClasses, variantMap[variant], className)}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
    >
      {children}
    </motion.button>
  );
}
