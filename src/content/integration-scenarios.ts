/**
 * Developer Integration Simulator scenarios.
 * Representation is always "fixture" unless a live runtime is explicitly connected.
 * Use only documented capability / boundary language — no invented SDKs.
 */

import type { InternalStatus } from "./maturity";
import type { PublicPhase } from "./transaction-model";
import type { TrustClass } from "./trust-taxonomy";

export type IntegrationScenarioId =
  | "readonly-inspect"
  | "capability-denied"
  | "validator-abort"
  | "degraded-memory"
  | "change-gate-destination";

export interface IntegrationStep {
  phase: PublicPhase;
  from: string;
  to: string;
  action: string;
  maturity: InternalStatus;
  trust: TrustClass;
  note?: string;
}

export interface IntegrationScenario {
  id: IntegrationScenarioId;
  title: string;
  mode: "CURRENT_FOUNDATION" | "IN_INTEGRATION" | "TARGET_ARCHITECTURE";
  representation: "fixture";
  decision: "COMMIT" | "ABORT" | "DENY";
  summary: string;
  /** Display-only representative capability strings */
  capabilities: string[];
  limitations: string[];
  steps: IntegrationStep[];
  receipt: {
    failure: string | null;
    rollback: string;
    attestation: string;
    signature: string;
    limitations: string[];
  };
}

