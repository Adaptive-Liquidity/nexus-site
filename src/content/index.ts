/**
 * Public content API for the Nexus-IQ institutional site.
 * Prefer importing from here rather than deep paths.
 */

export * from "./site-copy";
export * from "./maturity";
export * from "./change-gate";
export * from "./capsules/field-explainers";
export * from "./trust-taxonomy";
export * from "./transaction-model";
export * from "./observatory-scenarios";
export * from "./integration-scenarios";
export * from "./benchmark-fixture";

import claimsRegistryJson from "./claims-registry.json";
import successCapsule from "./capsules/success.capsule.json";
import failureRollbackCapsule from "./capsules/failure-rollback.capsule.json";
import claimRelationsJson from "./claim-relations.json";

export const claimsRegistry = claimsRegistryJson;
export const claimRelations = claimRelationsJson;
export const sampleCapsules = {
  success: successCapsule,
  failureRollback: failureRollbackCapsule,
} as const;

export type ClaimsRegistry = typeof claimsRegistryJson;
export type SampleCapsule = typeof successCapsule;
