import Reveal from '../components/Reveal';
import JourneyTimeline from '../components/JourneyTimeline';

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The journey</span>
          <h2 className="section-title">From Waterloo to Madrid.</h2>
          <p className="lead">
            Part of being a builder is chasing new environments. Next stop: a semester abroad in
            Spain — new language, new challenges, same drive to make things.
          </p>
        </Reveal>

        <JourneyTimeline />
      </div>
    </section>
  );
}
