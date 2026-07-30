import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capsule-anatomy-BxRWEJV_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CAPSULE_FIELD_EXPLAINERS = [
	{
		path: "capsule_id",
		title: "Capsule ID",
		whyItExists: "Stable identifier for this execution receipt so it can be exported, linked, and audited."
	},
	{
		path: "subject",
		title: "Subject",
		whyItExists: "Who/what ran: run id, tool name, wall-clock start/finish, and measured duration."
	},
	{
		path: "tool.module_digest",
		title: "Module digest",
		whyItExists: "Content-addressed identity of the WASM module that executed so verifiers can detect substitution."
	},
	{
		path: "input.digest",
		title: "Input digest",
		whyItExists: "Hash of the tool input. Raw input may be omitted (raw_included=false) while still binding the claim to a digest."
	},
	{
		path: "policy",
		title: "Policy profile",
		whyItExists: "Records which policy profile and enforcement mode applied to this run."
	},
	{
		path: "capabilities",
		title: "Capability evidence",
		whyItExists: "Required vs granted capabilities and any mismatch. Denial paths produce mismatch and often failure + rollback."
	},
	{
		path: "snapshot",
		title: "Snapshot evidence",
		whyItExists: "Pre/post execution snapshot metadata (id, kind, memory digest, sizes) enabling rollback and integrity checks.",
		doesNotMean: "Does not include raw snapshot memory bytes in the capsule."
	},
	{
		path: "failure",
		title: "Failure evidence",
		whyItExists: "Structured failure category, whether rollback is required, and a summarized error (may be redacted)."
	},
	{
		path: "rollback",
		title: "Rollback evidence",
		whyItExists: "Whether rollback occurred, from which snapshot, and why — the recoverability signal for this run."
	},
	{
		path: "redaction",
		title: "Redaction report",
		whyItExists: "Declares which fields were hashed, truncated, removed, or HMAC-bound so consumers know what is hidden."
	},
	{
		path: "limitations",
		title: "Limitations",
		whyItExists: "Mandatory non-empty list of unsupported claims. Always display expanded; never dismissible in the Explorer.",
		doesNotMean: "Presence of a signature does not override these limitations. Capsules remain runtime attestation, not proof of correctness."
	},
	{
		path: "memory_mode",
		title: "Memory attestation mode",
		whyItExists: "Whether AEON-IQ memory was consulted and at what assurance (Attested, Advisory, Absent, Degraded, etc.).",
		doesNotMean: "Advisory/Absent/Degraded modes must not be read as full cryptographic memory binding."
	},
	{
		path: "signature",
		title: "Signature envelope",
		whyItExists: "Optional Ed25519 (or similar) signature over the payload digest, with signer and key id.",
		doesNotMean: "Demo fixtures use non-production signatures. Production trust anchors and external anchoring are Target / In Integration."
	}
];
var ANATOMY = [
	{
		path: "subject",
		zone: "A",
		x: 8,
		y: 12,
		w: 42,
		h: 22
	},
	{
		path: "tool.module_digest",
		zone: "B",
		x: 54,
		y: 12,
		w: 38,
		h: 22
	},
	{
		path: "capabilities",
		zone: "C",
		x: 8,
		y: 38,
		w: 28,
		h: 24
	},
	{
		path: "snapshot",
		zone: "D",
		x: 40,
		y: 38,
		w: 28,
		h: 24
	},
	{
		path: "failure",
		zone: "E",
		x: 72,
		y: 38,
		w: 20,
		h: 24
	},
	{
		path: "limitations",
		zone: "F",
		x: 8,
		y: 66,
		w: 50,
		h: 26
	},
	{
		path: "signature",
		zone: "G",
		x: 62,
		y: 66,
		w: 30,
		h: 26
	}
];
/**
* Paper-surface Proof Capsule anatomy — field zones with explainers.
*/
function CapsuleAnatomy({ className }) {
	const [active, setActive] = (0, import_react.useState)("limitations");
	const field = CAPSULE_FIELD_EXPLAINERS.find((f) => f.path === active) ?? CAPSULE_FIELD_EXPLAINERS.find((f) => f.path === "limitations");
	const zone = ANATOMY.find((a) => a.path === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
		title: "Proof Capsule anatomy",
		refId: "FIG-CAP-03 · schema zones",
		classification: "EVIDENCE DOSSIER",
		surface: "paper",
		className,
		footer: "limitations[] is mandatory and non-dismissible. Signatures on demo fixtures are not production trust anchors.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-[1.15fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[16/11] w-full overflow-hidden rounded-lg border border-archive-ink/15 bg-archive/80",
				role: "img",
				"aria-label": "Proof Capsule field layout diagram",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-0 flex items-center justify-between border-b border-archive-ink/10 px-3 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[9px] uppercase tracking-[0.12em] text-archive-ink-muted",
						children: "proof_capsule · v1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[9px] text-archive-ink-muted",
						children: "runtime attestation"
					})]
				}), ANATOMY.map((a) => {
					const selected = a.path === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActive(a.path),
						className: cn("absolute rounded border text-left transition-[background-color,box-shadow,border-color] duration-200", selected ? "border-institution/60 bg-institution/15 shadow-sm" : "border-archive-ink/15 bg-white/40 hover:border-archive-ink/30"),
						style: {
							left: `${a.x}%`,
							top: `${a.y}%`,
							width: `${a.w}%`,
							height: `${a.h}%`
						},
						"aria-pressed": selected,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block px-1.5 pt-1 font-mono text-[9px] text-archive-ink-muted",
							children: a.zone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate px-1.5 font-mono text-[10px] text-archive-ink sm:text-[11px]",
							children: a.path.split(".").pop()
						})]
					}, a.path);
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col rounded-lg border border-archive-ink/15 bg-white/50 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg text-archive-ink",
							children: field?.title ?? active
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
							className: "font-mono text-[10px] text-archive-ink-muted",
							children: [
								"zone ",
								zone?.zone ?? "—",
								" · ",
								active
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-archive-ink-muted",
						children: field?.whyItExists
					}),
					field?.doesNotMean ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 border-l-2 border-controlled-red/40 pl-3 text-xs leading-relaxed text-archive-ink-muted",
						children: ["Does not mean: ", field.doesNotMean]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: ANATOMY.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive(a.path),
							className: cn("rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide", a.path === active ? "border-institution/50 bg-institution/10 text-archive-ink" : "border-archive-ink/15 text-archive-ink-muted hover:border-archive-ink/30"),
							children: a.zone
						}) }, a.path))
					})
				]
			})]
		})
	});
}
//#endregion
export { CapsuleAnatomy as n, CAPSULE_FIELD_EXPLAINERS as t };
