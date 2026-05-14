/** URL pública do site (GitHub Pages). Usado em meta tags. */
export const SITE_ORIGIN = "https://widineii.github.io";
export const SITE_BASE_PATH = "/Portifolioo/";
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH.replace(/\/$/, "")}/`;

function normalizeBase(): string {
  try {
    const raw = import.meta.env?.BASE_URL;
    let s = typeof raw === "string" && raw.length > 0 ? raw : "/Portifolioo/";
    if (!s.startsWith("/")) {
      s = `/${s}`;
    }
    return s.endsWith("/") ? s : `${s}/`;
  } catch {
    return "/Portifolioo/";
  }
}

const base = normalizeBase();

/**
 * Caminho público absoluto a partir da raiz do site (ex.: `/Portifolioo/assets/...`).
 * No navegador vira URL absoluta com `origin`, evitando 404 quando a página não termina em `/`.
 */
export function assetUrl(relativePath: string): string {
  const path = relativePath.replace(/^\//, "");
  const withBase = `${base}${path}`;
  if (typeof globalThis !== "undefined" && "location" in globalThis) {
    const loc = (globalThis as { location?: { origin?: string } }).location;
    if (loc?.origin) {
      try {
        return new URL(withBase, loc.origin).href;
      } catch {
        /* use string below */
      }
    }
  }
  return withBase;
}
