import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as toPublicStatus, n as PUBLIC_STATUS_META, t as MaturityBadge } from "./maturity-badge-C3dmPz-F.mjs";
import { t as claimsRegistry } from "./content-BpadpKYG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/maturity-DlIbBZbY.js
var import_jsx_runtime = require_jsx_runtime();
function MaturityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-[72rem] px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 max-w-2xl space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle",
						children: "Implementation maturity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl text-porcelain sm:text-4xl",
						children: "Architecture is permanent. Status evolves."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base text-porcelain-muted",
						children: [
							"Layer Two of every page. Status never disappears. Machine-readable registry as of ",
							claimsRegistry.asOf,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: Object.keys(PUBLIC_STATUS_META).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, { status: key }, key))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 rounded-xl border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-porcelain",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-medium",
						children: "Stage 0"
					}),
					" —",
					" ",
					claimsRegistry.stage0.summary
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[36rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "border-b border-border bg-carbon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium text-porcelain-muted",
								children: "Capability"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium text-porcelain-muted",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium text-porcelain-muted",
								children: "Summary"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: claimsRegistry.capabilities.map((cap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top font-medium text-porcelain",
								children: cap.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
									status: toPublicStatus(cap.status),
									compact: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top text-porcelain-muted",
								children: cap.summary
							})
						]
					}, cap.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/evidence/claims",
						children: "Open claims detail"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/change-gate",
						children: "Change Gate phases"
					})
				})]
			})
		]
	});
}
//#endregion
export { MaturityPage as component };
