# NEXUS-IQ P0.5 HARDENING + P1 EVALUATOR INSTRUMENTS
## Master Implementation, Verification, and Completion Prompt

You are the lead implementation and verification agent for the Nexus-IQ public website.

Your assignment is **not** to produce another plan, concept board, or superficial visual pass. You must inspect the actual repository and current preview, harden the completed P0 visual system, then fully implement, integrate, test, and independently review the four P1 evaluator instruments at production quality.

Repository:
- `https://github.com/Adaptive-Liquidity/nexus-site`

Current preview to inspect:
- `https://hds-8gnv4xws0v97-6014-g96ml.grok-code-wild.hades-www.grok-sandbox.com/`

Primary affected routes:
- `/`
- `/system`
- `/evidence/proof-capsules`
- `/security`
- `/maturity`
- `/evidence/claims`
- `/evidence/benchmarks`
- `/developers`

Inputs supplied with this prompt:
1. The accompanying P0/P1 review report.
2. `nexus-iq-p1-visual-instruments.zip`.
3. The current repository and preview.

## Mission

Deliver a coherent, academically defensible, evaluator-grade visual system in which the website visibly explains:

- what Nexus-IQ currently implements;
- what is still in integration or destination architecture;
- what supports each public claim;
- what blocks a stronger claim;
- which evidence is available and how fresh it is;
- how capabilities depend on one another;
- how benchmark results become reproducible and citable;
- how a developer request passes through memory, authority, execution, validation, Commit/Abort, and evidence;
- what is enforced, what is merely observed, what still depends on residual trust, and what is not established.

The controlling principle is:

> **The product is the spectacle.** Cinematic craft comes from precise information design, material, depth, timing, interaction, and causality—not invented science-fiction worlds, decorative machinery, or generic animation.

The public product thesis remains:

> **Consequential agent action belongs behind a commit boundary.**

Do not change that thesis, locked public claims, product maturity, or technical scope unless the repository contains explicit evidence authorizing the change.

---

# 1. Understand the attached instruments package before using it

First extract and inventory the actual archive. Do not assume the file list below is exhaustive if a newer package contains additional files. Read any package `README.md` first if present.

The supplied archive is a **design-and-implementation reference package**, not a production drop-in and not proof that the website implementation already passes production QA.

## Package map

### `nexus-iq-p1-implementation-blueprint.md`

This is the principal written design specification. It explains:

- the current-site assessment;
- shared P1 visual doctrine;
- route placement;
- interaction behavior;
- canonical data requirements;
- mobile transformations;
- accessibility and performance expectations;
- verification criteria;
- suggested implementation files and sequencing.

Use it as an architectural and acceptance reference. Reconcile every instruction against the current repository before implementation. The repository and canonical claims/evidence records take precedence where there is a conflict.

### `nexus-iq-p1-visual-lab.html`

This is a self-contained interactive prototype containing four design studies:

1. Claim Dependency and Provenance Graph.
2. Capability Maturity Topology.
3. Benchmark Reproducibility Workbench.
4. Developer Integration Simulator.

Use it to understand:

- intended visual hierarchy;
- interaction flow;
- filters and inspectors;
- information density;
- terminology placement;
- desktop and mobile behavior concepts.

Do **not** paste this standalone HTML into the application. Do not treat its hard-coded fixture data, labels, metrics, or relationships as canonical. Rebuild the instruments as maintainable React/TypeScript components using the site's existing design system and canonical data.

### `exports/00-p1-visual-overview.png`

This is a contact-sheet overview of all four instruments. Use it for quick visual orientation and cross-instrument consistency review. It is not a pixel-perfect implementation mandate.

### `exports/01-claim-dependency-graph.png`

This is the desktop visual reference for the Claim Dependency Graph. It demonstrates a deterministic layered dependency graph with an adjacent evaluator inspector.

Use it for:

- layer ordering;
- support/blocker path emphasis;
- node hierarchy;
- negative-guarantee presentation;
- evaluator-oriented information density.

Do not copy graph edges or claims from the image. All relationships must come from typed canonical records.

### `exports/02-maturity-topology.png`

This is the desktop visual reference for the Capability Maturity Topology. It demonstrates implemented foundations, integration work, Stage 0 gating, destination architecture, and residual trust as a topology rather than a completion percentage.

Use it for:

- topological region design;
- critical-path highlighting;
- current-only versus full-architecture modes;
- blocker and unlock inspection.

Do not infer maturity from visual position or adjacency. Maturity must come from canonical status data.

### `exports/03-benchmark-workbench.png`

This is the desktop visual reference for the Benchmark Reproducibility Workbench. It demonstrates charting, environment context, methodology, artifact provenance, confidence information, and a citable/not-citable gate.

