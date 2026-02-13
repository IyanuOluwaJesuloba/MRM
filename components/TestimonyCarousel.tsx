"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/Section";
import { cx } from "@/lib/cx";

interface Testimony {
  quote: string;
  name: string;
  detail: string;
}

interface TestimonyCarouselProps {
  items: Testimony[];
}

export function TestimonyCarousel({ items }: TestimonyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(() => determineSlides(items.length));

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(determineSlides(items.length));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items.length]);

  useEffect(() => {
    if (items.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, [items.length]);

  const visibleTestimonials = useMemo(() => {
    const count = Math.min(visibleSlides, items.length);
    return Array.from({ length: count }, (_, idx) => items[(activeIndex + idx) % items.length]);
  }, [activeIndex, items, visibleSlides]);

  const handleNavigate = (delta: number) => {
    setActiveIndex((prev) => (prev + delta + items.length) % items.length);
  };

  const indicatorCount = items.length;

  return (
    <motion.div 
      className="relative py-20 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="overflow-hidden rounded-[32px]  border border-white/10 bg-white/5 p-6 backdrop-blur"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className={cx(
              "grid gap-6",
              visibleSlides >= 3 ? "xl:grid-cols-3" : visibleSlides === 2 ? "md:grid-cols-2" : "grid-cols-1"
            )}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {visibleTestimonials.map((testimony, idx) => (
              <motion.div
                key={`${testimony.name}-${idx}-${activeIndex}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="flex h-full flex-col justify-between p-8 text-white transition duration-500 hover:border-white/40">
                  <motion.p 
                    className="text-lg font-medium leading-relaxed text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  >
                    {testimony.quote}
                  </motion.p>
                  <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  >
                    <p className="text-base font-semibold text-white">{testimony.name}</p>
                    <p className="text-sm text-white/70">{testimony.detail}</p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {indicatorCount > 1 && (
        <>
          <motion.button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 p-3 text-white shadow-lg backdrop-blur hover:bg-white/20"
            aria-label="Previous testimony"
            onClick={() => handleNavigate(-1)}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            ‹
          </motion.button>
          <motion.button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 p-3 text-white shadow-lg backdrop-blur hover:bg-white/20"
            aria-label="Next testimony"
            onClick={() => handleNavigate(1)}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            ›
          </motion.button>
        </>
      )}

      {indicatorCount > 1 && (
        <motion.div 
          className="mt-8 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex gap-2">
            {items.map((testimony, idx) => (
              <motion.button
                key={testimony.name}
                type="button"
                className={cx(
                  "h-2 rounded-full transition-all",
                  activeIndex === idx ? "w-10 bg-[#ff8c21]" : "w-6 bg-[#ff8c21]/30"
                )}
                aria-label={`Show testimony ${idx + 1}`}
                aria-current={activeIndex === idx}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.05, duration: 0.3 }}
              />
            ))}
          </div>
          <motion.p 
            className="text-sm uppercase tracking-[0.3em] text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {String(activeIndex + 1).padStart(2, "0")} / {String(indicatorCount).padStart(2, "0")}
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}

function determineSlides(totalItems: number) {
  if (typeof window === "undefined") {
    return Math.min(3, totalItems || 1);
  }

  const width = window.innerWidth;
  if (width >= 1280) return Math.min(3, totalItems || 1);
  if (width >= 768) return Math.min(2, totalItems || 1);
  return 1;
}
