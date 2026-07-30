import { useMemo, useState } from "react";
import type {
  BenchmarkArtifact,
  ClaimRelationship,
  IntegrationScenario,
  InternalStatus,
  MaturityReason,
} from "./p1-visual-model";

type Claim = {
  id: string;
  name: string;
  status: InternalStatus;
  summary: string;
  limitations?: string[];
};

const STATUS: Record<InternalStatus, { label: string; symbol: string; stroke: string }> = {
  CURRENT: { label: "Implemented Foundation", symbol: "●", stroke: "#75a184" },
  IN_DEVELOPMENT: { label: "In Integration", symbol: "◐", stroke: "#d4a55f" },
  TARGET: { label: "Target Architecture", symbol: "○", stroke: "#5f93a8" },
  EXPERIMENTAL: { label: "Experimental", symbol: "◇", stroke: "#9b83aa" },
  LIMITATION: { label: "Known Limitation", symbol: "!", stroke: "#b96464" },
};

export function ClaimDependencyGraph({
  claims,
  relationships,
}: {
  claims: Claim[];
  relationships: ClaimRelationship[];
}) {
  const [selectedId, setSelectedId] = useState("transactional-change-gate");
  const related = useMemo(() => {
    const ids = new Set([selectedId]);
    for (const edge of relationships) {
      if (edge.from === selectedId || edge.to === selectedId) {
        ids.add(edge.from);
        ids.add(edge.to);
      }
    }
    return ids;
  }, [relationships, selectedId]);

  // Production: coordinates belong in a deterministic layout map derived from the
  // canonical assurance registry. Avoid force-directed layouts for this small graph.
  const positions = new Map(claims.map((claim, index) => [
    claim.id,
    { x: 120 + (index % 4) * 220, y: 120 + Math.floor(index / 4) * 230 },
  ]));

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <svg viewBox="0 0 1000 600" role="img" aria-label="Claim dependency graph">
        {relationships.map((edge) => {
          const a = positions.get(edge.from);
          const b = positions.get(edge.to);
          if (!a || !b) return null;
          const active = edge.from === selectedId || edge.to === selectedId;
          return (
            <line
              key={edge.id}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={edge.type === "blocks" || edge.type === "bounds" ? "#b96464" : "#5f93a8"}
              strokeWidth={active ? 2.5 : 1.25}
              strokeDasharray={edge.maturity === "TARGET" ? "7 6" : undefined}
              opacity={active ? 1 : 0.18}
            />
          );
        })}
        {claims.map((claim) => {
          const p = positions.get(claim.id)!;
          const meta = STATUS[claim.status];
          const active = related.has(claim.id);
          return (
            <g
              key={claim.id}
              tabIndex={0}
              role="button"
              aria-label={`${claim.name}: ${meta.label}`}
              onClick={() => setSelectedId(claim.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setSelectedId(claim.id);
              }}
              opacity={active ? 1 : 0.2}
              className="cursor-pointer outline-none focus-visible:[filter:drop-shadow(0_0_6px_#5f93a8)]"
            >
              <rect x={p.x - 88} y={p.y - 34} width="176" height="68" rx="10" fill="#111820" stroke={meta.stroke} />
              <text x={p.x} y={p.y - 8} textAnchor="middle" fill={meta.stroke} fontSize="9" fontFamily="monospace">
                {meta.symbol} {meta.label.toUpperCase()}
              </text>
              <text x={p.x} y={p.y + 15} textAnchor="middle" fill="#f6f1e7" fontSize="11">
                {claim.name}
              </text>
            </g>
          );
        })}
      </svg>
      <ClaimInspector claim={claims.find((claim) => claim.id === selectedId)} relationships={relationships} />
    </div>
  );
}

function ClaimInspector({ claim, relationships }: { claim?: Claim; relationships: ClaimRelationship[] }) {
  if (!claim) return null;
  const incoming = relationships.filter((edge) => edge.to === claim.id);
  const outgoing = relationships.filter((edge) => edge.from === claim.id);
  return (
    <aside aria-live="polite" className="rounded-xl border border-border bg-carbon p-5">
      <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">{STATUS[claim.status].label}</p>
      <h3 className="mt-3 font-serif text-xl text-porcelain">{claim.name}</h3>
      <p className="mt-2 text-sm text-porcelain-muted">{claim.summary}</p>
      <RelationshipList title="Inputs / constraints" edges={incoming} />
      <RelationshipList title="Downstream" edges={outgoing} />
    </aside>
  );
}

function RelationshipList({ title, edges }: { title: string; edges: ClaimRelationship[] }) {
  return (
    <div className="mt-5 border-t border-border pt-4">
      <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">{title}</p>
      <ul className="mt-2 space-y-2 text-xs text-porcelain-muted">
        {edges.map((edge) => <li key={edge.id}>{edge.type}: {edge.from} → {edge.to}</li>)}
      </ul>
    </div>
  );
}

