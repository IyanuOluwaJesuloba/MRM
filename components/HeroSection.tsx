"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <motion.section
      className="relative isolate min-h-screen overflow-hidden bg-[#001b27] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="spin-slower absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 opacity-80"
          animate={{ scale: [1, 1.03, 1], rotate: [0, 1.5, 0] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/assests/svg/Backdrop.png"
            alt="Mighty Refuge backdrop"
            fill
            className="object-cover opacity-60"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-br from-[#001b27]/80 via-[#001b27]/40 to-[#ffb572]/20" />
      </div>
      <div className="absolute inset-0 border border-white/10 bg-white/10 backdrop-blur-2xl opacity-35" />
      <div className="absolute inset-8 rounded-[12px] border border-white/10 bg-white/5 opacity-55" />
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="section-shell pb-0">
          <motion.div
            className="hero-card mx-auto max-w-5xl px-10 py-14 text-center text-white"
            initial={{ y: 28, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <span className="hero-subtle-glow" aria-hidden="true" />
            <motion.span
              className="hero-orb"
              aria-hidden="true"
              animate={{ y: [0, -10, 0], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="hero-orb"
              aria-hidden="true"
              animate={{ y: [0, 12, 0], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.p
              className="text-xs uppercase tracking-[0.4em] text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            >
              Mighty Refuge Ministries
            </motion.p>
            <motion.div
              className="mx-auto mt-6 h-px w-20 bg-white/30"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              style={{ transformOrigin: "center" }}
            />
            <motion.h1
              className="hero-text mt-8 text-3xl font-semibold leading-relaxed sm:text-4xl md:text-[2.9rem]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            >
              Fulfilling the Great Commission; providing a refuge of spiritual solace, hope, and transformation through the
              Holy Spirit&apos;s power
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
