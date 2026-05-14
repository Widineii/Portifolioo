import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpProps } from "../lib/motionProps";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  const reduced = useReducedMotion();
  if (reduced) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div className={className} {...fadeUpProps}>
      {children}
    </motion.div>
  );
}
