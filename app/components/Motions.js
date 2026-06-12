'use client';

import { motion } from 'framer-motion';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

const GradientCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-none">
    <defs>
      <linearGradient id="checkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#07A7E1" />
        <stop offset="100%" stopColor="#093cad" />
      </linearGradient>
    </defs>
    <path d="M20 6L9 17l-5-5" stroke="url(#checkGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Motions() {
  return (
    <SplitSection
      id="motions"
      watermarkText="MOTIONS"
      leftTitle="Two Ways to Build"
      bottomContent={
        <div className="w-full mt-12 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-[1400px] mx-auto">
            {/* Motion 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] p-8 md:p-10"
            >
              <h3 className="m-0 mb-[6px] text-[20px] lg:text-[24px] font-bold text-[#09090D] flex items-center gap-[12px]">
                Motion 1 — Your agents, via MCP
              </h3>
              <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-zinc-500 mb-4 block">
                Claude Code · Cursor · Codex · any MCP agent
              </span>
              <p className="text-[14px] lg:text-[15px] text-zinc-600 leading-relaxed m-0 mb-[24px]">
                Connect the tools your team already pays for. They read the
                6-Layer Concept over MCP and execute the spec instead of
                guessing it.
              </p>
              <ul className="m-0 p-0 list-none flex flex-col gap-3">
                {[
                  'Same spec served to every agent — no drift between IDE, terminal, and CI lanes',
                  'Vendor-independent: swap agents without losing a single requirement',
                  'Proven live: Claude Code rebuilt 21 production-grade screens + extracted a full API spec from one stored concept, in one session',
                  'Agents write progress, issues & comments back into the project',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-zinc-500 flex gap-3 items-start leading-relaxed"
                  >
                    <GradientCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Motion 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="group flex flex-col bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] p-8 md:p-10"
            >
              <h3 className="m-0 mb-[6px] text-[20px] lg:text-[24px] font-bold text-[#09090D] flex items-center gap-[12px]">
                Motion 2 — The built-in agent workforce
              </h3>
              <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-zinc-500 mb-4 block">
                12 specialized agents · manager-orchestrated · multi-model
              </span>
              <p className="text-[14px] lg:text-[15px] text-zinc-600 leading-relaxed m-0 mb-[24px]">
                A Manager Agent decomposes complex work into up to 100 ordered
                subtasks and routes them to specialists — developer, QA,
                security, database, deployment and more.
              </p>
              <ul className="m-0 p-0 list-none flex flex-col gap-3">
                {[
                  <span key="1">
                    QA agent runs{' '}
                    <b className="text-zinc-800">real browser tests</b>{' '}
                    (Playwright/Puppeteer), captures screenshots, auto-files
                    issues
                  </span>,
                  <span key="2">
                    Deploy pipeline: build → containerize → deploy to Azure →
                    health check →{' '}
                    <b className="text-zinc-800">AI auto-fix loop</b>
                  </span>,
                  'Multi-model under the hood: Anthropic, OpenAI, Google — plus bring-your-own API keys',
                  'Per-step credit metering — you see exactly what every agent step costs',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-zinc-500 flex gap-3 items-start leading-relaxed"
                  >
                    <GradientCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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
          Bring your agents. Or use ours. <GradientText>Or both.</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          <span className="text-[18px] lg:text-[20px] text-[#09090D] font-bold block mb-3">Stop re-explaining your product to your AI.</span>
          think4ever is the only platform that both{' '}
          <b className="text-zinc-800">feeds external coding agents</b> a real
          spec and{' '}
          <b className="text-zinc-800">
            ships a complete in-house agent workforce
          </b>{' '}
          that takes a concept to deployed software on its own.
        </motion.p>
      </div>
    </SplitSection>
  );
}
