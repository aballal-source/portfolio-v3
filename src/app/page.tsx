'use client';
// import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
// import { useScrollTracking } from '@/hooks/useScrollTracking'; 1997


// Components
// import { ProfileCard } from '@/components/profile/ProfileCard';
//import { NavigationBar } from '@/components/navigation/NavigationBar'; // 1997
import { About } from '@/components/sections/about/About';
import { Projects } from '@/components/sections/projects/Projects';
import { Contact } from '@/components/sections/contact/Contact';
// import { ProfileCard } from '@/components/profile/ProfileCard';

export default function Home(): ReactElement {
  return (
    <>
      <div className="min-h-screen bg-[#0B1221] text-white">
        <main className="pt-16">
          <section id="profile" className="py-12 hidden lg:block">
            {/* <ProfileCard isScrolled={isScrolled} /> */}
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
    </>
  );
}