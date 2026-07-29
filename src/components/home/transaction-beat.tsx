import { type ReactNode } from "react";
import {
  TRANSACTION_BEATS,
  type TransactionBeatId,
} from "@/content/transaction-beats";
import { cn } from "@/lib/utils";

/**
 * Section chrome that marks each homepage block as a transaction beat.
 */
export function TransactionBeatChrome({
  beatId,
  children,
  className,
  surface = "runtime",
}: {
  beatId: TransactionBeatId;
  children: ReactNode;
  className?: string;
  surface?: "runtime" | "paper";
}) {
  const beat = TRANSACTION_BEATS.find((b) => b.id === beatId);
  if (!beat) return <>{children}</>;

  const paper = surface === "paper";

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "border-b px-4 py-2 sm:px-6",
          paper
            ? "border-[color:var(--color-border-paper)] bg-archive-muted/40"
            : "border-border bg-carbon/60",
        )}
      >
        <div className="mx-auto flex max-w-[72rem] flex-wrap items-center gap-x-3 gap-y-1">
          <span
            className={cn(
              "font-mono text-[10px] tabular-nums tracking-wider",
              paper ? "text-archive-ink-muted" : "text-porcelain-subtle",
            )}
          >
            TXN {String(beat.step).padStart(2, "0")}
          </span>
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.12em]",
              paper ? "text-archive-ink" : "text-porcelain-muted",
            )}
          >
            {beat.gateMetaphor}
          </span>
          <span
            className={cn(
              "text-xs",
              paper ? "text-archive-ink-muted" : "text-porcelain-subtle",
            )}
          >
            {beat.connector}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}

/** Thin connector band between major beats */
export function TransactionConnector({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  return (
    <div
      className="border-b border-border bg-void"
      aria-hidden
    >
      <div className="mx-auto flex max-w-[72rem] items-center gap-3 px-4 py-3 sm:px-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
          {from}
          <span className="mx-2 text-institution">→</span>
          {to}
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}
