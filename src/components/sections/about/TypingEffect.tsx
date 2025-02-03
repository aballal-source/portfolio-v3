'use client';
import dynamic from 'next/dynamic';

// Define the props interface if not provided by the package
interface ReactTypingEffectProps {
  text: string[];
  speed: number;
  eraseSpeed: number;
  typingDelay: number;
  eraseDelay: number;
}

// Import the component with no SSR
const ReactTypingEffect = dynamic<ReactTypingEffectProps>(() => import('react-typing-effect'), {
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
          'Aspiring AI Software Engineer'
        ]}
        speed={100}
        eraseSpeed={50}
        typingDelay={500}
        eraseDelay={3000}
      />
    </div>
  );
}