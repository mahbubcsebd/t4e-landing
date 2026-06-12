'use client';

import { motion } from 'framer-motion';
import GradientText from './GradientText';
import SplitSection from './SplitSection';
import Counter from './Counter';

export default function Proof() {
  const stats = [
    {
      value: 21,
      suffix: '',
      text: 'UI screens rebuilt locally — pixel-faithful, fully navigable',
    },
    {
      value: 23,
      suffix: '',
      text: 'Database entities with relationships — extracted, not invented',
    },
    {
      value: 18,
      suffix: '+',
      text: 'API groups with endpoints, JSON examples & named business rules',
    },
    {
      value: 0,
      suffix: '',
      text: 'Data models, endpoints or design rules the AI had to guess',
    },
  ];

  return (
    <SplitSection
      id="proof"
      watermarkText="PROOF"
      leftTitle="Live Proof"
      bottomContent={
        <div className="w-full mt-12 pb-20 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-8 bg-[#f8fafc]/50 border border-zinc-200/60 rounded-2xl shadow-sm text-center transition-all duration-300 hover:shadow-md hover:border-zinc-300 relative z-10">
                <div className="text-[48px] font-black tracking-[-0.04em] mb-2 leading-none">
                  <GradientText>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </GradientText>
                </div>
                <div className="text-[14px] text-zinc-500 font-medium leading-[1.4]">
                  {stat.text}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-bold text-[#09090D] leading-[1.1] tracking-tight max-w-4xl"
        >
          This website sits next to <GradientText>the receipt</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          The SkyStay Hotel Management System in this workspace was built by
          Claude Code reading a think4ever concept over MCP — one session, zero
          guessed data models. Click through it yourself.
        </motion.p>
      </div>
    </SplitSection>
  );
}
