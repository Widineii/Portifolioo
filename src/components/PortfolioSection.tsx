import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  type ProjectCategory,
  projects as allProjects,
  projectFilterCategories,
} from "../data";
import { sectionIndex } from "../lib/sections";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

type PortfolioSectionProps = {
  sectionActive: (id: string) => string | undefined;
};

export function PortfolioSection({ sectionActive }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<ProjectCategory>("Todos");
  const reduced = useReducedMotion();

  const filtered = useMemo(() => {
    if (filter === "Todos") return allProjects;
    return allProjects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <SectionShell id="portfolio" dataIndex={sectionIndex.portfolio} dataActive={sectionActive("portfolio")}>
      <Reveal>
        <header className="section-head">
          <p className="section__eyebrow">Portfólio</p>
          <h2 className="section__title">Projetos em destaque</h2>
          <p className="section__intro">
            Projetos reais com código aberto — web, desktop e APIs.
          </p>
        </header>
        <div className="filters" role="tablist" aria-label="Filtrar projetos">
          {projectFilterCategories.map((c) => (
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
          {filtered.map((p) => {
            const thumbClass = `project-card__thumb${p.coverImage ? " project-card__thumb--has-image" : ""}`;
            const body = (
              <>
                <div className="project-card__bar" aria-hidden />
                <div className={thumbClass}>
                  {p.coverImage ? (
                    <img
                      src={p.coverImage}
                      alt={`Captura de tela do projeto ${p.title}`}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={400}
                    />
                  ) : (
                    "Capa"
                  )}
                </div>
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
              </>
            );

            if (reduced) {
              return (
                <article key={`${filter}-${p.id}`} className={`project-card project-card--${p.category}`}>
                  {body}
                </article>
              );
            }

            return (
              <motion.article
                key={`${filter}-${p.id}`}
                className={`project-card project-card--${p.category}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                {body}
              </motion.article>
            );
          })}
        </div>
      </Reveal>
    </SectionShell>
  );
}
