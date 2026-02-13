"use client";

import { ReactNode, useEffect, useId, useMemo, useRef, useState } from "react";
import { cx } from "@/lib/cx";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** ms */
  delay?: number;
  /** ms */
  duration?: number;
  /** px */
  y?: number;
  /** 0..1 */
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 750,
  y = 18,
  amount = 0.15,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reactId = useId();

  const style = useMemo(() => {
    return {
      "--reveal-delay": `${delay}ms`,
      "--reveal-duration": `${duration}ms`,
      "--reveal-y": `${y}px`,
    } as React.CSSProperties;
  }, [delay, duration, y]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: Math.min(Math.max(amount, 0), 1) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, once, reactId]);

  return (
    <div
      ref={ref}
      className={cx("reveal", visible && "reveal-in", className)}
      style={style}
    >
      {children}
    </div>
  );
}
