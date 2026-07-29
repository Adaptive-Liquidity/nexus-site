import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as toPublicStatus, n as PUBLIC_STATUS_META, t as MaturityBadge } from "./maturity-badge-C3dmPz-F.mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
import { t as claimsRegistry } from "./content-BpadpKYG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/claims-DTmhSxIK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "ALL",
		label: "All"
	},
	{
		id: "CURRENT",
		label: "Implemented"
	},
	{
		id: "IN_DEVELOPMENT",
		label: "In Integration"
	},
	{
		id: "TARGET",
		label: "Target"
	},
	{
		id: "LIMITATION",
		label: "Limitations"
	}
];
function ClaimsPage() {
	const [filter, setFilter] = (0, import_react.useState)("ALL");
	const [query, setQuery] = (0, import_react.useState)("");
	const [openId, setOpenId] = (0, import_react.useState)(claimsRegistry.capabilities[0]?.id ?? null);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return claimsRegistry.capabilities.filter((cap) => {
			if (filter !== "ALL" && cap.status !== filter) return false;
			if (!q) return true;
			return `${cap.name} ${cap.summary} ${cap.id}`.toLowerCase().includes(q);
		});
	}, [filter, query]);
	const counts = (0, import_react.useMemo)(() => {
		const c = { ALL: claimsRegistry.capabilities.length };
		for (const cap of claimsRegistry.capabilities) c[cap.status] = (c[cap.status] ?? 0) + 1;
		return c;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-w-0 max-w-[72rem] space-y-8 overflow-x-hidden px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-porcelain-subtle",
						children: [
							"Claims registry · as of ",
							claimsRegistry.asOf,
							" · v",
							claimsRegistry.version
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-porcelain sm:text-3xl",
						children: "Machine-readable maturity matrix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-porcelain-muted",
						children: "Every public claim inherits status, evidence, limitations, and Stage 0 gating. This registry is a product surface — not a footer disclaimer."
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
							claimsRegistry.stage0.blocking ? "blocking — " : "",
							claimsRegistry.stage0.summary
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
				title: "Status legend",
				refId: "REG-CLAIM-LEGEND",
				classification: "LAYER TWO",
				footer: "Status never upgrades by implication. Implemented Foundations may not complete the full product workflow.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: Object.entries(claimsRegistry.statusLegend).map(([key, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-border bg-void/50 px-3 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: key }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-porcelain-subtle",
							children: desc
						})]
					}, key))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1 rounded-lg border border-border p-0.5",
					role: "tablist",
					"aria-label": "Filter by status",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": filter === f.id,
						onClick: () => setFilter(f.id),
						className: cn("min-h-9 rounded-md px-2.5 py-1.5 text-xs transition-colors sm:text-sm", filter === f.id ? "bg-slate text-porcelain" : "text-porcelain-muted hover:text-porcelain"),
						children: [f.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1.5 font-mono text-[10px] text-porcelain-subtle",
							children: counts[f.id] ?? 0
						})]
					}, f.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block min-w-0 sm:w-64",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Search claims"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search capabilities…",
						className: "h-10 w-full rounded-md border border-border bg-carbon px-3 text-sm text-porcelain placeholder:text-porcelain-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: filtered.map((cap) => {
					const open = openId === cap.id;
					const pub = toPublicStatus(cap.status);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "overflow-hidden rounded-xl border border-border bg-carbon",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpenId(open ? null : cap.id),
							"aria-expanded": open,
							className: "flex w-full items-start justify-between gap-3 p-5 text-left transition-colors hover:bg-slate/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif text-lg text-porcelain",
											children: cap.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
											status: cap.status,
											compact: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-porcelain-muted",
										children: cap.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[10px] text-porcelain-subtle",
										children: [
											cap.id,
											" · public: ",
											PUBLIC_STATUS_META[pub].label
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
								children: open ? "Collapse" : "Expand"
							})]
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 border-t border-border bg-void/40 px-5 py-4",
							children: [
								cap.limitations && cap.limitations.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle",
									children: "Limitations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1 font-mono text-xs text-porcelain-muted",
									children: cap.limitations.map((lim) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-controlled-red",
											"aria-hidden": true,
											children: "!"
										}), lim]
									}, lim))
								})] }) : null,
								"inDevelopment" in cap && Array.isArray(cap.inDevelopment) && cap.inDevelopment.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle",
									children: "In integration"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1 text-sm text-porcelain-muted",
									children: cap.inDevelopment.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["→ ", item] }, item))
								})] }) : null,
								"target" in cap && cap.target ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle",
									children: "Target architecture"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm leading-relaxed text-porcelain-muted",
									children: String(cap.target)
								})] }) : null,
								cap.evidence && cap.evidence.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle",
									children: "Evidence"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: cap.evidence.map((ev) => "url" in ev && ev.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: String(ev.url),
										target: String(ev.url).startsWith("http") ? "_blank" : void 0,
										rel: String(ev.url).startsWith("http") ? "noreferrer" : void 0,
										className: "rounded-md border border-border px-2.5 py-1.5 text-xs text-porcelain-muted transition-colors hover:text-porcelain",
										children: ev.label
									}, ev.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-md border border-border px-2.5 py-1.5 text-xs text-porcelain-subtle",
										children: [ev.label, "path" in ev && ev.path ? ` · ${String(ev.path)}` : ""]
									}, ev.label))
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-porcelain-subtle",
									children: "No public evidence links yet for this row."
								})
							]
						}) : null]
					}, cap.id);
				})
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-porcelain-muted",
				children: "No claims match this filter."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3 border-t border-border pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "secondary",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/maturity",
						children: "Maturity table"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/evidence/proof-capsules",
						children: "Proof Capsule Explorer"
					})
				})]
			})
		]
	});
}
//#endregion
export { ClaimsPage as component };
