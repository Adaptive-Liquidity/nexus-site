/**
 * Canonical phase vocabulary shared by all P0/P1 instruments.
 *
 * Public narrative: Intent → Stage → Constrain → Validate → Decide → Emit
 * Internal states: Proposed → Staged → Constrained → Validated →
 *   AwaitingApproval? → Committed | Aborted → EvidenceEmitted
 *
 * Approval is policy-conditioned and never a universal required phase.
 */

export const PUBLIC_PHASES = [
  "intent",
  "stage",
  "constrain",
  "validate",
  "decide",
  "emit",
] as const;

export type PublicPhase = (typeof PUBLIC_PHASES)[number];

export const PUBLIC_PHASE_LABELS: Record<PublicPhase, string> = {
  intent: "Intent",
  stage: "Stage",
  constrain: "Constrain",
  validate: "Validate",
  decide: "Decide",
  emit: "Emit",
};

export type InternalTxnState =
  | "Proposed"
  | "Staged"
  | "Constrained"
  | "Validated"
  | "AwaitingApproval"
  | "Committed"
  | "Aborted"
  | "EvidenceEmitted";

export function publicPhaseToInternal(
  phase: PublicPhase,
  decision?: "commit" | "abort" | null,
): InternalTxnState {
  switch (phase) {
    case "intent":
      return "Proposed";
    case "stage":
      return "Staged";
    case "constrain":
      return "Constrained";
    case "validate":
      return "Validated";
    case "decide":
      if (decision === "commit") return "Committed";
      if (decision === "abort") return "Aborted";
      return "Validated";
    case "emit":
      return "EvidenceEmitted";
  }
}

/** Scoped Abort copy — never claim universal external-effect absence. */
export const ABORT_SCOPED_COPY =
  "For this isolated fixture, Abort restores snapshot-backed guest state before any committed effect. External effects require explicit compensation semantics and are not proven absent.";

export const DENIAL_SCOPED_COPY =
  "Authority failed before any authorized host effect. The staged isolation may be discarded; rollback is not asserted unless guest state actually changed and was restored. External-effect absence is Not Established beyond the governed boundary.";
