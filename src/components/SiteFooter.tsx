import { profile } from "../data";

export function SiteFooter() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {profile.name} · @{profile.githubLogin} ·{" "}
      <a href={`https://github.com/${profile.githubLogin}/Portifolioo`}>Portifolioo</a> no GitHub Pages
    </footer>
  );
}
