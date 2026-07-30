import { s as developersSearchFromRaw } from "./evaluator-search-Buqd9Qff.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/developers-r2OColFN.js
var $$splitComponentImporter = () => import("./developers-7RJlsiu3.mjs");
var Route = createFileRoute("/developers")({
	validateSearch: (raw) => developersSearchFromRaw(raw),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
