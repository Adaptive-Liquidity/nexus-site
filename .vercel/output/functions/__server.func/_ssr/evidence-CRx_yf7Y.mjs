import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evidence-CRx_yf7Y.js
var import_jsx_runtime = require_jsx_runtime();
function EvidenceOverview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-[72rem] space-y-6 px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-2xl text-base text-porcelain-muted",
			children: "Evidence surfaces use archive-paper styling for records. Proof Capsules are runtime-observed, signed artifacts with mandatory limitations — not mathematical proof of correct execution."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				{
					to: "/evidence/proof-capsules",
					title: "Proof Capsules",
					body: "Open the Explorer: field inspection, limitations[], structural checks, and downloadable structure-identical fixtures. Production trust anchors remain Target / In Integration."
				},
				{
					to: "/evidence/claims",
					title: "Claims registry",
					body: "Machine-readable maturity matrix: status, evidence links, limitations, Stage 0 gate."
				},
				{
					to: "/evidence/benchmarks",
					title: "Benchmarks",
					body: "Methodology-first links to live Nexus measurement surfaces."
				}
			].map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: card.to,
				className: "rounded-xl border border-border bg-carbon p-5 transition-colors hover:bg-slate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg text-porcelain",
					children: card.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-porcelain-muted",
					children: card.body
				})]
			}, card.to))
		})]
	});
}
//#endregion
export { EvidenceOverview as component };