Its displayed values are representative fixture data only. They are **not public benchmark claims** and must not ship as if they were real Nexus-IQ results.

### `exports/04-developer-integration-simulator.png`

This is the desktop visual reference for the Developer Integration Simulator. It demonstrates request input, a deterministic boundary trace, Commit/Abort outcomes, and returned evidence with mandatory limitations.

Its request and receipt content are representative fixtures. Use only exact interfaces, names, and behavior verified in the current repository or canonical documentation.

### `spec/p1-visual-data-contracts.ts`

This is a proposed TypeScript contract for:

- registry status;
- evidence references;
- claim nodes and typed edges;
- maturity topology nodes and dependencies;
- benchmark environments, workloads, samples, statistics, provenance, and publication eligibility;
- developer integration scenarios and execution traces.

Use it as a starting schema, not an unquestionable source of truth. Adapt it to the current application's data model, validate it with the site's existing validation approach—preferably Zod—and ensure there is only one canonical source of claim, maturity, evidence, and relationship truth.

Do not create a second registry solely for visuals.

### `qa-report.md`

This summarizes QA performed against the standalone concept lab. It establishes that the prototype interactions were exercised, including keyboard focus, mobile overflow, scenario switching, and reduced motion.

It does **not** establish that the integrated website passes those checks.

### `qa-results.json`

This is the machine-readable result set for the standalone prototype's 23 checks. Use it to reproduce equivalent checks in the repository's test suite where appropriate.

Do not cite `23/23` as production-site verification until equivalent tests pass against the integrated routes.

### `artifact-manifest.json`

This records package provenance, file hashes, dimensions, and explicit fixture-data limitations. Preserve this distinction when integrating assets or deriving new artifacts.

If production figures are exported, create or update a repository-side provenance manifest containing:

- figure ID;
- data classification: live, validated artifact, fixture, or design study;
- claims-registry version or `asOf` date;
- source commit/build SHA;
- generated-at time;
- selected filters or scenario;
- file dimensions and hashes;
- source references.

## Package-use rule

The package provides:

- information architecture;
- visual direction;
- interaction concepts;
- candidate data contracts;
- prototype QA ideas.

It does not provide:

- canonical public claims;
- production benchmark data;
- verified runtime APIs;
- permission to upgrade maturity;
- proof that the integrated site is complete;
- production-ready route code.

---

# 2. Ground-truth hierarchy

When sources disagree, use this order:

1. Repository instructions such as `AGENTS.md`, contributing rules, and local agent instructions.
2. Current checked-out source code, schemas, tests, canonical claims registry, evidence records, benchmark artifacts, and documented interfaces.
3. Verified behavior in the current preview or a locally built production preview.
4. The accompanying review report.
5. The P1 instruments package as a design and implementation reference.

Never let a prototype, screenshot, diagram, or report silently upgrade a claim beyond what the repository proves.

Every public-facing statement, relationship, status, metric, API name, trust interpretation, and guarantee boundary must be traceable to canonical source data or clearly labeled as a representative fixture or destination architecture.

---

# 3. Locked doctrine and truthfulness rules

These rules are non-negotiable across P0 and P1:

1. **Memory may inform reasoning; it may never silently widen execution authority.**
2. **Commit and Abort are equal first-class terminal outcomes.**
3. **A Proof Capsule is an evidence record/lattice, not a pill-shaped product object.**
4. **Abort must not imply that all external effects are absent or reversible.** Snapshot-backed guest restoration and external-effect compensation are separate semantics.
5. **Compensation is not rollback.** It begins after a committed external effect and must be modeled as a distinct target or mechanism.
6. **Approval is policy-conditioned, not a universal phase.**
7. **Current foundations, in-integration work, experimental work, limitations, and destination architecture must be visibly distinct.**
8. **Any visual containing target architecture defaults to current-only.**
9. **Target nodes hidden by a current-only view must not remain focusable, selectable, or announced to assistive technology.**
10. **Security interpretation uses one global taxonomy:**
    - Enforced
    - Observed
    - Residual Trust
    - Not Established
11. Mechanism terms such as denied, restored, constrained, degraded, advisory, or attested describe behavior; they do not replace the four interpretation classes.
12. Signature presentation must expose signer identity, key source/custody, verification status, fields covered, and current production-trust limitations. Do not equate signature presence with production-grade trust.
13. No customer, integration, deployment, audit, benchmark, cryptographic guarantee, production-readiness claim, or social proof may be invented.
14. “Sentient,” “sovereign intelligence,” and similar language may guide visual metaphor but must not be presented as a verified product capability unless explicitly supported by canonical claims.
15. Do not represent uncertainty as zero, missing data as failure, or incompatible benchmark runs as directly comparable.

---

# 4. Operating method

## Repository protection

Before changing anything:

