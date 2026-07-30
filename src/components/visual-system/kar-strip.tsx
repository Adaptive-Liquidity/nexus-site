import type { KarState, KarValue } from "@/content/observatory-scenarios";
import { cn } from "@/lib/utils";

const SYMBOL: Record<KarValue, string> = {
  Yes: "■",
  No: "□",
  Conditional: "◇",
  "Not Established": "○",
};

function Cell({
  label,
  value,
  detail,
}: {
  label: string;
  value: KarValue;
  detail: string;
}) {
  return (
    <div
      className="min-w-0 flex-1 rounded-md border border-border/70 bg-void/80 px-2 py-1.5"
      data-kar-cell={label.toLowerCase()}
      data-kar-value={value}
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-porcelain-subtle">
        {label}
      </p>
      <p className="mt-0.5 font-mono text-[11px] text-porcelain">
        <span aria-hidden className="mr-1 text-porcelain-muted">
          {SYMBOL[value]}
        </span>
        {value}
      </p>
      <p className="mt-0.5 text-[10px] leading-snug text-porcelain-muted">
        {detail}
      </p>
    </div>
  );
}

/**
 * Persistent KNOWN | AUTHORIZED | REVERSIBLE strip.
 * Values must come from event-stream projection only.
 */
export function KarStrip({
  kar,
  className,
  compact = false,
}: {
  kar: KarState;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "border-b border-border bg-carbon/60",
        compact ? "px-2 py-1.5" : "px-3 py-2",
        className,
      )}
      data-testid="kar-strip"
      role="group"
      aria-label="Known, authorized, and reversible state"
    >
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-porcelain-subtle">
          KAR · Known · Authorized · Reversible
        </p>
        <p className="hidden font-mono text-[9px] text-porcelain-subtle sm:block">
          ■ Yes · □ No · ◇ Conditional · ○ Not Established
        </p>
      </div>
      <div className="flex flex-col gap-1.5 sm:flex-row">
        <Cell label="Known" value={kar.known} detail={kar.knownDetail} />
        <Cell
          label="Authorized"
          value={kar.authorized}
          detail={kar.authorizedDetail}
        />
        <Cell
          label="Reversible"
          value={kar.reversible}
          detail={kar.reversibleDetail}
        />
      </div>
    </div>
  );
}
