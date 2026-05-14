import { stackGroups } from "../data";
import { sectionIndex } from "../lib/sections";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

type StackSectionProps = {
  sectionActive: (id: string) => string | undefined;
};

export function StackSection({ sectionActive }: StackSectionProps) {
  return (
    <SectionShell id="stack" dataIndex={sectionIndex.stack} dataActive={sectionActive("stack")}>
      <Reveal>
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
      </Reveal>
    </SectionShell>
  );
}
