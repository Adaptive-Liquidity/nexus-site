import { r as __toESM } from "../_runtime.mjs";
import { n as BRAND, s as NAV } from "./site-copy-BRpXPyRy.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRoute, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$8 } from "./benchmarks-BGYvd2_B.mjs";
import { t as Route$9 } from "./claims-CtD6-Jy2.mjs";
import { t as Route$10 } from "./developers-r2OColFN.mjs";
import { t as Route$11 } from "./maturity-DZrJPFUu.mjs";
import { c as Menu, f as ExternalLink, t as X } from "../_libs/lucide-react.mjs";
import { t as Route$12 } from "./routes-BRtluQtL.mjs";
import { t as Separator$1 } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-COr655Bt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-void/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-[72rem] items-center gap-4 overflow-x-hidden px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-9 shrink-0 items-center gap-2 font-serif text-base font-medium tracking-tight text-porcelain",
					onClick: () => setOpen(false),
					children: [BRAND.product, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-porcelain-subtle sm:inline",
						children: "Architecture v1"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-auto hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: NAV.primary.map((item) => {
						const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: cn("inline-flex min-h-9 items-center rounded-md px-2.5 py-2 text-sm transition-colors", active ? "bg-slate text-porcelain" : "text-porcelain-muted hover:bg-carbon hover:text-porcelain"),
							children: item.label
						}, item.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/maturity",
							className: "inline-flex min-h-9 items-center text-sm text-porcelain-muted transition-colors hover:text-porcelain",
							children: "Maturity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: BRAND.githubOrg,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-9 items-center gap-1 text-sm text-porcelain-muted transition-colors hover:text-porcelain",
							children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "size-3.5 opacity-60",
								"aria-hidden": true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#evaluation",
								children: "Request Evaluation"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					className: "ml-auto lg:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: "border-t border-border bg-carbon lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-[72rem] flex-col gap-1 px-4 py-3",
				"aria-label": "Mobile",
				children: [
					NAV.primary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: "rounded-md px-3 py-3 text-base text-porcelain hover:bg-slate",
						onClick: () => setOpen(false),
						children: item.label
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/maturity",
						className: "rounded-md px-3 py-3 text-base text-porcelain hover:bg-slate",
						onClick: () => setOpen(false),
						children: "Maturity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: BRAND.githubOrg,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-md px-3 py-3 text-base text-porcelain hover:bg-slate",
						children: "GitHub"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#evaluation",
						className: "mt-1 rounded-md bg-institution px-3 py-3 text-center text-base text-institution-fg",
						onClick: () => setOpen(false),
						children: "Request Evaluation"
					})
				]
			})
		}) : null]
	});
}
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {
		decorative,
		orientation,
		className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
		...props
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-border bg-carbon",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[72rem] gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-lg text-porcelain",
								children: BRAND.product
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-sm leading-relaxed text-porcelain-muted",
								children: BRAND.parentBlurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-porcelain-subtle",
								children: [
									"Part of",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-porcelain-muted",
										children: BRAND.parent
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-medium uppercase tracking-[0.1em] text-porcelain-subtle",
						children: "Product"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-porcelain-muted",
						children: [NAV.primary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: "transition-colors hover:text-porcelain",
							children: item.label
						}) }, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/maturity",
							className: "transition-colors hover:text-porcelain",
							children: "Maturity"
						}) })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-medium uppercase tracking-[0.1em] text-porcelain-subtle",
						children: "Evidence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-porcelain-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/evidence/proof-capsules",
								className: "transition-colors hover:text-porcelain",
								children: "Proof Capsules"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/evidence/claims",
								className: "transition-colors hover:text-porcelain",
								children: "Claims registry"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BRAND.benchmarks,
								target: "_blank",
								rel: "noreferrer",
								className: "transition-colors hover:text-porcelain",
								children: "Live benchmarks"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BRAND.githubOrg,
								target: "_blank",
								rel: "noreferrer",
								className: "transition-colors hover:text-porcelain",
								children: "GitHub organization"
							}) })
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[72rem] flex-col gap-2 px-4 py-4 text-xs text-porcelain-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Architecture shown in full · maturity and limitations always explicit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono tabular-nums",
					children: "as of 2026-07-28"
				})]
			})
		]
	});
}
var styles_default = "/assets/styles-Bv96VHTD.css";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${BRAND.product} — Commit boundary for agent action` },
			{
				name: "description",
				content: "Proof-carrying transactional execution infrastructure for AI agents. Stage changes, constrain authority, validate before commitment, emit inspectable evidence."
			},
			{
				name: "theme-color",
				content: "#07090B"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:wght@500;600&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "surface-runtime flex min-h-dvh flex-col antialiased",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-h-0 flex-1 flex-col",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
var $$splitComponentImporter$6 = () => import("./change-gate-DmXon8cc.mjs");
var Route$6 = createFileRoute("/change-gate")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./evidence-80kMZTY8.mjs");
var Route$5 = createFileRoute("/evidence")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./research-xoAkvOeF.mjs");
var Route$4 = createFileRoute("/research")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./security-WGGRe_eu.mjs");
var Route$3 = createFileRoute("/security")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./system-D7akOmLb.mjs");
var Route$2 = createFileRoute("/system")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./evidence-CRx_yf7Y.mjs");
var Route$1 = createFileRoute("/evidence/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./proof-capsules-DyFXwgU7.mjs");
var Route = createFileRoute("/evidence/proof-capsules")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var ChangeGateRoute = Route$6.update({
	id: "/change-gate",
	path: "/change-gate",
	getParentRoute: () => Route$7
});
var DevelopersRoute = Route$10.update({
	id: "/developers",
	path: "/developers",
	getParentRoute: () => Route$7
});
var EvidenceRoute = Route$5.update({
	id: "/evidence",
	path: "/evidence",
	getParentRoute: () => Route$7
});
var MaturityRoute = Route$11.update({
	id: "/maturity",
	path: "/maturity",
	getParentRoute: () => Route$7
});
var ResearchRoute = Route$4.update({
	id: "/research",
	path: "/research",
	getParentRoute: () => Route$7
});
var SecurityRoute = Route$3.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => Route$7
});
var SystemRoute = Route$2.update({
	id: "/system",
	path: "/system",
	getParentRoute: () => Route$7
});
var EvidenceIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => EvidenceRoute
});
var EvidenceRouteChildren = {
	EvidenceBenchmarksRoute: Route$8.update({
		id: "/benchmarks",
		path: "/benchmarks",
		getParentRoute: () => EvidenceRoute
	}),
	EvidenceClaimsRoute: Route$9.update({
		id: "/claims",
		path: "/claims",
		getParentRoute: () => EvidenceRoute
	}),
	EvidenceProofCapsulesRoute: Route.update({
		id: "/proof-capsules",
		path: "/proof-capsules",
		getParentRoute: () => EvidenceRoute
	}),
	EvidenceIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	ChangeGateRoute,
	DevelopersRoute,
	EvidenceRoute: EvidenceRoute._addFileChildren(EvidenceRouteChildren),
	MaturityRoute,
	ResearchRoute,
	SecurityRoute,
	SystemRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { getRouter };
