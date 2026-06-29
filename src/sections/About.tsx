import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About me</span>
          <h2 className="section-title">A builder, not just a student.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            {profile.about.map((para) => (
              <p key={para.slice(0, 24)} className="about-para">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal className="about-skills" delay={0.1}>
            {profile.skills.map((g) => (
              <div key={g.group} className="skill-group">
                <span className="skill-group-title">{g.group}</span>
                <div className="tag-row">
                  {g.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
