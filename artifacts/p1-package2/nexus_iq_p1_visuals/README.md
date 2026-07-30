# Nexus-IQ P1 Evaluator Visual Kit

This package extends the product-native P0 visual system with four P1 evaluator instruments:

1. `FIG-CLM-06` — Claim Dependency Graph
2. `FIG-MAT-07` — Capability Maturity Topology
3. `FIG-BEN-08` — Benchmark Reproducibility Workbench
4. `FIG-DEV-09` — Developer Integration Simulator

## Open first

- `P0-hardening-and-P1-production-report.md` — decision report and required corrections before P1 integration
- `P1-implementation-handoff-prompt.md` — ready-to-use implementation brief for Devin, Codex, Grok, or another coding agent
- `nexus-iq-p1-evaluator-lab.html` — interactive standalone concept lab
- `P0-audit-and-P1-evaluator-blueprint.md` — detailed architecture and acceptance gates

## Review exports

### Primary production direction

- `exports/06-claim-dependency-graph.*`
- `exports/07-maturity-topology.*`
- `exports/08-benchmark-workbench.*`
- `exports/09-developer-integration-simulator.*`
- `p1-contact-sheet-06-09.png`

### Alternate layout studies

- `exports/01-claim-dependency-graph.*`
- `exports/02-maturity-topology.*`
- `exports/03-benchmark-workbench.*`
- `exports/04-developer-integration-simulator.*`
- `p1-contact-sheet-01-04.png`

The primary files are the recommended direction; the alternate files are useful for layout comparison only. Mobile reflow studies are under `mobile/`, with `p1-mobile-contact-sheet.png` as the overview.

## Implementation contract

- `implementation/p1-evaluator-data-contract.ts` is the proposed canonical schema.
- `integration/p1-visual-model.ts` is a UI adapter shape, not a second source of truth.
- `integration/p1-visual-components.tsx` is a component-API scaffold, not production-ready route code.

## Truth and provenance status

This is a design study. Benchmark displays use normalized, explicitly non-citable fixture data and placeholder environment fields that must be populated from a validated CI manifest. No repository was modified, no live request was executed, and no public maturity claim was upgraded.

The supplied live preview was externally authentication-gated during review. P0 behavior described in the report is therefore separated into project-reported behavior, public-source verification, and independent semantic/design analysis. Authenticated screenshot, keyboard, reduced-motion, production-build, and browser-regression QA remain required before merge.
