import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './SignalPulses.css';

// The original biosignal waveform, full band width (baseline at y=70).
const SIGNAL_PATH =
  'M0 70 L110 70 C 168 70 178 30 236 30 C 294 30 304 70 360 70 L424 70 ' +
  'C 470 70 486 70 512 70 C 528 70 534 18 548 18 C 560 18 566 116 582 116 ' +
  'C 596 116 604 70 648 70 L742 70 C 800 70 812 40 872 40 C 932 40 942 70 1002 70 ' +
  'L1066 70 C 1116 70 1126 96 1162 72 L1200 70';

// Seconds for one waveform width to travel across — higher = slower.
const DURATION = 16;

/**
 * A constantly looping waveform that drifts slowly across the band. Two tiled
 * copies translate seamlessly so the loop has no seam. Time-based, no scroll.
 */
export default function SignalPulses() {
  const groupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const state = { x: -1200 };
    const tween = gsap.fromTo(
      state,
      { x: -1200 },
      {
        x: 0,
        duration: DURATION,
        ease: 'none',
        repeat: -1,
        onUpdate: () => group.setAttribute('transform', `translate(${state.x}, 0)`),
      },
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="pulses" aria-hidden="true">
      <svg className="pulses-svg" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
        <line className="pulses-base" x1="0" y1="70" x2="1200" y2="70" />
        <g ref={groupRef}>
          <path className="pulses-path" d={SIGNAL_PATH} />
          <path className="pulses-path" d={SIGNAL_PATH} transform="translate(1200, 0)" />
        </g>
      </svg>
    </div>
  );
}
