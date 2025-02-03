/**
 * Application-wide configuration constants
 */
export const CONFIG = {
    scrollThresholds: {
      navVisibility: 0.3, // Percentage of viewport height
      sectionDetection: 0.4,
      projectsHeader: 300 // Pixels
    },
    animations: {
      duration: 0.3,
      loadingDelay: 500,
      progressInterval: 20
    },
    form: {
      successMessageDuration: 3000
    }
  } as const; 