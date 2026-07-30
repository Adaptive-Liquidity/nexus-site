/**
 * Nexus-IQ P1 visual data contracts.
 *
 * Design rule: visual components render canonical records. They do not invent,
 * copy, or upgrade claims inside component-specific prose.
 */

export const REGISTRY_STATUSES = [
  "CURRENT",
  "IN_DEVELOPMENT",
  "TARGET",
  "EXPERIMENTAL",
  "LIMITATION",
] as const;

export type RegistryStatus = (typeof REGISTRY_STATUSES)[number];

export type EvidenceSourceKind =
  | "source_file"
  | "test"
  | "benchmark_artifact"
  | "schema"
  | "fixture"
  | "workflow_run"
  | "research_artifact"
  | "external_anchor";

export interface EvidenceReference {
  id: string;
  label: string;
  kind: EvidenceSourceKind;
  href: string;
  repository?: string;
  commitSha?: string;
  sha256?: string;
  generatedAt?: string;
  lastVerifiedAt?: string;
  notes?: string;
}

// ---------------------------------------------------------------------------
// P1.1 — Claim dependency and provenance graph
// ---------------------------------------------------------------------------

export type ClaimGraphNodeKind =
  | "evidence_source"
  | "capability_foundation"
  | "public_claim"
  | "blocking_gate"
  | "negative_guarantee"
  | "scope_limitation"
  | "target_dependency";

export type ClaimGraphEdgeKind =
  | "supports"
  | "requires"
  | "blocks"
  | "constrains"
  | "supersedes"
  | "targets";

export interface ClaimGraphNode {
  id: string;
  /** ID of the canonical claims-registry record, when one exists. */
  registryId?: string;
  kind: ClaimGraphNodeKind;
  status: RegistryStatus;
  title: string;
  summary: string;
  scope?: string[];
  negativeGuarantees?: string[];
  evidenceRefIds?: string[];
  acceptanceCriteria?: string[];
  lastVerifiedAt?: string;
  /** Fixed semantic column; never derived from force-layout coordinates. */
  column:
    | "evidence"
    | "foundation"
    | "claim"
    | "boundary";
  order: number;
}

export interface ClaimGraphEdge {
  id: string;
  from: ClaimGraphNode["id"];
  to: ClaimGraphNode["id"];
  kind: ClaimGraphEdgeKind;
  rationale: string;
  evidenceRefIds?: string[];
}

export interface ClaimDependencyGraphRecord {
  schemaVersion: "1.0";
  asOf: string;
  nodes: ClaimGraphNode[];
  edges: ClaimGraphEdge[];
  evidence: EvidenceReference[];
}

// ---------------------------------------------------------------------------
// P1.2 — Capability maturity topology
// ---------------------------------------------------------------------------

export type MaturityTopologyLayer =
  | "disclosed_trust_surface"
  | "implemented_substrate"
  | "integration_plane"
  | "assurance_destination";

export interface CapabilityTopologyNode {
  id: string;
  registryId?: string;
  title: string;
  summary: string;
  status: RegistryStatus;
  layer: MaturityTopologyLayer;
  prerequisites: string[];
  blockers: string[];
  unlocks: string[];
  acceptanceCriteria: string[];
  evidenceRefIds: string[];
  lastVerifiedAt?: string;
  criticalPath: boolean;
  /** Disclosed trust assumptions that survive this capability. */
  residualTrust?: string[];
}

export interface CapabilityTopologyEdge {
  id: string;
  from: CapabilityTopologyNode["id"];
  to: CapabilityTopologyNode["id"];
  kind: "prerequisite" | "integration" | "blocks" | "trusts";
  rationale: string;
}

export interface MaturityTopologyRecord {
  schemaVersion: "1.0";
  asOf: string;
  stageZeroBlockingStatement: string;
  nodes: CapabilityTopologyNode[];
  edges: CapabilityTopologyEdge[];
  evidence: EvidenceReference[];
}

// ---------------------------------------------------------------------------
// P1.3 — Benchmark reproducibility workbench
// ---------------------------------------------------------------------------

