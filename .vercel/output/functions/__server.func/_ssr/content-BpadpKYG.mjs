//#region node_modules/.nitro/vite/services/ssr/assets/content-BpadpKYG.js
var claims_registry_default = {
	version: "1.0.0",
	asOf: "2026-07-28",
	product: "Nexus-IQ",
	stage0: {
		"status": "IN_DEVELOPMENT",
		"blocking": true,
		"summary": "Stage 0 evidence integrity is blocking for end-to-end transactional guarantees and full memory-state binding."
	},
	statusLegend: {
		"CURRENT": "Implemented Foundation — exists and is evidence-backed; may not complete full product workflow",
		"IN_DEVELOPMENT": "In Integration — actively being connected into the end-to-end product",
		"TARGET": "Target Architecture — defined destination capability not yet implemented",
		"EXPERIMENTAL": "Experimental — research or evaluation surface without production commitment",
		"LIMITATION": "Known Limitation — restricts the associated guarantee"
	},
	capabilities: [
		{
			"id": "isolation-snap-rollback",
			"name": "Execution isolation & snap-rollback",
			"status": "CURRENT",
			"summary": "WASM sandbox with microsecond-class init, native snapshot of linear memory/globals/tables, sub-ms to low-tens-ms rollback for small-to-medium state, capability-gated WASI.",
			"evidence": [{
				"type": "benchmark_dashboard",
				"label": "Live Nexus benchmarks",
				"url": "https://adaptiveliquidity.github.io/Nexus/"
			}, {
				"type": "source",
				"label": "Nexus hypervisor / snapshot modules",
				"url": "https://github.com/adaptiveliquidity/Nexus"
			}],
			"limitations": [
				"Large-state snapshots scale with size/compressibility",
				"Full end-to-end cold-start higher than pure sandbox init",
				"Governs WASM guest↔host boundary; does not intercept LLM tool choice today"
			],
			"target": "Broader agent tool execution coverage beyond pure WASM/WASI boundary"
		},
		{
			"id": "proof-capsules",
			"name": "Proof Capsules / ExecutionReceipt",
			"status": "CURRENT",
			"summary": "Produced on execution: digests, capability evidence, snapshot, failure/rollback, redaction, limitations[] (always non-empty), optional Ed25519 signature, memory modes when feature-enabled. Portable signed evidence of what the runtime observed and enforced.",
			"evidence": [{
				"type": "schema",
				"label": "src/proof/schema.rs",
				"url": "https://github.com/adaptiveliquidity/Nexus/blob/main/src/proof/schema.rs"
			}, {
				"type": "fixture",
				"label": "Structure-identical sample capsules",
				"path": "src/content/capsules/"
			}],
			"limitations": [
				"runtime_attestation_only",
				"does_not_prove_correct_execution",
				"does_not_prove_absence_of_external_side_effects",
				"does_not_guarantee_full_deterministic_replay",
				"does_not_include_raw_snapshot_memory",
				"trusts_nexus_runtime_and_host_boundary"
			],
			"inDevelopment": [
				"Stronger binding",
				"External anchoring",
				"Production key management"
			],
			"target": "Portable evidence fully binding action + authority + memory context under Change Gate"
		},
		{
			"id": "proof-capsule-explorer-ui",
			"name": "Public Proof Capsule Explorer (web UI)",
			"status": "CURRENT",
			"summary": "Browser Explorer ships for fixture inspection: dual scenarios, field explainers, mandatory limitations[], structural checks, downloadable structure-identical capsules. Schema and artifacts remain Implemented Foundations; production cryptographic verification and durable trust anchors stay Target / In Integration.",
			"evidence": [{
				"type": "product_ui",
				"label": "Proof Capsule Explorer",
				"url": "/evidence/proof-capsules"
			}, {
				"type": "fixture",
				"label": "Structure-identical sample capsules",
				"path": "src/content/capsules/"
			}],
			"limitations": [
				"Educational inspection of fixtures — not live runtime stream",
				"Structural checks are non-cryptographic",
				"Demo signatures are not production trust anchors"
			]
		},
		{
			"id": "capability-authority",
			"name": "Capability authority",
			"status": "CURRENT",
			"summary": "Ed25519-signed tokens, attenuation chains (narrow only), denial on missing/expired/revoked, MemoryRecall gating, rate limits, policy profiles.",
			"evidence": [{
				"type": "source",
				"label": "Nexus capability module",
				"url": "https://github.com/adaptiveliquidity/Nexus"
			}],
			"limitations": ["Memory remains advisory input; Nexus is sole execution authority today"],
			"inDevelopment": ["Durable end-to-end authority chain across full Nexus-IQ path and Change Gate (Stage 0)"],
			"target": "Full durable capability authority enforced at every transactional stage"
		},
		{
			"id": "aeon-memory-binding",
			"name": "AEON-IQ memory plane & evidence binding",
			"status": "IN_DEVELOPMENT",
			"summary": "Transparent proxy, persistent memory, retrieval logs, schema-contract verifier (PR #21), Ed25519 countersign foundations, HMAC digests when keys present, modes recorded in capsules. Full production RecallEnvelope path and live verification under Stage 0.",
			"evidence": [{
				"type": "source",
				"label": "AEON-IQ repository",
				"url": "https://github.com/adaptiveliquidity/AEON-IQ"
			}],
			"currentFoundations": [
				"Proxy + persistent memory",
				"Schema-contract verifier",
				"Attestation modes: Attested, AttestedWithRecall, Advisory, Degraded, Absent"
			],
			"limitations": ["Incomplete binding yields Advisory/Degraded/Absent modes", "Residual risks on timeline completeness, key management, clock skew"],
			"target": "Cryptographically bound, verifiable memory context in every receipt under transactional guarantees"
		},
		{
			"id": "transactional-change-gate",
			"name": "Transactional Change Gate",
			"status": "IN_DEVELOPMENT",
			"summary": "First product: stage → validate → approve → commit/abort + compensation for consequential agent changes. Foundations exist; full public product surface is under construction. Stage 0 evidence integrity is blocking.",
			"evidence": [{
				"type": "prd",
				"label": "WEB_APP_PRD honest positioning",
				"url": "https://github.com/adaptiveliquidity/Nexus-IQ/blob/main/WEB_APP_PRD.md"
			}],
			"currentFoundations": [
				"Isolation",
				"Snap-rollback for recovery",
				"Proof Capsules",
				"Capability structures",
				"Health/failure classification"
			],
			"limitations": [
				"Not a finished public product surface",
				"Must never be presented as currently deployable end-to-end",
				"Nexus does not yet sit between LLM and tool choices"
			],
			"target": "Complete transactional semantics: stage, constrain, validate, commit only what survives, emit binding evidence, rollback/compensate on failure"
		},
		{
			"id": "production-signing-anchors",
			"name": "Production-grade signing identity & external anchors",
			"status": "TARGET",
			"summary": "Durable trust anchors and external anchoring for Proof Capsules beyond opt-in runtime signing.",
			"evidence": [],
			"limitations": ["Current capsules may use opt-in Ed25519; production trust model incomplete"]
		},
		{
			"id": "wasm-boundary-scope",
			"name": "Execution governance scope",
			"status": "LIMITATION",
			"summary": "Nexus governs the sandboxed WASM guest↔host boundary (WASI host-calls). It does not currently intercept model tool decisions or route providers.",
			"evidence": [{
				"type": "prd",
				"label": "WEB_APP_PRD § Honest positioning",
				"url": "https://github.com/adaptiveliquidity/Nexus-IQ/blob/main/WEB_APP_PRD.md"
			}],
			"limitations": ["Full agent/MCP governance wrapper is destination architecture", "Do not demo 'block the model tool call' until that layer ships"]
		}
	],
	marketingConstraints: [
		"No first/only claims",
		"No unverified performance claims",
		"No production-grade pre-audit language",
		"Honest limitations always visible",
		"Evidence-backed claims only"
	],
	homepageOutcomesMaturityHint: {
		"controlled-change": {
			"implemented_foundation": 2,
			"in_integration": 4,
			"target_architecture": 2
		},
		"inspectable": {
			"implemented_foundation": 3,
			"in_integration": 1,
			"target_architecture": 1
		},
		"recoverable": {
			"implemented_foundation": 2,
			"in_integration": 1,
			"target_architecture": 1
		},
		"governed-memory": {
			"implemented_foundation": 1,
			"in_integration": 2,
			"target_architecture": 1
		},
		"institutional-eval": {
			"implemented_foundation": 1,
			"in_integration": 2,
			"target_architecture": 1
		}
	}
};
var success_capsule_default = {
	version: "1",
	capsule_id: "a1b2c3d4-e5f6-4789-a012-3456789abcde",
	subject: {
		"run_id": "b2c3d4e5-f6a7-4890-b123-456789abcdef",
		"tool_name": "repo_patch_apply",
		"started_at": "2026-07-28T18:00:00.000Z",
		"finished_at": "2026-07-28T18:00:00.142Z",
		"duration_ms": 142
	},
	tool: {
		"module_digest": {
			"algorithm": "sha256",
			"value": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
			"public_recomputable": true
		},
		"module_name": "repo_patch_apply",
		"entrypoint": "_start"
	},
	input: {
		"digest": {
			"algorithm": "sha256",
			"value": "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae",
			"public_recomputable": true
		},
		"media_type": "application/json",
		"raw_included": false
	},
	policy: {
		"profile_digest": null,
		"profile_name": "demo-repo-write",
		"mode": "ProfileEnforcedMcpCapabilitiesOnly"
	},
	capabilities: {
		"required": ["WriteFile:/workspace/src"],
		"granted": ["WriteFile:/workspace/src"],
		"mismatch": null
	},
	snapshot: {
		"snapshot_id": "c3d4e5f6-a7b8-4901-c234-56789abcdef0",
		"snapshot_kind": "LatestRuntime",
		"memory_digest": {
			"algorithm": "sha256",
			"value": "fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9",
			"public_recomputable": true
		},
		"original_size": 1048576,
		"compressed_size": 98304
	},
	failure: null,
	rollback: {
		"occurred": false,
		"from_snapshot_id": null,
		"reason": null
	},
	branches: null,
	redaction: {
		"hashed_fields": ["input.digest"],
		"truncated_fields": [],
		"removed_fields": [],
		"hmac_fields": ["input.digest"]
	},
	limitations: [
		"runtime_attestation_only",
		"does_not_prove_correct_execution",
		"does_not_prove_absence_of_external_side_effects",
		"does_not_prove_external_side_effects_absent",
		"does_not_include_raw_snapshot_memory",
		"does_not_guarantee_full_deterministic_replay",
		"does_not_restore_stack_or_registers",
		"execution_state_is_memory_globals_and_table_metadata",
		"blocked_sync_wasi_io_cancellation_is_cooperative",
		"trusts_nexus_runtime_and_host_boundary",
		"proof_trusts_nexus_runtime_and_host_boundary"
	],
	memory_mode: "AttestedWithRecall",
	memory_evidence: {
		"mode": "AttestedWithRecall",
		"hit_count": 2,
		"evidence_digest": {
			"algorithm": "sha256",
			"value": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
			"public_recomputable": false
		},
		"note": "Structure-identical demo field; production MemoryEvidenceRef shape may add HMAC and countersign fields when keys are provisioned."
	},
	signature: {
		"signer": "nexus-runtime-demo",
		"key_id": "demo-ed25519-2026-06",
		"signature": "DEMO_SIGNATURE_NOT_A_PRODUCTION_TRUST_ANCHOR_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
		"signed_payload_digest": {
			"algorithm": "sha256",
			"value": "aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899",
			"public_recomputable": true
		}
	},
	_meta: {
		"fixture": true,
		"scenario": "successful_execution_with_snapshot",
		"honesty": "Structure-identical to ProofCapsule schema for educational inspection. Signature is a demo placeholder — not a production trust anchor. Limitations list matches DEFAULT_PROOF_CAPSULE_LIMITATIONS.",
		"asOf": "2026-07-28"
	}
};
var failure_rollback_capsule_default = {
	version: "1",
	capsule_id: "d4e5f6a7-b8c9-4012-d345-6789abcdef01",
	subject: {
		"run_id": "e5f6a7b8-c9d0-4123-e456-789abcdef012",
		"tool_name": "network_fetch_tool",
		"started_at": "2026-07-28T18:05:00.000Z",
		"finished_at": "2026-07-28T18:05:00.089Z",
		"duration_ms": 89
	},
	tool: {
		"module_digest": {
			"algorithm": "sha256",
			"value": "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b",
			"public_recomputable": true
		},
		"module_name": "network_fetch_tool",
		"entrypoint": "_start"
	},
	input: {
		"digest": {
			"algorithm": "sha256",
			"value": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35",
			"public_recomputable": true
		},
		"media_type": "application/json",
		"raw_included": false
	},
	policy: {
		"profile_digest": null,
		"profile_name": "demo-no-network",
		"mode": "ProfileEnforcedMcpCapabilitiesOnly"
	},
	capabilities: {
		"required": ["NetworkOutbound:https"],
		"granted": ["ReadFile:/data"],
		"mismatch": ["NetworkOutbound:https"]
	},
	snapshot: {
		"snapshot_id": "f6a7b8c9-d0e1-4234-f567-89abcdef0123",
		"snapshot_kind": "LatestRuntime",
		"memory_digest": {
			"algorithm": "sha256",
			"value": "4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce",
			"public_recomputable": true
		},
		"original_size": 524288,
		"compressed_size": 42e3
	},
	failure: {
		"failure_category": "CapabilityDenied",
		"requires_rollback": true,
		"deterministic": true,
		"error_summary": "Required capability NetworkOutbound:https not granted; execution halted before side effects."
	},
	rollback: {
		"occurred": true,
		"from_snapshot_id": "f6a7b8c9-d0e1-4234-f567-89abcdef0123",
		"reason": "Capability denial with requires_rollback=true; restored pre-execution snapshot."
	},
	branches: null,
	redaction: {
		"hashed_fields": ["input.digest"],
		"truncated_fields": ["failure.error_summary"],
		"removed_fields": [],
		"hmac_fields": ["input.digest"]
	},
	limitations: [
		"runtime_attestation_only",
		"does_not_prove_correct_execution",
		"does_not_prove_absence_of_external_side_effects",
		"does_not_prove_external_side_effects_absent",
		"does_not_include_raw_snapshot_memory",
		"does_not_guarantee_full_deterministic_replay",
		"does_not_restore_stack_or_registers",
		"execution_state_is_memory_globals_and_table_metadata",
		"blocked_sync_wasi_io_cancellation_is_cooperative",
		"trusts_nexus_runtime_and_host_boundary",
		"proof_trusts_nexus_runtime_and_host_boundary"
	],
	memory_mode: "Absent",
	memory_evidence: null,
	signature: {
		"signer": "nexus-runtime-demo",
		"key_id": "demo-ed25519-2026-06",
		"signature": "DEMO_SIGNATURE_NOT_A_PRODUCTION_TRUST_ANCHOR_BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
		"signed_payload_digest": {
			"algorithm": "sha256",
			"value": "ccddeeff00112233445566778899aabbccddeeff00112233445566778899aabb",
			"public_recomputable": true
		}
	},
	_meta: {
		"fixture": true,
		"scenario": "capability_denied_with_rollback",
		"honesty": "Structure-identical demo of failure + rollback evidence. Signature is a demo placeholder. Use to teach abort path and limitations[] visibility.",
		"asOf": "2026-07-28"
	}
};
var claimsRegistry = claims_registry_default;
var sampleCapsules = {
	success: success_capsule_default,
	failureRollback: failure_rollback_capsule_default
};
//#endregion
export { sampleCapsules as n, claimsRegistry as t };
