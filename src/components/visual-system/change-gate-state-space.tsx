import { useMemo, useState } from "react";
import { CHANGE_GATE_PHASES, type ChangeGatePhaseId } from "@/content/change-gate";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { cn } from "@/lib/utils";

type NodeId =
  | ChangeGatePhaseId
  | "commit_terminal"
  | "abort_terminal"
  | "evidence_commit"
  | "evidence_abort";

interface Transition {
  id: string;
  from: NodeId;
  to: NodeId;
  label: string;
  preconditions: string[];
  invariant: string;
  evidence: string;
  failureRoute: string;
  maturity: string;
  negative: string;
}

const TRANSITIONS: Transition[] = [
  {
    id: "t-propose-stage",
    from: "propose",
    to: "stage",
    label: "Isolate proposal",
    preconditions: ["Declared intent + scope", "No authority implied"],
    invariant: "Proposal alone cannot produce host effects.",
    evidence: "Proposal metadata (when productized)",
    failureRoute: "Reject malformed scope before stage",
    maturity: "Propose is Target; Stage isolation is Implemented Foundation (WASM snap).",
    negative: "Does not mean worktree change proposals are a finished public API.",
  },
  {
    id: "t-stage-constrain",
    from: "stage",
    to: "constrain",
    label: "Bind capabilities",
    preconditions: ["Snapshot S₀ exists", "Isolation boundary active"],
    invariant: "Authority may attenuate; it never silently expands.",
    evidence: "Capability grant/deny set",
    failureRoute: "Missing/expired token → deny path",
    maturity: "Capability tokens + WASI gating are Implemented Foundations.",
    negative: "Does not claim Stage 0 end-to-end Change Gate is complete.",
  },
  {
    id: "t-constrain-validate",
    from: "constrain",
    to: "validate",
    label: "Run predicates",
    preconditions: ["Bound capability set", "Staged working state"],
    invariant: "Validators evaluate staged results before commitment.",
    evidence: "Validator outcomes + digests",
    failureRoute: "requires_rollback · abort path",
    maturity: "Health/failure classification CURRENT; full barrier In Integration.",
    negative: "Passing validators is not proof of correct program semantics.",
  },
  {
    id: "t-validate-approve",
    from: "validate",
    to: "approve",
    label: "Policy gate (optional)",
    preconditions: ["Validators complete", "Policy may require human/policy OK"],
    invariant: "Approval is first-class when policy demands it.",
    evidence: "Approval record (Target)",
    failureRoute: "Denied approval → abort",
    maturity: "Target Architecture for productized approval workflow.",
    negative: "Not currently a general public workflow surface.",
  },
  {
    id: "t-validate-decide",
    from: "validate",
    to: "decide",
    label: "Enter decision",
    preconditions: ["Validators resolved", "Approval satisfied or not required"],
    invariant: "Commit and Abort are equally valid terminals.",
    evidence: "Decision record",
    failureRoute: "Any failed gate → Abort",
    maturity: "Execution rollback CURRENT; full commit barrier In Integration.",
    negative: "Does not establish irreversible external compensation.",
  },
  {
    id: "t-decide-commit",
    from: "decide",
    to: "commit_terminal",
    label: "Commit",
    preconditions: ["All required gates survived"],
    invariant: "Only surviving effects cross the boundary.",
    evidence: "Applied-effect summary + capsule subject",
    failureRoute: "N/A (terminal success path)",
    maturity: "In Integration under Stage 0 for general agent changes.",
    negative: "Not a celebratory success animation — a controlled state transition.",
  },
  {
    id: "t-decide-abort",
    from: "decide",
    to: "abort_terminal",
    label: "Abort",
    preconditions: ["Gate failure or policy deny"],
    invariant: "Abort restores staged isolation where supported.",
    evidence: "Failure class + rollback source",
    failureRoute: "N/A (terminal controlled path)",
    maturity: "Snapshot restore on denial is Implemented Foundation.",
    negative: "Does not reverse effects that already escaped isolation.",
  },
  {
    id: "t-commit-emit",
    from: "commit_terminal",
    to: "evidence_commit",
    label: "Emit success evidence",
    preconditions: ["Decision = Commit"],
    invariant: "Evidence always attaches limitations[].",
    evidence: "Proof Capsule (success path)",
    failureRoute: "Emit still attempted on partial observation",
    maturity: "Capsule emission CURRENT; production anchors Target/In Integration.",
    negative: "Capsule is not mathematical proof of correct execution.",
  },
  {
    id: "t-abort-emit",
    from: "abort_terminal",
    to: "evidence_abort",
    label: "Emit denial evidence",
    preconditions: ["Decision = Abort"],
    invariant: "Denial evidence is first-class — not an error screen.",
    evidence: "Proof Capsule (failure + rollback)",
    failureRoute: "N/A",
    maturity: "Failure/rollback capsule fields CURRENT.",
    negative: "Does not claim host compromise is ruled out.",
  },
  {
    id: "t-commit-compensate",
    from: "commit_terminal",
    to: "compensate",
    label: "Compensation target",
    preconditions: ["External effect escaped direct rollback"],
    invariant: "Compensation ≠ snapshot restore.",
    evidence: "Compensation intent record (Target)",
    failureRoute: "Manual / policy compensation",
    maturity: "Target Architecture.",
    negative: "Must not be drawn as currently equivalent to snap-rollback.",
  },
];

