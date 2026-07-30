import "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var PUBLIC_STATUS_META = {
	implemented_foundation: {
		symbol: "●",
		label: "Implemented Foundation",
		shortLabel: "Foundation",
		tone: "oxide"
	},
	in_integration: {
		symbol: "◐",
		label: "In Integration",
		shortLabel: "Integration",
		tone: "signal"
	},
	target_architecture: {
		symbol: "○",
		label: "Target Architecture",
		shortLabel: "Target",
		tone: "target"
	},
	experimental: {
		symbol: "△",
		label: "Experimental",
		shortLabel: "Experimental",
		tone: "muted"
	},
	known_limitation: {
		symbol: "!",
		label: "Known Limitation",
		shortLabel: "Limitation",
		tone: "danger"
	}
};
function toPublicStatus(internal) {
	switch (internal) {
		case "CURRENT": return "implemented_foundation";
		case "IN_DEVELOPMENT": return "in_integration";
		case "TARGET": return "target_architecture";
		case "EXPERIMENTAL": return "experimental";
		case "LIMITATION": return "known_limitation";
	}
}
function countByPublicStatus(items) {
	const counts = {
		implemented_foundation: 0,
		in_integration: 0,
		target_architecture: 0,
		experimental: 0,
		known_limitation: 0
	};
	for (const item of items) {
		const key = item.status in PUBLIC_STATUS_META ? item.status : toPublicStatus(item.status);
		counts[key] += 1;
	}
	return counts;
}
var badgeVariants = cva("inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs font-medium tracking-wide transition-colors", {
	variants: { variant: {
		default: "border-border bg-slate text-porcelain-muted",
		foundation: "border-oxide/40 bg-oxide/15 text-oxide-fg",
		integration: "border-signal/40 bg-signal/15 text-signal",
		target: "border-target-outline/50 bg-transparent text-porcelain-muted",
		experimental: "border-border bg-carbon text-porcelain-subtle",
		limitation: "border-controlled-red/40 bg-controlled-red/15 text-controlled-red-fg",
		paper: "border-black/10 bg-archive-muted text-archive-ink-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var toneToVariant = {
	oxide: "foundation",
	signal: "integration",
	target: "target",
	muted: "experimental",
	danger: "limitation"
};
function MaturityBadge({ status, className, showLabel = true, compact = false }) {
	const meta = PUBLIC_STATUS_META[status in PUBLIC_STATUS_META ? status : toPublicStatus(status)];
	const variant = toneToVariant[meta.tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
		variant,
		className: cn("font-mono tabular-nums", compact && "px-1.5 py-0 text-[10px]", className),
		title: meta.label,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			children: meta.symbol
		}), showLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: compact ? meta.shortLabel : meta.label }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: meta.label
		})]
	});
}
//#endregion
export { toPublicStatus as a, countByPublicStatus as i, MaturityBadge as n, PUBLIC_STATUS_META as r, Badge as t };