export const INTEGRATION_SCENARIOS: IntegrationScenario[] = [
  {
    id: "readonly-inspect",
    title: "Read-only inspection (current foundation)",
    mode: "CURRENT_FOUNDATION",
    representation: "fixture",
    decision: "COMMIT",
    summary:
      "Capability-limited WASM tool reads an allowed path and emits a runtime receipt. Governance is at the WASM guest↔host boundary.",
    capabilities: ["fs.read:/workspace", "clock.monotonic"],
    limitations: [
      "LOCAL FIXTURE — no live runtime claim",
      "Does not intercept model tool choice",
      "Receipt trusts Nexus runtime and host boundary",
    ],
    steps: [
      {
        phase: "intent",
        from: "Agent",
        to: "Host",
        action: "Declare inspection intent",
        maturity: "CURRENT",
        trust: "Observed",
      },
      {
        phase: "stage",
        from: "Host",
        to: "Nexus",
        action: "Create sandbox + snapshot S₀",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "constrain",
        from: "Nexus",
        to: "Authority",
        action: "Bind attenuated capability token",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "validate",
        from: "Nexus",
        to: "Nexus",
        action: "Execute authorized host calls only",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "decide",
        from: "Nexus",
        to: "Host",
        action: "Return observed result",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "emit",
        from: "Nexus",
        to: "Evidence",
        action: "Emit Proof Capsule fields + limitations[]",
        maturity: "CURRENT",
        trust: "Observed",
      },
    ],
    receipt: {
      failure: null,
      rollback: "none",
      attestation: "runtime_observed",
      signature: "optional · demo key if present",
      limitations: [
        "runtime_attestation_only",
        "does_not_prove_correct_execution",
        "trusts_nexus_runtime_and_host_boundary",
      ],
    },
  },
  {
    id: "capability-denied",
    title: "Capability denied (pre-effect)",
    mode: "CURRENT_FOUNDATION",
    representation: "fixture",
    decision: "DENY",
    summary:
      "Token omits network authority. Host call is denied before authorized effect. Rollback is not asserted.",
    capabilities: ["fs.read:/workspace"],
    limitations: [
      "LOCAL FIXTURE — no live runtime claim",
      "Governance applies at WASM guest↔host boundary",
      "Model may still choose to request a disallowed action",
    ],
    steps: [
      {
        phase: "intent",
        from: "Agent",
        to: "Host",
        action: "Request tool with network intent",
        maturity: "CURRENT",
        trust: "Observed",
      },
      {
        phase: "stage",
        from: "Host",
        to: "Nexus",
        action: "Stage sandbox (no mutation yet)",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "constrain",
        from: "Authority",
        to: "Nexus",
        action: "Deny: missing NetworkOutbound",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "validate",
        from: "Nexus",
        to: "Nexus",
        action: "Skip mutation validators (pre-effect deny)",
        maturity: "CURRENT",
        trust: "Observed",
      },
      {
        phase: "decide",
        from: "Nexus",
        to: "Host",
        action: "Abort/deny · discard staged isolation",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "emit",
        from: "Nexus",
        to: "Evidence",
        action: "Record denial + limitations[]",
        maturity: "CURRENT",
        trust: "Observed",
      },
    ],
    receipt: {
      failure: "capability_denied",
      rollback: "not asserted (no authorized mutation)",
      attestation: "runtime_observed",
      signature: "optional · demo key if present",
      limitations: [
        "runtime_attestation_only",
        "does_not_prove_absence_of_external_side_effects",
        "trusts_nexus_runtime_and_host_boundary",
      ],
    },
  },
  {
    id: "validator-abort",
    title: "Validator abort (post-stage rollback)",
    mode: "IN_INTEGRATION",
    representation: "fixture",
    decision: "ABORT",
    summary:
      "Authority granted; staged mutation applied; validator fails; snapshot-backed guest state restored. Full Change Gate remains In Integration.",
    capabilities: ["workspace.write:staged", "validator.execute"],
    limitations: [
      "LOCAL FIXTURE — no live runtime claim",
      "Full public Change Gate surface is not complete",
      "External effects not proven absent",
    ],
    steps: [
      {
        phase: "intent",
        from: "Agent",
        to: "Nexus-IQ",
        action: "Submit intent + declared scope",
        maturity: "IN_DEVELOPMENT",
        trust: "Observed",
      },
      {
        phase: "stage",
        from: "Nexus-IQ",
        to: "Nexus",
        action: "Create isolated working state + S₀",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "constrain",
        from: "Authority",
        to: "Nexus",
        action: "Apply constrained staged write",
        maturity: "IN_DEVELOPMENT",
        trust: "Enforced",
      },
      {
        phase: "validate",
        from: "Nexus-IQ",
        to: "Validator",
        action: "Deterministic validators · FAIL",
        maturity: "IN_DEVELOPMENT",
        trust: "Enforced",
      },
      {
        phase: "decide",
        from: "Nexus",
        to: "Nexus",
        action: "Abort · restore S₀ guest state",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "emit",
        from: "Nexus",
        to: "Evidence",
        action: "Emit failure + rollback evidence",
        maturity: "CURRENT",
        trust: "Observed",
      },
    ],
    receipt: {
      failure: "validator_failed",
      rollback: "occurred · restored S₀",
      attestation: "runtime_observed",
      signature: "optional · demo key if present",
      limitations: [
        "does_not_prove_absence_of_external_side_effects",
        "full_change_gate_not_finished_product",
        "trusts_nexus_runtime_and_host_boundary",
      ],
    },
  },
  {
    id: "degraded-memory",
    title: "Degraded memory context",
    mode: "IN_INTEGRATION",
    representation: "fixture",
    decision: "COMMIT",
    summary:
      "Memory mode degrades to Advisory/Degraded. Memory informs reasoning only; it cannot widen execution authority.",
    capabilities: ["fs.read:/workspace", "memory.recall:advisory"],
    limitations: [
      "LOCAL FIXTURE — no live runtime claim",
      "Incomplete memory binding → Advisory/Degraded/Absent",
      "Memory cannot silently increase authority",
    ],
    steps: [
      {
        phase: "intent",
        from: "Agent",
        to: "Host",
        action: "Request with memory context",
        maturity: "CURRENT",
        trust: "Observed",
      },
      {
        phase: "stage",
        from: "Host",
        to: "Nexus",
        action: "Stage execution",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "constrain",
        from: "Authority",
        to: "Nexus",
        action: "Bind execution capabilities (unchanged by memory)",
        maturity: "CURRENT",
        trust: "Enforced",
        note: "Memory path terminates before authority",
      },
      {
        phase: "validate",
        from: "AEON-IQ",
        to: "Nexus",
        action: "Supply Advisory/Degraded context only",
        maturity: "IN_DEVELOPMENT",
        trust: "Observed",
        note: "Does not cross authority lane",
      },
      {
        phase: "decide",
        from: "Nexus",
        to: "Host",
        action: "Execute under granted capabilities",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "emit",
        from: "Nexus",
        to: "Evidence",
        action: "Record memory mode + limitations[]",
        maturity: "CURRENT",
        trust: "Observed",
      },
    ],
    receipt: {
      failure: null,
      rollback: "none",
      attestation: "Advisory/Degraded",
      signature: "optional · demo key if present",
      limitations: [
        "memory_mode_advisory_or_degraded",
        "memory_cannot_widen_authority",
        "trusts_nexus_runtime_and_host_boundary",
      ],
    },
  },
  {
    id: "change-gate-destination",
    title: "Composed Change Gate (destination)",
    mode: "TARGET_ARCHITECTURE",
    representation: "fixture",
    decision: "COMMIT",
    summary:
      "Explicit destination architecture for stage → validate → approve? → commit/abort. Not a current deployable product surface.",
    capabilities: [
      "repo.read",
      "workspace.write:staged",
      "validator.execute",
      "commit.request",
    ],
    limitations: [
      "TARGET ARCHITECTURE — not current",
      "Stage 0 evidence integrity still blocking",
      "Do not present as deployable end-to-end",
    ],
    steps: [
      {
        phase: "intent",
        from: "Agent",
        to: "Nexus-IQ",
        action: "Submit intent + scope",
        maturity: "TARGET",
        trust: "Not Established",
      },
      {
        phase: "stage",
        from: "Nexus-IQ",
        to: "Nexus",
        action: "Isolate working state",
        maturity: "CURRENT",
        trust: "Enforced",
      },
      {
        phase: "constrain",
        from: "Authority",
        to: "Nexus-IQ",
        action: "Bind durable authority chain",
        maturity: "IN_DEVELOPMENT",
        trust: "Not Established",
      },
      {
        phase: "validate",
        from: "Nexus-IQ",
        to: "Validator",
        action: "Full validator barrier + optional approval",
        maturity: "IN_DEVELOPMENT",
        trust: "Not Established",
      },
      {
        phase: "decide",
        from: "Nexus-IQ",
        to: "Effect",
        action: "Commit or Abort (product composition)",
        maturity: "IN_DEVELOPMENT",
        trust: "Not Established",
      },
      {
        phase: "emit",
        from: "Nexus-IQ",
        to: "Evidence",
        action: "Binding receipt (action+authority+memory)",
        maturity: "TARGET",
        trust: "Not Established",
      },
    ],
    receipt: {
      failure: null,
      rollback: "destination semantics",
      attestation: "target full binding",
      signature: "production anchors TARGET",
      limitations: [
        "not_a_finished_public_product_surface",
        "stage0_blocking",
        "must_not_present_as_currently_deployable",
      ],
    },
  },
];

export function getIntegrationScenario(
  id: IntegrationScenarioId,
): IntegrationScenario {
  return INTEGRATION_SCENARIOS.find((s) => s.id === id) ?? INTEGRATION_SCENARIOS[0]!;
}
