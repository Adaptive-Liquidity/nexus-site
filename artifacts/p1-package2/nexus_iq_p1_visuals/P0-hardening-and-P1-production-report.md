# Nexus-IQ P0 Hardening and P1 Production Report

**Decision: conditional go.** The P0 visual system is the correct foundation and should not be redesigned. Close the semantic hardening gate below, then implement P1 from one canonical claims/evidence model.

## Review basis

The supplied preview redirected external review tools to an authenticated gateway, so current rendered pixels were not independently available. This report distinguishes:

1. **Project-reported live state:** the P0 slices and QA results supplied in the handoff.
2. **Public-source baseline:** the public branch’s maturity table, claims dossier, benchmark route, developer route, claims registry, and DemoPlayer.
3. **Independent design and semantic audit:** whether the reported instruments preserve product truth, maturity, evidence, security, and accessibility doctrine.

A final authenticated browser review remains required before merge.

## Executive assessment

The new direction is materially stronger than cinematic scenery or object-render prestige work. The Cognitive Hypervisor, Causal Control Trace, Architecture Atlas, Evidence Lattice, Trust Boundary, Execution Observatory, and Change Gate state-space form a coherent product-native system.

The remaining risk is **semantic divergence**: sophisticated instruments could encode slightly different phase names, maturity states, trust classifications, edge meanings, event timing, or guarantee boundaries. Fix that centrally rather than correcting figures one at a time.

## P0 corrections before P1 integration

### Required hardening gate

1. **One canonical phase/state vocabulary**
   - Public narrative: `Intent → Stage → Constrain → Validate → Decide → Emit`.
   - Internal state model: `Proposed → Staged → Constrained → Validated → AwaitingApproval? → Committed | Aborted → EvidenceEmitted`.
   - Approval is policy-conditioned; it is not a universal phase.

2. **Typed, sourced relationships**
   - Every graph edge requires `id`, `from`, `to`, relationship type, maturity, rationale, source references, and last-verified metadata.
   - Use one direction convention: `from` actively relates to `to` (`supports`, `requires`, `blocks`, `bounds`, `evidences`, and so on). Do not mix active and passive edge names.
   - No component may invent semantic edges inside JSX or SVG.

3. **One immutable event fixture per Observatory scenario**
   - State Diff, Authority, Validator Matrix, and Evidence Assembly must be pure projections of the same event stream and scrubber time.
   - Evidence fields unlock only after the event that supports them.

4. **Current-only default**
   - Any figure containing target architecture defaults to current-only.
   - Hidden target nodes are not focusable, selectable, or announced to assistive technology.
   - Target state requires explicit disclosure and uses patterned/dashed treatment that survives grayscale.

5. **One trust taxonomy**
   - `Enforced`
   - `Observed`
   - `Residual Trust`
   - `Not Established`
   Mechanism terms such as denied, restored, constrained, degraded, and advisory map into these interpretation classes rather than competing with them.

6. **Split denial and rollback into separate fixtures**
   - A missing or expired capability is a **pre-effect denial**. It should not automatically claim rollback occurred.
   - A validator failure after staged mutation is a **post-stage rollback**. It may show snapshot-backed guest restoration while retaining the external-effect limitation.
   - The current reported Abort path combines `NetworkOutbound` denial with a later rollback requirement; separate these before the Observatory becomes the source model for P1.

7. **Scope the Abort statement**
   Replace broad copy such as “Abort restores pre-execution state. No irreversible effect.” with:

   > For this isolated fixture, Abort restores snapshot-backed guest state before any committed effect. External effects require explicit compensation semantics and are not proven absent.

8. **Expose signature trust, not only signature presence**
   Signature inspection must show signer identity, key source/custody, verification status, covered fields, current demo/optional-key status, and the fact that durable production trust anchors remain destination architecture. Where current signing is optional, prefer “portable evidence record, optionally signed” over wording that implies every capsule is signed.

9. **Preserve contracts when isolating Architecture Atlas planes**
   Show ghosted interface contracts to adjacent planes. Fully disappearing edges can imply false independence.

10. **Keep Evidence Lattice limitations persistent**
   Selecting any field should synchronize the exact JSON path, source event, trust interpretation, and limitation. `limitations[]` remains pinned or one action away under every filter.

11. **Represent external effects honestly in Security and Change Gate**
    - An external side effect resolves to outside direct snapshot rollback, with compensation as a separate target mechanism.
    - Compensation begins after a committed external effect; it is not equivalent to restoring sandbox state.

12. **Define scroll/manual interaction arbitration**
    - Clicking a hero phase must not be immediately overwritten by scroll-derived state.
    - Either synchronize scroll position to the selected phase or enter a visible manual-inspection mode until scrolling resumes.

