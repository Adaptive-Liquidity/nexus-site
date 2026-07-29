/**
 * Plain-language field explainers for Proof Capsule Explorer.
 * Maps schema fields → what they mean / do not mean.
 */

export interface FieldExplainer {
  path: string;
  title: string;
  whyItExists: string;
  doesNotMean?: string;
}

export const CAPSULE_FIELD_EXPLAINERS: FieldExplainer[] = [
  {
    path: "capsule_id",
    title: "Capsule ID",
    whyItExists: "Stable identifier for this execution receipt so it can be exported, linked, and audited.",
  },
  {
    path: "subject",
    title: "Subject",
    whyItExists:
      "Who/what ran: run id, tool name, wall-clock start/finish, and measured duration.",
  },
  {
    path: "tool.module_digest",
    title: "Module digest",
    whyItExists:
      "Content-addressed identity of the WASM module that executed so verifiers can detect substitution.",
  },
  {
    path: "input.digest",
    title: "Input digest",
    whyItExists:
      "Hash of the tool input. Raw input may be omitted (raw_included=false) while still binding the claim to a digest.",
  },
  {
    path: "policy",
    title: "Policy profile",
    whyItExists:
      "Records which policy profile and enforcement mode applied to this run.",
  },
  {
    path: "capabilities",
    title: "Capability evidence",
    whyItExists:
      "Required vs granted capabilities and any mismatch. Denial paths produce mismatch and often failure + rollback.",
  },
  {
    path: "snapshot",
    title: "Snapshot evidence",
    whyItExists:
      "Pre/post execution snapshot metadata (id, kind, memory digest, sizes) enabling rollback and integrity checks.",
    doesNotMean: "Does not include raw snapshot memory bytes in the capsule.",
  },
  {
    path: "failure",
    title: "Failure evidence",
    whyItExists:
      "Structured failure category, whether rollback is required, and a summarized error (may be redacted).",
  },
  {
    path: "rollback",
    title: "Rollback evidence",
    whyItExists:
      "Whether rollback occurred, from which snapshot, and why — the recoverability signal for this run.",
  },
  {
    path: "redaction",
    title: "Redaction report",
    whyItExists:
      "Declares which fields were hashed, truncated, removed, or HMAC-bound so consumers know what is hidden.",
  },
  {
    path: "limitations",
    title: "Limitations",
    whyItExists:
      "Mandatory non-empty list of unsupported claims. Always display expanded; never dismissible in the Explorer.",
    doesNotMean:
      "Presence of a signature does not override these limitations. Capsules remain runtime attestation, not proof of correctness.",
  },
  {
    path: "memory_mode",
    title: "Memory attestation mode",
    whyItExists:
      "Whether AEON-IQ memory was consulted and at what assurance (Attested, Advisory, Absent, Degraded, etc.).",
    doesNotMean:
      "Advisory/Absent/Degraded modes must not be read as full cryptographic memory binding.",
  },
  {
    path: "signature",
    title: "Signature envelope",
    whyItExists:
      "Optional Ed25519 (or similar) signature over the payload digest, with signer and key id.",
    doesNotMean:
      "Demo fixtures use non-production signatures. Production trust anchors and external anchoring are Target / In Integration.",
  },
];

/** Default limitations mirrored from Nexus DEFAULT_PROOF_CAPSULE_LIMITATIONS */
export const DEFAULT_LIMITATIONS = [
  "runtime_attestation_only",
  "does_not_prove_correct_execution",
  "does_not_prove_absence_of_external_side_effects",
  "does_not_prove_external_side_effects_absent",
  "does_not_include_raw_snapshot_memory",
  "does_not_guarantee_full_deterministic_replay",
  "does_not_restore_stack_or_registers",
  "execution_state_is_memory_globals_and_table_metadata",
  "blocked_sync_wasi_io_cancellation_is_cooperative",
  "trusts_nexus_runtime_and_host_boundary",
  "proof_trusts_nexus_runtime_and_host_boundary",
] as const;
