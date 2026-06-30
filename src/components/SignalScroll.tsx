import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import './SignalScroll.css';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

// Biosignal waveform, stretched edge-to-edge (length scales with the window).
const SIGNAL_PATH =
  'M0 70 L110 70 C 168 70 178 30 236 30 C 294 30 304 70 360 70 L424 70 ' +
  'C 470 70 486 70 512 70 C 528 70 534 18 548 18 C 560 18 566 116 582 116 ' +
  'C 596 116 604 70 648 70 L742 70 C 800 70 812 40 872 40 C 932 40 942 70 1002 70 ' +
  'L1066 70 C 1116 70 1126 96 1162 72 L1200 70';

/**
 * Scroll-scrubbed line drawing via GSAP ScrollTrigger + DrawSVGPlugin.
 * The line draws from 0% to 100% as the band travels from the bottom of the
 * viewport to the top, and unwinds when scrolling back up (scrub). DrawSVG
 * "100%" guarantees the stroke reaches the true end on any screen width.
 */
export default function SignalScroll() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    if (!wrap || !path) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(path, { drawSVG: '100%' });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        path,
        { drawSVG: '0%' },
        {
          drawSVG: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top bottom', // band's top enters at viewport bottom
            end: 'top top', // band's top reaches viewport top -> fully drawn
            scrub: true, // forward on scroll down, reverse on scroll up
          },
        },
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="signal" aria-hidden="true">
      <svg className="signal-svg" viewBox="0 0 1200 140" fill="none" preserveAspectRatio="none">
        <line className="signal-base" x1="0" y1="70" x2="1200" y2="70" />
        <path ref={pathRef} className="signal-path" d={SIGNAL_PATH} />
      </svg>
    </div>
  );
}
