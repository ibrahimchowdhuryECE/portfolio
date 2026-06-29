import { useRef } from 'react';
import { motion, useScroll, useReducedMotion } from 'motion/react';
import './SignalPin.css';

// Biosignal waveform, stretched edge-to-edge (length scales with the window).
const SIGNAL_PATH =
  'M0 70 L110 70 C 168 70 178 30 236 30 C 294 30 304 70 360 70 L424 70 ' +
  'C 470 70 486 70 512 70 C 528 70 534 18 548 18 C 560 18 566 116 582 116 ' +
  'C 596 116 604 70 648 70 L742 70 C 800 70 812 40 872 40 C 932 40 942 70 1002 70 ' +
  'L1066 70 C 1116 70 1126 96 1162 72 L1200 70';

/**
 * Fluid, scroll-linked draw (no pin). The line fills as the band rises up the
 * screen and is fully drawn exactly when the band's top edge reaches the top of
 * the window. Scrolling up unwinds it (the draw tracks scroll directly).
 */
export default function SignalPin() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // 0 when the band's top edge enters at the bottom of the viewport,
  // 1 when that top edge reaches the top of the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  return (
    <div ref={ref} className="signalband" aria-hidden="true">
      <svg className="signalband-svg" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
        <line className="signalband-base" x1="0" y1="70" x2="1200" y2="70" />
        <motion.path
          className="signalband-path"
          d={SIGNAL_PATH}
          style={{ pathLength: reduce ? 1 : scrollYProgress }}
        />
      </svg>
      <span className="signalband-label">breath glucose · sensing signal</span>
    </div>
  );
}
