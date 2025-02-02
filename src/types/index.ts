import type { ReactElement } from 'react';
// Core type definitions for the application

// Navigation sections of the website
export type Section = 'about' | 'projects' | 'contact';


// Technology stack item structure
export interface Technology {
  name: string;
  icon: keyof typeof import('react-icons/si');
  color: string;
}

// Project item structure
export interface Project {
  title: string;
  description: string;
  tech: readonly string[];
  image: string;
  link: string;
}

// Form related types
export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Animation related types
export interface MousePosition {
  x: number;
  y: number;
} 

export interface ReactTypingEffectProps {
    text: string | string[];
    speed?: number;
    eraseSpeed?: number;
    typingDelay?: number;
    eraseDelay?: number;
    cursorRenderer?: (cursor: string) => ReactElement;
    displayTextRenderer?: (text: string) => ReactElement;
  } 