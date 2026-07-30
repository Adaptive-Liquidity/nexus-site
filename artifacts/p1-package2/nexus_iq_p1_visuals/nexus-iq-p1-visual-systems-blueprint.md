# Nexus-IQ P1 Visual Systems Blueprint

**Verdict:** The site’s current visual system is now credible, disciplined, and recognizably Nexus-IQ; P1 should preserve that language while replacing four structurally flat routes with relationship-first inspection instruments.

## 1. Audit of the current implementation

### What materially improved

- The visual language is no longer generic SaaS. Forensic frames, figure identifiers, maturity badges, restrained semantic color, and the runtime-versus-evidence material distinction create a coherent institutional system.
- Status and Stage 0 remain visible rather than being buried in footnotes.
- Existing architecture, Change Gate, trust-boundary, evidence-anatomy, and Proof Capsule Explorer surfaces explain real product concepts instead of supplying decorative motion.
- The Proof Capsule Explorer is a genuine product-evaluation surface: it combines scenario selection, field-level explanation, structure-identical fixtures, mandatory limitations, and mobile-safe rendering.
- The current maturity route is readable and truthful. Its limitation is representational: a flat table cannot explain dependency, blocker propagation, or why a composed capability remains in integration despite completed foundations.

### P1 opportunity

| Current route | Current representation | Missing evaluator question | P1 instrument |
|---|---|---|---|
| `/evidence/claims` | Search, status filters, accordions | “What supports, blocks, bounds, or strengthens this claim?” | Claim Dependency Graph |
| `/maturity` | Capability/status/summary table | “Why is this status correct, and what is the critical path?” | Maturity Topology |
| `/evidence/benchmarks` | Methodology statement + dashboard links | “Can I inspect distribution, environment, regression gate, and reproducibility here?” | Benchmark Workbench |
| `/developers` | Four integration-path cards | “How does authority and evidence behave in an actual integration path?” | Developer Integration Simulator |

## 2. Non-negotiable design rules

1. **One canonical truth system.** Graph edges, status, evidence, limitations, and benchmark provenance must derive from structured content—not duplicated JSX copy.
2. **No percentage theater.** Maturity is a dependency topology, not a progress ring or arbitrary percent complete.
3. **No graph hairball.** Default to a single selected claim and progressively reveal its typed neighborhood.
4. **No benchmark without provenance.** A visible number must resolve to source commit, environment fingerprint, method, raw samples, exclusions, and artifact hash.
5. **No fabricated SDK.** The developer simulator must be labeled representative until exact interfaces are stable and documented.
6. **Maturity per edge.** A sequence can contain Current, In Integration, and Target steps simultaneously.
7. **Limitations remain first-class.** They are shown in the primary inspection surface, not hidden behind a disclosure.
8. **Existing exact views remain.** Graphs augment the current searchable lists/tables; they do not replace accessible text equivalents.

## 3. P1.1 — Claim Dependency Graph

### Purpose

Convert the claims registry from a list of independent records into an explorable assurance graph.

### Typed relationships

Recommended canonical edge types:

```ts
type ClaimRelationType =
  | "requires"
  | "supports"
  | "binds_context"
  | "blocks"
  | "bounds"
  | "strengthens"
  | "target_extension"
  | "supersedes";
```

Every relationship should carry:

```ts
interface ClaimRelationship {
  from: string;
  to: string;
  type: ClaimRelationType;
  maturity: "CURRENT" | "IN_DEVELOPMENT" | "TARGET" | "LIMITATION";
  basis: string;          // source path, claim field, ADR, PRD section, or code evidence
  lastVerified: string;   // ISO date
  interpretation?: string;
}
```

### Default lens

Select `transactional-change-gate` and expose:

- **Supported by:** isolation/snap-rollback, capability authority, Proof Capsules, memory evidence binding.
- **Blocked by:** Stage 0 evidence integrity.
- **Bounded by:** WASM guest↔host enforcement scope and incomplete deployable product composition.
- **Target extensions:** production signing identity/external anchors and durable full-transaction binding.

The prototype marks inferential edges as **proposed**. They must not be presented publicly as canonical dependencies until the registry includes explicit relationships and provenance.

### Interaction

