import { useState, useEffect, RefObject } from 'react';
import type { MousePosition } from '@/types';

/**
 * Hook to track mouse position relative to a reference element
 * @param ref - Reference to the element to track mouse position against
 * @returns Current mouse position
 */
export function useMouseTracking(ref: RefObject<HTMLElement>) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [ref]);

  return mousePosition;
} 