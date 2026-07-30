/**
 * Global terminal interpretation classes for security and evidence.
 * Mechanism terms (denied, restored, advisory…) map into these —
 * they are not competing top-level taxonomies.
 */

export const TRUST_CLASSES = [
  "Enforced",
  "Observed",
  "Residual Trust",
  "Not Established",
] as const;

export type TrustClass = (typeof TRUST_CLASSES)[number];

export const TRUST_CLASS_META: Record<
  TrustClass,
  { symbol: string; short: string; definition: string }
> = {
  Enforced: {
    symbol: "■",
    short: "Enforced",
    definition:
      "A runtime or policy boundary actively allowed or denied the action.",
  },
  Observed: {
    symbol: "●",
    short: "Observed",
    definition:
      "The system recorded an event; recording does not prove enforcement or correctness.",
  },
  "Residual Trust": {
    symbol: "◇",
    short: "Residual Trust",
    definition:
      "The conclusion still depends on a named host, key, signer, service, clock, or operator boundary.",
  },
  "Not Established": {
    symbol: "○",
    short: "Not Established",
    definition:
      "Available evidence does not support the stronger guarantee.",
  },
};
