import { t as claimsRegistry } from "./content-BpadpKYG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visual-provenance-C-bGV2PH.js
function buildFigureProvenance(figureId, classification, opts) {
	return {
		figureId,
		classification,
		registryVersion: claimsRegistry.version,
		registryAsOf: claimsRegistry.asOf,
		sourceNote: "Derived from claims-registry + typed relations; no live CI pull",
		generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		filters: opts?.filters,
		sourceRefs: opts?.sourceRefs ?? ["src/content/claims-registry.json"]
	};
}
function provenanceSummary(p) {
	return `${p.figureId} · ${p.classification} · registry ${p.registryVersion} (${p.registryAsOf})`;
}
//#endregion
export { provenanceSummary as n, buildFigureProvenance as t };
