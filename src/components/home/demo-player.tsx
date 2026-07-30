import { useCallback, useEffect, useState } from "react";
import { Download, Pause, Play, SkipBack } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { sampleCapsules } from "@/content";
import {
  OBSERVATORY_SCENARIOS,
  type ObservatoryScenarioId,
  projectObservatory,
} from "@/content/observatory-scenarios";
import { DENIAL_SCOPED_COPY } from "@/content/transaction-model";
import { Button } from "@/components/ui/button";
import { ExecutionObservatoryLenses } from "@/components/visual-system/execution-observatory-lenses";
import { TRUST_CLASS_META } from "@/content/trust-taxonomy";

/**
 * Execution Observatory — DemoPlayer with immutable event streams.
 * Scenarios: Commit | Pre-effect denial | Post-stage rollback
 */
export function DemoPlayer({
  className,
  scenarioId: scenarioIdProp,
  stepIndex: stepIndexProp,
  onScenarioChange,
  onStepChange,
}: {
  className?: string;
  scenarioId?: ObservatoryScenarioId;
  stepIndex?: number;
  onScenarioChange?: (id: ObservatoryScenarioId) => void;
  onStepChange?: (step: number) => void;
}) {
  const reduced = useReducedMotion();
  const [internalScenarioId, setInternalScenarioId] =
    useState<ObservatoryScenarioId>("commit");
  const [internalStepIndex, setInternalStepIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [view, setView] = useState<"film" | "compare">("film");

  const scenarioId = scenarioIdProp ?? internalScenarioId;
  const stepIndex = stepIndexProp ?? internalStepIndex;

  const setScenarioId = (id: ObservatoryScenarioId) => {
    setInternalScenarioId(id);
    onScenarioChange?.(id);
  };
  const setStepIndex = (v: number | ((p: number) => number)) => {
    const next = typeof v === "function" ? v(stepIndex) : v;
    setInternalStepIndex(next);
    onStepChange?.(next);
  };

  const scenario = OBSERVATORY_SCENARIOS[scenarioId];
  const script = scenario.events;
  const projected = projectObservatory(scenarioId, stepIndex);
  const step = projected.event;
  const progress = ((stepIndex + 1) / script.length) * 100;
  const atEmit = step.stage === "emit";
  const trust = TRUST_CLASS_META[projected.trust];

  const capsule =
    scenarioId === "commit"
      ? (sampleCapsules.success as Record<string, unknown>)
      : (sampleCapsules.failureRollback as Record<string, unknown>);

  useEffect(() => {
    setStepIndex(0);
    if (!reduced) setPlaying(true);
  }, [scenarioId, reduced]);

  useEffect(() => {
    if (reduced || !playing || view === "compare") return;
    const current = script[stepIndex];
    if (!current) return;
    const t = window.setTimeout(() => {
      setStepIndex((i) => {
        if (i >= script.length - 1) return 0;
        return i + 1;
      });
    }, 1300);
    return () => window.clearTimeout(t);
  }, [stepIndex, playing, reduced, script, view]);

  useEffect(() => {
    if (!reduced) return;
    setStepIndex(script.length - 1);
    setPlaying(false);
  }, [reduced, script.length]);

  const seekTo = useCallback(
    (index: number) => {
      setStepIndex(Math.max(0, Math.min(index, script.length - 1)));
      setPlaying(false);
    },
    [script.length],
  );

  function downloadCapsule() {
    const name =
      scenarioId === "commit"
        ? "success.capsule.json"
        : scenarioId === "denial"
          ? "denial.fixture.note.json"
          : "failure-rollback.capsule.json";
    const payload =
      scenarioId === "denial"
        ? {
            note: "Denial fixture — structure-identical failure fields may apply; rollback.occurred not asserted",
            scenario: "pre-effect-denial",
            limitations: (capsule as { limitations?: string[] }).limitations,
          }
        : capsule;
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }

  const branchLabel = projected.branch;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border/80 bg-void shadow-[0_28px_80px_-36px_rgba(0,0,0,0.9)]",
        className,
      )}
      data-demo-scenario={scenarioId}
      data-demo-view={view}
      data-testid="execution-observatory"
    >
      <div className="flex items-center gap-3 border-b border-border bg-carbon px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-controlled-red/70" />
          <span className="size-2.5 rounded-full bg-signal/70" />
          <span className="size-2.5 rounded-full bg-oxide/70" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <div className="truncate rounded-md border border-border bg-void/80 px-3 py-1 font-mono text-[10px] text-porcelain-subtle">
            nexus-iq · execution observatory · event stream
          </div>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
          {reduced ? "static" : playing && view === "film" ? "rec" : "paused"}
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-carbon/80 px-3 py-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap rounded-md border border-border p-0.5">
            {(
              [
                ["commit", "Commit"],
                ["denial", "Pre-effect denial"],
                ["rollback", "Post-stage rollback"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setScenarioId(id)}
                aria-pressed={scenarioId === id}
                data-demo-path={id}
                className={cn(
                  "min-h-9 rounded px-2.5 py-1 text-xs transition-colors",
                  scenarioId === id
                    ? "bg-slate text-porcelain"
                    : "text-porcelain-muted hover:text-porcelain",
                )}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex rounded-md border border-border p-0.5">
            <button
              type="button"
              onClick={() => setView("film")}
              className={cn(
                "min-h-9 rounded px-2.5 py-1 text-xs",
                view === "film" ? "bg-slate text-porcelain" : "text-porcelain-muted",
              )}
            >
              Film
            </button>
            <button
              type="button"
              onClick={() => {
                setView("compare");
                setPlaying(false);
              }}
              className={cn(
                "min-h-9 rounded px-2.5 py-1 text-xs",
                view === "compare"
                  ? "bg-slate text-porcelain"
                  : "text-porcelain-muted",
              )}
            >
              Compare paths
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => seekTo(0)}
            className="inline-flex size-9 items-center justify-center rounded-md text-porcelain-subtle hover:bg-slate hover:text-porcelain"
            aria-label="Restart"
            disabled={view === "compare"}
          >
            <SkipBack className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex size-9 items-center justify-center rounded-md text-porcelain-subtle hover:bg-slate hover:text-porcelain"
            aria-label={playing ? "Pause" : "Play"}
            disabled={reduced || view === "compare"}
          >
            {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
          </button>
        </div>
      </div>

      <div className="border-b border-border bg-void/80 px-3 py-2 text-xs text-porcelain-muted">
        <span className="font-mono text-porcelain-subtle">Scenario · </span>
        {scenario.summary}
        <span className="mx-2 text-porcelain-subtle">·</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
          {trust.symbol} {trust.short}
        </span>
      </div>

      {view === "film" ? (
        <div className="border-b border-border bg-void px-3 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
              Scrub timeline · master clock
            </p>
            <p className="font-mono text-[10px] tabular-nums text-porcelain-muted">
              {stepIndex + 1}/{script.length} · {step.stage}
            </p>
          </div>
          <input
            type="range"
            min={0}
            max={script.length - 1}
            step={1}
            value={stepIndex}
            onChange={(e) => seekTo(Number(e.target.value))}
            className="demo-scrubber mt-2 w-full"
            aria-label="Seek phase"
          />
          <div className="mt-1.5 flex justify-between gap-1">
            {script.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => seekTo(i)}
                className={cn(
                  "min-h-8 flex-1 truncate rounded px-0.5 font-mono text-[9px] uppercase",
                  i === stepIndex ? "text-porcelain" : "text-porcelain-subtle",
                )}
              >
                {s.stage.slice(0, 4)}
              </button>
            ))}
          </div>
          <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-slate">
            <div
              className="h-full bg-institution transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : null}

      {view === "compare" ? (
        <div className="grid gap-0 md:grid-cols-3">
          {(
            [
              ["commit", "Commit", "Authority granted → emit success evidence"],
              [
                "denial",
                "Pre-effect denial",
                "Capability denied · no authorized host effect · rollback not asserted",
              ],
              [
                "rollback",
                "Post-stage rollback",
                "Mutation staged · validator fails · S₀ restored",
              ],
            ] as const
          ).map(([id, title, body]) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setScenarioId(id);
                setView("film");
                setStepIndex(0);
                setPlaying(true);
              }}
              className="border-b border-border p-4 text-left hover:bg-slate/30 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
                {title}
              </p>
              <p className="mt-2 text-sm text-porcelain-muted">{body}</p>
              <p className="mt-3 font-mono text-[10px] text-institution">
                Play this path →
              </p>
            </button>
          ))}
        </div>
      ) : (
        <>
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-border p-4 lg:border-b-0 lg:border-r">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
                Event stream · click to seek
              </p>
              <ol className="space-y-1.5">
                {script.map((s, i) => {
                  const active = i === stepIndex;
                  const done = i < stepIndex;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => seekTo(i)}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-md border px-2.5 py-2 text-left text-sm",
                          active && "border-institution/50 bg-institution/15",
                          done && !active && "border-border/80 bg-slate/40",
                          !done && !active && "border-border/50 opacity-50",
                        )}
                      >
                        <span className="font-mono text-[10px] text-porcelain-subtle">
                          {String(i + 1)}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-porcelain">
                          {s.stage} · {s.type}
                        </span>
                        <MaturityBadge status={s.maturity} compact showLabel={false} />
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="flex flex-col p-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
                Runtime console
              </p>
              <div className="min-h-[7.5rem] rounded-md border border-border bg-carbon/80 p-3 font-mono text-[11px]">
                <ul className="space-y-1.5">
                  {projected.events.map((e, i) => (
                    <li
                      key={e.id}
                      className={cn(
                        "text-porcelain-muted",
                        i === projected.events.length - 1 && "text-porcelain",
                      )}
                    >
                      <span className="text-institution">›</span> {e.log}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 rounded-md border border-border bg-slate/30 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
                    {atEmit ? "Evidence emit" : "Phase detail"}
                  </p>
                  {branchLabel ? (
                    <span
                      className={cn(
                        "rounded px-1.5 py-0.5 font-mono text-[10px]",
                        branchLabel === "commit" && "bg-oxide/20 text-oxide-fg",
                        (branchLabel === "abort" || branchLabel === "deny") &&
                          "bg-controlled-red/20 text-controlled-red-fg",
                      )}
                    >
                      {branchLabel}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-porcelain-muted">
                  {step.detail}
                </p>
                {scenarioId === "denial" && stepIndex >= 2 ? (
                  <p className="mt-2 border-l-2 border-controlled-red/40 pl-2 text-[11px] text-porcelain-subtle">
                    {DENIAL_SCOPED_COPY}
                  </p>
                ) : null}
                {atEmit ? (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={downloadCapsule}
                    className="mt-3 min-h-9"
                  >
                    <Download className="size-3.5" />
                    Download fixture JSON
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
          <ExecutionObservatoryLenses
            scenarioId={scenarioId}
            stepIndex={stepIndex}
          />
        </>
      )}

      <div className="border-t border-border bg-carbon px-3 py-2.5">
        <p className="text-[11px] leading-relaxed text-porcelain-subtle">
          <span className="text-porcelain-muted">Stage 0 · </span>
          Lenses project one immutable event stream. Pre-effect denial never
          claims rollback; post-stage rollback restores guest state only. External
          effects are not proven absent. Demo signatures are not production trust
          anchors.
        </p>
      </div>
    </div>
  );
}
