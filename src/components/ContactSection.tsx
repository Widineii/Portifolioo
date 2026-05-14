import { contact } from "../data";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section className="cta shell" id="contato" aria-labelledby="contato-heading">
      <Reveal className="cta__box">
        <h2 id="contato-heading">{contact.headline}</h2>
        <p>{contact.body}</p>
        <div className="btn-row">
          {contact.links.map((lnk) => (
            <a
              key={lnk.href}
              className={`btn${lnk.variant === "primary" ? " btn--primary" : " btn--ghost"}`}
              href={lnk.href}
              target={lnk.href.startsWith("http") ? "_blank" : undefined}
              rel={lnk.href.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              {lnk.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
