import { profile } from '../data/profile';
import Reveal from '../components/Reveal';
import './Testimonials.css';

export default function Testimonials() {
  const items = profile.testimonials;

  // Nothing to show until real endorsements are added.
  if (!items || items.length === 0) return null;

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">Testimonials.</h2>
        </Reveal>

        <div className="testimonial-grid">
          {items.map((t, i) => (
            <Reveal key={t.name + i} className="testimonial-card" delay={i * 0.06}>
              <blockquote className="testimonial-quote">{t.quote}</blockquote>
              <div className="testimonial-attr">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-title">{t.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
