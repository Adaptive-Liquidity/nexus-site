export type InternalStatus =
  | "CURRENT"
  | "IN_DEVELOPMENT"
  | "TARGET"
  | "EXPERIMENTAL"
  | "LIMITATION";

export type ClaimRelationType =
  | "requires"
  | "supports"
  | "binds_context"
  | "blocks"
  | "bounds"
  | "strengthens"
  | "target_extension"
  | "supersedes"
  | "evidences";

export interface ClaimRelationship {
  /** UI adapter shape. Canonical source remains ClaimRelation in implementation/p1-evaluator-data-contract.ts. */
  id: string;
  from: string;
  to: string;
  type: ClaimRelationType;
  maturity: InternalStatus;
  basis: string;
  sourceRefs: string[];
  canonical: true;
  lastVerified: string;
  interpretation?: string;
}

export interface MaturityReason {
  status: InternalStatus;
  because: string[];
  blockedBy: string[];
  boundedBy: string[];
  unlocks: string[];
  sourceRefs: string[];
  lastVerified: string;
}

export interface BenchmarkArtifact {
  schemaVersion: string;
  benchmarkId: string;
  metric: string;
  unit: string;
  lowerIsBetter: boolean;
  source: {
    repository: string;
    commit: string;
    workflowRun?: string;
    artifactSha256: string;
  };
  environment: {
    runnerImage: string;
    os: string;
    cpu?: string;
    toolchain: string;
    featureFlags: string[];
  };
  method: {
    harness: string;
    warmup: string;
    samples: number;
    outlierPolicy: string;
    exclusions: string[];
  };
  observations: number[];
  generatedAt: string;
}

export interface IntegrationStep {
  from: "Agent" | "Host" | "Nexus-IQ" | "Nexus" | "Validator" | "Effect" | "Evidence";
  to: "Agent" | "Host" | "Nexus-IQ" | "Nexus" | "Validator" | "Effect" | "Evidence";
  label: string;
  status: InternalStatus;
  evidenceFields?: string[];
  limitations?: string[];
}

export interface IntegrationScenario {
  id: string;
  name: string;
  scopeLabel: string;
  summary: string;
  capabilities: string[];
  decision: "COMMIT" | "ABORT" | "DENY" | "COMMIT_OR_ABORT";
  steps: IntegrationStep[];
  limitations: string[];
  representative: true;
}
