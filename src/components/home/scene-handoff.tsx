import type { ReactNode } from "react";

/**
 * Motif-first handoff: emitted capsule/tray remains visible and enters the
 * DemoPlayer boundary in the same viewport. Not text + gradient only.
 * DemoPlayer remains the interactive proof surface.
 */
export function SceneHandoff({ children }: { children?: ReactNode }) {
  return (
    <div
      className="relative border-b border-border bg-void"
      data-testid="scene-handoff"
    >
      {/* Continuous apparatus mouth — bridges pin emit into demo surface */}
      <div
        className="pointer-events-none relative z-[1] mx-auto w-full max-w-[72rem] px-4 sm:px-6 xl:pl-[var(--txn-content-gutter)]"
        aria-hidden
      >
        <div
          className="relative mx-auto flex h-20 max-w-3xl flex-col items-center justify-end sm:h-24"
          data-instrument-node="handoff-apparatus"
        >
          {/* Shell continuation from instrument */}
          <div
            className="absolute inset-x-8 top-0 h-full rounded-b-xl border border-t-0 border-border/70 bg-carbon/90 sm:inset-x-16"
            style={{
              boxShadow:
                "inset 0 -32px 56px color-mix(in oklab, var(--color-void) 70%, transparent), 0 24px 48px -28px rgba(0,0,0,0.75)",
            }}
          />
          {/* Spine drop into demo */}
          <div
            className="absolute left-1/2 top-0 h-[70%] w-0.5 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in oklab, var(--color-institution) 75%, transparent), transparent)",
            }}
          />
          {/* Dual-exit residual paths */}
          <svg
            className="absolute left-1/2 top-1 h-16 w-full max-w-md -translate-x-1/2 opacity-80"
            viewBox="0 0 360 70"
            aria-hidden
          >
            <path
              d="M180 4 C 220 14, 260 12, 310 22"
              fill="none"
              stroke="var(--color-controlled-red)"
              strokeWidth="2.25"
            />
            <path
              d="M180 4 C 220 22, 270 42, 315 52"
              fill="none"
              stroke="var(--color-oxide)"
              strokeWidth="2.25"
            />
            <polygon
              points="310,14 318,22 310,30 302,22"
              fill="var(--color-controlled-red)"
            />
            <rect
              x="307"
              y="44"
              width="16"
              height="16"
              fill="var(--color-oxide)"
            />
          </svg>
          {/* Emitted capsule — tangible motif entering proof surface */}
          <div
            data-instrument-node="handoff-capsule"
            data-testid="handoff-capsule"
            className="relative z-[2] mb-0 flex translate-y-1/2 items-center gap-3 rounded-md border border-archive-ink/20 bg-archive px-4 py-2.5 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.85)]"
          >
            <div className="space-y-1">
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-archive-ink/70">
                Proof Capsule
              </p>
              <div className="flex gap-1">
                <span className="block h-1 w-10 rounded-sm bg-archive-ink/25" />
                <span className="block h-1 w-6 rounded-sm bg-archive-ink/20" />
                <span className="block h-1 w-8 rounded-sm bg-archive-ink/15" />
              </div>
            </div>
            <span
              className="font-mono text-[9px] uppercase tracking-[0.1em] text-archive-ink/55"
              aria-hidden
            >
              → live surface
            </span>
          </div>
        </div>
      </div>

      {/* Children sit under the capsule half-overlap so both share one viewport */}
      <div className="relative z-0 pt-8 sm:pt-10">{children}</div>
    </div>
  );
}
