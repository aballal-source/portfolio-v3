'use client';
import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { About } from '@/components/sections/about/About';

export default function Home(): ReactElement {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


if(!isClient){
  return (
    <div className="min-h-screen bg-[#0B1221]"></div>
  ); // or a loading spinner
}
  return (
    <main className="min-h-screen bg-[#0B1221] text-white">
      <About />
    </main>
  );
}