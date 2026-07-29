import { Badge } from "@/components/ui/badge";
import {
  PUBLIC_STATUS_META,
  toPublicStatus,
  type InternalStatus,
  type PublicStatus,
} from "@/content/maturity";
import { cn } from "@/lib/utils";

const toneToVariant = {
  oxide: "foundation",
  signal: "integration",
  target: "target",
  muted: "experimental",
  danger: "limitation",
} as const;

export function MaturityBadge({
  status,
  className,
  showLabel = true,
  compact = false,
}: {
  status: InternalStatus | PublicStatus;
  className?: string;
  showLabel?: boolean;
  compact?: boolean;
}) {
  const publicStatus: PublicStatus =
    status in PUBLIC_STATUS_META
      ? (status as PublicStatus)
      : toPublicStatus(status as InternalStatus);
  const meta = PUBLIC_STATUS_META[publicStatus];
  const variant = toneToVariant[meta.tone];

  return (
    <Badge
      variant={variant}
      className={cn(
        "font-mono tabular-nums",
        compact && "px-1.5 py-0 text-[10px]",
        className,
      )}
      title={meta.label}
    >
      <span aria-hidden>{meta.symbol}</span>
      {showLabel ? (
        <span>{compact ? meta.shortLabel : meta.label}</span>
      ) : (
        <span className="sr-only">{meta.label}</span>
      )}
    </Badge>
  );
}
