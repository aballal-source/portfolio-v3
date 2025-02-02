'use client';
import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
// import { About } from '@/components/sections/about/About';

export default function Home(): ReactElement {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


if(!isMounted){
  return (
    <div className="min-h-screen bg-[#0B1221]" />
  ); // or a loading spinner
}
  return (
    <div className="min-h-screen bg-[#0B1221] text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </div>
  );
}