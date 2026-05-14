import { useEffect, useRef, useState } from "react";

/** Atualiza variáveis CSS do brilho que segue o cursor; desliga com reduced motion. */
export function useCursorGlow() {
  const [cursorOn, setCursorOn] = useState(true);
  const cursorRaf = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setCursorOn(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!cursorOn) return;
    const onMove = (e: MouseEvent) => {
      if (cursorRaf.current) cancelAnimationFrame(cursorRaf.current);
      cursorRaf.current = requestAnimationFrame(() => {
        cursorRaf.current = 0;
        document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (cursorRaf.current) cancelAnimationFrame(cursorRaf.current);
    };
  }, [cursorOn]);

  return cursorOn;
}
