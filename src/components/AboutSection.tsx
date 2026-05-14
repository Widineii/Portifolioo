import { profile } from "../data";
import { sectionIndex } from "../lib/sections";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

type AboutSectionProps = {
  sectionActive: (id: string) => string | undefined;
};

export function AboutSection({ sectionActive }: AboutSectionProps) {
  return (
    <SectionShell id="sobre" dataIndex={sectionIndex.sobre} dataActive={sectionActive("sobre")}>
      <Reveal>
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
              <a href={`https://github.com/${profile.githubLogin}`} target="_blank" rel="noreferrer noopener">
                @{profile.githubLogin}
              </a>{" "}
              — todos os projetos em destaque têm código aberto para revisão.
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
