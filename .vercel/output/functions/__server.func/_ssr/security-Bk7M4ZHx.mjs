import { d as STAGE_0_NOTE, n as BRAND } from "./site-copy-BRpXPyRy.mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
import { t as TrustBoundaryDiagram } from "./trust-boundary-diagram-D3_fWgvB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/security-Bk7M4ZHx.js
var import_jsx_runtime = require_jsx_runtime();
var ANSWERS = [
	{
		q: "What does Nexus-IQ enforce?",
		a: "On Implemented Foundation paths: capability-gated WASM execution, snap-rollback isolation, policy structures, and signed runtime evidence (Proof Capsules). The full Transactional Change Gate commit barrier remains In Integration under Stage 0."
	},
	{
		q: "What remains trusted?",
		a: "Host OS, operators, key material custody, and the Nexus runtime boundary. Capsules explicitly list trust of the Nexus runtime and host — they do not eliminate residual trust."
	},
	{
		q: "What is cryptographically bound?",
		a: "Module and input digests, Ed25519 capability tokens, optional payload signatures, and memory evidence when attestation modes permit. Demo fixtures use non-production signing anchors."
	},
	{
		q: "What is advisory?",
		a: "Memory context under Advisory, Degraded, or Absent modes. Incomplete binding must never be read as full cryptographic memory attestation."
	},
	{
		q: "What can be rolled back?",
		a: "WASM guest execution state captured in snapshots (linear memory, globals, tables metadata). Capability denial paths can restore pre-execution snapshots when requires_rollback is set."
	},
	{
		q: "What external effects remain outside direct rollback?",
		a: "Effects that escaped the isolation boundary before abort (network side effects, external commits). Compensation is Target Architecture for irreversible external actions."
	},
	{
		q: "Which keys establish identity versus payload integrity?",
		a: "Capability tokens authorize attenuated actions. Capsule signatures bind payload digests. Production identity, rotation, and external anchoring are Target / In Integration — not claimed as complete."
	},
	{
		q: "What changes when Stage 0 closes?",
		a: "End-to-end transactional guarantees and full memory-state binding become defensible as a completed product path. Until then, foundations ship with explicit maturity and residual-risk disclosure."
	}
];
function SecurityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-w-0 max-w-[72rem] space-y-10 overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle",
						children: "Security"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl text-porcelain sm:text-4xl",
						children: "Trust boundaries for evaluators"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-porcelain-muted",
						children: "Security is organized around evaluation questions—not a compliance logo wall. Every answer separates what is enforced, what is still trusted, and what Stage 0 still blocks."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-porcelain-muted",
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
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBoundaryDiagram, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
				title: "Evaluation questions",
				refId: "SEC-Q-01 · residual risk",
				classification: "ADVERSARIAL READ",
				footer: "If a claim cannot answer these questions, it is not ready for enterprise evaluation.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: ANSWERS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-border bg-void/50 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] tabular-nums text-porcelain-subtle",
								children: ["Q", String(i + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium text-porcelain",
								children: item.q
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-porcelain-muted",
								children: item.a
							})
						]
					}, item.q))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/evidence/claims",
							children: "Claims with limitations"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/evidence/proof-capsules",
							children: "Inspect Proof Capsules"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BRAND.githubNexus,
							target: "_blank",
							rel: "noreferrer",
							children: "Nexus source"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { SecurityPage as component };
