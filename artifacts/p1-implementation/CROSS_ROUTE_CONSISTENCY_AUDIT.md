# Cross-route semantic consistency audit

**Date:** 2026-07-29 (final acceptance re-run)  
**Base HEAD:** `2ae7cf198f26449f71b4a916268dd32c40739ed3`

## Method

Compared claim IDs, statuses, limitations language, and trust vocabulary across:

- `src/content/claims-registry.json` (8 public capabilities)
- `src/content/claim-relations.json` (13 nodes, 17 relations)
- Maturity table/topology (`/maturity`)
- Claim graph (`/evidence/claims`)
- Observatory scenarios (`observatory-scenarios.ts`)
- Integration scenarios (`integration-scenarios.ts`)
- Benchmark fixture (`benchmark-fixture.ts`)
- Trust taxonomy (`trust-taxonomy.ts`)
- Atlas contracts (`atlas-contracts.ts`)

Automated: `node scripts/validate-claim-relations.mjs` → `OK nodes=13 relations=17`

## Registry ↔ relations

| Check | Result |
|-------|--------|
| Unique node IDs | PASS |
| Unique edge IDs | PASS |
| Edge endpoints resolve | PASS |
| No orphaned graph nodes | PASS |
| Stage 0 status IN_DEVELOPMENT | PASS (`stage0-evidence-integrity`) |
| AEON memory IN_DEVELOPMENT | PASS |
| Change Gate IN_DEVELOPMENT | PASS |
| Signing anchors TARGET | PASS |
| Isolation/authority/capsules/explorer CURRENT | PASS |
| Limitations nodes present | PASS (`wasm-boundary-scope`, `host-residual-trust`) |

## Doctrine

| Rule | Result |
|------|--------|
| Memory never expands authority | PASS (atlas `authority_barrier` contract + simulator) |
| Rollback ≠ compensation | PASS (denial fixture `rollbackOccurred:false`; rollback fixture guest-restore Yes) |
| Observation ≠ enforcement | PASS (trust taxonomy on events) |
| Signature ≠ production trust | PASS (lattice signature panel copy + tests) |
| Benchmark fixtures non-citable | PASS (`CITABLE: NO` / `data-citable=false`) |
| Destination Change Gate non-current | PASS (developers architecture default current) |

## Cross-route name/status

Selecting `transactional-change-gate` on Claims and Maturity yields **In Integration / IN_DEVELOPMENT** consistently. No route paints it CURRENT.

## Residual notes

- Dense header/topology controls may still surface Lighthouse target-size warnings; category scores remain ≥95.
- Independent pixel review recorded minor residuals only (metric visual weight, muted meta contrast).

## Verdict

**PASS** — no conflicting claim/maturity/trust/source chain detected. GATE 7 green.
