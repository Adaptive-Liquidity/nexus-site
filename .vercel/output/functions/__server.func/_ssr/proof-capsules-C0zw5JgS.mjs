import { r as __toESM } from "../_runtime.mjs";
import { r as CAPSULE_HONESTY } from "./site-copy-BRpXPyRy.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as MaturityBadge } from "./maturity-badge-C3dmPz-F.mjs";
import { n as sampleCapsules } from "./content-BpadpKYG.mjs";
import { n as CapsuleAnatomy, r as Reveal, t as CAPSULE_FIELD_EXPLAINERS } from "./reveal-Cv5cVh_W.mjs";
import { a as ShieldAlert, d as FileJson, g as Check, m as Copy, p as Download, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/proof-capsules-C0zw5JgS.js
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
function ProofCapsulesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-w-0 max-w-[72rem] space-y-12 overflow-x-hidden px-4 py-10 sm:px-6",
		children: [
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
