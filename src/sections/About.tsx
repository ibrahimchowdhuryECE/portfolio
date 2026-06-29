import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import HeadshotPlaceholder from '../components/HeadshotPlaceholder';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Background.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-portrait">
            <HeadshotPlaceholder />
            <span className="about-portrait-cap">Ibrahim Chowdhury — Waterloo, ON</span>
          </Reveal>

          <Reveal className="about-text" delay={0.08}>
            {profile.about.map((para) => (
              <p key={para.slice(0, 24)} className="about-para">
                {para}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal className="about-spec" delay={0.1}>
          <span className="about-spec-head">Skills</span>
          <dl className="spec">
            {profile.skills.map((g) => (
              <div key={g.group} className="spec-row">
                <dt className="spec-key">{g.group}</dt>
                <dd className="spec-val">{g.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
