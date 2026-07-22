import './SignalPulses.css';

const BASE = 70; // baseline y within the 0..140 viewBox
const AMP = 48; // tallest peak, px around the baseline
const S0 = 150; // pulse spans the central 75% of the 1200-wide viewBox
const S1 = 1050;

// Blended rolling signal, sampled across the central 75% of the width:
//   y(t) = sin(2*pi*2.5*t) * exp(-2*(2t-1)^2) * (1 - 0.4*cos(pi*t)),  t in [0,1]
// Tapers to ~0 at both ends, so it meets the flat baseline cleanly. Amplitude is
// self-normalised so the tallest peak is exactly AMP px regardless of the shape.
function buildSignal(samples = 300): string {
  const ys: number[] = [];
  let max = 0;
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const u = 2 * t - 1;
    const y =
      Math.sin(2 * Math.PI * 2.5 * t) *
      Math.exp(-2 * u * u) *
      (1 - 0.4 * Math.cos(Math.PI * t));
    ys.push(y);
    max = Math.max(max, Math.abs(y));
  }
  const k = AMP / max;
  let d = `M0 ${BASE} L${S0} ${BASE}`;
  for (let i = 0; i <= samples; i++) {
    const x = S0 + (S1 - S0) * (i / samples);
    const y = BASE - k * ys[i];
    d += ` L${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d + ` L${S1} ${BASE} L1200 ${BASE}`;
}

const SIGNAL_PATH = buildSignal();

/**
 * A self-drawing signal trace. The waveform is swept in left-to-right (slow and
 * smooth), held for a beat, then erased back to a faint baseline, one seamless 9s
 * CSS loop with equal draw and erase times. The reveal uses a clip-path sweep (pure
 * geometry), so the line always reaches the true right edge on any aspect ratio.
 */
export default function SignalPulses() {
  return (
    <div className="pulses" aria-hidden="true">
      <svg
        className="pulses-svg"
        viewBox="0 0 1200 140"
        fill="none"
        preserveAspectRatio="none"
      >
        <line className="pulses-base" x1="0" y1="70" x2="1200" y2="70" />
        <path className="draw-line" d={SIGNAL_PATH} />
      </svg>
    </div>
  );
}
