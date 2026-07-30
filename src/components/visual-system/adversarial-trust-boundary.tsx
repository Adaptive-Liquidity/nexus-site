import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type ThreatId = "token" | "memory" | "external" | "host";

const THREATS: { id: ThreatId; label: string }[] = [
  { id: "token", label: "Expired capability" },
  { id: "memory", label: "Forged memory context" },
  { id: "external", label: "External side effect" },
  { id: "host", label: "Compromised host" },
];

const COPY: Record<
  ThreatId,
  { result: string; detail: string; classification: string }
> = {
  token: {
    classification: "Enforced",
    result: "Enforced: expired authority is denied before the host call.",
    detail:
      "The denial and capability mismatch can be Observed as evidence. Residual Trust remains in host integrity. External-effect absence is Not Established beyond the governed boundary.",
  },
  memory: {
    classification: "Enforced · Observed",
    result:
      "Enforced: unverified memory cannot increase execution authority. Observed: mode degrades.",
    detail:
      "Evidence mode becomes Advisory/Degraded/Absent. Full memory-state binding remains Stage 0 (Not Established as end-to-end guarantee).",
  },
  external: {
    classification: "Not Established",
    result:
      "Not Established: an escaped external effect exceeds snapshot rollback.",
    detail:
      "The receipt can Observe the failure. Compensation for irreversible external effects remains Target Architecture. Residual Trust in host/network remains.",
  },
  host: {
    classification: "Residual Trust",
    result:
      "Residual Trust: a compromised host can invalidate the runtime’s observations.",
    detail:
      "Proof Capsules disclose trust in the Nexus runtime and host boundary. External anchoring cannot retroactively remove that assumption.",
  },
};

