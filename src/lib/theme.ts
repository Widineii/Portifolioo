export const THEME_KEY = "widinei-portfolio-theme";

export const LIGHT_HOUR_START = 7;
export const LIGHT_HOUR_END = 19;

/** Preferência do usuário; `auto` segue o relógio local. */
export type ThemeMode = "dark" | "light" | "auto";

export type Palette = "dark" | "light";

export function effectivePalette(mode: ThemeMode): Palette {
  if (mode === "auto") {
    const h = new Date().getHours();
    return h >= LIGHT_HOUR_START && h < LIGHT_HOUR_END ? "light" : "dark";
  }
  return mode;
}

export function readInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "auto";
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light" || saved === "auto") return saved;
  } catch {
    /* ignore */
  }
  return "auto";
}