const NODE_POS: Record<NodeId, { x: number; y: number; label: string }> = {
  propose: { x: 70, y: 120, label: "Propose" },
  stage: { x: 220, y: 120, label: "Stage S₀" },
  constrain: { x: 370, y: 120, label: "Constrain" },
  validate: { x: 520, y: 120, label: "Validate" },
  approve: { x: 520, y: 40, label: "Approve" },
  decide: { x: 670, y: 120, label: "Decide" },
  commit_terminal: { x: 850, y: 60, label: "Commit" },
  abort_terminal: { x: 850, y: 180, label: "Abort" },
  evidence_commit: { x: 1020, y: 60, label: "Evidence" },
  evidence_abort: { x: 1020, y: 180, label: "Evidence" },
  emit: { x: 1020, y: 120, label: "Emit" },
  compensate: { x: 850, y: 280, label: "Compensate" },
};

function phaseStatus(id: NodeId): string | null {
  const p = CHANGE_GATE_PHASES.find((x) => x.id === id);
  return p?.status ?? null;
}

export function ChangeGateStateSpace({
  className,
  activePhaseId,
  onSelectPhase,
}: {
  className?: string;
  activePhaseId?: string;
  onSelectPhase?: (id: string) => void;
}) {
  const [activeTransition, setActiveTransition] = useState<string>(
    "t-stage-constrain",
  );
  const [currentOnly, setCurrentOnly] = useState(true);

  const t = TRANSITIONS.find((x) => x.id === activeTransition) ?? TRANSITIONS[0]!;

  const visibleTransitions = useMemo(() => {
    if (!currentOnly) return TRANSITIONS;
    return TRANSITIONS.filter((tr) => {
      // Hide purely target nodes when current-only
      if (tr.to === "approve" || tr.from === "approve") return false;
      if (tr.to === "compensate" || tr.from === "compensate") return false;
      return true;
    });
  }, [currentOnly]);

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-carbon",
        className,
      )}
      data-testid="change-gate-state-space"
      data-figure="FIG-CG-SS-01"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
            FIG-CG-SS-01 · Transactional state-space
          </p>
          <p className="mt-0.5 text-xs text-porcelain-muted">
            Select a transition · Commit/Abort terminals · compensation distinct
          </p>
        </div>
        <button
          type="button"
          aria-pressed={currentOnly}
          onClick={() => setCurrentOnly((v) => !v)}
          className={cn(
            "rounded-md border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em]",
            currentOnly
              ? "border-institution/50 bg-institution/20 text-porcelain"
              : "border-border text-porcelain-subtle",
          )}
        >
          {currentOnly ? "Current only" : "Destination architecture"}
        </button>
      </div>

      <div className="relative aspect-[16/9] w-full bg-void sm:aspect-[2.2/1]">
        <svg
          viewBox="0 0 1120 340"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Change Gate state transition graph"
        >
          <defs>
            <marker
              id="ss-arrow"
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path d="M0 0L7 3.5L0 7Z" fill="#b8b3a8" />
            </marker>
          </defs>

          {visibleTransitions.map((tr) => {
            const a = NODE_POS[tr.from];
            const b = NODE_POS[tr.to];
            if (!a || !b) return null;
            const active = tr.id === activeTransition;
            const isAbort = tr.to === "abort_terminal" || tr.to === "evidence_abort";
            const isCommit =
              tr.to === "commit_terminal" || tr.to === "evidence_commit";
            return (
              <g key={tr.id}>
                <line
                  x1={a.x + 36}
                  y1={a.y}
                  x2={b.x - 36}
                  y2={b.y}
                  stroke={
                    active
                      ? isAbort
                        ? "#b96464"
                        : isCommit
                          ? "#75a184"
                          : "#5f93a8"
                      : "#f6f1e7"
                  }
                  strokeOpacity={active ? 0.9 : 0.18}
                  strokeWidth={active ? 2.5 : 1.2}
                  markerEnd="url(#ss-arrow)"
                />
                <rect
                  x={(a.x + b.x) / 2 - 28}
                  y={(a.y + b.y) / 2 - 10}
                  width="56"
                  height="18"
                  rx="4"
                  fill="#07090b"
                  stroke={active ? "#5f93a8" : "transparent"}
                  className="cursor-pointer"
                  onClick={() => setActiveTransition(tr.id)}
                />
                {/* invisible fat hit target */}
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="transparent"
                  strokeWidth="16"
                  className="cursor-pointer"
                  onClick={() => setActiveTransition(tr.id)}
                />
              </g>
            );
          })}

          {(Object.entries(NODE_POS) as [NodeId, (typeof NODE_POS)[NodeId]][]).map(
            ([id, pos]) => {
              if (currentOnly && (id === "approve" || id === "compensate" || id === "emit"))
                return null;
              const status = phaseStatus(id);
              const isTerminal =
                id === "commit_terminal" || id === "abort_terminal";
              const isEvidence =
                id === "evidence_commit" || id === "evidence_abort";
              const isActivePhase = activePhaseId === id;
              const fill =
                id === "commit_terminal"
                  ? "#13201a"
                  : id === "abort_terminal"
                    ? "#231111"
                    : isEvidence
                      ? "#eee7d8"
                      : "#111820";
              const stroke =
                id === "commit_terminal"
                  ? "#75a184"
                  : id === "abort_terminal"
                    ? "#b96464"
                    : isEvidence
                      ? "#fff"
                      : isActivePhase
                        ? "#5f93a8"
                        : "rgba(246,241,231,0.25)";
              const textFill = isEvidence ? "#1a1f24" : "#f6f1e7";
              return (
                <g
                  key={id}
                  transform={`translate(${pos.x} ${pos.y})`}
                  className="cursor-pointer"
                  onClick={() => {
                    if (
                      id === "propose" ||
                      id === "stage" ||
                      id === "constrain" ||
                      id === "validate" ||
                      id === "approve" ||
                      id === "decide" ||
                      id === "emit" ||
                      id === "compensate"
                    ) {
                      onSelectPhase?.(id);
                    }
                    const match = TRANSITIONS.find(
                      (tr) => tr.from === id || tr.to === id,
                    );
                    if (match) setActiveTransition(match.id);
                  }}
                >
                  <rect
                    x={-40}
                    y={-18}
                    width="80"
                    height="36"
                    rx="8"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isTerminal || isActivePhase ? 2 : 1}
                  />
                  <text
                    textAnchor="middle"
                    y="4"
                    fill={textFill}
                    fontFamily="ui-monospace, monospace"
                    fontSize="10"
                  >
                    {pos.label}
                  </text>
                  {status ? (
                    <circle
                      cx="32"
                      cy="-12"
                      r="3.5"
                      fill={
                        status === "CURRENT"
                          ? "#496f59"
                          : status === "IN_DEVELOPMENT"
                            ? "#a9793b"
                            : "#5a7a8c"
                      }
                    />
                  ) : null}
                </g>
              );
            },
          )}
        </svg>
      </div>

      <figcaption className="space-y-3 border-t border-border px-3 py-3 sm:px-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-serif text-base text-porcelain">{t.label}</p>
          <span className="font-mono text-[10px] text-porcelain-subtle">
            {t.from} → {t.to}
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
              Preconditions
            </p>
            <ul className="mt-1 space-y-0.5 text-xs text-porcelain-muted">
              {t.preconditions.map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
              Invariant
            </p>
            <p className="mt-1 text-xs text-porcelain-muted">{t.invariant}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
              Evidence produced
            </p>
            <p className="mt-1 text-xs text-porcelain-muted">{t.evidence}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
              Failure route
            </p>
            <p className="mt-1 text-xs text-porcelain-muted">{t.failureRoute}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
              Maturity
            </p>
            <p className="mt-1 text-xs text-porcelain-muted">{t.maturity}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-controlled-red-fg/80">
              Not guaranteed
            </p>
            <p className="mt-1 text-xs text-porcelain-muted">{t.negative}</p>
          </div>
        </div>
        {activePhaseId ? (
          <div className="flex flex-wrap items-center gap-2 border-t border-border pt-2">
            <span className="font-mono text-[10px] text-porcelain-subtle">
              Phase panel focus
            </span>
            {CHANGE_GATE_PHASES.filter((p) => p.id === activePhaseId).map((p) => (
              <MaturityBadge key={p.id} status={p.status} compact showLabel />
            ))}
          </div>
        ) : null}
      </figcaption>
    </figure>
  );
}