export function AdversarialTrustBoundary({
  className,
}: {
  className?: string;
}) {
  const [threat, setThreat] = useState<ThreatId>("token");
  const uid = useId().replace(/:/g, "");
  const microId = `${uid}-micro`;
  const arrowId = `${uid}-arrow`;
  const copy = COPY[threat];

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-carbon",
        className,
      )}
      data-testid="adversarial-trust-boundary"
      data-figure="FIG-SEC-05"
      data-threat={threat}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4">
        <div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-porcelain-subtle">
            FIG-SEC-05 · Adversarial trust model
          </p>
          <p className="mt-0.5 text-xs text-porcelain-muted">
            Select attack path · named boundary · residual trust
          </p>
        </div>
        <div
          className="flex flex-wrap gap-1.5"
          role="toolbar"
          aria-label="Attack path"
        >
          {THREATS.map((t) => (
            <button
              key={t.id}
              type="button"
              data-threat={t.id}
              aria-pressed={threat === t.id}
              onClick={() => setThreat(t.id)}
              className={cn(
                "rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.05em]",
                threat === t.id
                  ? "border-controlled-red/55 bg-controlled-red/20 text-porcelain"
                  : "border-border text-porcelain-subtle hover:text-porcelain-muted",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative aspect-[16/11] w-full bg-void sm:aspect-video">
        <svg
          viewBox="0 0 1200 675"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-labelledby={`${uid}-title`}
        >
          <title id={`${uid}-title`}>
            Nested trust boundaries and adversarial paths
          </title>
          <defs>
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
            <marker
              id={arrowId}
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0 0L8 4L0 8Z" fill="#b96464" />
            </marker>
          </defs>
          <rect width="1200" height="675" fill={`url(#${microId})`} />

          <g transform="translate(125 70)">
            <rect
              width="950"
              height="520"
              rx="30"
              fill="#111820"
              stroke="#b96464"
              strokeOpacity=".38"
            />
            <text
              x="30"
              y="42"
              fill="#b96464"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              EXTERNAL SYSTEMS + IRREVERSIBLE EFFECTS
            </text>
            <rect
              x="95"
              y="75"
              width="760"
              height="385"
              rx="26"
              fill="#121a20"
              stroke="#d4a55f"
              strokeOpacity=".42"
            />
            <text
              x="125"
              y="113"
              fill="#d4a55f"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              HOST OS · OPERATORS · KEY CUSTODY
            </text>
            <rect
              x="190"
              y="145"
              width="570"
              height="250"
              rx="22"
              fill="#102028"
              stroke="#5f93a8"
              strokeOpacity=".58"
            />
            <text
              x="220"
              y="182"
              fill="#5f93a8"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              NEXUS RUNTIME BOUNDARY
            </text>
            <rect
              x="285"
              y="215"
              width="380"
              height="115"
              rx="18"
              fill="#0b1014"
              stroke="#75a184"
              strokeOpacity=".7"
            />
            <text
              x="315"
              y="250"
              fill="#75a184"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              WASM GUEST + CAPABILITY-GATED WASI
            </text>
            <path d="M330 285H620" stroke="#f6f1e7" strokeOpacity=".18" />
            <text x="330" y="308" fill="#b8b3a8" fontSize="11">
              sandboxed execution state · snapshot / rollback
            </text>
          </g>

          {/* Paths — coordinates relative to full SVG (boundary group is translated) */}
          <g opacity={threat === "token" ? 1 : 0} className="transition-opacity">
            <path
              d="M80 337H410"
              stroke="#b96464"
              strokeWidth="4"
              markerEnd={`url(#${arrowId})`}
            />
            <path
              d="M395 320l30 34M425 320l-30 34"
              stroke="#b96464"
              strokeWidth="4"
            />
            <text
              x="85"
              y="315"
              fill="#f0b1b1"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
            >
              EXPIRED / REVOKED TOKEN
            </text>
            <text
              x="438"
              y="350"
              fill="#75a184"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
            >
              DENIED AT AUTHORITY CHECK
            </text>
          </g>

          <g opacity={threat === "memory" ? 1 : 0} className="transition-opacity">
            <path
              d="M80 210H380V265H410"
              fill="none"
              stroke="#b96464"
              strokeWidth="4"
              markerEnd={`url(#${arrowId})`}
            />
            <path
              d="M395 248l30 34M425 248l-30 34"
              stroke="#b96464"
              strokeWidth="4"
            />
            <text
              x="85"
              y="190"
              fill="#f0b1b1"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
            >
              FORGED MEMORY CONTEXT
            </text>
            <text
              x="440"
              y="265"
              fill="#d4a55f"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
            >
              MODE DEGRADES / AUTHORITY UNCHANGED
            </text>
          </g>

          <g
            opacity={threat === "external" ? 1 : 0}
            className="transition-opacity"
          >
            <path
              d="M600 337H1120"
              stroke="#b96464"
              strokeWidth="4"
              markerEnd={`url(#${arrowId})`}
            />
            <text
              x="770"
              y="315"
              fill="#f0b1b1"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
            >
              EFFECT ESCAPES BEFORE ABORT
            </text>
            <text
              x="780"
              y="365"
              fill="#b96464"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
            >
              DIRECT ROLLBACK NOT ESTABLISHED · COMPENSATION TARGET
            </text>
          </g>

          <g opacity={threat === "host" ? 1 : 0} className="transition-opacity">
            <path
              d="M1075 110C950 150 930 245 885 340"
              fill="none"
              stroke="#b96464"
              strokeWidth="4"
              markerEnd={`url(#${arrowId})`}
            />
            <text
              x="900"
              y="90"
              fill="#f0b1b1"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
            >
              COMPROMISED HOST / KEY CUSTODY
            </text>
            <text
              x="770"
              y="420"
              fill="#b96464"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
            >
              RESIDUAL TRUST · OUTSIDE CAPSULE’S GUARANTEE
            </text>
          </g>

          <g transform="translate(75 550)">
            <rect
              width="1050"
              height="80"
              rx="12"
              fill="#111820"
              stroke="#f6f1e7"
              strokeOpacity=".14"
            />
            <text
              x="25"
              y="32"
              fill="#f6f1e7"
              fontFamily="Georgia, serif"
              fontSize="18"
            >
              {copy.result}
            </text>
            <text x="25" y="57" fill="#b8b3a8" fontSize="12">
              {copy.detail}
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-3 py-2.5 sm:px-4">
        <p className="text-xs leading-relaxed text-porcelain-muted">
          Classification:{" "}
          <span className="font-mono text-porcelain">{copy.classification}</span>
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-porcelain-subtle">
          Stage 0 foundations · residual trust disclosed
        </p>
      </figcaption>
    </figure>
  );
}
