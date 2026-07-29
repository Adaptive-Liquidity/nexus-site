import { useId, useMemo } from "react";
import { cn } from "@/lib/utils";
import { MaturityBadge } from "@/components/site/maturity-badge";

export type BoundaryPhase =
  | "intent"
  | "stage"
  | "constrain"
  | "validate"
  | "decide"
  | "emit";

const PHASES: { id: BoundaryPhase; label: string; from: number; to: number }[] =
  [
    { id: "intent", label: "Intent", from: 0, to: 0.12 },
    { id: "stage", label: "Stage", from: 0.12, to: 0.28 },
    { id: "constrain", label: "Constrain", from: 0.28, to: 0.44 },
    { id: "validate", label: "Validate", from: 0.44, to: 0.58 },
    { id: "decide", label: "Decide", from: 0.58, to: 0.78 },
    { id: "emit", label: "Emit", from: 0.78, to: 1 },
  ];

function activePhase(progress: number): BoundaryPhase {
  for (const p of PHASES) {
    if (progress < p.to) return p.id;
  }
  return "emit";
}

/**
 * Procedural cinematic: action packet → commit plane → dual path → capsule.
 * Atmospheric only — not runtime evidence. Progress 0…1 drives state.
 */
export function CommitBoundaryStage({
  progress,
  className,
  compact = false,
  showChrome = true,
}: {
  progress: number;
  className?: string;
  compact?: boolean;
  showChrome?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const phase = activePhase(progress);
  const p = Math.min(1, Math.max(0, progress));

  const packetX = useMemo(() => {
    if (p < 0.12) return 48 + (p / 0.12) * 40;
    if (p < 0.58) return 88 + ((p - 0.12) / 0.46) * 180;
    return 268;
  }, [p]);

  const packetOpacity =
    p < 0.05
      ? p / 0.05
      : p > 0.82
        ? Math.max(0.15, 1 - (p - 0.82) / 0.18)
        : 1;
  const gateGlow =
    p >= 0.44 && p < 0.82
      ? 0.35 + (p - 0.44) * 0.8
      : p >= 0.28
        ? 0.2
        : 0.08;
  const forkOpen = p >= 0.58 ? Math.min(1, (p - 0.58) / 0.12) : 0;
  const capsuleY =
    p >= 0.78 ? 200 + Math.min(1, (p - 0.78) / 0.22) * 36 : 200;
  const capsuleOpacity = p >= 0.78 ? Math.min(1, (p - 0.78) / 0.1) : 0;
  const constrict = p >= 0.28 ? Math.min(1, (p - 0.28) / 0.16) : 0;

  const phaseLabel = PHASES.find((x) => x.id === phase)?.label ?? "Intent";
  const chamberW = 200 - constrict * 40;
  const corridorLeft = 236 - constrict * 40;
  const institutionFill = `color-mix(in oklab, var(--color-institution) ${12 + constrict * 20}%, transparent)`;
  const radialGlow = `radial-gradient(ellipse 55% 45% at 72% 48%, color-mix(in oklab, var(--color-institution) ${18 + gateGlow * 40}%, transparent), transparent 70%)`;

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-carbon",
        className,
      )}
      aria-label={`Commit boundary visual — phase ${phaseLabel}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        aria-hidden
        style={{
          backgroundImage: `
            ${radialGlow},
            linear-gradient(color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "auto, 24px 24px, 24px 24px",
        }}
      />

      {showChrome ? (
        <figcaption className="relative flex flex-wrap items-center justify-between gap-2 border-b border-border bg-void/50 px-3 py-2 sm:px-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
              Operating model · atmospheric
            </p>
            <p className="mt-0.5 text-xs text-porcelain-muted">
              Stage → constrain → validate → commit or abort → emit
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-porcelain-subtle">
              Not evidence
            </span>
            <MaturityBadge status="TARGET" compact showLabel />
          </div>
        </figcaption>
      ) : null}

      <div className={cn("relative", compact ? "p-2 sm:p-3" : "p-3 sm:p-4")}>
        <svg
          viewBox="0 0 520 260"
          className="h-auto w-full"
          role="img"
          aria-label={`Boundary phase: ${phaseLabel}`}
        >
          <defs>
            <linearGradient id={`${uid}-lane`} x1="0" y1="0" x2="1" y2="0">
              <stop
                offset="0%"
                stopColor="var(--color-slate)"
                stopOpacity="0.35"
              />
              <stop
                offset="100%"
                stopColor="var(--color-institution)"
                stopOpacity="0.15"
              />
            </linearGradient>
            <filter
              id={`${uid}-glow`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect
            x="36"
            y="70"
            width={chamberW}
            height="120"
            rx="10"
            fill={`url(#${uid}-lane)`}
            stroke="color-mix(in oklab, var(--color-porcelain) 14%, transparent)"
            strokeWidth="1"
          />
          <text
            x="48"
            y="92"
            fill="var(--color-porcelain-subtle)"
            fontSize="9"
            fontFamily="var(--font-mono)"
          >
            STAGED ISOLATION
          </text>

          <path
            d={`M ${corridorLeft} 100 L 280 118 L 280 142 L ${corridorLeft} 160 Z`}
            fill={institutionFill}
            stroke="color-mix(in oklab, var(--color-institution) 45%, transparent)"
            strokeWidth="1"
          />

          <g opacity={0.55 + gateGlow * 0.45}>
            <line
              x1="288"
              y1="78"
              x2="288"
              y2="182"
              stroke="var(--color-institution)"
              strokeWidth="2"
              filter={`url(#${uid}-glow)`}
            />
            <rect
              x="284"
              y="78"
              width="8"
              height="104"
              rx="2"
              fill="color-mix(in oklab, var(--color-institution) 35%, transparent)"
            />
            <text
              x="288"
              y="70"
              textAnchor="middle"
              fill="var(--color-porcelain)"
              fontSize="9"
              fontFamily="var(--font-mono)"
            >
              COMMIT PLANE
            </text>
          </g>

          <g opacity={0.35 + forkOpen * 0.65}>
            <path
              d="M 296 120 C 330 120, 340 70, 380 62"
              fill="none"
              stroke="var(--color-controlled-red)"
              strokeWidth={1.5 + forkOpen}
              strokeDasharray={
                phase === "decide" || phase === "emit" ? undefined : "4 3"
              }
            />
            <rect
              x="380"
              y="48"
              width="88"
              height="28"
              rx="6"
              fill="color-mix(in oklab, var(--color-controlled-red) 18%, transparent)"
              stroke="color-mix(in oklab, var(--color-controlled-red) 55%, transparent)"
            />
            <text
              x="424"
              y="66"
              textAnchor="middle"
              fill="var(--color-porcelain)"
              fontSize="11"
              fontFamily="var(--font-sans)"
            >
              Abort
            </text>

            <path
              d="M 296 140 C 330 140, 340 190, 380 198"
              fill="none"
              stroke="var(--color-oxide)"
              strokeWidth={1.5 + forkOpen}
              strokeDasharray={
                phase === "decide" || phase === "emit" ? undefined : "4 3"
              }
            />
            <rect
              x="380"
              y="184"
              width="88"
              height="28"
              rx="6"
              fill="color-mix(in oklab, var(--color-oxide) 18%, transparent)"
              stroke="color-mix(in oklab, var(--color-oxide) 55%, transparent)"
            />
            <text
              x="424"
              y="202"
              textAnchor="middle"
              fill="var(--color-porcelain)"
              fontSize="11"
              fontFamily="var(--font-sans)"
            >
              Commit
            </text>
          </g>

          {p >= 0.44 ? (
            <g opacity={Math.min(1, (p - 0.44) / 0.1)}>
              {[0, 1, 2].map((i) => (
                <circle
                  key={i}
                  cx={292}
                  cy={100 + i * 22}
                  r={3}
                  fill={
                    p >= 0.44 + i * 0.04
                      ? "var(--color-signal)"
                      : "var(--color-porcelain-subtle)"
                  }
                />
              ))}
              <text
                x="300"
                y="96"
                fill="var(--color-porcelain-subtle)"
                fontSize="8"
                fontFamily="var(--font-mono)"
              >
                VALIDATE
              </text>
            </g>
          ) : null}

          <g
            transform={`translate(${packetX}, 130)`}
            opacity={packetOpacity}
            filter={p < 0.78 ? `url(#${uid}-glow)` : undefined}
          >
            <rect
              x="-14"
              y="-10"
              width="28"
              height="20"
              rx="4"
              fill="color-mix(in oklab, var(--color-porcelain) 12%, transparent)"
              stroke="var(--color-porcelain)"
              strokeWidth="1.2"
            />
            <circle cx="0" cy="0" r="3" fill="var(--color-institution)" />
          </g>

          <g opacity={capsuleOpacity} transform={`translate(250, ${capsuleY})`}>
            <rect
              x="-50"
              y="-16"
              width="100"
              height="32"
              rx="6"
              fill="color-mix(in oklab, var(--color-archive) 85%, transparent)"
              stroke="color-mix(in oklab, var(--color-archive-ink) 25%, transparent)"
            />
            <text
              x="0"
              y="0"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--color-archive-ink)"
              fontSize="10"
              fontFamily="var(--font-mono)"
            >
              PROOF CAPSULE
            </text>
          </g>

          <g transform="translate(36, 232)">
            {PHASES.map((ph, i) => {
              const on = phase === ph.id || p >= ph.to;
              const current = phase === ph.id;
              return (
                <g key={ph.id} transform={`translate(${i * 78}, 0)`}>
                  <circle
                    cx="4"
                    cy="4"
                    r={current ? 4 : 3}
                    fill={
                      on
                        ? current
                          ? "var(--color-institution)"
                          : "var(--color-oxide)"
                        : "var(--color-porcelain-subtle)"
                    }
                  />
                  <text
                    x="12"
                    y="7"
                    fill={
                      current
                        ? "var(--color-porcelain)"
                        : "var(--color-porcelain-subtle)"
                    }
                    fontSize="8"
                    fontFamily="var(--font-mono)"
                  >
                    {ph.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        <p className="mt-2 text-center text-[11px] leading-relaxed text-porcelain-subtle">
          {phase === "intent" &&
            "Autonomous intent approaches the system — not yet authority."}
          {phase === "stage" &&
            "Change is isolated in a staged environment before effects land."}
          {phase === "constrain" &&
            "Capability and policy narrow the path — unauthorized routes close."}
          {phase === "validate" &&
            "Deterministic checks run at the plane before any irreversible effect."}
          {phase === "decide" &&
            "Commit and abort are first-class. Abort is central to the category thesis."}
          {phase === "emit" &&
            "Either path emits an inspectable record — runtime attestation, not mathematical proof."}
        </p>
      </div>
    </figure>
  );
}
