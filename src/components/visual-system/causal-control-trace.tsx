import { useId, useState } from "react";
import { KarStrip } from "@/components/visual-system/kar-strip";
import {
  projectObservatory,
  type KarState,
} from "@/content/observatory-scenarios";
import { cn } from "@/lib/utils";

function karForOutcome(outcome: "commit" | "abort"): KarState {
  // Map to terminal KAR from the corresponding observatory fixture
  if (outcome === "commit") {
    return projectObservatory("commit", 5).kar;
  }
  return projectObservatory("rollback", 5).kar;
}

export function CausalControlTrace({
  className,
}: {
  className?: string;
}) {
  const [outcome, setOutcome] = useState<"commit" | "abort">("commit");
  const uid = useId().replace(/:/g, "");
  const coneId = `${uid}-cone`;
  const arrowId = `${uid}-arrow`;
  const microId = `${uid}-micro`;
  const abort = outcome === "abort";
  const kar = karForOutcome(outcome);

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-carbon",
        className,
      )}
      data-testid="causal-control-trace"
      data-figure="FIG-CTL-02"
      data-outcome={outcome}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4">
        <div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-porcelain-subtle">
            FIG-CTL-02 · Causal control trace
          </p>
          <p className="mt-0.5 text-xs text-porcelain-muted">
            Direct tool execution vs governed transaction
          </p>
        </div>
        <div
          className="flex gap-1.5"
          role="group"
          aria-label="Trace outcome"
        >
          <button
            type="button"
            aria-pressed={!abort}
            onClick={() => setOutcome("commit")}
            className={cn(
              "rounded-md border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em]",
              !abort
                ? "border-oxide/60 bg-oxide/20 text-porcelain"
                : "border-border text-porcelain-subtle hover:text-porcelain-muted",
            )}
          >
            Commit trace
          </button>
          <button
            type="button"
            aria-pressed={abort}
            onClick={() => setOutcome("abort")}
            className={cn(
              "rounded-md border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em]",
              abort
                ? "border-controlled-red/60 bg-controlled-red/20 text-porcelain"
                : "border-border text-porcelain-subtle hover:text-porcelain-muted",
            )}
          >
            Abort trace
          </button>
        </div>
      </div>

      <KarStrip kar={kar} compact />

      <div className="relative aspect-[16/10] w-full bg-void sm:aspect-video">
        <svg
          viewBox="0 0 1200 675"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-labelledby={`${uid}-title`}
        >
          <title id={`${uid}-title`}>
            Comparison of uncontrolled agent execution and Nexus-IQ controlled
            execution
          </title>
          <defs>
            <linearGradient id={coneId} x1="0" x2="1">
              <stop stopColor="#7a3e3e" stopOpacity=".42" />
              <stop offset="1" stopColor="#7a3e3e" stopOpacity="0" />
            </linearGradient>
            <marker
              id={arrowId}
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0 0L8 4L0 8Z" fill="#b8b3a8" />
            </marker>
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
          </defs>
          <rect width="1200" height="675" fill={`url(#${microId})`} />

          <text
            x="60"
            y="80"
            fill="#b8b3a8"
            fontFamily="ui-monospace, monospace"
            fontSize="12"
            letterSpacing="2"
          >
            WITHOUT A COMMIT BOUNDARY
          </text>
          <text
            x="60"
            y="370"
            fill="#b8b3a8"
            fontFamily="ui-monospace, monospace"
            fontSize="12"
            letterSpacing="2"
          >
            WITH NEXUS-IQ
          </text>

          {/* Uncontrolled */}
          <g>
            <path
              d="M100 205H1030"
              stroke="#b8b3a8"
              strokeOpacity=".25"
              strokeWidth="2"
              markerEnd={`url(#${arrowId})`}
            />
            <g
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              textAnchor="middle"
            >
              {(
                [
                  [130, "model output", false],
                  [350, "tool call", false],
                  [575, "side effect", true],
                  [880, "report", false],
                ] as const
              ).map(([x, label, danger]) => (
                <g key={label} transform={`translate(${x} 205)`}>
                  <circle
                    r={danger ? 27 : 25}
                    fill={danger ? "#261313" : "#111820"}
                    stroke={danger ? "#b96464" : "#f6f1e7"}
                    strokeOpacity={danger ? 1 : 0.25}
                  />
                  <text y="50" fill={danger ? "#f0b1b1" : "#b8b3a8"}>
                    {label}
                  </text>
                </g>
              ))}
            </g>
            <path d="M575 160L1100 95V315L575 250Z" fill={`url(#${coneId})`} />
            <text
              x="785"
              y="130"
              fill="#b96464"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
              letterSpacing="1.4"
            >
              IRREVERSIBILITY CONE
            </text>
            <path d="M350 167V115" stroke="#b96464" strokeDasharray="4 5" />
            <text
              x="350"
              y="103"
              textAnchor="middle"
              fill="#b96464"
              fontSize="11"
            >
              no authority binding
            </text>
          </g>

          {/* Controlled */}
          <g>
            <path
              d="M100 500H1030"
              stroke="#b8b3a8"
              strokeOpacity=".22"
              strokeWidth="2"
              markerEnd={`url(#${arrowId})`}
            />
            <g
              fontFamily="ui-monospace, monospace"
              fontSize="10"
              textAnchor="middle"
            >
              {(
                [
                  [120, "intent", "#f6f1e7", 0.25, "#111820"],
                  [285, "stage S₀", "#5f93a8", 1, "#111820"],
                  [450, "bind", "#5f93a8", 1, "#111820"],
                  [615, "validate", "#d4a55f", 1, "#111820"],
                  [
                    780,
                    abort ? "abort" : "commit",
                    abort ? "#b96464" : "#75a184",
                    1,
                    abort ? "#231111" : "#13201a",
                  ],
                  [950, "evidence", "#fff", 0.5, "#eee7d8"],
                ] as const
              ).map(([x, label, stroke, so, fill]) => (
                <g key={String(label)} transform={`translate(${x} 500)`}>
                  <rect
                    x="-42"
                    y="-25"
                    width="84"
                    height="50"
                    rx="8"
                    fill={fill}
                    stroke={stroke}
                    strokeOpacity={so}
                  />
                  <text y="47" fill="#b8b3a8">
                    {label}
                  </text>
                </g>
              ))}
            </g>
            <path
              d="M780 460C810 410 900 410 970 420"
              fill="none"
              stroke="#75a184"
              strokeWidth="3"
              opacity={abort ? 0 : 1}
            />
            <text
              x="895"
              y="400"
              fill="#75a184"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
              opacity={abort ? 0 : 1}
            >
              effect crosses only here
            </text>
            <path
              d="M780 540C720 615 320 615 285 535"
              fill="none"
              stroke="#b96464"
              strokeWidth="2"
              strokeDasharray="5 7"
              opacity={abort ? 1 : 0}
            />
            <text
              x="515"
              y="620"
              fill="#b96464"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
              opacity={abort ? 1 : 0}
            >
              abort restores staged state; denial is still evidenced
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="border-t border-border px-3 py-2.5 sm:px-4">
        <p className="text-xs leading-relaxed text-porcelain-muted">
          {abort
            ? "Abort restores staged state where supported and still emits evidence. Denial is a first-class controlled outcome."
            : "Committed effect crosses only after stage, authority bind, and validation survive. The irreversibility cone never opens early."}
        </p>
      </figcaption>
    </figure>
  );
}
