/**
 * Build-time-ish integrity check for claim-relations.json vs claims-registry.json
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const registry = JSON.parse(
  readFileSync(resolve(root, "src/content/claims-registry.json"), "utf8"),
);
const relations = JSON.parse(
  readFileSync(resolve(root, "src/content/claim-relations.json"), "utf8"),
);

const errors = [];
const capIds = new Set(registry.capabilities.map((c) => c.id));
const nodeIds = new Set(relations.nodes.map((n) => n.id));
const seen = new Set();

for (const n of relations.nodes) {
  if (seen.has(n.id)) errors.push(`duplicate node ${n.id}`);
  seen.add(n.id);
  if (n.registryId && !capIds.has(n.registryId)) {
    errors.push(`missing registry capability ${n.registryId}`);
  }
  if (n.registryId) {
    const cap = registry.capabilities.find((c) => c.id === n.registryId);
    if (cap && cap.status !== n.status) {
      errors.push(
        `status mismatch ${n.id}: graph=${n.status} registry=${cap.status}`,
      );
    }
  }
}

for (const r of relations.relations) {
  if (!nodeIds.has(r.from)) errors.push(`edge ${r.id} missing from ${r.from}`);
  if (!nodeIds.has(r.to)) errors.push(`edge ${r.id} missing to ${r.to}`);
  if (!r.rationale?.trim()) errors.push(`edge ${r.id} empty rationale`);
  if (!r.sourceRefs?.length) errors.push(`edge ${r.id} missing sourceRefs`);
}

if (errors.length) {
  console.error("FAIL", errors);
  process.exit(1);
}
console.log(
  `OK nodes=${relations.nodes.length} relations=${relations.relations.length}`,
);
