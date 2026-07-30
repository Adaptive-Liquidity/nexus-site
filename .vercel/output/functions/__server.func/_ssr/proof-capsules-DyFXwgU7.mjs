import { r as __toESM } from "../_runtime.mjs";
import { r as CAPSULE_HONESTY } from "./site-copy-BRpXPyRy.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { n as sampleCapsules } from "./content-BpadpKYG.mjs";
import { n as MaturityBadge } from "./maturity-badge-BLweOVLC.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as CapsuleAnatomy, t as CAPSULE_FIELD_EXPLAINERS } from "./capsule-anatomy-BxRWEJV_.mjs";
import { t as Reveal } from "./reveal-DF2H-Eyx.mjs";
import { a as ShieldAlert, d as FileJson, g as Check, m as Copy, p as Download, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/proof-capsules-DyFXwgU7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getByPath(obj, path) {
	if (!path) return obj;
	const parts = path.split(".");
	let cur = obj;
	for (const p of parts) {
		if (cur == null || typeof cur !== "object") return void 0;
		cur = cur[p];
	}
	return cur;
}
function formatCapsuleValue(value) {
	if (value === void 0) return "— (absent)";
	if (value === null) return "null";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean") return String(value);
	try {
		return JSON.stringify(value, null, 2);
	} catch {
		return String(value);
	}
}
/**
* Non-cryptographic structural checks for educational inspection.
* Never claims production signature verification.
*/
function runStructuralChecks(capsule) {
	const limitations = capsule.limitations;
	const hasLimitations = Array.isArray(limitations) && limitations.length > 0;
	const sig = capsule.signature;
	const sigStr = String(sig?.signature ?? "");
	const isDemoSig = !sig || sigStr.includes("DEMO_SIGNATURE") || String(sig.signer ?? "").includes("demo");
	const caps = capsule.capabilities;
	const failure = capsule.failure;
	const rollback = capsule.rollback;
	const rollbackConsistent = !failure?.requires_rollback || Boolean(rollback?.occurred);
	return [
		{
			id: "capsule_id",
			label: "capsule_id present",
			pass: typeof capsule.capsule_id === "string" && capsule.capsule_id.length > 0,
			detail: "Stable receipt identity required for export and audit linkage."
		},
		{
			id: "limitations",
			label: "limitations[] non-empty",
			pass: hasLimitations,
			detail: hasLimitations ? `${limitations.length} mandatory entries` : "Missing limitations violates Proof Capsule contract"
		},
		{
			id: "subject",
			label: "subject.run_id + tool_name",
			pass: Boolean(capsule.subject && typeof capsule.subject.run_id === "string" && typeof capsule.subject.tool_name === "string"),
			detail: "Binds the receipt to a concrete tool invocation."
		},
		{
			id: "capabilities",
			label: "capabilities required/granted arrays",
			pass: Boolean(caps && Array.isArray(caps.required) && Array.isArray(caps.granted)),
			detail: "Authority evidence shape present for audit of grants vs needs."
		},
		{
			id: "rollback_consistency",
			label: "rollback aligns with failure.requires_rollback",
			pass: rollbackConsistent,
			detail: rollbackConsistent ? "Failure/rollback relationship is consistent in this fixture" : "requires_rollback true but rollback.occurred is false"
		},
		{
			id: "signature_demo",
			label: "signature classified as demo / non-production",
			pass: isDemoSig,
			detail: isDemoSig ? "Demo placeholder detected — not a production trust anchor" : "Signature does not match demo pattern; still not cryptographically verified in-browser"
		}
	];
}
function downloadJson(data, fileName) {
	const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = fileName;
	a.click();
	URL.revokeObjectURL(url);
}
async function copyText(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}
var SCENARIOS = [{
	id: "success",
	label: "Successful execution",
	fileName: "success.capsule.json",
	capsule: sampleCapsules.success
}, {
	id: "failure",
	label: "Capability denied → rollback",
	fileName: "failure-rollback.capsule.json",
	capsule: sampleCapsules.failureRollback
}];
var NAV_FIELDS = CAPSULE_FIELD_EXPLAINERS.map((f) => f.path);
/**
* Full Proof Capsule Explorer — institutional evidence product surface.
* Inspect fields, mandatory limitations, structural checks, download fixtures.
*/
function ProofCapsuleExplorer({ className }) {
	const [scenarioId, setScenarioId] = (0, import_react.useState)("success");
	const [fieldPath, setFieldPath] = (0, import_react.useState)("limitations");
	const [view, setView] = (0, import_react.useState)("inspect");
	const [copied, setCopied] = (0, import_react.useState)(null);
	const scenario = SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0];
	const capsule = scenario.capsule;
	const explainer = CAPSULE_FIELD_EXPLAINERS.find((e) => e.path === fieldPath) ?? CAPSULE_FIELD_EXPLAINERS.find((e) => e.path === "limitations");
	const fieldValue = getByPath(capsule, fieldPath);
	const checks = (0, import_react.useMemo)(() => runStructuralChecks(capsule), [capsule]);
	const checksPass = checks.filter((c) => c.pass).length;
	const limitations = capsule.limitations ?? [];
	const subject = capsule.subject;
	const failure = capsule.failure;
	const rollback = capsule.rollback;
	const meta = capsule._meta;
	async function onCopy(text, key) {
		if (await copyText(text)) {
			setCopied(key);
			window.setTimeout(() => setCopied(null), 1600);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("min-w-0 space-y-6", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-4 border-b border-border pb-6 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: "CURRENT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: "IN_DEVELOPMENT" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl text-porcelain sm:text-3xl",
							children: "Proof Capsule Explorer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-porcelain-muted",
							children: "Inspect structure-identical runtime receipts: field-by-field meaning, mandatory limitations[], and structural integrity checks. Production cryptographic verification and durable trust anchors remain separate maturity claims."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-porcelain-subtle",
							children: CAPSULE_HONESTY.explorerUiStatus
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: () => downloadJson(capsule, scenario.fileName),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-3.5",
							"aria-hidden": true
						}), "Download capsule"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "secondary",
						size: "sm",
						onClick: () => onCopy(JSON.stringify(capsule, null, 2), "full-json"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
							className: "size-3.5",
							"aria-hidden": true
						}), copied === "full-json" ? "Copied" : "Copy JSON"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap rounded-lg border border-border p-0.5",
					role: "tablist",
					"aria-label": "Capsule scenario",
					children: SCENARIOS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": scenarioId === s.id,
						onClick: () => {
							setScenarioId(s.id);
							setFieldPath(s.id === "failure" ? "failure" : "limitations");
						},
						className: cn("min-h-9 rounded-md px-3 py-1.5 text-sm transition-colors", scenarioId === s.id ? "bg-slate text-porcelain" : "text-porcelain-muted hover:text-porcelain"),
						children: s.label
					}, s.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex rounded-lg border border-border p-0.5",
					role: "tablist",
					"aria-label": "Explorer view",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": view === "inspect",
						onClick: () => setView("inspect"),
						className: cn("min-h-9 rounded-md px-3 py-1.5 text-sm transition-colors", view === "inspect" ? "bg-slate text-porcelain" : "text-porcelain-muted hover:text-porcelain"),
						children: "Inspect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": view === "json",
						onClick: () => setView("json"),
						className: cn("min-h-9 rounded-md px-3 py-1.5 text-sm transition-colors", view === "json" ? "bg-slate text-porcelain" : "text-porcelain-muted hover:text-porcelain"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileJson, {
							className: "mr-1.5 inline size-3.5",
							"aria-hidden": true
						}), "Raw JSON"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaChip, {
						label: "capsule_id",
						value: String(capsule.capsule_id).slice(0, 13) + "…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaChip, {
						label: "tool",
						value: String(subject.tool_name ?? "—")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaChip, {
						label: "duration_ms",
						value: String(subject.duration_ms ?? "—")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaChip, {
						label: "outcome",
						value: failure ? `${failure.failure_category ?? "failure"}${rollback?.occurred ? " + rollback" : ""}` : "success",
						tone: failure ? "abort" : "commit"
					})
				]
			}),
			view === "json" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-surface": "paper",
				className: "surface-paper min-w-0 max-w-full overflow-hidden rounded-xl border border-[color:var(--color-border-paper)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-[color:var(--color-border-paper)] px-4 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.12em] text-archive-ink-muted",
						children: scenario.fileName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onCopy(JSON.stringify(capsule, null, 2), "raw-json"),
						className: "font-mono text-[10px] text-archive-ink-muted underline-offset-2 hover:underline",
						children: copied === "raw-json" ? "Copied" : "Copy"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "max-h-[36rem] overflow-auto p-4 font-mono text-[11px] leading-relaxed text-archive-ink break-all whitespace-pre-wrap",
					children: JSON.stringify(capsule, null, 2)
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)_minmax(0,0.95fr)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-carbon",
						"aria-label": "Capsule fields",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-border px-3 py-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
								children: "Schema fields"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "max-h-[32rem] space-y-0.5 overflow-y-auto p-2",
							children: NAV_FIELDS.map((path) => {
								const exp = CAPSULE_FIELD_EXPLAINERS.find((e) => e.path === path);
								const active = path === fieldPath;
								const val = getByPath(capsule, path);
								const empty = val === null || val === void 0 || Array.isArray(val) && val.length === 0;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setFieldPath(path),
									className: cn("flex w-full items-start gap-2 rounded-md px-2.5 py-2 text-left transition-colors", active ? "bg-institution/20 text-porcelain" : "text-porcelain-muted hover:bg-slate/50 hover:text-porcelain"),
									"aria-current": active ? "true" : void 0,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("mt-1 size-1.5 shrink-0 rounded-full", empty ? "bg-porcelain-subtle" : "bg-oxide", path === "limitations" && "bg-signal"),
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm font-medium",
											children: exp?.title ?? path
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate font-mono text-[10px] text-porcelain-subtle",
											children: path
										})]
									})]
								}) }, path);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-surface": "paper",
						className: "surface-paper flex min-h-[28rem] min-w-0 max-w-full flex-col overflow-hidden rounded-xl border border-[color:var(--color-border-paper)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-2 border-b border-[color:var(--color-border-paper)] px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.12em] text-archive-ink-muted",
										children: "Field record"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-serif text-xl text-archive-ink",
										children: explainer.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "mt-1 block font-mono text-[11px] text-archive-ink-muted",
										children: fieldPath
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => onCopy(fieldPath, "path"),
									className: "inline-flex min-h-9 items-center gap-1.5 rounded-md border border-archive-ink/15 px-2.5 text-xs text-archive-ink-muted hover:bg-archive-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
										className: "size-3.5",
										"aria-hidden": true
									}), copied === "path" ? "Copied" : "Copy path"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 space-y-4 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-medium uppercase tracking-wide text-archive-ink",
										children: "Why it exists"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm leading-relaxed text-archive-ink-muted",
										children: explainer.whyItExists
									})] }),
									explainer.doesNotMean ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-md border border-controlled-red/25 bg-controlled-red/5 px-3 py-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-archive-ink",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
												className: "size-3.5",
												"aria-hidden": true
											}), "Does not mean"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-relaxed text-archive-ink-muted",
											children: explainer.doesNotMean
										})]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-medium uppercase tracking-wide text-archive-ink",
										children: "Value in this capsule"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "mt-1.5 max-h-48 overflow-auto rounded-md border border-archive-ink/10 bg-white/50 p-3 font-mono text-[11px] leading-relaxed text-archive-ink",
										children: formatCapsuleValue(fieldValue)
									})] }),
									fieldPath !== "limitations" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-md border border-signal/30 bg-signal/5 px-3 py-2.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-medium uppercase tracking-wide text-archive-ink",
												children: "limitations[] · always in scope"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-archive-ink-muted",
												children: [limitations.length, " mandatory entries — open Limitations field for full list (never dismissible)."]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setFieldPath("limitations"),
												className: "mt-2 font-mono text-[11px] text-archive-ink underline-offset-2 hover:underline",
												children: "Jump to limitations[]"
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-medium uppercase tracking-wide text-archive-ink",
										children: "Full limitations[] · expanded"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 max-h-56 space-y-1 overflow-y-auto rounded-md border border-archive-ink/10 bg-white/40 p-3 font-mono text-[11px] text-archive-ink-muted",
										children: limitations.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-controlled-red",
												"aria-hidden": true,
												children: "!"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l })]
										}, l))
									})] })
								]
							}),
							meta?.honesty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-[color:var(--color-border-paper)] px-4 py-2.5 text-xs leading-relaxed text-archive-ink-muted",
								children: [
									"Fixture honesty · as of ",
									meta.asOf ?? "—",
									": ",
									meta.honesty
								]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "min-w-0 max-w-full space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-carbon",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border px-3 py-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
											children: "Structural checks"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[10px] tabular-nums text-porcelain-muted",
											children: [
												checksPass,
												"/",
												checks.length
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2 p-3",
										children: checks.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "rounded-md border border-border bg-void/40 px-2.5 py-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-2",
												children: [c.pass ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													className: "mt-0.5 size-3.5 shrink-0 text-oxide",
													"aria-hidden": true
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
													className: "mt-0.5 size-3.5 shrink-0 text-controlled-red",
													"aria-hidden": true
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm text-porcelain",
														children: c.label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-0.5 text-[11px] leading-relaxed text-porcelain-subtle",
														children: c.detail
													})]
												})]
											})
										}, c.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "border-t border-border px-3 py-2 text-[11px] leading-relaxed text-porcelain-subtle",
										children: "These checks validate fixture structure in the browser. They do not perform production signature verification or external anchoring."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-void p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
										children: "Evidence boundary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm leading-relaxed text-porcelain-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-porcelain",
											children: "Proves: "
										}), CAPSULE_HONESTY.proves]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-1.5",
										children: CAPSULE_HONESTY.doesNotProve.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2 text-xs leading-relaxed text-porcelain-subtle",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-controlled-red",
												"aria-hidden": true,
												children: "!"
											}), item]
										}, item))
									})
								]
							}),
							failure ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-controlled-red/35 bg-controlled-red/10 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.12em] text-controlled-red-fg",
										children: "Failure path"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-porcelain",
										children: failure.failure_category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-relaxed text-porcelain-muted",
										children: failure.error_summary
									})
								]
							}) : null
						]
					})
				]
			})
		]
	});
}
function MetaChip({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-carbon px-3 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("mt-1 truncate font-mono text-sm", tone === "abort" && "text-controlled-red-fg", tone === "commit" && "text-oxide-fg", !tone && "text-porcelain"),
			children: value
		})]
	});
}
var FIELDS = [
	{
		id: "subject",
		label: "Subject"
	},
	{
		id: "authority",
		label: "Authority"
	},
	{
		id: "state",
		label: "Snapshot"
	},
	{
		id: "failure",
		label: "Failure / rollback"
	},
	{
		id: "limits",
		label: "Limitations"
	},
	{
		id: "signature",
		label: "Signature"
	}
];
var COPY = {
	subject: {
		title: "Subject: bind the record to the observed execution.",
		body: "This establishes which tool/module and input digest the runtime says it observed—not that the program’s result was correct."
	},
	authority: {
		title: "Authority: record what was required, granted, or denied.",
		body: "This supports an authorization claim only within the disclosed runtime, token, key, and policy trust boundaries."
	},
	state: {
		title: "State: connect the decision to a recoverable execution context.",
		body: "A snapshot identifier supports rollback provenance; it does not contain or prove the full external world state."
	},
	failure: {
		title: "Failure and rollback: preserve the negative path as evidence.",
		body: "Abort, denial, and recovery remain first-class outcomes rather than disappearing as an error message."
	},
	limits: {
		title: "Limitations: bind interpretation to what is not established.",
		body: "The non-empty limitations array is part of the artifact’s meaning, not dismissible legal copy."
	},
	signature: {
		title: "Signature: optional integrity binding — not a production trust anchor by default.",
		body: "Portable evidence record, optionally Ed25519-signed. Inspect signer identity, key source/custody, verification status, covered fields, and whether durable production anchors exist (Target). Demo/fixture signatures must never be read as production trust."
	}
};
function EvidenceLattice({ className }) {
	const [field, setField] = (0, import_react.useState)("subject");
	const uid = (0, import_react.useId)().replace(/:/g, "");
	const copy = COPY[field];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl border border-border bg-archive text-archive-ink", className),
		"data-testid": "evidence-lattice",
		"data-figure": "FIG-EVD-04",
		"data-field": field,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-archive-ink/15 bg-archive-muted/40 px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-archive-ink-muted",
					children: "FIG-EVD-04 · Proof Capsule lattice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-archive-ink-muted",
					children: "Field-level binding · not a pill-shaped object"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					role: "toolbar",
					"aria-label": "Capsule field",
					children: FIELDS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-field": f.id,
						"aria-pressed": field === f.id,
						onClick: () => setField(f.id),
						className: cn("rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.05em]", field === f.id ? "border-institution/50 bg-institution/15 text-archive-ink" : "border-archive-ink/15 text-archive-ink-muted hover:border-archive-ink/30"),
						children: f.label
					}, f.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[16/11] w-full bg-archive sm:aspect-video",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1200 675",
					className: "absolute inset-0 h-full w-full",
					role: "img",
					"aria-labelledby": `${uid}-title`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
							id: `${uid}-title`,
							children: "Proof Capsule field binding lattice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "1200",
							height: "675",
							fill: "#eee7d8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							opacity: ".16",
							children: [[
								80,
								160,
								240,
								320,
								400,
								480,
								560
							].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: `M0 ${y}H1200`,
								stroke: "#1a1f24"
							}, y)), [
								100,
								300,
								500,
								700,
								900,
								1100
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: `M${x} 0V675`,
								stroke: "#1a1f24"
							}, x))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "390",
								y: "90",
								width: "420",
								height: "495",
								rx: "18",
								fill: "#f8f3e8",
								stroke: "#1a1f24",
								strokeOpacity: ".22"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "390",
								y: "90",
								width: "420",
								height: "62",
								rx: "18",
								fill: "#e2d8c6"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M390 152H810",
								stroke: "#1a1f24",
								strokeOpacity: ".18"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "425",
								y: "126",
								fill: "#1a1f24",
								fontFamily: "ui-monospace, monospace",
								fontSize: "13",
								letterSpacing: "2",
								children: "PROOF CAPSULE · V1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: "748",
								y: "126",
								fill: "#4a5560",
								fontFamily: "ui-monospace, monospace",
								fontSize: "9",
								children: "STRUCTURED RECORD"
							}),
							[
								["subject", 180],
								["authority", 250],
								["state", 320],
								["failure", 390]
							].map(([id, y]) => {
								const on = field === id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "425",
									y,
									width: "350",
									height: "56",
									rx: "8",
									fill: on ? "#e3edf1" : "#fff",
									fillOpacity: on ? .85 : .45,
									stroke: on ? "#2f5e73" : "#1a1f24",
									strokeOpacity: on ? 1 : .2
								}, id);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "425",
								y: "460",
								width: "215",
								height: "88",
								rx: "8",
								fill: field === "limits" ? "#e3edf1" : "#fff",
								fillOpacity: field === "limits" ? .85 : .45,
								stroke: field === "limits" ? "#2f5e73" : "#1a1f24",
								strokeOpacity: field === "limits" ? 1 : .2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "652",
								y: "460",
								width: "123",
								height: "88",
								rx: "8",
								fill: field === "signature" ? "#e3edf1" : "#fff",
								fillOpacity: field === "signature" ? .85 : .45,
								stroke: field === "signature" ? "#2f5e73" : "#1a1f24",
								strokeOpacity: field === "signature" ? 1 : .2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								fill: "#1a1f24",
								fontFamily: "ui-monospace, monospace",
								fontSize: "10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "203",
										children: "subject + tool + input digest"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "222",
										fill: "#4a5560",
										children: "what ran · against what input"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "273",
										children: "capabilities + policy mode"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "292",
										fill: "#4a5560",
										children: "required · granted · mismatch"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "343",
										children: "snapshot + execution state"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "362",
										fill: "#4a5560",
										children: "pre-state identifier · recovery source"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "413",
										children: "failure + rollback"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "432",
										fill: "#4a5560",
										children: "classification · occurred · restored"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "485",
										children: "limitations[]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "505",
										fill: "#4a5560",
										children: "mandatory"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "445",
										y: "525",
										fill: "#4a5560",
										children: "non-dismissible"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "670",
										y: "485",
										children: "signature"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "670",
										y: "505",
										fill: "#4a5560",
										children: "optional"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "670",
										y: "525",
										fill: "#4a5560",
										children: "trust-bound"
									})
								]
							})
						] }),
						[
							{
								id: "subject",
								x: 70,
								y: 145,
								t1: "OBSERVED EXECUTION",
								t2: "module · tool · duration · digests",
								path: "M290 180H425",
								stroke: "#2f5e73"
							},
							{
								id: "authority",
								x: 70,
								y: 260,
								t1: "AUTHORITY CONTEXT",
								t2: "tokens · attenuation · denial",
								path: "M290 295H425",
								stroke: "#1a1f24"
							},
							{
								id: "state",
								x: 70,
								y: 375,
								t1: "STATE CONTEXT",
								t2: "snapshot · branch · memory mode",
								path: "M290 410H425",
								stroke: "#1a1f24"
							},
							{
								id: "failure",
								x: 910,
								y: 165,
								t1: "RECOVERY EVIDENCE",
								t2: "failure class · rollback source",
								path: "M810 418H865V200H910",
								stroke: "#1a1f24"
							},
							{
								id: "limits",
								x: 910,
								y: 300,
								t1: "NEGATIVE CLAIM BOUNDARY",
								t2: "what the record does not establish",
								path: "M640 504H860V345H910",
								stroke: "#7a3e3e"
							},
							{
								id: "signature",
								x: 910,
								y: 465,
								t1: "INTEGRITY BINDING",
								t2: "signer · algorithm · trust anchor",
								path: "M775 504H910",
								stroke: "#496f59"
							}
						].map((n) => {
							const on = field === n.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								opacity: on ? 1 : .32,
								className: "transition-opacity",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: n.x,
										y: n.y,
										width: "220",
										height: n.id === "limits" ? 90 : 70,
										rx: "10",
										fill: n.id === "limits" ? "#f0ded8" : n.id === "subject" ? "#e3edf1" : "#ece5d8",
										stroke: n.stroke,
										strokeOpacity: on ? .9 : .35
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: n.x + 20,
										y: n.y + 29,
										fill: "#1a1f24",
										fontFamily: "ui-monospace, monospace",
										fontSize: "10",
										children: n.t1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: n.x + 20,
										y: n.y + 49,
										fill: n.id === "limits" ? "#7a3e3e" : "#4a5560",
										fontSize: "10",
										fontFamily: "ui-monospace, monospace",
										children: n.t2
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: n.path,
										fill: "none",
										stroke: n.stroke,
										strokeOpacity: on ? .85 : .35,
										strokeWidth: on ? 2 : 1
									})
								]
							}, n.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "70",
							y: "595",
							fill: "#1a1f24",
							fontFamily: "Georgia, serif",
							fontSize: "22",
							children: copy.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "70",
							y: "624",
							fill: "#4a5560",
							fontSize: "13",
							children: copy.body
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "space-y-2 border-t border-archive-ink/15 bg-archive-muted/30 px-3 py-2.5 sm:px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-archive-ink-muted",
						children: "A Proof Capsule is runtime evidence—not mathematical proof of correct execution. Limitations remain attached to every interpretation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded border border-archive-ink/15 bg-archive/80 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-wider text-archive-ink-muted",
							children: "limitations[] · pinned"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-1 space-y-0.5 text-[11px] text-archive-ink-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "! runtime_attestation_only" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "! does_not_prove_correct_execution" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "! does_not_prove_absence_of_external_side_effects" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "! trusts_nexus_runtime_and_host_boundary" }),
								field === "signature" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "! production-grade signing identity remains Target Architecture" }) : null
							]
						})]
					}),
					field === "signature" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-1 text-[11px] text-archive-ink-muted sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono uppercase tracking-wider",
								children: "Signer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "demo fixture signer (non-production)" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono uppercase tracking-wider",
								children: "Key custody"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "not a durable trust anchor" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono uppercase tracking-wider",
								children: "Algorithm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Ed25519 when present · optional" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono uppercase tracking-wider",
								children: "Does not prove"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "correctness · external-effect absence · production identity" })] })
						]
					}) : null
				]
			})
		]
	});
}
function ProofCapsulesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-w-0 max-w-[72rem] space-y-12 overflow-x-hidden px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle",
						children: "Evidence · Proof Capsules"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl text-porcelain sm:text-4xl",
						children: "Structured runtime evidence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-porcelain-muted",
						children: "A Proof Capsule is a binding lattice of observed fields—not a three-dimensional pill. Inspect the lattice, then open fixtures in the Explorer for structural checks."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceLattice, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofCapsuleExplorer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "anatomy-heading",
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "anatomy-heading",
					className: "font-serif text-xl text-porcelain sm:text-2xl",
					children: "Capsule anatomy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm leading-relaxed text-porcelain-muted",
					children: "Spatial map of schema zones. Select a zone to read why the field exists and what it must not be over-read to mean."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapsuleAnatomy, {}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-carbon p-5 sm:p-6",
				"aria-labelledby": "next-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: "next-heading",
						className: "font-serif text-lg text-porcelain sm:text-xl",
						children: "Related evidence surfaces"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-porcelain-muted",
						children: "Capsules are one artifact class. Pair inspection with the claims matrix and benchmarks before treating any path as generally available."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/evidence/claims",
									children: "Claims registry"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/evidence/benchmarks",
									children: "Benchmarks"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/maturity",
									children: "Maturity map"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#live-demo",
									children: "Watch commit boundary demo"
								})
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { ProofCapsulesPage as component };
