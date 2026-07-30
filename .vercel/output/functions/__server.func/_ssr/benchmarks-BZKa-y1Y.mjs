import { r as __toESM } from "../_runtime.mjs";
import { n as BRAND } from "./site-copy-BRpXPyRy.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { c as evaluateFixturePublicationGate, h as percentile, m as median, n as BENCHMARK_METRICS, t as BENCHMARK_FIXTURE_DISCLAIMER, v as resolveBenchmarksSearch } from "./evaluator-search-Buqd9Qff.mjs";
import { n as MaturityBadge } from "./maturity-badge-BLweOVLC.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./benchmarks-BGYvd2_B.mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
import { n as provenanceSummary, t as buildFigureProvenance } from "./visual-provenance-C-bGV2PH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/benchmarks-BZKa-y1Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BenchmarkWorkbench({ className, metricId: metricIdProp, showRaw: showRawProp, onMetricChange, onShowRawChange }) {
	const [internalMetricId, setInternalMetricId] = (0, import_react.useState)(BENCHMARK_METRICS[0].id);
	const [internalShowRaw, setInternalShowRaw] = (0, import_react.useState)(false);
	const [showBaseline, setShowBaseline] = (0, import_react.useState)(true);
	const metricId = metricIdProp ?? internalMetricId;
	const showRaw = showRawProp ?? internalShowRaw;
	const setMetricId = (id) => {
		setInternalMetricId(id);
		onMetricChange?.(id);
	};
	const setShowRaw = (v) => {
		const next = typeof v === "function" ? v(showRaw) : v;
		setInternalShowRaw(next);
		onShowRawChange?.(next);
	};
	const metric = BENCHMARK_METRICS.find((m) => m.id === metricId) ?? BENCHMARK_METRICS[0];
	const gate = evaluateFixturePublicationGate();
	const prov = buildFigureProvenance("FIG-BEN-08", "fixture", {
		filters: `metric=${metricId}`,
		sourceRefs: ["src/content/benchmark-fixture.ts"]
	});
	const stats = (0, import_react.useMemo)(() => summarize(metric), [metric]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl border border-border bg-carbon", className),
		"data-testid": "benchmark-workbench",
		"data-figure": "FIG-BEN-08",
		"data-citable": "false",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "FIG-BEN-08 · Benchmark reproducibility workbench"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-porcelain-muted",
					children: "Methodology before headlines · publication gate derived"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: BENCHMARK_METRICS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": metricId === m.id,
						onClick: () => setMetricId(m.id),
						className: cn("rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase", metricId === m.id ? "border-institution/55 bg-institution/20 text-porcelain" : "border-border text-porcelain-subtle"),
						children: m.name
					}, m.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-controlled-red/40 bg-controlled-red/15 px-3 py-2 text-sm font-medium text-controlled-red-fg sm:px-4",
				role: "status",
				children: BENCHMARK_FIXTURE_DISCLAIMER
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border p-4 lg:border-b-0 lg:border-r",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] uppercase text-porcelain-subtle",
								children: [
									metric.name,
									" · ",
									metric.unit
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded border border-controlled-red/40 bg-controlled-red/10 px-2 py-0.5 font-mono text-[10px] text-controlled-red-fg",
								children: "CITABLE: NO"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistributionChart, {
							metric,
							showBaseline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": showBaseline,
								onClick: () => setShowBaseline((v) => !v),
								className: "rounded border border-border px-2 py-1 font-mono text-[10px] text-porcelain-muted",
								children: showBaseline ? "Hide baseline" : "Show baseline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": showRaw,
								onClick: () => setShowRaw((v) => !v),
								className: "rounded border border-border px-2 py-1 font-mono text-[10px] text-porcelain-muted",
								children: showRaw ? "Hide raw samples" : "Raw samples"
							})]
						}),
						showRaw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[20rem] text-left text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border text-porcelain-subtle",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-1 pr-2",
											children: "#"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-1 pr-2",
											children: "Candidate"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-1",
											children: "Baseline"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: metric.candidate.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border/50 font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-0.5 pr-2 text-porcelain-subtle",
											children: i + 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-0.5 pr-2 text-porcelain",
											children: v.toFixed(3)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-0.5 text-porcelain-muted",
											children: metric.baseline[i]?.toFixed(3)
										})
									]
								}, i)) })]
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs leading-relaxed text-porcelain-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-porcelain-subtle",
								children: "Guardrail · "
							}), metric.interpretationGuardrail]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-void p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase text-porcelain-subtle",
									children: "Publication gate"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-controlled-red-fg",
									children: "Not citable — fixture mode"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-0.5 text-xs text-porcelain-muted",
									children: gate.missingOrInvalid.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· missing: ", m] }, m))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-void p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase text-porcelain-subtle",
									children: "Fixture statistics (normalized)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-2 grid grid-cols-2 gap-2 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-porcelain-subtle",
											children: "Candidate median"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-mono text-porcelain",
											children: stats.candMed.toFixed(3)
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-porcelain-subtle",
											children: "Baseline median"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-mono text-porcelain-muted",
											children: stats.baseMed.toFixed(3)
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-porcelain-subtle",
											children: "p10–p90"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
											className: "font-mono text-porcelain-muted",
											children: [
												stats.candP10.toFixed(3),
												"–",
												stats.candP90.toFixed(3)
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-porcelain-subtle",
											children: "n samples"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-mono text-porcelain-muted",
											children: metric.candidate.length
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-[11px] text-porcelain-subtle",
									children: [
										"Comparison verdict:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-porcelain-muted",
											children: "Incomparable"
										}),
										" — fixture baseline is not a verified CI parity pair."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-void p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase text-porcelain-subtle",
								children: "Environment / provenance (required for citation)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-2 space-y-1 text-xs text-porcelain-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Repository / commit: unavailable in fixture" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Workflow run: unavailable" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Raw artifact + SHA-256: unavailable" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Runner / OS / compiler: unavailable" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Workload command + input shape: unavailable" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: BRAND.benchmarks,
									target: "_blank",
									rel: "noreferrer",
									children: "Open live Nexus benchmarks"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: BRAND.githubNexus,
									target: "_blank",
									rel: "noreferrer",
									children: "Benchmark source"
								})
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "border-t border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-porcelain-muted",
					children: "Production workbench must ingest validated CI manifests. This route never invents performance claims. Primitive init is never compared with integrated request latency as a regression verdict."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-[10px] text-porcelain-subtle",
					children: provenanceSummary(prov)
				})]
			})
		]
	});
}
function summarize(metric) {
	return {
		candMed: median(metric.candidate),
		baseMed: median(metric.baseline),
		candP10: percentile(metric.candidate, 10),
		candP90: percentile(metric.candidate, 90)
	};
}
function DistributionChart({ metric, showBaseline }) {
	const w = 520;
	const h = 180;
	const pad = 28;
	const all = showBaseline ? [...metric.candidate, ...metric.baseline] : metric.candidate;
	const min = Math.min(...all) * .92;
	const max = Math.max(...all) * 1.08;
	const scaleX = (i, n) => pad + i / Math.max(1, n - 1) * (w - pad * 2);
	const scaleY = (v) => h - pad - (v - min) / (max - min || 1) * (h - pad * 2);
	const path = (xs) => xs.map((v, i) => `${i === 0 ? "M" : "L"}${scaleX(i, xs.length).toFixed(1)},${scaleY(v).toFixed(1)}`).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "w-full max-w-full",
		role: "img",
		"aria-label": `${metric.name} distribution fixture chart`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: w,
				height: h,
				fill: "#07090b",
				rx: "8"
			}),
			[
				.25,
				.5,
				.75
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: pad,
				x2: w - pad,
				y1: pad + t * (h - pad * 2),
				y2: pad + t * (h - pad * 2),
				stroke: "#f6f1e7",
				strokeOpacity: "0.08"
			}, t)),
			showBaseline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: path(metric.baseline),
				fill: "none",
				stroke: "#7a7670",
				strokeWidth: "1.5",
				strokeDasharray: "4 3"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: path(metric.candidate),
				fill: "none",
				stroke: "#5f93a8",
				strokeWidth: "2"
			}),
			metric.candidate.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: scaleX(i, metric.candidate.length),
				cy: scaleY(v),
				r: "2.5",
				fill: "#5f93a8"
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
				x: pad,
				y: 16,
				fill: "#7a7670",
				fontSize: "10",
				fontFamily: "monospace",
				children: [
					"normalized · lower ",
					metric.lowerBetter ? "better" : "not better",
					" · fixture"
				]
			})
		]
	});
}
function BenchmarksPage() {
	const search = resolveBenchmarksSearch(Route.useSearch());
	const navigate = Route.useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-w-0 max-w-[72rem] space-y-8 overflow-x-hidden px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: "CURRENT" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-porcelain sm:text-3xl",
						children: "Benchmarks & methodology"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-porcelain-muted",
						children: "Methodology before headline numbers. Live measurement surfaces are published from the Nexus repository CI pipeline. This site never invents performance claims."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BenchmarkWorkbench, {
				metricId: search.benchmark,
				showRaw: search.samples,
				onMetricChange: (id) => navigate({
					search: (prev) => ({
						...prev,
						benchmark: id
					}),
					replace: true
				}),
				onShowRawChange: (samples) => navigate({
					search: (prev) => ({
						...prev,
						samples,
						view: samples ? "samples" : "distribution"
					}),
					replace: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
				title: "Live measurement surface",
				refId: "BENCH-01 · Nexus CI",
				classification: "METHODOLOGY FIRST",
				footer: "Wall-clock, snapshot/rollback, and related measurements on CI runners with cited methodology.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-porcelain-muted",
						children: "Open the public dashboard for current figures. Treat any number without methodology and runner context as non-citable."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: BRAND.benchmarks,
									target: "_blank",
									rel: "noreferrer",
									children: "Open live Nexus benchmarks"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: BRAND.githubNexus,
									target: "_blank",
									rel: "noreferrer",
									children: "Benchmark source repo"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/evidence/claims",
									children: "Related claims"
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					{
						t: "What we publish",
						b: "CI-backed measurements with methodology notes on the Nexus dashboard."
					},
					{
						t: "What we refuse",
						b: "First/only claims, unverified latency figures, and marketing-only charts."
					},
					{
						t: "How to evaluate",
						b: "Pair numbers with maturity status and residual limitations on the claims matrix."
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-carbon p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
						children: c.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-porcelain-muted",
						children: c.b
					})]
				}, c.t))
			})
		]
	});
}
//#endregion
export { BenchmarksPage as component };
