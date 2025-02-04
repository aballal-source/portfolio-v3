'use client';
import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
// import { useScrollTracking } from '@/hooks/useScrollTracking'; 1997


// Components
// import { ProfileCard } from '@/components/profile/ProfileCard';
import { NavigationBar } from '@/components/navigation/NavigationBar'; // 1997
import { About } from '@/components/sections/about/About';
// import { Projects } from '@/components/sections/projects/Projects'; 1997
import { Contact } from '@/components/sections/contact/Contact';
import { ProfileCard } from '@/components/profile/ProfileCard';

export default function Home(): ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const aboutSectionBottom = aboutSection?.getBoundingClientRect().bottom || 0;
      setIsScrolled(aboutSectionBottom < 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const [isMounted, setIsMounted] = useState<boolean>(false);
  // // const { isScrolled, activeSection } = useScrollTracking(); 1997

  // // Define handleSectionChange function1997
  // // const handleSectionChange = (section: string) => {
  // //   const element = document.getElementById(section);
  // //   element?.scrollIntoView({ behavior: 'smooth' });
  // // };

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return (
  //     <div className="min-h-screen bg-[#0B1221]" />
  //   );
  // }

  return (
    <>
    <NavigationBar />
    <div className="min-h-screen bg-[#0B1221] text-white">
      {/* <NavigationMenu 1997
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isScrolled={isScrolled}
        isLandingVisible={!isScrolled}
      /> */}
      <main className="pt-16">
        <section id="profile" className="py-12 hidden lg:block">
          <ProfileCard isScrolled={isScrolled} />
        </section>
        <section id="about" className="py-12">
          <About />
        </section>
        <section id="projects" className="py-12">
          {/* <Projects /> 1997*/}
        </section>
        <section id="contact" className="py-12">
          <Contact />
        </section>
      </main>
    </div>
    </>
  );
}