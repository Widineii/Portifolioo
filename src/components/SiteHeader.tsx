import type { Dispatch, SetStateAction } from "react";
import { navLinks } from "../data";
import type { Palette, ThemeMode } from "../lib/theme";
import { LIGHT_HOUR_END, LIGHT_HOUR_START } from "../lib/theme";

type SiteHeaderProps = {
  profileFirstName: string;
  themeMode: ThemeMode;
  setThemeMode: Dispatch<SetStateAction<ThemeMode>>;
  palette: Palette;
  activeSection: string;
};

function navHrefId(href: string) {
  return href.replace("#", "");
}

export function SiteHeader({
  profileFirstName,
  themeMode,
  setThemeMode,
  palette,
  activeSection,
}: SiteHeaderProps) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          {profileFirstName}
        </a>
        <nav className="nav__links" aria-label="Principal">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={activeSection === navHrefId(l.href) ? "nav__link--active" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="nav__theme"
          onClick={() =>
            setThemeMode((m) => (m === "dark" ? "light" : m === "light" ? "auto" : "dark"))
          }
          title={
            themeMode === "dark"
              ? "Escuro — clique para claro"
              : themeMode === "light"
                ? "Claro — clique para automático (horário)"
                : `Automático (${LIGHT_HOUR_START}h–${LIGHT_HOUR_END}h claro). Agora: ${
                    palette === "light" ? "claro" : "escuro"
                  } — clique para escuro fixo`
          }
          aria-label={
            themeMode === "dark"
              ? "Tema escuro. Ativar tema claro."
              : themeMode === "light"
                ? "Tema claro. Ativar tema automático por horário."
                : `Tema automático, exibindo ${palette === "light" ? "claro" : "escuro"}. Ativar tema escuro fixo.`
          }
        >
          {themeMode === "dark" ? "☽" : themeMode === "light" ? "☀" : "◐"}
        </button>
      </div>
    </header>
  );
}
