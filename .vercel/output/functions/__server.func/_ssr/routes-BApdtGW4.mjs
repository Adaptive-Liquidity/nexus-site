import { r as __toESM } from "../_runtime.mjs";
import { a as HERO, c as OUTCOMES, d as STAGE_0_NOTE, f as WORKFLOWS, i as COMPOSITION, l as POSITIONING, n as BRAND, o as LAUNCH_THESIS, r as CAPSULE_HONESTY, t as BELIEF, u as PROBLEM } from "./site-copy-BRpXPyRy.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { n as sampleCapsules, t as claimsRegistry } from "./content-BpadpKYG.mjs";
import { x as resolveHomeSearch } from "./evaluator-search-Buqd9Qff.mjs";
import { a as toPublicStatus, i as countByPublicStatus, n as MaturityBadge, r as PUBLIC_STATUS_META } from "./maturity-badge-BLweOVLC.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
import { t as CHANGE_GATE_PHASES } from "./change-gate-BngPCqUd.mjs";
import { t as TRUST_CLASS_META } from "./trust-taxonomy-WCI1T06w.mjs";
import { n as CapsuleAnatomy } from "./capsule-anatomy-BxRWEJV_.mjs";
import { t as Reveal } from "./reveal-DF2H-Eyx.mjs";
import { _ as Building2, a as ShieldAlert, h as ChevronRight, i as Shield, l as GitCommitHorizontal, n as Terminal, o as Play, p as Download, r as SkipBack, s as Pause, u as FileSearch, v as ArrowRight, y as ArrowDownRight } from "../_libs/lucide-react.mjs";
import { t as Route } from "./routes-BRtluQtL.mjs";
import { t as ArchitectureAtlas } from "./architecture-atlas-BdVIBDxU.mjs";
import { t as TrustBoundaryDiagram } from "./trust-boundary-diagram-D3_fWgvB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BApdtGW4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DENIAL_SCOPED_COPY = "Authority failed before any authorized host effect. The staged isolation may be discarded; rollback is not asserted unless guest state actually changed and was restored. External-effect absence is Not Established beyond the governed boundary.";
var OBSERVATORY_SCENARIOS = {
	commit: {
		id: "commit",
		label: "Commit path",
		summary: "Authority granted; validators pass; surviving effects cross the boundary; evidence emitted.",
		classification: "Representative fixture · composed path partially In Integration",
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
					denied: []
				},
				state: {
					baseline: "no snapshot yet",
					working: "awaiting stage",
					result: "uncommitted",
					resultTone: "pending"
				},
				kar: {
					known: "Yes",
					knownDetail: "Intent + scope received",
					authorized: "Not Established",
					authorizedDetail: "No grant yet",
					reversible: "Not Established",
					reversibleDetail: "No staged mutation"
				}
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
					resultTone: "pending"
				},
				kar: {
					known: "Yes",
					knownDetail: "S₀ snapshot + isolation observed",
					authorized: "Not Established",
					authorizedDetail: "Capabilities not yet bound",
					reversible: "Conditional",
					reversibleDetail: "Guest state restorable via S₀ if mutated later"
				}
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
					denied: []
				},
				kar: {
					known: "Yes",
					knownDetail: "Grant set recorded",
					authorized: "Yes",
					authorizedDetail: "WriteFile:/src · ReadFile:/src granted",
					reversible: "Conditional",
					reversibleDetail: "Staged guest work reversible via S₀"
				}
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
					{
						id: "policy.capability",
						outcome: "pass",
						maturity: "CURRENT"
					},
					{
						id: "health.snapshot",
						outcome: "pass",
						maturity: "CURRENT"
					},
					{
						id: "diff.intent_scope",
						outcome: "pass",
						maturity: "IN_DEVELOPMENT"
					},
					{
						id: "gate.commit_barrier",
						outcome: "pending",
						maturity: "IN_DEVELOPMENT"
					}
				],
				kar: {
					known: "Yes",
					knownDetail: "Validator outcomes observed",
					authorized: "Yes",
					authorizedDetail: "Prior grants remain in force",
					reversible: "Conditional",
					reversibleDetail: "Still pre-commit; S₀ available"
				}
			},
			{
				id: "c4",
				sequence: 4,
				stage: "decide",
				type: "txn.decide.COMMIT",
				log: "txn.decide(COMMIT) · surviving effects applied",
				detail: "Only surviving changes cross the commit boundary. Full barrier remains In Integration under Stage 0.",
				maturity: "IN_DEVELOPMENT",
				evidenceFieldsUnlocked: [
					"snapshot",
					"capabilities",
					"subject"
				],
				trust: "Enforced",
				branch: "commit",
				rollbackOccurred: false,
				validators: [
					{
						id: "policy.capability",
						outcome: "pass",
						maturity: "CURRENT"
					},
					{
						id: "health.snapshot",
						outcome: "pass",
						maturity: "CURRENT"
					},
					{
						id: "diff.intent_scope",
						outcome: "pass",
						maturity: "IN_DEVELOPMENT"
					},
					{
						id: "gate.commit_barrier",
						outcome: "pass",
						maturity: "IN_DEVELOPMENT"
					}
				],
				state: {
					baseline: "S₀ captured · guest snapshot",
					working: "worktree isolation · patch staged",
					result: "surviving effects applied",
					resultTone: "commit"
				},
				kar: {
					known: "Yes",
					knownDetail: "Commit decision observed",
					authorized: "Yes",
					authorizedDetail: "Effects authorized by grant set",
					reversible: "No",
					reversibleDetail: "Guest path committed; external effects need compensation (Not Established here)"
				}
			},
			{
				id: "c5",
				sequence: 5,
				stage: "emit",
				type: "proof_capsule.emit",
				log: "proof_capsule.emit(optionally_signed, limitations[])",
				detail: "Portable evidence record leaves the boundary. Signature is optional; demo keys are not production anchors.",
				maturity: "CURRENT",
				evidenceFieldsUnlocked: [
					"subject",
					"capabilities",
					"snapshot",
					"failure",
					"rollback",
					"limitations",
					"signature"
				],
				trust: "Observed",
				branch: "commit",
				kar: {
					known: "Yes",
					knownDetail: "Capsule fields unlocked",
					authorized: "Yes",
					authorizedDetail: "Historical grant set recorded",
					reversible: "No",
					reversibleDetail: "Post-commit; external-effect absence Not Established"
				}
			}
		]
	},
	denial: {
		id: "denial",
		label: "Pre-effect denial",
		summary: "Capability denied at Constrain. No authorized host effect. Rollback not asserted.",
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
					denied: []
				},
				state: {
					baseline: "no snapshot yet",
					working: "awaiting stage",
					result: "uncommitted",
					resultTone: "pending"
				},
				kar: {
					known: "No",
					knownDetail: "No runtime observation yet",
					authorized: "Not Established",
					authorizedDetail: "Authority not yet bound",
					reversible: "Not Established",
					reversibleDetail: "No staged guest mutation yet",
					known: "Yes",
					knownDetail: "Network intent received"
				}
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
					resultTone: "pending"
				},
				kar: {
					known: "Yes",
					knownDetail: "S₀ + sandbox staged",
					authorized: "Not Established",
					authorizedDetail: "No capability grant yet",
					reversible: "Conditional",
					reversibleDetail: "No authorized mutation yet; discard is not rollback"
				}
			},
			{
				id: "d2",
				sequence: 2,
				stage: "constrain",
				type: "capability.deny",
				log: "capability.bind(NetworkOutbound) · DENIED",
				detail: "Required capability not granted. Mismatch recorded. No authorized host effect.",
				maturity: "CURRENT",
				evidenceFieldsUnlocked: [
					"snapshot",
					"capabilities",
					"failure"
				],
				trust: "Enforced",
				authority: {
					requested: ["NetworkOutbound", "ReadEnv"],
					granted: ["ReadEnv"],
					denied: ["NetworkOutbound"]
				},
				kar: {
					known: "Yes",
					knownDetail: "Denial + mismatch observed",
					authorized: "No",
					authorizedDetail: "NetworkOutbound denied · ReadEnv only",
					reversible: "Not Established",
					reversibleDetail: "No authorized host mutation; rollback.occurred not asserted"
				}
			},
			{
				id: "d3",
				sequence: 3,
				stage: "validate",
				type: "validators.skip",
				log: "validators.run · skipped (pre-effect deny)",
				detail: "Validation of staged mutation does not run — no authorized mutation occurred.",
				maturity: "CURRENT",
				evidenceFieldsUnlocked: [
					"snapshot",
					"capabilities",
					"failure"
				],
				trust: "Observed",
				validators: [
					{
						id: "policy.capability",
						outcome: "fail",
						maturity: "CURRENT"
					},
					{
						id: "health.snapshot",
						outcome: "pass",
						maturity: "CURRENT"
					},
					{
						id: "diff.intent_scope",
						outcome: "skip",
						maturity: "IN_DEVELOPMENT"
					},
					{
						id: "gate.commit_barrier",
						outcome: "skip",
						maturity: "IN_DEVELOPMENT"
					}
				],
				kar: {
					known: "Yes",
					knownDetail: "Validator skip recorded",
					authorized: "No",
					authorizedDetail: "Still denied for NetworkOutbound",
					reversible: "Not Established",
					reversibleDetail: "No mutation to restore"
				}
			},
			{
				id: "d4",
				sequence: 4,
				stage: "decide",
				type: "txn.decide.DENY",
				log: "txn.decide(ABORT) · discard staged isolation · no host effect",
				detail: "Pre-effect denial. Snapshot may be discarded. rollback.occurred is not asserted because guest state was not mutated under authorization.",
				maturity: "CURRENT",
				evidenceFieldsUnlocked: [
					"snapshot",
					"capabilities",
					"failure",
					"subject"
				],
				trust: "Enforced",
				branch: "deny",
				rollbackOccurred: false,
				state: {
					baseline: "S₀ captured · guest snapshot",
					working: "sandbox isolation · discarded",
					result: "denied · no authorized host effect",
					resultTone: "deny"
				},
				kar: {
					known: "Yes",
					knownDetail: "Deny decision observed",
					authorized: "No",
					authorizedDetail: "Effect never authorized",
					reversible: "Not Established",
					reversibleDetail: "rollback.occurred=false · discard ≠ snapshot restore"
				}
			},
			{
				id: "d5",
				sequence: 5,
				stage: "emit",
				type: "proof_capsule.emit",
				log: "proof_capsule.emit(denial evidence · limitations[])",
				detail: "Denial path still produces inspectable evidence. External-effect absence is Not Established beyond the governed boundary.",
				maturity: "CURRENT",
				evidenceFieldsUnlocked: [
					"subject",
					"capabilities",
					"snapshot",
					"failure",
					"rollback",
					"limitations",
					"signature"
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
					reversibleDetail: "No rollback asserted · external-effect absence Not Established"
				}
			}
		]
	},
	rollback: {
		id: "rollback",
		label: "Post-stage rollback",
		summary: "Authority granted; staged mutation applied; validator fails; snapshot-backed guest state restored.",
		classification: "Representative fixture · rollback CURRENT · barrier In Integration",
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
					denied: []
				},
				state: {
					baseline: "no snapshot yet",
					working: "awaiting stage",
					result: "uncommitted",
					resultTone: "pending"
				},
				kar: {
					known: "Yes",
					knownDetail: "Intent received",
					authorized: "Not Established",
					authorizedDetail: "No grant yet",
					reversible: "Not Established",
					reversibleDetail: "No staged mutation"
				}
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
					resultTone: "pending"
				},
				kar: {
					known: "Yes",
					knownDetail: "S₀ captured",
					authorized: "Not Established",
					authorizedDetail: "Awaiting bind",
					reversible: "Conditional",
					reversibleDetail: "S₀ enables guest restore if mutated"
				}
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
					denied: []
				},
				state: {
					baseline: "S₀ captured · guest snapshot",
					working: "staged mutation applied in isolation",
					result: "uncommitted",
					resultTone: "pending"
				},
				kar: {
					known: "Yes",
					knownDetail: "Staged mutation observed",
					authorized: "Yes",
					authorizedDetail: "WriteFile:/src granted",
					reversible: "Yes",
					reversibleDetail: "Guest mutation reversible via S₀"
				}
			},
			{
				id: "r3",
				sequence: 3,
				stage: "validate",
				type: "validators.fail",
				log: "validators.run([policy, health, diff]) · FAIL · requires_rollback",
				detail: "Deterministic validator rejects staged result.",
				maturity: "IN_DEVELOPMENT",
				evidenceFieldsUnlocked: [
					"snapshot",
					"capabilities",
					"failure"
				],
				trust: "Enforced",
				validators: [
					{
						id: "policy.capability",
						outcome: "pass",
						maturity: "CURRENT"
					},
					{
						id: "health.snapshot",
						outcome: "pass",
						maturity: "CURRENT"
					},
					{
						id: "diff.intent_scope",
						outcome: "fail",
						maturity: "IN_DEVELOPMENT"
					},
					{
						id: "gate.commit_barrier",
						outcome: "fail",
						maturity: "IN_DEVELOPMENT"
					}
				],
				kar: {
					known: "Yes",
					knownDetail: "Validator failure observed",
					authorized: "Yes",
					authorizedDetail: "Grant still held for staged work",
					reversible: "Yes",
					reversibleDetail: "S₀ restore pending decision"
				}
			},
			{
				id: "r4",
				sequence: 4,
				stage: "decide",
				type: "txn.decide.ABORT",
				log: "txn.decide(ABORT) · rollback(snapshot S₀)",
				detail: "For this isolated fixture, Abort restores snapshot-backed guest state before any committed effect. External effects require explicit compensation semantics and are not proven absent.",
				maturity: "CURRENT",
				evidenceFieldsUnlocked: [
					"snapshot",
					"capabilities",
					"failure",
					"rollback",
					"subject"
				],
				trust: "Enforced",
				branch: "abort",
				rollbackOccurred: true,
				state: {
					baseline: "S₀ captured · guest snapshot",
					working: "restored from S₀",
					result: "restored to S₀ · no committed effect in this fixture",
					resultTone: "abort"
				},
				kar: {
					known: "Yes",
					knownDetail: "Abort + restore observed",
					authorized: "Yes",
					authorizedDetail: "Prior grant; effect aborted",
					reversible: "Yes",
					reversibleDetail: "Guest restored via S₀ · external-effect absence Not Established"
				}
			},
			{
				id: "r5",
				sequence: 5,
				stage: "emit",
				type: "proof_capsule.emit",
				log: "proof_capsule.emit(failure+rollback evidence)",
				detail: "Failure and rollback fields are first-class. Capsule does not prove absence of external side effects.",
				maturity: "CURRENT",
				evidenceFieldsUnlocked: [
					"subject",
					"capabilities",
					"snapshot",
					"failure",
					"rollback",
					"limitations",
					"signature"
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
					reversibleDetail: "rollback.occurred=true (guest) · compensation ≠ rollback"
				}
			}
		]
	}
};
function projectObservatory(scenarioId, throughIndex) {
	const scenario = OBSERVATORY_SCENARIOS[scenarioId];
	const events = scenario.events.slice(0, Math.min(throughIndex + 1, scenario.events.length));
	const last = events[events.length - 1];
	let authority = {
		requested: [],
		granted: [],
		denied: []
	};
	let state = {
		baseline: "no snapshot yet",
		working: "awaiting stage",
		result: "uncommitted",
		resultTone: "pending"
	};
	let validators = [
		{
			id: "policy.capability",
			outcome: "pending",
			maturity: "CURRENT"
		},
		{
			id: "health.snapshot",
			outcome: "pending",
			maturity: "CURRENT"
		},
		{
			id: "diff.intent_scope",
			outcome: "pending",
			maturity: "IN_DEVELOPMENT"
		},
		{
			id: "gate.commit_barrier",
			outcome: "pending",
			maturity: "IN_DEVELOPMENT"
		}
	];
	const unlocked = /* @__PURE__ */ new Set();
	let rollbackOccurred = false;
	let branch = null;
	for (const e of events) {
		if (e.authority) authority = {
			...authority,
			...e.authority
		};
		if (e.state) state = {
			...state,
			...e.state
		};
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
		kar: last.kar
	};
}
function SectionHeading({ eyebrow, title, description, className, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl space-y-3", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("font-mono text-[11px] font-medium uppercase tracking-[0.14em]", light ? "text-archive-ink-muted" : "text-porcelain-subtle"),
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("font-serif text-2xl font-medium tracking-tight sm:text-3xl", light ? "text-archive-ink" : "text-porcelain"),
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-base leading-relaxed", light ? "text-archive-ink-muted" : "text-porcelain-muted"),
				children: description
			}) : null
		]
	});
}
var SYMBOL = {
	Yes: "■",
	No: "□",
	Conditional: "◇",
	"Not Established": "○"
};
function Cell({ label, value, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 flex-1 rounded-md border border-border/70 bg-void/80 px-2 py-1.5",
		"data-kar-cell": label.toLowerCase(),
		"data-kar-value": value,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[9px] uppercase tracking-[0.12em] text-porcelain-subtle",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-0.5 font-mono text-[11px] text-porcelain",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "mr-1 text-porcelain-muted",
					children: SYMBOL[value]
				}), value]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-[10px] leading-snug text-porcelain-muted",
				children: detail
			})
		]
	});
}
/**
* Persistent KNOWN | AUTHORIZED | REVERSIBLE strip.
* Values must come from event-stream projection only.
*/
function KarStrip({ kar, className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("border-b border-border bg-carbon/60", compact ? "px-2 py-1.5" : "px-3 py-2", className),
		"data-testid": "kar-strip",
		role: "group",
		"aria-label": "Known, authorized, and reversible state",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1.5 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[9px] uppercase tracking-[0.14em] text-porcelain-subtle",
				children: "KAR · Known · Authorized · Reversible"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hidden font-mono text-[9px] text-porcelain-subtle sm:block",
				children: "■ Yes · □ No · ◇ Conditional · ○ Not Established"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-1.5 sm:flex-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					label: "Known",
					value: kar.known,
					detail: kar.knownDetail
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					label: "Authorized",
					value: kar.authorized,
					detail: kar.authorizedDetail
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					label: "Reversible",
					value: kar.reversible,
					detail: kar.reversibleDetail
				})
			]
		})]
	});
}
function karForOutcome(outcome) {
	if (outcome === "commit") return projectObservatory("commit", 5).kar;
	return projectObservatory("rollback", 5).kar;
}
function CausalControlTrace({ className }) {
	const [outcome, setOutcome] = (0, import_react.useState)("commit");
	const uid = (0, import_react.useId)().replace(/:/g, "");
	const coneId = `${uid}-cone`;
	const arrowId = `${uid}-arrow`;
	const microId = `${uid}-micro`;
	const abort = outcome === "abort";
	const kar = karForOutcome(outcome);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl border border-border bg-carbon", className),
		"data-testid": "causal-control-trace",
		"data-figure": "FIG-CTL-02",
		"data-outcome": outcome,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "FIG-CTL-02 · Causal control trace"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-porcelain-muted",
					children: "Direct tool execution vs governed transaction"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1.5",
					role: "group",
					"aria-label": "Trace outcome",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": !abort,
						onClick: () => setOutcome("commit"),
						className: cn("rounded-md border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em]", !abort ? "border-oxide/60 bg-oxide/20 text-porcelain" : "border-border text-porcelain-subtle hover:text-porcelain-muted"),
						children: "Commit trace"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": abort,
						onClick: () => setOutcome("abort"),
						className: cn("rounded-md border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em]", abort ? "border-controlled-red/60 bg-controlled-red/20 text-porcelain" : "border-border text-porcelain-subtle hover:text-porcelain-muted"),
						children: "Abort trace"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KarStrip, {
				kar,
				compact: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[16/10] w-full bg-void sm:aspect-video",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1200 675",
					className: "absolute inset-0 h-full w-full",
					role: "img",
					"aria-labelledby": `${uid}-title`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
							id: `${uid}-title`,
							children: "Comparison of uncontrolled agent execution and Nexus-IQ controlled execution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: coneId,
								x1: "0",
								x2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									stopColor: "#7a3e3e",
									stopOpacity: ".42"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "1",
									stopColor: "#7a3e3e",
									stopOpacity: "0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
								id: arrowId,
								markerWidth: "8",
								markerHeight: "8",
								refX: "7",
								refY: "4",
								orient: "auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M0 0L8 4L0 8Z",
									fill: "#b8b3a8"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
								id: microId,
								width: "24",
								height: "24",
								patternUnits: "userSpaceOnUse",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M24 0H0V24",
									fill: "none",
									stroke: "#f6f1e7",
									strokeOpacity: ".045"
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "1200",
							height: "675",
							fill: `url(#${microId})`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "60",
							y: "80",
							fill: "#b8b3a8",
							fontFamily: "ui-monospace, monospace",
							fontSize: "12",
							letterSpacing: "2",
							children: "WITHOUT A COMMIT BOUNDARY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "60",
							y: "370",
							fill: "#b8b3a8",
							fontFamily: "ui-monospace, monospace",
							fontSize: "12",
							letterSpacing: "2",
							children: "WITH NEXUS-IQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M100 205H1030",
								stroke: "#b8b3a8",
								strokeOpacity: ".25",
								strokeWidth: "2",
								markerEnd: `url(#${arrowId})`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								fontFamily: "ui-monospace, monospace",
								fontSize: "11",
								textAnchor: "middle",
								children: [
									[
										130,
										"model output",
										false
									],
									[
										350,
										"tool call",
										false
									],
									[
										575,
										"side effect",
										true
									],
									[
										880,
										"report",
										false
									]
								].map(([x, label, danger]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: `translate(${x} 205)`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										r: danger ? 27 : 25,
										fill: danger ? "#261313" : "#111820",
										stroke: danger ? "#b96464" : "#f6f1e7",
										strokeOpacity: danger ? 1 : .25
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										y: "50",
										fill: danger ? "#f0b1b1" : "#b8b3a8",
										children: label
									})]
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M575 160L1100 95V315L575 250Z",
								fill: `url(#${coneId})`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "785",
								y: "130",
								fill: "#b96464",
								fontFamily: "ui-monospace, monospace",
								fontSize: "10",
								letterSpacing: "1.4",
								children: "IRREVERSIBILITY CONE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M350 167V115",
								stroke: "#b96464",
								strokeDasharray: "4 5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "350",
								y: "103",
								textAnchor: "middle",
								fill: "#b96464",
								fontSize: "11",
								children: "no authority binding"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M100 500H1030",
								stroke: "#b8b3a8",
								strokeOpacity: ".22",
								strokeWidth: "2",
								markerEnd: `url(#${arrowId})`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								fontFamily: "ui-monospace, monospace",
								fontSize: "10",
								textAnchor: "middle",
								children: [
									[
										120,
										"intent",
										"#f6f1e7",
										.25,
										"#111820"
									],
									[
										285,
										"stage S₀",
										"#5f93a8",
										1,
										"#111820"
									],
									[
										450,
										"bind",
										"#5f93a8",
										1,
										"#111820"
									],
									[
										615,
										"validate",
										"#d4a55f",
										1,
										"#111820"
									],
									[
										780,
										abort ? "abort" : "commit",
										abort ? "#b96464" : "#75a184",
										1,
										abort ? "#231111" : "#13201a"
									],
									[
										950,
										"evidence",
										"#fff",
										.5,
										"#eee7d8"
									]
								].map(([x, label, stroke, so, fill]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: `translate(${x} 500)`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "-42",
										y: "-25",
										width: "84",
										height: "50",
										rx: "8",
										fill,
										stroke,
										strokeOpacity: so
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										y: "47",
										fill: "#b8b3a8",
										children: label
									})]
								}, String(label)))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M780 460C810 410 900 410 970 420",
								fill: "none",
								stroke: "#75a184",
								strokeWidth: "3",
								opacity: abort ? 0 : 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "895",
								y: "400",
								fill: "#75a184",
								textAnchor: "middle",
								fontFamily: "ui-monospace, monospace",
								fontSize: "10",
								opacity: abort ? 0 : 1,
								children: "effect crosses only here"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M780 540C720 615 320 615 285 535",
								fill: "none",
								stroke: "#b96464",
								strokeWidth: "2",
								strokeDasharray: "5 7",
								opacity: abort ? 1 : 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "515",
								y: "620",
								fill: "#b96464",
								textAnchor: "middle",
								fontFamily: "ui-monospace, monospace",
								fontSize: "10",
								opacity: abort ? 1 : 0,
								children: "abort restores staged state; denial is still evidenced"
							})
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "border-t border-border px-3 py-2.5 sm:px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-porcelain-muted",
					children: abort ? "Abort restores staged state where supported and still emits evidence. Denial is a first-class controlled outcome." : "Committed effect crosses only after stage, authority bind, and validation survive. The irreversibility cone never opens early."
				})
			})
		]
	});
}
var ICONS = [
	ShieldAlert,
	GitCommitHorizontal,
	FileSearch
];
function ProblemSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "problem",
		className: "border-b border-border bg-void",
		"aria-labelledby": "problem-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The control gap",
					title: "Intent is not authority",
					description: PROBLEM.core
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "problem-heading",
					className: "sr-only",
					children: "Uncontrolled transitions missing from agent stacks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CausalControlTrace, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: PROBLEM.transitions.map((t, i) => {
						const Icon = ICONS[i] ?? ShieldAlert;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80 + i * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group relative h-full overflow-hidden rounded-xl border border-border bg-carbon p-5 transition-colors hover:border-porcelain/20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-controlled-red/50 to-transparent opacity-70",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[10px] tabular-nums text-porcelain-subtle",
											children: ["0", i + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-4 text-controlled-red/80",
											"aria-hidden": true,
											strokeWidth: 1.5
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-mono text-xs leading-relaxed text-porcelain-muted",
										children: t.from
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 rounded-md border border-controlled-red/25 bg-controlled-red/10 px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-medium uppercase tracking-[0.1em] text-controlled-red-fg/90",
											children: "Missing control"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-serif text-base text-porcelain",
											children: t.missing
										})]
									})
								]
							})
						}, t.missing);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-sm leading-relaxed text-porcelain-subtle",
						children: "Model-level guardrails address prompts. They do not stage side effects, bind capability authority, or produce an independently inspectable execution record. That is the commit boundary."
					})
				})
			]
		})
	});
}
var STATUS_DOT = {
	CURRENT: "bg-oxide",
	IN_DEVELOPMENT: "bg-signal",
	TARGET: "bg-target-outline",
	EXPERIMENTAL: "bg-porcelain-subtle",
	LIMITATION: "bg-controlled-red"
};
/**
* Horizontal forensic map of the full Change Gate pipeline
* including Approve + Compensate (destination phases).
*/
function ChangeGateMap({ activeId, onSelect, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ForensicFrame, {
		title: "Change Gate map",
		refId: "FIG-CG-02 · full pipeline",
		classification: "OPERATING MODEL",
		className,
		footer: "Solid nodes = Implemented Foundation · Amber = In Integration · Outline = Target Architecture. Abort and compensation are first-class, not afterthoughts.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden overflow-x-auto md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-w-[640px] pb-2 pt-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-4 right-4 top-[28px] h-px bg-border",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-[58%] top-[18px] h-5 w-px bg-institution/50",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "relative flex justify-between gap-1 px-1",
						children: CHANGE_GATE_PHASES.map((phase, i) => {
							const active = activeId === phase.id;
							const isDecide = phase.id === "decide";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "flex min-w-0 flex-1 flex-col items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => onSelect?.(phase.id),
									className: cn("group flex w-full flex-col items-center gap-2 rounded-lg px-1 py-1 text-center transition-colors", active && "bg-institution/10"),
									"aria-current": active ? "step" : void 0,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("relative z-[1] flex size-3.5 items-center justify-center rounded-full border-2 border-carbon", STATUS_DOT[phase.status] ?? "bg-slate", active && "ring-2 ring-porcelain/40 ring-offset-1 ring-offset-carbon", isDecide && "size-4"),
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] tabular-nums text-porcelain-subtle",
											children: String(i + 1).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("line-clamp-2 text-[11px] font-medium leading-tight", active ? "text-porcelain" : "text-porcelain-muted"),
											children: phase.shortLabel
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
											status: phase.status,
											compact: true,
											showLabel: false
										})
									]
								})
							}, phase.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex justify-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded border border-oxide/35 bg-oxide/10 px-2 py-1 font-mono text-[10px] text-oxide-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-1.5 rounded-full bg-oxide",
								"aria-hidden": true
							}), "Commit path"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded border border-controlled-red/35 bg-controlled-red/10 px-2 py-1 font-mono text-[10px] text-controlled-red-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-1.5 rounded-full bg-controlled-red",
								"aria-hidden": true
							}), "Abort path"]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-1.5 md:hidden",
			children: CHANGE_GATE_PHASES.map((phase, i) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect?.(phase.id),
					className: cn("flex w-full items-center gap-2 rounded-md border px-2.5 py-2 text-left", activeId === phase.id ? "border-institution/40 bg-institution/15" : "border-border bg-void/40"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-porcelain-subtle",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("size-2 rounded-full", STATUS_DOT[phase.status]),
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 text-sm text-porcelain",
							children: phase.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
							status: phase.status,
							compact: true,
							showLabel: false
						})
					]
				}) }, phase.id);
			})
		})]
	});
}
var TRANSITIONS = [
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
		negative: "Does not mean worktree change proposals are a finished public API."
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
		negative: "Does not claim Stage 0 end-to-end Change Gate is complete."
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
		negative: "Passing validators is not proof of correct program semantics."
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
		negative: "Not currently a general public workflow surface."
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
		negative: "Does not establish irreversible external compensation."
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
		negative: "Not a celebratory success animation — a controlled state transition."
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
		negative: "Does not reverse effects that already escaped isolation."
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
		negative: "Capsule is not mathematical proof of correct execution."
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
		negative: "Does not claim host compromise is ruled out."
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
		negative: "Must not be drawn as currently equivalent to snap-rollback."
	}
];
var NODE_POS = {
	propose: {
		x: 70,
		y: 120,
		label: "Propose"
	},
	stage: {
		x: 220,
		y: 120,
		label: "Stage S₀"
	},
	constrain: {
		x: 370,
		y: 120,
		label: "Constrain"
	},
	validate: {
		x: 520,
		y: 120,
		label: "Validate"
	},
	approve: {
		x: 520,
		y: 40,
		label: "Approve"
	},
	decide: {
		x: 670,
		y: 120,
		label: "Decide"
	},
	commit_terminal: {
		x: 850,
		y: 60,
		label: "Commit"
	},
	abort_terminal: {
		x: 850,
		y: 180,
		label: "Abort"
	},
	evidence_commit: {
		x: 1020,
		y: 60,
		label: "Evidence"
	},
	evidence_abort: {
		x: 1020,
		y: 180,
		label: "Evidence"
	},
	emit: {
		x: 1020,
		y: 120,
		label: "Emit"
	},
	compensate: {
		x: 850,
		y: 280,
		label: "Compensate"
	}
};
function phaseStatus(id) {
	return CHANGE_GATE_PHASES.find((x) => x.id === id)?.status ?? null;
}
function ChangeGateStateSpace({ className, activePhaseId, onSelectPhase }) {
	const [activeTransition, setActiveTransition] = (0, import_react.useState)("t-stage-constrain");
	const [currentOnly, setCurrentOnly] = (0, import_react.useState)(true);
	const t = TRANSITIONS.find((x) => x.id === activeTransition) ?? TRANSITIONS[0];
	const visibleTransitions = (0, import_react.useMemo)(() => {
		if (!currentOnly) return TRANSITIONS;
		return TRANSITIONS.filter((tr) => {
			if (tr.to === "approve" || tr.from === "approve") return false;
			if (tr.to === "compensate" || tr.from === "compensate") return false;
			return true;
		});
	}, [currentOnly]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl border border-border bg-carbon", className),
		"data-testid": "change-gate-state-space",
		"data-figure": "FIG-CG-SS-01",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "FIG-CG-SS-01 · Transactional state-space"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-porcelain-muted",
					children: "Select a transition · Commit/Abort terminals · compensation distinct"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": currentOnly,
					onClick: () => setCurrentOnly((v) => !v),
					className: cn("rounded-md border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em]", currentOnly ? "border-institution/50 bg-institution/20 text-porcelain" : "border-border text-porcelain-subtle"),
					children: currentOnly ? "Current only" : "Destination architecture"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[16/9] w-full bg-void sm:aspect-[2.2/1]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1120 340",
					className: "absolute inset-0 h-full w-full",
					role: "img",
					"aria-label": "Change Gate state transition graph",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
							id: "ss-arrow",
							markerWidth: "7",
							markerHeight: "7",
							refX: "6",
							refY: "3.5",
							orient: "auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0 0L7 3.5L0 7Z",
								fill: "#b8b3a8"
							})
						}) }),
						visibleTransitions.map((tr) => {
							const a = NODE_POS[tr.from];
							const b = NODE_POS[tr.to];
							if (!a || !b) return null;
							const active = tr.id === activeTransition;
							const isAbort = tr.to === "abort_terminal" || tr.to === "evidence_abort";
							const isCommit = tr.to === "commit_terminal" || tr.to === "evidence_commit";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: a.x + 36,
									y1: a.y,
									x2: b.x - 36,
									y2: b.y,
									stroke: active ? isAbort ? "#b96464" : isCommit ? "#75a184" : "#5f93a8" : "#f6f1e7",
									strokeOpacity: active ? .9 : .18,
									strokeWidth: active ? 2.5 : 1.2,
									markerEnd: "url(#ss-arrow)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: (a.x + b.x) / 2 - 28,
									y: (a.y + b.y) / 2 - 10,
									width: "56",
									height: "18",
									rx: "4",
									fill: "#07090b",
									stroke: active ? "#5f93a8" : "transparent",
									className: "cursor-pointer",
									onClick: () => setActiveTransition(tr.id)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: a.x,
									y1: a.y,
									x2: b.x,
									y2: b.y,
									stroke: "transparent",
									strokeWidth: "16",
									className: "cursor-pointer",
									onClick: () => setActiveTransition(tr.id)
								})
							] }, tr.id);
						}),
						Object.entries(NODE_POS).map(([id, pos]) => {
							if (currentOnly && (id === "approve" || id === "compensate" || id === "emit")) return null;
							const status = phaseStatus(id);
							const isTerminal = id === "commit_terminal" || id === "abort_terminal";
							const isEvidence = id === "evidence_commit" || id === "evidence_abort";
							const isActivePhase = activePhaseId === id;
							const fill = id === "commit_terminal" ? "#13201a" : id === "abort_terminal" ? "#231111" : isEvidence ? "#eee7d8" : "#111820";
							const stroke = id === "commit_terminal" ? "#75a184" : id === "abort_terminal" ? "#b96464" : isEvidence ? "#fff" : isActivePhase ? "#5f93a8" : "rgba(246,241,231,0.25)";
							const textFill = isEvidence ? "#1a1f24" : "#f6f1e7";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								transform: `translate(${pos.x} ${pos.y})`,
								className: "cursor-pointer",
								onClick: () => {
									if (id === "propose" || id === "stage" || id === "constrain" || id === "validate" || id === "approve" || id === "decide" || id === "emit" || id === "compensate") onSelectPhase?.(id);
									const match = TRANSITIONS.find((tr) => tr.from === id || tr.to === id);
									if (match) setActiveTransition(match.id);
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: -40,
										y: -18,
										width: "80",
										height: "36",
										rx: "8",
										fill,
										stroke,
										strokeWidth: isTerminal || isActivePhase ? 2 : 1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										textAnchor: "middle",
										y: "4",
										fill: textFill,
										fontFamily: "ui-monospace, monospace",
										fontSize: "10",
										children: pos.label
									}),
									status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "32",
										cy: "-12",
										r: "3.5",
										fill: status === "CURRENT" ? "#496f59" : status === "IN_DEVELOPMENT" ? "#a9793b" : "#5a7a8c"
									}) : null
								]
							}, id);
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "space-y-3 border-t border-border px-3 py-3 sm:px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-base text-porcelain",
							children: t.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[10px] text-porcelain-subtle",
							children: [
								t.from,
								" → ",
								t.to
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
								children: "Preconditions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-1 space-y-0.5 text-xs text-porcelain-muted",
								children: t.preconditions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", p] }, p))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
								children: "Invariant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: t.invariant
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
								children: "Evidence produced"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: t.evidence
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
								children: "Failure route"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: t.failureRoute
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
								children: "Maturity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: t.maturity
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-wider text-controlled-red-fg/80",
								children: "Not guaranteed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: t.negative
							})] })
						]
					}),
					activePhaseId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 border-t border-border pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-porcelain-subtle",
							children: "Phase panel focus"
						}), CHANGE_GATE_PHASES.filter((p) => p.id === activePhaseId).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
							status: p.status,
							compact: true,
							showLabel: true
						}, p.id))]
					}) : null
				]
			})
		]
	});
}
function ChangeGateSection() {
	const [openId, setOpenId] = (0, import_react.useState)("stage");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "change-gate",
		className: "border-b border-border bg-carbon",
		"aria-labelledby": "change-gate-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "First product",
					title: "Transactional Change Gate",
					description: "The finished operating model for consequential agent action: stage the change, constrain authority, validate before commitment, require approval where policy demands it, commit or abort, emit signed evidence, compensate when rollback cannot reverse external effects."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "change-gate-heading",
					className: "sr-only",
					children: "Detailed Change Gate workflow"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-lg border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-porcelain-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-signal",
								children: "Stage 0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-porcelain-subtle",
								children: "·"
							}),
							STAGE_0_NOTE
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChangeGateStateSpace, {
							activePhaseId: openId,
							onSelectPhase: setOpenId
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChangeGateMap, {
							activeId: openId,
							onSelect: setOpenId
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "relative space-y-0 border-l border-border pl-0",
							children: CHANGE_GATE_PHASES.map((phase, index) => {
								const open = openId === phase.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setOpenId(phase.id),
										"aria-expanded": open,
										className: cn("group flex w-full items-start gap-3 border-b border-border/80 py-3.5 pl-6 pr-2 text-left transition-colors duration-200", open ? "bg-void/40" : "hover:bg-void/25"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("absolute left-0 top-5 size-2.5 -translate-x-1/2 rounded-full border-2 border-carbon transition-transform duration-200", open && "scale-125", phase.status === "CURRENT" && "bg-oxide", phase.status === "IN_DEVELOPMENT" && "bg-signal", phase.status === "TARGET" && "bg-target-outline"),
												"aria-hidden": true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 font-mono text-[11px] tabular-nums text-porcelain-subtle",
												children: String(index + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-medium text-porcelain",
														children: phase.label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
														status: phase.status,
														compact: true,
														showLabel: true
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "overflow-hidden",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm leading-relaxed text-porcelain-muted",
															children: phase.finishedCapability
														})
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												className: cn("mt-1 size-4 shrink-0 text-porcelain-subtle transition-transform duration-200", open && "rotate-90"),
												"aria-hidden": true
											})
										]
									})
								}, phase.id);
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-border bg-void p-5 sm:p-6 lg:sticky lg:top-20 lg:self-start",
							children: (() => {
								const phase = CHANGE_GATE_PHASES.find((p) => p.id === openId) ?? CHANGE_GATE_PHASES[0];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
												children: "Phase detail · forensic record"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "mt-1 font-serif text-xl text-porcelain",
												children: phase.label
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: phase.status })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
													label: "Destination architecture",
													body: phase.finishedCapability
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
													label: "What exists today",
													body: phase.currentReality
												}),
												phase.limitations?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-md border border-controlled-red/30 bg-controlled-red/10 p-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] font-medium uppercase tracking-wide text-controlled-red-fg",
														children: "Limitations"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
														className: "mt-2 space-y-1 text-sm text-porcelain-muted",
														children: phase.limitations.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["! ", l] }, l))
													})]
												}) : null
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "border-t border-border pt-4 text-xs leading-relaxed text-porcelain-subtle",
											children: "Status markers never imply general availability. Target phases are destination architecture; Implemented Foundations link to real evidence under Stage 0."
										})
									]
								}, phase.id);
							})()
						})
					})]
				})
			]
		})
	});
}
function Block({ label, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1.5 text-sm leading-relaxed text-porcelain-muted",
		children: body
	})] });
}
function EvidenceSection() {
	const success = sampleCapsules.success;
	const failure = sampleCapsules.failureRollback;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "evidence",
		className: "border-b border-border",
		"aria-labelledby": "evidence-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-void",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[72rem] flex-col items-start gap-3 px-4 py-10 sm:px-6 sm:flex-row sm:items-center sm:justify-between sm:py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.14em] text-porcelain-subtle",
						children: "Credibility transition"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl text-porcelain sm:text-2xl",
						children: "When an Implemented Foundation path executes, the runtime emits a permanent record."
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-porcelain-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-border bg-carbon px-3 py-1.5 font-mono text-xs",
								children: "Emit Evidence"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
								className: "size-4 text-signal animate-pulse-soft",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-archive/30 bg-archive/10 px-3 py-1.5 font-mono text-xs text-archive",
								children: "Proof Capsule"
							})
						]
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-surface": "paper",
			className: "surface-paper border-t border-[color:var(--color-border-paper)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							light: true,
							eyebrow: "The evidence behind the decision",
							title: "Inspect a real Proof Capsule",
							description: "Structure-identical fixtures from the Nexus ProofCapsule schema. Runtime-observed facts, capability evidence, snapshot/rollback, redaction, and mandatory limitations[] — never presented as mathematical proof of correctness."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: "CURRENT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: "IN_DEVELOPMENT" })]
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: "evidence-heading",
						className: "sr-only",
						children: "Proof Capsule evidence preview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 40,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm text-archive-ink-muted",
							children: CAPSULE_HONESTY.explorerUiStatus
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleAnatomy, {})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-5 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleCard, {
								title: "Successful execution",
								scenario: "success",
								tool: String(success.subject.tool_name),
								duration: Number(success.subject.duration_ms),
								capsuleId: String(success.capsule_id),
								limitations: success.limitations,
								capabilities: {
									required: success.capabilities.required,
									granted: success.capabilities.granted
								},
								rollback: false,
								data: success,
								fileName: "success.capsule.json"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleCard, {
								title: "Capability denied → rollback",
								scenario: "failure_rollback",
								tool: String(failure.subject.tool_name),
								duration: Number(failure.subject.duration_ms),
								capsuleId: String(failure.capsule_id),
								limitations: failure.limitations,
								capabilities: {
									required: failure.capabilities.required,
									granted: failure.capabilities.granted,
									mismatch: failure.capabilities.mismatch ?? []
								},
								rollback: true,
								failureSummary: failure.failure ? String(failure.failure.error_summary) : void 0,
								data: failure,
								fileName: "failure-rollback.capsule.json"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-4 border-t border-[color:var(--color-border-paper)] pt-8 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-sm font-medium text-archive-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									className: "size-4",
									"aria-hidden": true,
									strokeWidth: 1.5
								}), "What this evidence establishes"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-archive-ink-muted",
								children: CAPSULE_HONESTY.proves
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-archive-ink",
								children: "What it does not establish"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-1 text-sm text-archive-ink-muted",
								children: CAPSULE_HONESTY.doesNotProve.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-controlled-red",
										"aria-hidden": true,
										children: "!"
									}), item]
								}, item))
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "primary",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/evidence/proof-capsules",
									children: "Open Proof Capsule Explorer"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "border-archive-ink/20 text-archive-ink hover:bg-archive-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/evidence/claims",
									children: "View claims registry"
								})
							})]
						})
					})
				]
			})
		})]
	});
}
function CapsuleCard({ title, scenario, tool, duration, capsuleId, limitations, capabilities, rollback, failureSummary, data, fileName }) {
	function download() {
		const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = fileName;
		a.click();
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `flex h-full flex-col rounded-xl border bg-white/40 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 ${rollback ? "border-controlled-red/25" : "border-[color:var(--color-border-paper)]"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-serif text-lg text-archive-ink",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-wider text-archive-ink-muted",
					children: scenario
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-1.5 font-mono text-[11px] text-archive-ink-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "capsule_id",
						v: capsuleId.slice(0, 18) + "…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "tool",
						v: tool
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "duration_ms",
						v: String(duration)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "capabilities",
						v: `${capabilities.granted.length} granted / ${capabilities.required.length} required`
					}),
					capabilities.mismatch?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "mismatch",
						v: capabilities.mismatch.join(", ")
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "rollback",
						v: rollback ? "occurred" : "none"
					})
				]
			}),
			failureSummary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 rounded-md border border-controlled-red/20 bg-controlled-red/5 px-3 py-2 text-xs leading-relaxed text-archive-ink-muted",
				children: failureSummary
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-wide text-archive-ink",
					children: "limitations[] · always present"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 max-h-28 space-y-1 overflow-y-auto font-mono text-[10px] leading-relaxed text-archive-ink-muted",
					children: limitations.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["! ", l] }, l))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				size: "sm",
				variant: "outline",
				className: "mt-4 w-full border-archive-ink/20 text-archive-ink hover:bg-archive",
				onClick: download,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
					className: "size-3.5",
					"aria-hidden": true
				}), "Download JSON artifact"]
			})
		]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: k }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-right text-archive-ink",
			children: v
		})]
	});
}
function CompositionSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "system",
		className: "border-b border-border bg-void",
		"aria-labelledby": "composition-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Architecture",
					title: "One operating model, three systems",
					description: "Nexus and AEON-IQ support the Nexus-IQ story. They do not compete with it for homepage prominence — they are the execution and memory substrates under the transactional composition layer."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "composition-heading",
					className: "sr-only",
					children: "System composition"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureAtlas, { compact: true })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-porcelain-subtle",
						children: [
							"Full atlas, plane contracts, and evaluator links on",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/system",
								className: "text-porcelain-muted underline-offset-4 hover:text-porcelain hover:underline",
								children: "/system"
							}),
							"."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 overflow-hidden rounded-xl border border-border bg-carbon",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-border px-4 py-3 sm:px-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
								children: "Layer cards · quick reference"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0",
							children: COMPOSITION.map((layer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative p-5 transition-colors hover:bg-slate/30 sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[10px] tabular-nums text-porcelain-subtle",
											children: ["L", i + 1]
										}), i < COMPOSITION.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "hidden size-4 text-porcelain-subtle md:block",
											"aria-hidden": true
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: `mt-3 font-serif text-xl ${layer.id === "nexus-iq" ? "text-porcelain" : "text-porcelain-muted"}`,
										children: layer.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-porcelain-muted",
										children: layer.role
									}),
									layer.id === "nexus-iq" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 inline-flex rounded-md border border-institution/40 bg-institution/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-porcelain",
										children: "Product composition layer"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
										children: "Supporting substrate"
									})
								]
							}, layer.id))
						})]
					})
				})
			]
		})
	});
}
function OutcomesSection() {
	const hints = claimsRegistry.homepageOutcomesMaturityHint;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "outcomes",
		className: "border-b border-border bg-carbon",
		"aria-labelledby": "outcomes-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Completed platform",
					title: "What the finished system enables",
					description: "Outcomes of the destination architecture — not a feature laundry list. Every card leads with maturity composition so architecture is never mistaken for general availability."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "outcomes-heading",
					className: "sr-only",
					children: "Platform outcomes with maturity composition"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: OUTCOMES.map((outcome) => {
						const hint = hints[outcome.id] ?? {};
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col rounded-xl border border-border bg-void p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-serif text-lg text-porcelain",
									children: outcome.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: [
										hint.implemented_foundation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountChip, {
											status: "implemented_foundation",
											n: hint.implemented_foundation
										}) : null,
										hint.in_integration ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountChip, {
											status: "in_integration",
											n: hint.in_integration
										}) : null,
										hint.target_architecture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountChip, {
											status: "target_architecture",
											n: hint.target_architecture
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex-1 space-y-1.5 text-sm text-porcelain-muted",
									children: outcome.capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-porcelain-subtle",
											"aria-hidden": true,
											children: "·"
										}), c]
									}, c))
								})
							]
						}, outcome.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Initial wedge",
							title: "First supported workflows",
							description: "The completed platform may be broad; the public product wedge stays concrete. Consequential software and repository change first — not universal control over arbitrary physical systems."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 space-y-2",
							children: WORKFLOWS.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-4 rounded-lg border border-border bg-void/60 px-4 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs tabular-nums text-porcelain-subtle",
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: i === 0 ? "font-medium text-porcelain" : "text-porcelain-muted",
										children: w
									}),
									i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto font-mono text-[10px] uppercase tracking-wider text-oxide",
										children: "Primary wedge"
									}) : null
								]
							}, w))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-porcelain-subtle",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/developers",
								className: "text-porcelain-muted underline-offset-4 hover:text-porcelain hover:underline",
								children: "Developer entry points and repositories →"
							})
						})
					]
				})
			]
		})
	});
}
function CountChip({ status, n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-carbon px-2 py-0.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
				status,
				compact: true,
				showLabel: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] tabular-nums text-porcelain",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] text-porcelain-subtle",
				children: PUBLIC_STATUS_META[status].shortLabel
			})
		]
	});
}
var TRUST_QUESTIONS = [
	{
		q: "What does Nexus-IQ enforce?",
		a: "Capability-gated WASM execution, snap-rollback isolation, policy structures, and signed runtime evidence on implemented paths."
	},
	{
		q: "What remains trusted?",
		a: "Host boundary, key material, and operators. Capsules explicitly list trust of the Nexus runtime and host."
	},
	{
		q: "What is cryptographically bound?",
		a: "Module/input digests, optional Ed25519 payload signatures, capability tokens, and memory evidence when attestation modes permit."
	},
	{
		q: "What is advisory?",
		a: "Memory context under Advisory / Degraded / Absent modes; incomplete binding never pretends to be attested."
	}
];
function TrustSection() {
	const topClaims = claimsRegistry.capabilities.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "trust",
		className: "border-b border-border bg-void",
		"aria-labelledby": "trust-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBoundaryDiagram, {})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Claims & maturity",
						title: "Every guarantee has an evidence boundary",
						description: "The claims registry is a product feature: status, evidence, limitations, and verification date — not a footer disclaimer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: "trust-heading",
						className: "sr-only",
						children: "Claims and security trust questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: topClaims.map((cap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-border bg-carbon p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-porcelain",
									children: cap.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
									status: cap.status,
									compact: true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-sm text-porcelain-muted",
								children: cap.summary
							})]
						}, cap.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/maturity",
								children: "Open maturity registry"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/evidence/claims",
								children: "Full claims matrix"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Security framing",
						title: "Trust questions, not logo walls",
						description: "Evaluators should leave knowing what is enforced, what is trusted, and what Stage 0 still blocks."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: TRUST_QUESTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-border bg-carbon p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-porcelain",
								children: item.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-porcelain-muted",
								children: item.a
							})]
						}, item.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-porcelain-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/security",
								className: "underline-offset-4 hover:text-porcelain hover:underline",
								children: "Full trust-boundary page →"
							}),
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BRAND.benchmarks,
								target: "_blank",
								rel: "noreferrer",
								className: "underline-offset-4 hover:text-porcelain hover:underline",
								children: "Live benchmarks →"
							})
						]
					})
				] })]
			})]
		})
	});
}
var PATHS = [
	{
		icon: FileSearch,
		audience: "Technical evaluator",
		title: "Inspect the evidence package",
		body: "Proof Capsule fixtures, claims registry, limitations, and live benchmark surfaces.",
		cta: "Open evidence",
		href: "/evidence/proof-capsules",
		internal: true
	},
	{
		icon: Terminal,
		audience: "Developer",
		title: "Run the current foundations",
		body: "Nexus WASM snap-rollback sandbox, AEON-IQ memory plane, and the Nexus-IQ kit repositories.",
		cta: "GitHub · Nexus",
		href: BRAND.githubNexus,
		internal: false
	},
	{
		icon: Building2,
		audience: "Institution or partner",
		title: "Request a system evaluation",
		body: "Discuss pilot fit for repository change, security remediation, or governed automation workflows.",
		cta: "Request evaluation",
		href: "mailto:contact@adaptiveliquidity.com?subject=Nexus-IQ%20system%20evaluation",
		internal: false
	}
];
function EvaluationSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "evaluation",
		className: "bg-carbon",
		"aria-labelledby": "evaluation-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.14em] text-porcelain-subtle",
						children: "Next step"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "evaluation-heading",
						className: "font-serif text-2xl text-porcelain sm:text-3xl",
						children: LAUNCH_THESIS
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-porcelain-muted",
						children: "Three high-intent paths. No newsletter gate. Architecture first — maturity and evidence never optional."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: PATHS.map((path) => {
					const Icon = path.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col rounded-xl border border-border bg-void p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-porcelain-subtle",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4",
									"aria-hidden": true,
									strokeWidth: 1.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.12em]",
									children: path.audience
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-serif text-lg text-porcelain",
								children: path.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 flex-1 text-sm leading-relaxed text-porcelain-muted",
								children: path.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: path.internal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "default",
									className: "w-full sm:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: path.href,
										children: path.cta
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "secondary",
									className: "w-full sm:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: path.href,
										target: path.href.startsWith("http") ? "_blank" : void 0,
										rel: path.href.startsWith("http") ? "noreferrer" : void 0,
										children: path.cta
									})
								})
							})
						]
					}, path.title);
				})
			})]
		})
	});
}
function subscribe(onStoreChange) {
	const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
	mq.addEventListener("change", onStoreChange);
	return () => mq.removeEventListener("change", onStoreChange);
}
function getClientSnapshot() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
/**
* Prefer reduced on the server so SSR markup never ships a motion-first
* first paint that then flashes for reduced-motion users.
* Client snapshot is synchronous via useSyncExternalStore (no useEffect lag).
*/
function getServerSnapshot() {
	return true;
}
/** Synchronous prefers-reduced-motion — no motion-enabled first paint. */
function useReducedMotion() {
	return (0, import_react.useSyncExternalStore)(subscribe, getClientSnapshot, getServerSnapshot);
}
function Chip({ children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded border px-1.5 py-0.5 font-mono text-[10px]", tone === "ok" && "border-oxide/40 bg-oxide/15 text-oxide-fg", tone === "deny" && "border-controlled-red/40 bg-controlled-red/15 text-controlled-red-fg", tone === "pending" && "border-border text-porcelain-subtle", tone === "default" && "border-border bg-slate/40 text-porcelain-muted"),
		children
	});
}
/**
* Four synchronized lenses + KAR — pure projections of the immutable event stream.
*/
function ExecutionObservatoryLenses({ scenarioId, stepIndex, className }) {
	const model = projectObservatory(scenarioId, stepIndex);
	const trust = TRUST_CLASS_META[model.trust];
	const fieldPreviews = {
		subject: scenarioId === "denial" ? "network_fetch" : scenarioId === "rollback" ? "risky-refactor" : "repo_patch",
		capabilities: model.authority.denied.length ? `mismatch · ${model.authority.denied.join(", ")}` : `${model.authority.granted.length} granted`,
		snapshot: model.unlocked.has("snapshot") ? "S₀ bound" : "—",
		failure: model.unlocked.has("failure") ? scenarioId === "denial" ? "capability_denied" : scenarioId === "rollback" ? "validator_failed" : "null" : "—",
		rollback: model.unlocked.has("rollback") ? model.rollbackOccurred ? "occurred · restored S₀" : "not asserted" : "—",
		"limitations[]": model.unlocked.has("limitations") ? "mandatory · non-empty" : "pending emit",
		signature: model.unlocked.has("signature") ? "optional · demo key · not production anchor" : "—"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("border-t border-border bg-carbon/40", className),
		"data-testid": "execution-observatory-lenses",
		"data-step": model.event.stage,
		"data-scenario": scenarioId,
		"data-trust": model.trust,
		"data-rollback-occurred": String(model.rollbackOccurred),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KarStrip, { kar: model.kar }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "Execution Observatory · event-causal lenses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[10px] text-porcelain-muted",
					children: [
						trust.symbol,
						" ",
						trust.short,
						" · step ",
						stepIndex + 1,
						"/",
						model.scenario.events.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "bg-void p-3",
						"aria-label": "State diff lens",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-mono text-[10px] uppercase tracking-[0.12em] text-institution",
							children: "01 · State Diff"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-2 space-y-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-porcelain-subtle",
									children: "Baseline"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-0.5 font-mono text-[11px] text-porcelain-muted",
									children: model.state.baseline
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-porcelain-subtle",
									children: "Working state"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-0.5 font-mono text-[11px] text-porcelain-muted",
									children: model.state.working
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-porcelain-subtle",
									children: "Result"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: cn("mt-0.5 font-mono text-[11px]", model.state.resultTone === "commit" && "text-oxide", (model.state.resultTone === "abort" || model.state.resultTone === "deny") && "text-controlled-red-fg", model.state.resultTone === "pending" && "text-porcelain-muted"),
									children: model.state.result
								})] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "bg-void p-3",
						"aria-label": "Authority lens",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-mono text-[10px] uppercase tracking-[0.12em] text-institution",
							children: "02 · Authority"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-porcelain-subtle",
									children: "Requested"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 flex flex-wrap gap-1",
									children: model.authority.requested.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: c }, c))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-porcelain-subtle",
									children: "Granted"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 flex flex-wrap gap-1",
									children: model.authority.granted.length ? model.authority.granted.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "ok",
										children: c
									}, c)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "pending",
										children: "none yet"
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-porcelain-subtle",
									children: "Denied"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 flex flex-wrap gap-1",
									children: model.authority.denied.length ? model.authority.denied.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "deny",
										children: c
									}, c)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										tone: "pending",
										children: "—"
									})
								})] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "bg-void p-3",
						"aria-label": "Validator matrix",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-mono text-[10px] uppercase tracking-[0.12em] text-institution",
							children: "03 · Validator Matrix"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1.5",
							children: model.validators.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start justify-between gap-2 rounded border border-border/60 px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-mono text-[11px] text-porcelain",
									children: v.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex shrink-0 flex-col items-end gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("font-mono text-[10px] uppercase", v.outcome === "pass" && "text-oxide", v.outcome === "fail" && "text-controlled-red-fg", v.outcome === "skip" && "text-porcelain-subtle", v.outcome === "pending" && "text-signal"),
										children: v.outcome
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
										status: v.maturity,
										compact: true,
										showLabel: false
									})]
								})]
							}, v.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "bg-void p-3",
						"aria-label": "Evidence assembly",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-mono text-[10px] uppercase tracking-[0.12em] text-institution",
								children: "04 · Evidence Assembly"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-1",
								children: Object.entries(fieldPreviews).map(([name, preview]) => {
									const ready = model.unlocked.has(name.replace("[]", "")) || model.unlocked.has(name);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: cn("flex items-center justify-between gap-2 rounded px-1.5 py-1 font-mono text-[11px]", ready ? "bg-archive/10 text-porcelain" : "text-porcelain-subtle"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("size-1.5 rounded-full", ready ? "bg-oxide" : "bg-porcelain-subtle/40"),
												"aria-hidden": true
											}), name]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate text-[10px] text-porcelain-muted",
											children: preview
										})]
									}, name);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[11px] leading-relaxed text-porcelain-muted",
								children: "Fields unlock only after supporting events. Signature presence ≠ production trust anchor."
							})
						]
					})
				]
			})
		]
	});
}
/**
* Execution Observatory — DemoPlayer with immutable event streams.
* Scenarios: Commit | Pre-effect denial | Post-stage rollback
*/
function DemoPlayer({ className, scenarioId: scenarioIdProp, stepIndex: stepIndexProp, onScenarioChange, onStepChange }) {
	const reduced = useReducedMotion();
	const [internalScenarioId, setInternalScenarioId] = (0, import_react.useState)("commit");
	const [internalStepIndex, setInternalStepIndex] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const [view, setView] = (0, import_react.useState)("film");
	const scenarioId = scenarioIdProp ?? internalScenarioId;
	const stepIndex = stepIndexProp ?? internalStepIndex;
	const setScenarioId = (id) => {
		setInternalScenarioId(id);
		onScenarioChange?.(id);
	};
	const setStepIndex = (v) => {
		const next = typeof v === "function" ? v(stepIndex) : v;
		setInternalStepIndex(next);
		onStepChange?.(next);
	};
	const scenario = OBSERVATORY_SCENARIOS[scenarioId];
	const script = scenario.events;
	const projected = projectObservatory(scenarioId, stepIndex);
	const step = projected.event;
	const progress = (stepIndex + 1) / script.length * 100;
	const atEmit = step.stage === "emit";
	const trust = TRUST_CLASS_META[projected.trust];
	const capsule = scenarioId === "commit" ? sampleCapsules.success : sampleCapsules.failureRollback;
	(0, import_react.useEffect)(() => {
		setStepIndex(0);
		if (!reduced) setPlaying(true);
	}, [scenarioId, reduced]);
	(0, import_react.useEffect)(() => {
		if (reduced || !playing || view === "compare") return;
		if (!script[stepIndex]) return;
		const t = window.setTimeout(() => {
			setStepIndex((i) => {
				if (i >= script.length - 1) return 0;
				return i + 1;
			});
		}, 1300);
		return () => window.clearTimeout(t);
	}, [
		stepIndex,
		playing,
		reduced,
		script,
		view
	]);
	(0, import_react.useEffect)(() => {
		if (!reduced) return;
		setStepIndex(script.length - 1);
		setPlaying(false);
	}, [reduced, script.length]);
	const seekTo = (0, import_react.useCallback)((index) => {
		setStepIndex(Math.max(0, Math.min(index, script.length - 1)));
		setPlaying(false);
	}, [script.length]);
	function downloadCapsule() {
		const name = scenarioId === "commit" ? "success.capsule.json" : scenarioId === "denial" ? "denial.fixture.note.json" : "failure-rollback.capsule.json";
		const payload = scenarioId === "denial" ? {
			note: "Denial fixture — structure-identical failure fields may apply; rollback.occurred not asserted",
			scenario: "pre-effect-denial",
			limitations: capsule.limitations
		} : capsule;
		const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = name;
		a.click();
		URL.revokeObjectURL(url);
	}
	const branchLabel = projected.branch;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-lg border border-border/80 bg-void shadow-[0_28px_80px_-36px_rgba(0,0,0,0.9)]", className),
		"data-demo-scenario": scenarioId,
		"data-demo-view": view,
		"data-testid": "execution-observatory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-border bg-carbon px-3 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1.5",
						"aria-hidden": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-controlled-red/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-signal/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-oxide/70" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-0 flex-1 items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate rounded-md border border-border bg-void/80 px-3 py-1 font-mono text-[10px] text-porcelain-subtle",
							children: "nexus-iq · execution observatory · event stream"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
						children: reduced ? "static" : playing && view === "film" ? "rec" : "paused"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border bg-carbon/80 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap rounded-md border border-border p-0.5",
						children: [
							["commit", "Commit"],
							["denial", "Pre-effect denial"],
							["rollback", "Post-stage rollback"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setScenarioId(id),
							"aria-pressed": scenarioId === id,
							"data-demo-path": id,
							className: cn("min-h-9 rounded px-2.5 py-1 text-xs transition-colors", scenarioId === id ? "bg-slate text-porcelain" : "text-porcelain-muted hover:text-porcelain"),
							children: label
						}, id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex rounded-md border border-border p-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setView("film"),
							className: cn("min-h-9 rounded px-2.5 py-1 text-xs", view === "film" ? "bg-slate text-porcelain" : "text-porcelain-muted"),
							children: "Film"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setView("compare");
								setPlaying(false);
							},
							className: cn("min-h-9 rounded px-2.5 py-1 text-xs", view === "compare" ? "bg-slate text-porcelain" : "text-porcelain-muted"),
							children: "Compare paths"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => seekTo(0),
						className: "inline-flex size-9 items-center justify-center rounded-md text-porcelain-subtle hover:bg-slate hover:text-porcelain",
						"aria-label": "Restart",
						disabled: view === "compare",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "size-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPlaying((p) => !p),
						className: "inline-flex size-9 items-center justify-center rounded-md text-porcelain-subtle hover:bg-slate hover:text-porcelain",
						"aria-label": playing ? "Pause" : "Play",
						disabled: reduced || view === "compare",
						children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border bg-void/80 px-3 py-2 text-xs text-porcelain-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-porcelain-subtle",
						children: "Scenario · "
					}),
					scenario.summary,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2 text-porcelain-subtle",
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
						children: [
							trust.symbol,
							" ",
							trust.short
						]
					})
				]
			}),
			view === "film" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border bg-void px-3 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
							children: "Scrub timeline · master clock"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[10px] tabular-nums text-porcelain-muted",
							children: [
								stepIndex + 1,
								"/",
								script.length,
								" · ",
								step.stage
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: script.length - 1,
						step: 1,
						value: stepIndex,
						onChange: (e) => seekTo(Number(e.target.value)),
						className: "demo-scrubber mt-2 w-full",
						"aria-label": "Seek phase"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 flex justify-between gap-1",
						children: script.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => seekTo(i),
							className: cn("min-h-8 flex-1 truncate rounded px-0.5 font-mono text-[9px] uppercase", i === stepIndex ? "text-porcelain" : "text-porcelain-subtle"),
							children: s.stage.slice(0, 4)
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-0.5 overflow-hidden rounded-full bg-slate",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-institution transition-[width] duration-300",
							style: { width: `${progress}%` }
						})
					})
				]
			}) : null,
			view === "compare" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-0 md:grid-cols-3",
				children: [
					[
						"commit",
						"Commit",
						"Authority granted → emit success evidence"
					],
					[
						"denial",
						"Pre-effect denial",
						"Capability denied · no authorized host effect · rollback not asserted"
					],
					[
						"rollback",
						"Post-stage rollback",
						"Mutation staged · validator fails · S₀ restored"
					]
				].map(([id, title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setScenarioId(id);
						setView("film");
						setStepIndex(0);
						setPlaying(true);
					},
					className: "border-b border-border p-4 text-left hover:bg-slate/30 md:border-b-0 md:border-r last:md:border-r-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-porcelain-muted",
							children: body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-[10px] text-institution",
							children: "Play this path →"
						})
					]
				}, id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 lg:grid-cols-[1.05fr_0.95fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border p-4 lg:border-b-0 lg:border-r",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
						children: "Event stream · click to seek"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-1.5",
						children: script.map((s, i) => {
							const active = i === stepIndex;
							const done = i < stepIndex;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => seekTo(i),
								className: cn("flex w-full items-center gap-2 rounded-md border px-2.5 py-2 text-left text-sm", active && "border-institution/50 bg-institution/15", done && !active && "border-border/80 bg-slate/40", !done && !active && "border-border/50 opacity-50"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-porcelain-subtle",
										children: String(i + 1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1 truncate text-porcelain",
										children: [
											s.stage,
											" · ",
											s.type
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
										status: s.maturity,
										compact: true,
										showLabel: false
									})
								]
							}) }, s.id);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
							children: "Runtime console"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-[7.5rem] rounded-md border border-border bg-carbon/80 p-3 font-mono text-[11px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1.5",
								children: projected.events.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: cn("text-porcelain-muted", i === projected.events.length - 1 && "text-porcelain"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-institution",
											children: "›"
										}),
										" ",
										e.log
									]
								}, e.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-md border border-border bg-slate/30 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase text-porcelain-subtle",
										children: atEmit ? "Evidence emit" : "Phase detail"
									}), branchLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("rounded px-1.5 py-0.5 font-mono text-[10px]", branchLabel === "commit" && "bg-oxide/20 text-oxide-fg", (branchLabel === "abort" || branchLabel === "deny") && "bg-controlled-red/20 text-controlled-red-fg"),
										children: branchLabel
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-porcelain-muted",
									children: step.detail
								}),
								scenarioId === "denial" && stepIndex >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 border-l-2 border-controlled-red/40 pl-2 text-[11px] text-porcelain-subtle",
									children: DENIAL_SCOPED_COPY
								}) : null,
								atEmit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									size: "sm",
									variant: "outline",
									onClick: downloadCapsule,
									className: "mt-3 min-h-9",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "Download fixture JSON"]
								}) : null
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionObservatoryLenses, {
				scenarioId,
				stepIndex
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-carbon px-3 py-2.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] leading-relaxed text-porcelain-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-porcelain-muted",
						children: "Stage 0 · "
					}), "Lenses project one immutable event stream. Pre-effect denial never claims rollback; post-stage rollback restores guest state only. External effects are not proven absent. Demo signatures are not production trust anchors."]
				})
			})
		]
	});
}
var TRANSACTION_BEATS = [
	{
		id: "intent",
		href: "#intent",
		label: "Intent",
		gateMetaphor: "Propose",
		connector: "Declare consequential action",
		step: 1
	},
	{
		id: "gap",
		href: "#problem",
		label: "Gap",
		gateMetaphor: "Missing controls",
		connector: "Why a commit boundary exists",
		step: 2
	},
	{
		id: "execute",
		href: "#live-demo",
		label: "Execute",
		gateMetaphor: "Stage → Decide",
		connector: "Watch the boundary run",
		step: 3
	},
	{
		id: "model",
		href: "#change-gate",
		label: "Model",
		gateMetaphor: "Change Gate",
		connector: "Full operating model + maturity",
		step: 4
	},
	{
		id: "evidence",
		href: "#evidence",
		label: "Evidence",
		gateMetaphor: "Emit",
		connector: "Inspect portable proof",
		step: 5
	},
	{
		id: "compose",
		href: "#system",
		label: "Compose",
		gateMetaphor: "Substrates",
		connector: "Nexus · AEON-IQ · Nexus-IQ",
		step: 6
	},
	{
		id: "outcomes",
		href: "#outcomes",
		label: "Outcomes",
		gateMetaphor: "Finished system",
		connector: "What completion enables",
		step: 7
	},
	{
		id: "trust",
		href: "#trust",
		label: "Trust",
		gateMetaphor: "Adversarial read",
		connector: "Security · research · limits",
		step: 8
	},
	{
		id: "evaluate",
		href: "#evaluation",
		label: "Evaluate",
		gateMetaphor: "Commit path",
		connector: "Evidence · code · evaluation",
		step: 9
	}
];
/**
* Sticky scroll progress for the homepage "controlled transaction".
* Spine (collapsed) from page top through the complete DemoPlayer section —
* never expand full labels over DemoPlayer left chrome.
* Full labeled form only after #live-demo has fully scrolled past.
* Mobile: top compact progress.
*/
function TransactionRail() {
	const reduced = useReducedMotion();
	const [activeId, setActiveId] = (0, import_react.useState)(TRANSACTION_BEATS[0].id);
	const [progress, setProgress] = (0, import_react.useState)(0);
	/** Spine through pin + demo; full after demo releases */
	const [spineMode, setSpineMode] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const sections = TRANSACTION_BEATS.map((b) => {
			const el = document.querySelector(b.href);
			return {
				id: b.id,
				el
			};
		}).filter((s) => s.el);
		if (!sections.length) return;
		const observer = new IntersectionObserver((entries) => {
			const top = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (!top?.target?.id) return;
			const beat = TRANSACTION_BEATS.find((b) => b.href === `#${top.target.id}`);
			if (beat) setActiveId(beat.id);
		}, {
			rootMargin: "-20% 0px -45% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		for (const s of sections) if (s.el) observer.observe(s.el);
		function onScroll() {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			if (max <= 0) {
				setProgress(0);
				return;
			}
			setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const update = () => {
			const demo = document.getElementById("live-demo");
			if (!demo) {
				const pin = document.getElementById("intent");
				if (!pin) {
					setSpineMode(false);
					document.documentElement.dataset.txnRail = "full";
					return;
				}
				const rect = pin.getBoundingClientRect();
				const on = rect.bottom > 48 && rect.top < window.innerHeight;
				setSpineMode(on);
				document.documentElement.dataset.txnRail = on ? "spine" : "full";
				return;
			}
			const pastDemo = demo.getBoundingClientRect().bottom < 56;
			setSpineMode(!pastDemo);
			document.documentElement.dataset.txnRail = pastDemo ? "full" : "spine";
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		const demo = document.getElementById("live-demo");
		const pin = document.getElementById("intent");
		const io = new IntersectionObserver(update, { threshold: [
			0,
			.01,
			.1,
			.5,
			1
		] });
		if (demo) io.observe(demo);
		if (pin) io.observe(pin);
		return () => {
			io.disconnect();
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
			delete document.documentElement.dataset.txnRail;
		};
	}, []);
	const activeIndex = Math.max(0, TRANSACTION_BEATS.findIndex((b) => b.id === activeId));
	const active = TRANSACTION_BEATS[activeIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sticky top-14 z-40 border-b border-border bg-void/90 backdrop-blur-md xl:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[72rem] items-center gap-3 px-4 py-2 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-[10px] tabular-nums text-porcelain-subtle",
				children: [
					String(active.step).padStart(2, "0"),
					"/",
					String(TRANSACTION_BEATS.length).padStart(2, "0")
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-xs text-porcelain",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-porcelain-muted",
							children: active.gateMetaphor
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-1.5 text-porcelain-subtle/50",
							children: "·"
						}),
						active.connector
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 h-0.5 overflow-hidden rounded-full bg-slate",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("h-full bg-institution", !reduced && "transition-[width] duration-200 ease-out"),
						style: { width: `${(activeIndex + 1) / TRANSACTION_BEATS.length * 100}%` }
					})
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "pointer-events-none fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 pl-2 xl:block xl:pl-3",
		"aria-label": "Transaction progress",
		"data-rail-mode": spineMode ? "spine" : "full",
		"data-testid": "transaction-rail",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("pointer-events-auto border border-border/80 bg-carbon/95 shadow-[0_16px_48px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md", !reduced && "transition-[width,padding] duration-200 ease-out", spineMode ? "w-11 rounded-lg p-1.5" : "w-[9.5rem] rounded-lg p-2.5"),
			children: [
				!spineMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "Controlled txn"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sr-only",
					children: "Controlled transaction progress"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "relative space-y-0.5",
					children: [!spineMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-2 left-[15px] top-2 w-px bg-border",
						"aria-hidden": true
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-1 left-1/2 top-1 w-px -translate-x-1/2 bg-border",
						"aria-hidden": true
					}), TRANSACTION_BEATS.map((beat, i) => {
						const isActive = beat.id === activeId;
						const isDone = i < activeIndex;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: beat.href,
								title: `${beat.label} — ${beat.gateMetaphor}`,
								className: cn("flex items-start rounded-md transition-colors", spineMode ? "justify-center px-0 py-1.5" : "gap-2 px-1.5 py-1.5", isActive ? "bg-institution/15 text-porcelain" : "text-porcelain-subtle hover:bg-slate/50 hover:text-porcelain-muted"),
								"aria-current": isActive ? "step" : void 0,
								"aria-label": `${beat.label}: ${beat.gateMetaphor}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("relative z-[1] flex shrink-0 items-center justify-center rounded-full border font-mono", spineMode ? "size-4 text-[8px]" : "mt-0.5 size-3.5 text-[8px]", isActive && "border-institution bg-institution text-porcelain", isDone && !isActive && "border-oxide/50 bg-oxide/30 text-oxide-fg", !isActive && !isDone && "border-border bg-void text-porcelain-subtle"),
									"aria-hidden": true,
									children: isDone && !isActive ? "✓" : ""
								}), !spineMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-[11px] font-medium leading-tight",
										children: beat.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate font-mono text-[9px] text-porcelain-subtle",
										children: beat.gateMetaphor
									})]
								}) : null]
							})
						}, beat.id);
					})]
				}),
				!spineMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 border-t border-border pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-0.5 overflow-hidden rounded-full bg-slate",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("h-full bg-institution", !reduced && "transition-[width] duration-150 ease-out"),
							style: { width: `${progress * 100}%` }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 px-0.5 font-mono text-[9px] tabular-nums text-porcelain-subtle",
						children: [Math.round(progress * 100), "% page"]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 px-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto h-8 w-0.5 overflow-hidden rounded-full bg-slate",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full bg-institution",
							style: { height: `${progress * 100}%` }
						})
					})
				})
			]
		})
	})] });
}
/**
* Section chrome that marks each homepage block as a transaction beat.
*/
function TransactionBeatChrome({ beatId, children, className, surface = "runtime" }) {
	const beat = TRANSACTION_BEATS.find((b) => b.id === beatId);
	if (!beat) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	const paper = surface === "paper";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-b px-4 py-2 sm:px-6", paper ? "border-[color:var(--color-border-paper)] bg-archive-muted/40" : "border-border bg-carbon/60"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[72rem] flex-wrap items-center gap-x-3 gap-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("font-mono text-[10px] tabular-nums tracking-wider", paper ? "text-archive-ink-muted" : "text-porcelain-subtle"),
						children: ["TXN ", String(beat.step).padStart(2, "0")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-mono text-[10px] uppercase tracking-[0.12em]", paper ? "text-archive-ink" : "text-porcelain-muted"),
						children: beat.gateMetaphor
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("text-xs", paper ? "text-archive-ink-muted" : "text-porcelain-subtle"),
						children: beat.connector
					})
				]
			})
		}), children]
	});
}
/** Thin connector band between major beats */
function TransactionConnector({ from, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-border bg-void",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[72rem] items-center gap-3 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
					children: [
						from,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-institution",
							children: "→"
						}),
						to
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" })
			]
		})
	});
}
var HYPERVISOR_PHASE_ORDER = [
	"intent",
	"stage",
	"constrain",
	"validate",
	"commit",
	"emit"
];
var HYPERVISOR_PHASE_COPY = {
	intent: {
		title: "Intent is declared—not authorized.",
		body: "The action enters as scope and requested effect. No side effect has crossed the boundary.",
		packetX: 0
	},
	stage: {
		title: "The proposed change becomes a reversible state.",
		body: "A snapshot and isolated working state separate reasoning from irreversible consequence.",
		packetX: 125
	},
	constrain: {
		title: "Authority is bound before execution.",
		body: "Capability chains may narrow permission; recalled memory cannot silently widen it.",
		packetX: 285
	},
	validate: {
		title: "Predicates evaluate the staged result.",
		body: "Policy, health, and deterministic validators determine whether the change may proceed.",
		packetX: 450
	},
	commit: {
		title: "Commit applies only the surviving state transition.",
		body: "The effect crosses the boundary after authority and validation conditions are satisfied.",
		packetX: 620
	},
	abort: {
		title: "Abort is a successful controlled outcome.",
		body: "The staged change is rejected, pre-state is restored where supported, and denial remains inspectable.",
		packetX: 620
	},
	emit: {
		title: "Evidence leaves the boundary with the decision.",
		body: "The Proof Capsule binds observed execution, authority context, recovery, limitations, and optional integrity metadata.",
		packetX: 760
	}
};
/** Map scroll progress 0–1 to hypervisor phase (Commit/Abort both in decide window). */
function hypervisorPhaseFromProgress(p, preferAbort = false) {
	if (p < .16) return "intent";
	if (p < .32) return "stage";
	if (p < .48) return "constrain";
	if (p < .58) return "validate";
	if (p < .8) return preferAbort ? "abort" : "commit";
	return "emit";
}
var PHASE_BUTTONS = [
	{
		id: "intent",
		label: "01 Intent"
	},
	{
		id: "stage",
		label: "02 Stage"
	},
	{
		id: "constrain",
		label: "03 Constrain"
	},
	{
		id: "validate",
		label: "04 Validate"
	},
	{
		id: "commit",
		label: "05 Commit"
	},
	{
		id: "abort",
		label: "05 Abort"
	},
	{
		id: "emit",
		label: "06 Emit"
	}
];
function phaseClass(group, active) {
	const order = HYPERVISOR_PHASE_ORDER;
	const activeIdx = order.indexOf(active === "abort" ? "commit" : active);
	const idx = order.indexOf(group === "abort" ? "commit" : group);
	if (group === active) return "opacity-100";
	if (active === "commit" && group === "abort" || active === "abort" && group === "commit") return "opacity-[0.28]";
	if (idx >= 0 && idx < activeIdx) return "opacity-90";
	return "opacity-[0.28]";
}
function CognitiveHypervisor({ progress, phase: phaseProp, onPhaseChange, interactive = true, className, reducedMotion = false }) {
	const uid = (0, import_react.useId)().replace(/:/g, "");
	const phase = phaseProp ?? hypervisorPhaseFromProgress(reducedMotion ? .94 : progress ?? .04, false);
	const copy = HYPERVISOR_PHASE_COPY[phase];
	const packetX = copy.packetX;
	const titleId = `${uid}-title`;
	const descId = `${uid}-desc`;
	const glassId = `${uid}-glass`;
	const beamId = `${uid}-beam`;
	const microId = `${uid}-micro`;
	const latticeId = `${uid}-lattice`;
	const figureLabel = (0, import_react.useMemo)(() => `FIG-HYP-01 · ${phase.toUpperCase()}`, [phase]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("relative flex h-full w-full flex-col overflow-hidden rounded-none bg-void", className),
		"data-testid": "cognitive-hypervisor",
		"data-phase": phase,
		"data-figure": "FIG-HYP-01",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "sr-only",
				children: [
					"Cognitive Hypervisor product mechanism. ",
					copy.title,
					" ",
					copy.body
				]
			}),
			interactive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-0 right-0 top-0 z-[30] flex flex-wrap gap-1.5 border-b border-border/60 bg-void/95 px-2 py-2 backdrop-blur-sm sm:px-3",
				role: "toolbar",
				"aria-label": "Hypervisor phase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2 hidden font-mono text-[9px] uppercase tracking-[0.14em] text-porcelain-subtle sm:inline",
					children: figureLabel
				}), PHASE_BUTTONS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"data-phase": b.id,
					"aria-pressed": phase === b.id,
					onClick: () => onPhaseChange?.(b.id),
					className: cn("rounded-md border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.06em] transition-colors sm:text-[10px]", phase === b.id ? b.id === "commit" ? "border-oxide/60 bg-oxide/20 text-porcelain" : b.id === "abort" ? "border-controlled-red/60 bg-controlled-red/20 text-porcelain" : "border-institution/50 bg-institution/20 text-porcelain" : "border-border bg-carbon/80 text-porcelain-subtle hover:border-porcelain/25 hover:text-porcelain-muted"),
					children: b.label
				}, b.id))]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("relative min-h-0 flex-1", interactive && "pt-11 sm:pt-12"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1200 675",
					className: "absolute inset-0 h-full w-full",
					role: "img",
					"aria-labelledby": `${titleId} ${descId}`,
					preserveAspectRatio: "xMidYMid meet",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
							id: titleId,
							children: "Cognitive Hypervisor product mechanism"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("desc", {
							id: descId,
							children: "Agent intent enters a staged execution boundary, authority is bound, validators evaluate the proposed change, the action commits or aborts, and a Proof Capsule is emitted."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: glassId,
								x1: "0",
								x2: "1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										stopColor: "#cbe8f2",
										stopOpacity: ".08"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: ".5",
										stopColor: "#83b4c6",
										stopOpacity: ".32"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "1",
										stopColor: "#13222a",
										stopOpacity: ".08"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: beamId,
								x1: "0",
								x2: "1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										stopColor: "#f6f1e7",
										stopOpacity: "0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: ".45",
										stopColor: "#f6f1e7"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "1",
										stopColor: "#5f93a8"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
								id: microId,
								width: "24",
								height: "24",
								patternUnits: "userSpaceOnUse",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M24 0H0V24",
									fill: "none",
									stroke: "#f6f1e7",
									strokeOpacity: ".045"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
								id: latticeId,
								width: "36",
								height: "36",
								patternUnits: "userSpaceOnUse",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M18 0L36 9V27L18 36L0 27V9Z",
									fill: "none",
									stroke: "#5f93a8",
									strokeOpacity: ".19"
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "1200",
							height: "675",
							fill: `url(#${microId})`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							opacity: ".5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M55 105H1145M55 570H1145",
								stroke: "#f6f1e7",
								strokeOpacity: ".12"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M600 55V620",
								stroke: "#f6f1e7",
								strokeOpacity: ".06"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-group": "intent",
							className: cn("transition-opacity duration-300", phaseClass("intent", phase)),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "65",
									y: "130",
									fill: "#7a7670",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "DECLARED INTENT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M70 250C135 250 145 310 215 310M70 310H215M70 370C135 370 145 310 215 310",
									fill: "none",
									stroke: "#f6f1e7",
									strokeOpacity: ".38",
									strokeWidth: "1.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									style: {
										transform: `translateX(${packetX}px)`,
										transition: reducedMotion ? void 0 : "transform 0.55s cubic-bezier(0.22,1,0.36,1)"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "212",
											y: "278",
											width: "92",
											height: "64",
											rx: "8",
											fill: "#111820",
											stroke: "#f6f1e7",
											strokeOpacity: ".55"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M228 296h60M228 309h45M228 322h52",
											stroke: "#f6f1e7",
											strokeOpacity: ".48"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "288",
											cy: "296",
											r: "3",
											fill: "#d4a55f"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "68",
									y: "425",
									fill: "#b8b3a8",
									fontSize: "13",
									children: "Scope + requested effect"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "68",
									y: "447",
									fill: "#7a7670",
									fontSize: "11",
									children: "No authority implied"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M305 310H930",
							stroke: "#f6f1e7",
							strokeOpacity: ".12",
							strokeWidth: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M305 310H930",
							fill: "none",
							stroke: `url(#${beamId})`,
							strokeWidth: "2",
							strokeDasharray: reducedMotion ? void 0 : "5 8",
							className: reducedMotion ? void 0 : "vs-flow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-group": "stage",
							className: cn("transition-opacity duration-300", phaseClass("stage", phase)),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "345",
									y: "130",
									fill: "#7a7670",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "STAGED STATE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "340",
									y: "190",
									width: "120",
									height: "250",
									rx: "12",
									fill: `url(#${glassId})`,
									stroke: "#5f93a8",
									strokeOpacity: ".62"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "360",
									y: "225",
									width: "80",
									height: "70",
									rx: "7",
									fill: "#111820",
									stroke: "#f6f1e7",
									strokeOpacity: ".3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "368",
									y: "233",
									width: "80",
									height: "70",
									rx: "7",
									fill: "none",
									stroke: "#5f93a8",
									strokeOpacity: ".62",
									strokeDasharray: "4 5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M376 326h48M376 340h58M376 354h38",
									stroke: "#b8b3a8",
									strokeOpacity: ".48"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M400 205v-25M400 450v25",
									stroke: "#5f93a8",
									strokeOpacity: ".5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "358",
									y: "410",
									fill: "#b8b3a8",
									fontSize: "11",
									children: "snapshot S₀"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-group": "constrain",
							className: cn("transition-opacity duration-300", phaseClass("constrain", phase)),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "495",
									y: "130",
									fill: "#7a7670",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "AUTHORITY PLANE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "500",
									y: "170",
									width: "132",
									height: "290",
									rx: "12",
									fill: `url(#${latticeId})`,
									stroke: "#5f93a8",
									strokeOpacity: ".72"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M520 310H612",
									stroke: "#f6f1e7",
									strokeOpacity: ".45"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M536 230l28-16 28 16v32l-28 16-28-16z",
									fill: "#2f5e73",
									fillOpacity: ".18",
									stroke: "#5f93a8"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M550 246l9 9 19-23",
									fill: "none",
									stroke: "#75a184",
									strokeWidth: "3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									fill: "#f6f1e7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "522",
											cy: "380",
											r: "3"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "560",
											cy: "395",
											r: "3"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "604",
											cy: "372",
											r: "3"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M522 380L560 395L604 372",
									fill: "none",
									stroke: "#f6f1e7",
									strokeOpacity: ".35"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "517",
									y: "428",
									fill: "#b8b3a8",
									fontSize: "11",
									children: "attenuate, never widen"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-group": "validate",
							className: cn("transition-opacity duration-300", phaseClass("validate", phase)),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "665",
									y: "130",
									fill: "#7a7670",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "VALIDATION ARRAY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "670",
									y: "185",
									width: "130",
									height: "270",
									rx: "12",
									fill: "#111820",
									stroke: "#a9793b",
									strokeOpacity: ".55"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(690 220)",
									children: [
										[
											0,
											52,
											104,
											156
										].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											y,
											width: "90",
											height: "38",
											rx: "6",
											fill: "#1a252d",
											stroke: "#f6f1e7",
											strokeOpacity: ".17"
										}, y)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
											fill: "#d4a55f",
											children: [
												19,
												71,
												123,
												175
											].map((cy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "15",
												cy,
												r: "4"
											}, cy))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
											stroke: "#b8b3a8",
											strokeOpacity: ".45",
											children: [
												19,
												71,
												123,
												175
											].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M28 ${y}h47` }, y))
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-group": "commit",
							className: cn("transition-opacity duration-300", phaseClass("commit", phase)),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "835",
									y: "130",
									fill: "#7a7670",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "CONTROLLED DECISION"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M800 310H850C885 310 885 250 925 250H1000",
									fill: "none",
									stroke: "#75a184",
									strokeWidth: "4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "1000",
									y: "218",
									width: "106",
									height: "64",
									rx: "8",
									fill: "#13201a",
									stroke: "#75a184"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "1021",
									y: "246",
									fill: "#e8f0eb",
									fontFamily: "ui-monospace, monospace",
									fontSize: "12",
									children: "COMMIT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "1017",
									y: "264",
									fill: "#75a184",
									fontSize: "10",
									children: "effects applied"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-group": "abort",
							className: cn("transition-opacity duration-300", phaseClass("abort", phase)),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M800 310H850C885 310 885 390 925 390H1000",
									fill: "none",
									stroke: "#b96464",
									strokeWidth: "4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "1000",
									y: "358",
									width: "106",
									height: "64",
									rx: "8",
									fill: "#231111",
									stroke: "#b96464"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "1024",
									y: "386",
									fill: "#f5eaea",
									fontFamily: "ui-monospace, monospace",
									fontSize: "12",
									children: "ABORT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "1013",
									y: "404",
									fill: "#b96464",
									fontSize: "10",
									children: "restore S₀"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M1000 410C950 500 430 510 400 440",
									fill: "none",
									stroke: "#b96464",
									strokeOpacity: ".45",
									strokeDasharray: "5 7"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-group": "emit",
							className: cn("transition-opacity duration-300", phaseClass("emit", phase)),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "970",
									y: "510",
									fill: "#7a7670",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "EVIDENCE EMISSION"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M1053 282V500M1053 422V500",
									stroke: "#d4a55f",
									strokeOpacity: ".7"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(968 518)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											width: "170",
											height: "98",
											rx: "10",
											fill: "#eee7d8",
											stroke: "#fff",
											strokeOpacity: ".5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M18 28h90M18 42h130M18 56h112M18 70h80",
											stroke: "#4a5560",
											strokeOpacity: ".55"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "122",
											y: "18",
											width: "28",
											height: "28",
											rx: "4",
											fill: "none",
											stroke: "#2f5e73"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M128 32l6 6 11-14",
											fill: "none",
											stroke: "#496f59",
											strokeWidth: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "18",
											y: "88",
											fill: "#4a5560",
											fontFamily: "ui-monospace, monospace",
											fontSize: "8",
											children: "limitations[] · signature · digests"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "65",
							y: "595",
							fill: "#f6f1e7",
							fontFamily: "Georgia, serif",
							fontSize: "22",
							children: copy.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "65",
							y: "623",
							fill: "#b8b3a8",
							fontSize: "13",
							children: copy.body
						})
					]
				})
			})
		]
	});
}
function clamp01(n) {
	return Math.min(1, Math.max(0, n));
}
function phaseOf(p) {
	if (p < .18) return {
		id: "intent",
		label: "Intent"
	};
	if (p < .35) return {
		id: "stage",
		label: "Stage"
	};
	if (p < .5) return {
		id: "constrain",
		label: "Constrain"
	};
	if (p < .58) return {
		id: "validate",
		label: "Validate"
	};
	if (p < .8) return {
		id: "decide",
		label: "Commit · Abort"
	};
	return {
		id: "emit",
		label: "Emit"
	};
}
var CONTENT_GUTTER = "px-4 pb-24 pt-20 sm:px-8 lg:px-12 xl:pl-[var(--txn-content-gutter)] xl:pr-10";
var LAYER_ACTIVE = .1;
/**
* Sticky continuum Intent → Gap.
* Primary instrument: Cognitive Hypervisor (product-native SVG cutaway).
* Forensic Canvas demoted — not rendered as prestige hero.
*/
function PinnedCinematic({ maturityCounts }) {
	const trackRef = (0, import_react.useRef)(null);
	const intentLayerRef = (0, import_react.useRef)(null);
	const gapLayerRef = (0, import_react.useRef)(null);
	const typeSafeRef = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const [progress, setProgress] = (0, import_react.useState)(reduced ? .94 : .04);
	const [phase, setPhase] = (0, import_react.useState)(phaseOf(reduced ? .94 : .04));
	const [manualPhase, setManualPhase] = (0, import_react.useState)(null);
	const [inspectionMode, setInspectionMode] = (0, import_react.useState)(false);
	const lastScrollProgress = (0, import_react.useRef)(progress);
	(0, import_react.useEffect)(() => {
		if (reduced) {
			setProgress(.94);
			setPhase(phaseOf(.94));
			return;
		}
		const el = trackRef.current;
		if (!el) return;
		let frame = 0;
		const measure = () => {
			frame = 0;
			const rect = el.getBoundingClientRect();
			const total = Math.max(1, el.offsetHeight - window.innerHeight);
			const p = clamp01(-rect.top / total);
			setProgress(p);
			setPhase(phaseOf(p));
			if (inspectionMode && Math.abs(p - lastScrollProgress.current) > .02) {
				setInspectionMode(false);
				setManualPhase(null);
			}
			lastScrollProgress.current = p;
		};
		const schedule = () => {
			if (!frame) frame = requestAnimationFrame(measure);
		};
		measure();
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule);
		return () => {
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
			if (frame) cancelAnimationFrame(frame);
		};
	}, [reduced, inspectionMode]);
	(0, import_react.useEffect)(() => {
		const publish = () => {
			const plane = typeSafeRef.current;
			const sticky = trackRef.current?.querySelector("[data-type-safe-host]");
			if (!plane || !sticky) return;
			const pr = plane.getBoundingClientRect();
			const sr = sticky.getBoundingClientRect();
			const right = window.innerHeight > window.innerWidth * .95 ? 0 : Math.max(0, pr.right - sr.left + 12);
			sticky.style.setProperty("--type-safe-right", `${right}px`);
			document.documentElement.style.setProperty("--type-safe-right", `${right}px`);
		};
		publish();
		window.addEventListener("resize", publish);
		window.addEventListener("scroll", publish, { passive: true });
		const ro = new ResizeObserver(publish);
		if (typeSafeRef.current) ro.observe(typeSafeRef.current);
		return () => {
			window.removeEventListener("resize", publish);
			window.removeEventListener("scroll", publish);
			ro.disconnect();
		};
	}, [progress, reduced]);
	const intentOpacity = reduced ? 1 : progress < .12 ? 1 : progress < .28 ? 1 - (progress - .12) / .16 : 0;
	const gapOpacity = reduced ? 0 : progress < .22 ? 0 : progress < .36 ? (progress - .22) / .14 : progress < .55 ? 1 : progress < .64 ? 1 - (progress - .55) / .09 : 0;
	const exitOpacity = reduced ? 0 : clamp01((progress - .82) / .12);
	const showDualExits = reduced || progress >= .58;
	const intentActive = intentOpacity >= LAYER_ACTIVE;
	const gapActive = gapOpacity >= LAYER_ACTIVE;
	const scrollPhase = hypervisorPhaseFromProgress(reduced ? .94 : progress, false);
	const activeHypervisorPhase = manualPhase ?? scrollPhase;
	(0, import_react.useEffect)(() => {
		const active = document.activeElement;
		if (!(active instanceof HTMLElement)) return;
		if (intentLayerRef.current?.contains(active) && !intentActive) active.blur();
		if (gapLayerRef.current?.contains(active) && !gapActive) active.blur();
	}, [intentActive, gapActive]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: trackRef,
		id: "intent",
		className: "relative",
		style: { height: reduced ? "100dvh" : "320vh" },
		"data-testid": "forensic-instrument",
		"data-instrument": "cognitive-hypervisor",
		"data-pin-progress": progress.toFixed(3),
		"data-pin-phase": phase.id,
		"data-control-mode": inspectionMode ? "manual" : "scroll",
		"data-reduced-motion": reduced ? "true" : "false",
		"aria-label": "Cognitive Hypervisor controlled-transaction continuum",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 h-[100dvh] w-full overflow-hidden bg-void",
			"data-type-safe-host": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CognitiveHypervisor, {
						progress,
						phase: activeHypervisorPhase,
						reducedMotion: reduced,
						interactive: true,
						onPhaseChange: (p) => {
							setManualPhase(p);
							setInspectionMode(true);
							lastScrollProgress.current = progress;
						},
						className: "h-full w-full"
					})
				}),
				inspectionMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pointer-events-none absolute bottom-3 left-1/2 z-[35] -translate-x-1/2 rounded-md border border-institution/40 bg-void/90 px-2 py-1 font-mono text-[10px] text-porcelain-muted",
					role: "status",
					"aria-live": "polite",
					children: "Manual inspection · scroll to resume"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: typeSafeRef,
					"data-testid": "type-safe-plane",
					className: cn("pointer-events-none absolute z-[1]", "inset-x-0 bottom-0 top-[48%] sm:top-0 sm:bottom-0 sm:left-0 sm:right-auto", "w-full sm:max-w-[min(100%,34rem)] xl:max-w-[min(38%,30rem)]", "xl:pl-[var(--txn-content-gutter)]"),
					"aria-hidden": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full w-full sm:hidden",
						style: { background: "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--color-void) 70%, transparent) 12%, var(--color-void) 28%, var(--color-void) 100%)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden h-full w-full sm:block",
						style: { background: "linear-gradient(90deg, var(--color-void) 0%, var(--color-void) 72%, color-mix(in oklab, var(--color-void) 80%, transparent) 90%, transparent 100%)" }
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-void via-void/80 to-transparent md:h-32",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: intentLayerRef,
					"data-narrative-layer": "intent",
					"data-narrative-active": intentActive ? "true" : "false",
					className: cn("absolute inset-x-0 bottom-0 top-12 z-[2] flex flex-col justify-end sm:justify-center sm:top-12", CONTENT_GUTTER, "pb-32 transition-opacity duration-300 sm:pb-28", !intentActive && "pointer-events-none"),
					style: { opacity: intentOpacity },
					"aria-hidden": !intentActive,
					...!intentActive ? { inert: true } : {},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl space-y-5 px-1 py-2 sm:px-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-porcelain-subtle",
									children: HERO.categoryLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-x-2 gap-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-sm text-porcelain",
											children: BRAND.product
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-porcelain-subtle/50",
											"aria-hidden": true,
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-porcelain-muted",
											children: POSITIONING.category
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								id: "hero-headline",
								className: "text-hero text-balance font-medium tracking-tight text-porcelain",
								children: HERO.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-prose text-pretty text-base leading-relaxed text-porcelain-muted sm:text-[1.05rem]",
								children: HERO.supportingDefinition
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-prose border-l-2 border-signal/50 pl-3 text-sm leading-relaxed text-porcelain-subtle",
								children: HERO.lossLine
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "default",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#problem",
										children: "See the control gap"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: HERO.primaryCta.href,
										children: HERO.primaryCta.label
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: HERO.modelCta.href,
										className: "text-porcelain-subtle underline-offset-4 transition-colors hover:text-porcelain-muted hover:underline",
										children: HERO.modelCta.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-porcelain-subtle/40",
										"aria-hidden": true,
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/maturity",
										className: "text-porcelain-subtle underline-offset-4 transition-colors hover:text-porcelain-muted hover:underline",
										children: HERO.tertiaryCta.label
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: gapLayerRef,
					"data-narrative-layer": "gap",
					"data-narrative-active": gapActive ? "true" : "false",
					className: cn("absolute inset-x-0 bottom-0 top-12 z-[2] flex flex-col justify-end sm:justify-center sm:top-12", CONTENT_GUTTER, "pb-32 transition-opacity duration-300 sm:pb-28", !gapActive && "pointer-events-none"),
					style: { opacity: gapOpacity },
					"aria-hidden": !gapActive,
					...!gapActive ? { inert: true } : {},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-lg space-y-4 px-1 py-2 sm:px-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-porcelain-subtle",
								children: "The control gap"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-balance font-serif text-3xl text-porcelain sm:text-4xl",
								children: "Intent is not authority"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-pretty text-base leading-relaxed text-porcelain-muted",
								children: PROBLEM.core
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2 pt-2",
								children: PROBLEM.transitions.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-porcelain-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-controlled-red",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-porcelain",
										children: t.missing
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-porcelain-subtle",
										children: " — missing"
									})] })]
								}, t.missing))
							})
						]
					})
				}),
				(reduced || progress > .82) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-testid": "proof-capsule-silhouette",
					"data-instrument-node": "capsule",
					className: cn("pointer-events-none absolute z-[5] rounded-md border border-archive-ink/25 bg-archive px-3 py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]", "right-4 bottom-32 sm:right-10 md:right-[10%] lg:right-[8%]"),
					"aria-hidden": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[9px] uppercase tracking-[0.12em] text-archive-ink/75",
						children: "Proof Capsule"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 w-16 bg-archive-ink/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 w-12 bg-archive-ink/22" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 w-14 bg-archive-ink/18" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("absolute inset-x-0 bottom-0 z-10", "xl:pl-[var(--txn-content-gutter)]"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-[72rem] flex-col gap-3 px-4 pb-5 pt-8 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12 xl:pl-0 xl:pr-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-[0.18em] text-porcelain-subtle",
									children: "Operating model · FIG-HYP-01"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-lg text-porcelain sm:text-xl",
									"data-testid": "operating-model-phase",
									"data-phase-id": phase.id,
									children: phase.label
								}),
								showDualExits ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-porcelain-muted",
									"data-testid": "dual-exit-chrome",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-block size-2.5 rotate-45 bg-controlled-red ring-1 ring-controlled-red-fg/40",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-controlled-red-fg",
												children: "Abort"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-porcelain-subtle",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-block size-2.5 bg-oxide ring-1 ring-oxide-fg/40",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-oxide-fg",
												children: "Commit"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-porcelain-subtle",
											children: "— both first-class"
										})
									]
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[10px] tabular-nums text-porcelain-subtle",
									children: [
										maturityCounts.implemented_foundation,
										" foundation",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mx-1.5 text-porcelain-subtle/40",
											children: "·"
										}),
										maturityCounts.in_integration,
										" integrating"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
									status: "TARGET",
									compact: true,
									showLabel: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase tracking-wider text-porcelain-subtle",
									children: "Mechanism · not scenery"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-0.5 w-full bg-carbon",
						"data-testid": "hero-progress-spine",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-institution transition-[width] duration-100 ease-out",
							style: { width: `${Math.round(progress * 100)}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("pointer-events-none absolute inset-x-0 bottom-16 z-[6] flex justify-center transition-opacity", exitOpacity < .05 && "opacity-0"),
					style: { opacity: exitOpacity },
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-full bg-void/80 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-muted",
						children: "Entering live demonstration"
					})
				})
			]
		})
	});
}
function buildMaturityCounts() {
	return countByPublicStatus(claimsRegistry.capabilities.map((c) => ({ status: toPublicStatus(c.status) })));
}
/**
* Motif-first handoff: emitted capsule/tray remains visible and enters the
* DemoPlayer boundary in the same viewport. Not text + gradient only.
* DemoPlayer remains the interactive proof surface.
*/
function SceneHandoff({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative border-b border-border bg-void",
		"data-testid": "scene-handoff",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none relative z-[1] mx-auto w-full max-w-[72rem] px-4 sm:px-6 xl:pl-[var(--txn-content-gutter)]",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex h-20 max-w-3xl flex-col items-center justify-end sm:h-24",
				"data-instrument-node": "handoff-apparatus",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-8 top-0 h-full rounded-b-xl border border-t-0 border-border/70 bg-carbon/90 sm:inset-x-16",
						style: { boxShadow: "inset 0 -32px 56px color-mix(in oklab, var(--color-void) 70%, transparent), 0 24px 48px -28px rgba(0,0,0,0.75)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-0 h-[70%] w-0.5 -translate-x-1/2",
						style: { background: "linear-gradient(to bottom, color-mix(in oklab, var(--color-institution) 75%, transparent), transparent)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute left-1/2 top-1 h-16 w-full max-w-md -translate-x-1/2 opacity-80",
						viewBox: "0 0 360 70",
						"aria-hidden": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M180 4 C 220 14, 260 12, 310 22",
								fill: "none",
								stroke: "var(--color-controlled-red)",
								strokeWidth: "2.25"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M180 4 C 220 22, 270 42, 315 52",
								fill: "none",
								stroke: "var(--color-oxide)",
								strokeWidth: "2.25"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
								points: "310,14 318,22 310,30 302,22",
								fill: "var(--color-controlled-red)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "307",
								y: "44",
								width: "16",
								height: "16",
								fill: "var(--color-oxide)"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-instrument-node": "handoff-capsule",
						"data-testid": "handoff-capsule",
						className: "relative z-[2] mb-0 flex translate-y-1/2 items-center gap-3 rounded-md border border-archive-ink/20 bg-archive px-4 py-2.5 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.85)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[9px] uppercase tracking-[0.12em] text-archive-ink/70",
								children: "Proof Capsule"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-1 w-10 rounded-sm bg-archive-ink/25" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-1 w-6 rounded-sm bg-archive-ink/20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-1 w-8 rounded-sm bg-archive-ink/15" })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[0.1em] text-archive-ink/55",
							"aria-hidden": true,
							children: "→ live surface"
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-0 pt-8 sm:pt-10",
			children
		})]
	});
}
/**
* Homepage as one controlled transaction:
* Intent → Gap (pinned cinematic) → Execute → Model → Evidence → …
*/
function HomePage() {
	const search = resolveHomeSearch(Route.useSearch());
	const navigate = Route.useNavigate();
	const counts = buildMaturityCounts();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionRail, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinnedCinematic, { maturityCounts: counts }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionBeatChrome, {
				beatId: "gap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneHandoff, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "live-demo",
				className: "relative",
				"aria-labelledby": "demo-heading",
				"data-demo-section": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionBeatChrome, {
					beatId: "execute",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[72rem] px-4 py-10 sm:px-6 sm:py-14 xl:pl-[var(--txn-content-gutter)] xl:pr-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 max-w-2xl space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-porcelain-subtle",
									children: "Product demonstration"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "demo-heading",
									className: "font-serif text-2xl text-porcelain sm:text-3xl",
									children: "Watch a consequential action cross the commit boundary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base leading-relaxed text-porcelain-muted",
									children: "A live product film of the Change Gate — not a marketing video. Scrub any phase, toggle Commit vs Abort, compare both paths, and walk Proof Capsule fields on Emit. Download structure-identical fixtures. Maturity stays on every step."
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoPlayer, {
								scenarioId: search.obs,
								stepIndex: search.stage,
								onScenarioChange: (obs) => navigate({
									search: (prev) => ({
										...prev,
										obs,
										stage: 0
									}),
									replace: true
								}),
								onStepChange: (stage) => navigate({
									search: (prev) => ({
										...prev,
										stage
									}),
									replace: true
								})
							})
						})]
					})
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-carbon",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[72rem] px-4 py-10 sm:px-6 sm:py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
							children: "Why this exists"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base leading-relaxed text-porcelain-muted sm:text-[1.05rem]",
							children: BELIEF.current
						})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-void p-5 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
									children: "Destination architecture"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-porcelain-muted",
									children: BELIEF.targetArchitecture
								})]
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionConnector, {
				from: "Demo complete",
				to: "Full operating model"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionBeatChrome, {
				beatId: "model",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChangeGateSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionConnector, {
				from: "Model inspected",
				to: "Emit evidence"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionBeatChrome, {
				beatId: "evidence",
				surface: "paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionConnector, {
				from: "Evidence reviewed",
				to: "System composition"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionBeatChrome, {
				beatId: "compose",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositionSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionConnector, {
				from: "Layers composed",
				to: "Finished outcomes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionBeatChrome, {
				beatId: "outcomes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutcomesSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionConnector, {
				from: "Outcomes stated",
				to: "Adversarial trust"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionBeatChrome, {
				beatId: "trust",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionConnector, {
				from: "Limits disclosed",
				to: "Evaluation paths"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionBeatChrome, {
				beatId: "evaluate",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvaluationSection, {})
			})
		]
	});
}
//#endregion
export { HomePage as component };
