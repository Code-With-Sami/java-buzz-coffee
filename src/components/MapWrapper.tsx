"use client";
import dynamic from 'next/dynamic';

// This is the "magic" that fixes the error
const MapComponent = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => (
    <div className="h-[450px] w-full bg-primary/5 animate-pulse rounded-3xl flex items-center justify-center">
      <p className="text-primary font-serif italic">Loading Map...</p>
    </div>
  )
});

export default function MapWrapper() {
  return <MapComponent />;
}