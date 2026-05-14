import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data";

export function HeroSection() {
  const reduced = useReducedMotion();
  const marqueeDup = [...profile.marqueeTags, ...profile.marqueeTags];

  return (
    <section className="hero shell" id="inicio" aria-labelledby="hero-heading">
      <motion.div
        className="hero-bento"
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-bento__visual">
          <div className="hero-frame">
            <div className="hero-frame__inner">
              <img
                src={profile.avatarUrl}
                width={132}
                height={132}
                alt={`Foto de ${profile.name}`}
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
          <span className="pill">
            <span className="pill__dot" aria-hidden />
            {profile.availability}
          </span>
        </div>

        <div className="hero-bento__head">
          <h1 id="hero-heading">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__meta">{profile.location}</p>
        </div>

        <p className="hero-bento__lead hero__lead">{profile.lead}</p>

        <div className="hero-bento__stats stats" role="list">
          {profile.stats.map((s, i) =>
            reduced ? (
              <div className="stat" key={s.label} role="listitem">
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ) : (
              <motion.div
                className="stat"
                key={s.label}
                role="listitem"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </motion.div>
            ),
          )}
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
  );
}