1. Read all repository and agent instructions.
2. Record current branch, HEAD, remotes, dirty state, worktrees, and untracked files.
3. Preserve all existing work.
4. Do not reset, clean, delete, overwrite, rebase, force-push, or modify unrelated files.
5. Do not commit, push, open a PR, merge, or deploy unless separately authorized.
6. Do not configure credentials, spend external generation credits, or upload private repository content.

## Execution tracker

Create a working tracker with every phase and gate below. Use these states only:

- `NOT STARTED`
- `IN PROGRESS`
- `IMPLEMENTED — NOT VERIFIED`
- `VERIFIED`
- `BLOCKED`

A phase is not complete when code exists. It is complete only when its acceptance gate has passed and evidence is recorded.

## Efficient role division

Use parallel agents or subagents when available, but avoid simultaneous edits to the same files.

Recommended lanes:

- **Lead architect:** repository audit, doctrine, data ownership, integration decisions.
- **Canonical data/evidence specialist:** schemas, relationships, provenance, benchmark manifests, fixtures.
- **Frontend visual specialist:** SVG/DOM instruments, inspectors, responsive interaction.
- **Accessibility/performance specialist:** keyboard, screen reader, reduced motion, rendering and bundle behavior.
- **Independent reviewer:** semantic accuracy, actual pixels, claim risk, regression review.

The implementer who builds an instrument must not be its only final reviewer.

## Progress behavior

Work autonomously through all phases. Do not stop after producing a plan. Ask only when an actual authorization boundary is reached. When uncertainty exists, inspect the repository, tests, documentation, and evidence rather than guessing.

---

# 5. Phase 0 — Repository and live-site baseline

## Objective

Establish the real current state before changing it and distinguish verified facts from prior reports.

## Tasks

1. Inspect repository instructions, route structure, design primitives, claims registry, maturity data, evidence data, benchmark route, developer route, tests, and package dependencies.
2. Inspect the current branch and all uncommitted work.
3. Run the existing install, typecheck, lint, unit/integration tests, and safe production build using repository-defined commands.
4. Run the site locally in production-preview mode where possible.
5. Inspect the supplied preview and the local preview.
6. Capture baseline screenshots at:
   - 390 px
   - 430 px
   - 768 px
   - 1280 px
   - 1440 px
   - 1920 px
7. Review these P0 instruments in actual rendered form:
   - Cognitive Hypervisor
   - Causal Control Trace
   - Architecture Atlas
   - Evidence Lattice
   - Adversarial Trust Boundary
   - Execution Observatory
   - Change Gate State-Space
8. Verify all reported interactions rather than trusting the handoff:
   - hero phase selection and scroll synchronization;
   - Commit/Abort trace switching;
   - Architecture Atlas plane isolation;
   - Evidence Lattice field selection and persistent limitations;
   - trust-boundary attack-path switching;
   - Observatory scrubber and all four lenses;
   - Change Gate current-only/destination mode and transition inspector.
9. Compare the report and package assumptions against the actual code. Record discrepancies.

## Gate 0

Do not begin feature implementation until:

- the baseline build/test state is known;
- all current P0 routes have been inspected;
- unrelated dirty work is protected;
- baseline screenshots and console logs exist;
- any report-versus-code discrepancies are documented;
- destructive repository operations have been ruled out.

---

# 6. Phase 1 — P0.5 semantic and interaction hardening

This phase is mandatory because P1 depends on P0 semantics. Do not bypass it by building isolated new visuals.

## 6.1 Canonical phase and state vocabulary

Use one public narrative:

`Intent → Stage → Constrain → Validate → Decide → Emit`

Use one internal transaction model:

`Proposed → Staged → Constrained → Validated → AwaitingApproval? → Committed | Aborted → EvidenceEmitted`

Approval is optional and policy-conditioned.

Create a shared typed definition. Remove divergent phase names from separate components where they change meaning.

## 6.2 Typed, sourced relationship model

Every semantic edge in P0 or P1 must include:

- stable `id`;
- `from`;
- `to`;
- relation kind;
- maturity/status;
- rationale;
- source/evidence references;
- last-verified metadata.

Use one active direction convention: `from` actively relates to `to`.

Suitable relation kinds may include:

- `requires`
- `supports`
- `evidences`
- `blocks`
- `bounds`
- `binds_context`
- `strengthens`
- `extends_to`
- `supersedes`
- `trusts`

Do not hard-code semantic edges inside JSX, SVG path definitions, or route-specific arrays.

## 6.3 One immutable event stream per Observatory scenario

The following must be pure projections of one immutable event sequence and one scrubber time:

- State Diff
- Authority
- Validator Matrix
- Evidence Assembly

Evidence fields may unlock only after their supporting event occurs.

Separate at least these causal fixtures:

