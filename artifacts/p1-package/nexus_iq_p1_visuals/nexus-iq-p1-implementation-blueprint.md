# Nexus-IQ P1 Technical Visual Instruments

**Purpose:** convert four evaluator-facing pages from static information surfaces into deterministic, academically defensible product instruments without expanding public claims.

**Prepared from:** the current public `nexus-site` route structure, claims registry, maturity vocabulary, package stack, and checked-in website screenshots available on 2026-07-29. The authenticated Grok preview itself could not be rendered outside its preview gateway, so this audit treats public source and repository screenshots as authoritative for implementation review.

---

## 1. Current-site review

### What the site now does well

1. **It has a coherent institutional visual system.** The dark runtime surfaces, archive-paper evidence surfaces, serif/monospace hierarchy, sparse color, grids, and corner-registration details now feel product-specific rather than like a SaaS template.
2. **It preserves claim discipline.** Stage 0, current foundations, in-integration work, targets, and limitations are visibly distinguished. The site does not need more hype; it needs more inspectable relationships.
3. **The evidence surfaces are stronger than ordinary marketing pages.** The Proof Capsule Explorer and claims registry already teach visitors to inspect records, limitations, and maturity instead of accepting a headline.
4. **The homepage and deeper routes now share a recognizable forensic-instrument language.** This is the correct basis for the next phase.

### What remains under-resolved

The `/maturity` route is visually credible but structurally flat. Its table answers **what status a capability has**, but not:

- what it depends on;
- what blocks a stronger claim;
- which nodes are on the critical path;
- which evidence could change its state;
- when that evidence was last verified;
- what completing a node actually unlocks;
- which trust assumptions remain after completion.

The same missing relationships appear elsewhere:

- `/evidence/claims` has rich rows but no provenance/dependency graph;
- `/evidence/benchmarks` protects against context-free numbers but does not yet provide an on-site reproducibility workbench;
- `/developers` presents integration paths but does not let an engineer perturb a representative request and inspect the resulting boundary trace.

### Correct design response

Keep the current searchable tables, cards, and prose as the canonical accessible fallback. Add a deterministic visual instrument above each one. Do not replace source-of-truth content with a canvas-only experience.

---

## 2. Shared P1 visual doctrine

### Governing principle

**Relationships are the visual system.** The site should look advanced because it exposes real dependency, authority, measurement, and evidence mechanics—not because it surrounds technical copy with science-fiction imagery.

### Common visual grammar

| Meaning | Treatment |
|---|---|
| Implemented foundation | Oxide-green solid node |
| In integration | Signal/amber node and explicit convergence edge |
| Target architecture | Institutional-blue dashed outline |
| Known limitation / residual trust | Controlled-red boundary or constraint edge |
| Supporting relationship | Solid institutional-blue edge |
| Blocking relationship | Amber edge with arrow and named condition |
| Constraining interpretation | Red dashed edge |
| Evidence source | Dark optical record with source type and provenance |

### Academic/technical rules

- Use fixed semantic columns or layers; do not use a force-directed graph whose proximity can imply unsupported causality.
- Type every edge: `supports`, `requires`, `blocks`, `constrains`, `targets`, or `trusts`.
- Never represent maturity as a single percentage.
- Never promote a benchmark without environment, method, uncertainty, raw artifact, and provenance.
- Never make a browser-local fixture look like a live production execution.
- Keep limitations adjacent to the claim or result they constrain.
- Preserve text/table fallback and keyboard operation.

---

## 3. P1.1 — Claim Dependency & Provenance Graph

### Job to be done

Let an evaluator select any public statement and trace it backward to:

1. evidence sources;
2. implemented foundations;
3. integration prerequisites;
4. blockers;
5. negative guarantees;
6. target dependencies.

### Recommended route placement

`/evidence/claims`, immediately after the page introduction and before the existing searchable claim registry.

### Desktop interaction

- Default to a single high-value claim family rather than rendering everything at full emphasis.
- Filters: **Controlled change**, **Inspectable execution**, **Recoverable failure**, **All claims**.
- `Current only` mode removes targets and in-integration paths without rewriting the claim.
- Selecting a node updates a side inspector with:
  - current status;
  - required foundations;
  - blocking condition;
  - negative guarantee;
  - evaluator action;
  - evidence links and last-verified time.
- The existing registry remains directly below the graph and scrolls to the selected row.

### Mobile interaction

Do not force the user to pan a desktop DAG. Convert the selected claim to an ordered trace:

`Evidence → Foundation → Integration → Claim → Blocker/Limitation`

Use one card per step with the same typed relationship labels.

### Canonical data additions

Extend, or derive alongside, `claims-registry.json` with:

