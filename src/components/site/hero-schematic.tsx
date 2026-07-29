import { useId, useState } from "react";
import {
  heroPhases,
  HERO_BRANCHES,
  type ChangeGatePhase,
} from "@/content/change-gate";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { cn } from "@/lib/utils";
import type { InternalStatus } from "@/content/maturity";

type Selection =
  | { kind: "phase"; phase: ChangeGatePhase }
  | {
      kind: "branch";
      id: "commit" | "abort";
      label: string;
      status: InternalStatus;
    };

/**
 * Phase A densified schematic.
 * Dual Commit + Abort fork is always visible — abort is central to the category thesis.
 * Permanent maturity markers; inspector is a system record, not marketing copy.
 */
export function HeroSchematic({ className }: { className?: string }) {
  const phases = heroPhases();
  const pipeline = phases.filter(
    (p) => p.id !== "decide" && p.id !== "emit",
  );
  const decide = phases.find((p) => p.id === "decide");
  const emit = phases.find((p) => p.id === "emit");
  const [selected, setSelected] = useState<Selection | null>({
    kind: "branch",
    id: "abort",
    label: HERO_BRANCHES.abort.label,
    status: HERO_BRANCHES.abort.status,
  });
  const panelId = useId();

  function selectPhase(phase: ChangeGatePhase) {
    setSelected({ kind: "phase", phase });
  }

  function selectBranch(id: "commit" | "abort") {
    const branch = HERO_BRANCHES[id];
    setSelected({
      kind: "branch",
      id,
      label: branch.label,
      status: branch.status,
    });
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-carbon",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-institution) 35%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
              Transactional Change Gate
            </p>
            <p className="mt-0.5 text-xs text-porcelain-muted">
              Select a node · Commit and Abort both live on the boundary
            </p>
          </div>
          <p className="rounded-md border border-border bg-void/60 px-2 py-1 font-mono text-[10px] text-porcelain-subtle">
            Control surface
          </p>
        </div>

        {/* Desktop schematic */}
        <div
          className="hidden md:block"
          role="group"
          aria-label="Change Gate dual-path schematic"
        >
          {/* Pipeline row */}
          <div className="flex flex-wrap items-center gap-1.5">
            {pipeline.map((phase, i) => (
              <div key={phase.id} className="flex items-center gap-1.5">
                {i > 0 ? (
                  <Connector />
                ) : null}
                <PhaseNode
                  phase={phase}
                  active={
                    selected?.kind === "phase" && selected.phase.id === phase.id
                  }
                  onSelect={() => selectPhase(phase)}
                  controls={panelId}
                />
              </div>
            ))}
          </div>

          {/* Fork: dual path — always simultaneous */}
          <div className="relative mt-4 rounded-lg border border-border/80 bg-void/40 p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
                Commit boundary
              </p>
              {decide ? (
                <button
                  type="button"
                  onClick={() => selectPhase(decide)}
                  aria-pressed={
                    selected?.kind === "phase" &&
                    selected.phase.id === decide.id
                  }
                  aria-controls={panelId}
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-wider transition-colors",
                    selected?.kind === "phase" &&
                      selected.phase.id === decide.id
                      ? "text-porcelain"
                      : "text-porcelain-subtle hover:text-porcelain-muted",
                  )}
                >
                  Decide node · inspect
                </button>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Abort path */}
              <button
                type="button"
                onClick={() => selectBranch("abort")}
                aria-pressed={
                  selected?.kind === "branch" && selected.id === "abort"
                }
                aria-controls={panelId}
                className={cn(
                  "group relative flex flex-col gap-2 rounded-lg border p-3 text-left transition-[background-color,border-color,box-shadow] duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institution focus-visible:ring-offset-2 focus-visible:ring-offset-carbon",
                  selected?.kind === "branch" && selected.id === "abort"
                    ? "border-controlled-red/50 bg-controlled-red/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-controlled-red)_30%,transparent)]"
                    : "border-controlled-red/25 bg-carbon/60 hover:border-controlled-red/40 hover:bg-controlled-red/10",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-porcelain">
                    Abort
                  </span>
                  <MaturityBadge
                    status={HERO_BRANCHES.abort.status}
                    compact
                    showLabel
                  />
                </div>
                <p className="text-[11px] leading-snug text-porcelain-muted">
                  Deny · restore pre-execution state · no irreversible effect
                </p>
                <span className="font-mono text-[10px] text-controlled-red-fg/80">
                  Central to the category thesis
                </span>
              </button>

              {/* Commit path */}
              <button
                type="button"
                onClick={() => selectBranch("commit")}
                aria-pressed={
                  selected?.kind === "branch" && selected.id === "commit"
                }
                aria-controls={panelId}
                className={cn(
                  "group relative flex flex-col gap-2 rounded-lg border p-3 text-left transition-[background-color,border-color,box-shadow] duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institution focus-visible:ring-offset-2 focus-visible:ring-offset-carbon",
                  selected?.kind === "branch" && selected.id === "commit"
                    ? "border-oxide/50 bg-oxide/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-oxide)_30%,transparent)]"
                    : "border-oxide/25 bg-carbon/60 hover:border-oxide/40 hover:bg-oxide/10",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-porcelain">
                    Commit
                  </span>
                  <MaturityBadge
                    status={HERO_BRANCHES.commit.status}
                    compact
                    showLabel
                  />
                </div>
                <p className="text-[11px] leading-snug text-porcelain-muted">
                  Apply only what survives validation · then emit evidence
                </p>
                <span className="font-mono text-[10px] text-porcelain-subtle">
                  Destination for surviving changes
                </span>
              </button>
            </div>
          </div>

          {/* Emit converges both paths */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex flex-1 flex-col items-center" aria-hidden>
              <div className="h-3 w-px bg-border" />
              <div className="h-px w-full max-w-[70%] bg-border" />
              <div className="h-3 w-px bg-border" />
            </div>
          </div>
          <div className="flex justify-center">
            {emit ? (
              <PhaseNode
                phase={emit}
                active={
                  selected?.kind === "phase" && selected.phase.id === emit.id
                }
                onSelect={() => selectPhase(emit)}
                controls={panelId}
                emphasize
              />
            ) : null}
          </div>
          <p className="mt-2 text-center font-mono text-[10px] text-porcelain-subtle">
            Both paths emit a Proof Capsule — success and denial are both
            evidenced
          </p>
        </div>

        {/* Mobile: linear + dual branch cards */}
        <div className="md:hidden">
          <ol className="space-y-2" aria-label="Change Gate phases">
            {pipeline.map((phase, index) => {
              const active =
                selected?.kind === "phase" && selected.phase.id === phase.id;
              return (
                <li key={phase.id}>
                  <button
                    type="button"
                    onClick={() => selectPhase(phase)}
                    aria-pressed={active}
                    aria-controls={panelId}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors",
                      active
                        ? "border-institution/50 bg-institution/10"
                        : "border-border bg-slate/60 hover:bg-slate",
                    )}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="font-mono text-xs tabular-nums text-porcelain-subtle">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate text-sm text-porcelain">
                        {phase.label}
                      </span>
                    </div>
                    <MaturityBadge status={phase.status} compact showLabel />
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => selectBranch("abort")}
              aria-pressed={
                selected?.kind === "branch" && selected.id === "abort"
              }
              className={cn(
                "flex min-h-11 flex-col gap-1 rounded-lg border px-3 py-2.5 text-left",
                selected?.kind === "branch" && selected.id === "abort"
                  ? "border-controlled-red/45 bg-controlled-red/15"
                  : "border-controlled-red/30 bg-void/40",
              )}
            >
              <span className="text-sm font-medium text-porcelain">Abort</span>
              <MaturityBadge
                status={HERO_BRANCHES.abort.status}
                compact
                showLabel
              />
            </button>
            <button
              type="button"
              onClick={() => selectBranch("commit")}
              aria-pressed={
                selected?.kind === "branch" && selected.id === "commit"
              }
              className={cn(
                "flex min-h-11 flex-col gap-1 rounded-lg border px-3 py-2.5 text-left",
                selected?.kind === "branch" && selected.id === "commit"
                  ? "border-oxide/45 bg-oxide/15"
                  : "border-oxide/30 bg-void/40",
              )}
            >
              <span className="text-sm font-medium text-porcelain">Commit</span>
              <MaturityBadge
                status={HERO_BRANCHES.commit.status}
                compact
                showLabel
              />
            </button>
          </div>

          {emit ? (
            <button
              type="button"
              onClick={() => selectPhase(emit)}
              aria-pressed={
                selected?.kind === "phase" && selected.phase.id === emit.id
              }
              aria-controls={panelId}
              className={cn(
                "mt-2 flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-left",
                selected?.kind === "phase" && selected.phase.id === emit.id
                  ? "border-institution/50 bg-institution/10"
                  : "border-border bg-slate/60",
              )}
            >
              <span className="text-sm text-porcelain">{emit.label}</span>
              <MaturityBadge status={emit.status} compact showLabel />
            </button>
          ) : null}
        </div>

        {/* Inspector */}
        <div
          id={panelId}
          className="mt-4 rounded-lg border border-border bg-void/70 p-3.5 sm:p-4"
          role="region"
          aria-live="polite"
          aria-label="System record for selected node"
        >
          {selected?.kind === "phase" ? (
            <PhaseInspector phase={selected.phase} />
          ) : selected?.kind === "branch" ? (
            <BranchInspector
              id={selected.id}
              label={selected.label}
              status={selected.status}
            />
          ) : (
            <p className="text-sm text-porcelain-muted">
              Select a phase to inspect finished capability, maturity, and
              limitations.
            </p>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-porcelain-subtle">
          <Legend symbol="●" label="Implemented Foundation" />
          <Legend symbol="◐" label="In Integration" />
          <Legend symbol="○" label="Target Architecture" />
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <span className="px-0.5 font-mono text-porcelain-subtle" aria-hidden>
      →
    </span>
  );
}

function PhaseNode({
  phase,
  label,
  status,
  branch,
  active,
  onSelect,
  controls,
  emphasize,
}: {
  phase?: ChangeGatePhase;
  label?: string;
  status?: InternalStatus;
  branch?: "commit" | "abort";
  active?: boolean;
  onSelect: () => void;
  controls: string;
  emphasize?: boolean;
}) {
  const resolvedLabel = phase?.shortLabel ?? label ?? "";
  const resolvedStatus = phase?.status ?? status ?? "TARGET";

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      aria-controls={controls}
      className={cn(
        "inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-left transition-[background-color,border-color,box-shadow] duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institution focus-visible:ring-offset-2 focus-visible:ring-offset-carbon",
        branch === "abort" && "border-controlled-red/35",
        branch === "commit" && "border-oxide/35",
        !branch && "border-border bg-slate/80",
        branch && "bg-void/50",
        emphasize && "border-archive/30 bg-archive/5",
        active &&
          !branch &&
          "border-institution/55 bg-institution/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-institution)_40%,transparent)]",
        active &&
          branch === "abort" &&
          "bg-controlled-red/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-controlled-red)_35%,transparent)]",
        active &&
          branch === "commit" &&
          "bg-oxide/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-oxide)_35%,transparent)]",
        !active && "hover:bg-slate-elevated/80",
      )}
    >
      <span className="text-xs font-medium text-porcelain">{resolvedLabel}</span>
      <MaturityBadge status={resolvedStatus} compact showLabel={false} />
    </button>
  );
}

function PhaseInspector({ phase }: { phase: ChangeGatePhase }) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
            System record
          </p>
          <h3 className="mt-1 font-serif text-base text-porcelain">
            {phase.label}
          </h3>
        </div>
        <MaturityBadge status={phase.status} />
      </div>
      <dl className="grid gap-3 sm:grid-cols-2">
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle">
            Finished capability
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-porcelain-muted">
            {phase.finishedCapability}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle">
            Implementation today
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-porcelain-muted">
            {phase.currentReality}
          </dd>
        </div>
      </dl>
      {phase.limitations?.length ? (
        <div className="rounded-md border border-controlled-red/25 bg-controlled-red/10 px-3 py-2">
          <p className="text-[11px] font-medium text-controlled-red-fg">
            Known limitations
          </p>
          <ul className="mt-1 space-y-0.5 text-xs text-porcelain-muted">
            {phase.limitations.map((l) => (
              <li key={l}>! {l}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function BranchInspector({
  id,
  label,
  status,
}: {
  id: "commit" | "abort";
  label: string;
  status: InternalStatus;
}) {
  const copy =
    id === "abort"
      ? {
          finished:
            "Abort restores staged isolation without irreversible effect when validation or policy fails. Denial is a first-class outcome — not an error to hide.",
          today:
            "Execution-level rollback on capability denial and failure is an Implemented Foundation. Product-level abort semantics for general agent worktrees remain In Integration under Stage 0.",
        }
      : {
          finished:
            "Commit applies only changes that survive validation and required approval, then emits portable evidence. Nothing irreversible crosses without surviving the gate.",
          today:
            "Full worktree commit transactional semantics for general agent changes are In Integration / Target. Stage 0 evidence integrity is blocking for end-to-end guarantees.",
        };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
            Decision branch · always visible
          </p>
          <h3 className="mt-1 font-serif text-base text-porcelain">{label}</h3>
        </div>
        <MaturityBadge status={status} />
      </div>
      <dl className="grid gap-3 sm:grid-cols-2">
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle">
            Finished capability
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-porcelain-muted">
            {copy.finished}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle">
            Implementation today
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-porcelain-muted">
            {copy.today}
          </dd>
        </div>
      </dl>
    </div>
  );
}

function Legend({ symbol, label }: { symbol: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="font-mono" aria-hidden>
        {symbol}
      </span>
      {label}
    </span>
  );
}
