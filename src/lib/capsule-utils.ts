/**
 * Helpers for Proof Capsule Explorer inspection and structural checks.
 */

export type CapsuleRecord = Record<string, unknown>;

export function getByPath(obj: unknown, path: string): unknown {
  if (!path) return obj;
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur;
}

export function formatCapsuleValue(value: unknown): string {
  if (value === undefined) return "— (absent)";
  if (value === null) return "null";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

export interface StructuralCheck {
  id: string;
  label: string;
  pass: boolean;
  detail: string;
}

/**
 * Non-cryptographic structural checks for educational inspection.
 * Never claims production signature verification.
 */
export function runStructuralChecks(capsule: CapsuleRecord): StructuralCheck[] {
  const limitations = capsule.limitations;
  const hasLimitations =
    Array.isArray(limitations) && limitations.length > 0;

  const sig = capsule.signature as { signature?: string; signer?: string } | null;
  const sigStr = String(sig?.signature ?? "");
  const isDemoSig =
    !sig ||
    sigStr.includes("DEMO_SIGNATURE") ||
    String(sig.signer ?? "").includes("demo");

  const caps = capsule.capabilities as {
    required?: string[];
    granted?: string[];
    mismatch?: string[] | null;
  } | null;

  const failure = capsule.failure as {
    requires_rollback?: boolean;
  } | null;
  const rollback = capsule.rollback as {
    occurred?: boolean;
  } | null;

  const rollbackConsistent =
    !failure?.requires_rollback || Boolean(rollback?.occurred);

  return [
    {
      id: "capsule_id",
      label: "capsule_id present",
      pass: typeof capsule.capsule_id === "string" && capsule.capsule_id.length > 0,
      detail: "Stable receipt identity required for export and audit linkage.",
    },
    {
      id: "limitations",
      label: "limitations[] non-empty",
      pass: hasLimitations,
      detail: hasLimitations
        ? `${(limitations as string[]).length} mandatory entries`
        : "Missing limitations violates Proof Capsule contract",
    },
    {
      id: "subject",
      label: "subject.run_id + tool_name",
      pass: Boolean(
        capsule.subject &&
          typeof (capsule.subject as { run_id?: string }).run_id === "string" &&
          typeof (capsule.subject as { tool_name?: string }).tool_name ===
            "string",
      ),
      detail: "Binds the receipt to a concrete tool invocation.",
    },
    {
      id: "capabilities",
      label: "capabilities required/granted arrays",
      pass: Boolean(
        caps && Array.isArray(caps.required) && Array.isArray(caps.granted),
      ),
      detail: "Authority evidence shape present for audit of grants vs needs.",
    },
    {
      id: "rollback_consistency",
      label: "rollback aligns with failure.requires_rollback",
      pass: rollbackConsistent,
      detail: rollbackConsistent
        ? "Failure/rollback relationship is consistent in this fixture"
        : "requires_rollback true but rollback.occurred is false",
    },
    {
      id: "signature_demo",
      label: "signature classified as demo / non-production",
      pass: isDemoSig,
      detail: isDemoSig
        ? "Demo placeholder detected — not a production trust anchor"
        : "Signature does not match demo pattern; still not cryptographically verified in-browser",
    },
  ];
}

export function downloadJson(data: unknown, fileName: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
