'use client';
import React, { useState, useEffect, useMemo } from 'react';

export function TypingEffect() {
  const texts = useMemo(() => [
    'Full Stack Developer',
    'Open Source Contributor',
    'Tech Enthusiast',
    'Quality Engineer'
  ], []);

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isErasing) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsErasing(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsErasing(true), 3000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, currentIndex, texts]);

  return <span>{displayedText}</span>;
}