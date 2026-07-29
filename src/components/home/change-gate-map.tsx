import { CHANGE_GATE_PHASES } from "@/content/change-gate";
import { ForensicFrame } from "@/components/home/forensic-frame";
import { MaturityBadge } from "@/components/site/maturity-badge";
import type { InternalStatus } from "@/content/maturity";
import { cn } from "@/lib/utils";

const STATUS_DOT: Record<string, string> = {
  CURRENT: "bg-oxide",
  IN_DEVELOPMENT: "bg-signal",
  TARGET: "bg-target-outline",
  EXPERIMENTAL: "bg-porcelain-subtle",
  LIMITATION: "bg-controlled-red",
};

/**
 * Horizontal forensic map of the full Change Gate pipeline
 * including Approve + Compensate (destination phases).
 */
export function ChangeGateMap({
  activeId,
  onSelect,
  className,
}: {
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}) {
  return (
    <ForensicFrame
      title="Change Gate map"
      refId="FIG-CG-02 · full pipeline"
      classification="OPERATING MODEL"
      className={className}
      footer="Solid nodes = Implemented Foundation · Amber = In Integration · Outline = Target Architecture. Abort and compensation are first-class, not afterthoughts."
    >
      {/* Desktop map */}
      <div className="hidden overflow-x-auto md:block">
        <div className="relative min-w-[640px] pb-2 pt-1">
          {/* spine */}
          <div
            className="absolute left-4 right-4 top-[28px] h-px bg-border"
            aria-hidden
          />
          {/* fork zone marker */}
          <div
            className="absolute left-[58%] top-[18px] h-5 w-px bg-institution/50"
            aria-hidden
          />

          <ol className="relative flex justify-between gap-1 px-1">
            {CHANGE_GATE_PHASES.map((phase, i) => {
              const active = activeId === phase.id;
              const isDecide = phase.id === "decide";
              return (
                <li key={phase.id} className="flex min-w-0 flex-1 flex-col items-center">
                  <button
                    type="button"
                    onClick={() => onSelect?.(phase.id)}
                    className={cn(
                      "group flex w-full flex-col items-center gap-2 rounded-lg px-1 py-1 text-center transition-colors",
                      active && "bg-institution/10",
                    )}
                    aria-current={active ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "relative z-[1] flex size-3.5 items-center justify-center rounded-full border-2 border-carbon",
                        STATUS_DOT[phase.status] ?? "bg-slate",
                        active && "ring-2 ring-porcelain/40 ring-offset-1 ring-offset-carbon",
                        isDecide && "size-4",
                      )}
                      aria-hidden
                    />
                    <span className="font-mono text-[9px] tabular-nums text-porcelain-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "line-clamp-2 text-[11px] font-medium leading-tight",
                        active ? "text-porcelain" : "text-porcelain-muted",
                      )}
                    >
                      {phase.shortLabel}
                    </span>
                    <MaturityBadge
                      status={phase.status as InternalStatus}
                      compact
                      showLabel={false}
                    />
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Commit / Abort annotation under decide */}
          <div className="mt-4 flex justify-center gap-6">
            <span className="inline-flex items-center gap-1.5 rounded border border-oxide/35 bg-oxide/10 px-2 py-1 font-mono text-[10px] text-oxide-fg">
              <span className="size-1.5 rounded-full bg-oxide" aria-hidden />
              Commit path
            </span>
            <span className="inline-flex items-center gap-1.5 rounded border border-controlled-red/35 bg-controlled-red/10 px-2 py-1 font-mono text-[10px] text-controlled-red-fg">
              <span className="size-1.5 rounded-full bg-controlled-red" aria-hidden />
              Abort path
            </span>
          </div>
        </div>
      </div>

      {/* Mobile compact list */}
      <ol className="space-y-1.5 md:hidden">
        {CHANGE_GATE_PHASES.map((phase, i) => {
          const active = activeId === phase.id;
          return (
            <li key={phase.id}>
              <button
                type="button"
                onClick={() => onSelect?.(phase.id)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md border px-2.5 py-2 text-left",
                  active
                    ? "border-institution/40 bg-institution/15"
                    : "border-border bg-void/40",
                )}
              >
                <span className="font-mono text-[10px] text-porcelain-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "size-2 rounded-full",
                    STATUS_DOT[phase.status],
                  )}
                  aria-hidden
                />
                <span className="min-w-0 flex-1 text-sm text-porcelain">
                  {phase.label}
                </span>
                <MaturityBadge status={phase.status} compact showLabel={false} />
              </button>
            </li>
          );
        })}
      </ol>
    </ForensicFrame>
  );
}
