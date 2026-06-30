import './SignalPulses.css';

// A self-contained waveform packet (baseline y=50): lead, smooth bump, sharp
// spike, short tail. This is the "pulse" that gets sent across.
const PACKET =
  'M0 50 H50 C 84 50 90 18 120 18 C 150 18 156 50 178 50 H198 L208 50 L216 12 L224 88 L232 50 H252';

/**
 * Sends a waveform pulse traveling across the band, then a gap, then the next —
 * driven entirely by a CSS transform animation (GPU-composited, no JS per-frame
 * work), so it never interferes with scroll performance.
 */
export default function SignalPulses() {
  return (
    <div className="pulses" aria-hidden="true">
      <span className="pulses-base" />
      <div className="pulse">
        <svg className="pulse-svg" viewBox="0 0 252 100" fill="none" preserveAspectRatio="none">
          <path className="pulse-path" d={PACKET} />
        </svg>
      </div>
    </div>
  );
}
