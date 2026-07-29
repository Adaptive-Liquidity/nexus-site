import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl space-y-3", className)}>
      <p
        className={cn(
          "font-mono text-[11px] font-medium uppercase tracking-[0.14em]",
          light ? "text-archive-ink-muted" : "text-porcelain-subtle",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-serif text-2xl font-medium tracking-tight sm:text-3xl",
          light ? "text-archive-ink" : "text-porcelain",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed",
            light ? "text-archive-ink-muted" : "text-porcelain-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
