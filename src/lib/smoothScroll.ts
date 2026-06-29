import type Lenis from 'lenis';

// Holds the single Lenis instance so other components (NavBar, ScrollManager)
// can drive smooth programmatic scrolling.
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};

export const getLenis = (): Lenis | null => instance;
