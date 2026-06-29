import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'motion/react';
import './SignalLoader.css';

// The biosignal waveform, spanning the full viewport width (preserveAspectRatio
// "none" stretches it edge-to-edge, so the drawn length scales with the window).
const SIGNAL_PATH =
  'M0 70 L110 70 C 168 70 178 30 236 30 C 294 30 304 70 360 70 L424 70 ' +
  'C 470 70 486 70 512 70 C 528 70 534 18 548 18 C 560 18 566 116 582 116 ' +
  'C 596 116 604 70 648 70 L742 70 C 800 70 812 40 872 40 C 932 40 942 70 1002 70 ' +
  'L1066 70 C 1116 70 1126 96 1162 72 L1200 70';

/**
 * Pin + scroll-scrub: after the hero, the page pins and the scroll position
 * draws the signal across the screen. When fully drawn it releases and the
 * user is dropped at the start of the next section. Plays once per page load
 * (a refresh replays it); reduced-motion users skip the freeze entirely.
 */
export default function SignalLoader() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setPct(Math.round(v * 100));
    if (v >= 0.999) setDone(true);
  });

  // When the draw completes, collapse the tall scroller and land the user at
  // the top of the next section so scrolling continues normally.
  useEffect(() => {
    if (done && !reduce) {
      const next = document.getElementById('projects');
      if (next) window.scrollTo({ top: next.offsetTop - 1, behavior: 'auto' });
    }
  }, [done, reduce]);

  // Reduced motion, or already completed: a static, fully-drawn band — no freeze.
  if (reduce || done) {
    return (
      <div className="loader-done" aria-hidden="true">
        <svg className="loader-svg" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
          <line className="loader-base" x1="0" y1="70" x2="1200" y2="70" />
          <path className="loader-path" d={SIGNAL_PATH} pathLength={1} />
        </svg>
      </div>
    );
  }

  return (
    <section ref={ref} className="loader" aria-hidden="true">
      <div className="loader-sticky">
        <div className="loader-head">
          <span className="loader-tag">Incoming signal</span>
          <span className="loader-pct">{pct}%</span>
        </div>

        <svg className="loader-svg" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
          <line className="loader-base" x1="0" y1="70" x2="1200" y2="70" />
          <motion.path
            className="loader-path"
            d={SIGNAL_PATH}
            style={{ pathLength: scrollYProgress }}
          />
        </svg>

        <div className="loader-hint">scroll to load ↓</div>
      </div>
    </section>
  );
}
