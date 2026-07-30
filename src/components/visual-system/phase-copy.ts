/** Phase copy for Cognitive Hypervisor (FIG-HYP-01) — product semantics only */

export type HypervisorPhase =
  | "intent"
  | "stage"
  | "constrain"
  | "validate"
  | "commit"
  | "abort"
  | "emit";

export const HYPERVISOR_PHASE_ORDER: HypervisorPhase[] = [
  "intent",
  "stage",
  "constrain",
  "validate",
  "commit",
  "emit",
];

export const HYPERVISOR_PHASE_COPY: Record<
  HypervisorPhase,
  { title: string; body: string; packetX: number }
> = {
  intent: {
    title: "Intent is declared—not authorized.",
    body: "The action enters as scope and requested effect. No side effect has crossed the boundary.",
    packetX: 0,
  },
  stage: {
    title: "The proposed change becomes a reversible state.",
    body: "A snapshot and isolated working state separate reasoning from irreversible consequence.",
    packetX: 125,
  },
  constrain: {
    title: "Authority is bound before execution.",
    body: "Capability chains may narrow permission; recalled memory cannot silently widen it.",
    packetX: 285,
  },
  validate: {
    title: "Predicates evaluate the staged result.",
    body: "Policy, health, and deterministic validators determine whether the change may proceed.",
    packetX: 450,
  },
  commit: {
    title: "Commit applies only the surviving state transition.",
    body: "The effect crosses the boundary after authority and validation conditions are satisfied.",
    packetX: 620,
  },
  abort: {
    title: "Abort is a successful controlled outcome.",
    body: "The staged change is rejected, pre-state is restored where supported, and denial remains inspectable.",
    packetX: 620,
  },
  emit: {
    title: "Evidence leaves the boundary with the decision.",
    body: "The Proof Capsule binds observed execution, authority context, recovery, limitations, and optional integrity metadata.",
    packetX: 760,
  },
};

/** Map scroll progress 0–1 to hypervisor phase (Commit/Abort both in decide window). */
export function hypervisorPhaseFromProgress(
  p: number,
  preferAbort = false,
): HypervisorPhase {
  if (p < 0.16) return "intent";
  if (p < 0.32) return "stage";
  if (p < 0.48) return "constrain";
  if (p < 0.58) return "validate";
  if (p < 0.8) return preferAbort ? "abort" : "commit";
  return "emit";
}

export const TRACE_THREAT_COPY = {
  commit: {
    decision: "commit",
    effectVisible: true,
  },
  abort: {
    decision: "abort",
    effectVisible: false,
  },
} as const;
