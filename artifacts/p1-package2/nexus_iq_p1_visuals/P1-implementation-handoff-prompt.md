# Nexus-IQ P1 Evaluator Instruments — Implementation Handoff

## Mission

Implement the four P1 evaluator instruments in `nexus-site` without changing locked claims, maturity, or product scope:

1. `FIG-CLM-06` Claim Dependency Graph on `/evidence/claims`.
2. `FIG-MAT-07` Capability Maturity Topology on `/maturity`.
3. `FIG-BEN-08` Benchmark Reproducibility Workbench on `/evidence/benchmarks`.
4. `FIG-DEV-09` Developer Integration Simulator on `/developers`.

The product is the spectacle. These are product-native technical instruments, not decorative illustrations.

## Read first

- `P0-hardening-and-P1-production-report.md`
- `P0-audit-and-P1-evaluator-blueprint.md`
- `implementation/p1-evaluator-data-contract.ts`
- `nexus-iq-p1-evaluator-lab.html`
- primary exports `06`–`09`
- mobile transformation studies under `mobile/`

## P0.5 hardening gate — complete first

1. Canonicalize the public phase vocabulary and internal transaction state model.
2. Add typed claim relations with one direction rule: `from` actively relates to `to`.
3. Add figure provenance and registry/build metadata.
4. Standardize trust interpretation to Enforced / Observed / Residual Trust / Not Established.
5. Make current-only the default wherever target architecture appears.
6. Drive all Execution Observatory lenses from one immutable event sequence.
7. Split pre-effect capability denial from post-stage validation rollback.
8. Scope Abort wording to snapshot-backed guest state; do not imply absence of external effects.
9. Define deterministic arbitration between scroll-driven and manually selected hero phases.
10. Preserve ghosted interface contracts when Architecture Atlas planes are isolated.

Do not proceed by hard-coding edges, statuses, or benchmark numbers in components.

## Production implementation

### Claim Dependency Graph

- Hand-authored deterministic SVG plus DOM inspector and textual fallback.
- Existing registry dossier remains below and canonical.
- Filters: all, support path, blocker path, current-only.
- URL state for selected claim and lens.
- Every edge resolves to canonical relation data and source references.
- Missing evidence is explicit.
- Mobile becomes an ordered selected-path trace, not a shrunken graph.

### Capability Maturity Topology

- Regions: Implemented Foundations, In Integration, Stage 0 Gate, Destination Architecture.
- Separate current WASM guest↔host scope boundary.
- Default current-only; target nodes absent from hidden focus/reading order.
- Views: critical path, all capabilities, why blocked.
- No percent complete, speculative date, or visual implication from adjacency.
- Existing table remains below.

### Benchmark Reproducibility Workbench

- Ingest only a validated, versioned benchmark manifest.
- Show environment, methodology, distribution, uncertainty, comparability, artifacts, hashes, and limitations with each result.
- Missing/incompatible data renders Unavailable or Incomparable, never zero.
- Never compare primitive initialization with integrated request latency.
- Keep live dashboard and source links.
- Provide accessible data table and reproduction instructions.
- Do not ship the normalized design fixture as public performance data.

### Developer Integration Simulator

- Default to current API mode.
- Use exact documented API/function names only.
- Lanes: Agent/Host, Authority, Nexus Runtime, AEON-IQ Memory, Evidence; add Validator/Effect only where needed.
- Scenarios: valid, expired, revoked capability; advisory/attested/absent memory; current Nexus execution; Proof Capsule verification; explicitly non-current composed Change Gate.
- Every step has its own maturity and trust interpretation.
- Memory may inform reasoning but may never cross into execution authority.
- Representative fixture only; no credentials, network request, runtime execution, or side effect.
- Mobile becomes a vertical stepper.

## Technology boundaries

Use the existing React, TypeScript, TanStack Router, Zustand, Tailwind, Recharts, Radix, and Playwright stack. Prefer semantic SVG and DOM. Do not add Three.js, WebGPU, Rive, GSAP, a physics engine, or a graph-layout dependency for these instruments.

## Acceptance gate

- Typecheck, lint, and safe production build pass.
- No console errors or horizontal overflow.
- 390, 430, 768, 1280, 1440, and 1920 widths.
- Keyboard-only operation, visible focus, accessible names, `aria-live` inspector summaries.
- Reduced-motion and static/print states.
- URL deep links and back/forward state restoration.
- Text/table equivalents for every graph.
- Malformed relationship and benchmark manifests fail safely.
- Screenshot regression for every state that changes interpretation.
- No continuous offscreen rendering.
- Claims registry, maturity, limitations, and trust language remain consistent across all four routes and P0 instruments.

## Operating boundaries

Preserve existing work. Do not reset unrelated changes. Do not fabricate data, APIs, customers, audits, benchmarks, deployments, or guarantees. Do not change locked public copy or maturity without evidence. Do not commit, push, open a PR, merge, or deploy unless separately authorized.

## Required completion report

Return:

- files changed;
- canonical data/schema additions;
- route-by-route behavior;
- current versus target handling;
- accessibility and mobile results;
- typecheck/lint/build/test commands and exact outcomes;
- screenshots for desktop and mobile states;
- remaining limitations and any claim-risk findings;
- confirmation that no public claim was upgraded by visual implication.
