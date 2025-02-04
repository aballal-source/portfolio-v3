'use client';
// import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
// import { useScrollTracking } from '@/hooks/useScrollTracking'; 1997
import Link from 'next/link';
import { About } from '@/components/sections/about/About';
import { Projects } from '@/components/sections/projects/Projects';
import { Contact } from '@/components/sections/contact/Contact';
import { ProfileCard } from '@/components/profile/ProfileCard';

// Components
// import { ProfileCard } from '@/components/profile/ProfileCard';
// import { NavigationBar } from '@/components/navigation/NavigationBar';

export default function Home(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const offsets = sections.map((id) => {
      const element = document.getElementById(id);
      return element ? element.offsetTop : 0;
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const currentSection = sections.reduce((acc, section, index) => {
      return scrollPosition >= offsets[index] ? section : acc;
    }, 'home');

    setActiveSection(currentSection);

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      setIsProfileVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-darkLight/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-primary text-2xl font-bold">
                Ahmed Ballal
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              {['about', 'projects', 'contact'].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === section ? 'text-primary' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['about', 'projects', 'contact'].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="min-h-screen bg-[#0B1221] text-white">
        <main className="pt-16">
          <ProfileCard isVisible={isProfileVisible} />
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