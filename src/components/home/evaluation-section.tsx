import { Link } from "@tanstack/react-router";
import { BRAND, LAUNCH_THESIS } from "@/content/site-copy";
import { Button } from "@/components/ui/button";
import { FileSearch, Terminal, Building2 } from "lucide-react";

const PATHS = [
  {
    icon: FileSearch,
    audience: "Technical evaluator",
    title: "Inspect the evidence package",
    body: "Proof Capsule fixtures, claims registry, limitations, and live benchmark surfaces.",
    cta: "Open evidence",
    href: "/evidence/proof-capsules",
    internal: true,
  },
  {
    icon: Terminal,
    audience: "Developer",
    title: "Run the current foundations",
    body: "Nexus WASM snap-rollback sandbox, AEON-IQ memory plane, and the Nexus-IQ kit repositories.",
    cta: "GitHub · Nexus",
    href: BRAND.githubNexus,
    internal: false,
  },
  {
    icon: Building2,
    audience: "Institution or partner",
    title: "Request a system evaluation",
    body: "Discuss pilot fit for repository change, security remediation, or governed automation workflows.",
    cta: "Request evaluation",
    href: "mailto:contact@adaptiveliquidity.com?subject=Nexus-IQ%20system%20evaluation",
    internal: false,
  },
] as const;

export function EvaluationSection() {
  return (
    <section
      id="evaluation"
      className="bg-carbon"
      aria-labelledby="evaluation-heading"
    >
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-porcelain-subtle">
            Next step
          </p>
          <h2
            id="evaluation-heading"
            className="font-serif text-2xl text-porcelain sm:text-3xl"
          >
            {LAUNCH_THESIS}
          </h2>
          <p className="text-base text-porcelain-muted">
            Three high-intent paths. No newsletter gate. Architecture first —
            maturity and evidence never optional.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PATHS.map((path) => {
            const Icon = path.icon;
            return (
              <article
                key={path.title}
                className="flex flex-col rounded-xl border border-border bg-void p-5"
              >
                <div className="flex items-center gap-2 text-porcelain-subtle">
                  <Icon className="size-4" aria-hidden strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em]">
                    {path.audience}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg text-porcelain">
                  {path.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-porcelain-muted">
                  {path.body}
                </p>
                <div className="mt-5">
                  {path.internal ? (
                    <Button asChild variant="default" className="w-full sm:w-auto">
                      <Link to={path.href}>{path.cta}</Link>
                    </Button>
                  ) : (
                    <Button asChild variant="secondary" className="w-full sm:w-auto">
                      <a
                        href={path.href}
                        target={path.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          path.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {path.cta}
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
