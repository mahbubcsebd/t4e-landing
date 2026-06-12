'use client';

import { motion } from 'framer-motion';
import GradientText from './GradientText';

export default function ProofBar({ className = "px-4 md:px-12 pt-12 md:pt-16 bg-transparent" }) {
  const stats = [
    { value: '6', label: 'layers in one portable concept format' },
    { value: '12', label: 'specialized in-house AI agents' },
    { value: '21', label: 'UI screens built from one spec in one session' },
    { value: '3+', label: 'model vendors — Anthropic, OpenAI, Google' },
    { value: '∞', label: 'sessions — your spec never forgets' },
  ];

  const gridColsClass = 
    stats.length === 1 ? 'grid-cols-1' :
    stats.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
    stats.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
    stats.length === 4 ? 'grid-cols-2 lg:grid-cols-4' :
    stats.length === 5 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' :
    'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';

  return (
    <div className={`relative z-30 w-full flex justify-center ${className}`}>
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className={`bg-white/60 backdrop-blur-md border border-zinc-200/60 shadow-2xl shadow-zinc-200/40 rounded-[20px] md:rounded-[24px] grid ${gridColsClass} divide-y sm:divide-y-0 sm:divide-x divide-zinc-200/60 overflow-hidden`}
        >
          {stats.map((stat, i) => (
            <div key={i} className="py-8 px-4 text-center hover:bg-zinc-50/50 transition-colors flex flex-col justify-center">
              <div className="text-[36px] md:text-[44px] font-extrabold mb-2 tracking-tight leading-none">
                <GradientText>{stat.value}</GradientText>
              </div>
              <div className="text-[14px] md:text-[15px] text-zinc-600 font-medium leading-snug mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
