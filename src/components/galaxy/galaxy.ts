export interface GalaxyLayer {
  depth: number;               // 0..1, más alto = más cerca
  parallax: number;            // px de desplazamiento con el mouse
  drift: number;               // px/s de deriva horizontal
  size: [number, number];      // radio mín/máx
  alpha: [number, number];     // opacidad mín/máx
}

export interface GalaxyConfig {
  density: number;             // estrellas por px²
  maxStars: number;            // tope para cuidar rendimiento
  bandShare: number;           // % de estrellas concentradas en la banda
  bandAngle: number;           // inclinación de la banda (radianes)
  bandWidth: number;           // grosor de la banda (fracción del lado menor)
  layers: GalaxyLayer[];
  tints: string[];
  pointerRadius: number;       // radio del halo alrededor del cursor (px)
  pointerPush: number;         // cuánto se apartan las estrellas (px)
  glow: number;                // intensidad de la nebulosa (0 = apagada)
  ease: number;                // suavidad del seguimiento del mouse
}

interface Star {
  x: number;
  y: number;
  layer: GalaxyLayer;
  r: number;
  a: number;
  phase: number;
  speed: number;
  tint: string;
}

interface Vec {
  x: number;
  y: number;
}

export const DEFAULT_CONFIG: GalaxyConfig = {
  density: 0.00009,
  maxStars: 260,
  bandShare: 0.55,
  bandAngle: -0.45,
  bandWidth: 0.16,
  layers: [
    { depth: 0.25, parallax: 6,  drift: 2, size: [0.4, 0.8], alpha: [0.2, 0.45] },
    { depth: 0.6,  parallax: 14, drift: 4, size: [0.6, 1.1], alpha: [0.3, 0.6] },
    { depth: 1,    parallax: 28, drift: 7, size: [0.9, 1.6], alpha: [0.45, 0.85] },
  ],
  tints: ["#ffffff", "#ffffff", "#cfe0ff", "#e7d8ff"],
  pointerRadius: 160,
  pointerPush: 10,
  glow: 0.5,
  ease: 0.06,
};

/** Inicia el fondo. Devuelve la función de limpieza. */
export function initGalaxy(
  canvas: HTMLCanvasElement,
  userConfig: Partial<GalaxyConfig> = {},
): () => void {
  const CONFIG: GalaxyConfig = { ...DEFAULT_CONFIG, ...userConfig };

  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return () => {};
  const ctx: CanvasRenderingContext2D = context;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let w = 0;
  let h = 0;
  let stars: Star[] = [];
  let raf = 0;

  const pointer = { x: 0, y: 0, active: false };
  const target: Vec = { x: 0, y: 0 };  // -1..1, hacia donde va el parallax
  const offset: Vec = { x: 0, y: 0 };  // valor suavizado actual

  const rand = (a: number, b: number): number => a + Math.random() * (b - a);
  const gauss = (): number =>
    (Math.random() + Math.random() + Math.random() + Math.random() - 2) / 2;

  function build(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(CONFIG.maxStars, Math.round(w * h * CONFIG.density));
    const cos = Math.cos(CONFIG.bandAngle);
    const sin = Math.sin(CONFIG.bandAngle);

    stars = Array.from({ length: count }, (): Star => {
      const layer = CONFIG.layers[Math.floor(Math.random() * CONFIG.layers.length)];
      let x: number;
      let y: number;

      if (Math.random() < CONFIG.bandShare) {
        const along = rand(-0.6, 0.6) * Math.hypot(w, h);
        const across = gauss() * CONFIG.bandWidth * Math.min(w, h);
        x = w / 2 + along * cos - across * sin;
        y = h / 2 + along * sin + across * cos;
      } else {
        x = rand(0, w);
        y = rand(0, h);
      }

      return {
        x,
        y,
        layer,
        r: rand(...layer.size),
        a: rand(...layer.alpha),
        phase: rand(0, Math.PI * 2),
        speed: rand(0.4, 1.2),
        tint: CONFIG.tints[Math.floor(Math.random() * CONFIG.tints.length)],
      };
    });
  }

  function drawNebula(isDark: boolean): void {
    const ox = -offset.x * 10;
    const oy = -offset.y * 10;
    const R = Math.max(w, h) * 0.5;
    const blobs = [
      { x: w * 0.3,  y: h * 0.35, c: isDark ? "90,80,200" : "160,180,220",  a: 0.1 },
      { x: w * 0.72, y: h * 0.62, c: isDark ? "60,120,220" : "180,200,240", a: 0.07 },
    ];

    for (const b of blobs) {
      const g = ctx.createRadialGradient(b.x + ox, b.y + oy, 0, b.x + ox, b.y + oy, R);
      g.addColorStop(0, `rgba(${b.c},${b.a * CONFIG.glow})`);
      g.addColorStop(1, isDark ? "rgba(0,0,0,0)" : "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
  }

  function render(time: number): void {
    const t = time / 1000;
    const isDark = document.documentElement.classList.contains('dark');

    offset.x += (target.x - offset.x) * CONFIG.ease;
    offset.y += (target.y - offset.y) * CONFIG.ease;

    ctx.globalAlpha = 1;
    ctx.fillStyle = isDark ? "#000" : "#fff";
    ctx.fillRect(0, 0, w, h);
    drawNebula(isDark);

    for (const s of stars) {
      const L = s.layer;
      let x = s.x - offset.x * L.parallax + t * L.drift;
      let y = s.y - offset.y * L.parallax;
      x = ((x % w) + w) % w;
      y = ((y % h) + h) % h;

      let a = s.a * (0.75 + 0.25 * Math.sin(t * s.speed + s.phase));

      if (pointer.active) {
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const d = Math.hypot(dx, dy);
        if (d < CONFIG.pointerRadius) {
          const k = 1 - d / CONFIG.pointerRadius;
          a = Math.min(1, a + k * 0.5);
          x += (dx / (d || 1)) * k * CONFIG.pointerPush * L.depth;
          y += (dy / (d || 1)) * k * CONFIG.pointerPush * L.depth;
        }
      }

      ctx.globalAlpha = a;
      ctx.fillStyle = isDark ? s.tint : "#000000";
      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function loop(time: number): void {
    render(time);
    raf = requestAnimationFrame(loop);
  }

  function start(): void {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
  }

  const onMove = (e: PointerEvent): void => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
    target.x = (e.clientX / w - 0.5) * 2;
    target.y = (e.clientY / h - 0.5) * 2;
  };

  const onLeave = (): void => {
    pointer.active = false;
    target.x = 0;
    target.y = 0;
  };

  const onResize = (): void => {
    build();
    start();
  };

  const onVisibility = (): void => {
    if (document.hidden) cancelAnimationFrame(raf);
    else start();
  };

  window.addEventListener("pointermove", onMove, { passive: true });
  document.addEventListener("pointerleave", onLeave);
  window.addEventListener("resize", onResize);
  document.addEventListener("visibilitychange", onVisibility);
  reduceMotion.addEventListener("change", start);

  build();
  start();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerleave", onLeave);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("visibilitychange", onVisibility);
    reduceMotion.removeEventListener("change", start);
  };
}
