import { o as claimsSearchFromRaw } from "./evaluator-search-Buqd9Qff.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/claims-CtD6-Jy2.js
var $$splitComponentImporter = () => import("./claims-OJuWNeID.mjs");
var Route = createFileRoute("/evidence/claims")({
	validateSearch: (raw) => claimsSearchFromRaw(raw),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
