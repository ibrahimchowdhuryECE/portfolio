import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './SignalPulses.css';

// Four distinct ~300-unit-wide waveform pulses (baseline at y=70).
const SHAPES = [
  // ECG / heartbeat spike
  'M0 70 L120 70 L132 64 L140 92 L150 24 L160 104 L170 66 L182 70 L300 70',
  // sine burst
  'M0 70 Q 37.5 30 75 70 T 150 70 T 225 70 L300 70',
  // square / digital pulse
  'M0 70 L110 70 L110 40 L160 40 L160 100 L210 100 L210 70 L300 70',
  // breath / gaussian bump
  'M0 70 C 110 70 120 22 150 22 C 180 22 190 70 300 70',
];

/**
 * A live oscilloscope band: a waveform pulse travels left-to-right across the
 * screen, then after a short gap the next (randomly chosen, never repeating)
 * waveform type is sent. Purely time-based — independent of scroll.
 */
export default function SignalPulses() {
  const groupRef = useRef<SVGGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const group = groupRef.current;
    const path = pathRef.current;
    if (!group || !path) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let last = -1;
    let tween: gsap.core.Tween | null = null;
    let delayed: gsap.core.Tween | null = null;
    const state = { x: -320 };

    const sendPulse = () => {
      // random shape, never the same twice in a row
      let i = Math.floor(Math.random() * SHAPES.length);
      if (i === last) i = (i + 1) % SHAPES.length;
      last = i;
      path.setAttribute('d', SHAPES[i]);

      tween = gsap.fromTo(
        state,
        { x: -320 },
        {
          x: 1220,
          duration: 2.2,
          ease: 'none',
          onUpdate: () => group.setAttribute('transform', `translate(${state.x}, 0)`),
          onComplete: () => {
            delayed = gsap.delayedCall(0.65, sendPulse);
          },
        },
      );
    };

    sendPulse();

    return () => {
      tween?.kill();
      delayed?.kill();
    };
  }, []);

  return (
    <div className="pulses" aria-hidden="true">
      <svg className="pulses-svg" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
        <line className="pulses-base" x1="0" y1="70" x2="1200" y2="70" />
        <g ref={groupRef}>
          <path ref={pathRef} className="pulses-path" d={SHAPES[0]} />
        </g>
      </svg>
    </div>
  );
}
