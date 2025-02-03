'use client';
import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { useScrollTracking } from '@/hooks/useScrollTracking';

// Components
// import { ProfileCard } from '@/components/profile/ProfileCard';
import { NavigationMenu } from '@/components/navigation/NavigationMenu';
import { About } from '@/components/sections/about/About';
// import { Projects } from '@/components/sections/projects/Projects';
// import { Contact } from '@/components/sections/contact/Contact';

export default function Home(): ReactElement {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { isScrolled, activeSection } = useScrollTracking();

  // Define handleSectionChange function
  const handleSectionChange = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#0B1221]" />
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1221] text-white">
      <NavigationMenu 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isScrolled={isScrolled}
        isLandingVisible={!isScrolled}
      />
      <main className="pt-16">
        <section id="profile" className="py-12">
          {/* <ProfileCard isScrolled={isScrolled} /> */}
        </section>
        <section id="about" className="py-12">
          <About />
        </section>
        <section id="projects" className="py-12">
          {/* <Projects /> */}
        </section>
        <section id="contact" className="py-12">
          {/* <Contact /> */}
        </section>
      </main>
    </div>
  );
}