- stable IDs;
- `requires[]`;
- `blockedBy[]`;
- `constrainedBy[]`;
- `targets[]`;
- `evidenceRefIds[]`;
- `negativeGuarantees[]`;
- `acceptanceCriteria[]`;
- `lastVerifiedAt`.

### Acceptance criteria

- Every edge resolves to IDs in canonical data.
- No graph-specific prose contradicts the registry.
- Selecting a claim reveals all limitations that constrain it.
- Keyboard users can traverse and activate nodes.
- Screen readers receive an ordered textual trace.
- Current-only mode never makes a target claim appear current.
- No force layout or draggable node position is used.

### Suggested implementation files

- `src/components/evidence/claim-dependency-graph.tsx`
- `src/components/evidence/claim-trace-mobile.tsx`
- `src/lib/claims/build-claim-graph.ts`
- `src/content/claims-registry.json`

---

## 4. P1.2 — Capability Maturity Topology

### Job to be done

Replace the false mental model of linear progress with a dependency topology:

1. disclosed trust surface;
2. implemented substrates;
3. Stage 0 integration plane;
4. assurance destination.

### Recommended route placement

`/maturity`, above the current capability table. The table remains the canonical row-by-row registry.

### Primary modes

| Mode | Purpose |
|---|---|
| Critical path | Emphasize only dependencies required to close Stage 0 |
| Current foundations | Show what exists now without implying the composed product is complete |
| Full architecture | Show current, integration, target, limitation, and trust nodes together |
| Trust surface | Emphasize host, operator, key custody, runtime integrity, and scope boundaries |

### Node inspector

Every node exposes:

- current inputs;
- required convergence;
- what completion unlocks;
- acceptance criteria;
- evidence required for a status upgrade;
- last verification source/date;
- residual trust that survives completion.

### Status-change rule

A status change must be represented as an **evidence event**, not a manual color edit. For example:

`IN_DEVELOPMENT → CURRENT`

requires all acceptance criteria, linked immutable evidence, and an updated verification timestamp.

### Acceptance criteria

- No completion percentage is displayed.
- Stage 0 is a visible blocking plane, not a badge floating beside unrelated rows.
- Current foundations remain visually below end-to-end guarantees.
- Trust assumptions remain visible in full-architecture and trust modes.
- Selecting a node can deep-link to its canonical table row.
- Removing JavaScript still leaves the complete maturity table readable.

### Suggested implementation files

- `src/components/maturity/maturity-topology.tsx`
- `src/components/maturity/maturity-node-inspector.tsx`
- `src/lib/maturity/build-topology.ts`
- `src/routes/maturity.tsx`

---

## 5. P1.3 — Benchmark Reproducibility Workbench

### Job to be done

Turn benchmark claims into inspectable measurement records rather than headline numbers.

### Recommended route placement

`/evidence/benchmarks`, after the methodology introduction and before external dashboard/source links.

### Required views

- Distribution view for microbenchmarks.
- Scaling curve for state-size or payload-size dependent operations.
- Baseline comparison only when runner, workload, and methodology are comparable.
- Confidence interval/band.
- Raw-sample toggle.
- Environment fingerprint.
- Workload definition.
- Artifact provenance.
- `Citable: yes/no` gate with explicit missing fields.

### Publication gate

A result is not citable unless it contains:

- immutable artifact ID;
- commit SHA;
- CPU/runner/OS/compiler/build profile;
- workload command and input shape;
- sample count and raw samples;
- estimator and uncertainty method;
- outlier policy;
- workflow run;
- raw artifact link and SHA-256;
- schema version;
- interpretation guardrail.

The UI derives this gate from validated data. It must never let an author manually switch a result to “citable.”

### Truthfulness behavior

- Fixture data must carry a persistent banner: **Representative fixture — not a public performance claim**.
- A comparison verdict remains unavailable when environment parity or raw evidence is absent.
- Microbenchmarks must be labeled as component measurements, not end-to-end agent performance.
- State-size-sensitive operations must never collapse to one context-free number.

### Suggested implementation files

- `src/components/evidence/benchmark-workbench.tsx`
- `src/components/evidence/benchmark-chart.tsx`
- `src/components/evidence/reproducibility-record.tsx`
- `src/lib/benchmarks/benchmark-artifact.schema.ts`
- `src/lib/benchmarks/derive-publication-gate.ts`

---

## 6. P1.4 — Developer Integration Simulator

### Job to be done

Teach the integration contract by letting an engineer perturb a representative request and inspect:

- request envelope;
- capability evaluation;
- state transition;
- validator outcome;
- Commit or Abort decision;
- returned evidence;
- mandatory limitations.

### Recommended route placement

`/developers`, after the integration-path introduction and before repository links.

### Initial scenario set

