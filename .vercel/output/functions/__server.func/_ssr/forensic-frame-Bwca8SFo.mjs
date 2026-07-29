import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forensic-frame-Bwca8SFo.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Case-file / mission-control chrome around forensic diagrams.
* Dark runtime or archive paper surfaces.
*/
function ForensicFrame({ children, title, classification = "OPERATIONAL", refId, surface = "runtime", className, footer }) {
	const paper = surface === "paper";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("relative overflow-hidden rounded-xl border", paper ? "border-[color:var(--color-border-paper)] bg-white/35" : "border-border bg-carbon", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("pointer-events-none absolute left-2 top-2 size-3 border-l border-t", paper ? "border-archive-ink/30" : "border-porcelain/25"),
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("pointer-events-none absolute right-2 top-2 size-3 border-r border-t", paper ? "border-archive-ink/30" : "border-porcelain/25"),
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("pointer-events-none absolute bottom-2 left-2 size-3 border-b border-l", paper ? "border-archive-ink/30" : "border-porcelain/25"),
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("pointer-events-none absolute bottom-2 right-2 size-3 border-b border-r", paper ? "border-archive-ink/30" : "border-porcelain/25"),
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.28]",
				"aria-hidden": true,
				style: {
					backgroundImage: paper ? `linear-gradient(color-mix(in oklab, var(--color-archive-ink) 6%, transparent) 1px, transparent 1px),
               linear-gradient(90deg, color-mix(in oklab, var(--color-archive-ink) 6%, transparent) 1px, transparent 1px)` : `linear-gradient(color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px),
               linear-gradient(90deg, color-mix(in oklab, var(--color-porcelain) 4%, transparent) 1px, transparent 1px)`,
					backgroundSize: "20px 20px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: cn("relative flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2.5", paper ? "border-[color:var(--color-border-paper)] bg-archive-muted/50" : "border-border bg-void/50"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: cn("font-mono text-[10px] uppercase tracking-[0.14em]", paper ? "text-archive-ink-muted" : "text-porcelain-subtle"),
						children: ["Figure · ", title]
					}), refId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-0.5 font-mono text-[10px] tabular-nums", paper ? "text-archive-ink-muted" : "text-porcelain-subtle"),
						children: refId
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("rounded border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em]", paper ? "border-archive-ink/20 text-archive-ink" : "border-border text-porcelain-muted"),
					children: classification
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative p-4 sm:p-5",
				children
			}),
			footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("relative border-t px-4 py-2.5 text-xs leading-relaxed", paper ? "border-[color:var(--color-border-paper)] text-archive-ink-muted" : "border-border text-porcelain-subtle"),
				children: footer
			}) : null
		]
	});
}
//#endregion
export { ForensicFrame as t };
