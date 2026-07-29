import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/site/page-stub";
import { COMPOSITION } from "@/content/site-copy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/system")({
  component: SystemPage,
});

function SystemPage() {
  return (
    <PageStub
      eyebrow="System"
      title="Operating model"
      description="Complete Nexus-IQ architecture: execution boundary, governed memory, transactional composition, and evidence flow. Full diagrams and maturity overlay in Phase 4."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {COMPOSITION.map((layer) => (
          <Card key={layer.id}>
            <CardHeader>
              <CardTitle className="text-base">{layer.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-porcelain-muted">{layer.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageStub>
  );
}
