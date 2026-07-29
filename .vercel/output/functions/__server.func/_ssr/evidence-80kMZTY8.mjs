import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evidence-80kMZTY8.js
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		href: "/evidence",
		label: "Overview",
		exact: true
	},
	{
		href: "/evidence/proof-capsules",
		label: "Proof Capsules"
	},
	{
		href: "/evidence/claims",
		label: "Claims"
	},
	{
		href: "/evidence/benchmarks",
		label: "Benchmarks"
	}
];
function EvidenceLayout() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isOverview = pathname === "/evidence" || pathname === "/evidence/";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-border bg-carbon",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[72rem] px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle",
					children: "Evidence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-serif text-2xl text-porcelain sm:text-3xl",
					children: "Proof, claims, and verification"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "-mb-px flex gap-1 overflow-x-auto pb-px",
				"aria-label": "Evidence sections",
				children: TABS.map((tab) => {
					const active = tab.exact ? isOverview : pathname.startsWith(tab.href);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: tab.href,
						className: cn("shrink-0 border-b-2 px-3 py-2.5 text-sm transition-colors", active ? "border-institution text-porcelain" : "border-transparent text-porcelain-muted hover:text-porcelain"),
						children: tab.label
					}, tab.href);
				})
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})] });
}
//#endregion
export { EvidenceLayout as component };
