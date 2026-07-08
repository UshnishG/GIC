import { useEffect, useRef } from "react";

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      const count = Math.min(90, Math.floor((w * h) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(160, 220, 255, 0.55)";
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(120, 200, 255, ${0.15 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 160) {
          ctx.strokeStyle = `rgba(140, 230, 255, ${0.4 * (1 - d / 160)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden
    />
  );
}

export function OrbGlobe() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--cyan)_60%,transparent),transparent_60%)] blur-2xl animate-pulse-glow" />
      <div className="absolute inset-4 rounded-full border border-white/10 animate-spin-slow"
        style={{ background: "conic-gradient(from 0deg, transparent, color-mix(in oklab, var(--cyan) 30%, transparent), transparent 60%)" }} />
      <div className="absolute inset-10 rounded-full border border-white/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "60s" }} />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="globe" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.55 0.22 260)" stopOpacity="0.9" />
            <stop offset="70%" stopColor="oklch(0.28 0.15 260)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.14 0.04 260)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="140" fill="url(#globe)" />
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={`h${i}`}
            cx="200" cy="200"
            rx="140" ry={140 - i * 18}
            fill="none"
            stroke="rgba(140, 220, 255, 0.25)"
            strokeWidth="0.8"
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <ellipse
            key={`v${i}`}
            cx="200" cy="200"
            rx={140 - Math.abs(i - 5) * 22} ry="140"
            fill="none"
            stroke="rgba(140, 220, 255, 0.2)"
            strokeWidth="0.8"
          />
        ))}
        {[
          [0.2, 0.35], [0.7, 0.3], [0.55, 0.55], [0.35, 0.7], [0.8, 0.65], [0.25, 0.55], [0.6, 0.4],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={80 + x * 240} cy={80 + y * 240} r="4" fill="oklch(0.82 0.16 210)">
              <animate attributeName="r" values="3;6;3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={80 + x * 240} cy={80 + y * 240} r="10" fill="oklch(0.82 0.16 210)" opacity="0.2">
              <animate attributeName="r" values="8;18;8" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}
