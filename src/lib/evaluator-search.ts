/**
 * Typed URL search shapes for P1 evaluator instruments.
 * All fields optional in the route type so Links need no search prop;
 * normalize* applies documented defaults for invalid/missing values.
 */

import { z } from "zod";
import { claimRelationsData } from "@/lib/claim-relations";
import { claimsRegistry } from "@/content";
import {
  INTEGRATION_SCENARIOS,
  type IntegrationScenarioId,
} from "@/content/integration-scenarios";
import { BENCHMARK_METRICS } from "@/content/benchmark-fixture";
import type { ObservatoryScenarioId } from "@/content/observatory-scenarios";

const nodeIds = new Set(claimRelationsData.nodes.map((n) => n.id));
const capIds = new Set(claimsRegistry.capabilities.map((c) => c.id));
const scenarioIds = new Set(INTEGRATION_SCENARIOS.map((s) => s.id));
const metricIds = new Set(BENCHMARK_METRICS.map((m) => m.id));

function bool01(v: unknown): boolean {
  return v === "1" || v === 1 || v === true || v === "true";
}

/** Loose parse — keep URL free of required search on every Link. */
export function claimsSearchFromRaw(
  raw: Record<string, unknown>,
): {
  claim?: string;
  view?: "all" | "support" | "blockers" | "boundaries";
  targets?: boolean;
  q?: string;
  status?: "ALL" | "CURRENT" | "IN_DEVELOPMENT" | "TARGET" | "LIMITATION";
} {
  const claimRaw = typeof raw.claim === "string" ? raw.claim : undefined;
  const claim = claimRaw && nodeIds.has(claimRaw) ? claimRaw : undefined;
  const view = ["all", "support", "blockers", "boundaries"].includes(
    String(raw.view),
  )
    ? (raw.view as "all" | "support" | "blockers" | "boundaries")
    : undefined;
  const status = [
    "ALL",
    "CURRENT",
    "IN_DEVELOPMENT",
    "TARGET",
    "LIMITATION",
  ].includes(String(raw.status))
    ? (raw.status as
        | "ALL"
        | "CURRENT"
        | "IN_DEVELOPMENT"
        | "TARGET"
        | "LIMITATION")
    : undefined;
  return {
    claim,
    view,
    targets: raw.targets === undefined ? undefined : bool01(raw.targets),
    q: typeof raw.q === "string" ? raw.q : undefined,
    status,
  };
}

export type ClaimsSearchResolved = {
  claim: string;
  view: "all" | "support" | "blockers" | "boundaries";
  targets: boolean;
  q: string;
  status: "ALL" | "CURRENT" | "IN_DEVELOPMENT" | "TARGET" | "LIMITATION";
};

export function resolveClaimsSearch(
  s: ReturnType<typeof claimsSearchFromRaw>,
): ClaimsSearchResolved {
  return {
    claim:
      s.claim && nodeIds.has(s.claim) ? s.claim : "transactional-change-gate",
    view: s.view ?? "all",
    targets: s.targets ?? false,
    q: s.q ?? "",
    status: s.status ?? "ALL",
  };
}

export function maturitySearchFromRaw(raw: Record<string, unknown>): {
  capability?: string;
  view?: "current" | "critical" | "all" | "trust";
  targets?: boolean;
} {
  const capability =
    typeof raw.capability === "string" ? raw.capability : undefined;
  const view = ["current", "critical", "all", "trust"].includes(
    String(raw.view),
  )
    ? (raw.view as "current" | "critical" | "all" | "trust")
    : undefined;
  return {
    capability:
      capability && (capIds.has(capability) || nodeIds.has(capability))
        ? capability
        : undefined,
    view,
    targets: raw.targets === undefined ? undefined : bool01(raw.targets),
  };
}

export type MaturitySearchResolved = {
  capability: string;
  view: "current" | "critical" | "all" | "trust";
  targets: boolean;
};

export function resolveMaturitySearch(
  s: ReturnType<typeof maturitySearchFromRaw>,
): MaturitySearchResolved {
  return {
    capability: s.capability ?? "transactional-change-gate",
    view: s.view ?? "current",
    targets: s.targets ?? false,
  };
}

export function benchmarksSearchFromRaw(raw: Record<string, unknown>): {
  benchmark?: string;
  view?: "distribution" | "scaling" | "samples";
  samples?: boolean;
} {
  const benchmark =
    typeof raw.benchmark === "string" && metricIds.has(raw.benchmark)
      ? raw.benchmark
      : undefined;
  const view = ["distribution", "scaling", "samples"].includes(String(raw.view))
    ? (raw.view as "distribution" | "scaling" | "samples")
    : undefined;
  return {
    benchmark,
    view,
    samples: raw.samples === undefined ? undefined : bool01(raw.samples),
  };
}

export type BenchmarksSearchResolved = {
  benchmark: string;
  view: "distribution" | "scaling" | "samples";
  samples: boolean;
};

export function resolveBenchmarksSearch(
  s: ReturnType<typeof benchmarksSearchFromRaw>,
): BenchmarksSearchResolved {
  return {
    benchmark: s.benchmark ?? "sandbox",
    view: s.view ?? "distribution",
    samples: s.samples ?? (s.view === "samples"),
  };
}

export function developersSearchFromRaw(raw: Record<string, unknown>): {
  scenario?: IntegrationScenarioId;
  step?: number;
  architecture?: "current" | "destination";
} {
  const scenario =
    typeof raw.scenario === "string" &&
    scenarioIds.has(raw.scenario as IntegrationScenarioId)
      ? (raw.scenario as IntegrationScenarioId)
      : undefined;
  const n = Number(raw.step);
  const step = Number.isFinite(n) && n >= 0 ? Math.floor(n) : undefined;
  const architecture =
    raw.architecture === "current" || raw.architecture === "destination"
      ? raw.architecture
      : undefined;
  return { scenario, step, architecture };
}

export type DevelopersSearchResolved = {
  scenario: IntegrationScenarioId;
  step: number;
  architecture: "current" | "destination";
};

export function resolveDevelopersSearch(
  s: ReturnType<typeof developersSearchFromRaw>,
): DevelopersSearchResolved {
  return {
    scenario: s.scenario ?? "readonly-inspect",
    step: s.step ?? 0,
    architecture: s.architecture ?? "current",
  };
}

export function homeSearchFromRaw(raw: Record<string, unknown>): {
  obs?: ObservatoryScenarioId;
  stage?: number;
} {
  const obs =
    raw.obs === "commit" || raw.obs === "denial" || raw.obs === "rollback"
      ? raw.obs
      : undefined;
  const n = Number(raw.stage);
  const stage =
    Number.isFinite(n) && n >= 0 ? Math.min(5, Math.floor(n)) : undefined;
  return { obs, stage };
}

export type HomeSearchResolved = {
  obs: ObservatoryScenarioId;
  stage: number;
};

export function resolveHomeSearch(
  s: ReturnType<typeof homeSearchFromRaw>,
): HomeSearchResolved {
  return {
    obs: s.obs ?? "commit",
    stage: s.stage ?? 0,
  };
}

// keep z import used for optional future strict parsing
void z;
