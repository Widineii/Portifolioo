import type { MotionProps } from "framer-motion";

/** Animação de entrada padrão para blocos (respeitar `Reveal` + reduced motion). */
export const fadeUpProps = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
} satisfies MotionProps;
