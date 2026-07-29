import { d as STAGE_0_NOTE } from "./site-copy-BRpXPyRy.mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { t as MaturityBadge } from "./maturity-badge-C3dmPz-F.mjs";
import { a as PageStub } from "./page-stub-CNaV2sjS.mjs";
import { n as HeroSchematic, t as CHANGE_GATE_PHASES } from "./hero-schematic-CLfA8DuC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/change-gate-CBlYf3eO.js
var import_jsx_runtime = require_jsx_runtime();
function ChangeGatePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageStub, {
		eyebrow: "Change Gate",
		title: "Transactional Change Gate",
		description: "First product: stage consequential changes, constrain authority, validate before commitment, commit or abort, emit portable evidence. Full interactive timeline with inspectors in Phase 1.",
		phaseNote: STAGE_0_NOTE,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSchematic, { className: "mb-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: CHANGE_GATE_PHASES.map((phase) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col gap-2 rounded-lg border border-border bg-carbon px-4 py-3 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-porcelain",
							children: phase.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-porcelain-muted",
							children: phase.finishedCapability
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-porcelain-subtle",
							children: ["Today: ", phase.currentReality]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaturityBadge, {
					status: phase.status,
					className: "shrink-0 self-start"
				})]
			}, phase.id))
		})]
	});
}
//#endregion
export { ChangeGatePage as component };
