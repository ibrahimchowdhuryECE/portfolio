import './SignalPulses.css';

const BASE = 70; // baseline y within the 0..140 viewBox

// Build one continuous ECG trace: flat baseline with PQRST beats at each center.
// Starts and ends flat at the baseline so two copies tile together seamlessly.
function buildEcg(centers: number[], end = 1200): string {
  let d = `M0 ${BASE}`;
  for (const c of centers) {
    d += ` H${c - 78}`; // flat baseline up to the beat
    d += ` Q${c - 63} 56 ${c - 48} ${BASE}`; // P wave (small bump)
    d += ` H${c - 22}`; // PR segment
    d += ` L${c - 16} 80`; // Q (small dip)
    d += ` L${c - 8} 16`; // R (tall sharp spike)
    d += ` L${c} 98`; // S (sharp dip)
    d += ` L${c + 8} ${BASE}`; // back to baseline
    d += ` H${c + 30}`; // ST segment
    d += ` Q${c + 52} 50 ${c + 74} ${BASE}`; // T wave (rounded bump)
  }
  d += ` H${end}`; // flat baseline to the end
  return d;
}

// 3 evenly spaced beats per screen-width tile (spacing stays even across the seam).
const ECG = buildEcg([200, 600, 1000]);

/**
 * A live ECG-monitor trace: one continuous line of uniform weight that scrolls
 * steadily, bending into heartbeat spikes. Two identical tiles scroll as one
 * track via a CSS transform (GPU-composited, no scroll-perf cost).
 */
export default function SignalPulses() {
  return (
    <div className="pulses" aria-hidden="true">
      <div className="ecg-track">
        <svg className="ecg-tile" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
          <path className="ecg-line" d={ECG} />
        </svg>
        <svg className="ecg-tile" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
          <path className="ecg-line" d={ECG} />
        </svg>
      </div>
    </div>
  );
}
