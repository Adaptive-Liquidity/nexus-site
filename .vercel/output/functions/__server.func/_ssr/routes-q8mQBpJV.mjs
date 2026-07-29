import { r as __toESM } from "../_runtime.mjs";
import { a as HERO, c as OUTCOMES, d as STAGE_0_NOTE, f as WORKFLOWS, i as COMPOSITION, l as POSITIONING, n as BRAND, o as LAUNCH_THESIS, r as CAPSULE_HONESTY, t as BELIEF, u as PROBLEM } from "./site-copy-BRpXPyRy.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { i as toPublicStatus, n as PUBLIC_STATUS_META, r as countByPublicStatus, t as MaturityBadge } from "./maturity-badge-C3dmPz-F.mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CHANGE_GATE_PHASES } from "./change-gate-BngPCqUd.mjs";
import { n as sampleCapsules, t as claimsRegistry } from "./content-BpadpKYG.mjs";
import { i as useInView, n as CapsuleAnatomy, r as Reveal, t as CAPSULE_FIELD_EXPLAINERS } from "./reveal-Cv5cVh_W.mjs";
import { _ as Building2, a as ShieldAlert, g as Check, h as ChevronRight, i as Shield, l as GitCommitHorizontal, n as Terminal, o as Play, p as Download, r as SkipBack, s as Pause, t as X, u as FileSearch, v as ArrowRight, y as ArrowDownRight } from "../_libs/lucide-react.mjs";
import { t as TrustBoundaryDiagram } from "./trust-boundary-diagram-D3_fWgvB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-q8mQBpJV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
/**
* Animated before/after: uncontrolled agent stack vs commit boundary.
*/
function ProblemDemo({ className }) {
	const reduced = useReducedMotion();
	const { ref, inView } = useInView({
		once: true,
		threshold: .2
	});
	const [tick, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView || reduced) return;
		const id = window.setInterval(() => setTick((t) => (t + 1) % 6), 900);
		return () => window.clearInterval(id);
	}, [inView, reduced]);
	const badActive = reduced ? 3 : Math.min(tick, 3);
	const goodActive = reduced ? 4 : Math.min(tick, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
			title: "Control gap comparison",
			refId: "FIG-GAP-00 · before / after",
			classification: "PROBLEM STATEMENT",
			footer: "Model-level guardrails do not create a commit boundary. The right path stages, binds authority, validates, then emits evidence.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("grid gap-4 lg:grid-cols-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl border border-controlled-red/30 bg-carbon",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-controlled-red/20 px-4 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-3.5 text-controlled-red",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
							children: "Without a commit boundary"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 p-4",
						children: [[
							"Model emits tool call",
							"Tool executes immediately",
							"Side effect lands (prod / repo)",
							"Report accepted as truth"
						].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
							label,
							active: i <= badActive,
							current: i === badActive && !reduced,
							tone: "bad",
							index: i
						}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pt-2 text-xs leading-relaxed text-porcelain-subtle",
							children: "Missing: authority boundary · transaction boundary · independent evidence"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl border border-oxide/35 bg-carbon",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-oxide/20 px-4 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-3.5 text-oxide",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
							children: "With Nexus-IQ commit boundary"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 p-4",
						children: [[
							"Model proposes action",
							"Stage + bind authority",
							"Validate before commit",
							"Commit or abort",
							"Emit Proof Capsule"
						].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
							label,
							active: i <= goodActive,
							current: i === goodActive && !reduced,
							tone: "good",
							index: i
						}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pt-2 text-xs leading-relaxed text-porcelain-subtle",
							children: "Intent never becomes irreversible effect without surviving the gate."
						})]
					})]
				})]
			})
		})
	});
}
function FlowNode({ label, active, current, tone, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3 rounded-md border px-3 py-2.5 transition-[opacity,border-color,background-color,transform] duration-500 ease-out", active ? "opacity-100" : "opacity-30", current && "scale-[1.01]", tone === "bad" && active && "border-controlled-red/30 bg-controlled-red/10", tone === "good" && active && "border-oxide/30 bg-oxide/10", !active && "border-border bg-void/40"),
		style: { transitionDelay: `${index * 40}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("size-2 shrink-0 rounded-full", !active && "bg-porcelain-subtle", active && tone === "bad" && "bg-controlled-red", active && tone === "good" && "bg-oxide", current && "animate-pulse-soft"),
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-porcelain",
			children: label
		})]
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemDemo, {})
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
					delay: 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChangeGateMap, {
							activeId: openId,
							onSelect: setOpenId
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
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
var LAYERS = [
	{
		id: "agent",
		name: "Agent / Operator",
		role: "Intent · tool proposals · not authority",
		y: 16,
		height: 44,
		fill: "color-mix(in oklab, var(--color-slate) 80%, transparent)",
		stroke: "color-mix(in oklab, var(--color-porcelain) 18%, transparent)"
	},
	{
		id: "nexus-iq",
		name: "Nexus-IQ · composition",
		role: "Stage · validate · approve · commit/abort · receipts",
		y: 72,
		height: 56,
		fill: "color-mix(in oklab, var(--color-institution) 28%, transparent)",
		stroke: "color-mix(in oklab, var(--color-institution) 70%, transparent)",
		emphasis: true
	},
	{
		id: "nexus",
		name: "Nexus · execution",
		role: "WASM isolation · capabilities · snapshot · rollback · capsule emit",
		y: 144,
		height: 52,
		fill: "color-mix(in oklab, var(--color-oxide) 18%, transparent)",
		stroke: "color-mix(in oklab, var(--color-oxide) 55%, transparent)"
	},
	{
		id: "aeon",
		name: "AEON-IQ · memory plane",
		role: "Governed recall · memory evidence modes · lifecycle integrity",
		y: 208,
		height: 52,
		fill: "color-mix(in oklab, var(--color-signal) 14%, transparent)",
		stroke: "color-mix(in oklab, var(--color-signal) 50%, transparent)"
	},
	{
		id: "host",
		name: "Host boundary (trusted)",
		role: "OS · keys · operators · residual trust surface",
		y: 272,
		height: 40,
		fill: "color-mix(in oklab, var(--color-controlled-red) 12%, transparent)",
		stroke: "color-mix(in oklab, var(--color-controlled-red) 40%, transparent)"
	}
];
var FLOW = [
	{
		from: "agent",
		to: "nexus-iq",
		label: "propose"
	},
	{
		from: "nexus-iq",
		to: "nexus",
		label: "isolate · bind"
	},
	{
		from: "nexus",
		to: "aeon",
		label: "memory ctx"
	},
	{
		from: "nexus",
		to: "nexus-iq",
		label: "runtime facts"
	},
	{
		from: "nexus-iq",
		to: "agent",
		label: "capsule / receipt"
	}
];
/**
* Forensic system architecture — authority & evidence stack.
*/
function SystemArchitectureDiagram({ className }) {
	const [active, setActive] = (0, import_react.useState)("nexus-iq");
	const layer = LAYERS.find((l) => l.id === active) ?? LAYERS[1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
		title: "System architecture",
		refId: "FIG-SYS-01 · v2026.07",
		classification: "DESTINATION + FOUNDATIONS",
		className,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-porcelain-muted",
				children: layer.name
			}),
			" — ",
			layer.role,
			". Select a layer. Host remains a disclosed trust surface."
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 lg:grid-cols-[1.35fr_0.65fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 560 330",
					className: "h-auto w-full min-w-[300px]",
					role: "img",
					"aria-label": "Layered architecture: agent, Nexus-IQ, Nexus, AEON-IQ, host",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "280",
							y1: "28",
							x2: "280",
							y2: "300",
							stroke: "color-mix(in oklab, var(--color-porcelain) 14%, transparent)",
							strokeWidth: "1",
							strokeDasharray: "3 4"
						}),
						LAYERS.map((l) => {
							const selected = l.id === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "48",
									y: l.y,
									width: "464",
									height: l.height,
									rx: "8",
									fill: l.fill,
									stroke: selected ? "var(--color-porcelain)" : l.stroke,
									strokeWidth: selected ? 1.5 : 1,
									className: "cursor-pointer transition-[stroke] duration-200",
									onClick: () => setActive(l.id),
									role: "button",
									tabIndex: 0,
									onKeyDown: (e) => {
										if (e.key === "Enter" || e.key === " ") {
											e.preventDefault();
											setActive(l.id);
										}
									},
									"aria-label": `${l.name}: ${l.role}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "64",
									y: l.y + 22,
									fill: "var(--color-porcelain)",
									fontSize: "13",
									fontFamily: "var(--font-serif)",
									className: "pointer-events-none",
									children: l.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "64",
									y: l.y + 40,
									fill: "var(--color-porcelain-muted)",
									fontSize: "10",
									fontFamily: "var(--font-mono)",
									className: "pointer-events-none",
									children: l.role.length > 62 ? `${l.role.slice(0, 60)}…` : l.role
								}),
								l.emphasis ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "488",
									y: l.y + 22,
									textAnchor: "end",
									fill: "var(--color-porcelain)",
									fontSize: "9",
									fontFamily: "var(--font-mono)",
									className: "pointer-events-none",
									children: "PRODUCT"
								}) : null
							] }, l.id);
						}),
						[
							{
								y: 60,
								label: "intent"
							},
							{
								y: 128,
								label: "control"
							},
							{
								y: 196,
								label: "exec"
							},
							{
								y: 258,
								label: "memory"
							}
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "280",
							cy: m.y,
							r: "3.5",
							fill: "var(--color-institution)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "292",
							y: m.y + 3,
							fill: "var(--color-porcelain-subtle)",
							fontSize: "8",
							fontFamily: "var(--font-mono)",
							children: m.label
						})] }, m.label))
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
					children: "Control sequence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-1.5",
					children: FLOW.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("rounded-md border px-2.5 py-2 font-mono text-[11px] leading-snug transition-colors", active === f.from || active === f.to ? "border-institution/40 bg-institution/15 text-porcelain" : "border-border bg-void/40 text-porcelain-muted"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-porcelain-subtle",
								children: String(i + 1).padStart(2, "0")
							}),
							" ",
							f.from,
							" → ",
							f.to,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-[10px] text-porcelain-subtle",
								children: f.label
							})
						]
					}, `${f.from}-${f.to}-${i}`))
				})]
			})]
		})
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemArchitectureDiagram, {})
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
								className: "relative p-5 sm:p-6 transition-colors hover:bg-slate/30",
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
var SUCCESS_SCRIPT = [
	{
		id: "propose",
		label: "Propose",
		tick: "Prop",
		status: "TARGET",
		log: "agent.propose(repo_patch: dependency-bump)",
		detail: "Agent declares intent + scope for a repository change.",
		duration: 1200
	},
	{
		id: "stage",
		label: "Stage",
		tick: "Stag",
		status: "CURRENT",
		log: "nexus.snapshot(create) · isolation=worktree",
		detail: "Change isolated. Pre-execution snapshot captured.",
		duration: 1300
	},
	{
		id: "constrain",
		label: "Constrain",
		tick: "Auth",
		status: "CURRENT",
		log: "capability.bind(WriteFile:/src) · grant OK",
		detail: "Authority tokens bound. Unauthorized paths denied.",
		duration: 1200
	},
	{
		id: "validate",
		label: "Validate",
		tick: "Val",
		status: "IN_DEVELOPMENT",
		log: "validators.run([policy, health, diff]) · pass",
		detail: "Pre-commit validators evaluate the staged change.",
		duration: 1400
	},
	{
		id: "decide",
		label: "Commit",
		tick: "Cmt",
		status: "IN_DEVELOPMENT",
		log: "txn.decide(COMMIT) · effects applied",
		detail: "Only surviving changes cross the commit boundary.",
		branch: "commit",
		duration: 1300
	},
	{
		id: "emit",
		label: "Emit",
		tick: "Emit",
		status: "CURRENT",
		log: "proof_capsule.emit(signed, limitations[])",
		detail: "Portable runtime evidence leaves the boundary.",
		duration: 1600
	}
];
var ABORT_SCRIPT = [
	{
		id: "propose",
		label: "Propose",
		tick: "Prop",
		status: "TARGET",
		log: "agent.propose(tool: network_fetch)",
		detail: "Agent requests outbound network capability.",
		duration: 1100
	},
	{
		id: "stage",
		label: "Stage",
		tick: "Stag",
		status: "CURRENT",
		log: "nexus.snapshot(create) · isolation=sandbox",
		detail: "Execution staged behind the boundary.",
		duration: 1100
	},
	{
		id: "constrain",
		label: "Constrain",
		tick: "Auth",
		status: "CURRENT",
		log: "capability.bind(NetworkOutbound) · DENIED",
		detail: "Required capability not granted. Mismatch recorded.",
		duration: 1300
	},
	{
		id: "validate",
		label: "Validate",
		tick: "Val",
		status: "IN_DEVELOPMENT",
		log: "validators.run · requires_rollback=true",
		detail: "Failure classified; rollback required.",
		duration: 1200
	},
	{
		id: "decide",
		label: "Abort",
		tick: "Abt",
		status: "CURRENT",
		log: "txn.decide(ABORT) · rollback(snapshot)",
		detail: "Abort restores pre-execution state. No irreversible effect.",
		branch: "abort",
		duration: 1400
	},
	{
		id: "emit",
		label: "Emit",
		tick: "Emit",
		status: "CURRENT",
		log: "proof_capsule.emit(failure+rollback evidence)",
		detail: "Denial path still produces inspectable evidence.",
		duration: 1600
	}
];
var WALKTHROUGH_PATHS = [
	"capsule_id",
	"subject",
	"capabilities",
	"snapshot",
	"failure",
	"rollback",
	"limitations",
	"signature"
];
function fieldValuePreview(capsule, path, scenario) {
	if (path === "capsule_id") return String(capsule.capsule_id ?? "—");
	if (path === "subject") {
		const s = capsule.subject;
		return `${s?.tool_name ?? "—"} · ${s?.duration_ms ?? "—"}ms`;
	}
	if (path === "capabilities") {
		const c = capsule.capabilities;
		if (scenario === "abort" && c?.mismatch?.length) return `mismatch: ${c.mismatch.join(", ")}`;
		return `${c?.granted?.length ?? 0} granted / ${c?.required?.length ?? 0} required`;
	}
	if (path === "snapshot") {
		const snap = capsule.snapshot;
		return snap?.snapshot_id ? `${String(snap.snapshot_id).slice(0, 13)}…` : "—";
	}
	if (path === "failure") return capsule.failure?.failure_category ?? "null (success path)";
	if (path === "rollback") return capsule.rollback?.occurred ? "occurred · restored snapshot" : "none";
	if (path === "limitations") return `${capsule.limitations?.length ?? 0} mandatory entries`;
	if (path === "signature") return `${capsule.signature?.signer ?? "—"} · demo key only`;
	return "—";
}
/**
* Phase B — DemoPlayer v2 product film.
* Scrubber · dual path · capsule field walkthrough · downloadable fixtures.
*/
function DemoPlayer({ className }) {
	const reduced = useReducedMotion();
	const [scenario, setScenario] = (0, import_react.useState)("success");
	const [stepIndex, setStepIndex] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const [fieldIndex, setFieldIndex] = (0, import_react.useState)(0);
	const [view, setView] = (0, import_react.useState)("film");
	const script = scenario === "success" ? SUCCESS_SCRIPT : ABORT_SCRIPT;
	const capsule = scenario === "success" ? sampleCapsules.success : sampleCapsules.failureRollback;
	const step = script[Math.min(stepIndex, script.length - 1)];
	const atEmit = step.id === "emit";
	const progress = (stepIndex + 1) / script.length * 100;
	const logs = (0, import_react.useMemo)(() => script.slice(0, stepIndex + 1).map((s) => s.log), [script, stepIndex]);
	const walkthroughFields = (0, import_react.useMemo)(() => {
		return WALKTHROUGH_PATHS.map((path) => {
			return {
				path,
				explainer: CAPSULE_FIELD_EXPLAINERS.find((e) => e.path === path),
				preview: fieldValuePreview(capsule, path, scenario)
			};
		});
	}, [capsule, scenario]);
	const activeField = walkthroughFields[Math.min(fieldIndex, walkthroughFields.length - 1)];
	(0, import_react.useEffect)(() => {
		setStepIndex(0);
		setFieldIndex(0);
		if (!reduced) setPlaying(true);
	}, [scenario, reduced]);
	(0, import_react.useEffect)(() => {
		if (reduced || !playing || view === "compare") return;
		const current = script[stepIndex];
		if (!current) return;
		if (stepIndex >= script.length - 1 && atEmit) {
			const t = window.setTimeout(() => {
				setFieldIndex((fi) => {
					if (fi < walkthroughFields.length - 1) return fi + 1;
					setStepIndex(0);
					return 0;
				});
			}, current.duration);
			return () => window.clearTimeout(t);
		}
		const t = window.setTimeout(() => {
			setStepIndex((i) => Math.min(i + 1, script.length - 1));
			if (script[Math.min(stepIndex + 1, script.length - 1)]?.id === "emit") setFieldIndex(0);
		}, current.duration);
		return () => window.clearTimeout(t);
	}, [
		stepIndex,
		playing,
		reduced,
		script,
		view,
		atEmit,
		walkthroughFields.length
	]);
	(0, import_react.useEffect)(() => {
		if (!reduced) return;
		setStepIndex(script.length - 1);
		setFieldIndex(0);
		setPlaying(false);
	}, [reduced, script.length]);
	const seekTo = (0, import_react.useCallback)((index) => {
		const next = Math.max(0, Math.min(index, script.length - 1));
		setStepIndex(next);
		setPlaying(false);
		if (script[next]?.id === "emit") setFieldIndex(0);
	}, [script]);
	function downloadCapsule() {
		const name = scenario === "success" ? "success.capsule.json" : "failure-rollback.capsule.json";
		const blob = new Blob([JSON.stringify(capsule, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = name;
		a.click();
		URL.revokeObjectURL(url);
	}
	const branchLabel = step.branch ?? (scenario === "abort" && stepIndex >= 4 ? "abort" : scenario === "success" && stepIndex >= 4 ? "commit" : null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-xl border border-border bg-void shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)]", className),
		"data-demo-scenario": scenario,
		"data-demo-view": view,
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
							children: "nexus-iq · change-gate · product film v2"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("size-1.5 rounded-full", playing && !reduced && view === "film" ? "bg-oxide animate-pulse-soft" : "bg-porcelain-subtle"),
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
							children: reduced ? "static" : view === "compare" ? "compare" : playing ? "rec" : "paused"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border bg-carbon/80 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex rounded-md border border-border p-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setScenario("success"),
							"aria-pressed": scenario === "success",
							"data-demo-path": "success",
							className: cn("min-h-9 rounded px-2.5 py-1 text-xs transition-colors", scenario === "success" ? "bg-slate text-porcelain" : "text-porcelain-muted hover:text-porcelain"),
							children: "Commit path"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setScenario("abort"),
							"aria-pressed": scenario === "abort",
							"data-demo-path": "abort",
							className: cn("min-h-9 rounded px-2.5 py-1 text-xs transition-colors", scenario === "abort" ? "bg-slate text-porcelain" : "text-porcelain-muted hover:text-porcelain"),
							children: "Abort path"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex rounded-md border border-border p-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setView("film"),
							className: cn("min-h-9 rounded px-2.5 py-1 text-xs transition-colors", view === "film" ? "bg-slate text-porcelain" : "text-porcelain-muted hover:text-porcelain"),
							children: "Film"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setView("compare");
								setPlaying(false);
							},
							className: cn("min-h-9 rounded px-2.5 py-1 text-xs transition-colors", view === "compare" ? "bg-slate text-porcelain" : "text-porcelain-muted hover:text-porcelain"),
							children: "Compare paths"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => seekTo(0),
						className: "inline-flex size-9 items-center justify-center rounded-md text-porcelain-subtle transition-colors hover:bg-slate hover:text-porcelain disabled:opacity-40",
						"aria-label": "Restart film",
						disabled: view === "compare",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, {
							className: "size-3.5",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPlaying((p) => !p),
						className: "inline-flex size-9 items-center justify-center rounded-md text-porcelain-subtle transition-colors hover:bg-slate hover:text-porcelain disabled:opacity-40",
						"aria-label": playing ? "Pause" : "Play",
						disabled: reduced || view === "compare",
						children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
							className: "size-3.5",
							"aria-hidden": true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
							className: "size-3.5",
							"aria-hidden": true
						})
					})]
				})]
			}),
			view === "film" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border bg-void px-3 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
							children: "Scrub timeline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[10px] tabular-nums text-porcelain-muted",
							children: [
								stepIndex + 1,
								"/",
								script.length,
								" · ",
								step.label
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
						"aria-label": "Seek Change Gate phase",
						"aria-valuetext": `${step.label}, step ${stepIndex + 1} of ${script.length}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 flex justify-between gap-1",
						children: script.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => seekTo(i),
							className: cn("min-h-8 flex-1 truncate rounded px-0.5 font-mono text-[9px] uppercase tracking-wide transition-colors", i === stepIndex ? "text-porcelain" : i < stepIndex ? "text-porcelain-muted hover:text-porcelain" : "text-porcelain-subtle hover:text-porcelain-muted"),
							"aria-current": i === stepIndex ? "step" : void 0,
							children: s.tick
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-0.5 overflow-hidden rounded-full bg-slate",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-institution transition-[width] duration-300 ease-out",
							style: { width: `${progress}%` }
						})
					})
				]
			}) : null,
			view === "compare" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparePaths, { onSelectPath: (path) => {
				setScenario(path);
				setView("film");
				setStepIndex(0);
				setPlaying(true);
			} }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 lg:grid-cols-[1.05fr_0.95fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border p-4 lg:border-b-0 lg:border-r",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
						children: "Transaction pipeline · click to seek"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-1.5",
						children: script.map((s, i) => {
							const active = i === stepIndex;
							const done = i < stepIndex;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => seekTo(i),
								"aria-current": active ? "step" : void 0,
								className: cn("flex w-full items-center gap-2 rounded-md border px-2.5 py-2 text-left transition-[background-color,border-color,opacity] duration-200", active && "border-institution/50 bg-institution/15 demo-node-active", done && !active && "border-border/80 bg-slate/40 opacity-90", !done && !active && "border-border/50 bg-transparent opacity-50 hover:opacity-80"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("flex size-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px]", active && "bg-institution text-porcelain", done && !active && "bg-oxide/30 text-oxide-fg", !done && !active && "bg-slate text-porcelain-subtle"),
										children: done && !active ? "✓" : String(i + 1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate text-sm text-porcelain",
										children: s.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
										status: s.status,
										compact: true,
										showLabel: false
									})
								]
							}) }, `${scenario}-${s.id}`);
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
							className: "min-h-[7.5rem] rounded-md border border-border bg-carbon/80 p-3 font-mono text-[11px] leading-relaxed",
							children: logs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-porcelain-subtle",
								children: "awaiting transaction…"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1.5",
								children: logs.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: cn("text-porcelain-muted", i === logs.length - 1 && "text-porcelain"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-institution",
											children: "›"
										}),
										" ",
										line
									]
								}, `${line}-${i}`))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("mt-3 flex flex-1 flex-col rounded-md border p-3 transition-[border-color,background-color] duration-300", atEmit ? "border-archive/40 bg-archive/10 demo-capsule-glow" : "border-border bg-slate/30"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
									children: atEmit ? "Proof Capsule · field walkthrough" : "Proof Capsule"
								}), branchLabel === "abort" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-controlled-red/20 px-1.5 py-0.5 font-mono text-[10px] text-controlled-red-fg",
									children: "abort"
								}) : branchLabel === "commit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-oxide/20 px-1.5 py-0.5 font-mono text-[10px] text-oxide-fg",
									children: "commit"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-porcelain-subtle",
									children: "pending"
								})]
							}), !atEmit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-porcelain-muted",
								children: step.detail
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-[10px] text-porcelain-subtle",
								children: "Capsule walkthrough unlocks on Emit"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex min-h-0 flex-1 flex-col gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1",
										role: "tablist",
										"aria-label": "Capsule fields",
										children: walkthroughFields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											role: "tab",
											"aria-selected": i === fieldIndex,
											onClick: () => {
												setFieldIndex(i);
												setPlaying(false);
											},
											className: cn("rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide transition-colors", i === fieldIndex ? "border-archive/50 bg-archive/20 text-porcelain" : "border-border/60 text-porcelain-subtle hover:text-porcelain-muted"),
											children: f.path.split(".").pop()
										}, f.path))
									}),
									activeField ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										role: "tabpanel",
										className: "rounded border border-border/60 bg-void/50 p-2.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-baseline justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-medium text-porcelain",
													children: activeField.explainer?.title ?? activeField.path
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "font-mono text-[10px] text-porcelain-subtle",
													children: activeField.path
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-mono text-[11px] text-oxide",
												children: activeField.preview
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs leading-relaxed text-porcelain-muted",
												children: activeField.explainer?.whyItExists
											}),
											activeField.explainer?.doesNotMean ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1.5 border-l-2 border-controlled-red/40 pl-2 text-[11px] leading-relaxed text-porcelain-subtle",
												children: ["Does not mean: ", activeField.explainer.doesNotMean]
											}) : null
										]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-auto flex flex-wrap gap-2 pt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											size: "sm",
											variant: "outline",
											onClick: downloadCapsule,
											className: "min-h-9",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
												className: "size-3.5",
												"aria-hidden": true
											}), "Download capsule JSON"]
										})
									})
								]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-carbon px-3 py-2.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] leading-relaxed text-porcelain-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-porcelain-muted",
						children: "Stage 0 · "
					}), "Demo uses Implemented Foundations for snapshot, capability denial, and capsule emission. Full Change Gate commit barrier remains In Integration. Downloaded fixtures are structure-identical to the ProofCapsule schema; signatures are demo placeholders, not production trust anchors."]
				})
			})
		]
	});
}
function ComparePaths({ onSelectPath }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-0 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathColumn, {
			title: "Commit path",
			tone: "commit",
			steps: [
				"Propose repo change",
				"Stage + snapshot",
				"Bind WriteFile capability",
				"Validators pass",
				"Commit surviving effects",
				"Emit success capsule"
			],
			statuses: [
				"TARGET",
				"CURRENT",
				"CURRENT",
				"IN_DEVELOPMENT",
				"IN_DEVELOPMENT",
				"CURRENT"
			],
			onOpen: () => onSelectPath("success")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathColumn, {
			title: "Abort path",
			tone: "abort",
			steps: [
				"Propose network tool",
				"Stage + snapshot",
				"Network capability DENIED",
				"Rollback required",
				"Abort · restore snapshot",
				"Emit failure capsule"
			],
			statuses: [
				"TARGET",
				"CURRENT",
				"CURRENT",
				"IN_DEVELOPMENT",
				"CURRENT",
				"CURRENT"
			],
			onOpen: () => onSelectPath("abort")
		})]
	});
}
function PathColumn({ title, tone, steps, statuses, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("border-b border-border p-4 md:border-b-0", tone === "abort" ? "md:border-l md:border-border" : ""),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("font-mono text-[10px] uppercase tracking-[0.12em]", tone === "abort" ? "text-controlled-red-fg/90" : "text-oxide-fg/90"),
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onOpen,
				className: "font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle underline-offset-2 hover:text-porcelain hover:underline",
				children: "Play this path"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-1.5",
			children: steps.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: cn("flex items-center gap-2 rounded-md border px-2.5 py-2", tone === "abort" ? "border-controlled-red/20 bg-controlled-red/5" : "border-oxide/20 bg-oxide/5"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] tabular-nums text-porcelain-subtle",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 text-sm text-porcelain",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
						status: statuses[i],
						compact: true,
						showLabel: false
					})
				]
			}, label))
		})]
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
* During pinned cinematic (#intent in view): collapse to icon/progress spine.
* After pin: fuller labeled form. Mobile: top compact progress.
*/
function TransactionRail() {
	const reduced = useReducedMotion();
	const [activeId, setActiveId] = (0, import_react.useState)(TRANSACTION_BEATS[0].id);
	const [progress, setProgress] = (0, import_react.useState)(0);
	/** Spine while Intent pin occupies viewport; full after release */
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
		const pin = document.getElementById("intent");
		if (!pin) {
			setSpineMode(false);
			document.documentElement.dataset.txnRail = "full";
			return;
		}
		const update = () => {
			const rect = pin.getBoundingClientRect();
			const pinOnScreen = rect.bottom > 48 && rect.top < window.innerHeight;
			setSpineMode(pinOnScreen);
			document.documentElement.dataset.txnRail = pinOnScreen ? "spine" : "full";
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		const io = new IntersectionObserver(update, { threshold: [
			0,
			.01,
			.1,
			.5,
			1
		] });
		io.observe(pin);
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("pointer-events-auto rounded-xl border border-border bg-carbon/90 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md", !reduced && "transition-[width,padding] duration-200 ease-out", spineMode ? "w-11 p-1.5" : "w-[9.5rem] p-2.5"),
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
/** Token-sampled palette for canvas (no ad-hoc brand hex in JSX) */
var C = {
	void: "#07090b",
	carbon: "#111820",
	slate: "#1a252d",
	elevated: "#243039",
	porcelain: "#f6f1e7",
	institution: "#2f5e73",
	institutionBright: "#5a9bb8",
	oxide: "#496f59",
	oxideBright: "#7ab089",
	abort: "#7a3e3e",
	abortBright: "#c07070",
	archive: "#eee7d8",
	signal: "#a9793b"
};
function smoothstep(e0, e1, x) {
	const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
	return t * t * (3 - 2 * t);
}
function mix(a, b, t) {
	return a + (b - a) * t;
}
var DEBUG_CANVAS = typeof import.meta !== "undefined" && Boolean(false);
/**
* Direction 2 — Forensic Cross-Section instrument.
* ONE continuous apparatus; chambers are internal mechanical spaces.
* Atmospheric illustration only — not product evidence.
*/
function CommitBoundaryCanvas({ progress, className }) {
	const canvasRef = (0, import_react.useRef)(null);
	const progressRef = (0, import_react.useRef)(progress);
	const reduced = useReducedMotion();
	const rafRef = (0, import_react.useRef)(0);
	const timeRef = (0, import_react.useRef)(0);
	const pausedRef = (0, import_react.useRef)(false);
	const runningRef = (0, import_react.useRef)(true);
	progressRef.current = progress;
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", { alpha: false });
		if (!ctx) return;
		let w = 0;
		let h = 0;
		runningRef.current = true;
		const publishDebug = () => {
			if (!DEBUG_CANVAS) return;
			window.__nexusCanvasDebug = {
				paused: pausedRef.current,
				isPaused: () => pausedRef.current,
				rafActive: !pausedRef.current && runningRef.current && !reduced
			};
		};
		const clearDebug = () => {
			if (!DEBUG_CANVAS) return;
			if (window.__nexusCanvasDebug) {
				window.__nexusCanvasDebug.rafActive = false;
				window.__nexusCanvasDebug.paused = true;
			}
			delete window.__nexusCanvasDebug;
		};
		const setPaused = (p) => {
			pausedRef.current = p;
			publishDebug();
		};
		publishDebug();
		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = Math.max(1, Math.floor(rect.width));
			h = Math.max(1, Math.floor(rect.height));
			canvas.width = Math.floor(w * dpr);
			canvas.height = Math.floor(h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const roundRect = (x, y, rw, rh, r) => {
			const rr = Math.min(r, rw / 2, rh / 2);
			ctx.beginPath();
			ctx.moveTo(x + rr, y);
			ctx.arcTo(x + rw, y, x + rw, y + rh, rr);
			ctx.arcTo(x + rw, y + rh, x, y + rh, rr);
			ctx.arcTo(x, y + rh, x, y, rr);
			ctx.arcTo(x, y, x + rw, y, rr);
			ctx.closePath();
		};
		const draw = () => {
			const p = Math.min(1, Math.max(0, progressRef.current));
			const stage = smoothstep(.06, .28, p);
			const constrain = smoothstep(.28, .48, p);
			const validate = smoothstep(.48, .62, p);
			const decide = smoothstep(.58, .78, p);
			const emit = smoothstep(.78, .96, p);
			const portrait = h > w * .95;
			ctx.fillStyle = C.void;
			ctx.fillRect(0, 0, w, h);
			ctx.fillStyle = "rgba(17,24,32,0.55)";
			ctx.fillRect(0, h * .08, w, h * .84);
			let shellX, shellY, shellW, shellH;
			if (portrait) {
				shellX = w * .08;
				shellY = h * .12;
				shellW = w * .84;
				shellH = h * .72;
			} else {
				shellX = w * .32;
				shellY = h * .18;
				shellW = w * .62;
				shellH = h * .58;
			}
			ctx.fillStyle = C.carbon;
			roundRect(shellX, shellY, shellW, shellH, 18);
			ctx.fill();
			ctx.strokeStyle = "rgba(246,241,231,0.14)";
			ctx.lineWidth = 1.5;
			roundRect(shellX, shellY, shellW, shellH, 18);
			ctx.stroke();
			const pad = 10;
			const ix = shellX + pad;
			const iy = shellY + pad;
			const iw = shellW - pad * 2;
			const ih = shellH - pad * 2;
			ctx.fillStyle = C.void;
			roundRect(ix, iy, iw, ih, 12);
			ctx.fill();
			if (!portrait) {
				const spineY = iy + ih * .5;
				ctx.strokeStyle = "rgba(90,155,184,0.35)";
				ctx.lineWidth = 3;
				ctx.beginPath();
				ctx.moveTo(ix + 8, spineY);
				ctx.lineTo(ix + iw - 8, spineY);
				ctx.stroke();
				ctx.strokeStyle = "rgba(246,241,231,0.08)";
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(ix + 8, spineY - 14);
				ctx.lineTo(ix + iw * .62, spineY - 14);
				ctx.moveTo(ix + 8, spineY + 14);
				ctx.lineTo(ix + iw * .62, spineY + 14);
				ctx.stroke();
			} else {
				const spineX = ix + iw * .5;
				ctx.strokeStyle = "rgba(90,155,184,0.35)";
				ctx.lineWidth = 3;
				ctx.beginPath();
				ctx.moveTo(spineX, iy + 8);
				ctx.lineTo(spineX, iy + ih - 8);
				ctx.stroke();
			}
			const baysH = [
				{
					x0: .02,
					x1: .14
				},
				{
					x0: .14,
					x1: .28
				},
				{
					x0: .28,
					x1: .42
				},
				{
					x0: .42,
					x1: .54
				},
				{
					x0: .54,
					x1: .78
				},
				{
					x0: .78,
					x1: .98
				}
			];
			const baysV = [
				{
					y0: .02,
					y1: .16
				},
				{
					y0: .16,
					y1: .3
				},
				{
					y0: .3,
					y1: .44
				},
				{
					y0: .44,
					y1: .58
				},
				{
					y0: .58,
					y1: .78
				},
				{
					y0: .78,
					y1: .98
				}
			];
			const wallAlpha = .35 + stage * .35;
			ctx.strokeStyle = `rgba(246,241,231,${wallAlpha})`;
			ctx.lineWidth = 1.25;
			if (!portrait) for (let i = 1; i < 5; i++) {
				const bx = ix + iw * baysH[i].x0;
				ctx.beginPath();
				ctx.moveTo(bx, iy + 6);
				ctx.lineTo(bx, iy + ih - 6);
				ctx.stroke();
				ctx.fillStyle = C.elevated;
				ctx.fillRect(bx - 3, iy + ih * .35, 6, ih * .3);
			}
			else for (let i = 1; i < 5; i++) {
				const by = iy + ih * baysV[i].y0;
				ctx.beginPath();
				ctx.moveTo(ix + 6, by);
				ctx.lineTo(ix + iw - 6, by);
				ctx.stroke();
			}
			{
				const s = Math.max(stage, .25);
				ctx.fillStyle = `rgba(26,37,45,${.25 + s * .45})`;
				if (!portrait) {
					const b = baysH[1];
					const cx = ix + iw * b.x0;
					const cw = iw * (b.x1 - b.x0);
					ctx.fillRect(cx + 2, iy + ih * .18, cw - 4, ih * .64);
					ctx.strokeStyle = `rgba(90,155,184,${.2 + s * .5})`;
					ctx.lineWidth = 1.5;
					ctx.strokeRect(cx + 2, iy + ih * .18, cw - 4, ih * .64);
				} else {
					const b = baysV[1];
					const cy = iy + ih * b.y0;
					const ch = ih * (b.y1 - b.y0);
					ctx.fillRect(ix + iw * .12, cy + 2, iw * .76, ch - 4);
					ctx.strokeStyle = `rgba(90,155,184,${.2 + s * .5})`;
					ctx.strokeRect(ix + iw * .12, cy + 2, iw * .76, ch - 4);
				}
			}
			if (constrain > .01) {
				const squeeze = mix(.22, .08, constrain);
				ctx.fillStyle = `rgba(7,9,11,${.45 + constrain * .4})`;
				if (!portrait) {
					const b = baysH[2];
					const cx = ix + iw * b.x0;
					const cw = iw * (b.x1 - b.x0);
					ctx.beginPath();
					ctx.moveTo(cx, iy);
					ctx.lineTo(cx + cw, iy);
					ctx.lineTo(cx + cw, iy + ih * (.5 - squeeze));
					ctx.lineTo(cx, iy + ih * (.5 - squeeze * .6));
					ctx.closePath();
					ctx.fill();
					ctx.beginPath();
					ctx.moveTo(cx, iy + ih);
					ctx.lineTo(cx + cw, iy + ih);
					ctx.lineTo(cx + cw, iy + ih * (.5 + squeeze));
					ctx.lineTo(cx, iy + ih * (.5 + squeeze * .6));
					ctx.closePath();
					ctx.fill();
					ctx.strokeStyle = `rgba(169,121,59,${.3 + constrain * .5})`;
					ctx.lineWidth = 2;
					ctx.beginPath();
					ctx.moveTo(cx + 4, iy + ih * .5);
					ctx.lineTo(cx + cw - 4, iy + ih * .5);
					ctx.stroke();
				} else {
					const b = baysV[2];
					const cy = iy + ih * b.y0;
					const ch = ih * (b.y1 - b.y0);
					const side = mix(.2, .08, constrain);
					ctx.fillRect(ix, cy, iw * side, ch);
					ctx.fillRect(ix + iw * (1 - side), cy, iw * side, ch);
				}
			}
			if (validate > .01) {
				ctx.fillStyle = `rgba(47,94,115,${.15 + validate * .35})`;
				if (!portrait) {
					const b = baysH[3];
					const cx = ix + iw * b.x0;
					const cw = iw * (b.x1 - b.x0);
					ctx.fillRect(cx + cw * .35, iy + ih * .15, cw * .3, ih * .7);
					ctx.fillStyle = C.porcelain;
					ctx.globalAlpha = .5 + validate * .5;
					ctx.fillRect(cx + cw * .45, iy + ih * .15, 3, ih * .7);
					ctx.globalAlpha = 1;
					for (let i = 0; i < 3; i++) {
						const ny = iy + ih * (.28 + i * .2);
						ctx.fillStyle = C.signal;
						ctx.beginPath();
						ctx.arc(cx + cw * .5, ny, 4 + validate * 2, 0, Math.PI * 2);
						ctx.fill();
					}
				} else {
					const b = baysV[3];
					const cy = iy + ih * b.y0;
					const ch = ih * (b.y1 - b.y0);
					ctx.fillRect(ix + iw * .15, cy + ch * .35, iw * .7, ch * .3);
				}
			}
			if (decide > .01) {
				ctx.globalAlpha = Math.min(1, decide * 1.2);
				if (!portrait) {
					const b = baysH[4];
					const cx = ix + iw * b.x0;
					const cw = iw * (b.x1 - b.x0);
					const midY = iy + ih * .5;
					ctx.strokeStyle = "rgba(246,241,231,0.2)";
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(cx, midY);
					ctx.lineTo(cx + cw * .9, midY);
					ctx.stroke();
					ctx.strokeStyle = C.abortBright;
					ctx.lineWidth = 3.5;
					ctx.shadowColor = C.abortBright;
					ctx.shadowBlur = 12;
					ctx.beginPath();
					ctx.moveTo(cx + 8, midY - 10);
					ctx.bezierCurveTo(cx + cw * .4, midY - 18, cx + cw * .55, iy + ih * .22, cx + cw * .85, iy + ih * .2);
					ctx.stroke();
					ctx.shadowBlur = 0;
					const ax = cx + cw * .85;
					const ay = iy + ih * .2;
					ctx.fillStyle = C.abort;
					ctx.beginPath();
					ctx.moveTo(ax, ay - 10);
					ctx.lineTo(ax + 10, ay);
					ctx.lineTo(ax, ay + 10);
					ctx.lineTo(ax - 10, ay);
					ctx.closePath();
					ctx.fill();
					ctx.strokeStyle = C.abortBright;
					ctx.lineWidth = 2;
					ctx.stroke();
					ctx.font = "600 11px IBM Plex Sans, system-ui, sans-serif";
					ctx.fillStyle = C.porcelain;
					ctx.textAlign = "center";
					ctx.fillText("ABORT", ax, ay + 24);
					ctx.strokeStyle = C.oxideBright;
					ctx.lineWidth = 3.5;
					ctx.shadowColor = C.oxideBright;
					ctx.shadowBlur = 12;
					ctx.beginPath();
					ctx.moveTo(cx + 8, midY + 10);
					ctx.bezierCurveTo(cx + cw * .4, midY + 18, cx + cw * .55, iy + ih * .78, cx + cw * .85, iy + ih * .8);
					ctx.stroke();
					ctx.shadowBlur = 0;
					const cmx = cx + cw * .85;
					const cmy = iy + ih * .8;
					ctx.fillStyle = C.oxide;
					ctx.fillRect(cmx - 9, cmy - 9, 18, 18);
					ctx.strokeStyle = C.oxideBright;
					ctx.lineWidth = 2;
					ctx.strokeRect(cmx - 9, cmy - 9, 18, 18);
					ctx.fillStyle = C.porcelain;
					ctx.fillText("COMMIT", cmx, cmy + 26);
				} else {
					const b = baysV[4];
					const cy = iy + ih * b.y0;
					const ch = ih * (b.y1 - b.y0);
					ctx.strokeStyle = C.abortBright;
					ctx.lineWidth = 3;
					ctx.beginPath();
					ctx.moveTo(ix + iw * .5, cy + 4);
					ctx.lineTo(ix + iw * .22, cy + ch * .55);
					ctx.stroke();
					const ax = ix + iw * .22;
					const ay = cy + ch * .55;
					ctx.fillStyle = C.abort;
					ctx.beginPath();
					ctx.moveTo(ax, ay - 8);
					ctx.lineTo(ax + 8, ay);
					ctx.lineTo(ax, ay + 8);
					ctx.lineTo(ax - 8, ay);
					ctx.closePath();
					ctx.fill();
					ctx.font = "600 10px IBM Plex Sans, system-ui, sans-serif";
					ctx.fillStyle = C.porcelain;
					ctx.textAlign = "center";
					ctx.fillText("ABORT", ax, ay + 20);
					ctx.strokeStyle = C.oxideBright;
					ctx.beginPath();
					ctx.moveTo(ix + iw * .5, cy + 4);
					ctx.lineTo(ix + iw * .78, cy + ch * .55);
					ctx.stroke();
					const cmx = ix + iw * .78;
					const cmy = cy + ch * .55;
					ctx.fillStyle = C.oxide;
					ctx.fillRect(cmx - 8, cmy - 8, 16, 16);
					ctx.fillStyle = C.porcelain;
					ctx.fillText("COMMIT", cmx, cmy + 20);
				}
				ctx.globalAlpha = 1;
			}
			if (emit > .01) {
				ctx.globalAlpha = emit;
				if (!portrait) {
					const b = baysH[5];
					const cx = ix + iw * b.x0;
					const cw = iw * (b.x1 - b.x0);
					const trayY = iy + ih * .38;
					const trayH = ih * .24;
					ctx.fillStyle = C.elevated;
					roundRect(cx + 4, trayY, cw - 8, trayH, 6);
					ctx.fill();
					ctx.strokeStyle = "rgba(246,241,231,0.18)";
					ctx.stroke();
					const capW = mix(28, 56, emit);
					const capH = 28;
					const capX = cx + cw * .35 + emit * 8;
					const capY = trayY + trayH * .5 - capH / 2;
					ctx.fillStyle = C.archive;
					roundRect(capX, capY, capW, capH, 6);
					ctx.fill();
					ctx.strokeStyle = "rgba(26,31,36,0.35)";
					ctx.stroke();
					ctx.strokeStyle = "rgba(26,31,36,0.25)";
					for (let i = 0; i < 3; i++) {
						ctx.beginPath();
						ctx.moveTo(capX + 8, capY + 8 + i * 6);
						ctx.lineTo(capX + capW - 8 - i * 4, capY + 8 + i * 6);
						ctx.stroke();
					}
				} else {
					const b = baysV[5];
					const cy = iy + ih * b.y0;
					const ch = ih * (b.y1 - b.y0);
					ctx.fillStyle = C.elevated;
					roundRect(ix + iw * .2, cy + 6, iw * .6, ch - 12, 6);
					ctx.fill();
					ctx.fillStyle = C.archive;
					roundRect(ix + iw * .32, cy + ch * .3, iw * .36, ch * .4, 5);
					ctx.fill();
				}
				ctx.globalAlpha = 1;
			}
			const packetT = smoothstep(.02, .72, p);
			const packetVis = 1 - emit * .85;
			if (packetVis > .05) {
				let px, py;
				if (!portrait) {
					px = mix(ix + iw * .06, ix + iw * .52, packetT);
					py = iy + ih * .5 + (reduced ? 0 : Math.sin(timeRef.current * 1.4) * 3);
				} else {
					px = ix + iw * .5;
					py = mix(iy + ih * .08, iy + ih * .52, packetT);
				}
				ctx.fillStyle = `rgba(90,155,184,${.35 * packetVis})`;
				ctx.beginPath();
				ctx.arc(px, py, 18, 0, Math.PI * 2);
				ctx.fill();
				ctx.fillStyle = `rgba(246,241,231,${.92 * packetVis})`;
				ctx.save();
				ctx.translate(px, py);
				ctx.rotate(Math.PI / 4);
				ctx.fillRect(-6, -6, 12, 12);
				ctx.restore();
				ctx.strokeStyle = C.institutionBright;
				ctx.lineWidth = 1.5;
				ctx.beginPath();
				ctx.rect(px - 7, py - 7, 14, 14);
				ctx.stroke();
			}
			ctx.font = "500 9px IBM Plex Mono, ui-monospace, monospace";
			ctx.fillStyle = "rgba(246,241,231,0.28)";
			ctx.textAlign = "left";
			ctx.fillText("TXN CROSS-SECTION · ATMOSPHERIC", shellX + 14, shellY + shellH - 10);
		};
		const schedule = () => {
			if (!runningRef.current || pausedRef.current || reduced) return;
			cancelAnimationFrame(rafRef.current);
			rafRef.current = requestAnimationFrame(loop);
		};
		const loop = () => {
			if (!runningRef.current) return;
			if (pausedRef.current || reduced) {
				publishDebug();
				return;
			}
			timeRef.current += .016;
			draw();
			publishDebug();
			rafRef.current = requestAnimationFrame(loop);
		};
		/** Viewport geometry check — reliable when sticky pin scrolls away */
		const isCanvasInView = () => {
			const rect = canvas.getBoundingClientRect();
			return rect.width > 0 && rect.height > 0 && rect.bottom > 1 && rect.top < window.innerHeight - 1 && rect.right > 1 && rect.left < window.innerWidth - 1;
		};
		const applyVisibility = () => {
			if (document.hidden || !isCanvasInView()) {
				setPaused(true);
				cancelAnimationFrame(rafRef.current);
				publishDebug();
			} else if (pausedRef.current) {
				setPaused(false);
				if (reduced) {
					draw();
					publishDebug();
				} else schedule();
			} else publishDebug();
		};
		const onVisibility = () => applyVisibility();
		const onScrollOrResize = () => applyVisibility();
		const io = new IntersectionObserver(([entry]) => {
			if (!entry || !entry.isIntersecting || entry.intersectionRatio <= .01 || document.hidden) {
				setPaused(true);
				cancelAnimationFrame(rafRef.current);
				publishDebug();
			} else {
				setPaused(false);
				if (reduced) {
					draw();
					publishDebug();
				} else schedule();
			}
		}, {
			threshold: [
				0,
				.01,
				.1,
				.25,
				.5,
				1
			],
			rootMargin: "0px"
		});
		io.observe(canvas);
		resize();
		draw();
		publishDebug();
		const ro = new ResizeObserver(() => {
			resize();
			if (!pausedRef.current) draw();
			applyVisibility();
		});
		ro.observe(canvas);
		document.addEventListener("visibilitychange", onVisibility);
		window.addEventListener("scroll", onScrollOrResize, { passive: true });
		window.addEventListener("resize", onScrollOrResize);
		if (!reduced) schedule();
		applyVisibility();
		return () => {
			runningRef.current = false;
			cancelAnimationFrame(rafRef.current);
			ro.disconnect();
			io.disconnect();
			document.removeEventListener("visibilitychange", onVisibility);
			window.removeEventListener("scroll", onScrollOrResize);
			window.removeEventListener("resize", onScrollOrResize);
			clearDebug();
		};
	}, [reduced]);
	(0, import_react.useEffect)(() => {}, [progress]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className,
		"aria-hidden": true,
		"data-instrument": "cross-section"
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
	if (p < .62) return {
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
/** Shared content gutter: clears txn rail spine at xl+ */
var CONTENT_GUTTER = "px-4 pb-24 pt-20 sm:px-8 lg:px-12 xl:pl-[var(--txn-content-gutter)] xl:pr-10";
var LAYER_ACTIVE = .1;
/**
* Sticky full-viewport cinematic continuum for Intent → Gap.
* Direction 2: one continuous forensic instrument (not cards/bento).
*/
function PinnedCinematic({ maturityCounts }) {
	const trackRef = (0, import_react.useRef)(null);
	const intentLayerRef = (0, import_react.useRef)(null);
	const gapLayerRef = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const [progress, setProgress] = (0, import_react.useState)(reduced ? .94 : .04);
	const [phase, setPhase] = (0, import_react.useState)(phaseOf(reduced ? .94 : .04));
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
	}, [reduced]);
	const intentOpacity = reduced ? 1 : progress < .12 ? 1 : progress < .28 ? 1 - (progress - .12) / .16 : 0;
	const gapOpacity = reduced ? 0 : progress < .22 ? 0 : progress < .36 ? (progress - .22) / .14 : progress < .72 ? 1 : progress < .88 ? 1 - (progress - .72) / .16 : 0;
	const exitOpacity = reduced ? 0 : clamp01((progress - .82) / .12);
	const showDualExits = reduced || progress > .62;
	const intentActive = intentOpacity >= LAYER_ACTIVE;
	const gapActive = gapOpacity >= LAYER_ACTIVE;
	(0, import_react.useEffect)(() => {
		const active = document.activeElement;
		if (!(active instanceof HTMLElement)) return;
		const intentEl = intentLayerRef.current;
		const gapEl = gapLayerRef.current;
		if (intentEl?.contains(active) && !intentActive) active.blur();
		if (gapEl?.contains(active) && !gapActive) active.blur();
	}, [intentActive, gapActive]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: trackRef,
		id: "intent",
		className: "relative",
		style: { height: reduced ? "100dvh" : "320vh" },
		"data-testid": "forensic-instrument",
		"data-instrument": "cross-section",
		"data-pin-progress": progress.toFixed(3),
		"data-reduced-motion": reduced ? "true" : "false",
		"aria-label": "Transactional change gate cross-section continuum",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 h-[100dvh] w-full overflow-hidden bg-void",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommitBoundaryCanvas, {
					progress,
					className: "absolute inset-0 h-full w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-y-0 left-0 w-full max-w-2xl bg-gradient-to-r from-void/92 via-void/55 to-transparent xl:max-w-xl",
					style: { marginLeft: 0 },
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void via-void/50 to-transparent",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: intentLayerRef,
					"data-narrative-layer": "intent",
					"data-narrative-active": intentActive ? "true" : "false",
					className: cn("absolute inset-0 flex flex-col justify-center", CONTENT_GUTTER, "transition-opacity duration-300", !intentActive && "pointer-events-none"),
					style: { opacity: intentOpacity },
					"aria-hidden": !intentActive,
					...!intentActive ? { inert: true } : {},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl space-y-5",
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
								className: "text-hero text-balance font-medium tracking-tight text-porcelain drop-shadow-[0_2px_24px_rgba(7,9,11,0.8)]",
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
					className: cn("absolute inset-0 flex flex-col justify-center", CONTENT_GUTTER, "pb-28 transition-opacity duration-300", !gapActive && "pointer-events-none"),
					style: { opacity: gapOpacity },
					"aria-hidden": !gapActive,
					...!gapActive ? { inert: true } : {},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-lg space-y-4",
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
					className: cn("pointer-events-none absolute z-[5] rounded-md border border-archive-ink/20 bg-archive px-3 py-2 shadow-lg", "right-6 bottom-28 sm:right-10 md:right-[12%] lg:right-[10%]", !reduced && "opacity-90"),
					"aria-hidden": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[9px] uppercase tracking-[0.12em] text-archive-ink/70",
						children: "Proof Capsule"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 w-16 bg-archive-ink/25" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 w-12 bg-archive-ink/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 w-14 bg-archive-ink/15" })
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
									children: "Operating model"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-lg text-porcelain sm:text-xl",
									children: phase.label
								}),
								showDualExits ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-porcelain-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-block size-2 rotate-45 bg-controlled-red",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-controlled-red-fg",
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
												className: "inline-block size-2 bg-oxide",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-oxide-fg",
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
									children: "Atmospheric · not evidence"
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
					className: cn("pointer-events-none absolute inset-x-0 bottom-16 flex justify-center transition-opacity", exitOpacity < .05 && "opacity-0"),
					style: { opacity: exitOpacity },
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-full bg-void/70 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-muted backdrop-blur-sm",
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
* Motif-first handoff: instrument emit tray / capsule continues into DemoPlayer.
* Not a text-only gradient wash. DemoPlayer remains the interactive proof surface.
*/
function SceneHandoff({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden border-b border-border bg-void",
		"data-testid": "scene-handoff",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-x-0 top-0 flex justify-center",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-36 w-full max-w-3xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-0 h-28 w-[min(100%,36rem)] -translate-x-1/2 rounded-b-2xl border border-t-0 border-border bg-carbon/80",
						style: { boxShadow: "inset 0 -24px 48px color-mix(in oklab, var(--color-void) 55%, transparent)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-0 h-32 w-0.5 -translate-x-1/2",
						style: { background: "linear-gradient(to bottom, color-mix(in oklab, var(--color-institution) 70%, transparent), transparent)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute left-1/2 top-2 h-28 w-full max-w-xl -translate-x-1/2",
						viewBox: "0 0 400 100",
						"aria-hidden": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M200 8 C 240 20, 280 18, 340 28",
								fill: "none",
								stroke: "var(--color-controlled-red)",
								strokeWidth: "2.5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M200 8 C 240 30, 290 55, 345 72",
								fill: "none",
								stroke: "var(--color-oxide)",
								strokeWidth: "2.5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
								points: "340,20 348,28 340,36 332,28",
								fill: "var(--color-controlled-red)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "337",
								y: "64",
								width: "16",
								height: "16",
								fill: "var(--color-oxide)"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-instrument-node": "handoff-capsule",
						className: "absolute left-1/2 top-16 flex -translate-x-1/2 items-center gap-2 rounded-md border border-archive-ink/15 bg-archive px-3 py-1.5 opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[0.1em] text-archive-ink/70",
							children: "Capsule → proof surface"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-3 w-8 rounded-sm bg-archive-ink/20" })]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative pt-8",
			children
		})]
	});
}
/**
* Homepage as one controlled transaction:
* Intent → Gap (pinned cinematic) → Execute → Model → Evidence → …
*/
function HomePage() {
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionBeatChrome, {
					beatId: "execute",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20",
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoPlayer, {})
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