export function MaturityTopology({
  claims,
  reasons,
}: {
  claims: Claim[];
  reasons: Record<string, MaturityReason>;
}) {
  const [selectedId, setSelectedId] = useState("transactional-change-gate");
  const selected = claims.find((claim) => claim.id === selectedId);
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div className="relative min-h-[34rem] overflow-hidden rounded-xl border border-border bg-void">
        {claims.map((claim, index) => {
          const meta = STATUS[claim.status];
          const level = claim.status === "CURRENT" ? 3 : claim.status === "IN_DEVELOPMENT" ? 2 : claim.status === "TARGET" ? 1 : 4;
          return (
            <button
              key={claim.id}
              type="button"
              onClick={() => setSelectedId(claim.id)}
              className="absolute w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-carbon p-4 text-xs text-porcelain"
              style={{ left: `${14 + (index % 4) * 24}%`, top: `${level * 19}%`, borderColor: meta.stroke }}
            >
              <span className="block font-mono text-[9px]" style={{ color: meta.stroke }}>{meta.symbol} {meta.label}</span>
              <span className="mt-1 block">{claim.name}</span>
            </button>
          );
        })}
      </div>
      <aside className="rounded-xl border border-border bg-carbon p-5" aria-live="polite">
        <h3 className="font-serif text-xl text-porcelain">{selected?.name}</h3>
        <p className="mt-3 text-sm text-porcelain-muted">{reasons[selectedId]?.because.join(" ")}</p>
      </aside>
    </div>
  );
}

export function BenchmarkWorkbench({ artifacts }: { artifacts: BenchmarkArtifact[] }) {
  const [benchmarkId, setBenchmarkId] = useState(artifacts[0]?.benchmarkId ?? "");
  const artifact = artifacts.find((item) => item.benchmarkId === benchmarkId);
  if (!artifact) return <p>No verified benchmark artifact supplied.</p>;
  const min = Math.min(...artifact.observations);
  const max = Math.max(...artifact.observations);
  return (
    <div>
      <label className="text-xs text-porcelain-muted">
        Benchmark
        <select value={benchmarkId} onChange={(event) => setBenchmarkId(event.target.value)} className="ml-3 bg-carbon">
          {artifacts.map((item) => <option key={item.benchmarkId} value={item.benchmarkId}>{item.metric}</option>)}
        </select>
      </label>
      <svg viewBox="0 0 900 260" role="img" aria-label={`${artifact.metric} observation distribution`}>
        {artifact.observations.map((value, index) => (
          <circle
            key={`${value}:${index}`}
            cx={70 + ((value - min) / Math.max(max - min, Number.EPSILON)) * 760}
            cy={125 + ((index % 5) - 2) * 10}
            r="5"
            fill="#75a184"
          />
        ))}
      </svg>
      <p className="font-mono text-[10px] text-porcelain-subtle">{artifact.source.commit} · {artifact.environment.runnerImage} · sha256:{artifact.source.artifactSha256}</p>
    </div>
  );
}

export function DeveloperIntegrationSimulator({ scenarios }: { scenarios: IntegrationScenario[] }) {
  const [scenarioId, setScenarioId] = useState(scenarios[0]?.id ?? "");
  const [step, setStep] = useState(-1);
  const scenario = scenarios.find((item) => item.id === scenarioId);
  if (!scenario) return null;
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Integration scenarios">
        {scenarios.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === scenarioId}
            onClick={() => { setScenarioId(item.id); setStep(-1); }}
            className="rounded-md border border-border px-3 py-2 text-xs text-porcelain-muted"
          >
            {item.name}
          </button>
        ))}
      </div>
      <ol className="mt-5 space-y-3">
        {scenario.steps.map((item, index) => (
          <li key={`${item.from}:${item.to}:${index}`} className={index <= step ? "opacity-100" : "opacity-30"}>
            <span className="font-mono text-[10px]" style={{ color: STATUS[item.status].stroke }}>{STATUS[item.status].symbol} {STATUS[item.status].label}</span>
            <p className="text-sm text-porcelain">{item.from} → {item.to}: {item.label}</p>
          </li>
        ))}
      </ol>
      <button type="button" onClick={() => setStep((value) => Math.min(value + 1, scenario.steps.length - 1))} className="mt-4 rounded-md border border-border px-3 py-2 text-xs">Step</button>
      <p className="mt-4 font-mono text-[10px] text-signal">REPRESENTATIVE SIMULATION · NO LIVE EFFECT</p>
    </div>
  );
}
