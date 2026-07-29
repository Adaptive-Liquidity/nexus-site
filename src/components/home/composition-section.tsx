import { COMPOSITION } from "@/content/site-copy";
import { SectionHeading } from "@/components/home/section-heading";
import { Reveal } from "@/components/home/reveal";
import { SystemArchitectureDiagram } from "@/components/home/system-architecture-diagram";
import { ArrowRight } from "lucide-react";

export function CompositionSection() {
  return (
    <section
      id="system"
      className="border-b border-border bg-void"
      aria-labelledby="composition-heading"
    >
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Architecture"
            title="One operating model, three systems"
            description="Nexus and AEON-IQ support the Nexus-IQ story. They do not compete with it for homepage prominence — they are the execution and memory substrates under the transactional composition layer."
          />
        </Reveal>
        <h3 id="composition-heading" className="sr-only">
          System composition
        </h3>

        <Reveal delay={60}>
          <div className="mt-10">
            <SystemArchitectureDiagram />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-carbon">
            <div className="border-b border-border px-4 py-3 sm:px-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
                Layer cards · quick reference
              </p>
            </div>
            <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {COMPOSITION.map((layer, i) => (
                <div
                  key={layer.id}
                  className="relative p-5 sm:p-6 transition-colors hover:bg-slate/30"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] tabular-nums text-porcelain-subtle">
                      L{i + 1}
                    </span>
                    {i < COMPOSITION.length - 1 ? (
                      <ArrowRight
                        className="hidden size-4 text-porcelain-subtle md:block"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <h4
                    className={`mt-3 font-serif text-xl ${
                      layer.id === "nexus-iq"
                        ? "text-porcelain"
                        : "text-porcelain-muted"
                    }`}
                  >
                    {layer.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-porcelain-muted">
                    {layer.role}
                  </p>
                  {layer.id === "nexus-iq" ? (
                    <p className="mt-4 inline-flex rounded-md border border-institution/40 bg-institution/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-porcelain">
                      Product composition layer
                    </p>
                  ) : (
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
                      Supporting substrate
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
