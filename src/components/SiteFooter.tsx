import { navLinks, profile } from "../data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const repoUrl = `https://github.com/${profile.githubLogin}/Portifolioo`;

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <strong>{profile.name}</strong>
          <p>{profile.role}</p>
        </div>
        <nav className="footer__nav" aria-label="Mapa do site">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="footer__top" href="#top">
          ↑ Voltar ao topo
        </a>
      </div>
      <p className="footer__meta">
        © {year} {profile.name} · @{profile.githubLogin} · código em{" "}
        <a href={repoUrl} target="_blank" rel="noreferrer noopener">
          Portifolioo
        </a>{" "}
        no GitHub Pages
      </p>
    </footer>
  );
}
