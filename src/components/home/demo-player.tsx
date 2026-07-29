import { useCallback, useEffect, useMemo, useState } from "react";
import { Download, Pause, Play, SkipBack } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { MaturityBadge } from "@/components/site/maturity-badge";
import type { InternalStatus } from "@/content/maturity";
import {
  CAPSULE_FIELD_EXPLAINERS,
  type FieldExplainer,
} from "@/content/capsules/field-explainers";
import { sampleCapsules } from "@/content";
import { Button } from "@/components/ui/button";

type StepId =
  | "propose"
  | "stage"
  | "constrain"
  | "validate"
  | "decide"
  | "emit";

interface Step {
  id: StepId;
  label: string;
  tick: string;
  status: InternalStatus;
  log: string;
  detail: string;
  branch?: "commit" | "abort";
  duration: number;
}

const SUCCESS_SCRIPT: Step[] = [
  {
    id: "propose",
    label: "Propose",
    tick: "Prop",
    status: "TARGET",
    log: "agent.propose(repo_patch: dependency-bump)",
    detail: "Agent declares intent + scope for a repository change.",
    duration: 1200,
  },
  {
    id: "stage",
    label: "Stage",
    tick: "Stag",
    status: "CURRENT",
    log: "nexus.snapshot(create) · isolation=worktree",
    detail: "Change isolated. Pre-execution snapshot captured.",
    duration: 1300,
  },
  {
    id: "constrain",
    label: "Constrain",
    tick: "Auth",
    status: "CURRENT",
    log: "capability.bind(WriteFile:/src) · grant OK",
    detail: "Authority tokens bound. Unauthorized paths denied.",
    duration: 1200,
  },
  {
    id: "validate",
    label: "Validate",
    tick: "Val",
    status: "IN_DEVELOPMENT",
    log: "validators.run([policy, health, diff]) · pass",
    detail: "Pre-commit validators evaluate the staged change.",
    duration: 1400,
  },
  {
    id: "decide",
    label: "Commit",
    tick: "Cmt",
    status: "IN_DEVELOPMENT",
    log: "txn.decide(COMMIT) · effects applied",
    detail: "Only surviving changes cross the commit boundary.",
    branch: "commit",
    duration: 1300,
  },
  {
    id: "emit",
    label: "Emit",
    tick: "Emit",
    status: "CURRENT",
    log: "proof_capsule.emit(signed, limitations[])",
    detail: "Portable runtime evidence leaves the boundary.",
    duration: 1600,
  },
];

const ABORT_SCRIPT: Step[] = [
  {
    id: "propose",
    label: "Propose",
    tick: "Prop",
    status: "TARGET",
    log: "agent.propose(tool: network_fetch)",
    detail: "Agent requests outbound network capability.",
    duration: 1100,
  },
  {
    id: "stage",
    label: "Stage",
    tick: "Stag",
    status: "CURRENT",
    log: "nexus.snapshot(create) · isolation=sandbox",
    detail: "Execution staged behind the boundary.",
    duration: 1100,
  },
  {
    id: "constrain",
    label: "Constrain",
    tick: "Auth",
    status: "CURRENT",
    log: "capability.bind(NetworkOutbound) · DENIED",
    detail: "Required capability not granted. Mismatch recorded.",
    duration: 1300,
  },
  {
    id: "validate",
    label: "Validate",
    tick: "Val",
    status: "IN_DEVELOPMENT",
    log: "validators.run · requires_rollback=true",
    detail: "Failure classified; rollback required.",
    duration: 1200,
  },
  {
    id: "decide",
    label: "Abort",
    tick: "Abt",
    status: "CURRENT",
    log: "txn.decide(ABORT) · rollback(snapshot)",
    detail: "Abort restores pre-execution state. No irreversible effect.",
    branch: "abort",
    duration: 1400,
  },
  {
    id: "emit",
    label: "Emit",
    tick: "Emit",
    status: "CURRENT",
    log: "proof_capsule.emit(failure+rollback evidence)",
    detail: "Denial path still produces inspectable evidence.",
    duration: 1600,
  },
];

const WALKTHROUGH_PATHS = [
  "capsule_id",
  "subject",
  "capabilities",
  "snapshot",
  "failure",
  "rollback",
  "limitations",
  "signature",
] as const;

