'use client';
//import ReactTypingEffect from 'react-typing-effect';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import type { ReactTypingEffectProps } from '@/types';

type ReactTypingEffectComponent = FC<ReactTypingEffectProps>;

const ReactTypingEffect = dynamic<ReactTypingEffectProps>(() => 
  import('react-typing-effect').then((mod) => mod.default as ReactTypingEffectComponent), {
  ssr: false
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
      cursorRenderer={(cursor: string) => <span>{cursor}</span>}
      displayTextRenderer={(text: string) => <span>{text}</span>}
    />
    </div>
  );
}