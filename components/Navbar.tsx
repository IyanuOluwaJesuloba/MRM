"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { cx } from "@/lib/cx";
import Logo from "@/public/assests/svg/Logo1.png"

const links = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <motion.header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-white/5 bg-[color-mix(in_srgb,var(--color-navy)_60%,transparent)]/70 backdrop-blur"
          : "bg-transparent",
        className
      )}
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="section- flex items-center justify-between gap-4 py-4 px-4 text-white">
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="Mighty Refuge" width={100} height={100} />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 lg:flex">
          {links.map((link) => (
            <motion.span
              key={link.href}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Link href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            </motion.span>
          ))}
        </nav>
        <ButtonLink href="/services" variant="ghost" className="hidden lg:inline-flex">
          Join Us
        </ButtonLink>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[12px] border border-white/20 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={toggle}
        >
          <span className="sr-only">Menu</span>
          <span className="h-5 w-6">
            <span
              className={cx(
                "block h-0.5 w-full bg-white transition",
                open ? "translate-y-2 rotate-45" : ""
              )}
            ></span>
            <span
              className={cx(
                "mt-1 block h-0.5 w-full bg-white transition",
                open ? "opacity-0" : ""
              )}
            ></span>
            <span
              className={cx(
                "mt-1 block h-0.5 w-full bg-white transition",
                open ? "-translate-y-2 -rotate-45" : ""
              )}
            ></span>
          </span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="section-shell"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <motion.div
              className="mt-2 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur-xl lg:hidden"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <nav className="space-y-3 text-base font-medium">
                {links.map((link, idx) => (
                  <motion.span
                    key={link.href}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04, duration: 0.2, ease: "easeOut" }}
                    className="block"
                  >
                    <Link href={link.href} onClick={close} className="block">
                      {link.label}
                    </Link>
                  </motion.span>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.04 + 0.05, duration: 0.2, ease: "easeOut" }}
              >
                <ButtonLink href="/services" variant="ghost" className="mt-6 w-full justify-center">
                  Plan a Visit
                </ButtonLink>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