function fieldValuePreview(
  capsule: Record<string, unknown>,
  path: string,
  scenario: "success" | "abort",
): string {
  if (path === "capsule_id") return String(capsule.capsule_id ?? "—");
  if (path === "subject") {
    const s = capsule.subject as { tool_name?: string; duration_ms?: number };
    return `${s?.tool_name ?? "—"} · ${s?.duration_ms ?? "—"}ms`;
  }
  if (path === "capabilities") {
    const c = capsule.capabilities as {
      required?: string[];
      granted?: string[];
      mismatch?: string[] | null;
    };
    if (scenario === "abort" && c?.mismatch?.length) {
      return `mismatch: ${c.mismatch.join(", ")}`;
    }
    return `${c?.granted?.length ?? 0} granted / ${c?.required?.length ?? 0} required`;
  }
  if (path === "snapshot") {
    const snap = capsule.snapshot as { snapshot_id?: string };
    return snap?.snapshot_id
      ? `${String(snap.snapshot_id).slice(0, 13)}…`
      : "—";
  }
  if (path === "failure") {
    const f = capsule.failure as { failure_category?: string } | null;
    return f?.failure_category ?? "null (success path)";
  }
  if (path === "rollback") {
    const r = capsule.rollback as { occurred?: boolean };
    return r?.occurred ? "occurred · restored snapshot" : "none";
  }
  if (path === "limitations") {
    const lim = capsule.limitations as string[] | undefined;
    return `${lim?.length ?? 0} mandatory entries`;
  }
  if (path === "signature") {
    const sig = capsule.signature as { signer?: string };
    return `${sig?.signer ?? "—"} · demo key only`;
  }
  return "—";
}

/**
 * Phase B — DemoPlayer v2 product film.
 * Scrubber · dual path · capsule field walkthrough · downloadable fixtures.
 */
