import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import HeadshotPlaceholder from '../components/HeadshotPlaceholder';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">Background.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-portrait">
            <HeadshotPlaceholder />
            <span className="about-portrait-cap">Ibrahim Chowdhury · Waterloo, ON</span>
          </Reveal>

          <Reveal className="about-text" delay={0.08}>
            {profile.about.map((para) => (
              <p key={para.slice(0, 24)} className="about-para">
                {para}
              </p>
            ))}

            <a
              className="about-award"
              href={profile.award.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="about-award-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 4h12v3a6 6 0 0 1-12 0V4Zm0 1H3v2a3 3 0 0 0 3 3m12-5h3v2a3 3 0 0 1-3 3m-6 5v3m-3 3h6l-.6-3H9.6L9 20Z"
                />
              </svg>
              <span className="about-award-text">
                {profile.award.label}
                <span className="about-award-cta">See the award&nbsp;↗</span>
              </span>
            </a>
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
