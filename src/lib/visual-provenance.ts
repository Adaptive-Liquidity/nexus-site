import { claimsRegistry } from "@/content";

export type DataClassification =
  | "live"
  | "validated_artifact"
  | "fixture"
  | "design_study";

export interface FigureProvenance {
  figureId: string;
  classification: DataClassification;
  registryVersion: string;
  registryAsOf: string;
  /** Workspace build identity when available */
  sourceNote: string;
  generatedAt: string;
  filters?: string;
  sourceRefs: string[];
}

export function buildFigureProvenance(
  figureId: string,
  classification: DataClassification,
  opts?: { filters?: string; sourceRefs?: string[] },
): FigureProvenance {
  return {
    figureId,
    classification,
    registryVersion: claimsRegistry.version,
    registryAsOf: claimsRegistry.asOf,
    sourceNote: "Derived from claims-registry + typed relations; no live CI pull",
    generatedAt: new Date().toISOString(),
    filters: opts?.filters,
    sourceRefs: opts?.sourceRefs ?? ["src/content/claims-registry.json"],
  };
}

export function provenanceSummary(p: FigureProvenance): string {
  return `${p.figureId} · ${p.classification} · registry ${p.registryVersion} (${p.registryAsOf})`;
}