export function DemoPlayer({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const [scenario, setScenario] = useState<"success" | "abort">("success");
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [fieldIndex, setFieldIndex] = useState(0);
  const [view, setView] = useState<"film" | "compare">("film");

  const script = scenario === "success" ? SUCCESS_SCRIPT : ABORT_SCRIPT;
  const capsule =
    scenario === "success"
      ? (sampleCapsules.success as Record<string, unknown>)
      : (sampleCapsules.failureRollback as Record<string, unknown>);

  const step = script[Math.min(stepIndex, script.length - 1)]!;
  const atEmit = step.id === "emit";
  const progress = ((stepIndex + 1) / script.length) * 100;

  const logs = useMemo(
    () => script.slice(0, stepIndex + 1).map((s) => s.log),
    [script, stepIndex],
  );

  const walkthroughFields = useMemo(() => {
    return WALKTHROUGH_PATHS.map((path) => {
      const explainer = CAPSULE_FIELD_EXPLAINERS.find((e) => e.path === path);
      return {
        path,
        explainer: explainer as FieldExplainer | undefined,
        preview: fieldValuePreview(capsule, path, scenario),
      };
    });
  }, [capsule, scenario]);

  const activeField =
    walkthroughFields[Math.min(fieldIndex, walkthroughFields.length - 1)];

  useEffect(() => {
    setStepIndex(0);
    setFieldIndex(0);
    if (!reduced) setPlaying(true);
  }, [scenario, reduced]);

  useEffect(() => {
    if (reduced || !playing || view === "compare") return;
    const current = script[stepIndex];
    if (!current) return;

    // On emit: cycle fields, then loop film
    if (stepIndex >= script.length - 1 && atEmit) {
      const t = window.setTimeout(() => {
        setFieldIndex((fi) => {
          if (fi < walkthroughFields.length - 1) return fi + 1;
          setStepIndex(0);
          return 0;
        });
      }, current.duration);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setStepIndex((i) => Math.min(i + 1, script.length - 1));
      if (script[Math.min(stepIndex + 1, script.length - 1)]?.id === "emit") {
        setFieldIndex(0);
      }
    }, current.duration);
    return () => window.clearTimeout(t);
  }, [
    stepIndex,
    playing,
    reduced,
    script,
    view,
    atEmit,
    walkthroughFields.length,
  ]);

  useEffect(() => {
    if (!reduced) return;
    setStepIndex(script.length - 1);
    setFieldIndex(0);
    setPlaying(false);
  }, [reduced, script.length]);

  const seekTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(index, script.length - 1));
      setStepIndex(next);
      setPlaying(false);
      if (script[next]?.id === "emit") setFieldIndex(0);
    },
    [script],
  );

  function downloadCapsule() {
    const name =
      scenario === "success"
        ? "success.capsule.json"
        : "failure-rollback.capsule.json";
    const blob = new Blob([JSON.stringify(capsule, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }

  const branchLabel =
    step.branch ??
    (scenario === "abort" && stepIndex >= 4
      ? "abort"
      : scenario === "success" && stepIndex >= 4
        ? "commit"
        : null);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-void shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)]",
        className,
      )}
      data-demo-scenario={scenario}
      data-demo-view={view}
    >
      <div className="flex items-center gap-3 border-b border-border bg-carbon px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-controlled-red/70" />
          <span className="size-2.5 rounded-full bg-signal/70" />
          <span className="size-2.5 rounded-full bg-oxide/70" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <div className="truncate rounded-md border border-border bg-void/80 px-3 py-1 font-mono text-[10px] text-porcelain-subtle">
            nexus-iq · change-gate · product film v2
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "size-1.5 rounded-full",
              playing && !reduced && view === "film"
                ? "bg-oxide animate-pulse-soft"
                : "bg-porcelain-subtle",
            )}
            aria-hidden
          />
          <span className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
            {reduced
              ? "static"
              : view === "compare"
                ? "compare"
                : playing
                  ? "rec"
                  : "paused"}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-carbon/80 px-3 py-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-md border border-border p-0.5">
            <button
              type="button"
              onClick={() => setScenario("success")}
              aria-pressed={scenario === "success"}
              data-demo-path="success"
              className={cn(
                "min-h-9 rounded px-2.5 py-1 text-xs transition-colors",
                scenario === "success"
                  ? "bg-slate text-porcelain"
                  : "text-porcelain-muted hover:text-porcelain",
              )}
            >
              Commit path
            </button>
            <button
              type="button"
              onClick={() => setScenario("abort")}
              aria-pressed={scenario === "abort"}
              data-demo-path="abort"
              className={cn(
                "min-h-9 rounded px-2.5 py-1 text-xs transition-colors",
                scenario === "abort"
                  ? "bg-slate text-porcelain"
                  : "text-porcelain-muted hover:text-porcelain",
              )}
            >
              Abort path
            </button>
          </div>
          <div className="flex rounded-md border border-border p-0.5">
            <button
              type="button"
              onClick={() => setView("film")}
              className={cn(
                "min-h-9 rounded px-2.5 py-1 text-xs transition-colors",
                view === "film"
                  ? "bg-slate text-porcelain"
                  : "text-porcelain-muted hover:text-porcelain",
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
                "min-h-9 rounded px-2.5 py-1 text-xs transition-colors",
                view === "compare"
                  ? "bg-slate text-porcelain"
                  : "text-porcelain-muted hover:text-porcelain",
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
            className="inline-flex size-9 items-center justify-center rounded-md text-porcelain-subtle transition-colors hover:bg-slate hover:text-porcelain disabled:opacity-40"
            aria-label="Restart film"
            disabled={view === "compare"}
          >
            <SkipBack className="size-3.5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex size-9 items-center justify-center rounded-md text-porcelain-subtle transition-colors hover:bg-slate hover:text-porcelain disabled:opacity-40"
            aria-label={playing ? "Pause" : "Play"}
            disabled={reduced || view === "compare"}
          >
            {playing ? (
              <Pause className="size-3.5" aria-hidden />
            ) : (
              <Play className="size-3.5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {view === "film" ? (
        <div className="border-b border-border bg-void px-3 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
              Scrub timeline
            </p>
            <p className="font-mono text-[10px] tabular-nums text-porcelain-muted">
              {stepIndex + 1}/{script.length} · {step.label}
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
            aria-label="Seek Change Gate phase"
            aria-valuetext={`${step.label}, step ${stepIndex + 1} of ${script.length}`}
          />
          <div className="mt-1.5 flex justify-between gap-1">
            {script.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => seekTo(i)}
                className={cn(
                  "min-h-8 flex-1 truncate rounded px-0.5 font-mono text-[9px] uppercase tracking-wide transition-colors",
                  i === stepIndex
                    ? "text-porcelain"
                    : i < stepIndex
                      ? "text-porcelain-muted hover:text-porcelain"
                      : "text-porcelain-subtle hover:text-porcelain-muted",
                )}
                aria-current={i === stepIndex ? "step" : undefined}
              >
                {s.tick}
              </button>
            ))}
          </div>
          <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-slate">
            <div
              className="h-full bg-institution transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : null}

      {view === "compare" ? (
        <ComparePaths
          onSelectPath={(path) => {
            setScenario(path);
            setView("film");
            setStepIndex(0);
            setPlaying(true);
          }}
        />
      ) : (
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-border p-4 lg:border-b-0 lg:border-r">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
              Transaction pipeline · click to seek
            </p>
            <ol className="space-y-1.5">
              {script.map((s, i) => {
                const active = i === stepIndex;
                const done = i < stepIndex;
                return (
                  <li key={`${scenario}-${s.id}`}>
                    <button
                      type="button"
                      onClick={() => seekTo(i)}
                      aria-current={active ? "step" : undefined}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md border px-2.5 py-2 text-left transition-[background-color,border-color,opacity] duration-200",
                        active &&
                          "border-institution/50 bg-institution/15 demo-node-active",
                        done &&
                          !active &&
                          "border-border/80 bg-slate/40 opacity-90",
                        !done &&
                          !active &&
                          "border-border/50 bg-transparent opacity-50 hover:opacity-80",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px]",
                          active && "bg-institution text-porcelain",
                          done && !active && "bg-oxide/30 text-oxide-fg",
                          !done &&
                            !active &&
                            "bg-slate text-porcelain-subtle",
                        )}
                      >
                        {done && !active ? "✓" : String(i + 1)}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm text-porcelain">
                        {s.label}
                      </span>
                      <MaturityBadge
                        status={s.status}
                        compact
                        showLabel={false}
                      />
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
            <div className="min-h-[7.5rem] rounded-md border border-border bg-carbon/80 p-3 font-mono text-[11px] leading-relaxed">
              {logs.length === 0 ? (
                <p className="text-porcelain-subtle">awaiting transaction…</p>
              ) : (
                <ul className="space-y-1.5">
                  {logs.map((line, i) => (
                    <li
                      key={`${line}-${i}`}
                      className={cn(
                        "text-porcelain-muted",
                        i === logs.length - 1 && "text-porcelain",
                      )}
                    >
                      <span className="text-institution">›</span> {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div
              className={cn(
                "mt-3 flex flex-1 flex-col rounded-md border p-3 transition-[border-color,background-color] duration-300",
                atEmit
                  ? "border-archive/40 bg-archive/10 demo-capsule-glow"
                  : "border-border bg-slate/30",
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
                  {atEmit
                    ? "Proof Capsule · field walkthrough"
                    : "Proof Capsule"}
                </p>
                {branchLabel === "abort" ? (
                  <span className="rounded bg-controlled-red/20 px-1.5 py-0.5 font-mono text-[10px] text-controlled-red-fg">
                    abort
                  </span>
                ) : branchLabel === "commit" ? (
                  <span className="rounded bg-oxide/20 px-1.5 py-0.5 font-mono text-[10px] text-oxide-fg">
                    commit
                  </span>
                ) : (
                  <span className="font-mono text-[10px] text-porcelain-subtle">
                    pending
                  </span>
                )}
              </div>

              {!atEmit ? (
                <>
                  <p className="mt-2 text-xs leading-relaxed text-porcelain-muted">
                    {step.detail}
                  </p>
                  <p className="mt-2 font-mono text-[10px] text-porcelain-subtle">
                    Capsule walkthrough unlocks on Emit
                  </p>
                </>
              ) : (
                <div className="mt-2 flex min-h-0 flex-1 flex-col gap-2">
                  <div
                    className="flex flex-wrap gap-1"
                    role="tablist"
                    aria-label="Capsule fields"
                  >
                    {walkthroughFields.map((f, i) => (
                      <button
                        key={f.path}
                        type="button"
                        role="tab"
                        aria-selected={i === fieldIndex}
                        onClick={() => {
                          setFieldIndex(i);
                          setPlaying(false);
                        }}
                        className={cn(
                          "rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide transition-colors",
                          i === fieldIndex
                            ? "border-archive/50 bg-archive/20 text-porcelain"
                            : "border-border/60 text-porcelain-subtle hover:text-porcelain-muted",
                        )}
                      >
                        {f.path.split(".").pop()}
                      </button>
                    ))}
                  </div>

                  {activeField ? (
                    <div
                      role="tabpanel"
                      className="rounded border border-border/60 bg-void/50 p-2.5"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-medium text-porcelain">
                          {activeField.explainer?.title ?? activeField.path}
                        </p>
                        <code className="font-mono text-[10px] text-porcelain-subtle">
                          {activeField.path}
                        </code>
                      </div>
                      <p className="mt-1 font-mono text-[11px] text-oxide">
                        {activeField.preview}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-porcelain-muted">
                        {activeField.explainer?.whyItExists}
                      </p>
                      {activeField.explainer?.doesNotMean ? (
                        <p className="mt-1.5 border-l-2 border-controlled-red/40 pl-2 text-[11px] leading-relaxed text-porcelain-subtle">
                          Does not mean: {activeField.explainer.doesNotMean}
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="mt-auto flex flex-wrap gap-2 pt-1">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={downloadCapsule}
                      className="min-h-9"
                    >
                      <Download className="size-3.5" aria-hidden />
                      Download capsule JSON
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-border bg-carbon px-3 py-2.5">
        <p className="text-[11px] leading-relaxed text-porcelain-subtle">
          <span className="text-porcelain-muted">Stage 0 · </span>
          Demo uses Implemented Foundations for snapshot, capability denial, and
          capsule emission. Full Change Gate commit barrier remains In
          Integration. Downloaded fixtures are structure-identical to the
          ProofCapsule schema; signatures are demo placeholders, not production
          trust anchors.
        </p>
      </div>
    </div>
  );
}

function ComparePaths({
  onSelectPath,
}: {
  onSelectPath: (path: "success" | "abort") => void;
}) {
  return (
    <div className="grid gap-0 md:grid-cols-2">
      <PathColumn
        title="Commit path"
        tone="commit"
        steps={[
          "Propose repo change",
          "Stage + snapshot",
          "Bind WriteFile capability",
          "Validators pass",
          "Commit surviving effects",
          "Emit success capsule",
        ]}
        statuses={[
          "TARGET",
          "CURRENT",
          "CURRENT",
          "IN_DEVELOPMENT",
          "IN_DEVELOPMENT",
          "CURRENT",
        ]}
        onOpen={() => onSelectPath("success")}
      />
      <PathColumn
        title="Abort path"
        tone="abort"
        steps={[
          "Propose network tool",
          "Stage + snapshot",
          "Network capability DENIED",
          "Rollback required",
          "Abort · restore snapshot",
          "Emit failure capsule",
        ]}
        statuses={[
          "TARGET",
          "CURRENT",
          "CURRENT",
          "IN_DEVELOPMENT",
          "CURRENT",
          "CURRENT",
        ]}
        onOpen={() => onSelectPath("abort")}
      />
    </div>
  );
}

function PathColumn({
  title,
  tone,
  steps,
  statuses,
  onOpen,
}: {
  title: string;
  tone: "commit" | "abort";
  steps: string[];
  statuses: InternalStatus[];
  onOpen: () => void;
}) {
  return (
    <div
      className={cn(
        "border-b border-border p-4 md:border-b-0",
        tone === "abort" ? "md:border-l md:border-border" : "",
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <p
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.12em]",
            tone === "abort" ? "text-controlled-red-fg/90" : "text-oxide-fg/90",
          )}
        >
          {title}
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle underline-offset-2 hover:text-porcelain hover:underline"
        >
          Play this path
        </button>
      </div>
      <ol className="space-y-1.5">
        {steps.map((label, i) => (
          <li
            key={label}
            className={cn(
              "flex items-center gap-2 rounded-md border px-2.5 py-2",
              tone === "abort"
                ? "border-controlled-red/20 bg-controlled-red/5"
                : "border-oxide/20 bg-oxide/5",
            )}
          >
            <span className="font-mono text-[10px] tabular-nums text-porcelain-subtle">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 flex-1 text-sm text-porcelain">{label}</span>
            <MaturityBadge status={statuses[i]!} compact showLabel={false} />
          </li>
        ))}
      </ol>
    </div>
  );
}