1. **Pre-effect capability denial**
   - authority fails at Constrain;
   - no authorized host effect occurs;
   - do not claim rollback unless state changed and was actually restored.

2. **Post-stage validation failure**
   - authority permits staged work;
   - validation fails;
   - snapshot-backed guest state is restored;
   - external-effect absence remains unproven unless separately established.

## 6.4 Current-only default

For Architecture Atlas, Change Gate, maturity topology, claim paths, simulator, and any other visual containing target architecture:

- default to current-only;
- reveal destination architecture only after explicit action;
- use dashed or patterned target treatment that survives grayscale;
- show a static “Target Architecture — not current” statement;
- remove hidden target content from focus order and accessibility tree.

## 6.5 Trust taxonomy

Normalize terminal interpretation throughout the site to:

- Enforced
- Observed
- Residual Trust
- Not Established

Map local mechanisms into those categories consistently.

## 6.6 Abort and external-effect language

Replace broad or absolute statements with scoped language equivalent to:

> For this isolated fixture, Abort restores snapshot-backed guest state before any committed effect. External effects require explicit compensation semantics and are not proven absent.

Use wording appropriate to the actual fixture; do not copy the sentence where it would be inaccurate.

## 6.7 Signature trust inspection

When a signature-related field is selected, show:

- signer identity;
- public key or key source;
- custody/trust boundary;
- verification result;
- exact fields covered;
- whether signing is optional, fixture-only, current, or target;
- what the signature does not prove.

Prefer “portable evidence record, optionally signed” wherever that is the current truth.

## 6.8 Architecture Atlas plane isolation

When a plane is isolated, preserve ghosted interface contracts to adjacent planes so filtering does not imply false independence.

## 6.9 Evidence Lattice limitations

`limitations[]` must remain pinned or one action away for every field selection and filter.

Each selected field should expose:

- exact JSON path;
- supporting event;
- source plane/trust boundary;
- maturity;
- interpretation;
- limitation.

## 6.10 Scroll/manual arbitration

A manual hero phase selection must not be immediately overwritten by scroll-derived state.

Implement one deterministic behavior:

- synchronize the scroll position to the selected phase; or
- enter an explicit accessible manual-inspection mode until scrolling resumes.

## 6.11 Causal Control Trace enhancement

Where useful and truthful, add a synchronized readout for:

- Known
- Authorized
- Reversible

This must be derived from the same state/event model, not decorative copy.

## 6.12 Figure provenance

Every technical figure must expose or make downloadable:

- figure ID;
- data classification;
- registry `asOf` or version;
- source/build commit;
- generated time;
- active filters/scenario;
- source references.

## Gate 1

P0.5 is `VERIFIED` only when:

- all P0 instruments use consistent phase, maturity, trust, Commit/Abort, rollback, compensation, and target-language semantics;
- Observatory lenses are event-causal;
- pre-effect denial and post-stage rollback are distinct;
- target architecture defaults to hidden/current-only;
- hidden target content is not focusable;
- signature trust limitations are visible;
- `limitations[]` remains persistent;
- scroll/manual arbitration is deterministic;
- typecheck, lint, existing tests, production build, mobile checks, keyboard checks, reduced-motion checks, and screenshots pass.

Do not begin declaring P1 production-ready while this gate remains unresolved.

---

# 7. Phase 2 — Canonical data, validation, and provenance layer

## Objective

Build one source of truth that all P0 and P1 instruments project from.

## Tasks

1. Inventory the current claims registry, maturity registry, evidence records, benchmark artifacts, integration fixtures, and route-specific duplicated content.
2. Extend the canonical model rather than creating a parallel visual-only registry.
3. Adapt the supplied `spec/p1-visual-data-contracts.ts` to the real repository.
4. Add runtime validation using the repository's existing validation system, preferably Zod if already present.
5. Add schemas for:
   - evidence references;
   - typed claim/capability relations;
   - figure provenance;
   - maturity nodes and prerequisites;
   - Observatory events;
   - benchmark manifests and publication eligibility;
   - developer simulator scenarios and steps.
6. Add referential-integrity checks:
   - every edge endpoint exists;
   - every evidence reference resolves;
   - every registry ID is valid;
   - no duplicate stable IDs;
   - no forbidden current/target mixing;
   - no cycles in graphs required to be acyclic;
   - no benchmark marked citable with missing required provenance;
   - no simulator step uses an undocumented interface.
7. Define safe UI states for:
   - malformed data;
   - missing evidence;
   - unavailable benchmark results;
   - incomparable benchmark runs;
   - missing fixture;
   - unsupported target scenario.
8. Add unit tests for valid and invalid records.

## Data ownership rule

Visual components render canonical records. They must not invent claims, statuses, evidence, benchmark values, guarantee language, or semantic edges in component code.

## Gate 2

The data layer is `VERIFIED` only when:

