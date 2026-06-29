import { motion } from 'motion/react';
import './SignalTrace.css';

/**
 * The site's signature: a single ink line that draws itself like an
 * oscilloscope / breath-sensor trace. Used large in the hero and as a
 * thin divider between sections. Monochrome by design.
 */

// A biosignal-style waveform: calm breaths, one sharp pulse, back to baseline.
const PATH =
  'M0 70 L110 70 C 168 70 178 30 236 30 C 294 30 304 70 360 70 L424 70 ' +
  'C 470 70 486 70 512 70 C 528 70 534 18 548 18 C 560 18 566 116 582 116 ' +
  'C 596 116 604 70 648 70 L742 70 C 800 70 812 40 872 40 C 932 40 942 70 1002 70 ' +
  'L1066 70 C 1116 70 1126 96 1162 72 L1200 70';

type Props = {
  className?: string;
  /** seconds for the draw-on animation */
  duration?: number;
  /** delay before the line starts drawing */
  delay?: number;
};

export default function SignalTrace({ className, duration = 2.4, delay = 0.2 }: Props) {
  return (
    <svg
      className={`signal ${className ?? ''}`}
      viewBox="0 0 1200 140"
      fill="none"
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
    >
      <line className="signal-base" x1="0" y1="70" x2="1200" y2="70" />
      <motion.path
        className="signal-path"
        d={PATH}
        initial={{ pathLength: 0, opacity: 0.4 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration, ease: 'easeInOut', delay }}
      />
    </svg>
  );
}
