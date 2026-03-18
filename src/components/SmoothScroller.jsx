import { useEffect } from 'react';
import Lenis from 'lenis';

function SmoothScroller({ children }) {
  useEffect(() => {
    // Initialize Lenis with premium settings
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      smoothTouch: false, // Disable on touch devices for better performance
      touchMultiplier: 2,
      infinite: false,
    });

    // Sync with requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Add scroll event listener for any custom interactions
    lenis.on('scroll', (e) => {
    
    });

  
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default SmoothScroller;