- schemas and validators pass strict type checking;
- malformed records fail safely and visibly;
- relationship and evidence integrity tests pass;
- the same canonical records drive P0 and P1 where concepts overlap;
- no second source of truth has been introduced;
- all fixture/live/target classifications are explicit.

---

# 8. Phase 3 — FIG-CLM-06 Claim Dependency and Provenance Graph

## Route and placement

Implement on `/evidence/claims`, above the existing canonical searchable claims dossier. Keep the dossier below as the exhaustive accessible source of truth.

## Evaluator question

> What supports this claim, what limits it, what blocks a stronger form, which evidence exists, and what remains target architecture?

## Required model

Use a deterministic layered graph, not a force-directed layout.

Recommended semantic columns:

1. Evidence sources
2. Implemented capability foundations
3. Public claim families
4. Blockers, scope boundaries, negative guarantees, and target dependencies

## Required interactions

- Select a claim or node.
- Show all relationships.
- Show only the support path.
- Show only blocker/boundary paths.
- Toggle current-only versus explicit destination architecture.
- Persist selection and lens in URL state.
- Restore state through browser back/forward navigation.
- Deep-link to the corresponding canonical dossier row.

## Inspector requirements

For the selected record show:

- title and stable ID;
- status/maturity;
- summary;
- supporting foundations;
- evidence artifacts and source references;
- blocking conditions;
- limitations;
- negative guarantee / “does not establish” statement;
- acceptance criteria for a stronger status;
- last verified date;
- figure provenance.

## Mobile behavior

Do not shrink the desktop graph until it becomes unreadable.

Transform mobile into an ordered selected-path trace:

`Evidence → Foundation → Claim → Blocker/Boundary`

Retain filters, inspector content, status, and textual fallback.

## Accessibility

- Every selectable node is keyboard-operable.
- Visible focus is unmistakable.
- Use accessible names and selected state.
- Update an `aria-live` inspector summary.
- Do not encode edge type or status by color alone.
- Provide a complete textual dependency list or table.

## Gate 3

FIG-CLM-06 is `VERIFIED` only when:

- every visible edge resolves to canonical relationship data;
- missing evidence is explicit;
- limitations never disappear;
- current-only is default;
- target nodes are excluded from hidden focus/reading order;
- URL state, back/forward, keyboard, mobile trace, reduced motion, print/static state, and malformed-data fallback pass;
- the canonical dossier remains complete and synchronized;
- no visual relationship upgrades a public claim by implication.

---

# 9. Phase 4 — FIG-MAT-07 Capability Maturity Topology

## Route and placement

Implement on `/maturity`, above the existing exhaustive capability table. Keep the table below.

## Evaluator question

> Which implemented foundations exist, what must converge, what currently blocks Stage 0, what does completion unlock, and what residual trust remains?

## Required topology regions

- Disclosed trust surface
- Implemented foundations/substrates
- In-integration capabilities
- Stage 0 gate
- Destination architecture/assurance

Represent the current WASM guest↔host scope boundary distinctly.

## Required views

- Current foundations
- Critical path
- Why blocked
- Full architecture / destination
- Trust surface

Default to current-only.

## Node inspector

For each selected capability show:

- current status;
- prerequisites;
- blockers;
- what it unlocks;
- acceptance criteria;
- supporting evidence;
- last verified date;
- residual trust;
- negative guarantee;
- current versus target classification.

## Prohibited representations

Do not use:

- percent complete;
- speculative dates;
- orbital diagrams;
- force-directed clouds;
- visual prominence as a maturity proxy;
- adjacency as evidence of completion.

## Mobile behavior

Reflow into ordered topological regions or a selected critical-path sequence. Preserve the ability to inspect prerequisites, blockers, evidence, and residual trust.

## Gate 4

FIG-MAT-07 is `VERIFIED` only when:

- all nodes and dependencies are canonical and sourced;
- Stage 0 blockers are explicit;
- target architecture is hidden by default and accurately labeled when shown;
- residual trust is visible rather than buried;
- the table and topology agree on every status;
- all desktop/mobile/accessibility/URL/reduced-motion/fallback tests pass;
- no completion percentage or visual implication overstates maturity.

---

# 10. Phase 5 — FIG-BEN-08 Benchmark Reproducibility Workbench

## Route and placement

Implement on `/evidence/benchmarks`. Preserve existing source and live-dashboard links where valid.

## Evaluator question

> Under exactly what environment and methodology was this result produced, is it comparable, where are the raw artifacts, and is it eligible for public citation?

## Production-data rule

Do not ship the normalized or representative values from the package as public Nexus-IQ performance data.

Only ingest a validated, versioned benchmark manifest backed by real artifacts. If no validated artifact exists for a metric, render an honest `Unavailable` state rather than creating a number.

