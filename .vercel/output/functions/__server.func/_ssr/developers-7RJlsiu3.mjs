import { r as __toESM } from "../_runtime.mjs";
import { n as BRAND } from "./site-copy-BRpXPyRy.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { b as resolveDevelopersSearch, l as getIntegrationScenario, r as INTEGRATION_SCENARIOS } from "./evaluator-search-Buqd9Qff.mjs";
import { n as MaturityBadge } from "./maturity-badge-BLweOVLC.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
import { n as provenanceSummary, t as buildFigureProvenance } from "./visual-provenance-C-bGV2PH.mjs";
import { t as TRUST_CLASS_META } from "./trust-taxonomy-WCI1T06w.mjs";
import { t as Route } from "./developers-r2OColFN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/developers-7RJlsiu3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function IntegrationSimulator({ className, scenarioId: scenarioIdProp, stepIndex: stepIndexProp, architecture: _architectureProp, onScenarioChange, onStepChange, onArchitectureChange }) {
	const [internalId, setInternalId] = (0, import_react.useState)("readonly-inspect");
	const [internalStep, setInternalStep] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const id = scenarioIdProp ?? internalId;
	const step = stepIndexProp ?? internalStep;
	const setId = (next) => {
		setInternalId(next);
		onScenarioChange?.(next);
		if (getIntegrationScenario(next).mode === "TARGET_ARCHITECTURE") onArchitectureChange?.("destination");
		else onArchitectureChange?.("current");
	};
	const setStep = (v) => {
		const next = typeof v === "function" ? v(step) : v;
		setInternalStep(next);
		onStepChange?.(next);
	};
	const scenario = getIntegrationScenario(id);
	const current = scenario.steps[Math.min(step, scenario.steps.length - 1)];
	const isTarget = scenario.mode === "TARGET_ARCHITECTURE";
	const prov = buildFigureProvenance("FIG-DEV-09", "fixture", { filters: `scenario=${id};step=${step}` });
	(0, import_react.useEffect)(() => {
		setStep(0);
		setPlaying(false);
	}, [id]);
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		if (step >= scenario.steps.length - 1) {
			setPlaying(false);
			return;
		}
		const t = window.setTimeout(() => setStep((s) => s + 1), 900);
		return () => window.clearTimeout(t);
	}, [
		playing,
		step,
		scenario.steps.length
	]);
	const trust = TRUST_CLASS_META[current.trust];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-carbon", className),
		"data-testid": "integration-simulator",
		"data-figure": "FIG-DEV-09",
		"data-scenario": id,
		"data-step": step,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "FIG-DEV-09 · Developer integration simulator"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-porcelain-muted",
					children: "Local fixture · no live runtime · no side effects"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPlaying((p) => !p),
						className: "rounded-md border border-border px-2 py-1.5 font-mono text-[10px] uppercase text-porcelain-muted",
						children: playing ? "Pause" : "Step play"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setStep(0);
							setPlaying(false);
						},
						className: "rounded-md border border-border px-2 py-1.5 font-mono text-[10px] uppercase text-porcelain-muted",
						children: "Reset"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-signal/30 bg-signal/10 px-3 py-2 text-sm text-porcelain-muted sm:px-4",
				role: "status",
				children: ["LOCAL FIXTURE — NO LIVE RUNTIME CLAIM", isTarget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 font-mono text-[10px] uppercase text-signal",
					children: "· Target Architecture explicitly selected"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-w-0 flex-wrap gap-1.5 border-b border-border px-3 py-2 sm:px-4",
				children: INTEGRATION_SCENARIOS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": id === s.id,
					onClick: () => setId(s.id),
					className: cn("max-w-full shrink rounded-md border px-2 py-1.5 text-left font-mono text-[10px] uppercase leading-tight", id === s.id ? "border-institution/55 bg-institution/20 text-porcelain" : "border-border text-porcelain-subtle", s.mode === "TARGET_ARCHITECTURE" && "border-dashed"),
					children: s.title
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 lg:grid-cols-[1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border p-4 lg:border-b-0 lg:border-r",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
							children: [
								"Boundary trace · ",
								step + 1,
								"/",
								scenario.steps.length
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-2",
							children: scenario.steps.map((s, i) => {
								const active = i === step;
								const done = i < step;
								const t = TRUST_CLASS_META[s.trust];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setStep(i);
										setPlaying(false);
									},
									className: cn("flex w-full flex-col gap-1 rounded-lg border px-3 py-2 text-left sm:flex-row sm:items-center sm:justify-between", active && "border-institution/50 bg-institution/15", done && !active && "border-border bg-slate/30", !done && !active && "border-border/50 opacity-60"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-mono text-[10px] uppercase text-porcelain-subtle",
												children: [
													s.phase,
													" · ",
													s.from,
													" → ",
													s.to
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-porcelain",
												children: s.action
											}),
											s.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-porcelain-subtle",
												children: s.note
											}) : null
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex shrink-0 items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[10px] text-porcelain-subtle",
											children: [
												t.symbol,
												" ",
												t.short
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
											status: s.maturity,
											compact: true,
											showLabel: false
										})]
									})]
								}) }, `${s.phase}-${i}`);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[11px] text-porcelain-subtle",
							children: "Memory may inform reasoning. It never crosses the authority lane or silently widens capabilities."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-void p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase text-porcelain-subtle",
								children: "Request envelope (representative)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "mt-2 max-w-full overflow-x-auto whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed text-porcelain-muted",
								children: `{
  "intent": ${JSON.stringify(scenario.summary.slice(0, 48) + "…")},
  "capabilities": ${JSON.stringify(scenario.capabilities, null, 2)},
  "mode": ${JSON.stringify(scenario.mode)},
  "representation": "fixture"
}`
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-void p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase text-porcelain-subtle",
										children: "Terminal decision"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("rounded px-2 py-0.5 font-mono text-[10px]", scenario.decision === "COMMIT" && "bg-oxide/20 text-oxide-fg", (scenario.decision === "ABORT" || scenario.decision === "DENY") && "bg-controlled-red/20 text-controlled-red-fg"),
										children: scenario.decision
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-porcelain-muted",
									children: scenario.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 font-mono text-[10px] text-porcelain-subtle",
									children: [
										"Active step trust: ",
										trust.symbol,
										" ",
										trust.short,
										" — ",
										trust.definition
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-archive/30 bg-archive/10 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase text-porcelain-subtle",
									children: "Returned evidence (fixture fields)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-2 space-y-1 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-porcelain-subtle",
												children: "failure"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-mono text-porcelain",
												children: scenario.receipt.failure ?? "null"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-porcelain-subtle",
												children: "rollback"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-mono text-porcelain",
												children: scenario.receipt.rollback
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-porcelain-subtle",
												children: "attestation"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-mono text-porcelain",
												children: scenario.receipt.attestation
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-porcelain-subtle",
												children: "signature"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-mono text-porcelain",
												children: scenario.receipt.signature
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 rounded border border-controlled-red/30 bg-controlled-red/10 p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase text-controlled-red-fg",
										children: "limitations[] · mandatory"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-1 space-y-0.5 text-xs text-porcelain-muted",
										children: scenario.receipt.limitations.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["! ", l] }, l))
									})]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "border-t border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-porcelain-muted",
					children: "Default path is current WASM guest↔host foundations. Destination Change Gate requires explicit selection and remains labeled non-current. No credentials, network calls, or repository mutations."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-[10px] text-porcelain-subtle",
					children: provenanceSummary(prov)
				})]
			})
		]
	});
}
var PATHS = [
	{
		title: "Nexus execution substrate",
		body: "WASM isolation, snap-rollback, capability-gated WASI, Proof Capsule generation paths.",
		href: BRAND.githubNexus,
		external: true
	},
	{
		title: "AEON-IQ memory plane",
		body: "Governed memory, retrieval evidence modes, lifecycle integrity foundations.",
		href: BRAND.githubAeon,
		external: true
	},
	{
		title: "Nexus-IQ composition kit",
		body: "Transactional composition layer destination. Stage 0 integration is the honest scope today.",
		href: BRAND.githubNexusIq,
		external: true
	},
	{
		title: "Proof Capsule Explorer",
		body: "Inspect structure-identical fixtures in-browser before wiring a host verifier.",
		href: "/evidence/proof-capsules",
		external: false
	}
];
function DevelopersPage() {
	const search = resolveDevelopersSearch(Route.useSearch());
	const navigate = Route.useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-w-0 max-w-[72rem] space-y-10 overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle",
						children: "Developers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl text-porcelain sm:text-4xl",
						children: "Build with the foundations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-porcelain-muted",
						children: "Self-host the execution and memory substrates. Honest scope: Nexus governs the WASM guest↔host boundary today—not full LLM tool-choice interception. The Change Gate is the product composition destination."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: "CURRENT" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: "IN_DEVELOPMENT" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: "TARGET" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationSimulator, {
				scenarioId: search.scenario,
				stepIndex: search.step,
				architecture: search.architecture,
				onScenarioChange: (scenario) => navigate({
					search: (prev) => ({
						...prev,
						scenario,
						step: 0
					}),
					replace: true
				}),
				onStepChange: (step) => navigate({
					search: (prev) => ({
						...prev,
						step
					}),
					replace: true
				}),
				onArchitectureChange: (architecture) => navigate({
					search: (prev) => ({
						...prev,
						architecture
					}),
					replace: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
				title: "Integration paths",
				refId: "DEV-PATH-01",
				classification: "ENGINEERING",
				footer: "Prefer evidence artifacts and maturity rows over slogans when evaluating adoption.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2",
					children: PATHS.map((p) => {
						const className = "flex h-full flex-col rounded-lg border border-border bg-void/50 p-4 transition-colors hover:border-porcelain/20 hover:bg-slate/30";
						const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-lg text-porcelain",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 flex-1 text-sm leading-relaxed text-porcelain-muted",
								children: p.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle",
								children: p.external ? "External repository" : "On this site"
							})
						] });
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: p.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.href,
							target: "_blank",
							rel: "noreferrer",
							className,
							children: body
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: p.href,
							className,
							children: body
						}) }, p.title);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "default",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BRAND.githubNexus,
							target: "_blank",
							rel: "noreferrer",
							children: "Nexus repository"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BRAND.benchmarks,
							target: "_blank",
							rel: "noreferrer",
							children: "Live benchmarks"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/maturity",
							children: "Maturity registry"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#evaluation",
							children: "Request evaluation"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { DevelopersPage as component };
