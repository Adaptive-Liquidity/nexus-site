import { r as __toESM } from "../_runtime.mjs";
import { d as STAGE_0_NOTE, n as BRAND } from "./site-copy-BRpXPyRy.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as Button } from "./button-B-7YDd73.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ForensicFrame } from "./forensic-frame-Bwca8SFo.mjs";
import { t as TrustBoundaryDiagram } from "./trust-boundary-diagram-D3_fWgvB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/security-WGGRe_eu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THREATS = [
	{
		id: "token",
		label: "Expired capability"
	},
	{
		id: "memory",
		label: "Forged memory context"
	},
	{
		id: "external",
		label: "External side effect"
	},
	{
		id: "host",
		label: "Compromised host"
	}
];
var COPY = {
	token: {
		classification: "Enforced",
		result: "Enforced: expired authority is denied before the host call.",
		detail: "The denial and capability mismatch can be Observed as evidence. Residual Trust remains in host integrity. External-effect absence is Not Established beyond the governed boundary."
	},
	memory: {
		classification: "Enforced · Observed",
		result: "Enforced: unverified memory cannot increase execution authority. Observed: mode degrades.",
		detail: "Evidence mode becomes Advisory/Degraded/Absent. Full memory-state binding remains Stage 0 (Not Established as end-to-end guarantee)."
	},
	external: {
		classification: "Not Established",
		result: "Not Established: an escaped external effect exceeds snapshot rollback.",
		detail: "The receipt can Observe the failure. Compensation for irreversible external effects remains Target Architecture. Residual Trust in host/network remains."
	},
	host: {
		classification: "Residual Trust",
		result: "Residual Trust: a compromised host can invalidate the runtime’s observations.",
		detail: "Proof Capsules disclose trust in the Nexus runtime and host boundary. External anchoring cannot retroactively remove that assumption."
	}
};
function AdversarialTrustBoundary({ className }) {
	const [threat, setThreat] = (0, import_react.useState)("token");
	const uid = (0, import_react.useId)().replace(/:/g, "");
	const microId = `${uid}-micro`;
	const arrowId = `${uid}-arrow`;
	const copy = COPY[threat];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl border border-border bg-carbon", className),
		"data-testid": "adversarial-trust-boundary",
		"data-figure": "FIG-SEC-05",
		"data-threat": threat,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "FIG-SEC-05 · Adversarial trust model"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-porcelain-muted",
					children: "Select attack path · named boundary · residual trust"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					role: "toolbar",
					"aria-label": "Attack path",
					children: THREATS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-threat": t.id,
						"aria-pressed": threat === t.id,
						onClick: () => setThreat(t.id),
						className: cn("rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.05em]", threat === t.id ? "border-controlled-red/55 bg-controlled-red/20 text-porcelain" : "border-border text-porcelain-subtle hover:text-porcelain-muted"),
						children: t.label
					}, t.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[16/11] w-full bg-void sm:aspect-video",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1200 675",
					className: "absolute inset-0 h-full w-full",
					role: "img",
					"aria-labelledby": `${uid}-title`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
							id: `${uid}-title`,
							children: "Nested trust boundaries and adversarial paths"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
							id: microId,
							width: "24",
							height: "24",
							patternUnits: "userSpaceOnUse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M24 0H0V24",
								fill: "none",
								stroke: "#f6f1e7",
								strokeOpacity: ".045"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
							id: arrowId,
							markerWidth: "8",
							markerHeight: "8",
							refX: "7",
							refY: "4",
							orient: "auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0 0L8 4L0 8Z",
								fill: "#b96464"
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "1200",
							height: "675",
							fill: `url(#${microId})`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							transform: "translate(125 70)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									width: "950",
									height: "520",
									rx: "30",
									fill: "#111820",
									stroke: "#b96464",
									strokeOpacity: ".38"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "30",
									y: "42",
									fill: "#b96464",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "EXTERNAL SYSTEMS + IRREVERSIBLE EFFECTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "95",
									y: "75",
									width: "760",
									height: "385",
									rx: "26",
									fill: "#121a20",
									stroke: "#d4a55f",
									strokeOpacity: ".42"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "125",
									y: "113",
									fill: "#d4a55f",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "HOST OS · OPERATORS · KEY CUSTODY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "190",
									y: "145",
									width: "570",
									height: "250",
									rx: "22",
									fill: "#102028",
									stroke: "#5f93a8",
									strokeOpacity: ".58"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "220",
									y: "182",
									fill: "#5f93a8",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "NEXUS RUNTIME BOUNDARY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "285",
									y: "215",
									width: "380",
									height: "115",
									rx: "18",
									fill: "#0b1014",
									stroke: "#75a184",
									strokeOpacity: ".7"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "315",
									y: "250",
									fill: "#75a184",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "WASM GUEST + CAPABILITY-GATED WASI"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M330 285H620",
									stroke: "#f6f1e7",
									strokeOpacity: ".18"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "330",
									y: "308",
									fill: "#b8b3a8",
									fontSize: "11",
									children: "sandboxed execution state · snapshot / rollback"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							opacity: threat === "token" ? 1 : 0,
							className: "transition-opacity",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M80 337H410",
									stroke: "#b96464",
									strokeWidth: "4",
									markerEnd: `url(#${arrowId})`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M395 320l30 34M425 320l-30 34",
									stroke: "#b96464",
									strokeWidth: "4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "85",
									y: "315",
									fill: "#f0b1b1",
									fontFamily: "ui-monospace, monospace",
									fontSize: "10",
									children: "EXPIRED / REVOKED TOKEN"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "438",
									y: "350",
									fill: "#75a184",
									fontFamily: "ui-monospace, monospace",
									fontSize: "10",
									children: "DENIED AT AUTHORITY CHECK"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							opacity: threat === "memory" ? 1 : 0,
							className: "transition-opacity",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M80 210H380V265H410",
									fill: "none",
									stroke: "#b96464",
									strokeWidth: "4",
									markerEnd: `url(#${arrowId})`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M395 248l30 34M425 248l-30 34",
									stroke: "#b96464",
									strokeWidth: "4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "85",
									y: "190",
									fill: "#f0b1b1",
									fontFamily: "ui-monospace, monospace",
									fontSize: "10",
									children: "FORGED MEMORY CONTEXT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "440",
									y: "265",
									fill: "#d4a55f",
									fontFamily: "ui-monospace, monospace",
									fontSize: "10",
									children: "MODE DEGRADES / AUTHORITY UNCHANGED"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							opacity: threat === "external" ? 1 : 0,
							className: "transition-opacity",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M600 337H1120",
									stroke: "#b96464",
									strokeWidth: "4",
									markerEnd: `url(#${arrowId})`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "770",
									y: "315",
									fill: "#f0b1b1",
									fontFamily: "ui-monospace, monospace",
									fontSize: "10",
									children: "EFFECT ESCAPES BEFORE ABORT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "780",
									y: "365",
									fill: "#b96464",
									fontFamily: "ui-monospace, monospace",
									fontSize: "10",
									children: "DIRECT ROLLBACK NOT ESTABLISHED · COMPENSATION TARGET"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							opacity: threat === "host" ? 1 : 0,
							className: "transition-opacity",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M1075 110C950 150 930 245 885 340",
									fill: "none",
									stroke: "#b96464",
									strokeWidth: "4",
									markerEnd: `url(#${arrowId})`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "900",
									y: "90",
									fill: "#f0b1b1",
									fontFamily: "ui-monospace, monospace",
									fontSize: "10",
									children: "COMPROMISED HOST / KEY CUSTODY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "770",
									y: "420",
									fill: "#b96464",
									fontFamily: "ui-monospace, monospace",
									fontSize: "10",
									children: "RESIDUAL TRUST · OUTSIDE CAPSULE’S GUARANTEE"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							transform: "translate(75 550)",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									width: "1050",
									height: "80",
									rx: "12",
									fill: "#111820",
									stroke: "#f6f1e7",
									strokeOpacity: ".14"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "25",
									y: "32",
									fill: "#f6f1e7",
									fontFamily: "Georgia, serif",
									fontSize: "18",
									children: copy.result
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "25",
									y: "57",
									fill: "#b8b3a8",
									fontSize: "12",
									children: copy.detail
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "flex flex-wrap items-center justify-between gap-2 border-t border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs leading-relaxed text-porcelain-muted",
					children: [
						"Classification:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-porcelain",
							children: copy.classification
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.1em] text-porcelain-subtle",
					children: "Stage 0 foundations · residual trust disclosed"
				})]
			})
		]
	});
}
var ANSWERS = [
	{
		q: "What does Nexus-IQ enforce?",
		a: "On Implemented Foundation paths: capability-gated WASM execution, snap-rollback isolation, policy structures, and signed runtime evidence (Proof Capsules). The full Transactional Change Gate commit barrier remains In Integration under Stage 0."
	},
	{
		q: "What remains trusted?",
		a: "Host OS, operators, key material custody, and the Nexus runtime boundary. Capsules explicitly list trust of the Nexus runtime and host — they do not eliminate residual trust."
	},
	{
		q: "What is cryptographically bound?",
		a: "Module and input digests, Ed25519 capability tokens, optional payload signatures, and memory evidence when attestation modes permit. Demo fixtures use non-production signing anchors."
	},
	{
		q: "What is advisory?",
		a: "Memory context under Advisory, Degraded, or Absent modes. Incomplete binding must never be read as full cryptographic memory attestation."
	},
	{
		q: "What can be rolled back?",
		a: "WASM guest execution state captured in snapshots (linear memory, globals, tables metadata). Capability denial paths can restore pre-execution snapshots when requires_rollback is set."
	},
	{
		q: "What external effects remain outside direct rollback?",
		a: "Effects that escaped the isolation boundary before abort (network side effects, external commits). Compensation is Target Architecture for irreversible external actions."
	},
	{
		q: "Which keys establish identity versus payload integrity?",
		a: "Capability tokens authorize attenuated actions. Capsule signatures bind payload digests. Production identity, rotation, and external anchoring are Target / In Integration — not claimed as complete."
	},
	{
		q: "What changes when Stage 0 closes?",
		a: "End-to-end transactional guarantees and full memory-state binding become defensible as a completed product path. Until then, foundations ship with explicit maturity and residual-risk disclosure."
	}
];
function SecurityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-w-0 max-w-[72rem] space-y-10 overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle",
						children: "Security"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl text-porcelain sm:text-4xl",
						children: "Trust boundaries for evaluators"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-porcelain-muted",
						children: "Security is organized around evaluation questions—not a compliance logo wall. Every answer separates what is enforced, what is still trusted, and what Stage 0 still blocks."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-porcelain-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-signal",
								children: "Stage 0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-porcelain-subtle",
								children: "·"
							}),
							STAGE_0_NOTE
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdversarialTrustBoundary, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBoundaryDiagram, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForensicFrame, {
				title: "Evaluation questions",
				refId: "SEC-Q-01 · residual risk",
				classification: "ADVERSARIAL READ",
				footer: "If a claim cannot answer these questions, it is not ready for enterprise evaluation.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: ANSWERS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-border bg-void/50 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] tabular-nums text-porcelain-subtle",
								children: ["Q", String(i + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium text-porcelain",
								children: item.q
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-porcelain-muted",
								children: item.a
							})
						]
					}, item.q))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/evidence/claims",
							children: "Claims with limitations"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/evidence/proof-capsules",
							children: "Inspect Proof Capsules"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BRAND.githubNexus,
							target: "_blank",
							rel: "noreferrer",
							children: "Nexus source"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { SecurityPage as component };
