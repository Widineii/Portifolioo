import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  dataIndex: string;
  dataActive: string | undefined;
  children: ReactNode;
};

export function SectionShell({ id, dataIndex, dataActive, children }: SectionShellProps) {
  return (
    <section className="section shell" id={id} data-index={dataIndex} data-active={dataActive}>
      <div className="section__inner">{children}</div>
    </section>
  );
}
