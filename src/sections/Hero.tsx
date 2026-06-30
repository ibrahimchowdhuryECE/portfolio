import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { profile } from '../data/profile';
import MediaSlot from '../components/MediaSlot';
import Marquee from '../components/Marquee';
import './Hero.css';

// Biosignal waveform, stretched edge-to-edge (length scales with the window).
const SIGNAL_PATH =
  'M0 70 L110 70 C 168 70 178 30 236 30 C 294 30 304 70 360 70 L424 70 ' +
  'C 470 70 486 70 512 70 C 528 70 534 18 548 18 C 560 18 566 116 582 116 ' +
  'C 596 116 604 70 648 70 L742 70 C 800 70 812 40 872 40 C 932 40 942 70 1002 70 ' +
  'L1066 70 C 1116 70 1126 96 1162 72 L1200 70';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
          <motion.div className="hero-meta" variants={item}>
            <span>Portfolio</span>
            <span className="hero-meta-coord">43.47°N 80.52°W → 40.42°N 3.70°W</span>
          </motion.div>

          <motion.h1 className="hero-name" variants={item}>
            Ibrahim
            <br />
            Chowdhury
          </motion.h1>

          <motion.p className="hero-readout" variants={item}>
            {profile.role}
          </motion.p>

          <motion.p className="hero-tagline" variants={item}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero-ctas" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, x: 44 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.3 }}
        >
          <MediaSlot ratio="portrait" label="B-roll / 3D render" />
        </motion.div>
      </div>

      <Marquee />

      <div className="hero-signal" aria-hidden="true">
        <svg
          className="hero-signal-svg"
          viewBox="0 0 1200 140"
          fill="none"
          preserveAspectRatio="none"
        >
          <line className="hero-signal-base" x1="0" y1="70" x2="1200" y2="70" />
          <motion.path
            className="hero-signal-path"
            d={SIGNAL_PATH}
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: 'easeInOut', delay: 0.5 }}
          />
        </svg>
        <span className="hero-signal-label">breath glucose · sensing signal</span>
      </div>
    </section>
  );
}
