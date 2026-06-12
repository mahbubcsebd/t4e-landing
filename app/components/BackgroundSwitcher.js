'use client';

import { usePathname } from 'next/navigation';

export default function BackgroundSwitcher() {
  const pathname = usePathname();
  
  // Match any path containing /home-2
  const isStatic = pathname.includes('/home-2');

  if (isStatic) {
    return (
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{ background: 'radial-gradient(125% 125% at 50% 10%, #ffffff 35%, #07a7e1 100%)' }}
      />
    );
  }

  return <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-bg" />;
}
