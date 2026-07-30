import { t as claimsRegistry } from "./content-BpadpKYG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evaluator-search-Buqd9Qff.js
var claim_relations_default = {
	schemaVersion: "1.0",
	asOf: "2026-07-28",
	registryVersion: "1.0.0",
	stage0Id: "stage0-evidence-integrity",
	nodes: [
		{
			"id": "stage0-evidence-integrity",
			"kind": "blocking_gate",
			"registryId": null,
			"title": "Stage 0 evidence integrity",
			"summary": "Blocking for end-to-end transactional guarantees and full memory-state binding.",
			"status": "IN_DEVELOPMENT",
			"column": "boundary",
			"order": 0
		},
		{
			"id": "isolation-snap-rollback",
			"kind": "capability_foundation",
			"registryId": "isolation-snap-rollback",
			"title": "Execution isolation & snap-rollback",
			"summary": "WASM sandbox, native snapshot, capability-gated WASI.",
			"status": "CURRENT",
			"column": "foundation",
			"order": 1
		},
		{
			"id": "capability-authority",
			"kind": "capability_foundation",
			"registryId": "capability-authority",
			"title": "Capability authority",
			"summary": "Ed25519 tokens, attenuation, denial on missing/expired/revoked.",
			"status": "CURRENT",
			"column": "foundation",
			"order": 2
		},
		{
			"id": "proof-capsules",
			"kind": "capability_foundation",
			"registryId": "proof-capsules",
			"title": "Proof Capsules / ExecutionReceipt",
			"summary": "Runtime-observed evidence with mandatory limitations[].",
			"status": "CURRENT",
			"column": "foundation",
			"order": 3
		},
		{
			"id": "proof-capsule-explorer-ui",
			"kind": "capability_foundation",
			"registryId": "proof-capsule-explorer-ui",
			"title": "Public Proof Capsule Explorer",
			"summary": "Browser fixture inspection and structural checks.",
			"status": "CURRENT",
			"column": "foundation",
			"order": 4
		},
		{
			"id": "aeon-memory-binding",
			"kind": "public_claim",
			"registryId": "aeon-memory-binding",
			"title": "AEON-IQ memory plane & evidence binding",
			"summary": "Governed memory; full binding under Stage 0.",
			"status": "IN_DEVELOPMENT",
			"column": "claim",
			"order": 5
		},
		{
			"id": "transactional-change-gate",
			"kind": "public_claim",
			"registryId": "transactional-change-gate",
			"title": "Transactional Change Gate",
			"summary": "Stage → validate → commit/abort composition product.",
			"status": "IN_DEVELOPMENT",
			"column": "claim",
			"order": 6
		},
		{
			"id": "production-signing-anchors",
			"kind": "target_dependency",
			"registryId": "production-signing-anchors",
			"title": "Production-grade signing & external anchors",
			"summary": "Durable trust anchors beyond opt-in runtime signing.",
			"status": "TARGET",
			"column": "boundary",
			"order": 7
		},
		{
			"id": "wasm-boundary-scope",
			"kind": "scope_limitation",
			"registryId": "wasm-boundary-scope",
			"title": "WASM guest↔host governance scope",
			"summary": "Does not intercept model tool choice today.",
			"status": "LIMITATION",
			"column": "boundary",
			"order": 8
		},
		{
			"id": "host-residual-trust",
			"kind": "negative_guarantee",
			"registryId": null,
			"title": "Host OS · operators · key custody",
			"summary": "Residual trust surface disclosed by capsules.",
			"status": "LIMITATION",
			"column": "boundary",
			"order": 9
		},
		{
			"id": "ev-nexus-runtime",
			"kind": "evidence_source",
			"registryId": null,
			"title": "Nexus runtime source & benchmarks",
			"summary": "Snapshot, rollback, capability modules and CI measurements.",
			"status": "CURRENT",
			"column": "evidence",
			"order": 10
		},
		{
			"id": "ev-proof-schema",
			"kind": "evidence_source",
			"registryId": null,
			"title": "Proof Capsule schema & fixtures",
			"summary": "schema.rs + structure-identical sample capsules.",
			"status": "CURRENT",
			"column": "evidence",
			"order": 11
		},
		{
			"id": "ev-aeon-source",
			"kind": "evidence_source",
			"registryId": null,
			"title": "AEON-IQ source",
			"summary": "Memory plane foundations and attestation modes.",
			"status": "CURRENT",
			"column": "evidence",
			"order": 12
		}
	],
	relations: [
		{
			"id": "rel-iso-supports-cg",
			"from": "isolation-snap-rollback",
			"to": "transactional-change-gate",
			"kind": "supports",
			"maturity": "CURRENT",
			"rationale": "Isolation and snap-rollback are required substrate for staged transactional recovery.",
			"sourceRefs": ["claims-registry:isolation-snap-rollback"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-cap-supports-cg",
			"from": "capability-authority",
			"to": "transactional-change-gate",
			"kind": "supports",
			"maturity": "CURRENT",
			"rationale": "Authority binding is a foundation for constrained change.",
			"sourceRefs": ["claims-registry:capability-authority"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-pc-supports-cg",
			"from": "proof-capsules",
			"to": "transactional-change-gate",
			"kind": "supports",
			"maturity": "CURRENT",
			"rationale": "Runtime evidence emission is required for inspectable transactions.",
			"sourceRefs": ["claims-registry:proof-capsules"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-pc-supports-explorer",
			"from": "proof-capsules",
			"to": "proof-capsule-explorer-ui",
			"kind": "supports",
			"maturity": "CURRENT",
			"rationale": "Explorer inspects structure-identical capsules from the same schema family.",
			"sourceRefs": ["claims-registry:proof-capsule-explorer-ui"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-aeon-binds-cg",
			"from": "aeon-memory-binding",
			"to": "transactional-change-gate",
			"kind": "binds_context",
			"maturity": "IN_DEVELOPMENT",
			"rationale": "Memory may inform reasoning context; it cannot silently widen authority.",
			"sourceRefs": ["claims-registry:aeon-memory-binding"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-cap-supports-aeon",
			"from": "capability-authority",
			"to": "aeon-memory-binding",
			"kind": "supports",
			"maturity": "CURRENT",
			"rationale": "MemoryRecall gating and attenuation structures exist as foundations.",
			"sourceRefs": ["claims-registry:capability-authority"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-pc-supports-aeon",
			"from": "proof-capsules",
			"to": "aeon-memory-binding",
			"kind": "supports",
			"maturity": "CURRENT",
			"rationale": "Capsules record memory attestation modes when feature-enabled.",
			"sourceRefs": ["claims-registry:proof-capsules"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-stage0-blocks-cg",
			"from": "stage0-evidence-integrity",
			"to": "transactional-change-gate",
			"kind": "blocks",
			"maturity": "IN_DEVELOPMENT",
			"rationale": "Stage 0 evidence integrity blocks end-to-end transactional guarantees.",
			"sourceRefs": ["claims-registry:stage0"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-stage0-blocks-aeon",
			"from": "stage0-evidence-integrity",
			"to": "aeon-memory-binding",
			"kind": "blocks",
			"maturity": "IN_DEVELOPMENT",
			"rationale": "Full memory-state binding remains Stage 0 work.",
			"sourceRefs": ["claims-registry:stage0"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-wasm-bounds-cg",
			"from": "wasm-boundary-scope",
			"to": "transactional-change-gate",
			"kind": "bounds",
			"maturity": "LIMITATION",
			"rationale": "Current enforcement is WASM guest↔host; not full model tool-choice interception.",
			"sourceRefs": ["claims-registry:wasm-boundary-scope"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-wasm-bounds-iso",
			"from": "wasm-boundary-scope",
			"to": "isolation-snap-rollback",
			"kind": "bounds",
			"maturity": "LIMITATION",
			"rationale": "Isolation governs the sandboxed WASM boundary.",
			"sourceRefs": ["claims-registry:wasm-boundary-scope"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-signing-strengthens-pc",
			"from": "production-signing-anchors",
			"to": "proof-capsules",
			"kind": "strengthens",
			"maturity": "TARGET",
			"rationale": "Durable trust anchors would strengthen capsule verification beyond demo/opt-in signing.",
			"sourceRefs": ["claims-registry:production-signing-anchors"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-signing-extends-cg",
			"from": "production-signing-anchors",
			"to": "transactional-change-gate",
			"kind": "extends_to",
			"maturity": "TARGET",
			"rationale": "Target extension for durable end-to-end evidence under Change Gate.",
			"sourceRefs": ["claims-registry:production-signing-anchors"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-host-trusts-pc",
			"from": "host-residual-trust",
			"to": "proof-capsules",
			"kind": "trusts",
			"maturity": "LIMITATION",
			"rationale": "Capsules explicitly trust Nexus runtime and host boundary.",
			"sourceRefs": ["claims-registry:proof-capsules"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-ev-nexus-evidences-iso",
			"from": "ev-nexus-runtime",
			"to": "isolation-snap-rollback",
			"kind": "evidences",
			"maturity": "CURRENT",
			"rationale": "Nexus source and CI benchmarks back isolation/rollback claims.",
			"sourceRefs": ["claims-registry:isolation-snap-rollback"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-ev-schema-evidences-pc",
			"from": "ev-proof-schema",
			"to": "proof-capsules",
			"kind": "evidences",
			"maturity": "CURRENT",
			"rationale": "Schema and fixtures back Proof Capsule field model.",
			"sourceRefs": ["claims-registry:proof-capsules"],
			"lastVerified": "2026-07-28"
		},
		{
			"id": "rel-ev-aeon-evidences-mem",
			"from": "ev-aeon-source",
			"to": "aeon-memory-binding",
			"kind": "evidences",
			"maturity": "CURRENT",
			"rationale": "AEON-IQ repository backs memory plane foundations.",
			"sourceRefs": ["claims-registry:aeon-memory-binding"],
			"lastVerified": "2026-07-28"
		}
	]
};
var INTEGRATION_SCENARIOS = [
	{
		id: "readonly-inspect",
		title: "Read-only inspection (current foundation)",
		mode: "CURRENT_FOUNDATION",
		representation: "fixture",
		decision: "COMMIT",
		summary: "Capability-limited WASM tool reads an allowed path and emits a runtime receipt. Governance is at the WASM guest↔host boundary.",
		capabilities: ["fs.read:/workspace", "clock.monotonic"],
		limitations: [
			"LOCAL FIXTURE — no live runtime claim",
			"Does not intercept model tool choice",
			"Receipt trusts Nexus runtime and host boundary"
		],
		steps: [
			{
				phase: "intent",
				from: "Agent",
				to: "Host",
				action: "Declare inspection intent",
				maturity: "CURRENT",
				trust: "Observed"
			},
			{
				phase: "stage",
				from: "Host",
				to: "Nexus",
				action: "Create sandbox + snapshot S₀",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "constrain",
				from: "Nexus",
				to: "Authority",
				action: "Bind attenuated capability token",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "validate",
				from: "Nexus",
				to: "Nexus",
				action: "Execute authorized host calls only",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "decide",
				from: "Nexus",
				to: "Host",
				action: "Return observed result",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "emit",
				from: "Nexus",
				to: "Evidence",
				action: "Emit Proof Capsule fields + limitations[]",
				maturity: "CURRENT",
				trust: "Observed"
			}
		],
		receipt: {
			failure: null,
			rollback: "none",
			attestation: "runtime_observed",
			signature: "optional · demo key if present",
			limitations: [
				"runtime_attestation_only",
				"does_not_prove_correct_execution",
				"trusts_nexus_runtime_and_host_boundary"
			]
		}
	},
	{
		id: "capability-denied",
		title: "Capability denied (pre-effect)",
		mode: "CURRENT_FOUNDATION",
		representation: "fixture",
		decision: "DENY",
		summary: "Token omits network authority. Host call is denied before authorized effect. Rollback is not asserted.",
		capabilities: ["fs.read:/workspace"],
		limitations: [
			"LOCAL FIXTURE — no live runtime claim",
			"Governance applies at WASM guest↔host boundary",
			"Model may still choose to request a disallowed action"
		],
		steps: [
			{
				phase: "intent",
				from: "Agent",
				to: "Host",
				action: "Request tool with network intent",
				maturity: "CURRENT",
				trust: "Observed"
			},
			{
				phase: "stage",
				from: "Host",
				to: "Nexus",
				action: "Stage sandbox (no mutation yet)",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "constrain",
				from: "Authority",
				to: "Nexus",
				action: "Deny: missing NetworkOutbound",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "validate",
				from: "Nexus",
				to: "Nexus",
				action: "Skip mutation validators (pre-effect deny)",
				maturity: "CURRENT",
				trust: "Observed"
			},
			{
				phase: "decide",
				from: "Nexus",
				to: "Host",
				action: "Abort/deny · discard staged isolation",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "emit",
				from: "Nexus",
				to: "Evidence",
				action: "Record denial + limitations[]",
				maturity: "CURRENT",
				trust: "Observed"
			}
		],
		receipt: {
			failure: "capability_denied",
			rollback: "not asserted (no authorized mutation)",
			attestation: "runtime_observed",
			signature: "optional · demo key if present",
			limitations: [
				"runtime_attestation_only",
				"does_not_prove_absence_of_external_side_effects",
				"trusts_nexus_runtime_and_host_boundary"
			]
		}
	},
	{
		id: "validator-abort",
		title: "Validator abort (post-stage rollback)",
		mode: "IN_INTEGRATION",
		representation: "fixture",
		decision: "ABORT",
		summary: "Authority granted; staged mutation applied; validator fails; snapshot-backed guest state restored. Full Change Gate remains In Integration.",
		capabilities: ["workspace.write:staged", "validator.execute"],
		limitations: [
			"LOCAL FIXTURE — no live runtime claim",
			"Full public Change Gate surface is not complete",
			"External effects not proven absent"
		],
		steps: [
			{
				phase: "intent",
				from: "Agent",
				to: "Nexus-IQ",
				action: "Submit intent + declared scope",
				maturity: "IN_DEVELOPMENT",
				trust: "Observed"
			},
			{
				phase: "stage",
				from: "Nexus-IQ",
				to: "Nexus",
				action: "Create isolated working state + S₀",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "constrain",
				from: "Authority",
				to: "Nexus",
				action: "Apply constrained staged write",
				maturity: "IN_DEVELOPMENT",
				trust: "Enforced"
			},
			{
				phase: "validate",
				from: "Nexus-IQ",
				to: "Validator",
				action: "Deterministic validators · FAIL",
				maturity: "IN_DEVELOPMENT",
				trust: "Enforced"
			},
			{
				phase: "decide",
				from: "Nexus",
				to: "Nexus",
				action: "Abort · restore S₀ guest state",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "emit",
				from: "Nexus",
				to: "Evidence",
				action: "Emit failure + rollback evidence",
				maturity: "CURRENT",
				trust: "Observed"
			}
		],
		receipt: {
			failure: "validator_failed",
			rollback: "occurred · restored S₀",
			attestation: "runtime_observed",
			signature: "optional · demo key if present",
			limitations: [
				"does_not_prove_absence_of_external_side_effects",
				"full_change_gate_not_finished_product",
				"trusts_nexus_runtime_and_host_boundary"
			]
		}
	},
	{
		id: "degraded-memory",
		title: "Degraded memory context",
		mode: "IN_INTEGRATION",
		representation: "fixture",
		decision: "COMMIT",
		summary: "Memory mode degrades to Advisory/Degraded. Memory informs reasoning only; it cannot widen execution authority.",
		capabilities: ["fs.read:/workspace", "memory.recall:advisory"],
		limitations: [
			"LOCAL FIXTURE — no live runtime claim",
			"Incomplete memory binding → Advisory/Degraded/Absent",
			"Memory cannot silently increase authority"
		],
		steps: [
			{
				phase: "intent",
				from: "Agent",
				to: "Host",
				action: "Request with memory context",
				maturity: "CURRENT",
				trust: "Observed"
			},
			{
				phase: "stage",
				from: "Host",
				to: "Nexus",
				action: "Stage execution",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "constrain",
				from: "Authority",
				to: "Nexus",
				action: "Bind execution capabilities (unchanged by memory)",
				maturity: "CURRENT",
				trust: "Enforced",
				note: "Memory path terminates before authority"
			},
			{
				phase: "validate",
				from: "AEON-IQ",
				to: "Nexus",
				action: "Supply Advisory/Degraded context only",
				maturity: "IN_DEVELOPMENT",
				trust: "Observed",
				note: "Does not cross authority lane"
			},
			{
				phase: "decide",
				from: "Nexus",
				to: "Host",
				action: "Execute under granted capabilities",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "emit",
				from: "Nexus",
				to: "Evidence",
				action: "Record memory mode + limitations[]",
				maturity: "CURRENT",
				trust: "Observed"
			}
		],
		receipt: {
			failure: null,
			rollback: "none",
			attestation: "Advisory/Degraded",
			signature: "optional · demo key if present",
			limitations: [
				"memory_mode_advisory_or_degraded",
				"memory_cannot_widen_authority",
				"trusts_nexus_runtime_and_host_boundary"
			]
		}
	},
	{
		id: "change-gate-destination",
		title: "Composed Change Gate (destination)",
		mode: "TARGET_ARCHITECTURE",
		representation: "fixture",
		decision: "COMMIT",
		summary: "Explicit destination architecture for stage → validate → approve? → commit/abort. Not a current deployable product surface.",
		capabilities: [
			"repo.read",
			"workspace.write:staged",
			"validator.execute",
			"commit.request"
		],
		limitations: [
			"TARGET ARCHITECTURE — not current",
			"Stage 0 evidence integrity still blocking",
			"Do not present as deployable end-to-end"
		],
		steps: [
			{
				phase: "intent",
				from: "Agent",
				to: "Nexus-IQ",
				action: "Submit intent + scope",
				maturity: "TARGET",
				trust: "Not Established"
			},
			{
				phase: "stage",
				from: "Nexus-IQ",
				to: "Nexus",
				action: "Isolate working state",
				maturity: "CURRENT",
				trust: "Enforced"
			},
			{
				phase: "constrain",
				from: "Authority",
				to: "Nexus-IQ",
				action: "Bind durable authority chain",
				maturity: "IN_DEVELOPMENT",
				trust: "Not Established"
			},
			{
				phase: "validate",
				from: "Nexus-IQ",
				to: "Validator",
				action: "Full validator barrier + optional approval",
				maturity: "IN_DEVELOPMENT",
				trust: "Not Established"
			},
			{
				phase: "decide",
				from: "Nexus-IQ",
				to: "Effect",
				action: "Commit or Abort (product composition)",
				maturity: "IN_DEVELOPMENT",
				trust: "Not Established"
			},
			{
				phase: "emit",
				from: "Nexus-IQ",
				to: "Evidence",
				action: "Binding receipt (action+authority+memory)",
				maturity: "TARGET",
				trust: "Not Established"
			}
		],
		receipt: {
			failure: null,
			rollback: "destination semantics",
			attestation: "target full binding",
			signature: "production anchors TARGET",
			limitations: [
				"not_a_finished_public_product_surface",
				"stage0_blocking",
				"must_not_present_as_currently_deployable"
			]
		}
	}
];
function getIntegrationScenario(id) {
	return INTEGRATION_SCENARIOS.find((s) => s.id === id) ?? INTEGRATION_SCENARIOS[0];
}
var BENCHMARK_FIXTURE_DISCLAIMER = "REPRESENTATIVE FIXTURE DATA — NOT A PUBLIC PERFORMANCE CLAIM. Normalized unitless samples for interaction design only.";
var BENCHMARK_METRICS = [
	{
		id: "sandbox",
		name: "Sandbox initialization",
		unit: "normalized latency",
		lowerBetter: true,
		category: "benchmarked-primitive",
		interpretationGuardrail: "Primitive sandbox init is not end-to-end agent latency. Never compare with integrated request paths.",
		baseline: [
			1.04,
			1.01,
			.99,
			1.03,
			.98,
			1,
			1.02,
			.97,
			1.01,
			1,
			1.04,
			.96
		],
		candidate: [
			.96,
			.94,
			.95,
			.97,
			.93,
			.95,
			.92,
			.96,
			.94,
			.95,
			.93,
			.97
		]
	},
	{
		id: "snapshot",
		name: "Snapshot creation",
		unit: "normalized latency",
		lowerBetter: true,
		category: "benchmarked-primitive",
		interpretationGuardrail: "State size and compressibility dominate snapshot cost. A single headline number must not be generalized.",
		baseline: [
			1.05,
			.98,
			1.02,
			1.08,
			.95,
			1,
			1.03,
			.97,
			1.06,
			.99,
			1.01,
			.96
		],
		candidate: [
			1,
			.97,
			.99,
			1.02,
			.96,
			.98,
			1.01,
			.95,
			.99,
			.97,
			1,
			.96
		]
	},
	{
		id: "rollback",
		name: "Rollback restoration",
		unit: "normalized latency",
		lowerBetter: true,
		category: "benchmarked-primitive",
		interpretationGuardrail: "Rollback cost scales with state size. Fixture only — not citable.",
		baseline: [
			1.02,
			1,
			.99,
			1.01,
			.98,
			1.04,
			.97,
			1.02,
			1,
			.96,
			1.03,
			.99
		],
		candidate: [
			.93,
			.94,
			.92,
			.95,
			.91,
			.96,
			.93,
			.92,
			.94,
			.9,
			.95,
			.93
		]
	},
	{
		id: "throughput",
		name: "Memory throughput",
		unit: "normalized throughput",
		lowerBetter: false,
		category: "benchmarked-primitive",
		interpretationGuardrail: "Throughput is a component measurement, not agent task success rate.",
		baseline: [
			.98,
			1.02,
			1,
			.97,
			1.01,
			.99,
			1.03,
			.96,
			1,
			1.01,
			.98,
			1.02
		],
		candidate: [
			1.05,
			1.07,
			1.04,
			1.06,
			1.08,
			1.03,
			1.05,
			1.09,
			1.06,
			1.04,
			1.07,
			1.05
		]
	}
];
function median(xs) {
	const s = [...xs].sort((a, b) => a - b);
	const m = Math.floor(s.length / 2);
	return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
function percentile(xs, p) {
	const s = [...xs].sort((a, b) => a - b);
	return s[Math.min(s.length - 1, Math.max(0, Math.floor(p / 100 * s.length)))];
}
/**
* Publication gate for a real artifact. Fixture mode always fails citability.
*/
function evaluateFixturePublicationGate() {
	return {
		citable: false,
		missingOrInvalid: [
			"artifactId (fixture mode)",
			"provenance.commitSha (verified CI)",
			"provenance.rawArtifactSha256",
			"provenance.workflowRunHref",
			"environment.runnerName (verified)",
			"real sample artifacts"
		]
	};
}
var claimRelationsData = claim_relations_default;
/** Target / pure destination nodes (hidden by default in current-only). */
function isTargetStatus(status) {
	return status === "TARGET";
}
function getNode(id) {
	return claimRelationsData.nodes.find((n) => n.id === id);
}
function relationsFor(nodeId) {
	return claimRelationsData.relations.filter((r) => r.from === nodeId || r.to === nodeId);
}
function registryCap(id) {
	return claimsRegistry.capabilities.find((c) => c.id === id);
}
var nodeIds = new Set(claimRelationsData.nodes.map((n) => n.id));
var capIds = new Set(claimsRegistry.capabilities.map((c) => c.id));
var scenarioIds = new Set(INTEGRATION_SCENARIOS.map((s) => s.id));
var metricIds = new Set(BENCHMARK_METRICS.map((m) => m.id));
function bool01(v) {
	return v === "1" || v === 1 || v === true || v === "true";
}
/** Loose parse — keep URL free of required search on every Link. */
function claimsSearchFromRaw(raw) {
	const claimRaw = typeof raw.claim === "string" ? raw.claim : void 0;
	const claim = claimRaw && nodeIds.has(claimRaw) ? claimRaw : void 0;
	const view = [
		"all",
		"support",
		"blockers",
		"boundaries"
	].includes(String(raw.view)) ? raw.view : void 0;
	const status = [
		"ALL",
		"CURRENT",
		"IN_DEVELOPMENT",
		"TARGET",
		"LIMITATION"
	].includes(String(raw.status)) ? raw.status : void 0;
	return {
		claim,
		view,
		targets: raw.targets === void 0 ? void 0 : bool01(raw.targets),
		q: typeof raw.q === "string" ? raw.q : void 0,
		status
	};
}
function resolveClaimsSearch(s) {
	return {
		claim: s.claim && nodeIds.has(s.claim) ? s.claim : "transactional-change-gate",
		view: s.view ?? "all",
		targets: s.targets ?? false,
		q: s.q ?? "",
		status: s.status ?? "ALL"
	};
}
function maturitySearchFromRaw(raw) {
	const capability = typeof raw.capability === "string" ? raw.capability : void 0;
	const view = [
		"current",
		"critical",
		"all",
		"trust"
	].includes(String(raw.view)) ? raw.view : void 0;
	return {
		capability: capability && (capIds.has(capability) || nodeIds.has(capability)) ? capability : void 0,
		view,
		targets: raw.targets === void 0 ? void 0 : bool01(raw.targets)
	};
}
function resolveMaturitySearch(s) {
	return {
		capability: s.capability ?? "transactional-change-gate",
		view: s.view ?? "current",
		targets: s.targets ?? false
	};
}
function benchmarksSearchFromRaw(raw) {
	return {
		benchmark: typeof raw.benchmark === "string" && metricIds.has(raw.benchmark) ? raw.benchmark : void 0,
		view: [
			"distribution",
			"scaling",
			"samples"
		].includes(String(raw.view)) ? raw.view : void 0,
		samples: raw.samples === void 0 ? void 0 : bool01(raw.samples)
	};
}
function resolveBenchmarksSearch(s) {
	return {
		benchmark: s.benchmark ?? "sandbox",
		view: s.view ?? "distribution",
		samples: s.samples ?? s.view === "samples"
	};
}
function developersSearchFromRaw(raw) {
	const scenario = typeof raw.scenario === "string" && scenarioIds.has(raw.scenario) ? raw.scenario : void 0;
	const n = Number(raw.step);
	return {
		scenario,
		step: Number.isFinite(n) && n >= 0 ? Math.floor(n) : void 0,
		architecture: raw.architecture === "current" || raw.architecture === "destination" ? raw.architecture : void 0
	};
}
function resolveDevelopersSearch(s) {
	return {
		scenario: s.scenario ?? "readonly-inspect",
		step: s.step ?? 0,
		architecture: s.architecture ?? "current"
	};
}
function homeSearchFromRaw(raw) {
	const obs = raw.obs === "commit" || raw.obs === "denial" || raw.obs === "rollback" ? raw.obs : void 0;
	const n = Number(raw.stage);
	return {
		obs,
		stage: Number.isFinite(n) && n >= 0 ? Math.min(5, Math.floor(n)) : void 0
	};
}
function resolveHomeSearch(s) {
	return {
		obs: s.obs ?? "commit",
		stage: s.stage ?? 0
	};
}
//#endregion
export { resolveMaturitySearch as S, relationsFor as _, claimRelationsData as a, resolveDevelopersSearch as b, evaluateFixturePublicationGate as c, homeSearchFromRaw as d, isTargetStatus as f, registryCap as g, percentile as h, benchmarksSearchFromRaw as i, getIntegrationScenario as l, median as m, BENCHMARK_METRICS as n, claimsSearchFromRaw as o, maturitySearchFromRaw as p, INTEGRATION_SCENARIOS as r, developersSearchFromRaw as s, BENCHMARK_FIXTURE_DISCLAIMER as t, getNode as u, resolveBenchmarksSearch as v, resolveHomeSearch as x, resolveClaimsSearch as y };
