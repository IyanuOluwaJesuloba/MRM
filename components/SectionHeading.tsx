import { cx } from "@/lib/cx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <div
      className={cx("flex flex-col gap-4", align === "center" ? "text-center" : "text-left")}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-brand">{eyebrow}</p>
      <h2 className={cx("text-4xl font-semibold leading-tight", tone === "light" && "text-white")}>{title}</h2>
      {description && (
        <p className={cx("text-lg", tone === "light" ? "text-white/70" : "text-muted")}>{description}</p>
      )}
    </div>
  );
}
