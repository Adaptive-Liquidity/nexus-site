import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/architecture-atlas-BdVIBDxU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Canonical inter-plane contracts (product-native, non-invented). */
var ATLAS_CONTRACTS = [
	{
		id: "c-agent-nexusiq-propose",
		from: "agent",
		to: "nexusiq",
		kind: "proposed_action",
		label: "proposed action",
		summary: "Autonomous system declares intent + scope into the control plane.",
		pattern: "solid",
		sourceRefs: ["claims-registry:transactional-change-gate"]
	},
	{
		id: "c-aeon-nexusiq-advisory",
		from: "aeon",
		to: "nexusiq",
		kind: "advisory_context",
		label: "advisory context",
		summary: "Memory may inform reasoning context. It never becomes execution authority.",
		pattern: "dashed",
		sourceRefs: ["claims-registry:aeon-memory-binding"]
	},
	{
		id: "c-aeon-nexusiq-barrier",
		from: "aeon",
		to: "nexusiq",
		kind: "authority_barrier",
		label: "cannot widen authority",
		summary: "Hard barrier: memory path terminates before capability grant.",
		pattern: "barrier",
		sourceRefs: ["claims-registry:capability-authority", "doctrine:memory-authority"]
	},
	{
		id: "c-nexusiq-nexus-exec",
		from: "nexusiq",
		to: "nexus",
		kind: "authorized_execution",
		label: "authorized execution",
		summary: "Only capability-bound host calls execute under WASM guest↔host governance.",
		pattern: "solid",
		sourceRefs: ["claims-registry:isolation-snap-rollback", "claims-registry:capability-authority"]
	},
	{
		id: "c-nexus-evidence-emit",
		from: "nexus",
		to: "evidence",
		kind: "evidence_emit",
		label: "emit receipt",
		summary: "Runtime-observed Proof Capsule fields with mandatory limitations[].",
		pattern: "solid",
		sourceRefs: ["claims-registry:proof-capsules"]
	},
	{
		id: "c-nexusiq-evidence-decide",
		from: "nexusiq",
		to: "evidence",
		kind: "evidence_emit",
		label: "decision + limitations",
		summary: "Commit/Abort outcome and limitations bind into portable evidence.",
		pattern: "solid",
		sourceRefs: ["claims-registry:proof-capsules"]
	},
	{
		id: "c-nexusiq-aeon-policy-write",
		from: "nexusiq",
		to: "aeon",
		kind: "policy_gated_memory_write",
		label: "new memory only after policy",
		summary: "Memory updates after controlled outcomes remain policy-gated; not silent authority expansion.",
		pattern: "dashed",
		sourceRefs: ["claims-registry:aeon-memory-binding"]
	}
];
function contractsForPlane(plane) {
	if (plane === "all") return {
		inbound: [],
		outbound: [],
		all: ATLAS_CONTRACTS
	};
	return {
		inbound: ATLAS_CONTRACTS.filter((c) => c.to === plane),
		outbound: ATLAS_CONTRACTS.filter((c) => c.from === plane),
		all: ATLAS_CONTRACTS
	};
}
var LAYERS = [
	{
		id: "all",
		label: "All planes"
	},
	{
		id: "nexusiq",
		label: "Nexus-IQ"
	},
	{
		id: "aeon",
		label: "AEON-IQ"
	},
	{
		id: "nexus",
		label: "Nexus"
	},
	{
		id: "evidence",
		label: "Evidence"
	}
];
var LAYER_DETAIL = {
	nexusiq: {
		title: "Nexus-IQ · transactional control plane",
		role: "Stage, bind authority, validate, decide Commit/Abort, and coordinate emission of portable receipts.",
		invariant: "Composition owns the decision boundary. It does not replace WASM isolation or claim completed Stage 0 end-to-end.",
		maturity: "Foundations for composition narrative and DemoPlayer exist. Full Transactional Change Gate commit barrier remains In Integration under Stage 0.",
		links: [{
			to: "/change-gate",
			label: "Change Gate model"
		}, {
			to: "/#live-demo",
			label: "Live demo"
		}]
	},
	aeon: {
		title: "AEON-IQ · governed memory plane",
		role: "Retrieval evidence, lifecycle integrity, and memory-context modes that inform reasoning without becoming authority.",
		invariant: "Memory may inform reasoning context. It cannot silently widen capability or cross the authority plane.",
		maturity: "Memory evidence modes and disclosure exist. Full memory-state binding remains Stage 0 integration work.",
		links: [{
			to: "/research",
			label: "Research"
		}, {
			to: "/maturity",
			label: "Maturity map"
		}]
	},
	nexus: {
		title: "Nexus · execution + evidence substrate",
		role: "WASM isolation, capability-gated WASI, snapshots, rollback of guest state, and runtime observation for capsules.",
		invariant: "Isolation and capability attenuation are enforced on foundation paths. Host OS and key custody remain residual trust.",
		maturity: "Capability-gated execution, snap-rollback, and capsule emission are Implemented Foundations on documented paths.",
		links: [{
			to: "/security",
			label: "Security boundaries"
		}, {
			to: "/developers",
			label: "Developers"
		}]
	},
	evidence: {
		title: "Evidence plane · Proof Capsules",
		role: "Structured records binding observed execution, authority context, recovery, limitations, and optional integrity metadata.",
		invariant: "A capsule is runtime evidence—not mathematical proof of correct program execution. Limitations stay attached to interpretation.",
		maturity: "Schema, fixtures, and browser Explorer (structural checks) are Implemented Foundations. Production trust anchors remain Target / In Integration.",
		links: [{
			to: "/evidence/proof-capsules",
			label: "Proof Capsules"
		}, {
			to: "/evidence/claims",
			label: "Claims registry"
		}]
	}
};
function layerOpacity(group, active) {
	if (active === "all") return 1;
	if (group === "agent") return .45;
	if (group === active) return 1;
	return .28;
}
function ArchitectureAtlas({ className, compact = false }) {
	const [layer, setLayer] = (0, import_react.useState)("all");
	const uid = (0, import_react.useId)().replace(/:/g, "");
	const microId = `${uid}-micro`;
	const shadowId = `${uid}-shadow`;
	const arrowId = `${uid}-arrow`;
	const detail = layer === "all" ? null : LAYER_DETAIL[layer];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl border border-border bg-carbon", className),
		"data-testid": "architecture-atlas",
		"data-figure": "FIG-ARC-03",
		"data-layer": layer,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-porcelain-subtle",
					children: "FIG-ARC-03 · Three-system composition"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-porcelain-muted",
					children: "Memory may inform · never silently authorize"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					role: "toolbar",
					"aria-label": "Architecture plane filter",
					children: LAYERS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-layer": l.id,
						"aria-pressed": layer === l.id,
						onClick: () => setLayer(l.id),
						className: cn("rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em]", layer === l.id ? "border-institution/55 bg-institution/20 text-porcelain" : "border-border text-porcelain-subtle hover:text-porcelain-muted"),
						children: l.label
					}, l.id))
				})]
			}),
			layer !== "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "border-b border-border bg-institution/10 px-3 py-1.5 font-mono text-[10px] text-porcelain-muted sm:px-4",
				role: "status",
				"data-testid": "atlas-isolation-banner",
				children: [
					"Inspecting ",
					layer,
					" plane · other planes remain as ghosted structural context · contracts retained · not standalone operation"
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("relative w-full bg-void", compact ? "aspect-[16/11]" : "aspect-[16/10] sm:aspect-video"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 1200 675",
					className: "absolute inset-0 h-full w-full",
					role: "img",
					"aria-labelledby": `${uid}-title`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
							id: `${uid}-title`,
							children: "Nexus-IQ, AEON-IQ, and Nexus architecture atlas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
								id: shadowId,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
									dx: "0",
									dy: "16",
									stdDeviation: "12",
									floodOpacity: ".35"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
								id: arrowId,
								markerWidth: "8",
								markerHeight: "8",
								refX: "7",
								refY: "4",
								orient: "auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M0 0L8 4L0 8Z",
									fill: "#b8b3a8"
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "1200",
							height: "675",
							fill: `url(#${microId})`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-layer-group": "agent",
							style: { opacity: layerOpacity("agent", layer) },
							className: "transition-opacity duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "80",
									y: "115",
									fill: "#7a7670",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									letterSpacing: "2",
									children: "AUTONOMOUS SYSTEM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "70",
									y: "145",
									width: "180",
									height: "125",
									rx: "14",
									fill: "#111820",
									stroke: "#f6f1e7",
									strokeOpacity: ".25",
									filter: `url(#${shadowId})`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M100 185h120M100 210h90M100 235h105",
									stroke: "#b8b3a8",
									strokeOpacity: ".45"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "84",
									y: "300",
									fill: "#b8b3a8",
									fontSize: "12",
									children: "declared intent + scope"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-layer-group": "aeon",
							style: { opacity: layerOpacity("aeon", layer) },
							className: "transition-opacity duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "310",
									y: "80",
									width: "520",
									height: "150",
									rx: "18",
									fill: "#102028",
									stroke: "#5f93a8",
									strokeOpacity: ".55"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "338",
									y: "115",
									fill: "#5f93a8",
									fontFamily: "ui-monospace, monospace",
									fontSize: "12",
									letterSpacing: "2",
									children: "AEON-IQ · GOVERNED MEMORY PLANE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									fill: "#111820",
									stroke: "#5f93a8",
									strokeOpacity: ".45",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "395",
											cy: "170",
											r: "29"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "510",
											cy: "150",
											r: "25"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "620",
											cy: "180",
											r: "31"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "745",
											cy: "148",
											r: "23"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M395 170L510 150L620 180L745 148M395 170L620 180",
									fill: "none",
									stroke: "#5f93a8",
									strokeOpacity: ".4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "338",
									y: "214",
									fill: "#b8b3a8",
									fontSize: "11",
									children: "retrieval evidence · lifecycle · memory modes"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-layer-group": "nexusiq",
							style: { opacity: layerOpacity("nexusiq", layer) },
							className: "transition-opacity duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "310",
									y: "265",
									width: "520",
									height: "150",
									rx: "18",
									fill: "#151a20",
									stroke: "#d4a55f",
									strokeOpacity: ".5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "338",
									y: "300",
									fill: "#d4a55f",
									fontFamily: "ui-monospace, monospace",
									fontSize: "12",
									letterSpacing: "2",
									children: "NEXUS-IQ · TRANSACTIONAL CONTROL PLANE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(350 335)",
									fill: "#111820",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											width: "75",
											height: "42",
											rx: "8",
											stroke: "#5f93a8"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "92",
											width: "75",
											height: "42",
											rx: "8",
											stroke: "#5f93a8"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "184",
											width: "75",
											height: "42",
											rx: "8",
											stroke: "#d4a55f"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "276",
											width: "75",
											height: "42",
											rx: "8",
											stroke: "#75a184"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "368",
											width: "75",
											height: "42",
											rx: "8",
											stroke: "#f6f1e7",
											strokeOpacity: ".38"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(350 361)",
									fill: "#b8b3a8",
									fontFamily: "ui-monospace, monospace",
									fontSize: "9",
									textAnchor: "middle",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "37",
											children: "stage"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "129",
											children: "authority"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "221",
											children: "validate"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "313",
											children: "decide"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "405",
											children: "emit"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-layer-group": "nexus",
							style: { opacity: layerOpacity("nexus", layer) },
							className: "transition-opacity duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "310",
									y: "450",
									width: "520",
									height: "150",
									rx: "18",
									fill: "#111820",
									stroke: "#75a184",
									strokeOpacity: ".52"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "338",
									y: "485",
									fill: "#75a184",
									fontFamily: "ui-monospace, monospace",
									fontSize: "12",
									letterSpacing: "2",
									children: "NEXUS · EXECUTION + EVIDENCE SUBSTRATE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(350 520)",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											width: "135",
											height: "48",
											rx: "9",
											fill: "#0b1014",
											stroke: "#5f93a8"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "155",
											width: "135",
											height: "48",
											rx: "9",
											fill: "#0b1014",
											stroke: "#75a184"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
											x: "310",
											width: "135",
											height: "48",
											rx: "9",
											fill: "#0b1014",
											stroke: "#d4a55f"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
									transform: "translate(350 548)",
									fill: "#b8b3a8",
									fontFamily: "ui-monospace, monospace",
									fontSize: "9",
									textAnchor: "middle",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "67",
											children: "WASM isolation"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "222",
											children: "snapshot / rollback"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "377",
											children: "Proof Capsule"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-testid": "atlas-contract-edges",
							className: "transition-opacity duration-300",
							style: { opacity: layer === "all" ? 1 : .85 },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M250 210H290V340H310",
									fill: "none",
									stroke: "#f6f1e7",
									strokeOpacity: ".5",
									strokeWidth: "2",
									markerEnd: `url(#${arrowId})`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "260",
									y: "326",
									fill: "#b8b3a8",
									fontFamily: "ui-monospace, monospace",
									fontSize: "9",
									transform: "rotate(-90 260 326)",
									children: "proposed action"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									"data-contract": "c-aeon-nexusiq-advisory",
									d: "M430 230V264",
									stroke: "#5f93a8",
									strokeWidth: "2",
									strokeDasharray: "5 6",
									strokeOpacity: layer === "all" || layer === "aeon" || layer === "nexusiq" ? .9 : .35
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "442",
									y: "250",
									fill: "#5f93a8",
									fontFamily: "ui-monospace, monospace",
									fontSize: "9",
									children: "advisory context"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									"data-contract": "c-aeon-nexusiq-barrier",
									d: "M590 230V265",
									stroke: "#b96464",
									strokeOpacity: layer === "all" || layer === "aeon" || layer === "nexusiq" ? .85 : .4,
									strokeWidth: "3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									"data-contract": "c-aeon-nexusiq-barrier",
									d: "M575 245l30 0",
									stroke: "#b96464",
									strokeOpacity: layer === "all" || layer === "aeon" || layer === "nexusiq" ? .85 : .4,
									strokeWidth: "3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "615",
									y: "250",
									fill: "#b96464",
									fontFamily: "ui-monospace, monospace",
									fontSize: "9",
									children: "cannot widen authority"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									"data-contract": "c-nexusiq-nexus-exec",
									d: "M570 415V450",
									stroke: "#d4a55f",
									strokeWidth: "2",
									strokeOpacity: layer === "all" || layer === "nexusiq" || layer === "nexus" ? .95 : .35,
									markerEnd: `url(#${arrowId})`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "582",
									y: "440",
									fill: "#d4a55f",
									fontFamily: "ui-monospace, monospace",
									fontSize: "9",
									children: "authorized execution"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M830 340H915",
									stroke: "#75a184",
									strokeWidth: "2",
									markerEnd: `url(#${arrowId})`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "925",
									y: "278",
									width: "205",
									height: "128",
									rx: "12",
									fill: "#13201a",
									stroke: "#75a184"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "948",
									y: "310",
									fill: "#e8f0eb",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									children: "CONTROLLED EFFECT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M948 333h140M948 351h112M948 369h150",
									stroke: "#75a184",
									strokeOpacity: ".6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "948",
									y: "391",
									fill: "#75a184",
									fontFamily: "ui-monospace, monospace",
									fontSize: "8",
									children: "or abort + restore"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M925 342H875V170H830",
									fill: "none",
									stroke: "#5f93a8",
									strokeOpacity: ".28",
									strokeDasharray: "4 7"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "865",
									y: "235",
									fill: "#5f93a8",
									fontFamily: "ui-monospace, monospace",
									fontSize: "9",
									transform: "rotate(-90 865 235)",
									children: "new memory only after policy"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							"data-layer-group": "evidence",
							style: { opacity: layerOpacity("evidence", layer) },
							className: "transition-opacity duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M830 538H915",
									stroke: "#d4a55f",
									strokeWidth: "2",
									markerEnd: `url(#${arrowId})`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "925",
									y: "475",
									width: "205",
									height: "128",
									rx: "12",
									fill: "#eee7d8",
									stroke: "#fff",
									strokeOpacity: ".5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "947",
									y: "507",
									fill: "#1a1f24",
									fontFamily: "ui-monospace, monospace",
									fontSize: "11",
									children: "PROOF CAPSULE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M947 530h145M947 548h120M947 566h155",
									stroke: "#4a5560",
									strokeOpacity: ".5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "947",
									y: "588",
									fill: "#4a5560",
									fontFamily: "ui-monospace, monospace",
									fontSize: "8",
									children: "observed facts + limitations"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "space-y-3 border-t border-border px-3 py-3 sm:px-4",
				children: detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-base text-porcelain",
							children: detail.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-porcelain-muted",
							children: detail.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "border-l-2 border-institution/50 pl-3 text-xs leading-relaxed text-porcelain-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono uppercase tracking-wider text-institution",
								children: ["Invariant ·", " "]
							}), detail.invariant]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs leading-relaxed text-porcelain-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono uppercase tracking-wider",
								children: ["Maturity ·", " "]
							}), detail.maturity]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 pt-1",
							children: detail.links.map((l) => l.to.startsWith("/#") || l.to.startsWith("#") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.to,
								className: "rounded-md border border-border px-2 py-1 font-mono text-[10px] text-porcelain-muted hover:border-porcelain/25 hover:text-porcelain",
								children: l.label
							}, l.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "rounded-md border border-border px-2 py-1 font-mono text-[10px] text-porcelain-muted hover:border-porcelain/25 hover:text-porcelain",
								children: l.label
							}, l.to))
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-porcelain-muted",
					children: "AEON-IQ contributes governed context; Nexus-IQ owns transactional composition; Nexus enforces the sandbox boundary and emits runtime evidence. The hard red bar is the non-escalation rule: memory cannot widen authority."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border bg-void/40 px-3 py-3 sm:px-4",
				"data-testid": "atlas-contract-summary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle",
						children: [
							"Interface contracts ·",
							" ",
							layer === "all" ? "all planes" : `isolated: ${layer}`
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] text-porcelain-muted",
						children: "Isolation emphasizes a plane for inspection. Ghosted neighbors and contracts remain so the plane is not claimed to operate alone."
					}),
					layer === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1 text-xs text-porcelain-muted",
						children: ATLAS_CONTRACTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-porcelain-subtle",
								children: [
									c.from,
									" → ",
									c.to
								]
							}),
							" ",
							"· ",
							c.label,
							" · ",
							c.summary
						] }, c.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase text-institution",
							children: "Inbound"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 space-y-1 text-xs text-porcelain-muted",
							children: contractsForPlane(layer).inbound.length ? contractsForPlane(layer).inbound.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"· ",
								c.from,
								" → ",
								c.label,
								": ",
								c.summary
							] }, c.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· none" })
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase text-institution",
							children: "Outbound"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 space-y-1 text-xs text-porcelain-muted",
							children: contractsForPlane(layer).outbound.length ? contractsForPlane(layer).outbound.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"· → ",
								c.to,
								" · ",
								c.label,
								": ",
								c.summary
							] }, c.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· none" })
						})] })]
					})
				]
			})
		]
	});
}
//#endregion
export { ArchitectureAtlas as t };
