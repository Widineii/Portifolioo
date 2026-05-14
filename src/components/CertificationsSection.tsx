import { certifications } from "../data";
import { sectionIndex } from "../lib/sections";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

type CertificationsSectionProps = {
  sectionActive: (id: string) => string | undefined;
};

export function CertificationsSection({ sectionActive }: CertificationsSectionProps) {
  return (
    <SectionShell
      id="credenciais"
      dataIndex={sectionIndex.credenciais}
      dataActive={sectionActive("credenciais")}
    >
      <Reveal>
        <header className="section-head">
          <p className="section__eyebrow">Credenciais</p>
          <h2 className="section__title">Certificações</h2>
          <p className="section__intro">
            Transparência no processo e evidências públicas do trabalho — sem certificação genérica de preenchimento.
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
      </Reveal>
    </SectionShell>
  );
}
