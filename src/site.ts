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

/** Caminho público com base do Vite (ex.: `/Portifolioo/assets/...`). */
export function assetUrl(relativePath: string): string {
  const path = relativePath.replace(/^\//, "");
  return `${base}${path}`;
}
