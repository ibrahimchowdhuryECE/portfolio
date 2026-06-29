import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { profile } from '../data/profile';
import SignalTrace from '../components/SignalTrace';
import './Hero.css';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div className="hero-meta" variants={item}>
            <span>Portfolio</span>
            <span className="hero-meta-coord">
              43.47°N 80.52°W → 40.42°N 3.70°W
            </span>
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
      </div>

      <div className="hero-signal" aria-hidden="true">
        <SignalTrace duration={2.6} delay={0.4} />
        <span className="hero-signal-label">breath glucose · sensing signal</span>
      </div>
    </section>
  );
}
