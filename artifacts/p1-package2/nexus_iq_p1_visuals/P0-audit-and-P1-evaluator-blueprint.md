# Nexus-IQ P0 Review and P1 Evaluator-Visual Blueprint

**Verdict:** The P0 visual direction is correct and materially stronger than the earlier cinematic-world approach. Proceed to P1, but first close a small hardening gate so the growing visual layer cannot drift from canonical claims, maturity, and evidence semantics.

## Audit basis and limitation

The supplied Grok preview redirects external tooling to an authenticated preview gateway, so this review could not inspect the current rendered pixels directly. It therefore combines:

1. the detailed P0 implementation and verification reports supplied by the project owner;
2. the public `nexus-site` route and content baseline on `fix/cinematic-hero-scene`;
3. the public claims registry and maturity vocabulary;
4. the current public benchmark methodology and developer-route scope.

A final authenticated screenshot and keyboard pass remains required before merge. This does not block architecture or P1 instrument design.

---

## 1. P0 assessment

### Overall

The core doctrine is now coherent:

- the product is the spectacle;
- autonomous intent cannot directly become irreversible effect;
- memory may inform reasoning but cannot silently widen authority;
- Commit and Abort are equal first-class outcomes;
- a Proof Capsule is a record lattice, not a consumer-object capsule;
- security resolves into explicit enforcement, observation, residual trust, or absence of guarantee;
- target architecture remains visibly distinct from current foundations.

The reported verification—clean console, mobile overflow checks, typecheck, master-clock synchronization, route placement, and Commit/Abort behavior—is a strong P0 baseline.

### Instrument-level findings

| Instrument | Assessment | Adjustment before/with P1 |
|---|---|---|
| Cognitive Hypervisor | Correct signature concept. Product-native and ownable. | Keep memory→authority hard bar permanently visible. Do not use “sentient” as a product capability claim. |
| Causal Control Trace | Correct contrast between direct effect and governed transaction. | Add the three-state readout at each time point: **known / authorized / reversible**. |
| Architecture Atlas | Plane isolation is useful and the memory-authority doctrine is correct. | Isolated planes should retain ghosted interface contracts; fully hiding dependencies can imply false independence. |
| Evidence Lattice | Correctly treats the capsule as a field topology. | Keep `limitations[]` pinned or persistently reachable for every selection. Selecting signature must expose signer identity/key-custody limits, not just integrity; optional signing must not be presented as universal. |
| Adversarial Trust Boundary | Correctly avoids shield-badge security language. | Standardize terminal vocabulary across the site; see §2.3. |
| Execution Observatory | Strongest P0 upgrade because the scrubber is the master clock. | All lens state must be derived from one event fixture; no decorative digests, validator results, or capsule fields may animate independently. |
| Change Gate State-Space | Correct non-linear model, especially Commit/Abort evidence and separate compensation. | Approval must be policy-conditioned, not universal. Compensation should originate from a committed external-effect path, not appear as equivalent to snapshot restoration. |

---

## 2. Hardening gate before P1 merge

### 2.1 Canonical relationship data — mandatory

The P1 graphs need relationships that the current claims registry does not encode explicitly. Do **not** hard-code these relationships inside SVG components.

Add a typed top-level relationship collection:

```ts
interface ClaimRelation {
  id: string;
  from: string;
  to: string;
  kind:
    | "requires"
    | "supports"
    | "binds_context"
    | "blocks"
    | "bounds"
    | "strengthens"
    | "extends_to"
    | "supersedes"
    | "evidences";
  maturity: PublicStatus;
  rationale: string;
  sourceRefs: string[];
}
```

Every edge must carry a relationship kind, maturity, rationale, and source. Use one direction rule: `from` actively relates to `to` for every kind. A line on screen must never create a claim by implication.

### 2.2 Figure provenance — mandatory

Every technical instrument should expose:

