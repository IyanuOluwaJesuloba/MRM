import { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";

export function Section({
  children,
  className,
  id,
  glassy = false,
  fullBleed = false,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  glassy?: boolean;
  fullBleed?: boolean;
  style?: CSSProperties;
}) {
  return (
    <section id={id} className={cx("section-shell", fullBleed && "section-shell-full", className)} style={style}>
      {glassy ? <div className="glass-panel">{children}</div> : children}
    </section>
  );
}

export function Card({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={cx("card-surface", className)} style={style}>
      {children}
    </div>
  );
}
