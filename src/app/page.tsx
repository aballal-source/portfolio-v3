//'use client';
import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { About } from '@/components/sections/about/About';

export default function Home(): ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


if(!mounted){
  return (
    <div className="min-h-screen bg-[#0B1221]"></div>
  ); // or a loading spinner
}
  return (
    <main className="min-h-screen bg-[#0B1221] text-white suppressHydrationWarning">
      <About />
    </main>
  );
}