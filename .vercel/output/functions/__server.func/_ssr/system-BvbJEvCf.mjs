import { i as COMPOSITION } from "./site-copy-BRpXPyRy.mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { a as PageStub, i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./page-stub-CNaV2sjS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/system-BvbJEvCf.js
var import_jsx_runtime = require_jsx_runtime();
function SystemPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageStub, {
		eyebrow: "System",
		title: "Operating model",
		description: "Complete Nexus-IQ architecture: execution boundary, governed memory, transactional composition, and evidence flow. Full diagrams and maturity overlay in Phase 4.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: COMPOSITION.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base",
				children: layer.name
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-porcelain-muted",
				children: layer.role
			}) })] }, layer.id))
		})
	});
}
//#endregion
export { SystemPage as component };
