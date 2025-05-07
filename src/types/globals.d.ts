declare module 'lenis' {
  interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smooth?: boolean;
    mouseMultiplier?: number;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    direction?: 'vertical' | 'horizontal';
    gestureDirection?: 'vertical' | 'horizontal';
    infinite?: boolean;
    orientation?: 'vertical' | 'horizontal';
  }

  interface Lenis {
    raf: (time: number) => void;
    destroy: () => void;
  }

  const Lenis: new (options: LenisOptions) => Lenis;
  export default Lenis;
} 