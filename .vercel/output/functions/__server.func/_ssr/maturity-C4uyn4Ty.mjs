import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { t as claimsRegistry } from "./content-BpadpKYG.mjs";
import { S as resolveMaturitySearch, _ as relationsFor, a as claimRelationsData, f as isTargetStatus, u as getNode } from "./evaluator-search-Buqd9Qff.mjs";
import { a as toPublicStatus, n as MaturityBadge, r as PUBLIC_STATUS_META } from "./maturity-badge-BLweOVLC.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as provenanceSummary, t as buildFigureProvenance } from "./visual-provenance-C-bGV2PH.mjs";
import { t as Route } from "./maturity-DZrJPFUu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/maturity-C4uyn4Ty.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LAYERS = [
	{
		id: "destination",
		title: "Assurance destination",
		statuses: ["TARGET"]
	},
	{
		id: "integration",
		title: "Stage 0 · integration plane",
		statuses: ["IN_DEVELOPMENT"]
	},
	{
		id: "foundations",
		title: "Implemented substrates",
		statuses: ["CURRENT"]
	},
	{
		id: "trust",
		title: "Disclosed trust surface",
		statuses: "trust"
	}
];
function CapabilityMaturityTopology({ className, onSelectRegistryId, mode: modeProp, selectedId: selectedIdProp, onModeChange }) {
	const [internalMode, setInternalMode] = (0, import_react.useState)("current");
	const [internalSelectedId, setInternalSelectedId] = (0, import_react.useState)("transactional-change-gate");
	const mode = modeProp ?? internalMode;
	const selectedId = selectedIdProp ?? internalSelectedId;
	const setMode = (m) => {
		setInternalMode(m);
		onModeChange?.(m);
	};
	const setSelectedId = (id) => {
		setInternalSelectedId(id);
		onSelectRegistryId?.(id);
	};
	const showTargets = mode === "full";
	const currentOnly = mode === "current" || mode === "critical" || mode === "trust";
	const selected = getNode(selectedId);
	const cap = claimsRegistry.capabilities.find((c) => c.id === (selected?.registryId ?? selectedId));
	const rels = relationsFor(selectedId);
	const visibleCaps = (0, import_react.useMemo)(() => {
		return claimsRegistry.capabilities.filter((c) => {
			if (mode === "current") return c.status === "CURRENT";
			if (mode === "critical") return c.status === "CURRENT" || c.status === "IN_DEVELOPMENT" || c.id === "wasm-boundary-scope";
			if (mode === "trust") return c.status === "LIMITATION" || c.id === "wasm-boundary-scope";
			return true;
		});
	}, [mode]);
	const prov = buildFigureProvenance("FIG-MAT-07", "fixture", { filters: `mode=${mode};sel=${selectedId}` });
	const blockers = rels.filter((r) => r.to === selectedId && r.kind === "blocks");
	const prereqs = rels.filter((r) => r.to === selectedId && (r.kind === "supports" || r.kind === "requires" || r.kind === "binds_context"));
	const unlocks = rels.filter((r) => r.from === selectedId && r.kind === "supports");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-carbon", className),
		"data-testid": "maturity-topology",
		"data-figure": "FIG-MAT-07",
		"data-mode": mode,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "FIG-MAT-07 · Capability maturity topology"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-porcelain-muted",
					children: "No completion percentage · dependency closure only"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex max-w-full min-w-0 flex-wrap gap-1.5",
					role: "toolbar",
					"aria-label": "Topology mode",
					children: [
						["current", "Current"],
						["critical", "Critical path"],
						["full", "Full arch."],
						["trust", "Trust"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": mode === id,
						onClick: () => setMode(id),
						className: cn("rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase", mode === id ? "border-institution/55 bg-institution/20 text-porcelain" : "border-border text-porcelain-subtle"),
						children: label
					}, id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-signal/30 bg-signal/10 px-3 py-2 text-sm text-porcelain-muted sm:px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-signal",
						children: "Stage 0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2 text-porcelain-subtle",
						children: "·"
					}),
					claimsRegistry.stage0.summary
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border bg-void px-3 py-2 font-mono text-[10px] text-porcelain-subtle sm:px-4",
				children: ["Current enforcement perimeter: WASM guest ↔ host calls", currentOnly && !showTargets ? " · Target Architecture hidden" : " · Target Architecture shown (not current)"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 p-3 sm:p-4 lg:grid-cols-2",
				children: LAYERS.map((layer) => {
					if (layer.id === "destination" && mode !== "full") return null;
					if (layer.id === "trust" && mode !== "trust" && mode !== "full") {
						if (mode === "critical") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-controlled-red/30 bg-controlled-red/5 p-3 lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase text-controlled-red-fg",
								children: "Residual trust always disclosed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: "Host OS · operators · key custody · runtime integrity · WASM boundary scope"
							})]
						}, layer.id);
						if (mode === "current") return null;
					}
					const items = layer.statuses === "trust" ? claimRelationsData.nodes.filter((n) => n.kind === "scope_limitation" || n.kind === "negative_guarantee" || n.status === "LIMITATION") : claimsRegistry.capabilities.filter((c) => layer.statuses.includes(c.status));
					if (mode === "current" && layer.id !== "foundations") return null;
					if (mode === "trust" && layer.id !== "trust") return null;
					if (mode === "critical" && layer.id !== "foundations" && layer.id !== "integration" && layer.id !== "trust") return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("rounded-lg border border-border bg-void p-3", layer.id === "integration" && "border-signal/40", layer.id === "trust" && "border-controlled-red/35"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
							children: layer.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1.5",
							children: layer.statuses === "trust" ? items.map((n) => n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setSelectedId(n.registryId ?? n.id);
								},
								className: cn("flex min-h-9 w-full items-start justify-between gap-2 rounded-md border px-2 py-2 text-left", selectedId === n.id ? "border-institution/50 bg-institution/15" : "border-border/60 hover:bg-slate/30"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-porcelain",
									children: n.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
									status: n.status,
									compact: true,
									showLabel: false
								})]
							}) }, n.id) : null) : items.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setSelectedId(c.id);
								},
								tabIndex: isTargetStatus(c.status) && !showTargets ? -1 : 0,
								className: cn("flex w-full items-start justify-between gap-2 rounded-md border px-2 py-2 text-left", selectedId === c.id ? "border-institution/50 bg-institution/15" : "border-border/60 hover:bg-slate/30", isTargetStatus(c.status) && "border-dashed"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-porcelain",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
									status: c.status,
									compact: true,
									showLabel: false
								})]
							}) }, c.id))
						})]
					}, layer.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "space-y-3 border-t border-border px-3 py-3 sm:px-4",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-base text-porcelain",
							children: cap?.name ?? selected?.title
						}), (cap || selected) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
							status: cap?.status ?? selected.status,
							compact: true,
							showLabel: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-porcelain-muted",
						children: cap?.summary ?? selected?.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase text-porcelain-subtle",
								children: "Prerequisites / supports"
							}), prereqs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: prereqs.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"· ",
									r.from,
									" (",
									r.kind,
									")"
								] }, r.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: "· —"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase text-controlled-red-fg/80",
								children: "Why blocked"
							}), blockers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: blockers.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"· ",
									r.from,
									": ",
									r.rationale
								] }, r.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: "· No Stage 0 block on this node"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase text-porcelain-subtle",
								children: "Unlocks"
							}), unlocks.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: unlocks.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", r.to] }, r.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-porcelain-muted",
								children: "· —"
							})] })
						]
					}),
					cap?.limitations?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-controlled-red/30 bg-controlled-red/10 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase text-controlled-red-fg",
							children: "Residual limitations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 text-xs text-porcelain-muted",
							children: cap.limitations.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["! ", l] }, l))
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-porcelain-subtle",
						children: "Completing foundations does not imply a finished product percentage. Stronger guarantees require Stage 0 convergence."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[10px] text-porcelain-subtle",
						children: [
							provenanceSummary(prov),
							" · visible rows: ",
							visibleCaps.length
						]
					})
				]
			})
		]
	});
}
function MaturityPage() {
	const search = resolveMaturitySearch(Route.useSearch());
	const navigate = Route.useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full min-w-0 max-w-[72rem] overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 max-w-2xl space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle",
						children: "Implementation maturity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl text-porcelain sm:text-4xl",
						children: "Architecture is permanent. Status evolves."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base text-porcelain-muted",
						children: [
							"Layer Two of every page. Status never disappears. Machine-readable registry as of ",
							claimsRegistry.asOf,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: Object.keys(PUBLIC_STATUS_META).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: key }, key))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 rounded-xl border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-porcelain",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-medium",
						children: "Stage 0"
					}),
					" —",
					" ",
					claimsRegistry.stage0.summary
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 min-w-0 max-w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapabilityMaturityTopology, {
					mode: search.view === "all" ? "full" : search.view === "critical" ? "critical" : search.view === "trust" ? "trust" : "current",
					selectedId: search.capability,
					onModeChange: (mode) => navigate({
						search: (prev) => ({
							...prev,
							view: mode === "full" ? "all" : mode === "critical" ? "critical" : mode === "trust" ? "trust" : "current",
							targets: mode === "full"
						}),
						replace: true
					}),
					onSelectRegistryId: (id) => navigate({
						search: (prev) => ({
							...prev,
							capability: id
						}),
						replace: true
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 max-w-full overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[36rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "border-b border-border bg-carbon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium text-porcelain-muted",
								children: "Capability"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium text-porcelain-muted",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium text-porcelain-muted",
								children: "Summary"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: claimsRegistry.capabilities.map((cap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top font-medium text-porcelain",
								children: cap.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
									status: toPublicStatus(cap.status),
									compact: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top text-porcelain-muted",
								children: cap.summary
							})
						]
					}, cap.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/evidence/claims",
						children: "Open claims detail"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/change-gate",
						children: "Change Gate phases"
					})
				})]
			})
		]
	});
}
//#endregion
export { MaturityPage as component };
