'use client';
//SectionIndicator.tsx
import { motion } from 'framer-motion';
import type { Section } from '@/types';
import { theme } from '@/constants/theme';

interface SectionIndicatorProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  isLandingVisible: boolean;
}

export const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  activeSection,
  onSectionChange,
  isLandingVisible
}) => {
  const sections: Section[] = ['about', 'projects', 'contact'];

  const handleSectionClick = (section: Section) => {
    if (section === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onSectionChange(section);
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="fixed right-8 top-1/2 -translate-y-1/2 flex items-center gap-4 z-50 lg:hidden"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <motion.button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={`
              text-xs uppercase tracking-wider transition-all duration-300
              ${
                (isLandingVisible && section === 'about') || activeSection === section
                  ? `text-[${theme.colors.primary}]`
                  : `text-[${theme.colors.text.secondary}]/50 hover:text-[${theme.colors.primary}]/80`
              }
            `}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}; 