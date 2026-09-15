import { useEffect, useState } from 'react';
import './Gallery.css';

/** Must match the .gal-track transition duration in Gallery.css. */
const SLIDE_MS = 550;

type Props = {
  /** Image URLs, shown in the order given. */
  images: string[];
  /** Base alt text; the photo number is appended for each slide. */
  alt: string;
  /** Milliseconds between automatic advances. */
  interval?: number;
};

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Photo carousel for the project detail page.
 *
 * The timer always slides the same direction, forever. That works by rendering
 * one extra copy of the first photo at the end of the track: the timer slides
 * forward into that copy, then the track jumps back to the real first photo
 * with the animation switched off. The jump is invisible because the copy and
 * the original look identical, so it reads as one endless loop instead of
 * sliding back and forth.
 *
 * Both arrows still work for stepping manually in either direction.
 */
export default function Gallery({ images, alt, interval = 5000 }: Props) {
  const count = images.length;
  const loops = count > 1;

  // Position along the track. 0..count-1 are the real photos; `count` is the
  // trailing copy of photo 0, only ever passed through on the way round.
  const [pos, setPos] = useState(0);
  // False for the one frame where we snap without sliding.
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  // Bumped on a manual click so the timer restarts from a full interval.
  const [restart, setRestart] = useState(0);

  // Auto-advance. Always forward.
  useEffect(() => {
    if (paused || !loops || prefersReducedMotion()) return;
    const id = window.setInterval(() => setPos((p) => p + 1), interval);
    return () => window.clearInterval(id);
  }, [paused, loops, interval, restart]);

  // Landed on the trailing copy: let the slide finish, then snap back to the
  // real photo 0 with animation off.
  useEffect(() => {
    if (pos !== count) return;
    const id = window.setTimeout(
      () => {
        setAnimate(false);
        setPos(0);
        // Re-enable sliding only after the browser has painted the snap,
        // otherwise the snap itself would animate.
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      },
      prefersReducedMotion() ? 0 : SLIDE_MS,
    );
    return () => window.clearTimeout(id);
  }, [pos, count]);

  if (count === 0) return null;

  const next = () => {
    setRestart((r) => r + 1);
    setPos((p) => (p >= count ? 1 : p + 1));
  };

  const prev = () => {
    setRestart((r) => r + 1);
    if (pos > 0) {
      setPos(pos - 1);
      return;
    }
    // Going back from the first photo: jump to the trailing copy (which looks
    // identical, so nothing appears to happen), then slide back from there.
    setAnimate(false);
    setPos(count);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setAnimate(true);
        setPos(count - 1);
      }),
    );
  };

  // The trailing copy is a duplicate of photo 0 for looping only.
  const slides = loops ? [...images, images[0]] : images;
  const current = pos % count;

  return (
    <div
      className="gal"
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="gal-frame">
        <div
          className="gal-track"
          style={{
            transform: `translate3d(${-pos * 100}%, 0, 0)`,
            ...(animate ? null : { transition: 'none' }),
          }}
        >
          {slides.map((src, i) => {
            const isClone = i === count;
            return (
              <div
                className="gal-slide"
                key={i}
                aria-hidden={isClone || i !== current}
              >
                <img
                  src={src}
                  alt={isClone ? '' : `${alt}, photo ${i + 1} of ${count}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {loops && (
          <>
            <button
              type="button"
              className="gal-arrow gal-arrow--prev"
              onClick={prev}
              aria-label="Previous photo"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.5 5-7 7 7 7"
                />
              </svg>
            </button>
            <button
              type="button"
              className="gal-arrow gal-arrow--next"
              onClick={next}
              aria-label="Next photo"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.5 5 7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
