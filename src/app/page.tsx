'use client';
import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { About } from '@/components/sections/about/About';
import { Projects } from '@/components/sections/projects/Projects';
import { Contact } from '@/components/sections/contact/Contact';
import Link from 'next/link';
// import Image from 'next/image';
// import profileImage from '@/components/profile/ProfileImage.jpg';
// import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
// import { RiTwitterXLine } from 'react-icons/ri';


export default function Home(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
  };

  useEffect(() => {
    handleScroll(); // Check visibility on initial load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const ProfileCard = () => (
  //   <div className="bg-darkLight/90 border border-primary/20 rounded-lg shadow-xl p-4 mb-8">
  //     <div className="flex items-center">
  //       <Image
  //         src={profileImage}
  //         alt="Ahmed Ballal"
  //         width={80}
  //         height={80}
  //         className="rounded-full"
  //       />
  //       <div className="ml-4">
  //         <h1 className="text-xl font-bold text-primary">Ahmed Ballal</h1>
  //         <p className="text-sm text-text-primary">Software Engineer</p>
  //       </div>
  //     </div>
  //     <div className="flex justify-center gap-4 mt-4">
  //       {[
  //         { icon: <FiGithub size={20} />, href: "https://github.com/aballal-source" },
  //         { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/in/aballal" },
  //         { icon: <RiTwitterXLine size={20} />, href: "https://x.com/9ballal" },
  //         { icon: <FiInstagram size={20} />, href: "https://instagram.com/ahmed_ballal" }
  //       ].map((item, index) => (
  //         <a
  //           key={index}
  //           href={item.href}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="text-text-secondary hover:text-primary transition-colors duration-300"
  //         >
  //           {item.icon}
  //         </a>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <>
      <nav className="bg-darkLight/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* <Image
                src={profileImage}
                alt="Profile Image"
                width={40}
                height={40}
                className="rounded-full"
              /> */}
              <Link href="/" className="text-primary text-2xl font-bold lg:hidden">
                Ahmed Ballal
              </Link>
            </div>
            <div className="flex-1 justify-center space-x-4 hidden md:flex">
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

      <div className="min-h-screen bg-[#0B1221] text-white relative z-10">
        <main className="pt-16">
          {/* {isProfileVisible && <ProfileCard />} */}
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