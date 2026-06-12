'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BackgroundSwitcher() {
  const pathname = usePathname();
  
  const isHome2 = pathname.includes('/home-2');
  const isHome3 = pathname.includes('/home-3');

  const staticStyle = { background: 'radial-gradient(125% 125% at 50% 10%, #ffffff 35%, #07a7e1 100%)' };

  if (isHome3) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
        className="fixed inset-0 z-0 pointer-events-none" 
        style={staticStyle}
      />
    );
  }

  if (isHome2) {
    return (
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={staticStyle}
      />
    );
  }

  return <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-bg" />;
}
