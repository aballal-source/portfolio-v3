'use client';
import ReactTypingEffect from 'react-typing-effect';

export function TypingEffect() {
  return (
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
      cursorRenderer={(cursor: string) => <span>{cursor}</span>}
      displayTextRenderer={(text: string) => <span>{text}</span>}
    />
  );
}