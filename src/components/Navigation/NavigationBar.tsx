'use client';
//import { useState } from 'react';
import Link from 'next/link';

export function NavigationBar() {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        </div>
      </div>
    </nav>
  );
}