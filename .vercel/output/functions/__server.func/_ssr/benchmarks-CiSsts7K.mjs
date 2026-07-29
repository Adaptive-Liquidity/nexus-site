import { n as BRAND } from "./site-copy-BRpXPyRy.mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { t as MaturityBadge } from "./maturity-badge-C3dmPz-F.mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/benchmarks-CiSsts7K.js
var import_jsx_runtime = require_jsx_runtime();
function BenchmarksPage() {
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