export type BenchmarkDirection = "lower_is_better" | "higher_is_better";
export type BenchmarkXAxisKind =
  | "payload_size"
  | "state_size"
  | "percentile"
  | "concurrency"
  | "iteration"
  | "category";

export interface BenchmarkEnvironment {
  runnerName: string;
  runnerProvider?: string;
  cpuModel: string;
  logicalCores?: number;
  memoryBytes?: number;
  operatingSystem: string;
  kernel?: string;
  architecture: string;
  compiler: string;
  compilerVersion: string;
  buildProfile: string;
  featureFlags: string[];
  powerMode?: string;
  isolationNotes?: string;
}

export interface BenchmarkWorkload {
  name: string;
  description: string;
  moduleOrBinary: string;
  command: string;
  warmupIterations: number;
  measuredIterations: number;
  setupExcludedFromTiming: boolean;
  inputShape: Record<string, string | number | boolean>;
  exclusions: string[];
}

export interface BenchmarkSummaryStatistics {
  estimator: "median" | "mean" | "trimmed_mean" | "percentile";
  value: number;
  lowerConfidenceBound?: number;
  upperConfidenceBound?: number;
  confidenceLevel?: number;
  standardDeviation?: number;
  sampleCount: number;
  outlierPolicy: string;
}

export interface BenchmarkPoint {
  x: string | number;
  xLabel: string;
  samples: number[];
  summary: BenchmarkSummaryStatistics;
}

export interface BenchmarkSeries {
  id: string;
  label: string;
  role: "candidate" | "baseline" | "reference";
  commitSha: string;
  points: BenchmarkPoint[];
}

export interface BenchmarkProvenance {
  repository: string;
  commitSha: string;
  workflowRunHref: string;
  rawArtifactHref: string;
  rawArtifactSha256: string;
  schemaHref: string;
  generatedAt: string;
}

export interface BenchmarkPublicationGate {
  /** Derived by validation; never manually asserted by the UI. */
  citable: boolean;
  missingOrInvalid: string[];
  reviewedAt?: string;
  reviewer?: string;
}

export interface BenchmarkArtifact {
  schemaVersion: "1.0";
  artifactId: string;
  title: string;
  metricName: string;
  unit: string;
  direction: BenchmarkDirection;
  xAxisKind: BenchmarkXAxisKind;
  interpretationGuardrail: string;
  environment: BenchmarkEnvironment;
  workload: BenchmarkWorkload;
  series: BenchmarkSeries[];
  provenance: BenchmarkProvenance;
  publication: BenchmarkPublicationGate;
}

const SHA256_HEX = /^[a-f0-9]{64}$/i;
const COMMIT_SHA = /^[a-f0-9]{7,40}$/i;

/**
 * Computes the benchmark's public-citation eligibility from required evidence.
 * The result should be persisted with the artifact or recomputed at ingest.
 */
