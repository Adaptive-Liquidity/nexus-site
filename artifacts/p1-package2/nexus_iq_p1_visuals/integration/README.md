# P1 integration handoff

This folder supplies the proposed data contracts and route integration notes. The interactive HTML lab is the visual reference; the production implementation should use the existing React/Tailwind/ForensicFrame system and does **not** require a new visualization dependency.

## Recommended component APIs

```tsx
<ClaimDependencyGraph
  claims={claimsRegistry.capabilities}
  relationships={claimRelationships}
  selectedId={selectedId}
  onSelectedIdChange={setSelectedId}
  lens={lens}
/>

<MaturityTopology
  claims={claimsRegistry.capabilities}
  relationships={claimRelationships}
  reasons={maturityReasons}
  lens={lens}
/>

<BenchmarkWorkbench
  artifacts={verifiedBenchmarkArtifacts}
  publicationPolicy={benchmarkPublicationPolicy}
/>

<DeveloperIntegrationSimulator
  scenarios={integrationScenarios}
  initialScenarioId="inspect"
/>
```

## No-library implementation

- SVG + semantic DOM for graphs, plots, and sequence lanes.
- Existing React state or Zustand for selection and synchronized playback.
- Existing Tailwind tokens and `ForensicFrame` for visual continuity.
- `ResizeObserver` for responsive coordinates only if needed.
- Prefer deterministic layouts. Do not introduce a force-directed graph runtime.

## Content governance before public release

1. Review and canonicalize every proposed claim edge.
2. Add relationship provenance and last-verified date.
3. Validate benchmark artifact manifests in CI.
4. Keep synthetic fixture data impossible to render without `NON-CITABLE` classification.
5. Mark every simulator step with its own maturity.
6. Preserve the current list/table views beneath each instrument.
