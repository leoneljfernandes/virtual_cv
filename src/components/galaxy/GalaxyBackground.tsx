import { useEffect, useRef } from "react";
import { initGalaxy, type GalaxyConfig } from "./galaxy";
import "./galaxy.css";

interface GalaxyProps {
  /** Se lee una sola vez al montar. Para cambiarla, usá una `key` distinta. */
  config?: Partial<GalaxyConfig>;
}

export function Galaxy({ config }: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const configRef = useRef(config);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    return initGalaxy(canvas, configRef.current); // devuelve la limpieza
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="galaxy-canvas" aria-hidden="true" />
      <div className="galaxy-veil" aria-hidden="true" />
    </>
  );
}

export default Galaxy;