- Click/focus a node to isolate one-hop support and constraint relationships.
- Toggle Full Architecture / Current Only / Blockers / Boundaries.
- Keyboard list mirrors the graph order.
- Inspector shows status, reason, supporting nodes, blockers, boundaries, target extensions, and relationship provenance.
- URL state may serialize selection and lens for shareable evaluator views.

### Mobile

Replace the spatial graph with a selected-claim chain:

`Claim → required foundations → blocker → boundary → target extension`

Keep the same inspector and typed-edge vocabulary.

## 4. P1.2 — Maturity Topology

### Purpose

Explain why independent implemented foundations do not automatically yield an end-to-end transactional guarantee.

### Topological strata

1. **Known boundary** — current WASM/WASI governance scope.
2. **Implemented foundations** — isolation/rollback, capabilities, receipts, Explorer.
3. **Integration ridge** — memory evidence binding and Change Gate composition.
4. **Target trust plane** — production signing/external anchors and durable end-to-end transaction binding.

The vertical axis means **dependency stratum**, not elapsed time, percentage complete, importance, or delivery date.

### Lenses

- **Critical Path:** highlights the shortest dependency route to durable transactional execution.
- **Status Strata:** shows all capabilities by current registry status.
- **Blocker Propagation:** traces how Stage 0 constrains memory binding and Change Gate guarantees.
- **Current Only:** hides non-current nodes and reveals exactly what can be asserted today.

### Maturity reasoning object

Add a structured reason field to each capability:

```ts
interface MaturityReason {
  status: InternalStatus;
  because: string[];
  blockedBy: string[];
  boundedBy: string[];
  unlocks: string[];
  sourceRefs: string[];
  lastVerified: string;
}
```

This allows the topology and existing table to render the same explanation.

### Route integration

Place the topology above the current `/maturity` table. Selecting a topology node filters or scrolls to its exact table row. Keep the table for accessibility, export, and precise text inspection.

## 5. P1.3 — Benchmark Workbench

### Purpose

Turn “methodology first” from a statement into an enforced visual contract.

### Required panels

1. **Environment fingerprint** — commit, runner image, CPU/platform, toolchain, benchmark harness, feature flags.
2. **Metric selector** — sandbox init, snapshot, rollback, throughput, integrated path, and any later canonical series.
3. **Scientific plot** — raw points + median + interval; not a single oversized marketing number.
4. **Comparison lens** — baseline versus candidate with regression threshold.
5. **Methodology diff** — reveal when runner/toolchain/warmup/sample changes invalidate direct comparison.
6. **Reproducibility ledger** — raw artifact, manifest, exclusions, outlier policy, independent rerun status.
7. **Publication gate** — citable / non-citable, with exact failing requirements.

### Artifact schema

```ts
interface BenchmarkArtifact {
  schemaVersion: string;
  benchmarkId: string;
  metric: string;
  unit: string;
  lowerIsBetter: boolean;
  source: {
    repository: string;
    commit: string;
    workflowRun?: string;
    artifactSha256: string;
  };
  environment: {
    runnerImage: string;
    os: string;
    cpu?: string;
    toolchain: string;
    featureFlags: string[];
  };
  method: {
    harness: string;
    warmup: string;
    samples: number;
    outlierPolicy: string;
    exclusions: string[];
  };
  observations: number[];
  generatedAt: string;
}
```

### Critical rule

The included prototype uses synthetic normalized fixture values. The production route must ingest verified CI artifacts. Never hard-code benchmark numbers into a visual component or marketing copy.

### Publication state

A result is citable only when all required fields validate and the associated artifact hash resolves. A methodology change should trigger **comparison invalid** rather than silently plotting incompatible series.

## 6. P1.4 — Developer Integration Simulator

### Purpose

Teach integration boundaries and evidence behavior without pretending a destination API already exists.

### Initial scenarios

1. **Read-only repository inspection — Current Foundation**
   - Capability-limited WASM execution.
   - Receipt emitted from observed runtime state.
   - Clearly bounded to the current guest↔host enforcement surface.

2. **Stage and validate a patch — Destination Composition / In Integration**
   - Intent and scope declaration.
   - Isolated working state.
   - Constrained change.
   - Deterministic validators.
   - Explicit Commit or Abort.
   - Binding receipt remains mixed Current/In Integration/Target.

3. **Denied network request — Current Foundation**
   - Token omits network authority.
   - Host call is denied.
   - Denial and limitations appear in evidence.
   - The model’s choice to request that action remains outside the current interception boundary.

