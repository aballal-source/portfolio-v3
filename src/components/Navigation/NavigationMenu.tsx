'use client';
//NavigationMenu.tsx
import { motion } from 'framer-motion';
import type { Section } from '@/types';

interface NavigationMenuProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  isScrolled: boolean;
  isLandingVisible: boolean;
}

export function NavigationMenu({ 
  activeSection, 
  onSectionChange, 
  isScrolled, 
  isLandingVisible 
}: NavigationMenuProps) {
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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isScrolled ? 0 : 1,
        y: isScrolled ? -20 : 0,
        pointerEvents: isScrolled ? 'none' : 'auto'
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
    >
      <div className="flex items-center justify-center gap-16 p-4 rounded-full bg-darkLight/80 backdrop-blur-sm border border-primary/10">
        {['about', 'projects', 'contact'].map((section) => (
          <motion.button
            key={section}
            onClick={() => handleSectionClick(section as Section)}
            className="relative px-1 py-2 group"
            whileHover={{ y: -2 }}
          >
            <span className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
              (section === 'about' && isLandingVisible) || activeSection === section
                ? 'text-primary' 
                : 'text-text-secondary group-hover:text-white'
            }`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
            
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-[1px] bg-primary"
              initial={false}
              animate={{
                scaleX: (section === 'about' && isLandingVisible) || activeSection === section ? 1 : 0,
                opacity: (section === 'about' && isLandingVisible) || activeSection === section ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
} 