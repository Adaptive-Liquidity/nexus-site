import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Palette from design tokens (sampled once into canvas — no raw branding hex in JSX) */
const C = {
  void: "#07090b",
  carbon: "#111820",
  porcelain: "#f6f1e7",
  institution: "#2f5e73",
  institutionBright: "#5a9bb8",
  oxide: "#496f59",
  oxideBright: "#7ab089",
  abort: "#7a3e3e",
  abortBright: "#c07070",
  archive: "#eee7d8",
  archiveInk: "#1a1f24",
  signal: "#a9793b",
};

type Particle = {
  x: number;
  y: number;
  z: number;
  s: number;
  a: number;
  vx: number;
  vy: number;
};

function smoothstep(e0: number, e1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/**
 * Full-bleed cinematic commit-boundary scene.
 * Atmospheric only — not product evidence.
 */
export function CommitBoundaryCanvas({
  progress,
  className,
}: {
  /** 0…1 scroll narrative progress */
  progress: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(progress);
  const reduced = useReducedMotion();
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);
  const rafRef = useRef(0);

  progressRef.current = progress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;

    const seedParticles = () => {
      const n = Math.min(140, Math.floor((w * h) / 12000));
      const list: Particle[] = [];
      for (let i = 0; i < n; i++) {
        list.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random(),
          s: 0.4 + Math.random() * 1.8,
          a: 0.08 + Math.random() * 0.35,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.08 - 0.02,
        });
      }
      particlesRef.current = list;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    };

    const drawSoftCircle = (
      x: number,
      y: number,
      r: number,
      color: string,
      alpha: number,
    ) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, color);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = alpha;
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const frame = (now: number) => {
      const p = Math.min(1, Math.max(0, progressRef.current));
      const dt = reduced ? 0 : 0.016;
      timeRef.current += reduced ? 0 : dt;
      const t = timeRef.current;

      // Narrative phases
      const stage = smoothstep(0.08, 0.28, p);
      const constrain = smoothstep(0.28, 0.48, p);
      const validate = smoothstep(0.48, 0.62, p);
      const decide = smoothstep(0.58, 0.78, p);
      const emit = smoothstep(0.78, 0.95, p);

      // Background void + atmospheric depth
      ctx.fillStyle = C.void;
      ctx.fillRect(0, 0, w, h);

      // Deep fog bands
      drawSoftCircle(w * 0.35, h * 0.55, h * 0.7, C.carbon, 0.55);
      drawSoftCircle(w * 0.7, h * 0.35, h * 0.55, C.institution, 0.12 + validate * 0.12);
      drawSoftCircle(w * 0.15, h * 0.8, h * 0.4, C.oxide, 0.06);

      // Horizon floor plane
      const floorY = h * 0.72;
      const floorGrad = ctx.createLinearGradient(0, floorY - 40, 0, h);
      floorGrad.addColorStop(0, "rgba(0,0,0,0)");
      floorGrad.addColorStop(0.3, "rgba(17,24,32,0.4)");
      floorGrad.addColorStop(1, "rgba(7,9,11,0.95)");
      ctx.fillStyle = floorGrad;
      ctx.fillRect(0, floorY - 40, w, h - floorY + 40);

      // Subtle perspective grid on floor (fades — atmospheric, not UI chrome)
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, floorY, w, h - floorY);
      ctx.clip();
      ctx.strokeStyle = `rgba(246,241,231,${0.03 + stage * 0.04})`;
      ctx.lineWidth = 1;
      const vanishX = w * 0.55;
      for (let i = 0; i < 12; i++) {
        const x = mix(-w * 0.2, w * 1.2, i / 11);
        ctx.beginPath();
        ctx.moveTo(x, h);
        ctx.lineTo(vanishX, floorY);
        ctx.stroke();
      }
      for (let j = 0; j < 6; j++) {
        const y = floorY + ((h - floorY) * j) / 5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.restore();

      // Constrain walls — closing aperture
      const wallOpen = mix(0.42, 0.18, constrain);
      const wallLeft = w * (0.5 - wallOpen);
      const wallRight = w * (0.5 + wallOpen * 0.35 + 0.08);
      if (constrain > 0.01) {
        ctx.fillStyle = `rgba(7,9,11,${0.35 + constrain * 0.45})`;
        // top squeeze
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(w, 0);
        ctx.lineTo(w, h * 0.12 * constrain);
        ctx.lineTo(wallRight, h * (0.28 + constrain * 0.08));
        ctx.lineTo(wallLeft, h * (0.28 + constrain * 0.08));
        ctx.lineTo(0, h * 0.12 * constrain);
        ctx.closePath();
        ctx.fill();
        // bottom squeeze
        ctx.beginPath();
        ctx.moveTo(0, h);
        ctx.lineTo(w, h);
        ctx.lineTo(w, h - h * 0.15 * constrain);
        ctx.lineTo(wallRight, h * (0.68 - constrain * 0.05));
        ctx.lineTo(wallLeft, h * (0.68 - constrain * 0.05));
        ctx.lineTo(0, h - h * 0.15 * constrain);
        ctx.closePath();
        ctx.fill();
      }

      // Stage chamber silhouette (left)
      if (stage > 0.02) {
        const chX = w * 0.08;
        const chY = h * 0.22;
        const chW = w * (0.32 - constrain * 0.08);
        const chH = h * 0.48;
        ctx.fillStyle = `rgba(17,24,32,${0.25 + stage * 0.35})`;
        roundRect(ctx, chX, chY, chW, chH, 24);
        ctx.fill();
        // rim light
        ctx.strokeStyle = `rgba(47,94,115,${0.15 + stage * 0.35})`;
        ctx.lineWidth = 1.5;
        roundRect(ctx, chX, chY, chW, chH, 24);
        ctx.stroke();
      }

      // Commit plane — dominant vertical light wall
      const planeX = mix(w * 0.72, w * 0.55, smoothstep(0, 0.55, p));
      const planeH = h * (0.55 + validate * 0.2);
      const planeTop = (h - planeH) / 2 - h * 0.04;
      const planeAlpha = 0.35 + stage * 0.3 + validate * 0.55;

      // Outer bloom
      const bloom = ctx.createLinearGradient(planeX - 80, 0, planeX + 80, 0);
      bloom.addColorStop(0, "rgba(47,94,115,0)");
      bloom.addColorStop(0.45, `rgba(90,155,184,${planeAlpha * 0.35})`);
      bloom.addColorStop(0.5, `rgba(246,241,231,${planeAlpha * 0.55})`);
      bloom.addColorStop(0.55, `rgba(90,155,184,${planeAlpha * 0.35})`);
      bloom.addColorStop(1, "rgba(47,94,115,0)");
      ctx.fillStyle = bloom;
      ctx.fillRect(planeX - 120, planeTop - 30, 240, planeH + 60);

      // Core plane edge
      const core = ctx.createLinearGradient(0, planeTop, 0, planeTop + planeH);
      core.addColorStop(0, "rgba(246,241,231,0)");
      core.addColorStop(0.15, `rgba(246,241,231,${0.4 + validate * 0.4})`);
      core.addColorStop(0.5, `rgba(246,241,231,${0.85 + validate * 0.15})`);
      core.addColorStop(0.85, `rgba(246,241,231,${0.4 + validate * 0.4})`);
      core.addColorStop(1, "rgba(246,241,231,0)");
      ctx.fillStyle = core;
      ctx.fillRect(planeX - 2, planeTop, 4, planeH);

      // Validate scan pulses
      if (validate > 0.05) {
        for (let i = 0; i < 3; i++) {
          const sy =
            planeTop +
            planeH * (0.25 + i * 0.25) +
            Math.sin(t * 2 + i) * (reduced ? 0 : 4);
          ctx.fillStyle = `rgba(169,121,59,${0.25 + validate * 0.5})`;
          ctx.beginPath();
          ctx.arc(planeX, sy, 3 + validate * 2, 0, Math.PI * 2);
          ctx.fill();
          drawSoftCircle(planeX, sy, 18, C.signal, 0.15 * validate);
        }
      }

      // Floor reflection of plane
      drawSoftCircle(planeX, floorY + 8, 60 + validate * 40, C.institutionBright, 0.12 + validate * 0.1);

      // Action packet travel
      const packetT = smoothstep(0.02, 0.72, p);
      const packetX = mix(w * 0.18, planeX - 18, packetT);
      const packetY =
        h * 0.48 +
        Math.sin(t * 1.2) * (reduced ? 0 : 6) * (1 - emit) -
        emit * h * 0.02;
      const packetScale = mix(1, 0.55, emit);
      const packetVis = 1 - emit * 0.85;

      // Trail
      if (packetT > 0.05 && packetVis > 0.1) {
        const trail = ctx.createLinearGradient(w * 0.12, packetY, packetX, packetY);
        trail.addColorStop(0, "rgba(90,155,184,0)");
        trail.addColorStop(1, `rgba(90,155,184,${0.25 * packetVis})`);
        ctx.strokeStyle = trail;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w * 0.14, packetY);
        ctx.lineTo(packetX, packetY);
        ctx.stroke();
      }

      // Packet glow layers
      if (packetVis > 0.05) {
        drawSoftCircle(packetX, packetY, 110 * packetScale, C.institutionBright, 0.28 * packetVis);
        drawSoftCircle(packetX, packetY, 58 * packetScale, C.porcelain, 0.28 * packetVis);
        drawSoftCircle(packetX, packetY, 28 * packetScale, C.porcelain, 0.7 * packetVis);
        // Core diamond
        ctx.save();
        ctx.translate(packetX, packetY);
        ctx.scale(packetScale, packetScale);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = `rgba(246,241,231,${0.9 * packetVis})`;
        ctx.fillRect(-7, -7, 14, 14);
        ctx.restore();
      }

      // Dual paths after plane — Commit (oxide) and Abort (controlled red)
      if (decide > 0.01) {
        const forkOriginX = planeX + 6;
        const forkOriginY = h * 0.48;
        const abortEndX = w * 0.86;
        const abortEndY = h * 0.18;
        const commitEndX = w * 0.88;
        const commitEndY = h * 0.72;

        // Abort path — upward
        ctx.save();
        ctx.globalAlpha = Math.min(1, decide * 1.15);
        const abortGrad = ctx.createLinearGradient(
          forkOriginX,
          forkOriginY,
          abortEndX,
          abortEndY,
        );
        abortGrad.addColorStop(0, "rgba(192,112,112,1)");
        abortGrad.addColorStop(1, "rgba(192,112,112,0.15)");
        ctx.strokeStyle = abortGrad;
        ctx.lineWidth = 3.5;
        ctx.shadowColor = C.abortBright;
        ctx.shadowBlur = 22;
        ctx.beginPath();
        ctx.moveTo(forkOriginX, forkOriginY - 10);
        ctx.bezierCurveTo(
          w * 0.64,
          h * 0.4,
          w * 0.74,
          h * 0.26,
          abortEndX,
          abortEndY,
        );
        ctx.stroke();
        drawSoftCircle(abortEndX, abortEndY, 48, C.abortBright, 0.45 * decide);
        // Abort node + label
        ctx.shadowBlur = 0;
        ctx.fillStyle = C.abort;
        ctx.beginPath();
        ctx.arc(abortEndX, abortEndY, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = C.abortBright;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.font = "600 12px IBM Plex Sans, system-ui, sans-serif";
        ctx.fillStyle = C.porcelain;
        ctx.textAlign = "center";
        ctx.fillText("ABORT", abortEndX, abortEndY + 28);
        ctx.restore();

        // Commit path — forward-down
        ctx.save();
        ctx.globalAlpha = Math.min(1, decide * 1.15);
        const commitGrad = ctx.createLinearGradient(
          forkOriginX,
          forkOriginY,
          commitEndX,
          commitEndY,
        );
        commitGrad.addColorStop(0, "rgba(122,176,137,1)");
        commitGrad.addColorStop(1, "rgba(122,176,137,0.15)");
        ctx.strokeStyle = commitGrad;
        ctx.lineWidth = 3.5;
        ctx.shadowColor = C.oxideBright;
        ctx.shadowBlur = 22;
        ctx.beginPath();
        ctx.moveTo(forkOriginX, forkOriginY + 10);
        ctx.bezierCurveTo(
          w * 0.64,
          h * 0.54,
          w * 0.78,
          h * 0.64,
          commitEndX,
          commitEndY,
        );
        ctx.stroke();
        drawSoftCircle(commitEndX, commitEndY, 48, C.oxideBright, 0.45 * decide);
        ctx.shadowBlur = 0;
        ctx.fillStyle = C.oxide;
        ctx.beginPath();
        ctx.arc(commitEndX, commitEndY, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = C.oxideBright;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.font = "600 12px IBM Plex Sans, system-ui, sans-serif";
        ctx.fillStyle = C.porcelain;
        ctx.textAlign = "center";
        ctx.fillText("COMMIT", commitEndX, commitEndY + 28);
        ctx.restore();
      }

      // Emitted Proof Capsule — warm archive object (visual metaphor only)
      if (emit > 0.01) {
        const cx = mix(planeX + 30, w * 0.72, emit);
        const cy = mix(h * 0.48, h * 0.42, emit);
        const cw = 56 + emit * 20;
        const ch = 32 + emit * 8;
        ctx.save();
        ctx.globalAlpha = emit;
        drawSoftCircle(cx, cy, 70, C.archive, 0.25);
        ctx.fillStyle = C.archive;
        roundRect(ctx, cx - cw / 2, cy - ch / 2, cw, ch, 8);
        ctx.fill();
        ctx.strokeStyle = "rgba(26,31,36,0.25)";
        ctx.lineWidth = 1;
        roundRect(ctx, cx - cw / 2, cy - ch / 2, cw, ch, 8);
        ctx.stroke();
        // micro lines (not readable fake data — pure texture)
        ctx.strokeStyle = "rgba(26,31,36,0.2)";
        for (let i = 0; i < 3; i++) {
          const ly = cy - 6 + i * 6;
          ctx.beginPath();
          ctx.moveTo(cx - cw / 2 + 10, ly);
          ctx.lineTo(cx + cw / 2 - 10 - i * 6, ly);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Floating particles
      for (const pt of particlesRef.current) {
        if (!reduced) {
          pt.x += pt.vx + Math.sin(t + pt.y) * 0.02;
          pt.y += pt.vy;
          if (pt.x < 0) pt.x = w;
          if (pt.x > w) pt.x = 0;
          if (pt.y < 0) pt.y = h;
          if (pt.y > h) pt.y = 0;
        }
        const depth = 0.3 + pt.z * 0.7;
        // Attract slightly toward plane when validating
        const attract = validate * 0.15;
        const dx = planeX - pt.x;
        ctx.fillStyle = `rgba(246,241,231,${pt.a * depth * (0.4 + validate * 0.3)})`;
        ctx.beginPath();
        ctx.arc(
          pt.x + dx * attract * 0.02,
          pt.y,
          pt.s * depth,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }

      // Vignette
      const vig = ctx.createRadialGradient(
        w * 0.5,
        h * 0.45,
        h * 0.2,
        w * 0.5,
        h * 0.5,
        h * 0.85,
      );
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(7,9,11,0.72)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);

      rafRef.current = requestAnimationFrame(frame);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
    />
  );
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}
