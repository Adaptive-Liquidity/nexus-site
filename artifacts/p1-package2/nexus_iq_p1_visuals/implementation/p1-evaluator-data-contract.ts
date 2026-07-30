/** Nexus-IQ evaluator-visual data contracts.
 *  Design handoff only: validate against canonical project content before integration.
 */
export type PublicStatus =
  | "implemented_foundation"
  | "in_integration"
  | "target_architecture"
  | "experimental"
  | "known_limitation";

/** Direction rule: `from` actively relates to `to` for every kind. */
export type RelationKind =
  | "requires"
  | "supports"
  | "binds_context"
  | "blocks"
  | "bounds"
  | "strengthens"
  | "extends_to"
  | "supersedes"
  | "evidences";

export interface SourceRef {
  id: string;
  label: string;
  href?: string;
  repository?: string;
  commitSha?: string;
  path?: string;
  digest?: string;
}

export interface ClaimRelation {
  id: string;
  from: string;
  to: string;
  kind: RelationKind;
  maturity: PublicStatus;
  rationale: string;
  sourceRefs: string[];
  lastVerified: string;
}

export interface VisualProvenance {
  figureId: string;
  classification: "live" | "fixture" | "design_study";
  registryVersion: string;
  registryAsOf: string;
  buildCommit?: string;
  generatedAt: string;
  filters: Record<string, string>;
}

export type TrustInterpretation =
  | "enforced"
  | "observed"
  | "residual_trust"
  | "not_established";

export interface ObservatoryEvent {
  id: string;
  sequence: number;
  stage:
    | "intent"
    | "stage"
    | "constrain"
    | "validate"
    | "decide"
    | "commit"
    | "abort"
    | "emit";
  type: string;
  observedAtMs: number;
  maturity: PublicStatus;
  payloadRef: string;
  evidenceFieldsUnlocked: string[];
}

export interface ArtifactRef {
  path: string;
  sha256: string;
  bytes: number;
  mediaType: string;
  signatureStatus?: "verified" | "present_unverified" | "absent_best_effort";
}

export interface BenchmarkMeasurement {
  id: string;
  group: string;
  category: "benchmarked-primitive" | "integrated-live" | "manual";
  mode:
    | "wall-clock"
    | "cpu-simulation"
    | "heap-memory"
    | "bare-metal-walltime";
  unit: string;
  samples: number[];
  warmup: string;
  measurementTime: string;
  payloadClass: string;
  baselineCommit?: string;
  threshold?: { kind: "absolute" | "percentage" | "statistical"; value: number };
}

export interface BenchmarkManifest {
  schemaVersion: string;
  classification: "published" | "fixture" | "design_study";
  citable: boolean;
  generatedAt: string;
  commitSha: string;
  runner: {
    os: string;
    arch: string;
    cpu?: string;
    memoryBytes?: number;
    provider: string;
  };
  runtime: { wasmtime: string; compiler: string };
  measurements: BenchmarkMeasurement[];
  artifacts: {
    runnerReport: ArtifactRef;
    rawCriterionLog: ArtifactRef;
    signatureBundle?: ArtifactRef;
  };
}

export interface IntegrationStep {
  id: string;
  sequence: number;
  fromLane: "agent" | "authority" | "nexus" | "aeon" | "evidence";
  toLane: "agent" | "authority" | "nexus" | "aeon" | "evidence";
  label: string;
  maturity: PublicStatus;
  trustInterpretation: TrustInterpretation;
  requestRef?: string;
  artifactRef?: string;
  limitations: string[];
}

export interface IntegrationScenario {
  id: string;
  title: string;
  classification: "current_api" | "in_integration" | "destination_architecture";
  entryPoint: string;
  steps: IntegrationStep[];
  returnedArtifact?: string;
  notEstablished: string[];
}
