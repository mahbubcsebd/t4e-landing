'use client';

import { motion } from 'framer-motion';
import { Search, Server, Handshake, GraduationCap } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function ReverseEngineering() {
  const cards = [
    {
      icon: Server,
      title: "On-prem sync node",
      desc: <>A deployable child node — own identity, own encryption, own database — runs the analysis <b className="text-[#09090D]">inside your infrastructure</b>. Code never has to leave the building. Built for regulated industries.</>
    },
    {
      icon: Handshake,
      title: "M&A & takeover due diligence",
      desc: <>Scan an acquisition target's repo or an inherited client codebase. Know what you're actually buying — <b className="text-[#09090D]">before</b> you sign, not six months after.</>
    },
    {
      icon: GraduationCap,
      title: "Onboarding in hours",
      desc: <>New engineers — and new AI agents — read the discovered concept instead of spelunking code. Attrition stops deleting institutional memory.</>
    }
  ];

  return (
    <SplitSection
      id="reverse"
      watermarkText="BROWNFIELD"
      leftTitle="Reverse Engineer"
      bottomContent={
        <div className="w-full mt-12 pb-20 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#f8fafc]/50 border border-zinc-200/60 rounded-[24px] overflow-hidden shadow-sm mb-12 p-4 md:p-8"
          >
            <div className="overflow-x-auto">
              <svg
                width="1040"
                height="280"
                viewBox="0 0 1040 280"
                fontFamily="Inter,system-ui,sans-serif"
                role="img"
                aria-label="Reverse engineering flow from legacy code to living concept"
                className="block mx-auto min-w-[840px]"
              >
                <defs>
                  <marker id="ra" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9" />
                  </marker>
                  <marker id="rg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#22c55e" />
                  </marker>
                </defs>
                <g fontSize="12.5" fontWeight="800" fill="#0c4a6e">
                  <rect x="30" y="70" width="190" height="120" rx="13" fill="#fff" stroke="#bae6fd" strokeWidth="2" />
                  <text x="125" y="103" textAnchor="middle">Any codebase</text>
                  <text x="125" y="125" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#0369a1">GitHub import · ZIP upload</text>
                  <text x="125" y="142" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#0369a1">10-year-old monolith welcome</text>
                  <text x="125" y="159" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#0369a1">zero documentation required</text>

                  <rect x="290" y="55" width="230" height="150" rx="13" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
                  <text x="405" y="88" textAnchor="middle" fill="#92400e">Diffusion Vision Agents</text>
                  <text x="405" y="112" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#b45309">background service</text>
                  <text x="405" y="129" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#b45309">multi-project, parallel</text>
                  <text x="405" y="146" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#b45309">reads code, infers flows,</text>
                  <text x="405" y="163" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#b45309">entities, screens &amp; rules</text>
                  <text x="405" y="187" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#92400e">optional on-prem sync node</text>

                  <rect x="590" y="55" width="220" height="150" rx="13" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2.5" />
                  <text x="700" y="88" textAnchor="middle">Living 6-Layer Concept</text>
                  <text x="700" y="112" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#0369a1">current state, not intentions</text>
                  <text x="700" y="129" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#0369a1">readable by executives,</text>
                  <text x="700" y="146" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#0369a1">auditors &amp; new hires</text>
                  <text x="700" y="170" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0284c7">version-controlled</text>

                  <rect x="870" y="35" width="150" height="80" rx="12" fill="#fff" stroke="#bae6fd" strokeWidth="2" />
                  <text x="945" y="68" textAnchor="middle" fontSize="11.5">Modernize</text>
                  <text x="945" y="88" textAnchor="middle" fontSize="10" fontWeight="500" fill="#0369a1">agents rebuild from spec</text>

                  <rect x="870" y="145" width="150" height="80" rx="12" fill="#fff" stroke="#bae6fd" strokeWidth="2" />
                  <text x="945" y="178" textAnchor="middle" fontSize="11.5">Govern</text>
                  <text x="945" y="198" textAnchor="middle" fontSize="10" fontWeight="500" fill="#0369a1">audit, Jira, knowledge base</text>
                </g>
                <line x1="220" y1="130" x2="285" y2="130" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#ra)" />
                <line x1="520" y1="130" x2="585" y2="130" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#ra)" />
                <line x1="810" y1="105" x2="865" y2="80" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#ra)" />
                <line x1="810" y1="155" x2="865" y2="180" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#ra)" />
                <path d="M 700 205 Q 700 255 405 255 Q 125 255 125 195" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="7 5" fill="none" markerEnd="url(#rg)" />
                <text x="412" y="247" textAnchor="middle" fontSize="11" fontWeight="800" fill="#15803d">
                  continuous sync — spec and code never drift apart
                </text>
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
          Point it at any codebase. Watch your <GradientText>real system appear</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          The Diffusion Vision service reverse-engineers legacy code into a complete 6-Layer Concept — concepts, flows, data models, screens. Continuously. So the spec never rots, and the system everyone forgot becomes visible to everyone.
        </motion.p>
      </div>
    </SplitSection>
  );
}
