import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Token-sampled palette for canvas (no ad-hoc brand hex in JSX) */
const C = {
  void: "#07090b",
  carbon: "#111820",
  slate: "#1a252d",
  elevated: "#243039",
  porcelain: "#f6f1e7",
  institution: "#2f5e73",
  institutionBright: "#5a9bb8",
  oxide: "#496f59",
  oxideBright: "#7ab089",
  abort: "#7a3e3e",
  abortBright: "#c07070",
  archive: "#eee7d8",
  signal: "#a9793b",
};

function smoothstep(e0: number, e1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}
function mix(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const DEBUG_CANVAS =
  typeof import.meta !== "undefined" &&
  Boolean((import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV);

declare global {
  interface Window {
    __nexusCanvasDebug?: {
      paused: boolean;
      isPaused: () => boolean;
      rafActive: boolean;
    };
  }
}

/**
 * Direction 2 — Forensic Cross-Section instrument.
 * ONE continuous apparatus; chambers are internal mechanical spaces.
 * Atmospheric illustration only — not product evidence.
 */
export function CommitBoundaryCanvas({
  progress,
  className,
}: {
  progress: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(progress);
  const reduced = useReducedMotion();
  const rafRef = useRef(0);
  const timeRef = useRef(0);
  const pausedRef = useRef(false);
  const runningRef = useRef(true);

  progressRef.current = progress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    runningRef.current = true;

    const publishDebug = () => {
      if (!DEBUG_CANVAS) return;
      window.__nexusCanvasDebug = {
        paused: pausedRef.current,
        isPaused: () => pausedRef.current,
        rafActive: !pausedRef.current && runningRef.current && !reduced,
      };
    };

    const clearDebug = () => {
      if (!DEBUG_CANVAS) return;
      if (window.__nexusCanvasDebug) {
        window.__nexusCanvasDebug.rafActive = false;
        window.__nexusCanvasDebug.paused = true;
      }
      delete window.__nexusCanvasDebug;
    };

    const setPaused = (p: boolean) => {
      pausedRef.current = p;
      publishDebug();
    };

    publishDebug();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const roundRect = (
      x: number,
      y: number,
      rw: number,
      rh: number,
      r: number,
    ) => {
      const rr = Math.min(r, rw / 2, rh / 2);
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.arcTo(x + rw, y, x + rw, y + rh, rr);
      ctx.arcTo(x + rw, y + rh, x, y + rh, rr);
      ctx.arcTo(x, y + rh, x, y, rr);
      ctx.arcTo(x, y, x + rw, y, rr);
      ctx.closePath();
    };

    const draw = () => {
      const p = Math.min(1, Math.max(0, progressRef.current));
      const stage = smoothstep(0.06, 0.28, p);
      const constrain = smoothstep(0.28, 0.48, p);
      const validate = smoothstep(0.48, 0.62, p);
      const decide = smoothstep(0.58, 0.78, p);
      const emit = smoothstep(0.78, 0.96, p);
      const portrait = h > w * 0.95;

      ctx.fillStyle = C.void;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(17,24,32,0.55)";
      ctx.fillRect(0, h * 0.08, w, h * 0.84);

      let shellX: number, shellY: number, shellW: number, shellH: number;
      if (portrait) {
        shellX = w * 0.08;
        shellY = h * 0.12;
        shellW = w * 0.84;
        shellH = h * 0.72;
      } else {
        shellX = w * 0.32;
        shellY = h * 0.18;
        shellW = w * 0.62;
        shellH = h * 0.58;
      }

      ctx.fillStyle = C.carbon;
      roundRect(shellX, shellY, shellW, shellH, 18);
      ctx.fill();
      ctx.strokeStyle = "rgba(246,241,231,0.14)";
      ctx.lineWidth = 1.5;
      roundRect(shellX, shellY, shellW, shellH, 18);
      ctx.stroke();

      const pad = 10;
      const ix = shellX + pad;
      const iy = shellY + pad;
      const iw = shellW - pad * 2;
      const ih = shellH - pad * 2;
      ctx.fillStyle = C.void;
      roundRect(ix, iy, iw, ih, 12);
      ctx.fill();

      if (!portrait) {
        const spineY = iy + ih * 0.5;
        ctx.strokeStyle = "rgba(90,155,184,0.35)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(ix + 8, spineY);
        ctx.lineTo(ix + iw - 8, spineY);
        ctx.stroke();
        ctx.strokeStyle = "rgba(246,241,231,0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(ix + 8, spineY - 14);
        ctx.lineTo(ix + iw * 0.62, spineY - 14);
        ctx.moveTo(ix + 8, spineY + 14);
        ctx.lineTo(ix + iw * 0.62, spineY + 14);
        ctx.stroke();
      } else {
        const spineX = ix + iw * 0.5;
        ctx.strokeStyle = "rgba(90,155,184,0.35)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(spineX, iy + 8);
        ctx.lineTo(spineX, iy + ih - 8);
        ctx.stroke();
      }

      type BayH = { x0: number; x1: number };
      type BayV = { y0: number; y1: number };
      const baysH: BayH[] = [
        { x0: 0.02, x1: 0.14 },
        { x0: 0.14, x1: 0.28 },
        { x0: 0.28, x1: 0.42 },
        { x0: 0.42, x1: 0.54 },
        { x0: 0.54, x1: 0.78 },
        { x0: 0.78, x1: 0.98 },
      ];
      const baysV: BayV[] = [
        { y0: 0.02, y1: 0.16 },
        { y0: 0.16, y1: 0.3 },
        { y0: 0.3, y1: 0.44 },
        { y0: 0.44, y1: 0.58 },
        { y0: 0.58, y1: 0.78 },
        { y0: 0.78, y1: 0.98 },
      ];

      const wallAlpha = 0.35 + stage * 0.35;
      ctx.strokeStyle = `rgba(246,241,231,${wallAlpha})`;
      ctx.lineWidth = 1.25;
      if (!portrait) {
        for (let i = 1; i < 5; i++) {
          const bx = ix + iw * baysH[i]!.x0;
          ctx.beginPath();
          ctx.moveTo(bx, iy + 6);
          ctx.lineTo(bx, iy + ih - 6);
          ctx.stroke();
          ctx.fillStyle = C.elevated;
          ctx.fillRect(bx - 3, iy + ih * 0.35, 6, ih * 0.3);
        }
      } else {
        for (let i = 1; i < 5; i++) {
          const by = iy + ih * baysV[i]!.y0;
          ctx.beginPath();
          ctx.moveTo(ix + 6, by);
          ctx.lineTo(ix + iw - 6, by);
          ctx.stroke();
        }
      }

      {
        const s = Math.max(stage, 0.25);
        ctx.fillStyle = `rgba(26,37,45,${0.25 + s * 0.45})`;
        if (!portrait) {
          const b = baysH[1]!;
          const cx = ix + iw * b.x0;
          const cw = iw * (b.x1 - b.x0);
          ctx.fillRect(cx + 2, iy + ih * 0.18, cw - 4, ih * 0.64);
          ctx.strokeStyle = `rgba(90,155,184,${0.2 + s * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(cx + 2, iy + ih * 0.18, cw - 4, ih * 0.64);
        } else {
          const b = baysV[1]!;
          const cy = iy + ih * b.y0;
          const ch = ih * (b.y1 - b.y0);
          ctx.fillRect(ix + iw * 0.12, cy + 2, iw * 0.76, ch - 4);
          ctx.strokeStyle = `rgba(90,155,184,${0.2 + s * 0.5})`;
          ctx.strokeRect(ix + iw * 0.12, cy + 2, iw * 0.76, ch - 4);
        }
      }

      if (constrain > 0.01) {
        const squeeze = mix(0.22, 0.08, constrain);
        ctx.fillStyle = `rgba(7,9,11,${0.45 + constrain * 0.4})`;
        if (!portrait) {
          const b = baysH[2]!;
          const cx = ix + iw * b.x0;
          const cw = iw * (b.x1 - b.x0);
          ctx.beginPath();
          ctx.moveTo(cx, iy);
          ctx.lineTo(cx + cw, iy);
          ctx.lineTo(cx + cw, iy + ih * (0.5 - squeeze));
          ctx.lineTo(cx, iy + ih * (0.5 - squeeze * 0.6));
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(cx, iy + ih);
          ctx.lineTo(cx + cw, iy + ih);
          ctx.lineTo(cx + cw, iy + ih * (0.5 + squeeze));
          ctx.lineTo(cx, iy + ih * (0.5 + squeeze * 0.6));
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = `rgba(169,121,59,${0.3 + constrain * 0.5})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx + 4, iy + ih * 0.5);
          ctx.lineTo(cx + cw - 4, iy + ih * 0.5);
          ctx.stroke();
        } else {
          const b = baysV[2]!;
          const cy = iy + ih * b.y0;
          const ch = ih * (b.y1 - b.y0);
          const side = mix(0.2, 0.08, constrain);
          ctx.fillRect(ix, cy, iw * side, ch);
          ctx.fillRect(ix + iw * (1 - side), cy, iw * side, ch);
        }
      }

      if (validate > 0.01) {
        ctx.fillStyle = `rgba(47,94,115,${0.15 + validate * 0.35})`;
        if (!portrait) {
          const b = baysH[3]!;
          const cx = ix + iw * b.x0;
          const cw = iw * (b.x1 - b.x0);
          ctx.fillRect(cx + cw * 0.35, iy + ih * 0.15, cw * 0.3, ih * 0.7);
          ctx.fillStyle = C.porcelain;
          ctx.globalAlpha = 0.5 + validate * 0.5;
          ctx.fillRect(cx + cw * 0.45, iy + ih * 0.15, 3, ih * 0.7);
          ctx.globalAlpha = 1;
          for (let i = 0; i < 3; i++) {
            const ny = iy + ih * (0.28 + i * 0.2);
            ctx.fillStyle = C.signal;
            ctx.beginPath();
            ctx.arc(cx + cw * 0.5, ny, 4 + validate * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          const b = baysV[3]!;
          const cy = iy + ih * b.y0;
          const ch = ih * (b.y1 - b.y0);
          ctx.fillRect(ix + iw * 0.15, cy + ch * 0.35, iw * 0.7, ch * 0.3);
        }
      }

      if (decide > 0.01) {
        ctx.globalAlpha = Math.min(1, decide * 1.2);
        if (!portrait) {
          const b = baysH[4]!;
          const cx = ix + iw * b.x0;
          const cw = iw * (b.x1 - b.x0);
          const midY = iy + ih * 0.5;
          ctx.strokeStyle = "rgba(246,241,231,0.2)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cx, midY);
          ctx.lineTo(cx + cw * 0.9, midY);
          ctx.stroke();

          ctx.strokeStyle = C.abortBright;
          ctx.lineWidth = 3.5;
          ctx.shadowColor = C.abortBright;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.moveTo(cx + 8, midY - 10);
          ctx.bezierCurveTo(
            cx + cw * 0.4,
            midY - 18,
            cx + cw * 0.55,
            iy + ih * 0.22,
            cx + cw * 0.85,
            iy + ih * 0.2,
          );
          ctx.stroke();
          ctx.shadowBlur = 0;
          const ax = cx + cw * 0.85;
          const ay = iy + ih * 0.2;
          ctx.fillStyle = C.abort;
          ctx.beginPath();
          ctx.moveTo(ax, ay - 10);
          ctx.lineTo(ax + 10, ay);
          ctx.lineTo(ax, ay + 10);
          ctx.lineTo(ax - 10, ay);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = C.abortBright;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.font = "600 11px IBM Plex Sans, system-ui, sans-serif";
          ctx.fillStyle = C.porcelain;
          ctx.textAlign = "center";
          ctx.fillText("ABORT", ax, ay + 24);

          ctx.strokeStyle = C.oxideBright;
          ctx.lineWidth = 3.5;
          ctx.shadowColor = C.oxideBright;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.moveTo(cx + 8, midY + 10);
          ctx.bezierCurveTo(
            cx + cw * 0.4,
            midY + 18,
            cx + cw * 0.55,
            iy + ih * 0.78,
            cx + cw * 0.85,
            iy + ih * 0.8,
          );
          ctx.stroke();
          ctx.shadowBlur = 0;
          const cmx = cx + cw * 0.85;
          const cmy = iy + ih * 0.8;
          ctx.fillStyle = C.oxide;
          ctx.fillRect(cmx - 9, cmy - 9, 18, 18);
          ctx.strokeStyle = C.oxideBright;
          ctx.lineWidth = 2;
          ctx.strokeRect(cmx - 9, cmy - 9, 18, 18);
          ctx.fillStyle = C.porcelain;
          ctx.fillText("COMMIT", cmx, cmy + 26);
        } else {
          const b = baysV[4]!;
          const cy = iy + ih * b.y0;
          const ch = ih * (b.y1 - b.y0);
          ctx.strokeStyle = C.abortBright;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(ix + iw * 0.5, cy + 4);
          ctx.lineTo(ix + iw * 0.22, cy + ch * 0.55);
          ctx.stroke();
          const ax = ix + iw * 0.22;
          const ay = cy + ch * 0.55;
          ctx.fillStyle = C.abort;
          ctx.beginPath();
          ctx.moveTo(ax, ay - 8);
          ctx.lineTo(ax + 8, ay);
          ctx.lineTo(ax, ay + 8);
          ctx.lineTo(ax - 8, ay);
          ctx.closePath();
          ctx.fill();
          ctx.font = "600 10px IBM Plex Sans, system-ui, sans-serif";
          ctx.fillStyle = C.porcelain;
          ctx.textAlign = "center";
          ctx.fillText("ABORT", ax, ay + 20);

          ctx.strokeStyle = C.oxideBright;
          ctx.beginPath();
          ctx.moveTo(ix + iw * 0.5, cy + 4);
          ctx.lineTo(ix + iw * 0.78, cy + ch * 0.55);
          ctx.stroke();
          const cmx = ix + iw * 0.78;
          const cmy = cy + ch * 0.55;
          ctx.fillStyle = C.oxide;
          ctx.fillRect(cmx - 8, cmy - 8, 16, 16);
          ctx.fillStyle = C.porcelain;
          ctx.fillText("COMMIT", cmx, cmy + 20);
        }
        ctx.globalAlpha = 1;
      }

      if (emit > 0.01) {
        ctx.globalAlpha = emit;
        if (!portrait) {
          const b = baysH[5]!;
          const cx = ix + iw * b.x0;
          const cw = iw * (b.x1 - b.x0);
          const trayY = iy + ih * 0.38;
          const trayH = ih * 0.24;
          ctx.fillStyle = C.elevated;
          roundRect(cx + 4, trayY, cw - 8, trayH, 6);
          ctx.fill();
          ctx.strokeStyle = "rgba(246,241,231,0.18)";
          ctx.stroke();
          const capW = mix(28, 56, emit);
          const capH = 28;
          const capX = cx + cw * 0.35 + emit * 8;
          const capY = trayY + trayH * 0.5 - capH / 2;
          ctx.fillStyle = C.archive;
          roundRect(capX, capY, capW, capH, 6);
          ctx.fill();
          ctx.strokeStyle = "rgba(26,31,36,0.35)";
          ctx.stroke();
          ctx.strokeStyle = "rgba(26,31,36,0.25)";
          for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(capX + 8, capY + 8 + i * 6);
            ctx.lineTo(capX + capW - 8 - i * 4, capY + 8 + i * 6);
            ctx.stroke();
          }
        } else {
          const b = baysV[5]!;
          const cy = iy + ih * b.y0;
          const ch = ih * (b.y1 - b.y0);
          ctx.fillStyle = C.elevated;
          roundRect(ix + iw * 0.2, cy + 6, iw * 0.6, ch - 12, 6);
          ctx.fill();
          ctx.fillStyle = C.archive;
          roundRect(ix + iw * 0.32, cy + ch * 0.3, iw * 0.36, ch * 0.4, 5);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      const packetT = smoothstep(0.02, 0.72, p);
      const packetVis = 1 - emit * 0.85;
      if (packetVis > 0.05) {
        let px: number, py: number;
        if (!portrait) {
          px = mix(ix + iw * 0.06, ix + iw * 0.52, packetT);
          py =
            iy +
            ih * 0.5 +
            (reduced ? 0 : Math.sin(timeRef.current * 1.4) * 3);
        } else {
          px = ix + iw * 0.5;
          py = mix(iy + ih * 0.08, iy + ih * 0.52, packetT);
        }
        ctx.fillStyle = `rgba(90,155,184,${0.35 * packetVis})`;
        ctx.beginPath();
        ctx.arc(px, py, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(246,241,231,${0.92 * packetVis})`;
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-6, -6, 12, 12);
        ctx.restore();
        ctx.strokeStyle = C.institutionBright;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(px - 7, py - 7, 14, 14);
        ctx.stroke();
      }

      ctx.font = "500 9px IBM Plex Mono, ui-monospace, monospace";
      ctx.fillStyle = "rgba(246,241,231,0.28)";
      ctx.textAlign = "left";
      ctx.fillText(
        "TXN CROSS-SECTION · ATMOSPHERIC",
        shellX + 14,
        shellY + shellH - 10,
      );
    };

    const schedule = () => {
      if (!runningRef.current || pausedRef.current || reduced) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };

    const loop = () => {
      if (!runningRef.current) return;
      if (pausedRef.current || reduced) {
        publishDebug();
        return;
      }
      timeRef.current += 0.016;
      draw();
      publishDebug();
      rafRef.current = requestAnimationFrame(loop);
    };

    /** Viewport geometry check — reliable when sticky pin scrolls away */
    const isCanvasInView = () => {
      const rect = canvas.getBoundingClientRect();
      return (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.bottom > 1 &&
        rect.top < window.innerHeight - 1 &&
        rect.right > 1 &&
        rect.left < window.innerWidth - 1
      );
    };

    const applyVisibility = () => {
      const shouldPause = document.hidden || !isCanvasInView();
      if (shouldPause) {
        setPaused(true);
        cancelAnimationFrame(rafRef.current);
        publishDebug();
      } else if (pausedRef.current) {
        setPaused(false);
        if (reduced) {
          draw();
          publishDebug();
        } else {
          schedule();
        }
      } else {
        publishDebug();
      }
    };

    const onVisibility = () => applyVisibility();
    const onScrollOrResize = () => applyVisibility();

    const io = new IntersectionObserver(
      ([entry]) => {
        const off =
          !entry ||
          !entry.isIntersecting ||
          entry.intersectionRatio <= 0.01;
        if (off || document.hidden) {
          setPaused(true);
          cancelAnimationFrame(rafRef.current);
          publishDebug();
        } else {
          setPaused(false);
          if (reduced) {
            draw();
            publishDebug();
          } else {
            schedule();
          }
        }
      },
      { threshold: [0, 0.01, 0.1, 0.25, 0.5, 1], rootMargin: "0px" },
    );
    io.observe(canvas);

    resize();
    // Reduced: single composed draw, no rAF animation loop
    draw();
    publishDebug();
    const ro = new ResizeObserver(() => {
      resize();
      if (!pausedRef.current) draw();
      applyVisibility();
    });
    ro.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    if (!reduced) {
      schedule();
    }
    applyVisibility();

    return () => {
      runningRef.current = false;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      clearDebug();
    };
  }, [reduced]);

  useEffect(() => {
    void progress;
  }, [progress]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
      data-instrument="cross-section"
    />
  );
}