| Scenario | Expected teaching outcome |
|---|---|
| Valid Commit | Shows the complete six-stage path and evidence assembly |
| Capability Denied | Demonstrates fail-closed authority before consequential host effect |
| Validator Abort | Demonstrates Abort as a valid successful control outcome |
| Degraded Memory | Demonstrates that memory context may degrade without widening execution authority |

### Required labels

- `LOCAL FIXTURE — NO LIVE RUNTIME CLAIM` when using browser fixtures.
- Current substrate vs composed/integration path must be visually distinct.
- The simulator must not imply that Nexus currently intercepts a model’s tool choice.
- Every receipt contains non-empty `limitations[]`.

### Interaction model

- Scenario selector.
- Copyable request JSON.
- Step-through execution rail:
  `Propose → Stage → Constrain → Validate → Decide → Emit`.
- Synchronized receipt fields.
- Perturbations for token expiry, validator failure, memory degradation, and external-effect disclosure.
- Source/fixture links beside the result.

### Suggested implementation files

- `src/components/developers/integration-simulator.tsx`
- `src/components/developers/execution-trace.tsx`
- `src/content/integration-scenarios.ts`
- `src/lib/integration/validate-scenario.ts`

---

## 7. Implementation architecture

### Use the existing stack

No heavy visualization framework is required for P1.

- **React + semantic SVG/DOM** for the graph and topology.
- **Existing Recharts or bespoke SVG** for benchmark plots.
- **Local React state** for most interaction.
- **Zustand** only if selected records need to persist across routes.
- **Zod** for benchmark and simulator artifact validation.
- **TanStack Table** for the canonical fallback tables.
- **Playwright** for interaction, screenshot, overflow, and accessibility smoke tests.

Do not add Three.js, WebGPU, physics, or PBR assets to these four instruments. Their value comes from causal and evidentiary precision, not spatial spectacle.

### Data flow

```text
Canonical registry / artifact / fixture
             ↓
Schema validation and graph derivation
             ↓
Typed view model
             ↓
SVG/DOM instrument + textual fallback
             ↓
Deep link to canonical source record
```

### Non-negotiable separation

- Canonical data owns status and claim wording.
- Derivation code owns edges and view models.
- Components own presentation and interaction.
- No component may silently upgrade maturity or invent benchmark evidence.

---

## 8. Performance and accessibility budget

### Performance

- No route should require a 3D engine for P1.
- Initial graph/topology payload target: under 100 KB compressed, excluding canonical data already loaded.
- No continuous animation loop.
- Edge motion, when used, stops under reduced motion and when offscreen.
- Benchmark plots render from local validated data; no runtime scraping.
- Avoid layout thrash by using a fixed viewBox and deterministic node positions.

### Accessibility

- Status uses symbol, text, and color.
- Every interactive node is keyboard focusable and has an accessible name.
- Inspectors use polite live regions.
- SVG has `<title>` and `<desc>`.
- Mobile supplies an ordered trace rather than mandatory pan/zoom.
- Tables and source links remain available without the visual layer.
- Reduced-motion mode removes flowing edges and pulsing state.

---

## 9. Verification matrix

| Area | Required checks |
|---|---|
| Claim graph | Typed edges, every ID resolves, limitations complete, keyboard path, registry deep-link |
| Maturity topology | Critical path correct, Stage 0 visible, no fake percent, trust surface retained |
| Benchmark workbench | Schema validation, publication gate, uncertainty, raw-data link/hash, fixture labeling |
| Developer simulator | Six-stage order, Commit/Abort parity, non-empty limitations, no live-runtime implication |
| Responsive | 1280/1440/1920 and 390/430 widths, no body overflow |
| Accessibility | Keyboard, visible focus, semantics, live inspector, reduced motion |
| Reliability | No console errors, deterministic screenshots, no external network dependency |
| Claims | Current/integration/target/limitation labels remain canonical |

---

## 10. Recommended implementation order

1. **Maturity topology first.** It addresses the current route the user asked to review and establishes the shared node/edge vocabulary.
2. **Claim dependency graph second.** Reuse the topology primitives and connect them to the existing searchable registry.
3. **Benchmark workbench third.** Implement the artifact schema and publication gate before connecting real results.
4. **Developer simulator fourth.** Reuse canonical fixture schemas and expose source links only after scenario validation.
5. Add visual-regression screenshots and accessible text fallbacks before treating P1 as complete.

---

## 11. Delivered prototype package

- `nexus-iq-p1-visual-lab.html` — standalone interactive concept lab.
- `exports/01-claim-dependency-graph.png`
- `exports/02-maturity-topology.png`
- `exports/03-benchmark-workbench.png`
- `exports/04-developer-integration-simulator.png`
- `spec/p1-visual-data-contracts.ts` — implementation-ready canonical data contracts and validation helpers.

The benchmark and simulator use explicitly representative fixtures. They are design/interaction specimens, not public product-performance or live-runtime evidence.
