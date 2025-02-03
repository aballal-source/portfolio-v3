'use client';
import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { About } from '@/components/sections/about/About';

import { ProfileCard } from '@/components/profile/ProfileCard';
import { Projects } from '@/components/sections/projects/Projects';
import { Contact } from '@/components/sections/contact/Contact';
import { useScrollTracking } from '@/hooks/useScrollTracking';


// Import any custom hooks if needed
// import { useCustomHook } from '@/hooks/useCustomHook';

export default function Home(): ReactElement {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { isScrolled } = useScrollTracking();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Example of using a custom hook
  // const { someState, someFunction } = useCustomHook();

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#0B1221]" />
    ); // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-[#0B1221] text-white">
      {/* <NavigationMenu 
      activeSection={activeSection}
      onSectionChange={() => {handleSectionChange}}
      isScrolled={isScrolled}
      isLandingVisible={isLandingVisible}
      /> */}
      <main className="pt-16">
        <section id="profile" className="py-12">
          <ProfileCard isScrolled={isScrolled} />
        </section>
        <section id="about" className="py-12">
          <About />
        </section>
        <section id="projects" className="py-12">
          <Projects />
        </section>
        <section id="contact" className="py-12">
          <Contact />
        </section>
      </main>
    </div>
  );
}