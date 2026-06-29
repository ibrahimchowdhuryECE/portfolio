import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import './SignalPin.css';

// Biosignal waveform, stretched edge-to-edge (length scales with the window).
const SIGNAL_PATH =
  'M0 70 L110 70 C 168 70 178 30 236 30 C 294 30 304 70 360 70 L424 70 ' +
  'C 470 70 486 70 512 70 C 528 70 534 18 548 18 C 560 18 566 116 582 116 ' +
  'C 596 116 604 70 648 70 L742 70 C 800 70 812 40 872 40 C 932 40 942 70 1002 70 ' +
  'L1066 70 C 1116 70 1126 96 1162 72 L1200 70';

/**
 * The screen pins (appears paused) while you scroll this section, and the
 * signal draws in step with the scroll. Scrolling down draws it, scrolling up
 * unwinds it; it fully completes before the page continues. Reduced-motion
 * users get a static, fully-drawn band with no pin.
 */
export default function SignalPin() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Draw within the middle of the pin so it's clearly full before releasing.
  const drawn = useTransform(scrollYProgress, [0.08, 0.82], [0, 1]);

  if (reduce) {
    return (
      <div className="signalpin-static" aria-hidden="true">
        <svg className="signalpin-svg" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
          <line className="signalpin-base" x1="0" y1="70" x2="1200" y2="70" />
          <path className="signalpin-path" d={SIGNAL_PATH} pathLength={1} />
        </svg>
      </div>
    );
  }

  return (
    <section ref={ref} className="signalpin" aria-hidden="true">
      <div className="signalpin-sticky">
        <div className="signalpin-label-top">Incoming signal</div>
        <svg className="signalpin-svg" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
          <line className="signalpin-base" x1="0" y1="70" x2="1200" y2="70" />
          <motion.path className="signalpin-path" d={SIGNAL_PATH} style={{ pathLength: drawn }} />
        </svg>
        <div className="signalpin-label">breath glucose · sensing signal</div>
      </div>
    </section>
  );
}
