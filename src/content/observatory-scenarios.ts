/**
 * Immutable event streams for Execution Observatory.
 * Lenses and KAR (Known / Authorized / Reversible) are pure projections.
 * Denial and rollback are separate causal fixtures.
 */

import type { InternalStatus } from "./maturity";
import type { PublicPhase } from "./transaction-model";
import type { TrustClass } from "./trust-taxonomy";

export type ObservatoryScenarioId = "commit" | "denial" | "rollback";

/** KAR cell values — text+symbol, never color-only. */
export type KarValue =
  | "Yes"
  | "No"
  | "Conditional"
  | "Not Established";

export interface KarState {
  known: KarValue;
  knownDetail: string;
  authorized: KarValue;
  authorizedDetail: string;
  reversible: KarValue;
  reversibleDetail: string;
}

export interface ObservatoryEvent {
  id: string;
  sequence: number;
  stage: PublicPhase;
  type: string;
  log: string;
  detail: string;
  maturity: InternalStatus;
  evidenceFieldsUnlocked: string[];
  trust: TrustClass;
  authority?: {
    requested?: string[];
    granted?: string[];
    denied?: string[];
  };
  validators?: {
    id: string;
    outcome: "pending" | "pass" | "fail" | "skip";
    maturity: InternalStatus;
  }[];
  state?: {
    baseline?: string;
    working?: string;
    result?: string;
    resultTone?: "pending" | "commit" | "abort" | "deny";
  };
  branch?: "commit" | "abort" | "deny";
  rollbackOccurred?: boolean;
  /** KAR snapshot after this event (authoritative for strip) */
  kar: KarState;
}

export interface ObservatoryScenario {
  id: ObservatoryScenarioId;
  label: string;
  summary: string;
  classification: string;
  events: ObservatoryEvent[];
}

const KAR_PENDING: KarState = {
  known: "No",
  knownDetail: "No runtime observation yet",
  authorized: "Not Established",
  authorizedDetail: "Authority not yet bound",
  reversible: "Not Established",
  reversibleDetail: "No staged guest mutation yet",
};

export const OBSERVATORY_SCENARIOS: Record<
  ObservatoryScenarioId,
  ObservatoryScenario
