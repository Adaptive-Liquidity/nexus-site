import { d as homeSearchFromRaw } from "./evaluator-search-Buqd9Qff.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BRtluQtL.js
var $$splitComponentImporter = () => import("./routes-BApdtGW4.mjs");
var Route = createFileRoute("/")({
	validateSearch: (raw) => homeSearchFromRaw(raw),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
