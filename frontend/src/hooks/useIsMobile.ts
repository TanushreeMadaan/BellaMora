'use client';

import { useState, useEffect } from 'react';

/**
 * A custom hook to detect if the current viewport is mobile-sized.
 * @param {number} breakpoint - The width in pixels to consider the mobile breakpoint. Defaults to 768px.
 * @returns {boolean} - True if the viewport width is less than or equal to the breakpoint.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]); 

  return isMobile;
}
