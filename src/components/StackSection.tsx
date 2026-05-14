import { motion, useReducedMotion } from "framer-motion";
import { stackGroups } from "../data";
import { scrollRevealListViewport, scrollStaggerItemVariants, scrollStaggerListVariants } from "../lib/motionProps";
import { sectionIndex } from "../lib/sections";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

type StackSectionProps = {
  sectionActive: (id: string) => string | undefined;
};

export function StackSection({ sectionActive }: StackSectionProps) {
  const reduced = useReducedMotion();

  return (
    <SectionShell id="stack" dataIndex={sectionIndex.stack} dataActive={sectionActive("stack")}>
      <Reveal>
        <header className="section-head">
          <p className="section__eyebrow">Expertise</p>
          <h2 className="section__title">Stack técnica</h2>
          <p className="section__intro">
            Stack alinhada ao que aparece nos projetos em destaque e nos repositórios públicos.
          </p>
        </header>
        {reduced ? (
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
        ) : (
          <motion.div
            className="stack-grid"
            variants={scrollStaggerListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={scrollRevealListViewport}
          >
            {stackGroups.map((g) => (
              <motion.div
                key={g.title}
                className="stack-card"
                variants={scrollStaggerItemVariants}
                whileHover={{ y: -4 }}
              >
                <h3>{g.title}</h3>
                <p className="stack-card__sub">{g.subtitle}</p>
                <div className="chips">
                  {g.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Reveal>
    </SectionShell>
  );
}
