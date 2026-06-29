import './HeadshotPlaceholder.css';

type Props = {
  /**
   * To add your photo later: put the image in src/assets/ (e.g. headshot.jpg),
   * import it at the top of Hero.tsx, and pass it here:
   *   import headshot from '../assets/headshot.jpg';
   *   <HeadshotPlaceholder src={headshot} />
   */
  src?: string;
};

export default function HeadshotPlaceholder({ src }: Props) {
  return (
    <div className="headshot">
      {src ? (
        <img className="headshot-img" src={src} alt="Ibrahim" />
      ) : (
        <div className="headshot-empty">
          <svg viewBox="0 0 24 24" width="46" height="46" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.7-8 6v2h16v-2c0-3.3-3.6-6-8-6Z"
            />
          </svg>
          <span>Headshot</span>
        </div>
      )}
      <span className="headshot-ring" aria-hidden="true" />
    </div>
  );
}
