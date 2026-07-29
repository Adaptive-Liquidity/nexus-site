import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Case-file / mission-control chrome around forensic diagrams.
 * Dark runtime or archive paper surfaces.
 */
export function ForensicFrame({
  children,
  title,
  classification = "OPERATIONAL",
  refId,
  surface = "runtime",
  className,
  footer,
}: {
  children: ReactNode;
  title: string;
  classification?: string;
  refId?: string;
  surface?: "runtime" | "paper";
  className?: string;
  footer?: ReactNode;
}) {
  const paper = surface === "paper";

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl border",
        paper
          ? "border-[color:var(--color-border-paper)] bg-white/35"
          : "border-border bg-carbon",
        className,
      )}
    >
      {/* Corner marks */}
      <span
        className={cn(
          "pointer-events-none absolute left-2 top-2 size-3 border-l border-t",
          paper ? "border-archive-ink/30" : "border-porcelain/25",
        )}
        aria-hidden
      />
      <span
        className={cn(
          "pointer-events-none absolute right-2 top-2 size-3 border-r border-t",
          paper ? "border-archive-ink/30" : "border-porcelain/25",
        )}
        aria-hidden
      />
      <span
        className={cn(
          "pointer-events-none absolute bottom-2 left-2 size-3 border-b border-l",
          paper ? "border-archive-ink/30" : "border-porcelain/25",
        )}
        aria-hidden
      />
      <span
        className={cn(
          "pointer-events-none absolute bottom-2 right-2 size-3 border-b border-r",
          paper ? "border-archive-ink/30" : "border-porcelain/25",
        )}
        aria-hidden
      />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
        style={{
          backgroundImage: paper
            ? `linear-gradient(color-mix(in oklab, var(--color-archive-ink) 6%, transparent) 1px, transparent 1px),
               linear-gradient(90deg, color-mix(in oklab, var(--color-archive-ink) 6%, transparent) 1px, transparent 1px)`
            : `linear-gradient(color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px),
               linear-gradient(90deg, color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <figcaption
        className={cn(
          "relative flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2.5",
          paper
            ? "border-[color:var(--color-border-paper)] bg-archive-muted/50"
            : "border-border bg-void/50",
        )}
      >
        <div className="min-w-0">
          <p
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.14em]",
              paper ? "text-archive-ink-muted" : "text-porcelain-subtle",
            )}
          >
            Figure · {title}
          </p>
          {refId ? (
            <p
              className={cn(
                "mt-0.5 font-mono text-[10px] tabular-nums",
                paper ? "text-archive-ink-muted" : "text-porcelain-subtle",
              )}
            >
              {refId}
            </p>
          ) : null}
        </div>
        <span
          className={cn(
            "rounded border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em]",
            paper
              ? "border-archive-ink/20 text-archive-ink"
              : "border-border text-porcelain-muted",
          )}
        >
          {classification}
        </span>
      </figcaption>

      <div className="relative p-4 sm:p-5">{children}</div>

      {footer ? (
        <div
          className={cn(
            "relative border-t px-4 py-2.5 text-xs leading-relaxed",
            paper
              ? "border-[color:var(--color-border-paper)] text-archive-ink-muted"
              : "border-border text-porcelain-subtle",
          )}
        >
          {footer}
        </div>
      ) : null}
    </figure>
  );
}