### Strong enhancements, not blockers

- Add a `Known / Authorized / Reversible` readout to the Causal Control Trace.
- Use progressive disclosure across the homepage so seven instruments do not compete at equal density.
- Give each route a distinct dominant composition while retaining the same material, maturity, and line grammar.
- Persist figure selection/filter state in the URL for evaluator handoff and reproducible screenshots.
- Add downloadable structured figure provenance.

## Verification still required

The supplied QA is a good engineering baseline, but the merge gate should also include:

- lint and safe production build;
- desktop widths 1280, 1440, and 1920; mobile 390 and 430;
- keyboard-only operation, visible focus, and accessible names;
- screen-reader summaries and textual table/list equivalents;
- reduced-motion static states;
- fixture/media/data failure fallbacks;
- malformed relationship registry rejection;
- malformed or incompatible benchmark manifest rejection;
- URL state, back/forward restoration, and deep-link tests;
- screenshot regression for every state that changes interpretation;
- no continuous offscreen rendering;
- cross-route claim, maturity, limitation, and trust-vocabulary consistency.

## P1 production specifications

### FIG-CLM-06 — Claim Dependency Graph

**Route:** `/evidence/claims`, above the canonical searchable dossier.

**Purpose:** answer what supports a claim, what blocks or bounds it, which evidence exists, and what stronger target remains.

**Primary interaction:** select a claim; switch among all, support path, blocker path, and current-only; share the selected state through the URL.

**Inspector:** status, supporting foundations, evidence artifacts, blockers, limitations, “does not establish,” source references, and last verified date.

**Production rules:** deterministic DAG; no force layout; explicit missing-evidence state; limitations never disappear; existing dossier remains canonical below. Mobile becomes an ordered dependency trace.

### FIG-MAT-07 — Capability Maturity Topology

**Route:** `/maturity`, above the existing exhaustive table.

**Purpose:** show how implemented foundations feed integrations, where Stage 0 blocks the path, and which capabilities are destination architecture.

**Regions:** Implemented Foundations → In Integration → Stage 0 Gate → Destination Architecture, plus a distinct current WASM guest↔host scope boundary.

**Primary interaction:** current-only/destination, critical-path/all, and “why blocked?” trace.

**Production rules:** no percent-complete score or speculative dates; target nodes are absent from initial focus order; adjacency never upgrades maturity; table stays below.

### FIG-BEN-08 — Benchmark Reproducibility Workbench

**Route:** `/evidence/benchmarks`, while retaining dashboard/source links.

**Purpose:** make the environment, methodology, distribution, comparability, provenance, and limitations inseparable from every result.

**Primary interaction:** select validated run, benchmark group, measurement mode, payload class, baseline, and distribution/history view.

**Required data:** versioned CI benchmark manifest, source commit, runner fingerprint, runtime/toolchain, sample distribution, warmup, outlier policy, raw artifacts, content hashes, and optional signature bundle.

**Production rules:** no hard-coded public numbers; incompatible data is marked incomparable; missing data is unavailable rather than zero; primitive initialization is never compared with integrated request latency; accessible table equivalent required. The included study uses normalized non-citable fixture data only.

### FIG-DEV-09 — Developer Integration Simulator

**Route:** `/developers`, above the current integration-path cards.

**Purpose:** let a developer rehearse where authority is checked, how memory participates, what executes, which evidence returns, and which steps are current versus destination architecture.

**Lanes:** Agent/Host, Authority, Nexus Runtime, AEON-IQ Memory, Evidence; add Validator/Effect lanes only where the selected scenario requires them.

**Scenarios:** current Nexus execution, capability denial/expiry/revocation, AEON recall modes, Proof Capsule verification, and an explicitly non-current composed Change Gate.

**Production rules:** current API default; no invented endpoint names; use exact documented entry points only; every arrow has its own maturity and trust interpretation; memory terminates before the authority lane; fixtures are visibly representative and perform no live effect. Mobile becomes a stepper.

## Implementation order

1. Canonicalize phase vocabulary, trust taxonomy, relation schema, provenance, and Observatory event envelope.
2. Build Claim Dependency Graph and Maturity Topology together from the same relationship data.
3. Add CI benchmark-manifest schema, validator, and safe unavailable/incomparable states; then build the Workbench.
4. Add versioned integration-scenario fixtures; then build the Developer Simulator.
5. Run cross-route semantic consistency and authenticated browser QA before commit or PR.

## Final recommendation

Proceed. Do not spend another cycle redesigning P0. Treat P0.5 semantic hardening as the first implementation slice of P1, because the four evaluator instruments depend on it.
