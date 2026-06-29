import './Marquee.css';

const DEFAULT_ITEMS = [
  'Embedded Systems',
  'VHDL / FPGA',
  'Biomedical Sensing',
  'Signal Processing',
  'Circuit Design',
  'Firmware',
  'Hardware Prototyping',
];

export default function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  // duplicate the list so the loop is seamless at -50%
  const sequence = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {sequence.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