> = {
  commit: {
    id: "commit",
    label: "Commit path",
    summary:
      "Authority granted; validators pass; surviving effects cross the boundary; evidence emitted.",
    classification:
      "Representative fixture · composed path partially In Integration",
    events: [
      {
        id: "c0",
        sequence: 0,
        stage: "intent",
        type: "agent.propose",
        log: "agent.propose(repo_patch: dependency-bump)",
        detail: "Agent declares intent + scope for a repository change.",
        maturity: "TARGET",
        evidenceFieldsUnlocked: [],
        trust: "Observed",
        authority: {
          requested: ["WriteFile:/src", "ReadFile:/src"],
          granted: [],
          denied: [],
        },
        state: {
          baseline: "no snapshot yet",
          working: "awaiting stage",
          result: "uncommitted",
          resultTone: "pending",
        },
        kar: {
          known: "Yes",
          knownDetail: "Intent + scope received",
          authorized: "Not Established",
          authorizedDetail: "No grant yet",
          reversible: "Not Established",
          reversibleDetail: "No staged mutation",
        },
      },
      {
        id: "c1",
        sequence: 1,
        stage: "stage",
        type: "nexus.snapshot",
        log: "nexus.snapshot(create) · isolation=worktree",
        detail: "Change isolated. Pre-execution snapshot S₀ captured.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: ["snapshot"],
        trust: "Enforced",
        state: {
          baseline: "S₀ captured · guest snapshot",
          working: "worktree isolation · patch staged",
          result: "uncommitted",
          resultTone: "pending",
        },
        kar: {
          known: "Yes",
          knownDetail: "S₀ snapshot + isolation observed",
          authorized: "Not Established",
          authorizedDetail: "Capabilities not yet bound",
          reversible: "Conditional",
          reversibleDetail: "Guest state restorable via S₀ if mutated later",
        },
      },
      {
        id: "c2",
        sequence: 2,
        stage: "constrain",
        type: "capability.bind",
        log: "capability.bind(WriteFile:/src) · grant OK",
        detail: "Authority tokens bound. Unauthorized paths denied.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: ["snapshot", "capabilities"],
        trust: "Enforced",
        authority: {
          requested: ["WriteFile:/src", "ReadFile:/src"],
          granted: ["WriteFile:/src", "ReadFile:/src"],
          denied: [],
        },
        kar: {
          known: "Yes",
          knownDetail: "Grant set recorded",
          authorized: "Yes",
          authorizedDetail: "WriteFile:/src · ReadFile:/src granted",
          reversible: "Conditional",
          reversibleDetail: "Staged guest work reversible via S₀",
        },
      },
      {
        id: "c3",
        sequence: 3,
        stage: "validate",
        type: "validators.run",
        log: "validators.run([policy, health, diff]) · pass",
        detail: "Pre-commit validators evaluate the staged change.",
        maturity: "IN_DEVELOPMENT",
        evidenceFieldsUnlocked: ["snapshot", "capabilities"],
        trust: "Observed",
        validators: [
          { id: "policy.capability", outcome: "pass", maturity: "CURRENT" },
          { id: "health.snapshot", outcome: "pass", maturity: "CURRENT" },
          { id: "diff.intent_scope", outcome: "pass", maturity: "IN_DEVELOPMENT" },
          {
            id: "gate.commit_barrier",
            outcome: "pending",
            maturity: "IN_DEVELOPMENT",
          },
        ],
        kar: {
          known: "Yes",
          knownDetail: "Validator outcomes observed",
          authorized: "Yes",
          authorizedDetail: "Prior grants remain in force",
          reversible: "Conditional",
          reversibleDetail: "Still pre-commit; S₀ available",
        },
      },
      {
        id: "c4",
        sequence: 4,
        stage: "decide",
        type: "txn.decide.COMMIT",
        log: "txn.decide(COMMIT) · surviving effects applied",
        detail:
          "Only surviving changes cross the commit boundary. Full barrier remains In Integration under Stage 0.",
        maturity: "IN_DEVELOPMENT",
        evidenceFieldsUnlocked: ["snapshot", "capabilities", "subject"],
        trust: "Enforced",
        branch: "commit",
        rollbackOccurred: false,
        validators: [
          { id: "policy.capability", outcome: "pass", maturity: "CURRENT" },
          { id: "health.snapshot", outcome: "pass", maturity: "CURRENT" },
          { id: "diff.intent_scope", outcome: "pass", maturity: "IN_DEVELOPMENT" },
          {
            id: "gate.commit_barrier",
            outcome: "pass",
            maturity: "IN_DEVELOPMENT",
          },
        ],
        state: {
          baseline: "S₀ captured · guest snapshot",
          working: "worktree isolation · patch staged",
          result: "surviving effects applied",
          resultTone: "commit",
        },
        kar: {
          known: "Yes",
          knownDetail: "Commit decision observed",
          authorized: "Yes",
          authorizedDetail: "Effects authorized by grant set",
          reversible: "No",
          reversibleDetail:
            "Guest path committed; external effects need compensation (Not Established here)",
        },
      },
      {
        id: "c5",
        sequence: 5,
        stage: "emit",
        type: "proof_capsule.emit",
        log: "proof_capsule.emit(optionally_signed, limitations[])",
        detail:
          "Portable evidence record leaves the boundary. Signature is optional; demo keys are not production anchors.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: [
          "subject",
          "capabilities",
          "snapshot",
          "failure",
          "rollback",
          "limitations",
          "signature",
        ],
        trust: "Observed",
        branch: "commit",
        kar: {
          known: "Yes",
          knownDetail: "Capsule fields unlocked",
          authorized: "Yes",
          authorizedDetail: "Historical grant set recorded",
          reversible: "No",
          reversibleDetail:
            "Post-commit; external-effect absence Not Established",
        },
      },
    ],
  },
  denial: {
    id: "denial",
    label: "Pre-effect denial",
    summary:
      "Capability denied at Constrain. No authorized host effect. Rollback not asserted.",
    classification: "Representative fixture · Implemented Foundation path",
    events: [
      {
        id: "d0",
        sequence: 0,
        stage: "intent",
        type: "agent.propose",
        log: "agent.propose(tool: network_fetch)",
        detail: "Agent requests outbound network capability.",
        maturity: "TARGET",
        evidenceFieldsUnlocked: [],
        trust: "Observed",
        authority: {
          requested: ["NetworkOutbound", "ReadEnv"],
          granted: [],
          denied: [],
        },
        state: {
          baseline: "no snapshot yet",
          working: "awaiting stage",
          result: "uncommitted",
          resultTone: "pending",
        },
        kar: {
          ...KAR_PENDING,
          known: "Yes",
          knownDetail: "Network intent received",
        },
      },
      {
        id: "d1",
        sequence: 1,
        stage: "stage",
        type: "nexus.snapshot",
        log: "nexus.snapshot(create) · isolation=sandbox",
        detail: "Execution staged. Snapshot available if mutation later occurs.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: ["snapshot"],
        trust: "Enforced",
        state: {
          baseline: "S₀ captured · guest snapshot",
          working: "sandbox isolation · network intent staged",
          result: "uncommitted",
          resultTone: "pending",
        },
        kar: {
          known: "Yes",
          knownDetail: "S₀ + sandbox staged",
          authorized: "Not Established",
          authorizedDetail: "No capability grant yet",
          reversible: "Conditional",
          reversibleDetail: "No authorized mutation yet; discard is not rollback",
        },
      },
      {
        id: "d2",
        sequence: 2,
        stage: "constrain",
        type: "capability.deny",
        log: "capability.bind(NetworkOutbound) · DENIED",
        detail:
          "Required capability not granted. Mismatch recorded. No authorized host effect.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: ["snapshot", "capabilities", "failure"],
        trust: "Enforced",
        authority: {
          requested: ["NetworkOutbound", "ReadEnv"],
          granted: ["ReadEnv"],
          denied: ["NetworkOutbound"],
        },
        kar: {
          known: "Yes",
          knownDetail: "Denial + mismatch observed",
          authorized: "No",
          authorizedDetail: "NetworkOutbound denied · ReadEnv only",
          reversible: "Not Established",
          reversibleDetail:
            "No authorized host mutation; rollback.occurred not asserted",
        },
      },
      {
        id: "d3",
        sequence: 3,
        stage: "validate",
        type: "validators.skip",
        log: "validators.run · skipped (pre-effect deny)",
        detail:
          "Validation of staged mutation does not run — no authorized mutation occurred.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: ["snapshot", "capabilities", "failure"],
        trust: "Observed",
        validators: [
          { id: "policy.capability", outcome: "fail", maturity: "CURRENT" },
          { id: "health.snapshot", outcome: "pass", maturity: "CURRENT" },
          { id: "diff.intent_scope", outcome: "skip", maturity: "IN_DEVELOPMENT" },
          {
            id: "gate.commit_barrier",
            outcome: "skip",
            maturity: "IN_DEVELOPMENT",
          },
        ],
        kar: {
          known: "Yes",
          knownDetail: "Validator skip recorded",
          authorized: "No",
          authorizedDetail: "Still denied for NetworkOutbound",
          reversible: "Not Established",
          reversibleDetail: "No mutation to restore",
        },
      },
      {
        id: "d4",
        sequence: 4,
        stage: "decide",
        type: "txn.decide.DENY",
        log: "txn.decide(ABORT) · discard staged isolation · no host effect",
        detail:
          "Pre-effect denial. Snapshot may be discarded. rollback.occurred is not asserted because guest state was not mutated under authorization.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: [
          "snapshot",
          "capabilities",
          "failure",
          "subject",
        ],
        trust: "Enforced",
        branch: "deny",
        rollbackOccurred: false,
        state: {
          baseline: "S₀ captured · guest snapshot",
          working: "sandbox isolation · discarded",
          result: "denied · no authorized host effect",
          resultTone: "deny",
        },
        kar: {
          known: "Yes",
          knownDetail: "Deny decision observed",
          authorized: "No",
          authorizedDetail: "Effect never authorized",
          reversible: "Not Established",
          reversibleDetail:
            "rollback.occurred=false · discard ≠ snapshot restore",
        },
      },
      {
        id: "d5",
        sequence: 5,
        stage: "emit",
        type: "proof_capsule.emit",
        log: "proof_capsule.emit(denial evidence · limitations[])",
        detail:
          "Denial path still produces inspectable evidence. External-effect absence is Not Established beyond the governed boundary.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: [
          "subject",
          "capabilities",
          "snapshot",
          "failure",
          "rollback",
          "limitations",
          "signature",
        ],
        trust: "Observed",
        branch: "deny",
        rollbackOccurred: false,
        kar: {
          known: "Yes",
          knownDetail: "Denial capsule emitted",
          authorized: "No",
          authorizedDetail: "Historical denial recorded",
          reversible: "Not Established",
          reversibleDetail:
            "No rollback asserted · external-effect absence Not Established",
        },
      },
    ],
  },
  rollback: {
    id: "rollback",
    label: "Post-stage rollback",
    summary:
      "Authority granted; staged mutation applied; validator fails; snapshot-backed guest state restored.",
    classification:
      "Representative fixture · rollback CURRENT · barrier In Integration",
    events: [
      {
        id: "r0",
        sequence: 0,
        stage: "intent",
        type: "agent.propose",
        log: "agent.propose(repo_patch: risky-refactor)",
        detail: "Agent proposes a staged code change.",
        maturity: "TARGET",
        evidenceFieldsUnlocked: [],
        trust: "Observed",
        authority: {
          requested: ["WriteFile:/src"],
          granted: [],
          denied: [],
        },
        state: {
          baseline: "no snapshot yet",
          working: "awaiting stage",
          result: "uncommitted",
          resultTone: "pending",
        },
        kar: {
          known: "Yes",
          knownDetail: "Intent received",
          authorized: "Not Established",
          authorizedDetail: "No grant yet",
          reversible: "Not Established",
          reversibleDetail: "No staged mutation",
        },
      },
      {
        id: "r1",
        sequence: 1,
        stage: "stage",
        type: "nexus.snapshot",
        log: "nexus.snapshot(create) · isolation=worktree",
        detail: "Pre-execution snapshot S₀ of guest state.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: ["snapshot"],
        trust: "Enforced",
        state: {
          baseline: "S₀ captured · guest snapshot",
          working: "worktree isolation · ready",
          result: "uncommitted",
          resultTone: "pending",
        },
        kar: {
          known: "Yes",
          knownDetail: "S₀ captured",
          authorized: "Not Established",
          authorizedDetail: "Awaiting bind",
          reversible: "Conditional",
          reversibleDetail: "S₀ enables guest restore if mutated",
        },
      },
      {
        id: "r2",
        sequence: 2,
        stage: "constrain",
        type: "capability.bind",
        log: "capability.bind(WriteFile:/src) · grant OK",
        detail: "Authority sufficient for staged write.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: ["snapshot", "capabilities"],
        trust: "Enforced",
        authority: {
          requested: ["WriteFile:/src"],
          granted: ["WriteFile:/src"],
          denied: [],
        },
        state: {
          baseline: "S₀ captured · guest snapshot",
          working: "staged mutation applied in isolation",
          result: "uncommitted",
          resultTone: "pending",
        },
        kar: {
          known: "Yes",
          knownDetail: "Staged mutation observed",
          authorized: "Yes",
          authorizedDetail: "WriteFile:/src granted",
          reversible: "Yes",
          reversibleDetail: "Guest mutation reversible via S₀",
        },
      },
      {
        id: "r3",
        sequence: 3,
        stage: "validate",
        type: "validators.fail",
        log: "validators.run([policy, health, diff]) · FAIL · requires_rollback",
        detail: "Deterministic validator rejects staged result.",
        maturity: "IN_DEVELOPMENT",
        evidenceFieldsUnlocked: ["snapshot", "capabilities", "failure"],
        trust: "Enforced",
        validators: [
          { id: "policy.capability", outcome: "pass", maturity: "CURRENT" },
          { id: "health.snapshot", outcome: "pass", maturity: "CURRENT" },
          { id: "diff.intent_scope", outcome: "fail", maturity: "IN_DEVELOPMENT" },
          {
            id: "gate.commit_barrier",
            outcome: "fail",
            maturity: "IN_DEVELOPMENT",
          },
        ],
        kar: {
          known: "Yes",
          knownDetail: "Validator failure observed",
          authorized: "Yes",
          authorizedDetail: "Grant still held for staged work",
          reversible: "Yes",
          reversibleDetail: "S₀ restore pending decision",
        },
      },
      {
        id: "r4",
        sequence: 4,
        stage: "decide",
        type: "txn.decide.ABORT",
        log: "txn.decide(ABORT) · rollback(snapshot S₀)",
        detail:
          "For this isolated fixture, Abort restores snapshot-backed guest state before any committed effect. External effects require explicit compensation semantics and are not proven absent.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: [
          "snapshot",
          "capabilities",
          "failure",
          "rollback",
          "subject",
        ],
        trust: "Enforced",
        branch: "abort",
        rollbackOccurred: true,
        state: {
          baseline: "S₀ captured · guest snapshot",
          working: "restored from S₀",
          result: "restored to S₀ · no committed effect in this fixture",
          resultTone: "abort",
        },
        kar: {
          known: "Yes",
          knownDetail: "Abort + restore observed",
          authorized: "Yes",
          authorizedDetail: "Prior grant; effect aborted",
          reversible: "Yes",
          reversibleDetail:
            "Guest restored via S₀ · external-effect absence Not Established",
        },
      },
      {
        id: "r5",
        sequence: 5,
        stage: "emit",
        type: "proof_capsule.emit",
        log: "proof_capsule.emit(failure+rollback evidence)",
        detail:
          "Failure and rollback fields are first-class. Capsule does not prove absence of external side effects.",
        maturity: "CURRENT",
        evidenceFieldsUnlocked: [
          "subject",
          "capabilities",
          "snapshot",
          "failure",
          "rollback",
          "limitations",
          "signature",
        ],
        trust: "Observed",
        branch: "abort",
        rollbackOccurred: true,
        kar: {
          known: "Yes",
          knownDetail: "Rollback capsule emitted",
          authorized: "Yes",
          authorizedDetail: "Historical grant recorded",
          reversible: "Yes",
          reversibleDetail:
            "rollback.occurred=true (guest) · compensation ≠ rollback",
        },
      },
    ],
  },
};

