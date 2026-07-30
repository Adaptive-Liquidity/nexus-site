import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { t as claimsRegistry } from "./content-BpadpKYG.mjs";
import { _ as relationsFor, a as claimRelationsData, f as isTargetStatus, g as registryCap, u as getNode, y as resolveClaimsSearch } from "./evaluator-search-Buqd9Qff.mjs";
import { a as toPublicStatus, n as MaturityBadge, r as PUBLIC_STATUS_META } from "./maturity-badge-BLweOVLC.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
import { n as provenanceSummary, t as buildFigureProvenance } from "./visual-provenance-C-bGV2PH.mjs";
import { t as Route } from "./claims-CtD6-Jy2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/claims-OJuWNeID.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COL_X = {
	evidence: 90,
	foundation: 340,
	claim: 620,
	boundary: 920
};
function publicStatusLabel(status) {
	if (status === "CURRENT") return "CURRENT";
	if (status === "IN_DEVELOPMENT") return "IN INTEGRATION";
	if (status === "TARGET") return "TARGET";
	if (status === "LIMITATION") return "LIMITATION";
	if (status === "EXPERIMENTAL") return "EXPERIMENTAL";
	return status;
}
function nodeStroke(n, sel) {
	if (sel) return "#5f93a8";
	if (n.kind === "blocking_gate") return "#b96464";
	if (n.status === "CURRENT") return "#75a184";
	if (n.status === "IN_DEVELOPMENT") return "#d4a55f";
	if (n.status === "LIMITATION") return "#b96464";
	if (n.status === "TARGET") return "#5f93a8";
	return "#7a7670";
}
function nodeY(nodes, col, id) {
	return 70 + nodes.filter((n) => n.column === col).sort((a, b) => a.order - b.order).findIndex((n) => n.id === id) * 72;
}
function ClaimDependencyGraph({ selectedId: controlledId, onSelect, className, lens: lensProp, currentOnly: currentOnlyProp, onLensChange, onCurrentOnlyChange }) {
	const [internalId, setInternalId] = (0, import_react.useState)("transactional-change-gate");
	const [internalLens, setInternalLens] = (0, import_react.useState)("all");
	const [internalCurrentOnly, setInternalCurrentOnly] = (0, import_react.useState)(true);
	const selectedId = controlledId ?? internalId;
	const lens = lensProp ?? internalLens;
	const currentOnly = currentOnlyProp ?? internalCurrentOnly;
	const select = (id) => {
		setInternalId(id);
		onSelect?.(id);
	};
	const setLens = (l) => {
		setInternalLens(l);
		onLensChange?.(l);
	};
	const setCurrentOnly = (v) => {
		const next = typeof v === "function" ? v(currentOnly) : v;
		setInternalCurrentOnly(next);
		onCurrentOnlyChange?.(next);
	};
	const nodes = (0, import_react.useMemo)(() => {
		return claimRelationsData.nodes.filter((n) => {
			if (currentOnly && isTargetStatus(n.status)) return false;
			return true;
		});
	}, [currentOnly]);
	const edges = (0, import_react.useMemo)(() => {
		const ids = new Set(nodes.map((n) => n.id));
		let rels = claimRelationsData.relations.filter((r) => ids.has(r.from) && ids.has(r.to));
		if (lens === "support") rels = rels.filter((r) => [
			"supports",
			"evidences",
			"binds_context",
			"requires"
		].includes(r.kind));
		if (lens === "blocker") rels = rels.filter((r) => [
			"blocks",
			"bounds",
			"trusts"
		].includes(r.kind));
		return rels;
	}, [nodes, lens]);
	const selected = getNode(selectedId) ?? nodes[0];
	const selectedRels = selected ? relationsFor(selected.id) : [];
	const cap = selected?.registryId ? registryCap(selected.registryId) : void 0;
	const prov = buildFigureProvenance("FIG-CLM-06", "fixture", {
		filters: `lens=${lens};currentOnly=${currentOnly};sel=${selectedId}`,
		sourceRefs: ["src/content/claims-registry.json", "src/content/claim-relations.json"]
	});
	const mobileTrace = (0, import_react.useMemo)(() => {
		if (!selected) return [];
		const supports = selectedRels.filter((r) => r.to === selected.id && (r.kind === "supports" || r.kind === "evidences"));
		const blocks = selectedRels.filter((r) => r.to === selected.id && (r.kind === "blocks" || r.kind === "bounds"));
		return [
			...supports.map((r) => ({
				label: r.kind,
				node: getNode(r.from)
			})),
			{
				label: "selected",
				node: selected
			},
			...blocks.map((r) => ({
				label: r.kind,
				node: getNode(r.from)
			}))
		];
	}, [selected, selectedRels]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl border border-border bg-carbon", className),
		"data-testid": "claim-dependency-graph",
		"data-figure": "FIG-CLM-06",
		"data-current-only": currentOnly,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "FIG-CLM-06 · Claim dependency & provenance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-porcelain-muted",
					children: "Fixed layered DAG · typed edges · registry-driven"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [[
						["all", "All relations"],
						["support", "Support path"],
						["blocker", "Blocker path"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": lens === id,
						onClick: () => setLens(id),
						className: cn("rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase", lens === id ? "border-institution/55 bg-institution/20 text-porcelain" : "border-border text-porcelain-subtle"),
						children: label
					}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": currentOnly,
						onClick: () => setCurrentOnly(!currentOnly),
						className: cn("rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase", currentOnly ? "border-institution/55 bg-institution/20 text-porcelain" : "border-border text-porcelain-subtle"),
						children: currentOnly ? "Current only" : "Reveal targets"
					})]
				})]
			}),
			currentOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-b border-border bg-void px-3 py-1.5 font-mono text-[10px] text-porcelain-subtle sm:px-4",
				children: "Target Architecture hidden by default — not current. Reveal targets explicitly."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-b border-border bg-signal/10 px-3 py-1.5 font-mono text-[10px] text-signal sm:px-4",
				children: "Target Architecture visible — dashed / patterned · not current"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative hidden aspect-[16/9] w-full bg-void md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1100 560",
					className: "absolute inset-0 h-full w-full",
					role: "img",
					"aria-label": "Claim dependency layered graph",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "Claim dependency graph" }),
						[
							"evidence",
							"foundation",
							"claim",
							"boundary"
						].map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: COL_X[col],
							y: 28,
							textAnchor: "middle",
							fill: "#7a7670",
							fontFamily: "ui-monospace,monospace",
							fontSize: "10",
							letterSpacing: "1.5",
							children: [
								"EVIDENCE",
								"FOUNDATIONS",
								"CLAIMS",
								"BOUNDARIES"
							][i]
						}, col)),
						edges.map((e) => {
							const a = getNode(e.from);
							const b = getNode(e.to);
							if (!a || !b) return null;
							if (currentOnly && (isTargetStatus(a.status) || isTargetStatus(b.status))) return null;
							const x1 = COL_X[a.column];
							const y1 = nodeY(nodes, a.column, a.id);
							const x2 = COL_X[b.column];
							const y2 = nodeY(nodes, b.column, b.id);
							const touch = e.from === selectedId || e.to === selectedId;
							const isBlock = e.kind === "blocks" || e.kind === "bounds";
							const isTarget = isTargetStatus(e.maturity);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: x1 + 70,
								y1,
								x2: x2 - 70,
								y2,
								stroke: isBlock ? "#b96464" : isTarget ? "#5f93a8" : "#5f93a8",
								strokeOpacity: touch ? .85 : .22,
								strokeWidth: touch ? 2 : 1,
								strokeDasharray: isTarget || e.kind === "extends_to" || e.kind === "strengthens" ? "5 4" : isBlock ? "2 3" : void 0
							}, e.id);
						}),
						nodes.map((n) => {
							const x = COL_X[n.column];
							const y = nodeY(nodes, n.column, n.id);
							const sel = n.id === selectedId;
							const target = isTargetStatus(n.status);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								transform: `translate(${x} ${y})`,
								className: "cursor-pointer",
								onClick: () => select(n.id),
								tabIndex: target && currentOnly ? -1 : 0,
								role: "button",
								"aria-pressed": sel,
								"aria-label": `${n.title}, ${n.status}`,
								onKeyDown: (ev) => {
									if (ev.key === "Enter" || ev.key === " ") {
										ev.preventDefault();
										select(n.id);
									}
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: -70,
										y: -22,
										width: 140,
										height: 44,
										rx: 8,
										fill: sel ? "#151a20" : "#111820",
										stroke: nodeStroke(n, sel),
										strokeOpacity: sel ? 1 : .55,
										strokeWidth: sel ? 2 : 1,
										strokeDasharray: target ? "4 3" : void 0
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										textAnchor: "middle",
										y: -4,
										fill: "#f6f1e7",
										fontSize: "10",
										fontFamily: "ui-monospace,monospace",
										children: n.title.length > 22 ? n.title.slice(0, 20) + "…" : n.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										textAnchor: "middle",
										y: 12,
										fill: n.kind === "blocking_gate" ? "#b96464" : n.status === "CURRENT" ? "#75a184" : n.status === "IN_DEVELOPMENT" ? "#d4a55f" : "#7a7670",
										fontSize: "8",
										fontFamily: "ui-monospace,monospace",
										children: n.kind === "blocking_gate" ? "BLOCKING · IN INT." : publicStatusLabel(n.status)
									})
								]
							}, n.id);
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 p-3 md:hidden",
				"data-testid": "claim-graph-mobile-trace",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
						children: "Selected path trace"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-2",
						children: mobileTrace.map((t, i) => t.node ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => select(t.node.id),
							className: cn("w-full rounded-lg border px-3 py-2 text-left", t.node.id === selectedId ? "border-institution/50 bg-institution/15" : "border-border bg-void"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase text-porcelain-subtle",
									children: t.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-porcelain",
									children: t.node.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
									status: toPublicStatus(t.node.status),
									compact: true,
									showLabel: true
								})
							]
						}) }, `${t.label}-${t.node.id}-${i}`) : null)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1 pt-1",
						children: nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => select(n.id),
							className: "rounded border border-border px-2 py-1 font-mono text-[9px] text-porcelain-muted",
							children: n.id
						}, n.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "space-y-3 border-t border-border px-3 py-3 sm:px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						"aria-live": "polite",
						"data-testid": "claim-graph-inspector",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-base text-porcelain",
										children: selected?.title
									}),
									selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
										status: toPublicStatus(selected.status),
										compact: true,
										showLabel: true
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-[10px] text-porcelain-subtle",
										children: selected?.id
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-porcelain-muted",
								children: cap?.summary ?? selected?.summary
							}),
							cap?.limitations?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-controlled-red/30 bg-controlled-red/10 p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase text-controlled-red-fg",
									children: "Limitations (always visible)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-1 space-y-0.5 text-xs text-porcelain-muted",
									children: cap.limitations.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["! ", l] }, l))
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelationList, {
									title: "Incoming / supporting",
									rels: selectedRels.filter((r) => r.to === selectedId),
									dir: "from"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelationList, {
									title: "Outgoing",
									rels: selectedRels.filter((r) => r.from === selectedId),
									dir: "to"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] text-porcelain-subtle",
						children: provenanceSummary(prov)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "text-xs text-porcelain-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "cursor-pointer font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
							children: "Textual relation table"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[32rem] text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border text-porcelain-subtle",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-1 pr-2",
											children: "From"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-1 pr-2",
											children: "Kind"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-1 pr-2",
											children: "To"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-1",
											children: "Rationale"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: claimRelationsData.relations.filter((r) => {
									if (!currentOnly) return true;
									const a = getNode(r.from);
									const b = getNode(r.to);
									return a && b && !isTargetStatus(a.status) && !isTargetStatus(b.status);
								}).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-1 pr-2 font-mono text-[10px]",
											children: r.from
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-1 pr-2 font-mono text-[10px]",
											children: r.kind
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-1 pr-2 font-mono text-[10px]",
											children: r.to
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-1 text-[11px]",
											children: r.rationale
										})
									]
								}, r.id)) })]
							})
						})]
					})
				]
			})
		]
	});
}
function RelationList({ title, rels, dir }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
		children: title
	}), rels.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-xs text-porcelain-subtle",
		children: "None in current filter"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-1 space-y-1 text-xs text-porcelain-muted",
		children: rels.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-porcelain-subtle",
				children: r.kind
			}),
			" ",
			dir === "from" ? r.from : r.to,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[10px] text-porcelain-subtle",
				children: r.rationale
			})
		] }, r.id))
	})] });
}
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
	const search = resolveClaimsSearch(Route.useSearch());
	const navigate = Route.useNavigate();
	const filter = search.status;
	const query = search.q;
	const openId = search.claim;
	const setFilter = (status) => navigate({
		search: (prev) => ({
			...prev,
			status: status === "EXPERIMENTAL" ? "ALL" : status
		}),
		replace: true
	});
	const setQuery = (q) => navigate({
		search: (prev) => ({
			...prev,
			q
		}),
		replace: true
	});
	const setOpenId = (claim) => navigate({
		search: (prev) => ({
			...prev,
			claim: claim ?? prev.claim
		}),
		replace: true
	});
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaimDependencyGraph, {
				selectedId: openId ?? void 0,
				onSelect: (id) => setOpenId(id),
				lens: search.view === "support" ? "support" : search.view === "blockers" || search.view === "boundaries" ? "blocker" : "all",
				currentOnly: !search.targets,
				onLensChange: (lens) => navigate({
					search: (prev) => ({
						...prev,
						view: lens === "support" ? "support" : lens === "blocker" ? "blockers" : "all"
					}),
					replace: true
				}),
				onCurrentOnlyChange: (currentOnly) => navigate({
					search: (prev) => ({
						...prev,
						targets: currentOnly ? false : true
					}),
					replace: true
				})
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
