'use client';
import Link from 'next/link';
import { useState } from 'react';

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-darkLight/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-primary text-2xl font-bold lg:hidden">
              Ahmed Ballal
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="#projects" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>
            <Link href="#contact" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="#projects" className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </Link>
            <Link href="#contact" className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}