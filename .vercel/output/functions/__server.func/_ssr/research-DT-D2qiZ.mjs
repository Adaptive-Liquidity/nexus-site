import { n as BRAND, o as LAUNCH_THESIS } from "./site-copy-BRpXPyRy.mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as MaturityBadge } from "./maturity-badge-C3dmPz-F.mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-DT-D2qiZ.js
var import_jsx_runtime = require_jsx_runtime();
var DOSSIER = [
	{
		title: "Claims registry",
		kind: "Machine-readable matrix",
		status: "CURRENT",
		body: "Status, evidence links, limitations, and Stage 0 gate for every public capability claim.",
		href: "/evidence/claims"
	},
	{
		title: "Proof Capsule schema & fixtures",
		kind: "Runtime evidence",
		status: "CURRENT",
		body: "Structure-identical capsules with mandatory limitations[]. Explorer for field-level inspection.",
		href: "/evidence/proof-capsules"
	},
	{
		title: "Live Nexus benchmarks",
		kind: "Measurement surface",
		status: "CURRENT",
		body: "CI-published wall-clock, snapshot, and rollback methodology. No unverified headline numbers on this site.",
		href: BRAND.benchmarks,
		external: true
	},
	{
		title: "Stage 0 evidence model",
		kind: "Integration gate",
		status: "IN_DEVELOPMENT",
		body: "Blocking work for end-to-end transactional guarantees and full memory-state binding.",
		href: "/maturity"
	},
	{
		title: "Threat model & residual trust",
		kind: "Security brief",
		status: "IN_DEVELOPMENT",
		body: "Evaluator questions: enforced vs trusted vs advisory vs not established. Host and keys remain disclosed trust surfaces.",
		href: "/security"
	},
	{
		title: "Transactional Change Gate architecture",
		kind: "Operating model",
		status: "TARGET",
		body: "Destination workflow: propose → stage → constrain → validate → approve → commit/abort → emit → compensate.",
		href: "/change-gate"
	},
	{
		title: "AEON-IQ memory research",
		kind: "Memory plane",
		status: "IN_DEVELOPMENT",
		body: "Governed recall, evidence modes, lifecycle integrity. Advisory modes must not be over-read as attestation.",
		href: BRAND.githubAeon,
		external: true
	},
	{
		title: "Architecture paper (public draft track)",
		kind: "Citation object",
		status: "EXPERIMENTAL",
		body: "Long-form technical brief packaging is progressive. Use claims + capsules + benchmarks as the current citation core.",
		href: BRAND.githubNexusIq,
		external: true
	}
];
function ResearchPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-w-0 max-w-[72rem] space-y-10 overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle",
						children: "Research"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl text-porcelain sm:text-4xl",
						children: "Citation-first technical dossier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-porcelain-muted",
						children: "Methodology and evidence before promotional language. Publish inspectable artifacts progressively; the finished operating model is the narrative, maturity stays explicit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border-l-2 border-institution/50 pl-3 text-sm leading-relaxed text-porcelain-subtle",
						children: LAUNCH_THESIS
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
				title: "Research index",
				refId: "RSH-IDX-01 · progressive publication",
				classification: "TECHNICAL DOSSIER",
				footer: "Entries marked Experimental or In Integration are not production commitments.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: DOSSIER.map((item) => {
						const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
								children: item.kind
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-serif text-lg text-porcelain",
								children: item.title
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
								status: item.status,
								compact: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-porcelain-muted",
							children: item.body
						})] });
						const className = "block rounded-lg border border-border bg-void/50 p-4 transition-colors hover:border-porcelain/20 hover:bg-slate/30";
						if (!item.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className,
							children: inner
						}, item.title);
						if (item.external) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							target: "_blank",
							rel: "noreferrer",
							className,
							children: inner
						}) }, item.title);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className,
							children: inner
						}) }, item.title);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-carbon p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "Source repositories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "default",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BRAND.githubNexus,
								target: "_blank",
								rel: "noreferrer",
								children: "Nexus"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BRAND.githubAeon,
								target: "_blank",
								rel: "noreferrer",
								children: "AEON-IQ"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BRAND.githubNexusIq,
								target: "_blank",
								rel: "noreferrer",
								children: "Nexus-IQ"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/evidence",
								children: "Evidence hub"
							})
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { ResearchPage as component };