- figure ID;
- data classification: live / fixture / design study;
- claims-registry version and `asOf` date;
- source commit or build SHA;
- generated-at time;
- selected filters;
- optional downloadable JSON representation.

### 2.3 Standardize the trust taxonomy — mandatory

Use four global terminal classifications:

1. **Enforced** — a policy or runtime boundary actively allowed/denied the action.
2. **Observed** — the system recorded an event, but recording does not establish enforcement or correctness.
3. **Residual Trust** — the conclusion still depends on a named host, key, signer, service, clock, or operator boundary.
4. **Not Established** — the evidence does not support the stronger guarantee.

“Constrained,” “degraded,” “advisory,” “denied,” and “restored” describe mechanism or mode; they should map into one of the four terminal interpretation classes rather than becoming competing top-level taxonomies.

### 2.4 Current-only default — mandatory

Every instrument that contains destination architecture must:

- default to current-only;
- require an explicit user action to reveal targets;
- use dashed/patterned edges and visible `Target Architecture` labels;
- preserve a static textual statement that the target is not current;
- keep target state out of the initial screen-reader reading order when hidden.

### 2.5 Event-causal DemoPlayer — mandatory

Define one immutable event fixture per scenario. State Diff, Authority, Validator Matrix, and Evidence Assembly must be pure projections of that event sequence and the scrubber time.

Recommended event envelope:

```ts
interface ObservatoryEvent {
  id: string;
  sequence: number;
  stage: "intent" | "stage" | "constrain" | "validate" | "decide" | "commit" | "abort" | "emit";
  type: string;
  observedAtMs: number;
  maturity: PublicStatus;
  payloadRef: string;
  evidenceFieldsUnlocked: string[];
}
```

### 2.6 Separate denial from rollback — mandatory

Do not use one Abort fixture to represent both a capability denial before effect and a rollback after staged mutation. They are different causal paths:

- **Pre-effect denial:** authority fails at Constrain; no authorized host effect occurs; the staged snapshot may be discarded, and `rollback.occurred` should not be asserted unless state actually changed and was restored.
- **Post-stage validation failure:** authority was sufficient for staged work; validation fails; snapshot-backed guest state is restored; external effects remain outside that guarantee.

This distinction must drive State Diff, validator results, evidence fields, and explanatory copy.

### 2.7 Scroll/manual input arbitration — mandatory

The Cognitive Hypervisor is both scroll-driven and manually inspectable. Define deterministic arbitration so a phase-chip click is not immediately overwritten by the next scroll event. Either move the scroll position to the selected phase or enter an explicit manual-inspection mode until the user resumes scrolling. Expose the active mode accessibly.

### 2.8 Accessibility and mobile equivalent — mandatory

“No horizontal overflow” is necessary but insufficient. Each graph also needs:

- keyboard-operable controls;
- visible focus;
- `aria-pressed`/`aria-selected` state;
- an `aria-live` inspector summary;
- no meaning by color alone;
- a textual dependency list/table equivalent;
- a mobile layout that reflows into ordered groups rather than shrinking a desktop graph to illegibility;
- complete reduced-motion behavior.

---

## 3. P1 instruments

## 3.1 FIG-CLM-06 — Claim Dependency Graph

**Route:** `/evidence/claims`, above the existing searchable dossier.

**Evaluator question:** What supports this public claim, what limits it, what blocks a stronger form, and where is the evidence?

### Visual model

- claim/capability nodes;
- supporting foundations;
- evidence artifacts;
- blockers;
- limitations;
- target extensions;
- superseding claims where applicable.

### Interaction

- select a claim;
- switch among all, support path, blocker path, and current-only;
- search and status filters synchronize with the existing dossier;
- selected claim and path persist in URL query state;
- inspector lists evidence, limitations, blockers, last verified date, and source commit.

### Non-negotiable behavior

- unsupported claims cannot visually appear “nearly supported” through proximity;
- limitations remain visible in the inspector even when the graph is filtered;
- the graph never replaces the registry list;
- a missing evidence link is rendered explicitly, not omitted silently.

