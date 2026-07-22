import { useEffect, useState } from 'react';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type Props = {
  /** Full text to type. Use "\n" for a hard line break. */
  text: string;
  /** Milliseconds per character. */
  speed?: number;
  /** Delay before typing begins. */
  startDelay?: number;
};

/**
 * Types out `text` one character at a time, then stops, no cursor. Reduced-motion
 * users get the full text instantly.
 */
export default function Typewriter({ text, speed = 145, startDelay = 450 }: Props) {
  const [count, setCount] = useState(prefersReducedMotion ? text.length : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return <>{text.slice(0, count)}</>;
}
