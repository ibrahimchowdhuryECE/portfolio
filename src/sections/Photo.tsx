import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import HeadshotPlaceholder from '../components/HeadshotPlaceholder';
import './Photo.css';

export default function Photo() {
  return (
    <section id="photo" className="section photo">
      <div className="container photo-grid">
        <Reveal className="photo-media">
          <HeadshotPlaceholder />
        </Reveal>

        <Reveal className="photo-text" delay={0.1}>
          <span className="eyebrow">Hello</span>
          <h2 className="section-title">Nice to meet you.</h2>
          <p className="lead">
            That’s a bit about my work — here’s the person behind it. I’m {profile.name}, and I’d be
            glad to connect. If anything here resonates, the contact details are just below.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
