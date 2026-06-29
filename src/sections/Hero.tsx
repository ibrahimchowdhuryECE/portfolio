import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { profile } from '../data/profile';
import HeadshotPlaceholder from '../components/HeadshotPlaceholder';
import './Hero.css';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="container hero-grid">
        <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
          <motion.span className="hero-badge" variants={item}>
            <span className="hero-badge-dot" /> Available for co-op &amp; new-grad roles
          </motion.span>

          <motion.h1 className="hero-name" variants={item}>
            Hi, I’m {profile.name}.
            <br />
            <span className="hero-gradient">I build things that work.</span>
          </motion.h1>

          <motion.p className="hero-role" variants={item}>
            {profile.role}
          </motion.p>

          <motion.p className="hero-tagline lead" variants={item}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero-ctas" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View my projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <HeadshotPlaceholder />
        </motion.div>
      </div>
    </section>
  );
}
