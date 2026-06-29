import { motion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * Wraps a whole page so it cross-fades when the route changes.
 * Used as the root element of each page component.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
