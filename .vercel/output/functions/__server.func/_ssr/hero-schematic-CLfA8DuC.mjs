import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as MaturityBadge } from "./maturity-badge-C3dmPz-F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hero-schematic-CLfA8DuC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Target workflow phases with maturity from locked claims matrix.
* Hero schematic shows propose→stage→constrain→validate→decide(commit|abort)→emit.
* Detailed timeline includes approve + compensate.
*/
var CHANGE_GATE_PHASES = [
	{
		id: "propose",
		label: "Propose",
		shortLabel: "Propose",
		finishedCapability: "Agent or operator proposes a consequential change with declared intent and scope.",
		status: "TARGET",
		currentReality: "Conceptual entry point. Full worktree-style change proposals are Target Architecture for the Change Gate product surface.",
		heroVisible: true,
		heroOrder: 1
	},
	{
		id: "stage",
		label: "Isolate and stage",
		shortLabel: "Stage",
		finishedCapability: "Change is isolated in a staged environment with pre-execution snapshot of execution state.",
		status: "CURRENT",
		currentReality: "Nexus WASM snap-rollback provides native snapshot of linear memory/globals/tables before execution (Implemented Foundation).",
		heroVisible: true,
		heroOrder: 2
	},
	{
		id: "constrain",
		label: "Bind authority",
		shortLabel: "Constrain",
		finishedCapability: "Capability and policy constraints are bound before side effects; unauthorized paths are denied or narrowed.",
		status: "CURRENT",
		currentReality: "Ed25519 capability tokens with attenuation, denial on missing/expired/revoked, and capability-gated WASI are Implemented Foundations. Durable end-to-end authority across the full Change Gate path is In Integration (Stage 0).",
		heroVisible: true,
		heroOrder: 3
	},
	{
		id: "validate",
		label: "Run validators",
		shortLabel: "Validate",
		finishedCapability: "Deterministic validators and health checks run before commitment; failures force abort/rollback paths.",
		status: "IN_DEVELOPMENT",
		currentReality: "Health/failure classification and requires_rollback foundations exist. Full deterministic Change Gate validator barrier is In Integration under Stage 0.",
		heroVisible: true,
		heroOrder: 4
	},
	{
		id: "approve",
		label: "Require approval",
		shortLabel: "Approve",
		finishedCapability: "Where policy demands it, human or policy approval gates the commit decision.",
		status: "TARGET",
		currentReality: "Policy profile structures exist; productized approval workflow is Target Architecture.",
		heroVisible: false
	},
	{
		id: "decide",
		label: "Commit or abort",
		shortLabel: "Decide",
		finishedCapability: "Transaction commits only what survives validation and approval; abort restores staged isolation without irreversible effect.",
		status: "IN_DEVELOPMENT",
		currentReality: "Execution-level rollback on failure is an Implemented Foundation. Full worktree commit/abort transactional semantics for general agent changes are In Integration / Target (Stage 0 blocking).",
		heroVisible: true,
		heroOrder: 5,
		limitations: ["Full Transactional Change Gate commit barrier is not a finished public product surface."]
	},
	{
		id: "emit",
		label: "Emit evidence",
		shortLabel: "Emit",
		finishedCapability: "Portable signed Proof Capsule / receipt binds execution, authority context, and (when available) memory evidence modes.",
		status: "CURRENT",
		currentReality: "Proof Capsules with digests, capabilities, snapshot/failure/rollback, redaction, limitations[], optional signature, and memory modes are Implemented Foundations. Production trust anchors and external anchoring remain Target / In Integration.",
		heroVisible: true,
		heroOrder: 6
	},
	{
		id: "compensate",
		label: "Compensate",
		shortLabel: "Compensate",
		finishedCapability: "Where direct rollback cannot reverse external effects, compensation paths are recorded and driven by policy.",
		status: "TARGET",
		currentReality: "Compensation engine for irreversible external effects is Target Architecture.",
		heroVisible: false
	}
];
var HERO_BRANCHES = {
	commit: {
		label: "Commit",
		status: "IN_DEVELOPMENT"
	},
	abort: {
		label: "Abort",
		status: "CURRENT"
	}
};
function heroPhases() {
	return CHANGE_GATE_PHASES.filter((p) => p.heroVisible).sort((a, b) => (a.heroOrder ?? 0) - (b.heroOrder ?? 0));
}
/**
* Phase A densified schematic.
* Dual Commit + Abort fork is always visible — abort is central to the category thesis.
* Permanent maturity markers; inspector is a system record, not marketing copy.
*/
function HeroSchematic({ className }) {
	const phases = heroPhases();
	const pipeline = phases.filter((p) => p.id !== "decide" && p.id !== "emit");
	const decide = phases.find((p) => p.id === "decide");
	const emit = phases.find((p) => p.id === "emit");
	const [selected, setSelected] = (0, import_react.useState)({
		kind: "branch",
		id: "abort",
		label: HERO_BRANCHES.abort.label,
		status: HERO_BRANCHES.abort.status
	});
	const panelId = (0, import_react.useId)();
	function selectPhase(phase) {
		setSelected({
			kind: "phase",
			phase
		});
	}
	function selectBranch(id) {
		const branch = HERO_BRANCHES[id];
		setSelected({
			kind: "branch",
			id,
			label: branch.label,
			status: branch.status
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden rounded-xl border border-border bg-carbon", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.35]",
				"aria-hidden": true,
				style: {
					backgroundImage: `
            linear-gradient(color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px)
          `,
					backgroundSize: "24px 24px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-16 -top-20 size-56 rounded-full opacity-40",
				style: { background: "radial-gradient(circle, color-mix(in oklab, var(--color-institution) 35%, transparent), transparent 70%)" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
							children: "Transactional Change Gate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-porcelain-muted",
							children: "Select a node · Commit and Abort both live on the boundary"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-md border border-border bg-void/60 px-2 py-1 font-mono text-[10px] text-porcelain-subtle",
							children: "Control surface"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block",
						role: "group",
						"aria-label": "Change Gate dual-path schematic",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center gap-1.5",
								children: pipeline.map((phase, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Connector, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseNode, {
										phase,
										active: selected?.kind === "phase" && selected.phase.id === phase.id,
										onSelect: () => selectPhase(phase),
										controls: panelId
									})]
								}, phase.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-4 rounded-lg border border-border/80 bg-void/40 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
										children: "Commit boundary"
									}), decide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => selectPhase(decide),
										"aria-pressed": selected?.kind === "phase" && selected.phase.id === decide.id,
										"aria-controls": panelId,
										className: cn("font-mono text-[10px] uppercase tracking-wider transition-colors", selected?.kind === "phase" && selected.phase.id === decide.id ? "text-porcelain" : "text-porcelain-subtle hover:text-porcelain-muted"),
										children: "Decide node · inspect"
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => selectBranch("abort"),
										"aria-pressed": selected?.kind === "branch" && selected.id === "abort",
										"aria-controls": panelId,
										className: cn("group relative flex flex-col gap-2 rounded-lg border p-3 text-left transition-[background-color,border-color,box-shadow] duration-200", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institution focus-visible:ring-offset-2 focus-visible:ring-offset-carbon", selected?.kind === "branch" && selected.id === "abort" ? "border-controlled-red/50 bg-controlled-red/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-controlled-red)_30%,transparent)]" : "border-controlled-red/25 bg-carbon/60 hover:border-controlled-red/40 hover:bg-controlled-red/10"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-medium text-porcelain",
													children: "Abort"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
													status: HERO_BRANCHES.abort.status,
													compact: true,
													showLabel: true
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] leading-snug text-porcelain-muted",
												children: "Deny · restore pre-execution state · no irreversible effect"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] text-controlled-red-fg/80",
												children: "Central to the category thesis"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => selectBranch("commit"),
										"aria-pressed": selected?.kind === "branch" && selected.id === "commit",
										"aria-controls": panelId,
										className: cn("group relative flex flex-col gap-2 rounded-lg border p-3 text-left transition-[background-color,border-color,box-shadow] duration-200", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institution focus-visible:ring-offset-2 focus-visible:ring-offset-carbon", selected?.kind === "branch" && selected.id === "commit" ? "border-oxide/50 bg-oxide/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-oxide)_30%,transparent)]" : "border-oxide/25 bg-carbon/60 hover:border-oxide/40 hover:bg-oxide/10"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-medium text-porcelain",
													children: "Commit"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
													status: HERO_BRANCHES.commit.status,
													compact: true,
													showLabel: true
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] leading-snug text-porcelain-muted",
												children: "Apply only what survives validation · then emit evidence"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] text-porcelain-subtle",
												children: "Destination for surviving changes"
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col items-center",
									"aria-hidden": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-px bg-border" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full max-w-[70%] bg-border" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-px bg-border" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center",
								children: emit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseNode, {
									phase: emit,
									active: selected?.kind === "phase" && selected.phase.id === emit.id,
									onSelect: () => selectPhase(emit),
									controls: panelId,
									emphasize: true
								}) : null
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-center font-mono text-[10px] text-porcelain-subtle",
								children: "Both paths emit a Proof Capsule — success and denial are both evidenced"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "space-y-2",
								"aria-label": "Change Gate phases",
								children: pipeline.map((phase, index) => {
									const active = selected?.kind === "phase" && selected.phase.id === phase.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => selectPhase(phase),
										"aria-pressed": active,
										"aria-controls": panelId,
										className: cn("flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors", active ? "border-institution/50 bg-institution/10" : "border-border bg-slate/60 hover:bg-slate"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-w-0 items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-xs tabular-nums text-porcelain-subtle",
												children: String(index + 1).padStart(2, "0")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate text-sm text-porcelain",
												children: phase.label
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
											status: phase.status,
											compact: true,
											showLabel: true
										})]
									}) }, phase.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => selectBranch("abort"),
									"aria-pressed": selected?.kind === "branch" && selected.id === "abort",
									className: cn("flex min-h-11 flex-col gap-1 rounded-lg border px-3 py-2.5 text-left", selected?.kind === "branch" && selected.id === "abort" ? "border-controlled-red/45 bg-controlled-red/15" : "border-controlled-red/30 bg-void/40"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium text-porcelain",
										children: "Abort"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
										status: HERO_BRANCHES.abort.status,
										compact: true,
										showLabel: true
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => selectBranch("commit"),
									"aria-pressed": selected?.kind === "branch" && selected.id === "commit",
									className: cn("flex min-h-11 flex-col gap-1 rounded-lg border px-3 py-2.5 text-left", selected?.kind === "branch" && selected.id === "commit" ? "border-oxide/45 bg-oxide/15" : "border-oxide/30 bg-void/40"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium text-porcelain",
										children: "Commit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
										status: HERO_BRANCHES.commit.status,
										compact: true,
										showLabel: true
									})]
								})]
							}),
							emit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => selectPhase(emit),
								"aria-pressed": selected?.kind === "phase" && selected.phase.id === emit.id,
								"aria-controls": panelId,
								className: cn("mt-2 flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-left", selected?.kind === "phase" && selected.phase.id === emit.id ? "border-institution/50 bg-institution/10" : "border-border bg-slate/60"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-porcelain",
									children: emit.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
									status: emit.status,
									compact: true,
									showLabel: true
								})]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: panelId,
						className: "mt-4 rounded-lg border border-border bg-void/70 p-3.5 sm:p-4",
						role: "region",
						"aria-live": "polite",
						"aria-label": "System record for selected node",
						children: selected?.kind === "phase" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseInspector, { phase: selected.phase }) : selected?.kind === "branch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchInspector, {
							id: selected.id,
							label: selected.label,
							status: selected.status
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-porcelain-muted",
							children: "Select a phase to inspect finished capability, maturity, and limitations."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-3 text-[11px] text-porcelain-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								symbol: "●",
								label: "Implemented Foundation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								symbol: "◐",
								label: "In Integration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								symbol: "○",
								label: "Target Architecture"
							})
						]
					})
				]
			})
		]
	});
}
function Connector() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "px-0.5 font-mono text-porcelain-subtle",
		"aria-hidden": true,
		children: "→"
	});
}
function PhaseNode({ phase, label, status, branch, active, onSelect, controls, emphasize }) {
	const resolvedLabel = phase?.shortLabel ?? label ?? "";
	const resolvedStatus = phase?.status ?? status ?? "TARGET";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		"aria-pressed": active,
		"aria-controls": controls,
		className: cn("inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-left transition-[background-color,border-color,box-shadow] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institution focus-visible:ring-offset-2 focus-visible:ring-offset-carbon", branch === "abort" && "border-controlled-red/35", branch === "commit" && "border-oxide/35", !branch && "border-border bg-slate/80", branch && "bg-void/50", emphasize && "border-archive/30 bg-archive/5", active && !branch && "border-institution/55 bg-institution/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-institution)_40%,transparent)]", active && branch === "abort" && "bg-controlled-red/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-controlled-red)_35%,transparent)]", active && branch === "commit" && "bg-oxide/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-oxide)_35%,transparent)]", !active && "hover:bg-slate-elevated/80"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-porcelain",
			children: resolvedLabel
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
			status: resolvedStatus,
			compact: true,
			showLabel: false
		})]
	});
}
function PhaseInspector({ phase }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
					children: "System record"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-serif text-base text-porcelain",
					children: phase.label
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: phase.status })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle",
					children: "Finished capability"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-sm leading-relaxed text-porcelain-muted",
					children: phase.finishedCapability
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle",
					children: "Implementation today"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-sm leading-relaxed text-porcelain-muted",
					children: phase.currentReality
				})] })]
			}),
			phase.limitations?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-controlled-red/25 bg-controlled-red/10 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium text-controlled-red-fg",
					children: "Known limitations"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-1 space-y-0.5 text-xs text-porcelain-muted",
					children: phase.limitations.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["! ", l] }, l))
				})]
			}) : null
		]
	});
}
function BranchInspector({ id, label, status }) {
	const copy = id === "abort" ? {
		finished: "Abort restores staged isolation without irreversible effect when validation or policy fails. Denial is a first-class outcome — not an error to hide.",
		today: "Execution-level rollback on capability denial and failure is an Implemented Foundation. Product-level abort semantics for general agent worktrees remain In Integration under Stage 0."
	} : {
		finished: "Commit applies only changes that survive validation and required approval, then emits portable evidence. Nothing irreversible crosses without surviving the gate.",
		today: "Full worktree commit transactional semantics for general agent changes are In Integration / Target. Stage 0 evidence integrity is blocking for end-to-end guarantees."
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
				children: "Decision branch · always visible"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-serif text-base text-porcelain",
				children: label
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle",
				children: "Finished capability"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 text-sm leading-relaxed text-porcelain-muted",
				children: copy.finished
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle",
				children: "Implementation today"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 text-sm leading-relaxed text-porcelain-muted",
				children: copy.today
			})] })]
		})]
	});
}
function Legend({ symbol, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono",
			"aria-hidden": true,
			children: symbol
		}), label]
	});
}
//#endregion
export { HeroSchematic as n, CHANGE_GATE_PHASES as t };
