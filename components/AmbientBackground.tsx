"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(255,140,33,0.22),_transparent_65%)] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-48 top-24 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(0,80,109,0.22),_transparent_65%)] blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-[65%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,181,114,0.18),_transparent_65%)] blur-3xl"
        animate={{ y: [0, -35, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
