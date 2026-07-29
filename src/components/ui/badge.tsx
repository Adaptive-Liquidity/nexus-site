import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-slate text-porcelain-muted",
        foundation: "border-oxide/40 bg-oxide/15 text-oxide-fg",
        integration: "border-signal/40 bg-signal/15 text-signal",
        target: "border-target-outline/50 bg-transparent text-porcelain-muted",
        experimental: "border-border bg-carbon text-porcelain-subtle",
        limitation:
          "border-controlled-red/40 bg-controlled-red/15 text-controlled-red-fg",
        paper: "border-black/10 bg-archive-muted text-archive-ink-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
