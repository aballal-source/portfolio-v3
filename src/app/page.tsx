'use client';
// import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
// import { useScrollTracking } from '@/hooks/useScrollTracking'; 1997
import Link from 'next/link';
import { About } from '@/components/sections/about/About';
import { Projects } from '@/components/sections/projects/Projects';
import { Contact } from '@/components/sections/contact/Contact';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileImage from '@/components/profile/ProfileImage.jpg';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';

// Components
// import { ProfileCard } from '@/components/profile/ProfileCard';
// import { NavigationBar } from '@/components/navigation/NavigationBar';

export default function Home(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(true);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      const halfwayPoint = rect.height / 2;
      setIsProfileVisible(rect.top <= window.innerHeight && rect.bottom - halfwayPoint >= 0);
    }
  };

  useEffect(() => {
    handleScroll(); // Check visibility on initial load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ProfileCard = () => (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: isProfileVisible ? 1 : 0,
        x: isProfileVisible ? 0 : -100,
        scale: isProfileVisible ? 1 : 0.95,
        pointerEvents: isProfileVisible ? 'auto' : 'none',
      }}
      exit={{ opacity: 0, x: -100, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed left-8 top-24 z-40 w-[300px] xl:w-[380px] hidden lg:block"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primaryLight/20 rounded-lg blur-xl transition-all duration-300 group-hover:blur-2xl" />
        <div className="relative bg-darkLight/90 border border-primary/20 rounded-lg backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="p-5 bg-darkLight/90">
            <h1 className="text-3xl font-bold text-primary mb-2 drop-shadow-lg">
              Ahmed Ballal
            </h1>
            <p className="text-lg text-text-primary font-medium drop-shadow-md">
              Software Engineer
            </p>
          </div>
          <div className="relative h-[300px] overflow-hidden flex flex-col justify-start">
            <Image
              priority={true}
              src={profileImage}
              alt="Ahmed Ballal"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300 opacity-90 filter brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-darkLight via-darkLight/95 to-transparent z-10" />
          </div>
          <div className="flex justify-center gap-6 p-4 border-t border-primary/10">
            {[
              { icon: <FiGithub size={22} />, href: "https://github.com/aballal-source" },
              { icon: <FiLinkedin size={22} />, href: "https://linkedin.com/in/aballal" },
              { icon: <RiTwitterXLine size={22} />, href: "https://x.com/9ballal" },
              { icon: <FiInstagram size={22} />, href: "https://instagram.com/ahmed_ballal" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <nav className="bg-darkLight/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-primary text-2xl font-bold lg:hidden">
                Ahmed Ballal
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              {['about', 'projects', 'contact'].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium`}
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
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <ProfileCard />
            <section id="about" className="py-12 flex-1 lg:ml-[320px]">
              <About />
            </section>
          </div>
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