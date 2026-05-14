import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  LIGHT_HOUR_END,
  LIGHT_HOUR_START,
  THEME_KEY,
  type Palette,
  type ThemeMode,
  effectivePalette,
  readInitialTheme,
} from "../lib/theme";

export function useThemePalette() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(readInitialTheme);
  const [autoTick, setAutoTick] = useState(0);

  const palette = useMemo(() => effectivePalette(themeMode), [themeMode, autoTick]);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = palette;
    document.documentElement.style.colorScheme = palette === "light" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, themeMode);
    } catch {
      /* ignore */
    }
  }, [palette, themeMode]);

  useEffect(() => {
    if (themeMode !== "auto") return;
    const id = window.setInterval(() => setAutoTick((x) => x + 1), 60_000);
    const onFocus = () => setAutoTick((x) => x + 1);
    window.addEventListener("focus", onFocus);
    return () => {
      window.clearInterval(id);
      window.removeEventListener("focus", onFocus);
    };
  }, [themeMode]);

  return {
    themeMode,
    setThemeMode,
    palette,
    /** Para textos de ajuda do botão de tema */
    lightHourStart: LIGHT_HOUR_START,
    lightHourEnd: LIGHT_HOUR_END,
  };
}

export type { Palette, ThemeMode };
