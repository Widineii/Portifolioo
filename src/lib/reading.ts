/** Ordem das seções para a barra de leitura (deve bater com `id` no DOM). */
export const READING_SECTIONS = [
  "inicio",
  "sobre",
  "jornada",
  "formacao",
  "credenciais",
  "portfolio",
  "stack",
  "contato",
] as const;

export function computeSectionReadingProgress(): number {
  const scrollTop = document.documentElement.scrollTop;
  const vh = window.innerHeight;
  const lineDoc = scrollTop + vh * 0.28;

  let accounted = 0;
  const n = READING_SECTIONS.length;

  for (const id of READING_SECTIONS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    const top = rect.top + scrollTop;
    const h = Math.max(el.offsetHeight, 1);
    const bottom = top + h;
    if (lineDoc >= bottom) {
      accounted += 1;
      continue;
    }
    const partial = Math.max(0, Math.min(1, (lineDoc - top) / h));
    accounted += partial;
    break;
  }

  return Math.min(1, Math.max(0, accounted / n));
}
