import { useCallback, useEffect, useState } from 'react';
import './Gallery.css';

type Props = {
  /** Image URLs, shown in the order given. */
  images: string[];
  /** Base alt text; the photo number is appended for each slide. */
  alt: string;
  /** Milliseconds between automatic advances. */
  interval?: number;
};

/**
 * A small photo carousel for the project detail page.
 * Rotates on its own every few seconds, pauses while you hover or focus it,
 * and shows minimal prev/next arrows only on hover.
 */
export default function Gallery({ images, alt, interval = 3000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  const go = useCallback(
    (next: number) => {
      // wrap around in both directions
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return;
    // Respect the OS "reduce motion" setting: no auto-rotation, arrows still work.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // `index` is a dependency on purpose: clicking an arrow restarts the timer,
    // so a manual step always gets a full interval before the next auto-advance.
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [paused, count, interval, index]);

  if (count === 0) return null;

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
        <div className="gal-track" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {images.map((src, i) => (
            <div className="gal-slide" key={src} aria-hidden={i !== index}>
              <img
                src={src}
                alt={`${alt}, photo ${i + 1} of ${count}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="gal-arrow gal-arrow--prev"
              onClick={() => go(index - 1)}
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
              onClick={() => go(index + 1)}
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
