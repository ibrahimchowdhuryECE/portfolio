import Reveal from '../components/Reveal';
import JourneyTimeline from '../components/JourneyTimeline';

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">Waterloo, and next, Madrid.</h2>
          <p className="lead">
            Currently at the University of Waterloo, and heading to UC3M in Madrid on exchange for
            Fall 2026: an opportunity to study engineering in a new environment.
          </p>
        </Reveal>

        <JourneyTimeline />
      </div>
    </section>
  );
}
