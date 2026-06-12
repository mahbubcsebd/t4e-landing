'use client';

import { motion } from 'framer-motion';
import { MessageSquareMore, Shuffle, Hourglass, Map } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function Problem() {
  const cards = [
    {
      icon: <MessageSquareMore className="w-5 h-5 text-red-500" strokeWidth={2} />,
      iconBg: 'bg-red-100/80',
      title: 'Re-explaining, forever',
      text: (
        <>
          Every session starts from zero. You burn tokens — and patience — re-describing your own data model, your own design system, your own rules. <b className="text-zinc-800">Then the AI still guesses.</b>
        </>
      ),
    },
    {
      icon: <Shuffle className="w-5 h-5 text-orange-500" strokeWidth={2} />,
      iconBg: 'bg-orange-100/80',
      title: 'Drift between tools & teammates',
      text: (
        <>
          One dev prompts in Cursor, another in Claude Code. Same product, different descriptions — <b className="text-zinc-800">different products shipped</b>. Multiply by 50 squads.
        </>
      ),
    },
    {
      icon: <Hourglass className="w-5 h-5 text-amber-500" strokeWidth={2} />,
      iconBg: 'bg-amber-100/80',
      title: 'Knowledge that evaporates',
      text: (
        <>
          Requirements and decisions live in chat history and people's heads. Sessions close. People leave. <b className="text-zinc-800">The product brain walks out the door.</b>
        </>
      ),
    },
    {
      icon: <Map className="w-5 h-5 text-rose-500" strokeWidth={2} />,
      iconBg: 'bg-rose-100/80',
      title: 'Nobody knows the current state',
      text: (
        <>
          For legacy systems, documentation describes intentions from years ago. The only truth is code — <b className="text-zinc-800">readable by engineers only</b>, and by no one at decision level.
        </>
      ),
    },
  ];

  return (
    <SplitSection
      id="problem"
      watermarkText="PROBLEM"
      leftTitle="The Problem"
      bottomContent={
        <div className="w-full mt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-[1400px] mx-auto"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="group flex bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative h-full"
              >
                {/* Card Content */}
                <div className="flex-1 p-8 flex flex-col justify-start">
                  <div className="flex flex-col">
                    {/* Circle Icon */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 ${card.iconBg}`}
                    >
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[18px] xl:text-[20px] font-bold text-[#09090D] leading-[1.3] mb-4">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-zinc-500 leading-[1.6] font-normal">
                      {card.text}
                    </p>
                  </div>
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
          Coding agents are only as good as their context. And today, <GradientText>context dies with every chat.</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          Teams adopted AI coding tools in months. Nobody built the layer that tells those tools what the product actually is. The result:
        </motion.p>
      </div>
    </SplitSection>
  );
}
