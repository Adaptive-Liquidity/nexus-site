/**
 * Public maturity vocabulary (diagrams + UI).
 * Claims registry may use internal CURRENT / IN_DEVELOPMENT labels;
 * map via toPublicStatus().
 */

export type InternalStatus =
  | "CURRENT"
  | "IN_DEVELOPMENT"
  | "TARGET"
  | "EXPERIMENTAL"
  | "LIMITATION";

export type PublicStatus =
  | "implemented_foundation"
  | "in_integration"
  | "target_architecture"
  | "experimental"
  | "known_limitation";

export const PUBLIC_STATUS_META: Record<
  PublicStatus,
  {
    symbol: string;
    label: string;
    shortLabel: string;
    /** CSS token key for badge */
    tone: "oxide" | "signal" | "target" | "muted" | "danger";
  }
> = {
  implemented_foundation: {
    symbol: "●",
    label: "Implemented Foundation",
    shortLabel: "Foundation",
    tone: "oxide",
  },
  in_integration: {
    symbol: "◐",
    label: "In Integration",
    shortLabel: "Integration",
    tone: "signal",
  },
  target_architecture: {
    symbol: "○",
    label: "Target Architecture",
    shortLabel: "Target",
    tone: "target",
  },
  experimental: {
    symbol: "△",
    label: "Experimental",
    shortLabel: "Experimental",
    tone: "muted",
  },
  known_limitation: {
    symbol: "!",
    label: "Known Limitation",
    shortLabel: "Limitation",
    tone: "danger",
  },
};

export function toPublicStatus(internal: InternalStatus): PublicStatus {
  switch (internal) {
    case "CURRENT":
      return "implemented_foundation";
    case "IN_DEVELOPMENT":
      return "in_integration";
    case "TARGET":
      return "target_architecture";
    case "EXPERIMENTAL":
      return "experimental";
    case "LIMITATION":
      return "known_limitation";
  }
}

export function countByPublicStatus(
  items: { status: InternalStatus | PublicStatus }[],
): Record<PublicStatus, number> {
  const counts: Record<PublicStatus, number> = {
    implemented_foundation: 0,
    in_integration: 0,
    target_architecture: 0,
    experimental: 0,
    known_limitation: 0,
  };
  for (const item of items) {
    const key =
      item.status in PUBLIC_STATUS_META
        ? (item.status as PublicStatus)
        : toPublicStatus(item.status as InternalStatus);
    counts[key] += 1;
  }
  return counts;
}