### Simulator layout

- **Scenario controls** at top.
- **Sequence diagram** with lanes for Agent, Host/Nexus-IQ, Nexus, Validator, Effect Boundary, and Evidence.
- **Maturity marker on every arrow.**
- **Contract inspector** showing requested/effective authority, representative request, decision, receipt fields, and limitations.
- **Run / Step controls** with deterministic playback.
- **No network call or side effect.** It is an educational product simulator.

### Exact-interface transition

The simulator begins with a representative contract sketch. Replace pseudocode with exact SDK calls only after:

- the interface exists on a documented release/tag;
- examples are tested in CI;
- version and maturity are displayed;
- failures and capability denial are represented;
- the generated receipt can be validated against a published schema.

## 7. Visual differentiation

The four instruments should share tokens but not compositions:

| Instrument | Dominant visual grammar | Avoid |
|---|---|---|
| Claims | Typed graph lattice + evidence-chain inspector | Unfiltered force-directed hairball |
| Maturity | Dependency strata + critical pass/topology | Percent rings, fake dates, “almost done” gradients |
| Benchmarks | Scientific assay + reproducibility ledger | Hero numbers, speedometers, uncited comparison bars |
| Developers | Protocol sequence + contract/evidence inspector | Fake terminal, fabricated SDK, decorative code rain |

## 8. Data architecture

Recommended additions:

```text
src/content/
  claims-registry.json           existing canonical claims
  claim-relationships.json      typed, source-backed edges
  maturity-reasons.json         status rationale + blocker chain
  benchmark-manifest.schema.json
  integration-scenarios.ts      representative/current/target sequence data
```

Longer term, merge the first three into a versioned assurance registry if that keeps validation and governance simpler.

### Validation

Add build-time checks:

- every edge endpoint exists;
- every relation has basis and last-verified date;
- no Current edge points to a Target-only implementation unless the relationship is explicitly `target_extension`;
- every benchmark value resolves to a verified artifact;
- every simulator step has maturity and limitation references;
- all public labels use the canonical public-status mapping;
- Stage 0 blocker cannot disappear from a dependent visual.

## 9. Integration sequence

### P1-A — Canonical data first

1. Add typed relationship and maturity-reason schemas.
2. Have engineering/product review each proposed edge.
3. Validate all nodes and edges at build time.
4. Add benchmark manifest schema and fixture validator.
5. Define simulator scenario schema and maturity-per-step.

### P1-B — Implement the four instruments

1. Claim Dependency Graph on `/evidence/claims`.
2. Maturity Topology on `/maturity`.
3. Benchmark Workbench on `/evidence/benchmarks`.
4. Developer Integration Simulator on `/developers`.

### P1-C — Evidence and QA

1. Keyboard and screen-reader flows.
2. Reduced-motion/static equivalent.
3. 390/430/1280/1440/1920 screenshots.
4. No horizontal overflow.
5. URL-shareable selections.
6. Build-time content validation.
7. Browser console clean.
8. Benchmark fixture cannot be rendered without the non-citable marker.
9. Stage 0 and route-level maturity remain visible.

## 10. Acceptance criteria

### Claim graph

- One selected chain is understandable in under five seconds.
- No edge lacks type and provenance.
- Proposed edges cannot be confused with canonical/current edges.
- Mobile sequence preserves every relationship.

### Maturity topology

- An evaluator can explain why Change Gate remains In Integration despite Current foundations.
- No percentage or date is implied.
- Current Only produces an accurate subset.
- Blocker propagation is visible without color alone.

### Benchmark workbench

- Every plotted point links to a verified artifact in production.
- Methodology mismatch invalidates comparison.
- Raw distribution, not only summary statistics, is inspectable.
- Non-citable fixtures are impossible to mistake for published results.

### Developer simulator

- Every transition has a maturity status.
- Commit and Abort are equally complete paths.
- The current WASM boundary is explicit.
- Representative contracts cannot be mistaken for a stable public API.
- No simulator action performs an external side effect.

## Key takeaway

P0 gave Nexus-IQ an ownable visual language. P1 should make that language **computationally explanatory**: claims become assurance chains, maturity becomes a critical-path topology, benchmarks become reproducible artifacts, and integration becomes a boundary-aware sequence that developers can inspect before they build.
