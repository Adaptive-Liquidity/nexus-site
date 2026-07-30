import { i as benchmarksSearchFromRaw } from "./evaluator-search-Buqd9Qff.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/benchmarks-BGYvd2_B.js
var $$splitComponentImporter = () => import("./benchmarks-BZKa-y1Y.mjs");
var Route = createFileRoute("/evidence/benchmarks")({
	validateSearch: (raw) => benchmarksSearchFromRaw(raw),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