---

## 3.2 FIG-MAT-07 — Capability Maturity Topology

**Route:** `/maturity`, above the existing exhaustive table.

**Evaluator question:** Which usable foundations feed which integrations, and what exact dependency prevents a stronger guarantee?

### Visual model

Four topological regions:

1. Implemented Foundations;
2. In Integration;
3. Stage 0 blocking gate;
4. Destination Architecture.

A separate scope boundary shows the current WASM guest↔host enforcement perimeter.

### Interaction

- current-only / destination architecture;
- critical path / all capabilities;
- select capability to inspect prerequisites, evidence, limitations, and unmet blockers;
- optional “why blocked?” trace from a target claim back to the first unsatisfied prerequisite.

### Non-negotiable behavior

- no global “percent complete” number;
- foundation adjacency never upgrades product maturity;
- target nodes are not focusable in current-only mode;
- the table remains below as canonical row detail.

---

## 3.3 FIG-BEN-08 — Benchmark Reproducibility Workbench

**Route:** `/evidence/benchmarks`, replacing the current link-only lead surface while retaining links to the live dashboard and source.

**Evaluator question:** What was measured, under what environment, with what distribution and uncertainty, and can the artifact be verified?

### Production data contract

CI should publish a versioned `benchmark-manifest.json`:

```ts
interface BenchmarkManifest {
  schemaVersion: string;
  generatedAt: string;
  commitSha: string;
  runner: {
    os: string;
    arch: string;
    cpu?: string;
    memoryBytes?: number;
    provider: string;
  };
  runtime: { wasmtime: string; compiler: string };
  measurements: BenchmarkMeasurement[];
  artifacts: {
    runnerReport: ArtifactRef;
    rawCriterionLog: ArtifactRef;
    signatureBundle?: ArtifactRef;
  };
}

interface BenchmarkMeasurement {
  id: string;
  group: string;
  category: "benchmarked-primitive" | "integrated-live" | "manual";
  mode: "wall-clock" | "cpu-simulation" | "heap-memory" | "bare-metal-walltime";
  unit: string;
  samples: number[];
  warmup: string;
  measurementTime: string;
  payloadClass: string;
  baselineCommit?: string;
  threshold?: { kind: string; value: number };
}
```

### Interaction

- benchmark group and size selector;
- wall-clock / CPU simulation / heap memory modes;
- distribution and interval, not only mean;
- baseline commit comparison;
- environment fingerprint;
- comparability checks;
- provenance chain and artifact download/verification;
- retired-claim/caution drawer.

### Non-negotiable behavior

- no hard-coded current benchmark numbers in the website bundle;
- never compare primitive initialization with full request latency;
- distinguish GitHub-hosted wall-clock from deterministic CPU simulation and optional bare-metal walltime;
- absence of a signature bundle must be shown as “best-effort signature absent,” not as artifact failure;
- competitor data remains separate and individually cited.

---

## 3.4 FIG-DEV-09 — Developer Integration Simulator

**Route:** `/developers`, above the current repository/path cards.

**Evaluator question:** What can I integrate today, where is authority checked, what evidence returns, and which steps remain destination architecture?

### Visual model

Five swimlanes:

- Agent / host;
- Capability authority / policy;
- Nexus runtime;
- AEON-IQ memory;
- Evidence.

### Scenarios

1. Nexus pure-compute execution;
2. capability-gated WASI execution;
3. AEON-IQ recall with advisory or attested evidence mode;
4. composed Nexus-IQ Change Gate—current foundations vs destination architecture.

### Interaction

- choose product path;
- current API / destination architecture;
- valid / expired / revoked capability;
- advisory / attested / absent memory;
- validator pass / fail for destination Change Gate trace;
- synchronize representative request, sequence, returned artifact, and “not established” panel.

### Non-negotiable behavior

