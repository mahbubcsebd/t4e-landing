'use client';

import { motion } from 'framer-motion';
import { Wand2, Mic, Network, Image } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function Extras() {
  const extras = [
    {
      icon: <Mic className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-100/80",
      title: "Voice interface",
      text: "Realtime voice sessions — describe your product out loud, refine the concept in conversation. The spec types itself."
    },
    {
      icon: <Network className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-100/80",
      title: "Prompt-to-diagram",
      text: "Architecture, ERD, sequence, deployment diagrams generated from plain language — and stored as structured, editable models, never dead pictures."
    },
    {
      icon: <Image className="w-5 h-5 text-pink-600" />,
      bg: "bg-pink-100/80",
      title: "Vision & image generation",
      text: "Diffusion-powered visuals for concepts and presentations — the whole content pipeline stays inside the platform."
    }
  ];

  return (
    <SplitSection
      id="extras"
      watermarkText="MAGIC"
      leftTitle="And the parts that feel like magic"
      bottomContent={
        <div className="w-full mt-12 pb-20 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {extras.map((extra, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] p-8"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${extra.bg}`}>
                  {extra.icon}
                </div>
                <h3 className="text-[17px] font-bold text-[#09090D] leading-[1.3] mb-3">
                  {extra.title}
                </h3>
                <p className="text-[14px] text-zinc-500 leading-[1.6] font-normal m-0">
                  {extra.text}
                </p>
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
          Talk to it. Diagram it. <GradientText>Present it.</GradientText>
        </motion.h2>
      </div>
    </SplitSection>
  );
}
