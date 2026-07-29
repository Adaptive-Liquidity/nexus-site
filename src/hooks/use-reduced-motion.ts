import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getClientSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Prefer reduced on the server so SSR markup never ships a motion-first
 * first paint that then flashes for reduced-motion users.
 * Client snapshot is synchronous via useSyncExternalStore (no useEffect lag).
 */
function getServerSnapshot() {
  return true;
}

/** Synchronous prefers-reduced-motion — no motion-enabled first paint. */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