export function projectObservatory(
  scenarioId: ObservatoryScenarioId,
  throughIndex: number,
) {
  const scenario = OBSERVATORY_SCENARIOS[scenarioId];
  const events = scenario.events.slice(
    0,
    Math.min(throughIndex + 1, scenario.events.length),
  );
  const last = events[events.length - 1]!;

  let authority = {
    requested: [] as string[],
    granted: [] as string[],
    denied: [] as string[],
  };
  let state = {
    baseline: "no snapshot yet",
    working: "awaiting stage",
    result: "uncommitted",
    resultTone: "pending" as "pending" | "commit" | "abort" | "deny",
  };
  let validators: NonNullable<ObservatoryEvent["validators"]> = [
    { id: "policy.capability", outcome: "pending", maturity: "CURRENT" },
    { id: "health.snapshot", outcome: "pending", maturity: "CURRENT" },
    { id: "diff.intent_scope", outcome: "pending", maturity: "IN_DEVELOPMENT" },
    {
      id: "gate.commit_barrier",
      outcome: "pending",
      maturity: "IN_DEVELOPMENT",
    },
  ];
  const unlocked = new Set<string>();
  let rollbackOccurred = false;
  let branch: "commit" | "abort" | "deny" | null = null;

  for (const e of events) {
    if (e.authority) authority = { ...authority, ...e.authority };
    if (e.state) state = { ...state, ...e.state };
    if (e.validators) validators = e.validators;
    e.evidenceFieldsUnlocked.forEach((f) => unlocked.add(f));
    if (e.rollbackOccurred) rollbackOccurred = true;
    if (e.branch) branch = e.branch;
  }

  return {
    scenario,
    event: last,
    events,
    authority,
    state,
    validators,
    unlocked,
    rollbackOccurred,
    branch,
    trust: last.trust,
    kar: last.kar,
  };
}
