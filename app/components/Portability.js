'use client';

import { motion } from 'framer-motion';
import { PackageOpen, ArrowRightLeft, Store, Users, DoorOpen } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function Portability() {
  const cards = [
    {
      icon: ArrowRightLeft,
      title: "Full structure export / import",
      desc: "A single JSON payload represents the entire 6-Layer Concept. Move it between workspaces, back it up to Git, or share it with a partner agency. Zero lock-in to the platform."
    },
    {
      icon: Store,
      title: "Template library, built in",
      desc: "Start from a vetted base instead of a blank prompt. The platform ships with complete, multi-layer starter concepts — from SaaS boilerplate to marketplace ERDs — fully categorized and searchable."
    },
    {
      icon: Users,
      title: "The agency multiplier",
      desc: "Build a concept for one client, clone it as a template for the next. Agencies use think4ever to standardize their architecture delivery across dozens of projects."
    },
    {
      icon: DoorOpen,
      title: "No-hostage guarantee",
      desc: "Because the 6-Layer Concept is just structured data, and the code it generates is just standard code (Next.js, Node, etc.), you can walk away at any time with a fully working, standard codebase and its documentation."
    }
  ];

  return (
    <SplitSection
      id="portability"
      watermarkText="PORTABILITY"
      leftTitle="Portable Specs"
      bottomContent={
        <div className="w-full mt-12 pb-20 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] p-8"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#07A7E1]/10 to-[#093cad]/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-6 h-6 text-[#07A7E1]" />
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#09090D] mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-zinc-500 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              );
            })}
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
          Specs you can export, import, <GradientText>clone — and start from</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          The entire 6-layer structure moves between projects with one export. And you don't start from a blank page: a built-in, AI-curated template library ships full starter concepts across industries — with category trees, tags, and popularity ranking.
        </motion.p>
      </div>
    </SplitSection>
  );
}
