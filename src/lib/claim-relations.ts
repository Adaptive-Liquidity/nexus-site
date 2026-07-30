import claimRelationsJson from "@/content/claim-relations.json";
import { claimsRegistry } from "@/content";
import type { InternalStatus } from "@/content/maturity";

export type RelationKind =
  | "requires"
  | "supports"
  | "evidences"
  | "blocks"
  | "bounds"
  | "binds_context"
  | "strengthens"
  | "extends_to"
  | "supersedes"
  | "trusts";

export type GraphColumn = "evidence" | "foundation" | "claim" | "boundary";

export interface ClaimGraphNode {
  id: string;
  kind: string;
  registryId: string | null;
  title: string;
  summary: string;
  status: InternalStatus;
  column: GraphColumn;
  order: number;
}

export interface ClaimRelation {
  id: string;
  from: string;
  to: string;
  kind: RelationKind;
  maturity: InternalStatus;
  rationale: string;
  sourceRefs: string[];
  lastVerified: string;
}

export const claimRelationsData = claimRelationsJson as {
  schemaVersion: string;
  asOf: string;
  registryVersion: string;
  stage0Id: string;
  nodes: ClaimGraphNode[];
  relations: ClaimRelation[];
};

/** Target / pure destination nodes (hidden by default in current-only). */
export function isTargetStatus(status: InternalStatus): boolean {
  return status === "TARGET";
}

export function getNode(id: string): ClaimGraphNode | undefined {
  return claimRelationsData.nodes.find((n) => n.id === id);
}

export function relationsFor(nodeId: string): ClaimRelation[] {
  return claimRelationsData.relations.filter(
    (r) => r.from === nodeId || r.to === nodeId,
  );
}

export function validateClaimRelations(): string[] {
  const errors: string[] = [];
  const ids = new Set(claimRelationsData.nodes.map((n) => n.id));
  const seen = new Set<string>();

  for (const n of claimRelationsData.nodes) {
    if (seen.has(n.id)) errors.push(`duplicate node ${n.id}`);
    seen.add(n.id);
    if (n.registryId) {
      const cap = claimsRegistry.capabilities.find((c) => c.id === n.registryId);
      if (!cap) errors.push(`missing registry capability ${n.registryId}`);
      else if (cap.status !== n.status) {
        errors.push(
          `status mismatch ${n.id}: graph=${n.status} registry=${cap.status}`,
        );
      }
    }
  }

  for (const r of claimRelationsData.relations) {
    if (!ids.has(r.from)) errors.push(`edge ${r.id} missing from ${r.from}`);
    if (!ids.has(r.to)) errors.push(`edge ${r.id} missing to ${r.to}`);
    if (!r.rationale.trim()) errors.push(`edge ${r.id} empty rationale`);
    if (!r.sourceRefs.length) errors.push(`edge ${r.id} missing sourceRefs`);
  }

  return errors;
}

export function registryCap(id: string) {
  return claimsRegistry.capabilities.find((c) => c.id === id);
}
