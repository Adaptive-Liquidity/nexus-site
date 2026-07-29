import { r as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-primitive+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-B-7YDd73.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,color,opacity,transform,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-porcelain text-void hover:bg-porcelain/90",
			primary: "bg-institution text-institution-fg hover:bg-institution-hover",
			secondary: "bg-slate text-porcelain border border-border hover:bg-slate-elevated",
			outline: "border border-border bg-transparent text-porcelain hover:bg-carbon",
			ghost: "text-porcelain-muted hover:bg-carbon hover:text-porcelain",
			paper: "bg-archive text-archive-ink hover:bg-archive-muted",
			link: "text-porcelain underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-5 py-2",
			sm: "h-9 rounded-md px-3 text-xs",
			lg: "h-12 rounded-lg px-6",
			icon: "h-11 w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as t };
