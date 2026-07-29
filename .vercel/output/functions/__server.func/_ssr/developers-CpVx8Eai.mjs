import { n as BRAND } from "./site-copy-BRpXPyRy.mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as MaturityBadge } from "./maturity-badge-C3dmPz-F.mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/developers-CpVx8Eai.js
var import_jsx_runtime = require_jsx_runtime();
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
