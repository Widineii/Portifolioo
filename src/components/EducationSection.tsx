import { education } from "../data";
import { sectionIndex } from "../lib/sections";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

type EducationSectionProps = {
  sectionActive: (id: string) => string | undefined;
};

export function EducationSection({ sectionActive }: EducationSectionProps) {
  return (
    <SectionShell id="formacao" dataIndex={sectionIndex.formacao} dataActive={sectionActive("formacao")}>
      <Reveal>
        <header className="section-head">
          <p className="section__eyebrow">Trajetória acadêmica</p>
          <h2 className="section__title">Formação</h2>
          <p className="section__intro">
            Formação em andamento em Ciência da Computação, aplicada diariamente em projetos completos no GitHub.
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
      </Reveal>
    </SectionShell>
  );
}
