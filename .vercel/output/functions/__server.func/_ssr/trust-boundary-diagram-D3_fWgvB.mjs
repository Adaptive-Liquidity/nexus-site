import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trust-boundary-diagram-D3_fWgvB.js
var import_jsx_runtime = require_jsx_runtime();
var ZONES = [
	{
		id: "enforced",
		title: "Enforced today",
		tone: "oxide",
		items: [
			"Capability-gated WASM paths",
			"Snap-rollback isolation",
			"Denial on missing authority",
			"Proof Capsule generation"
		]
	},
	{
		id: "bound",
		title: "Cryptographically bound",
		tone: "institution",
		items: [
			"Module / input digests",
			"Capability tokens (Ed25519)",
			"Optional payload signatures",
			"Memory evidence when Attested"
		]
	},
	{
		id: "trusted",
		title: "Still trusted",
		tone: "signal",
		items: [
			"Host OS & operators",
			"Key material custody",
			"Nexus runtime boundary",
			"Demo signing anchors"
		]
	},
	{
		id: "not",
		title: "Not established",
		tone: "red",
		items: [
			"Correctness of agent intent",
			"Absence of all external effects",
			"Production trust anchors (Target)",
			"Full Change Gate commit barrier"
		]
	}
];
var TONE_CLASS = {
	oxide: {
		border: "border-oxide/35",
		bg: "bg-oxide/10",
		label: "text-oxide-fg",
		dot: "bg-oxide"
	},
	institution: {
		border: "border-institution/40",
		bg: "bg-institution/10",
		label: "text-porcelain",
		dot: "bg-institution"
	},
	signal: {
		border: "border-signal/35",
		bg: "bg-signal/10",
		label: "text-signal",
		dot: "bg-signal"
	},
	red: {
		border: "border-controlled-red/35",
		bg: "bg-controlled-red/10",
		label: "text-controlled-red-fg",
		dot: "bg-controlled-red"
	}
};
/**
* Four-quadrant trust boundary map for evaluators.
*/
function TrustBoundaryDiagram({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
		title: "Trust boundary map",
		refId: "FIG-TRU-04 · evaluator frame",
		classification: "STAGE 0 HONEST",
		className,
		footer: "Advisory memory modes and demo signatures never upgrade into cryptographic guarantees on this map.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: ZONES.map((z) => {
				const t = TONE_CLASS[z.tone];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-lg border ${t.border} ${t.bg} p-3.5`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2.5 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `size-2 rounded-full ${t.dot}`,
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `font-mono text-[10px] uppercase tracking-[0.12em] ${t.label}`,
							children: z.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1.5",
						children: z.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm leading-snug text-porcelain-muted",
							children: item
						}, item))
					})]
				}, z.id);
			})
		})
	});
}
//#endregion
export { TrustBoundaryDiagram as t };
