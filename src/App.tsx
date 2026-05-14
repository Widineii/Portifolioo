import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AmbientBackdrop } from "./AmbientBackdrop";
import type { ProjectCategory } from "./data";
import {
  certifications,
  contact,
  education,
  experience,
  navLinks,
  profile,
  projects,
  stackGroups,
} from "./data";

const THEME_KEY = "widinei-portfolio-theme";

/** Preferência do usuário; `auto` segue o relógio local. */
type ThemeMode = "dark" | "light" | "auto";

type Palette = "dark" | "light";

const LIGHT_HOUR_START = 7;
const LIGHT_HOUR_END = 19;

/** Ordem das seções para a barra de leitura (deve bater com `id` no DOM). */
const READING_SECTIONS = [
  "inicio",
  "sobre",
  "jornada",
  "formacao",
  "credenciais",
  "portfolio",
  "stack",
  "contato",
] as const;

function effectivePalette(mode: ThemeMode): Palette {
  if (mode === "auto") {
    const h = new Date().getHours();
    return h >= LIGHT_HOUR_START && h < LIGHT_HOUR_END ? "light" : "dark";
  }
  return mode;
}

function readInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "auto";
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light" || saved === "auto") return saved;
  return "auto";
}

function computeSectionReadingProgress(): number {
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

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const categories: ProjectCategory[] = [
  "Todos",
  "Web",
  "Desktop",
  "API",
  "Institucional",
];

const sectionIndex: Record<string, string> = {
  sobre: "01",
  jornada: "02",
  formacao: "03",
  credenciais: "04",
  portfolio: "05",
  stack: "06",
};

export default function App() {
  const [filter, setFilter] = useState<ProjectCategory>("Todos");
  const [themeMode, setThemeMode] = useState<ThemeMode>(readInitialTheme);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const [autoTick, setAutoTick] = useState(0);

  const scrollRaf = useRef(0);
  const cursorRaf = useRef(0);

  const palette = useMemo(() => effectivePalette(themeMode), [themeMode, autoTick]);

  const filtered = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const marqueeDup = [...profile.marqueeTags, ...profile.marqueeTags];

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = palette;
    document.documentElement.style.colorScheme = palette === "light" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, themeMode);
  }, [palette, themeMode]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setCursorOn(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!cursorOn) return;
    const onMove = (e: MouseEvent) => {
      if (cursorRaf.current) cancelAnimationFrame(cursorRaf.current);
      cursorRaf.current = requestAnimationFrame(() => {
        cursorRaf.current = 0;
        document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (cursorRaf.current) cancelAnimationFrame(cursorRaf.current);
    };
  }, [cursorOn]);

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

  const navHrefId = (href: string) => href.replace("#", "");

  return (
    <>
      <AmbientBackdrop />
      <div
        className="scroll-progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(readingProgress * 100)}
        aria-label="Progresso de leitura por seções"
      >
        <div className="scroll-progress__bar" style={{ width: `${readingProgress * 100}%` }} />
      </div>

      {cursorOn ? <div className="cursor-glow" aria-hidden /> : null}

      <div className="page">
        <header className="nav">
          <div className="nav__inner">
            <a className="nav__brand" href="#top">
              {profile.name.split(" ")[0]}
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

        <main id="top">
          <section className="hero shell" id="inicio">
            <motion.div className="hero-bento" {...fadeUp}>
              <div className="hero-bento__visual">
                <div className="hero-frame">
                  <div className="hero-frame__inner">
                    <img
                      src={profile.avatarUrl}
                      width={132}
                      height={132}
                      alt={`Foto de ${profile.name}`}
                    />
                  </div>
                </div>
                <span className="pill">
                  <span className="pill__dot" aria-hidden />
                  {profile.availability}
                </span>
              </div>

              <div className="hero-bento__head">
                <h1>{profile.name}</h1>
                <p className="hero__role">{profile.role}</p>
                <p className="hero__meta">{profile.location}</p>
              </div>

              <p className="hero-bento__lead hero__lead">{profile.lead}</p>

              <div className="hero-bento__stats stats" role="list">
                {profile.stats.map((s, i) => (
                  <motion.div
                    className="stat"
                    key={s.label}
                    role="listitem"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                  >
                    <div className="stat__value">{s.value}</div>
                    <div className="stat__label">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="marquee-wrap" aria-hidden>
              <div className="marquee">
                <div className="marquee__track">
                  {marqueeDup.map((tag, i) => (
                    <span className="marquee__item" key={`${tag}-${i}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            className="section shell"
            id="sobre"
            data-index={sectionIndex.sobre}
            data-active={sectionActive("sobre")}
          >
            <div className="section__inner">
              <motion.div {...fadeUp}>
                <header className="section-head">
                  <p className="section__eyebrow">Perfil</p>
                  <h2 className="section__title">Sobre</h2>
                  <p className="section__intro">{profile.about}</p>
                </header>
                <div className="grid-2">
                  <div className="card">
                    <h3>Soft skills</h3>
                    <div className="chips">
                      {profile.softSkills.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card">
                    <h3>Idiomas</h3>
                    {profile.languages.map((lang) => (
                      <div className="lang" key={lang.name}>
                        <strong>{lang.name}</strong>
                        <span>{lang.level}</span>
                      </div>
                    ))}
                    <p className="note">
                      Perfil público:{" "}
                      <a href={`https://github.com/${profile.githubLogin}`}>@{profile.githubLogin}</a> — todos
                      os projetos em destaque têm código aberto para revisão.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section
            className="section shell"
            id="jornada"
            data-index={sectionIndex.jornada}
            data-active={sectionActive("jornada")}
          >
            <div className="section__inner">
              <motion.div {...fadeUp}>
                <header className="section-head">
                  <p className="section__eyebrow">Jornada</p>
                  <h2 className="section__title">Experiência</h2>
                  <p className="section__intro">
                    Da operação local (PDV e estoque) a APIs corporativas e dashboards web — sempre com foco em
                    clareza, documentação e entrega alinhada ao combinado com o cliente.
                  </p>
                </header>
                <div className="timeline">
                  {experience.map((job) => (
                    <article className="job" key={job.title}>
                      <div className="job__meta">
                        {job.period} · {job.company}
                      </div>
                      <h3>{job.title}</h3>
                      <div className="job__company">{job.company}</div>
                      <ul>
                        {job.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section
            className="section shell"
            id="formacao"
            data-index={sectionIndex.formacao}
            data-active={sectionActive("formacao")}
          >
            <div className="section__inner">
              <motion.div {...fadeUp}>
                <header className="section-head">
                  <p className="section__eyebrow">Trajetória acadêmica</p>
                  <h2 className="section__title">Formação</h2>
                  <p className="section__intro">
                    Formação em andamento em Ciência da Computação, aplicada diariamente em projetos completos no
                    GitHub.
                  </p>
                </header>
                <div className="steps">
                  {education.map((ed) => (
                    <div className="step" key={`${ed.step}-${ed.school}`}>
                      <div className="step__num">
                        {ed.step} · {ed.range}
                      </div>
                      <strong>{ed.school}</strong>
                      <h3>{ed.title}</h3>
                      <p>{ed.detail}</p>
                      <ul>
                        {ed.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section
            className="section shell"
            id="credenciais"
            data-index={sectionIndex.credenciais}
            data-active={sectionActive("credenciais")}
          >
            <div className="section__inner">
              <motion.div {...fadeUp}>
                <header className="section-head">
                  <p className="section__eyebrow">Credenciais</p>
                  <h2 className="section__title">Certificações</h2>
                  <p className="section__intro">
                    Transparência no processo e evidências públicas do trabalho — sem certificação genérica de
                    preenchimento.
                  </p>
                </header>
                <div className="certs">
                  {certifications.map((c) => (
                    <div className="cert" key={c.name}>
                      <div className="cert__tag">
                        {c.tag} · {c.year}
                      </div>
                      <h3>{c.name}</h3>
                      <p>{c.issuer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section
            className="section shell"
            id="portfolio"
            data-index={sectionIndex.portfolio}
            data-active={sectionActive("portfolio")}
          >
            <div className="section__inner">
              <motion.div {...fadeUp}>
                <header className="section-head">
                  <p className="section__eyebrow">Portfólio</p>
                  <h2 className="section__title">Projetos em destaque</h2>
                  <p className="section__intro">
                    Projetos reais com código aberto — web, desktop, API e vitrine institucional.
                  </p>
                </header>
                <div className="filters" role="tablist" aria-label="Filtrar projetos">
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      role="tab"
                      aria-selected={filter === c}
                      className={`filter-btn${filter === c ? " filter-btn--active" : ""}`}
                      onClick={() => setFilter(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div className="projects">
                  {filtered.map((p) => (
                    <motion.article
                      key={`${filter}-${p.id}`}
                      className={`project-card project-card--${p.category}`}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6 }}
                    >
                      <div className="project-card__bar" aria-hidden />
                      <div className="project-card__thumb">Capa</div>
                      <div className="project-card__body">
                        <span className="project-card__type">{p.type}</span>
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <div className="project-card__tags">
                          {p.tags.map((t) => (
                            <span className="tag" key={t}>
                              {t}
                            </span>
                          ))}
                        </div>
                        {p.links && p.links.length > 0 ? (
                          <div className="project-card__links">
                            {p.links.map((lnk) => (
                              <a key={lnk.href} href={lnk.href} target="_blank" rel="noreferrer">
                                {lnk.label} →
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section
            className="section shell"
            id="stack"
            data-index={sectionIndex.stack}
            data-active={sectionActive("stack")}
          >
            <div className="section__inner">
              <motion.div {...fadeUp}>
                <header className="section-head">
                  <p className="section__eyebrow">Expertise</p>
                  <h2 className="section__title">Stack técnica</h2>
                  <p className="section__intro">
                    Stack alinhada ao que aparece no seu portfólio comercial e nos repositórios públicos.
                  </p>
                </header>
                <div className="stack-grid">
                  {stackGroups.map((g) => (
                    <div className="stack-card" key={g.title}>
                      <h3>{g.title}</h3>
                      <p className="stack-card__sub">{g.subtitle}</p>
                      <div className="chips">
                        {g.items.map((item) => (
                          <span className="chip" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="cta shell" id="contato">
            <motion.div className="cta__box" {...fadeUp}>
              <h2>{contact.headline}</h2>
              <p>{contact.body}</p>
              <div className="btn-row">
                {contact.links.map((lnk) => (
                  <a
                    key={lnk.href}
                    className={`btn${lnk.variant === "primary" ? " btn--primary" : " btn--ghost"}`}
                    href={lnk.href}
                    target={lnk.href.startsWith("http") ? "_blank" : undefined}
                    rel={lnk.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {lnk.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} {profile.name} · @{profile.githubLogin} ·{" "}
          <a href={`https://github.com/${profile.githubLogin}/Portifolioo`}>Portifolioo</a> no GitHub Pages
        </footer>
      </div>
    </>
  );
}
