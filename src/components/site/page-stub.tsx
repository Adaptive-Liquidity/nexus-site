import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PageStub({
  eyebrow,
  title,
  description,
  phaseNote = "Phase 0 route shell — full content in later phases",
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  phaseNote?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-[72rem] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8 max-w-2xl space-y-4">
        <Badge variant="default" className="font-mono uppercase tracking-[0.1em]">
          {eyebrow}
        </Badge>
        <h1 className="text-3xl text-porcelain sm:text-4xl">{title}</h1>
        <p className="text-base leading-relaxed text-porcelain-muted">
          {description}
        </p>
        <p className="text-sm text-porcelain-subtle">{phaseNote}</p>
      </div>

      {children}

      <Card className="mt-8 border-dashed">
        <CardHeader>
          <CardTitle className="text-base">Continue exploring</CardTitle>
          <CardDescription>
            Permanent architecture first; maturity and evidence always visible.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild variant="secondary" size="sm">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/maturity">Maturity registry</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/evidence/proof-capsules">Proof Capsules</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
