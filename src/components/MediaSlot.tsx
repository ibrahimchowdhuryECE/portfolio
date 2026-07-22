import './MediaSlot.css';

type Ratio = 'square' | 'video' | 'portrait';

type Props = {
  /**
   * To fill a slot later: import the image/render and pass it as `src`.
   *   import sensor from '../assets/sensor.png';
   *   <MediaSlot src={sensor} ratio="video" />
   * Images are shown in grayscale to stay on-palette. Works for icons,
   * photos, 3D renders, or b-roll posters.
   */
  src?: string;
  alt?: string;
  label?: string;
  ratio?: Ratio;
  className?: string;
};

export default function MediaSlot({
  src,
  alt = '',
  label = 'Image',
  ratio = 'square',
  className,
}: Props) {
  return (
    <div className={`mslot mslot--${ratio} ${className ?? ''}`}>
      {src ? (
        <img className="mslot-img" src={src} alt={alt} />
      ) : (
        <div className="mslot-empty">
          {/* isometric cube, hints "icon / 3D render goes here" */}
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
              d="M12 2 21 7v10l-9 5-9-5V7l9-5Zm0 0v20m9-15-9 5-9-5"
            />
          </svg>
          {label && <span className="mslot-label">{label}</span>}
        </div>
      )}
    </div>
  );
}