## Required controls and views

As supported by real data:

- benchmark group;
- validated run/artifact;
- measurement mode;
- payload/state-size class;
- candidate and compatible baseline;
- summary/distribution view;
- raw samples;
- history/regression view;
- reproduction instructions.

## Required context beside every result

- repository and commit SHA;
- workflow run;
- raw artifact and SHA-256;
- runner provider/name;
- CPU, cores, memory, architecture;
- operating system and kernel;
- compiler/runtime/toolchain;
- build profile and feature flags;
- benchmark command;
- input shape;
- warm-up and measured iteration counts;
- setup exclusions;
- estimator;
- confidence interval/method;
- outlier policy;
- limitations and interpretation guardrail.

## Publication gate

Compute `Citable: Yes/No` from validated required evidence. Content authors must not manually set it.

A result is not citable when required provenance, samples, environment, methodology, or artifact integrity is missing.

## Comparison rules

- Mark incompatible runs `Incomparable`.
- Never render missing data as zero.
- Never compare primitive initialization latency with integrated request latency.
- Warn when environment, workload, compiler, feature flags, or input shape differ materially.
- Do not provide a regression verdict without comparability.

## Accessibility

Provide a complete data table and textual methodology/provenance equivalent for every chart.

## Gate 5

FIG-BEN-08 is `VERIFIED` only when:

- all displayed public values come from validated artifacts;
- fixture data is absent from production claims or unmistakably labeled in a non-public/demo mode;
- publication eligibility is derived, not asserted;
- unavailable and incomparable states are tested;
- charts, tables, raw samples, confidence information, provenance, hashes, and guardrails agree;
- keyboard, mobile, reduced motion, print/static, malformed-manifest, and no-data states pass;
- no result can be detached visually from its methodology and limitations.

---

# 11. Phase 6 — FIG-DEV-09 Developer Integration Simulator

## Route and placement

Implement on `/developers`, above the existing integration-path cards. Preserve the cards as concise navigation or reference summaries.

## Evaluator question

> Where is authority checked, how may memory inform reasoning, what actually executes, which outcome occurs, and what evidence is returned?

## Default mode

Default to the **current implemented API/runtime path**. Destination/composed Change Gate behavior must require explicit selection and be labeled `Target Architecture` or the exact canonical status.

## Interface-truth rule

Use only exact API, function, type, field, tool, and endpoint names verified in current source or canonical documentation.

Do not invent an elegant endpoint for the simulator.

## Recommended lanes

- Agent/Host
- Authority
- Nexus Runtime
- AEON-IQ Memory
- Evidence
- Validator and Effect lanes only when the selected scenario requires them

Memory flow must visibly terminate before authority. Memory cannot cross the authority boundary or become a capability.

## Required initial scenarios

Only include scenarios supported by current interfaces or clearly marked representative fixtures:

- valid current Nexus execution;
- expired capability denial;
- revoked capability denial;
- validator-driven Abort after staged mutation where supported as a composed/target fixture;
- AEON recall mode: advisory;
- AEON recall mode: attested where current and accurately scoped;
- AEON unavailable/absent/degraded memory;
- Proof Capsule verification;
- explicitly non-current composed Change Gate flow.

## Required interaction

- Select scenario.
- Inspect request envelope.
- Step or scrub through a deterministic trace.
- Inspect stage, authority state, memory mode, validator result, decision, state restoration, evidence assembly, and limitations.
- Reset deterministically.
- Persist scenario and step in URL state where appropriate.

Use the shared public phase vocabulary while preserving exact internal state.

## Returned evidence

Show only fields actually supported by the selected fixture/schema. Keep mandatory limitations visible.

Display:

- data classification: representative fixture or live/validated artifact;
- maturity of each step;
- trust interpretation of each step;
- terminal decision;
- what the result does not establish.

## Safety behavior

The public simulator must perform no credential use, network request, real runtime execution, repository mutation, or external side effect unless a separately authorized and explicitly labeled live mode is intentionally built.

## Mobile behavior

Transform the lane diagram into a vertical stepper with the same semantic order, inspector details, maturity, trust, and limitations.

## Gate 6

FIG-DEV-09 is `VERIFIED` only when:

- every interface name is source-verified;
- no scenario implies current functionality that is target-only;
- memory never visually or semantically expands authority;
- pre-effect denial and post-stage rollback remain distinct;
- terminal evidence and limitations match the selected trace;
- fixtures are deterministic and perform no side effect;
- desktop lanes and mobile stepper agree;
- keyboard, URL state, reset, back/forward, reduced motion, static/print, and missing-fixture fallbacks pass.

---

# 12. Phase 7 — Cross-route visual and semantic integration

## Technology boundaries

Use the existing repository stack. Prefer:

