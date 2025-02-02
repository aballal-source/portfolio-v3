'use client';
import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import { technologies } from '@/constants/data';
import { theme } from '@/constants/theme';

// type assertion helper

const getIcon = (iconName: string) => {

  return SiIcons[iconName as keyof typeof SiIcons];

};

export function TechStackCarousel() {
  // Debug: Log available icons and what we're trying to use
  console.log('Available icons:', Object.keys(SiIcons));
  console.log('Technologies:', technologies);

  return (
    <motion.div
      className="mt-16 relative w-full max-w-3xl mx-auto h-[300px]"
      style={{ perspective: "2000px" }}
    >
      <motion.div
        style={{ 
          rotateX: 20,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transformStyle: "preserve-3d"
          }}
          animate={{ rotateY: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {technologies.map((tech, index) => {
            // Add error handling for icon lookup
            //let Icon;
            //try {
              //Icon = (SiIcons as any)[tech.icon];
              const Icon = getIcon(tech.icon);
              if (!Icon) {
                console.error(`Icon not found: ${tech.icon}`);
                //return null;
              //}
            //} catch (error) {
              //console.error(`Error loading icon ${tech.icon}:`, error);
              return null;
            }

            const angle = (index / technologies.length) * Math.PI * 2;
            const radius = 200;
            
            return (
              <motion.div
                key={tech.name}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotateY(${(angle * 180) / Math.PI}deg) translateZ(${radius}px)`,
                }}
                className="flex flex-col items-center gap-2"
              >
                <Icon 
                  className="w-8 h-8 opacity-50"
                  style={{ color: theme.colors.text.secondary }}
                />
                <span className="text-sm" style={{ color: theme.colors.text.secondary }}>
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 