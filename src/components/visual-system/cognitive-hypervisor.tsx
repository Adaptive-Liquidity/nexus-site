import { useId, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  HYPERVISOR_PHASE_COPY,
  HYPERVISOR_PHASE_ORDER,
  type HypervisorPhase,
  hypervisorPhaseFromProgress,
} from "@/components/visual-system/phase-copy";

const PHASE_BUTTONS: { id: HypervisorPhase; label: string }[] = [
  { id: "intent", label: "01 Intent" },
  { id: "stage", label: "02 Stage" },
  { id: "constrain", label: "03 Constrain" },
  { id: "validate", label: "04 Validate" },
  { id: "commit", label: "05 Commit" },
  { id: "abort", label: "05 Abort" },
  { id: "emit", label: "06 Emit" },
];

function phaseClass(
  group: HypervisorPhase,
  active: HypervisorPhase,
): string {
  const order = HYPERVISOR_PHASE_ORDER;
  const activeIdx = order.indexOf(active === "abort" ? "commit" : active);
  const idx = order.indexOf(group === "abort" ? "commit" : group);
  if (group === active) return "opacity-100";
  if (
    (active === "commit" && group === "abort") ||
    (active === "abort" && group === "commit")
  ) {
    return "opacity-[0.28]";
  }
  if (idx >= 0 && idx < activeIdx) return "opacity-90";
  return "opacity-[0.28]";
}

