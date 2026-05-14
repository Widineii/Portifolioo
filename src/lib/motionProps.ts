import type { MotionProps } from "framer-motion";

/** Animação de entrada padrão para blocos (respeitar `Reveal` + reduced motion). */
export const fadeUpProps = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
} satisfies MotionProps;

/** Lista com filhos em sequência ao entrar no viewport (portfólio, stack, etc.). */
export const scrollStaggerListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
} as const;

export const scrollStaggerItemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export const scrollRevealListViewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -10% 0px",
} as const;
