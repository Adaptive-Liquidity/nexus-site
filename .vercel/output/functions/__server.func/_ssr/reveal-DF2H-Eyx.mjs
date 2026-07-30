import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reveal-DF2H-Eyx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useInView(options) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	const once = options?.once ?? true;
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setInView(true);
				if (once) observer.disconnect();
			} else if (!once) setInView(false);
		}, {
			root: options?.root ?? null,
			rootMargin: options?.rootMargin ?? "0px 0px -8% 0px",
			threshold: options?.threshold ?? .12
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [
		once,
		options?.root,
		options?.rootMargin,
		options?.threshold
	]);
	return {
		ref,
		inView
	};
}
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal-base", inView && "reveal-visible", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
//#endregion
export { Reveal as t };
