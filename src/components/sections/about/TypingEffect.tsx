'use client';
import dynamic from 'next/dynamic';
// import type { ReactTypingEffectProps } from '@/types';  // Not needed if we're not typing the dynamic import

// Import the component with no SSR
const ReactTypingEffect = dynamic(() => import('react-typing-effect'), {
  ssr: false,
  loading: () => <span>Full Stack Developer</span> // Fallback content
});

export function TypingEffect() {
  return (
    <div suppressHydrationWarning>
      <ReactTypingEffect
        text={[
          'Full Stack Developer',
          'Open Source Contributor',
          'Tech Enthusiast',
          'Aspiring Software Architect'
        ]}
        speed={100}
        eraseSpeed={50}
        typingDelay={500}
        eraseDelay={3000}
      />
    </div>
  );
} 