- React
- TypeScript
- TanStack Router
- Zustand only for genuinely shared state
- Tailwind/current styling system
- semantic SVG and DOM
- existing Recharts where suitable
- Radix/current accessible primitives
- Zod/current validation approach
- Playwright/current testing stack

Do not add Three.js, React Three Fiber, WebGPU, Rive, GSAP, a physics engine, or a graph-layout dependency for these four instruments unless a documented requirement cannot be met with the existing stack and the added dependency passes performance, accessibility, maintenance, and necessity review.

No dependency may be added merely for perceived prestige.

## Shared design language

Maintain:

- dark runtime surfaces;
- archive-paper evidence surfaces;
- restrained institutional blue;
- oxide green for Commit;
- controlled red for Abort/denial/limitations where appropriate;
- serif/monospace hierarchy;
- registration marks, fine grids, and technical line work used with restraint;
- maturity and trust communicated by text/symbol/pattern, not color alone.

Each route must have a distinct dominant composition. Do not paste the same framed graph pattern onto every page.

## Progressive disclosure

The first view should answer one clear evaluator question. Detailed evidence, limitations, and implementation references should be inspectable without forcing all density into the initial viewport.

## Cross-route consistency audit

Verify that all affected routes agree on:

- phase names;
- internal states;
- status vocabulary;
- trust taxonomy;
- current versus target;
- memory-authority boundary;
- Commit/Abort semantics;
- rollback versus compensation;
- Proof Capsule fields;
- signature limitations;
- benchmark provenance language;
- figure data classification.

## Gate 7

Cross-route integration is `VERIFIED` only when:

- all four P1 instruments look related but not duplicated;
- P0 and P1 terminology is consistent;
- canonical selections deep-link correctly;
- no route contradicts another;
- no new heavy dependency or continuous rendering loop has been introduced without proof of need;
- no public claim has been upgraded by copy, adjacency, animation, or visual emphasis.

---

# 13. Phase 8 — Full production verification and independent review

Implementation is not completion. Run the complete verification matrix after all integration work.

## Required commands

Run and record exact commands and outcomes for the repository's equivalents of:

- dependency install/lockfile verification;
- strict typecheck;
- lint;
- unit tests;
- component/integration tests;
- Playwright/browser tests;
- safe production build;
- production preview smoke test.

Do not report “pass” without preserving the exact command and result.

## Browser and viewport matrix

Test affected routes at:

- 390 × 844
- 430 × representative modern-mobile height
- 768 × representative tablet height
- 1280 × 800 or larger
- 1440 × 900
- 1920 × 1080

Use Chromium and, where the repository supports it, Firefox and WebKit.

## Functional verification

Test:

- every node and control;
- all filters and modes;
- URL deep links;
- reload restoration;
- browser back/forward;
- keyboard-only navigation;
- visible focus;
- screen-reader names and live summaries;
- target content removed from hidden focus order;
- reduced motion;
- forced-colors/high-contrast behavior where feasible;
- static/print state;
- malformed data;
- missing data;
- no-data and incomparable benchmark states;
- fixture failure;
- media/data failure fallback;
- no horizontal overflow;
- no console errors;
- no unhandled promise rejection;
- no continuous offscreen rendering;
- no interaction state desynchronization.

## Visual verification

Capture screenshots for every state that changes interpretation, including at minimum:

- Claim Graph: current support path, blocker path, target revealed, mobile trace.
- Maturity: current foundations, critical path, why blocked, trust surface, target revealed, mobile.
- Benchmarks: valid citable run if one exists, not-citable run, unavailable, incomparable, raw samples, mobile.
- Developer Simulator: valid execution, expired capability, revoked capability, validation Abort, degraded memory, current/target mode, mobile stepper.
- P0 regression states: Commit and Abort, Atlas filters, Evidence limitations, Security external effect, Observatory denial versus rollback, Change Gate compensation.

Review actual pixels at full size and thumbnail scale.

Reject any state with:

- clipped or overlapping labels;
- illegible graph density;
- misleading color or proximity;
- target/current ambiguity;
- insufficient contrast;
- mobile meaning loss;
- excessive empty framing;
- inconsistent line weights;
- generic dashboard-card appearance;
- animation that obscures causality;
- decorative data or fake technical detail.

## Accessibility gate

At minimum verify:

- WCAG 2.2 AA-oriented keyboard and contrast behavior;
- visible focus;
- no keyboard trap;
- sensible reading order;
- meaningful headings and landmark structure;
- accessible SVG titles/descriptions where SVG is used;
- textual/table equivalents;
- `aria-live` summaries do not become noisy;
- status and relation meaning does not rely on color alone;
- reduced-motion users receive complete meaning.

## Performance gate

Verify:

