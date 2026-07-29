/**
 * Phase C — homepage scroll as one controlled transaction.
 * Beats map scroll narrative to Change Gate semantics.
 */

export type TransactionBeatId =
  | "intent"
  | "gap"
  | "execute"
  | "model"
  | "evidence"
  | "compose"
  | "outcomes"
  | "trust"
  | "evaluate";

export interface TransactionBeat {
  id: TransactionBeatId;
  /** Anchor id on the page */
  href: string;
  /** Short rail label */
  label: string;
  /** Gate-phase metaphor */
  gateMetaphor: string;
  /** One-line connective copy shown in beat chrome */
  connector: string;
  step: number;
}

export const TRANSACTION_BEATS: TransactionBeat[] = [
  {
    id: "intent",
    href: "#intent",
    label: "Intent",
    gateMetaphor: "Propose",
    connector: "Declare consequential action",
    step: 1,
  },
  {
    id: "gap",
    href: "#problem",
    label: "Gap",
    gateMetaphor: "Missing controls",
    connector: "Why a commit boundary exists",
    step: 2,
  },
  {
    id: "execute",
    href: "#live-demo",
    label: "Execute",
    gateMetaphor: "Stage → Decide",
    connector: "Watch the boundary run",
    step: 3,
  },
  {
    id: "model",
    href: "#change-gate",
    label: "Model",
    gateMetaphor: "Change Gate",
    connector: "Full operating model + maturity",
    step: 4,
  },
  {
    id: "evidence",
    href: "#evidence",
    label: "Evidence",
    gateMetaphor: "Emit",
    connector: "Inspect portable proof",
    step: 5,
  },
  {
    id: "compose",
    href: "#system",
    label: "Compose",
    gateMetaphor: "Substrates",
    connector: "Nexus · AEON-IQ · Nexus-IQ",
    step: 6,
  },
  {
    id: "outcomes",
    href: "#outcomes",
    label: "Outcomes",
    gateMetaphor: "Finished system",
    connector: "What completion enables",
    step: 7,
  },
  {
    id: "trust",
    href: "#trust",
    label: "Trust",
    gateMetaphor: "Adversarial read",
    connector: "Security · research · limits",
    step: 8,
  },
  {
    id: "evaluate",
    href: "#evaluation",
    label: "Evaluate",
    gateMetaphor: "Commit path",
    connector: "Evidence · code · evaluation",
    step: 9,
  },
];
