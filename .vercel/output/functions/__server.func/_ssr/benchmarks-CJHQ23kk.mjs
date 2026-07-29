import { n as BRAND } from "./site-copy-BRpXPyRy.mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-D_C8sxxI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/benchmarks-CJHQ23kk.js
var import_jsx_runtime = require_jsx_runtime();
function BenchmarksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-[72rem] space-y-6 px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-2xl text-sm text-porcelain-muted",
			children: "Methodology before headline numbers. Live measurement surfaces are published from the Nexus repository CI pipeline. No unverified performance claims on this site."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
			className: "text-base",
			children: "Live Nexus dashboard"
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-porcelain-muted",
				children: "Wall-clock, snapshot/rollback, and related measurements on CI runners with cited methodology."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: BRAND.benchmarks,
					target: "_blank",
					rel: "noreferrer",
					children: "Open live benchmarks"
				})
			})]
		})] })]
	});
}
//#endregion
export { BenchmarksPage as component };
