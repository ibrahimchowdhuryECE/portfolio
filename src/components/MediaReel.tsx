import './MediaReel.css';

type Props = {
  /**
   * To add your b-roll later:
   *  - Video: put a file in src/assets (e.g. reel.mp4), import it, pass as `src`.
   *      import reel from '../assets/reel.mp4';
   *      <MediaReel src={reel} />
   *  - Or pass a poster image via `poster` while you film the real thing.
   */
  src?: string;
  poster?: string;
};

export default function MediaReel({ src, poster }: Props) {
  return (
    <div className="reel">
      {src ? (
        <video
          className="reel-video"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="reel-empty">
          <span className="reel-play" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="reel-label">Showreel — b-roll coming soon</span>
          <span className="reel-hint">who I am · what I’ve built</span>
        </div>
      )}
    </div>
  );
}