- default to current API;
- representative fixtures are labeled and cannot look like a live request;
- no fake endpoint names;
- use actual exported API/function names where documented;
- memory cannot cross the authority lane;
- destination steps remain disabled/ghosted until explicitly selected.

---

## 4. Implementation architecture

The existing stack already contains React, TypeScript, TanStack Router, Zustand, Recharts, Radix primitives, and Playwright. P1 does not require Three.js, WebGPU, Rive, GSAP, or a graph library.

Recommended implementation:

- hand-authored semantic SVG for the small dependency topologies;
- DOM inspector and textual fallback outside the SVG;
- TanStack Router search params for shareable selected state;
- existing Zustand only when state must synchronize across components;
- Recharts or custom SVG for benchmark distributions;
- Zod validation for claims relations and benchmark manifests;
- lazy route loading; no continuous animation loop;
- `IntersectionObserver` only for deferred initialization, not visual correctness.

Consider ELK/Dagre only if the canonical graph grows beyond roughly 30 nodes or user-defined layouts become necessary. A graph engine at the current size would add bundle weight and layout instability without improving explanation.

---

## 5. Proposed component/files

```text
src/components/evidence/claim-dependency-graph.tsx
src/components/maturity/capability-maturity-topology.tsx
src/components/evidence/benchmark-workbench.tsx
src/components/developers/integration-simulator.tsx
src/content/claim-relations.json
src/content/benchmark-manifest.schema.ts
src/content/integration-scenarios.ts
src/lib/visual-provenance.ts
src/lib/evaluator-url-state.ts
scripts/validate-visual-relations.mjs
```

Keep route files focused on composition and metadata. Keep semantic data outside component JSX.

---

## 6. Acceptance gates

### Semantic correctness

- Every node resolves to a canonical ID.
- Every edge resolves to a typed relationship with source evidence.
- Hidden destination state is not focusable or announced.
- Limitations remain available under every filter.
- No fixture is labeled live.

### Functional

- keyboard-only operation;
- visible focus;
- stable URL deep links;
- browser back/forward preserves selection;
- mobile ordered fallback;
- print/static poster state;
- no console errors;
- no horizontal overflow;
- no offscreen animation loop.

### Visual

- understandable focal structure at thumbnail scale;
- readable inspector at 390 and 430 px;
- no endless nested cards;
- same maturity symbols, line patterns, and outcome vocabulary across all routes;
- current/target distinction survives grayscale and color-vision-deficiency simulation.

### Performance

- no new initial-homepage dependency for P1 route-only instruments;
- route JS increase target: under ~35 KB gzip per route;
- interaction response under 50 ms on a mid-range desktop;
- graph SVG DOM target below ~150 elements per instrument;
- benchmark data loaded after route shell and validated before rendering.

### Test matrix

- widths: 390, 430, 768, 1280, 1440, 1920;
- keyboard and screen-reader smoke;
- reduced motion;
- destination hidden/default state;
- malformed registry relation rejected;
- malformed benchmark manifest rejected with methodology-safe fallback;
- screenshot regression for every control state that materially changes interpretation.

---

## 7. Recommended sequence

1. Add claim-relation and provenance schemas.
2. Standardize the trust taxonomy in P0 instruments.
3. Confirm DemoPlayer event-causal projections.
4. Build Claim Dependency Graph and Maturity Topology together from the same canonical relation data.
5. Add Benchmark Manifest ingestion, then the Workbench.
6. Add Integration Scenario fixtures, then the Developer Simulator.
7. Run cross-route visual-semantic consistency review.
8. Run authenticated browser and screenshot QA before commit/PR.

## Final decision

P0 is ready to become the foundation for P1. The main risk is no longer visual quality; it is **semantic divergence**—multiple sophisticated diagrams encoding slightly different versions of the product. Canonical relationship data, provenance, shared trust vocabulary, and current-only defaults eliminate that risk.
