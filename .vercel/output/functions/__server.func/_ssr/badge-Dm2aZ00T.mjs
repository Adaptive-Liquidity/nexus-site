import "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
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
//#endregion
export { Badge as t };
