// Animation utility functions

/**
 * Calculates opacity based on mouse proximity
 * @param mouseX - Current mouse X position
 * @param mouseY - Current mouse Y position
 * @param elementX - Element X position
 * @param elementY - Element Y position
 * @returns Calculated opacity value
 */
export const calculateProximityOpacity = (
    mouseX: number,
    mouseY: number,
    elementX: number,
    elementY: number,
    maxDistance = 200
  ): number => {
    const distance = Math.sqrt(
      Math.pow(mouseX - elementX, 2) + Math.pow(mouseY - elementY, 2)
    );
    const opacity = Math.max(0, 1 - distance / maxDistance);
    return Math.pow(opacity, 1.5);
  };
  
  /**
   * Smooth scroll to element
   * @param elementId - Target element ID
   */
  export const smoothScrollTo = (elementId: string): void => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }; 