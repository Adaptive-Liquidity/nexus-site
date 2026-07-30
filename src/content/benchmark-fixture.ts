/**
 * Benchmark workbench data.
 *
 * CRITICAL: Values here are NORMALIZED REPRESENTATIVE FIXTURES only.
 * They are never public performance claims. Citable is always false
 * for this fixture set — production must ingest verified CI manifests.
 */

export interface BenchmarkMetricFixture {
  id: string;
  name: string;
  unit: string;
  lowerBetter: boolean;
  category: "benchmarked-primitive" | "integrated-live";
  interpretationGuardrail: string;
  /** Normalized unitless samples — not milliseconds */
  baseline: number[];
  candidate: number[];
}

export const BENCHMARK_FIXTURE_DISCLAIMER =
  "REPRESENTATIVE FIXTURE DATA — NOT A PUBLIC PERFORMANCE CLAIM. Normalized unitless samples for interaction design only.";

export const BENCHMARK_METRICS: BenchmarkMetricFixture[] = [
  {
    id: "sandbox",
    name: "Sandbox initialization",
    unit: "normalized latency",
    lowerBetter: true,
    category: "benchmarked-primitive",
    interpretationGuardrail:
      "Primitive sandbox init is not end-to-end agent latency. Never compare with integrated request paths.",
    baseline: [1.04, 1.01, 0.99, 1.03, 0.98, 1.0, 1.02, 0.97, 1.01, 1.0, 1.04, 0.96],
    candidate: [0.96, 0.94, 0.95, 0.97, 0.93, 0.95, 0.92, 0.96, 0.94, 0.95, 0.93, 0.97],
  },
  {
    id: "snapshot",
    name: "Snapshot creation",
    unit: "normalized latency",
    lowerBetter: true,
    category: "benchmarked-primitive",
    interpretationGuardrail:
      "State size and compressibility dominate snapshot cost. A single headline number must not be generalized.",
    baseline: [1.05, 0.98, 1.02, 1.08, 0.95, 1.0, 1.03, 0.97, 1.06, 0.99, 1.01, 0.96],
    candidate: [1.0, 0.97, 0.99, 1.02, 0.96, 0.98, 1.01, 0.95, 0.99, 0.97, 1.0, 0.96],
  },
  {
    id: "rollback",
    name: "Rollback restoration",
    unit: "normalized latency",
    lowerBetter: true,
    category: "benchmarked-primitive",
    interpretationGuardrail:
      "Rollback cost scales with state size. Fixture only — not citable.",
    baseline: [1.02, 1.0, 0.99, 1.01, 0.98, 1.04, 0.97, 1.02, 1.0, 0.96, 1.03, 0.99],
    candidate: [0.93, 0.94, 0.92, 0.95, 0.91, 0.96, 0.93, 0.92, 0.94, 0.9, 0.95, 0.93],
  },
  {
    id: "throughput",
    name: "Memory throughput",
    unit: "normalized throughput",
    lowerBetter: false,
    category: "benchmarked-primitive",
    interpretationGuardrail:
      "Throughput is a component measurement, not agent task success rate.",
    baseline: [0.98, 1.02, 1.0, 0.97, 1.01, 0.99, 1.03, 0.96, 1.0, 1.01, 0.98, 1.02],
    candidate: [1.05, 1.07, 1.04, 1.06, 1.08, 1.03, 1.05, 1.09, 1.06, 1.04, 1.07, 1.05],
  },
];

export function median(xs: number[]): number {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m]! : (s[m - 1]! + s[m]!) / 2;
}

export function percentile(xs: number[], p: number): number {
  const s = [...xs].sort((a, b) => a - b);
  const i = Math.min(s.length - 1, Math.max(0, Math.floor((p / 100) * s.length)));
  return s[i]!;
}

/**
 * Publication gate for a real artifact. Fixture mode always fails citability.
 */
export function evaluateFixturePublicationGate(): {
  citable: false;
  missingOrInvalid: string[];
} {
  return {
    citable: false,
    missingOrInvalid: [
      "artifactId (fixture mode)",
      "provenance.commitSha (verified CI)",
      "provenance.rawArtifactSha256",
      "provenance.workflowRunHref",
      "environment.runnerName (verified)",
      "real sample artifacts",
    ],
  };
}
