import { useEffect, useRef, useState } from "react";
import { computeSectionReadingProgress } from "../lib/reading";

export function useScrollSpy() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const scrollRaf = useRef(0);

  useEffect(() => {
    const tick = () => {
      scrollRaf.current = 0;
      const root = document.documentElement;
      const scrollTop = root.scrollTop;

      setReadingProgress(computeSectionReadingProgress());

      if (scrollTop < 96) {
        setActiveSection("");
        return;
      }

      const markerY = window.innerHeight * 0.36;
      const sections = document.querySelectorAll<HTMLElement>("main section[id]");
      let bestId = "";
      let bestDist = Infinity;
      sections.forEach((node) => {
        const r = node.getBoundingClientRect();
        if (r.bottom < 80 || r.top > window.innerHeight - 48) return;
        const anchor = r.top + Math.min(r.height * 0.28, 140);
        const dist = Math.abs(anchor - markerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = node.id;
        }
      });
      setActiveSection(bestId);
    };

    const onScroll = () => {
      if (scrollRaf.current) return;
      scrollRaf.current = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, []);

  const sectionActive = (id: string) => (activeSection === id ? "true" : undefined);

  return { readingProgress, activeSection, sectionActive };
}
