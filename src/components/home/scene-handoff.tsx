import type { ReactNode } from "react";

/**
 * Visual bridge: commit plane + dual-path echo continues into DemoPlayer.
 * Same focal language as the pinned scene — not a text-only gradient.
 */
export function SceneHandoff({ children }: { children?: ReactNode }) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-void">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 55% 0%, color-mix(in oklab, var(--color-institution) 32%, transparent), transparent 70%),
            radial-gradient(ellipse 30% 25% at 82% 18%, color-mix(in oklab, var(--color-controlled-red) 22%, transparent), transparent 70%),
            radial-gradient(ellipse 30% 30% at 86% 70%, color-mix(in oklab, var(--color-oxide) 22%, transparent), transparent 70%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-[55%] w-px -translate-x-1/2 max-lg:left-1/2"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, rgba(246,241,231,0.7), rgba(90,155,184,0.4) 40%, transparent)",
          boxShadow:
            "0 0 60px 14px color-mix(in oklab, var(--color-institution) 35%, transparent)",
        }}
      />
      <svg
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-full max-w-3xl -translate-x-1/2 opacity-70"
        viewBox="0 0 600 120"
        aria-hidden
      >
        <path
          d="M300 0 C 360 30, 420 20, 520 28"
          fill="none"
          stroke="var(--color-controlled-red)"
          strokeWidth="2"
          opacity="0.7"
        />
        <path
          d="M300 0 C 360 40, 440 70, 530 95"
          fill="none"
          stroke="var(--color-oxide)"
          strokeWidth="2"
          opacity="0.7"
        />
        <circle cx="520" cy="28" r="5" fill="var(--color-controlled-red)" />
        <circle cx="530" cy="95" r="5" fill="var(--color-oxide)" />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
