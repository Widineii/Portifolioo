import { experience } from "../data";
import { sectionIndex } from "../lib/sections";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

type ExperienceSectionProps = {
  sectionActive: (id: string) => string | undefined;
};

export function ExperienceSection({ sectionActive }: ExperienceSectionProps) {
  return (
    <SectionShell id="jornada" dataIndex={sectionIndex.jornada} dataActive={sectionActive("jornada")}>
      <Reveal>
        <header className="section-head">
          <p className="section__eyebrow">Jornada</p>
          <h2 className="section__title">Experiência</h2>
          <p className="section__intro">
            Da operação local (PDV e estoque) a APIs corporativas e dashboards web — sempre com foco em clareza,
            documentação e entrega alinhada ao combinado com o cliente.
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
      </Reveal>
    </SectionShell>
  );
}
