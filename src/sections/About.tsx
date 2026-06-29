import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal className="about-text">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Background.</h2>
          {profile.about.map((para) => (
            <p key={para.slice(0, 24)} className="about-para">
              {para}
            </p>
          ))}
        </Reveal>

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
