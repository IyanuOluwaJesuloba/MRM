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
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window === "undefined" ? Number.POSITIVE_INFINITY : window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleSlides = useMemo(() => determineSlides(windowWidth, items.length), [items.length, windowWidth]);

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
      className="relative py-16 sm:py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(255,140,33,0.24),_transparent_65%)] blur-3xl" />
        <div className="absolute right-[-180px] bottom-[-160px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.14),_transparent_60%)] blur-3xl" />
      </div>

      <motion.div 
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.10),transparent_55%)] opacity-70" />
          <div className="absolute -top-24 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,140,33,0.14),_transparent_60%)] blur-2xl" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className={cx(
              "relative grid gap-4 sm:gap-6",
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
                <Card className="group relative flex h-full flex-col justify-between overflow-hidden p-6 text-white transition duration-500 hover:border-white/40 sm:p-8">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,140,33,0.22),transparent_55%)]" />
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white/80"
                          aria-hidden="true"
                        >
                          <path
                            d="M10.2 11.2C9.1 12.6 8.3 14.2 8.2 16.2c0 2.1 1.4 3.8 3.4 3.8 1.8 0 3.2-1.2 3.2-3.2 0-1.8-1.3-2.9-2.9-2.9-.4 0-.8.1-1.1.2.2-1.3.8-2.3 1.7-3.3.6-.6.6-1.6 0-2.1-.6-.6-1.5-.6-2.1.1-.8.8-1.5 1.6-2.2 2.4Zm-7 0C2.1 12.6 1.3 14.2 1.2 16.2c0 2.1 1.4 3.8 3.4 3.8 1.8 0 3.2-1.2 3.2-3.2 0-1.8-1.3-2.9-2.9-2.9-.4 0-.8.1-1.1.2.2-1.3.8-2.3 1.7-3.3.6-.6.6-1.6 0-2.1-.6-.6-1.5-.6-2.1.1-.8.8-1.5 1.6-2.2 2.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-sm font-semibold text-white/80 sm:flex">
                        {testimony.name
                          .split(" ")
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join("")
                          .toUpperCase()}
                      </div>
                    </div>

                    <motion.p 
                      className="mt-5 text-lg font-medium leading-relaxed text-white sm:text-[1.05rem]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  >
                      {testimony.quote}
                    </motion.p>
                  </div>

                  <motion.div 
                    className="relative mt-7 flex items-center justify-between gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  >
                    <div>
                      <p className="text-base font-semibold text-white">{testimony.name}</p>
                      <p className="text-sm text-white/70">{testimony.detail}</p>
                    </div>
                    <div className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 sm:block">
                      Testimony
                    </div>
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
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white shadow-lg backdrop-blur transition hover:bg-white/20 sm:inline-flex"
            aria-label="Previous testimony"
            onClick={() => handleNavigate(-1)}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <span className="text-xl leading-none">‹</span>
          </motion.button>
          <motion.button
            type="button"
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white shadow-lg backdrop-blur transition hover:bg-white/20 sm:inline-flex"
            aria-label="Next testimony"
            onClick={() => handleNavigate(1)}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <span className="text-xl leading-none">›</span>
          </motion.button>
        </>
      )}

      {indicatorCount > 1 && (
        <motion.div 
          className="mt-7 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Previous testimony"
              onClick={() => handleNavigate(-1)}
            >
              Prev
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Next testimony"
              onClick={() => handleNavigate(1)}
            >
              Next
            </button>
          </div>

          <div className="flex items-center gap-2">
            {items.map((testimony, idx) => (
              <motion.button
                key={testimony.name}
                type="button"
                className={cx(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c21]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#001b27]",
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

function determineSlidesMax(totalItems: number) {
  return Math.min(3, totalItems || 1);
}

function determineSlides(width: number, totalItems: number) {
  if (width >= 1280) return determineSlidesMax(totalItems);
  if (width >= 768) return Math.min(2, totalItems || 1);
  return 1;
}
