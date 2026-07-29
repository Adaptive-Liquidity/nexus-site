//#region node_modules/.nitro/vite/services/ssr/assets/change-gate-BngPCqUd.js
/**
* Target workflow phases with maturity from locked claims matrix.
* Hero schematic shows propose→stage→constrain→validate→decide(commit|abort)→emit.
* Detailed timeline includes approve + compensate.
*/
var CHANGE_GATE_PHASES = [
	{
		id: "propose",
		label: "Propose",
		shortLabel: "Propose",
		finishedCapability: "Agent or operator proposes a consequential change with declared intent and scope.",
		status: "TARGET",
		currentReality: "Conceptual entry point. Full worktree-style change proposals are Target Architecture for the Change Gate product surface.",
		heroVisible: true,
		heroOrder: 1
	},
	{
		id: "stage",
		label: "Isolate and stage",
		shortLabel: "Stage",
		finishedCapability: "Change is isolated in a staged environment with pre-execution snapshot of execution state.",
		status: "CURRENT",
		currentReality: "Nexus WASM snap-rollback provides native snapshot of linear memory/globals/tables before execution (Implemented Foundation).",
		heroVisible: true,
		heroOrder: 2
	},
	{
		id: "constrain",
		label: "Bind authority",
		shortLabel: "Constrain",
		finishedCapability: "Capability and policy constraints are bound before side effects; unauthorized paths are denied or narrowed.",
		status: "CURRENT",
		currentReality: "Ed25519 capability tokens with attenuation, denial on missing/expired/revoked, and capability-gated WASI are Implemented Foundations. Durable end-to-end authority across the full Change Gate path is In Integration (Stage 0).",
		heroVisible: true,
		heroOrder: 3
	},
	{
		id: "validate",
		label: "Run validators",
		shortLabel: "Validate",
		finishedCapability: "Deterministic validators and health checks run before commitment; failures force abort/rollback paths.",
		status: "IN_DEVELOPMENT",
		currentReality: "Health/failure classification and requires_rollback foundations exist. Full deterministic Change Gate validator barrier is In Integration under Stage 0.",
		heroVisible: true,
		heroOrder: 4
	},
	{
		id: "approve",
		label: "Require approval",
		shortLabel: "Approve",
		finishedCapability: "Where policy demands it, human or policy approval gates the commit decision.",
		status: "TARGET",
		currentReality: "Policy profile structures exist; productized approval workflow is Target Architecture.",
		heroVisible: false
	},
	{
		id: "decide",
		label: "Commit or abort",
		shortLabel: "Decide",
		finishedCapability: "Transaction commits only what survives validation and approval; abort restores staged isolation without irreversible effect.",
		status: "IN_DEVELOPMENT",
		currentReality: "Execution-level rollback on failure is an Implemented Foundation. Full worktree commit/abort transactional semantics for general agent changes are In Integration / Target (Stage 0 blocking).",
		heroVisible: true,
		heroOrder: 5,
		limitations: ["Full Transactional Change Gate commit barrier is not a finished public product surface."]
	},
	{
		id: "emit",
		label: "Emit evidence",
		shortLabel: "Emit",
		finishedCapability: "Portable signed Proof Capsule / receipt binds execution, authority context, and (when available) memory evidence modes.",
		status: "CURRENT",
		currentReality: "Proof Capsules with digests, capabilities, snapshot/failure/rollback, redaction, limitations[], optional signature, and memory modes are Implemented Foundations. Production trust anchors and external anchoring remain Target / In Integration.",
		heroVisible: true,
		heroOrder: 6
	},
	{
		id: "compensate",
		label: "Compensate",
		shortLabel: "Compensate",
		finishedCapability: "Where direct rollback cannot reverse external effects, compensation paths are recorded and driven by policy.",
		status: "TARGET",
		currentReality: "Compensation engine for irreversible external effects is Target Architecture.",
		heroVisible: false
	}
];
var HERO_BRANCHES = {
	commit: {
		label: "Commit",
		status: "IN_DEVELOPMENT"
	},
	abort: {
		label: "Abort",
		status: "CURRENT"
	}
};
function heroPhases() {
	return CHANGE_GATE_PHASES.filter((p) => p.heroVisible).sort((a, b) => (a.heroOrder ?? 0) - (b.heroOrder ?? 0));
}
//#endregion
export { HERO_BRANCHES as n, heroPhases as r, CHANGE_GATE_PHASES as t };
