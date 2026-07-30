import { useEffect, useState } from "react";
import {
  getIntegrationScenario,
  INTEGRATION_SCENARIOS,
  type IntegrationScenarioId,
} from "@/content/integration-scenarios";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { TRUST_CLASS_META } from "@/content/trust-taxonomy";
import { buildFigureProvenance, provenanceSummary } from "@/lib/visual-provenance";
import { cn } from "@/lib/utils";

export function IntegrationSimulator({
  className,
  scenarioId: scenarioIdProp,
  stepIndex: stepIndexProp,
  architecture: _architectureProp,

  onScenarioChange,
  onStepChange,
  onArchitectureChange,
}: {
  className?: string;
  scenarioId?: IntegrationScenarioId;
  stepIndex?: number;
  architecture?: "current" | "destination";
  onScenarioChange?: (id: IntegrationScenarioId) => void;
  onStepChange?: (step: number) => void;
  onArchitectureChange?: (a: "current" | "destination") => void;
}) {
  const [internalId, setInternalId] =
    useState<IntegrationScenarioId>("readonly-inspect");
  const [internalStep, setInternalStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const id = scenarioIdProp ?? internalId;
  const step = stepIndexProp ?? internalStep;
  const setId = (next: IntegrationScenarioId) => {
    setInternalId(next);
    onScenarioChange?.(next);
    const sc = getIntegrationScenario(next);
    if (sc.mode === "TARGET_ARCHITECTURE") onArchitectureChange?.("destination");
    else onArchitectureChange?.("current");
  };
  const setStep = (v: number | ((p: number) => number)) => {
    const next = typeof v === "function" ? v(step) : v;
    setInternalStep(next);
    onStepChange?.(next);
  };

  const scenario = getIntegrationScenario(id);
  const current = scenario.steps[Math.min(step, scenario.steps.length - 1)]!;
  const isTarget = scenario.mode === "TARGET_ARCHITECTURE";
  const prov = buildFigureProvenance("FIG-DEV-09", "fixture", {
    filters: `scenario=${id};step=${step}`,
  });

  useEffect(() => {
    setStep(0);
    setPlaying(false);
  }, [id]);

  useEffect(() => {
    if (!playing) return;
    if (step >= scenario.steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = window.setTimeout(() => setStep((s) => s + 1), 900);
    return () => window.clearTimeout(t);
  }, [playing, step, scenario.steps.length]);

  const trust = TRUST_CLASS_META[current.trust];

  return (
    <figure
      className={cn(
        "min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-carbon",
        className,
      )}
      data-testid="integration-simulator"
      data-figure="FIG-DEV-09"
      data-scenario={id}
      data-step={step}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
            FIG-DEV-09 · Developer integration simulator
          </p>
          <p className="mt-0.5 text-xs text-porcelain-muted">
            Local fixture · no live runtime · no side effects
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="rounded-md border border-border px-2 py-1.5 font-mono text-[10px] uppercase text-porcelain-muted"
          >
            {playing ? "Pause" : "Step play"}
          </button>
          <button
            type="button"
            onClick={() => {
              setStep(0);
              setPlaying(false);
            }}
            className="rounded-md border border-border px-2 py-1.5 font-mono text-[10px] uppercase text-porcelain-muted"
          >
            Reset
          </button>
        </div>
      </div>

      <div
        className="border-b border-signal/30 bg-signal/10 px-3 py-2 text-sm text-porcelain-muted sm:px-4"
        role="status"
      >
        LOCAL FIXTURE — NO LIVE RUNTIME CLAIM
        {isTarget ? (
          <span className="ml-2 font-mono text-[10px] uppercase text-signal">
            · Target Architecture explicitly selected
          </span>
        ) : null}
      </div>

      <div className="flex min-w-0 flex-wrap gap-1.5 border-b border-border px-3 py-2 sm:px-4">
        {INTEGRATION_SCENARIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={id === s.id}
            onClick={() => setId(s.id)}
            className={cn(
              "max-w-full shrink rounded-md border px-2 py-1.5 text-left font-mono text-[10px] uppercase leading-tight",
              id === s.id
                ? "border-institution/55 bg-institution/20 text-porcelain"
                : "border-border text-porcelain-subtle",
              s.mode === "TARGET_ARCHITECTURE" && "border-dashed",
            )}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
        {/* Desktop lanes / mobile stepper */}
        <div className="border-b border-border p-4 lg:border-b-0 lg:border-r">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
            Boundary trace · {step + 1}/{scenario.steps.length}
          </p>
          <ol className="space-y-2">
            {scenario.steps.map((s, i) => {
              const active = i === step;
              const done = i < step;
              const t = TRUST_CLASS_META[s.trust];
              return (
                <li key={`${s.phase}-${i}`}>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(i);
                      setPlaying(false);
                    }}
                    className={cn(
                      "flex w-full flex-col gap-1 rounded-lg border px-3 py-2 text-left sm:flex-row sm:items-center sm:justify-between",
                      active && "border-institution/50 bg-institution/15",
                      done && !active && "border-border bg-slate/30",
                      !done && !active && "border-border/50 opacity-60",
                    )}
                  >
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
                        {s.phase} · {s.from} → {s.to}
                      </p>
                      <p className="text-sm text-porcelain">{s.action}</p>
                      {s.note ? (
                        <p className="text-[11px] text-porcelain-subtle">{s.note}</p>
                      ) : null}
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="font-mono text-[10px] text-porcelain-subtle">
                        {t.symbol} {t.short}
                      </span>
                      <MaturityBadge status={s.maturity} compact showLabel={false} />
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
          <p className="mt-3 text-[11px] text-porcelain-subtle">
            Memory may inform reasoning. It never crosses the authority lane or
            silently widens capabilities.
          </p>
        </div>

        <div className="space-y-3 p-4">
          <div className="rounded-lg border border-border bg-void p-3">
            <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
              Request envelope (representative)
            </p>
            <pre className="mt-2 max-w-full overflow-x-auto whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed text-porcelain-muted">
{`{
  "intent": ${JSON.stringify(scenario.summary.slice(0, 48) + "…")},
  "capabilities": ${JSON.stringify(scenario.capabilities, null, 2)},
  "mode": ${JSON.stringify(scenario.mode)},
  "representation": "fixture"
}`}
            </pre>
          </div>

          <div className="rounded-lg border border-border bg-void p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
                Terminal decision
              </p>
              <span
                className={cn(
                  "rounded px-2 py-0.5 font-mono text-[10px]",
                  scenario.decision === "COMMIT" && "bg-oxide/20 text-oxide-fg",
                  (scenario.decision === "ABORT" ||
                    scenario.decision === "DENY") &&
                    "bg-controlled-red/20 text-controlled-red-fg",
                )}
              >
                {scenario.decision}
              </span>
            </div>
            <p className="mt-2 text-sm text-porcelain-muted">{scenario.summary}</p>
            <p className="mt-2 font-mono text-[10px] text-porcelain-subtle">
              Active step trust: {trust.symbol} {trust.short} — {trust.definition}
            </p>
          </div>

          <div className="rounded-lg border border-archive/30 bg-archive/10 p-3">
            <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
              Returned evidence (fixture fields)
            </p>
            <dl className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between gap-2">
                <dt className="text-porcelain-subtle">failure</dt>
                <dd className="font-mono text-porcelain">
                  {scenario.receipt.failure ?? "null"}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-porcelain-subtle">rollback</dt>
                <dd className="font-mono text-porcelain">
                  {scenario.receipt.rollback}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-porcelain-subtle">attestation</dt>
                <dd className="font-mono text-porcelain">
                  {scenario.receipt.attestation}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-porcelain-subtle">signature</dt>
                <dd className="font-mono text-porcelain">
                  {scenario.receipt.signature}
                </dd>
              </div>
            </dl>
            <div className="mt-2 rounded border border-controlled-red/30 bg-controlled-red/10 p-2">
              <p className="font-mono text-[10px] uppercase text-controlled-red-fg">
                limitations[] · mandatory
              </p>
              <ul className="mt-1 space-y-0.5 text-xs text-porcelain-muted">
                {scenario.receipt.limitations.map((l) => (
                  <li key={l}>! {l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="border-t border-border px-3 py-2.5 sm:px-4">
        <p className="text-xs text-porcelain-muted">
          Default path is current WASM guest↔host foundations. Destination Change
          Gate requires explicit selection and remains labeled non-current. No
          credentials, network calls, or repository mutations.
        </p>
        <p className="mt-1 font-mono text-[10px] text-porcelain-subtle">
          {provenanceSummary(prov)}
        </p>
      </figcaption>
    </figure>
  );
}