export function CognitiveHypervisor({
  progress,
  phase: phaseProp,
  onPhaseChange,
  interactive = true,
  className,
  reducedMotion = false,
}: {
  /** Scroll progress 0–1 when driven by pin */
  progress?: number;
  /** Controlled phase (overrides progress when set interactively) */
  phase?: HypervisorPhase;
  onPhaseChange?: (p: HypervisorPhase) => void;
  interactive?: boolean;
  className?: string;
  reducedMotion?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const phase =
    phaseProp ??
    hypervisorPhaseFromProgress(
      reducedMotion ? 0.94 : (progress ?? 0.04),
      false,
    );
  const copy = HYPERVISOR_PHASE_COPY[phase];
  const packetX = copy.packetX;

  const titleId = `${uid}-title`;
  const descId = `${uid}-desc`;
  const glassId = `${uid}-glass`;
  const beamId = `${uid}-beam`;
  const microId = `${uid}-micro`;
  const latticeId = `${uid}-lattice`;

  const figureLabel = useMemo(
    () => `FIG-HYP-01 · ${phase.toUpperCase()}`,
    [phase],
  );

  return (
    <figure
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-none bg-void",
        className,
      )}
      data-testid="cognitive-hypervisor"
      data-phase={phase}
      data-figure="FIG-HYP-01"
    >
      <figcaption className="sr-only">
        Cognitive Hypervisor product mechanism. {copy.title} {copy.body}
      </figcaption>

      {interactive ? (
        <div
          className="absolute left-0 right-0 top-0 z-[30] flex flex-wrap gap-1.5 border-b border-border/60 bg-void/95 px-2 py-2 backdrop-blur-sm sm:px-3"

          role="toolbar"
          aria-label="Hypervisor phase"
        >
          <span className="mr-2 hidden font-mono text-[9px] uppercase tracking-[0.14em] text-porcelain-subtle sm:inline">
            {figureLabel}
          </span>
          {PHASE_BUTTONS.map((b) => (
            <button
              key={b.id}
              type="button"
              data-phase={b.id}
              aria-pressed={phase === b.id}
              onClick={() => onPhaseChange?.(b.id)}
              className={cn(
                "rounded-md border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.06em] transition-colors sm:text-[10px]",
                phase === b.id
                  ? b.id === "commit"
                    ? "border-oxide/60 bg-oxide/20 text-porcelain"
                    : b.id === "abort"
                      ? "border-controlled-red/60 bg-controlled-red/20 text-porcelain"
                      : "border-institution/50 bg-institution/20 text-porcelain"
                  : "border-border bg-carbon/80 text-porcelain-subtle hover:border-porcelain/25 hover:text-porcelain-muted",
              )}
            >
              {b.label}
            </button>
          ))}
        </div>
      ) : null}

      <div
        className={cn(
          "relative min-h-0 flex-1",
          interactive && "pt-11 sm:pt-12",
        )}
      >
        <svg
          viewBox="0 0 1200 675"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-labelledby={`${titleId} ${descId}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <title id={titleId}>Cognitive Hypervisor product mechanism</title>
          <desc id={descId}>
            Agent intent enters a staged execution boundary, authority is bound,
            validators evaluate the proposed change, the action commits or
            aborts, and a Proof Capsule is emitted.
          </desc>
          <defs>
            <linearGradient id={glassId} x1="0" x2="1">
              <stop stopColor="#cbe8f2" stopOpacity=".08" />
              <stop offset=".5" stopColor="#83b4c6" stopOpacity=".32" />
              <stop offset="1" stopColor="#13222a" stopOpacity=".08" />
            </linearGradient>
            <linearGradient id={beamId} x1="0" x2="1">
              <stop stopColor="#f6f1e7" stopOpacity="0" />
              <stop offset=".45" stopColor="#f6f1e7" />
              <stop offset="1" stopColor="#5f93a8" />
            </linearGradient>
            <pattern
              id={microId}
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M24 0H0V24"
                fill="none"
                stroke="#f6f1e7"
                strokeOpacity=".045"
              />
            </pattern>
            <pattern
              id={latticeId}
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M18 0L36 9V27L18 36L0 27V9Z"
                fill="none"
                stroke="#5f93a8"
                strokeOpacity=".19"
              />
            </pattern>
          </defs>

          <rect width="1200" height="675" fill={`url(#${microId})`} />
          <g opacity=".5">
            <path
              d="M55 105H1145M55 570H1145"
              stroke="#f6f1e7"
              strokeOpacity=".12"
            />
            <path d="M600 55V620" stroke="#f6f1e7" strokeOpacity=".06" />
          </g>

          {/* Intent */}
          <g
            data-group="intent"
            className={cn(
              "transition-opacity duration-300",
              phaseClass("intent", phase),
            )}
          >
            <text
              x="65"
              y="130"
              fill="#7a7670"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              DECLARED INTENT
            </text>
            <path
              d="M70 250C135 250 145 310 215 310M70 310H215M70 370C135 370 145 310 215 310"
              fill="none"
              stroke="#f6f1e7"
              strokeOpacity=".38"
              strokeWidth="1.5"
            />
            <g
              style={{
                transform: `translateX(${packetX}px)`,
                transition: reducedMotion
                  ? undefined
                  : "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <rect
                x="212"
                y="278"
                width="92"
                height="64"
                rx="8"
                fill="#111820"
                stroke="#f6f1e7"
                strokeOpacity=".55"
              />
              <path
                d="M228 296h60M228 309h45M228 322h52"
                stroke="#f6f1e7"
                strokeOpacity=".48"
              />
              <circle cx="288" cy="296" r="3" fill="#d4a55f" />
            </g>
            <text x="68" y="425" fill="#b8b3a8" fontSize="13">
              Scope + requested effect
            </text>
            <text x="68" y="447" fill="#7a7670" fontSize="11">
              No authority implied
            </text>
          </g>

          <path
            d="M305 310H930"
            stroke="#f6f1e7"
            strokeOpacity=".12"
            strokeWidth="8"
          />
          <path
            d="M305 310H930"
            fill="none"
            stroke={`url(#${beamId})`}
            strokeWidth="2"
            strokeDasharray={reducedMotion ? undefined : "5 8"}
            className={reducedMotion ? undefined : "vs-flow"}
          />

          {/* Stage */}
          <g
            data-group="stage"
            className={cn(
              "transition-opacity duration-300",
              phaseClass("stage", phase),
            )}
          >
            <text
              x="345"
              y="130"
              fill="#7a7670"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              STAGED STATE
            </text>
            <rect
              x="340"
              y="190"
              width="120"
              height="250"
              rx="12"
              fill={`url(#${glassId})`}
              stroke="#5f93a8"
              strokeOpacity=".62"
            />
            <rect
              x="360"
              y="225"
              width="80"
              height="70"
              rx="7"
              fill="#111820"
              stroke="#f6f1e7"
              strokeOpacity=".3"
            />
            <rect
              x="368"
              y="233"
              width="80"
              height="70"
              rx="7"
              fill="none"
              stroke="#5f93a8"
              strokeOpacity=".62"
              strokeDasharray="4 5"
            />
            <path
              d="M376 326h48M376 340h58M376 354h38"
              stroke="#b8b3a8"
              strokeOpacity=".48"
            />
            <path d="M400 205v-25M400 450v25" stroke="#5f93a8" strokeOpacity=".5" />
            <text x="358" y="410" fill="#b8b3a8" fontSize="11">
              snapshot S₀
            </text>
          </g>

          {/* Authority */}
          <g
            data-group="constrain"
            className={cn(
              "transition-opacity duration-300",
              phaseClass("constrain", phase),
            )}
          >
            <text
              x="495"
              y="130"
              fill="#7a7670"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              AUTHORITY PLANE
            </text>
            <rect
              x="500"
              y="170"
              width="132"
              height="290"
              rx="12"
              fill={`url(#${latticeId})`}
              stroke="#5f93a8"
              strokeOpacity=".72"
            />
            <path d="M520 310H612" stroke="#f6f1e7" strokeOpacity=".45" />
            <path
              d="M536 230l28-16 28 16v32l-28 16-28-16z"
              fill="#2f5e73"
              fillOpacity=".18"
              stroke="#5f93a8"
            />
            <path
              d="M550 246l9 9 19-23"
              fill="none"
              stroke="#75a184"
              strokeWidth="3"
            />
            <g fill="#f6f1e7">
              <circle cx="522" cy="380" r="3" />
              <circle cx="560" cy="395" r="3" />
              <circle cx="604" cy="372" r="3" />
            </g>
            <path
              d="M522 380L560 395L604 372"
              fill="none"
              stroke="#f6f1e7"
              strokeOpacity=".35"
            />
            <text x="517" y="428" fill="#b8b3a8" fontSize="11">
              attenuate, never widen
            </text>
          </g>

          {/* Validation */}
          <g
            data-group="validate"
            className={cn(
              "transition-opacity duration-300",
              phaseClass("validate", phase),
            )}
          >
            <text
              x="665"
              y="130"
              fill="#7a7670"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              VALIDATION ARRAY
            </text>
            <rect
              x="670"
              y="185"
              width="130"
              height="270"
              rx="12"
              fill="#111820"
              stroke="#a9793b"
              strokeOpacity=".55"
            />
            <g transform="translate(690 220)">
              {[0, 52, 104, 156].map((y) => (
                <rect
                  key={y}
                  y={y}
                  width="90"
                  height="38"
                  rx="6"
                  fill="#1a252d"
                  stroke="#f6f1e7"
                  strokeOpacity=".17"
                />
              ))}
              <g fill="#d4a55f">
                {[19, 71, 123, 175].map((cy) => (
                  <circle key={cy} cx="15" cy={cy} r="4" />
                ))}
              </g>
              <g stroke="#b8b3a8" strokeOpacity=".45">
                {[19, 71, 123, 175].map((y) => (
                  <path key={y} d={`M28 ${y}h47`} />
                ))}
              </g>
            </g>
          </g>

          {/* Commit */}
          <g
            data-group="commit"
            className={cn(
              "transition-opacity duration-300",
              phaseClass("commit", phase),
            )}
          >
            <text
              x="835"
              y="130"
              fill="#7a7670"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              CONTROLLED DECISION
            </text>
            <path
              d="M800 310H850C885 310 885 250 925 250H1000"
              fill="none"
              stroke="#75a184"
              strokeWidth="4"
            />
            <rect
              x="1000"
              y="218"
              width="106"
              height="64"
              rx="8"
              fill="#13201a"
              stroke="#75a184"
            />
            <text
              x="1021"
              y="246"
              fill="#e8f0eb"
              fontFamily="ui-monospace, monospace"
              fontSize="12"
            >
              COMMIT
            </text>
            <text x="1017" y="264" fill="#75a184" fontSize="10">
              effects applied
            </text>
          </g>

          {/* Abort */}
          <g
            data-group="abort"
            className={cn(
              "transition-opacity duration-300",
              phaseClass("abort", phase),
            )}
          >
            <path
              d="M800 310H850C885 310 885 390 925 390H1000"
              fill="none"
              stroke="#b96464"
              strokeWidth="4"
            />
            <rect
              x="1000"
              y="358"
              width="106"
              height="64"
              rx="8"
              fill="#231111"
              stroke="#b96464"
            />
            <text
              x="1024"
              y="386"
              fill="#f5eaea"
              fontFamily="ui-monospace, monospace"
              fontSize="12"
            >
              ABORT
            </text>
            <text x="1013" y="404" fill="#b96464" fontSize="10">
              restore S₀
            </text>
            <path
              d="M1000 410C950 500 430 510 400 440"
              fill="none"
              stroke="#b96464"
              strokeOpacity=".45"
              strokeDasharray="5 7"
            />
          </g>

          {/* Evidence */}
          <g
            data-group="emit"
            className={cn(
              "transition-opacity duration-300",
              phaseClass("emit", phase),
            )}
          >
            <text
              x="970"
              y="510"
              fill="#7a7670"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              EVIDENCE EMISSION
            </text>
            <path d="M1053 282V500M1053 422V500" stroke="#d4a55f" strokeOpacity=".7" />
            <g transform="translate(968 518)">
              <rect
                width="170"
                height="98"
                rx="10"
                fill="#eee7d8"
                stroke="#fff"
                strokeOpacity=".5"
              />
              <path
                d="M18 28h90M18 42h130M18 56h112M18 70h80"
                stroke="#4a5560"
                strokeOpacity=".55"
              />
              <rect
                x="122"
                y="18"
                width="28"
                height="28"
                rx="4"
                fill="none"
                stroke="#2f5e73"
              />
              <path
                d="M128 32l6 6 11-14"
                fill="none"
                stroke="#496f59"
                strokeWidth="2"
              />
              <text
                x="18"
                y="88"
                fill="#4a5560"
                fontFamily="ui-monospace, monospace"
                fontSize="8"
              >
                limitations[] · signature · digests
              </text>
            </g>
          </g>

          <text
            x="65"
            y="595"
            fill="#f6f1e7"
            fontFamily="Georgia, serif"
            fontSize="22"
          >
            {copy.title}
          </text>
          <text x="65" y="623" fill="#b8b3a8" fontSize="13">
            {copy.body}
          </text>
        </svg>
      </div>
    </figure>
  );
}
