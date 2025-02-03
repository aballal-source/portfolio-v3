import { useState, useEffect } from 'react';
import type { Section } from '@/types';

/**
 * Hook to track scroll position and active section
 * @returns Object containing scroll state and active section
 */
export function useScrollTracking() {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectsHeaderVisible, setProjectsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Update scroll state for nav visibility
      setIsScrolled(scrollPosition > windowHeight * 0.3);

      // Check sections
      const sections: Section[] = ['about', 'projects', 'contact'];
      let currentSection: Section = 'about';

      // Find the current active section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);

      // Update projects header visibility
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        setProjectsHeaderVisible(
          rect.top <= 300 && rect.bottom >= windowHeight * 0.3
        );
      }
    };

    // Initial check and event listeners
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection, isScrolled, projectsHeaderVisible };
} 