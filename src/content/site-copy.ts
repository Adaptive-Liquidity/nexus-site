/**
 * Locked public copy for Nexus-IQ institutional site.
 * Layer One language is permanent; maturity strings live in claims-registry.
 */

export const BRAND = {
  product: "Nexus-IQ",
  parent: "Adaptive Liquidity Labs",
  parentBlurb:
    "Nexus-IQ is the agent execution and proof layer of Adaptive Liquidity Labs.",
  categoryLabel: "PROOF-CARRYING TRANSACTIONAL EXECUTION",
  githubOrg: "https://github.com/adaptiveliquidity",
  githubNexus: "https://github.com/adaptiveliquidity/Nexus",
  githubAeon: "https://github.com/adaptiveliquidity/AEON-IQ",
  githubNexusIq: "https://github.com/adaptiveliquidity/Nexus-IQ",
  benchmarks: "https://adaptiveliquidity.github.io/Nexus/",
} as const;

/** Public category hierarchy */
export const POSITIONING = {
  category: "Transactional execution infrastructure for autonomous systems",
  productDefinition:
    "Nexus-IQ establishes an execution boundary where consequential changes can be staged, constrained, validated, and evidenced before they are committed.",
  supportingLine:
    "Stage the change. Constrain the authority. Commit only what survives verification.",
  internalOneLiner:
    "AI agents can act. Nexus-IQ makes their actions transactional.",
} as const;

/** Homepage hero — Phase A densified (first 10 seconds) */
export const HERO = {
  categoryLabel: BRAND.categoryLabel,
  headline: "Consequential agent action belongs behind a commit boundary.",
  /** One-sentence boundary definition — primary supporting copy */
  supportingDefinition:
    "Without a commit boundary, autonomous intent becomes irreversible effect. Nexus-IQ stages the change, constrains authority, validates before commitment, and emits an independently inspectable record.",
  /** Loss-aversion micro-line under supporting definition */
  lossLine:
    "Intent is not authority. A tool call is not a transaction. A runtime report is not evidence.",
  /** Product / credibility objects for hero chips */
  productObject: "Transactional Change Gate",
  credibilityObject: "Proof Capsule",
  /** Longer definition for lower page sections */
  fullDefinition:
    "Nexus-IQ is proof-carrying transactional execution infrastructure for AI agents—designed to stage consequential changes, constrain authority, validate before commitment, and preserve an independently inspectable execution record.",
  maturityStrip:
    "Platform architecture shown in full. Stage 0 evidence integration is in progress. Every Implemented Foundation links to source evidence, benchmarks, and verifiable artifacts.",
  primaryCta: { label: "Watch the commit boundary", href: "#live-demo" },
  secondaryCta: {
    label: "Inspect a real Proof Capsule",
    href: "#evidence",
  },
  tertiaryCta: { label: "View implementation maturity", href: "/maturity" },
  modelCta: { label: "Explore the model", href: "#change-gate" },
  utilityCta: { label: "Request Evaluation", href: "#evaluation" },
} as const;

/** Primary navigation */
export const NAV = {
  primary: [
    { label: "System", href: "/system" },
    { label: "Change Gate", href: "/change-gate" },
    { label: "Evidence", href: "/evidence" },
    { label: "Security", href: "/security" },
    { label: "Research", href: "/research" },
    { label: "Developers", href: "/developers" },
  ],
  utility: [
    { label: "Maturity", href: "/maturity" },
    { label: "GitHub", href: BRAND.githubOrg, external: true as const },
    { label: "Request Evaluation", href: "#evaluation" },
  ],
} as const;

/** 10-minute belief transformation (north star) */
export const BELIEF = {
  current:
    "Autonomous systems require more than model-level guardrails. Consequential actions need an execution boundary where changes can be isolated, authority can be constrained, validation can occur before commitment, failures can be rolled back, and the resulting decision path can be independently inspected. Nexus-IQ is building that boundary by combining Nexus’s execution and evidence substrate with AEON-IQ’s governed memory plane.",
  targetArchitecture:
    "At full integration the Transactional Change Gate will stage proposed changes, enforce capability and policy constraints, run deterministic validators, require approval where policy demands it, commit or abort the transaction, and emit portable signed evidence binding the action to its execution, authority, and memory context.",
} as const;

export const PROBLEM = {
  core:
    "A model can propose an action. That does not establish the authority, validity, or safety required to commit it.",
  transitions: [
    {
      from: "Model output → direct tool execution",
      missing: "Authority boundary",
    },
    {
      from: "Tool execution → irreversible side effect",
      missing: "Transaction boundary",
    },
    {
      from: "Runtime report → accepted result",
      missing: "Independent evidence",
    },
  ],
} as const;

export const COMPOSITION = [
  {
    id: "nexus",
    name: "Nexus",
    role: "Execution boundary, isolation, policy, snapshots, rollback, and runtime evidence",
  },
  {
    id: "aeon-iq",
    name: "AEON-IQ",
    role: "Governed memory, retrieval evidence, lifecycle, and memory-context integrity",
  },
  {
    id: "nexus-iq",
    name: "Nexus-IQ",
    role: "Transactional composition, validation, approval, commit control, and portable receipts",
  },
] as const;

export const OUTCOMES = [
  {
    id: "controlled-change",
    title: "Controlled autonomous change",
    capabilities: [
      "Staging",
      "Authority binding",
      "Validators",
      "Approval",
      "Commit/abort",
    ],
  },
  {
    id: "inspectable",
    title: "Inspectable execution",
    capabilities: [
      "Proof Capsules",
      "Transaction receipts",
      "Provenance",
      "Limitations",
    ],
  },
  {
    id: "recoverable",
    title: "Recoverable failure",
    capabilities: ["Abort", "Rollback", "Compensation", "Evidence of denial"],
  },
] as const;

/** Initial product wedge workflows */
export const WORKFLOWS = [
  "Repository and software change under a commit boundary",
  "Security remediation with staged validation and rollback",
  "Governed automation with capability-constrained tools",
  "Research and evaluation pipelines with downloadable evidence",
] as const;

/** Explicit Proof Capsule honesty copy */
export const CAPSULE_HONESTY = {
  proves:
    "Portable, signed evidence of what the runtime observed and enforced under present capability tokens and attestation modes.",
  doesNotProve: [
    "Mathematical proof of correct program execution",
    "Absence of all external side effects",
    "Full deterministic replay of arbitrary agent trajectories",
    "That the full Transactional Change Gate product workflow is complete",
  ],
  explorerUiStatus:
    "Schema, generation paths, artifacts, and this browser Explorer (fixture inspection + structural checks) are Implemented Foundations for educational verification. Cryptographic production verification, durable trust anchors, and external anchoring remain Target / In Integration.",
} as const;

export const STAGE_0_NOTE =
  "Stage 0 evidence integrity is the current blocking work for end-to-end transactional guarantees and full memory-state binding.";

/** Launch / evaluation thesis strip */
export const LAUNCH_THESIS =
  "Publish evidence artifacts before broad promotion. Senior engineers and security teams evaluate foundations, not slogans. The finished operating model is the narrative; maturity and evidence stay inseparable from every claim.";
