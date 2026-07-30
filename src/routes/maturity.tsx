import { createFileRoute, Link } from "@tanstack/react-router";
import { claimsRegistry } from "@/content";
import { MaturityBadge } from "@/components/site/maturity-badge";
import {
  PUBLIC_STATUS_META,
  toPublicStatus,
  type InternalStatus,
} from "@/content/maturity";
import { Button } from "@/components/ui/button";
import { CapabilityMaturityTopology } from "@/components/maturity/capability-maturity-topology";
import {
  maturitySearchFromRaw,
  resolveMaturitySearch,
} from "@/lib/evaluator-search";

export const Route = createFileRoute("/maturity")({
  validateSearch: (raw: Record<string, unknown>) =>
    maturitySearchFromRaw(raw),
  component: MaturityPage,
});

function MaturityPage() {
  const search = resolveMaturitySearch(Route.useSearch());
  const navigate = Route.useNavigate();
  return (
    <main className="mx-auto w-full min-w-0 max-w-[72rem] overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8 max-w-2xl space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle">
          Implementation maturity
        </p>
        <h1 className="text-3xl text-porcelain sm:text-4xl">
          Architecture is permanent. Status evolves.
        </h1>
        <p className="text-base text-porcelain-muted">
          Layer Two of every page. Status never disappears. Machine-readable
          registry as of {claimsRegistry.asOf}.
        </p>
        <div className="flex flex-wrap gap-2">
          {(
            Object.keys(PUBLIC_STATUS_META) as Array<
              keyof typeof PUBLIC_STATUS_META
            >
          ).map((key) => (
            <MaturityBadge key={key} status={key} />
          ))}
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-porcelain">
        <strong className="font-medium">Stage 0</strong> —{" "}
        {claimsRegistry.stage0.summary}
      </div>

      <div className="mb-8 min-w-0 max-w-full">
        <CapabilityMaturityTopology
          mode={
            search.view === "all"
              ? "full"
              : search.view === "critical"
                ? "critical"
                : search.view === "trust"
                  ? "trust"
                  : "current"
          }
          selectedId={search.capability}
          onModeChange={(mode) =>
            navigate({
              search: (prev) => ({
                ...prev,
                view:
                  mode === "full"
                    ? "all"
                    : mode === "critical"
                      ? "critical"
                      : mode === "trust"
                        ? "trust"
                        : "current",
                targets: mode === "full",
              }),
              replace: true,
            })
          }
          onSelectRegistryId={(id) =>
            navigate({
              search: (prev) => ({ ...prev, capability: id }),
              replace: true,
            })
          }
        />
      </div>

      <div className="min-w-0 max-w-full overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="border-b border-border bg-carbon">
            <tr>
              <th className="px-4 py-3 font-medium text-porcelain-muted">
                Capability
              </th>
              <th className="px-4 py-3 font-medium text-porcelain-muted">
                Status
              </th>
              <th className="px-4 py-3 font-medium text-porcelain-muted">
                Summary
              </th>
            </tr>
          </thead>
          <tbody>
            {claimsRegistry.capabilities.map((cap) => (
              <tr key={cap.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 align-top font-medium text-porcelain">
                  {cap.name}
                </td>
                <td className="px-4 py-3 align-top">
                  <MaturityBadge
                    status={toPublicStatus(cap.status as InternalStatus)}
                    compact
                  />
                </td>
                <td className="px-4 py-3 align-top text-porcelain-muted">
                  {cap.summary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild variant="secondary">
          <Link to="/evidence/claims">Open claims detail</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/change-gate">Change Gate phases</Link>
        </Button>
      </div>
    </main>
  );
}
