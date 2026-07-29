import type { ReactNode } from "react";

/**
 * Motif-first handoff: instrument emit tray / capsule continues into DemoPlayer.
 * Not a text-only gradient wash. DemoPlayer remains the interactive proof surface.
 */
export function SceneHandoff({ children }: { children?: ReactNode }) {
  return (
    <div
      className="relative overflow-hidden border-b border-border bg-void"
      data-testid="scene-handoff"
    >
      {/* Apparatus shell continuation */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
        aria-hidden
      >
        <div className="relative h-36 w-full max-w-3xl px-4 sm:px-6">
          {/* Instrument mouth opening downward into demo */}
          <div
            className="absolute left-1/2 top-0 h-28 w-[min(100%,36rem)] -translate-x-1/2 rounded-b-2xl border border-t-0 border-border bg-carbon/80"
            style={{
              boxShadow:
                "inset 0 -24px 48px color-mix(in oklab, var(--color-void) 55%, transparent)",
            }}
          />
          {/* Spine continuation */}
          <div
            className="absolute left-1/2 top-0 h-32 w-0.5 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in oklab, var(--color-institution) 70%, transparent), transparent)",
            }}
          />
          {/* Dual exit echoes — diamond Abort / square Commit */}
          <svg
            className="absolute left-1/2 top-2 h-28 w-full max-w-xl -translate-x-1/2"
            viewBox="0 0 400 100"
            aria-hidden
          >
            <path
              d="M200 8 C 240 20, 280 18, 340 28"
              fill="none"
              stroke="var(--color-controlled-red)"
              strokeWidth="2.5"
            />
            <path
              d="M200 8 C 240 30, 290 55, 345 72"
              fill="none"
              stroke="var(--color-oxide)"
              strokeWidth="2.5"
            />
            {/* Abort diamond */}
            <polygon
              points="340,20 348,28 340,36 332,28"
              fill="var(--color-controlled-red)"
            />
            {/* Commit square */}
            <rect
              x="337"
              y="64"
              width="16"
              height="16"
              fill="var(--color-oxide)"
            />
          </svg>
          {/* Capsule tray aligning into demo */}
          <div
            data-instrument-node="handoff-capsule"
            className="absolute left-1/2 top-16 flex -translate-x-1/2 items-center gap-2 rounded-md border border-archive-ink/15 bg-archive px-3 py-1.5 opacity-90"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-archive-ink/70">
              Capsule → proof surface
            </span>
            <span className="block h-3 w-8 rounded-sm bg-archive-ink/20" />
          </div>
        </div>
      </div>

      <div className="relative pt-8">{children}</div>
    </div>
  );
}