export function evaluateBenchmarkPublicationGate(
  artifact: BenchmarkArtifact,
): BenchmarkPublicationGate {
  const missingOrInvalid: string[] = [];
  const env = artifact.environment;
  const workload = artifact.workload;
  const provenance = artifact.provenance;

  if (!artifact.artifactId.trim()) missingOrInvalid.push("artifactId");
  if (!artifact.metricName.trim()) missingOrInvalid.push("metricName");
  if (!artifact.unit.trim()) missingOrInvalid.push("unit");
  if (!artifact.interpretationGuardrail.trim()) {
    missingOrInvalid.push("interpretationGuardrail");
  }

  if (!env.runnerName.trim()) missingOrInvalid.push("environment.runnerName");
  if (!env.cpuModel.trim()) missingOrInvalid.push("environment.cpuModel");
  if (!env.operatingSystem.trim()) {
    missingOrInvalid.push("environment.operatingSystem");
  }
  if (!env.architecture.trim()) {
    missingOrInvalid.push("environment.architecture");
  }
  if (!env.compiler.trim() || !env.compilerVersion.trim()) {
    missingOrInvalid.push("environment.compiler/version");
  }
  if (!env.buildProfile.trim()) {
    missingOrInvalid.push("environment.buildProfile");
  }

  if (!workload.command.trim()) missingOrInvalid.push("workload.command");
  if (workload.measuredIterations < 2) {
    missingOrInvalid.push("workload.measuredIterations");
  }
  if (artifact.series.length === 0) missingOrInvalid.push("series");

  for (const series of artifact.series) {
    if (!COMMIT_SHA.test(series.commitSha)) {
      missingOrInvalid.push(`series.${series.id}.commitSha`);
    }
    if (series.points.length === 0) {
      missingOrInvalid.push(`series.${series.id}.points`);
    }
    for (const [index, point] of series.points.entries()) {
      if (point.samples.length < 2) {
        missingOrInvalid.push(`series.${series.id}.points.${index}.samples`);
      }
      if (point.summary.sampleCount !== point.samples.length) {
        missingOrInvalid.push(
          `series.${series.id}.points.${index}.sampleCount`,
        );
      }
    }
  }

  if (!COMMIT_SHA.test(provenance.commitSha)) {
    missingOrInvalid.push("provenance.commitSha");
  }
  if (!SHA256_HEX.test(provenance.rawArtifactSha256)) {
    missingOrInvalid.push("provenance.rawArtifactSha256");
  }
  if (!provenance.workflowRunHref.trim()) {
    missingOrInvalid.push("provenance.workflowRunHref");
  }
  if (!provenance.rawArtifactHref.trim()) {
    missingOrInvalid.push("provenance.rawArtifactHref");
  }
  if (!provenance.schemaHref.trim()) {
    missingOrInvalid.push("provenance.schemaHref");
  }

  return {
    citable: missingOrInvalid.length === 0,
    missingOrInvalid,
  };
}

// ---------------------------------------------------------------------------
// P1.4 — Developer integration simulator
// ---------------------------------------------------------------------------

export type ExecutionStageName =
  | "propose"
  | "stage"
  | "constrain"
  | "validate"
  | "decide"
  | "emit";

export type IntegrationOutcome =
  | "commit"
  | "abort"
  | "denied"
  | "degraded";

export interface IntegrationRequestFixture {
  intent: string;
  capability: string;
  memoryMode: string;
  validators: string[];
  emitProof: boolean;
  representativePayload?: Record<string, unknown>;
}

export interface IntegrationStageFixture {
  name: ExecutionStageName;
  label: string;
  description: string;
  status: "pending" | "active" | "passed" | "failed" | "skipped";
  evidenceFieldsEmitted: string[];
}

export interface IntegrationReceiptFixture {
  outcome: IntegrationOutcome;
  failure: string | null;
  rollback: string;
  attestation: string;
  signature: string;
  durationMs?: number;
  limitations: string[];
  representativeFields: Record<string, unknown>;
}

export interface IntegrationScenarioFixture {
  schemaVersion: "1.0";
  id: string;
  title: string;
  /** Must remain fixture unless the browser is connected to a verified runtime. */
  representation: "fixture" | "live_verified";
  maturity: RegistryStatus;
  description: string;
  request: IntegrationRequestFixture;
  stages: IntegrationStageFixture[];
  expectedReceipt: IntegrationReceiptFixture;
  sourceEvidenceRefIds: string[];
  limitations: string[];
}

export function validateIntegrationScenario(
  scenario: IntegrationScenarioFixture,
): string[] {
  const errors: string[] = [];
  const requiredOrder: ExecutionStageName[] = [
    "propose",
    "stage",
    "constrain",
    "validate",
    "decide",
    "emit",
  ];

  if (scenario.stages.length !== requiredOrder.length) {
    errors.push("stages must contain the six canonical execution stages");
  }

  requiredOrder.forEach((name, index) => {
    if (scenario.stages[index]?.name !== name) {
      errors.push(`stage ${index} must be ${name}`);
    }
  });

  if (scenario.expectedReceipt.limitations.length === 0) {
    errors.push("expectedReceipt.limitations must be non-empty");
  }

  if (
    scenario.representation === "live_verified" &&
    scenario.sourceEvidenceRefIds.length === 0
  ) {
    errors.push("live_verified scenarios require source evidence references");
  }

  if (
    scenario.maturity !== "CURRENT" &&
    scenario.representation === "live_verified"
  ) {
    errors.push("non-current scenarios cannot be labeled live_verified");
  }

  return errors;
}