- no continuous `requestAnimationFrame` loop while offscreen or idle;
- route-level code splitting where appropriate;
- no unnecessary large asset or dependency;
- stable layout with no material cumulative shift;
- responsive interactions without main-thread stalls;
- no regression against the current production baseline.

Target Lighthouse scores on affected public routes:

- Performance: at least 90 where the controlled test environment permits.
- Accessibility: at least 95.
- Best Practices: at least 95.
- SEO: at least 95.

If environment variance prevents a reliable absolute score, provide baseline-versus-final comparisons and explain the constraint. Do not hide a regression behind variance.

## Independent review

A reviewer other than the primary implementer must inspect:

- semantic correctness;
- claim and maturity risk;
- actual desktop and mobile pixels;
- accessibility behavior;
- benchmark truthfulness;
- current-versus-target handling;
- consistency with P0 doctrine.

Resolve all critical and major findings before completion.

## Gate 8

The overall assignment is `VERIFIED` only when:

- Gates 0 through 7 are verified;
- all required commands pass;
- all required route/state screenshots exist;
- no critical or major review finding remains;
- no known horizontal overflow, console error, keyboard failure, inaccessible hidden target, claim inconsistency, fixture leak, benchmark provenance gap, or semantic regression remains;
- any remaining minor limitation is explicitly documented and does not violate the acceptance criteria;
- the independent reviewer approves the integrated implementation;
- no public claim was upgraded without evidence.

---

# 14. Definition of complete

You must not use “complete,” “finished,” “production-ready,” “100%,” or equivalent language merely because code was written or a happy-path screenshot exists.

The assignment may be reported as complete only when:

1. Every required phase is marked `VERIFIED`.
2. Every acceptance gate has objective evidence.
3. P0 has not regressed.
4. All four P1 instruments are integrated into their real routes.
5. Canonical source data, validation, and provenance are in place.
6. Real benchmark data is either properly validated or honestly unavailable; fixture values are not shipped as claims.
7. Current and target architecture cannot be confused.
8. Keyboard, screen-reader, reduced-motion, mobile, desktop, failure, and malformed-data states are verified.
9. Typecheck, lint, tests, production build, and browser checks pass.
10. Independent visual and semantic review has passed.
11. No critical or major known issue remains.
12. The final report lists all residual limitations truthfully.

Absolute theoretical perfection cannot be proven. Therefore, the correct completion statement is:

> “The implementation meets all defined acceptance criteria, with the following verified evidence and disclosed residual limitations.”

If any gate cannot be verified, report the work as partial, name the exact blocker, and do not claim completion.

---

# 15. Required final deliverables

Return all of the following:

1. **Executive verdict**
   - Complete against defined gates, partial, or blocked.

2. **Repository state**
   - branch;
   - starting and ending HEAD;
   - dirty state;
   - confirmation that unrelated work was preserved;
   - whether any commit/push/PR/deploy occurred.

3. **Files changed**
   - exact path;
   - purpose;
   - whether canonical data, component, route, test, style, or documentation.

4. **P0.5 hardening matrix**
   - every required hardening item;
   - status;
   - implementation evidence;
   - test evidence.

5. **P1 route-by-route report**
   - Claim Dependency Graph;
   - Maturity Topology;
   - Benchmark Workbench;
   - Developer Integration Simulator;
   - current versus target behavior;
   - mobile transformation;
   - accessibility behavior;
   - provenance behavior.

6. **Canonical data/schema report**
   - new or changed types/schemas;
   - registry changes;
   - relationship integrity;
   - benchmark manifest validation;
   - fixture validation;
   - safe-failure behavior.

7. **Verification table**
   - exact command;
   - result;
   - relevant output or artifact;
   - any warning.

8. **Screenshot evidence**
   - desktop and mobile screenshots for all interpretation-changing states;
   - before/after comparisons where useful.

9. **Accessibility report**
   - keyboard;
   - focus;
   - screen reader;
   - reduced motion;
   - color independence;
   - table/text equivalents.

10. **Performance report**
    - bundle/dependency changes;
    - rendering behavior;
    - Lighthouse or baseline comparison;
    - offscreen/idle behavior.

11. **Independent review findings**
    - reviewer role;
    - findings;
    - resolutions;
    - unresolved minors.

12. **Claim and maturity integrity confirmation**
    - confirm that no public claim, benchmark, integration, deployment, signature guarantee, or maturity status was fabricated or upgraded by implication.

13. **Residual limitations and next actions**
    - exact remaining limitations;
    - why they do not violate the acceptance gate, or why they block completion.

---

# 16. Final instruction

Begin with Phase 0, then continue through every phase without returning only another plan. Use the report and package intelligently, but verify all assumptions against the repository. Build from canonical data, not screenshots. Preserve truthfulness and accessibility as product features. Do not claim completion until every defined gate has passed and the evidence is included in the final report.
