"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 35, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-60 h-[3px] w-full origin-left bg-[#ff8c21]/90"
      style={{ scaleX }}
    />
  );
}
