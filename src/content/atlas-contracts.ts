/**
 * Inter-plane contracts for Architecture Atlas.
 * Derived from product doctrine + claims — not invented SDKs.
 */

export type AtlasPlane = "nexusiq" | "aeon" | "nexus" | "evidence" | "agent";

export type ContractKind =
  | "advisory_context"
  | "authority_barrier"
  | "authorized_execution"
  | "evidence_emit"
  | "policy_gated_memory_write"
  | "proposed_action";

export interface AtlasContract {
  id: string;
  from: AtlasPlane;
  to: AtlasPlane;
  kind: ContractKind;
  label: string;
  /** Short accessible description */
  summary: string;
  /** Pattern for grayscale: solid | dashed | barrier */
  pattern: "solid" | "dashed" | "barrier";
  /** Source doctrine references */
  sourceRefs: string[];
}

/** Canonical inter-plane contracts (product-native, non-invented). */
export const ATLAS_CONTRACTS: AtlasContract[] = [
  {
    id: "c-agent-nexusiq-propose",
    from: "agent",
    to: "nexusiq",
    kind: "proposed_action",
    label: "proposed action",
    summary: "Autonomous system declares intent + scope into the control plane.",
    pattern: "solid",
    sourceRefs: ["claims-registry:transactional-change-gate"],
  },
  {
    id: "c-aeon-nexusiq-advisory",
    from: "aeon",
    to: "nexusiq",
    kind: "advisory_context",
    label: "advisory context",
    summary:
      "Memory may inform reasoning context. It never becomes execution authority.",
    pattern: "dashed",
    sourceRefs: ["claims-registry:aeon-memory-binding"],
  },
  {
    id: "c-aeon-nexusiq-barrier",
    from: "aeon",
    to: "nexusiq",
    kind: "authority_barrier",
    label: "cannot widen authority",
    summary:
      "Hard barrier: memory path terminates before capability grant.",
    pattern: "barrier",
    sourceRefs: ["claims-registry:capability-authority", "doctrine:memory-authority"],
  },
  {
    id: "c-nexusiq-nexus-exec",
    from: "nexusiq",
    to: "nexus",
    kind: "authorized_execution",
    label: "authorized execution",
    summary:
      "Only capability-bound host calls execute under WASM guest↔host governance.",
    pattern: "solid",
    sourceRefs: [
      "claims-registry:isolation-snap-rollback",
      "claims-registry:capability-authority",
    ],
  },
  {
    id: "c-nexus-evidence-emit",
    from: "nexus",
    to: "evidence",
    kind: "evidence_emit",
    label: "emit receipt",
    summary:
      "Runtime-observed Proof Capsule fields with mandatory limitations[].",
    pattern: "solid",
    sourceRefs: ["claims-registry:proof-capsules"],
  },
  {
    id: "c-nexusiq-evidence-decide",
    from: "nexusiq",
    to: "evidence",
    kind: "evidence_emit",
    label: "decision + limitations",
    summary:
      "Commit/Abort outcome and limitations bind into portable evidence.",
    pattern: "solid",
    sourceRefs: ["claims-registry:proof-capsules"],
  },
  {
    id: "c-nexusiq-aeon-policy-write",
    from: "nexusiq",
    to: "aeon",
    kind: "policy_gated_memory_write",
    label: "new memory only after policy",
    summary:
      "Memory updates after controlled outcomes remain policy-gated; not silent authority expansion.",
    pattern: "dashed",
    sourceRefs: ["claims-registry:aeon-memory-binding"],
  },
];

export function contractsForPlane(plane: AtlasPlane | "all"): {
  inbound: AtlasContract[];
  outbound: AtlasContract[];
  all: AtlasContract[];
} {
  if (plane === "all") {
    return { inbound: [], outbound: [], all: ATLAS_CONTRACTS };
  }
  const inbound = ATLAS_CONTRACTS.filter((c) => c.to === plane);
  const outbound = ATLAS_CONTRACTS.filter((c) => c.from === plane);
  return { inbound, outbound, all: ATLAS_CONTRACTS };
}

/** Ghost emphasis: full for contracts touching active plane; subdued otherwise. */
export function contractOpacity(
  contract: AtlasContract,
  active: AtlasPlane | "all",
): number {
  if (active === "all") return 1;
  if (contract.from === active || contract.to === active) return 0.95;
  return 0.22;
}
