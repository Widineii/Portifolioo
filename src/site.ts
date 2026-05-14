/** URL pública do site (GitHub Pages). Usado em meta tags. */
export const SITE_ORIGIN = "https://widineii.github.io";
export const SITE_BASE_PATH = "/Portifolioo/";
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH.replace(/\/$/, "")}/`;

const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/** Caminho absoluto no deploy (respeita `base` do Vite, ex.: `/Portifolioo/`). */
export function assetUrl(relativePath: string): string {
  const p = relativePath.replace(/^\//, "");
  return `${base}${p}`;
}
