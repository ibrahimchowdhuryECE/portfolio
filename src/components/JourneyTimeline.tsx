import { profile } from '../data/profile';
import Reveal from './Reveal';
import MediaSlot from './MediaSlot';
import './JourneyTimeline.css';

export default function JourneyTimeline() {
  return (
    <div className="timeline">
      <div className="timeline-line" aria-hidden="true" />
      {profile.journey.map((stop, i) => (
        <Reveal key={stop.place} delay={i * 0.12} className="timeline-item">
          <div className="timeline-dot">
            <span className="timeline-dot-inner" />
          </div>
          <div className="timeline-card card">
            <MediaSlot
              src={stop.image}
              alt={stop.imageAlt}
              ratio="video"
              label="Campus"
              className="timeline-media"
            />
            <span className="timeline-time">{stop.time}</span>
            <h3 className="timeline-place">{stop.place}</h3>
            <span className="timeline-location">{stop.location}</span>
            <p className="timeline-detail">{stop.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
