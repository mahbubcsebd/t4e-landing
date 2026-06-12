'use client';

import { motion } from 'framer-motion';
import { Users, Crown, Code, FlaskConical, ListChecks, ShieldHalf, Database, Container, Terminal, Eye, TrendingUp, FileText, Presentation, Lightbulb, RotateCw } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function Agents() {
  const agents = [
    { icon: <Crown className="w-5 h-5 text-amber-600" />, bg: "bg-amber-100", title: "Manager", desc: "Analyzes complex tasks, plans up to 100 ordered subtasks, assigns the right specialist to each" },
    { icon: <Code className="w-5 h-5 text-blue-600" />, bg: "bg-blue-100", title: "Developer", desc: "Implements features against the concept's contracts — the heavyweight of the team" },
    { icon: <FlaskConical className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-100", title: "QA", desc: "Real Playwright/Puppeteer browser runs, screenshots as evidence, auto-files up to 50 issues per run" },
    { icon: <ListChecks className="w-5 h-5 text-purple-600" />, bg: "bg-purple-100", title: "Test Case", desc: "Derives test cases from flows and business rules — coverage tied to the spec, not vibes" },
    { icon: <ShieldHalf className="w-5 h-5 text-red-600" />, bg: "bg-red-100", title: "Security", desc: "Reviews code and configuration for vulnerabilities before they ship" },
    { icon: <Database className="w-5 h-5 text-teal-600" />, bg: "bg-teal-100", title: "Database", desc: "Designs and manages schemas from the ERD layer; connects to live MySQL/Postgres/SQLite" },
    { icon: <Container className="w-5 h-5 text-sky-600" />, bg: "bg-sky-100", title: "Container & Deploy", desc: "AI-generated Dockerfiles, Azure pipeline, health checks — failures trigger an AI fix-and-retry loop" },
    { icon: <Terminal className="w-5 h-5 text-slate-600" />, bg: "bg-slate-200", title: "Terminal", desc: "Executes real shell work in controlled environments" },
    { icon: <Eye className="w-5 h-5 text-indigo-600" />, bg: "bg-indigo-100", title: "Diffusion Vision", desc: "Reverse-engineers legacy codebases into full 6-Layer Concepts — runs as a parallel background service" },
    { icon: <TrendingUp className="w-5 h-5 text-orange-600" />, bg: "bg-orange-100", title: "Analytical", desc: "Analyzes project data and produces decision-grade insights" },
    { icon: <FileText className="w-5 h-5 text-rose-600" />, bg: "bg-rose-100", title: "Document", desc: "Generates specifications and documents — exports to real Word files" },
    { icon: <Presentation className="w-5 h-5 text-fuchsia-600" />, bg: "bg-fuchsia-100", title: "Presentation", desc: "Turns concepts into stakeholder-ready decks — native PowerPoint export" }
  ];

  return (
    <SplitSection
      id="agents"
      watermarkText="AGENTS"
      leftTitle="The Workforce"
      bottomContent={
        <div className="w-full mt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10 max-w-[1400px] mx-auto"
          >
            {agents.map((agent, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative p-6 md:p-8"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${agent.bg}`}>
                  {agent.icon}
                </div>
                <h3 className="text-[17px] font-bold text-[#09090D] leading-[1.3] mb-3">
                  {agent.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-[1.6] font-normal m-0">
                  {agent.desc}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-16 max-w-[1400px] mx-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-row items-stretch gap-4 xl:gap-0 py-[6px]">
              <div className="flex-1 bg-white border border-zinc-200/60 p-[20px_16px] text-center relative rounded-2xl xl:rounded-none xl:rounded-l-3xl shadow-sm">
                <Lightbulb className="w-6 h-6 text-zinc-800 mb-3 mx-auto" />
                <h5 className="m-0 mb-[6px] text-[13px] font-bold text-[#09090D]">Concept</h5>
                <p className="m-0 text-[11px] text-zinc-500">6 layers defined or imported</p>
              </div>
              <div className="flex-1 bg-white border border-zinc-200/60 xl:border-l-0 p-[20px_16px] text-center relative rounded-2xl xl:rounded-none shadow-sm">
                <Crown className="w-6 h-6 text-amber-600 mb-3 mx-auto" />
                <h5 className="m-0 mb-[6px] text-[13px] font-bold text-[#09090D]">Plan</h5>
                <p className="m-0 text-[11px] text-zinc-500">Manager decomposes & assigns</p>
              </div>
              <div className="flex-1 bg-white border border-zinc-200/60 xl:border-l-0 p-[20px_16px] text-center relative rounded-2xl xl:rounded-none shadow-sm">
                <Code className="w-6 h-6 text-blue-600 mb-3 mx-auto" />
                <h5 className="m-0 mb-[6px] text-[13px] font-bold text-[#09090D]">Build</h5>
                <p className="m-0 text-[11px] text-zinc-500">Developer + Database agents</p>
              </div>
              <div className="flex-1 bg-white border border-zinc-200/60 xl:border-l-0 p-[20px_16px] text-center relative rounded-2xl xl:rounded-none shadow-sm">
                <FlaskConical className="w-6 h-6 text-emerald-600 mb-3 mx-auto" />
                <h5 className="m-0 mb-[6px] text-[13px] font-bold text-[#09090D]">Test</h5>
                <p className="m-0 text-[11px] text-zinc-500">QA in real browsers, screenshots</p>
              </div>
              <div className="flex-1 bg-white border border-zinc-200/60 xl:border-l-0 p-[20px_16px] text-center relative rounded-2xl xl:rounded-none shadow-sm">
                <ShieldHalf className="w-6 h-6 text-red-600 mb-3 mx-auto" />
                <h5 className="m-0 mb-[6px] text-[13px] font-bold text-[#09090D]">Secure</h5>
                <p className="m-0 text-[11px] text-zinc-500">Security review gate</p>
              </div>
              <div className="flex-1 bg-white border border-zinc-200/60 xl:border-l-0 p-[20px_16px] text-center relative rounded-2xl xl:rounded-none shadow-sm">
                <Container className="w-6 h-6 text-sky-600 mb-3 mx-auto" />
                <h5 className="m-0 mb-[6px] text-[13px] font-bold text-[#09090D]">Deploy</h5>
                <p className="m-0 text-[11px] text-zinc-500">Containerize → Azure → check</p>
              </div>
              <div className="flex-1 bg-[#fffbeb] border border-[#fde68a] xl:border-l-0 p-[20px_16px] text-center relative rounded-2xl xl:rounded-none xl:rounded-r-3xl shadow-sm">
                <RotateCw className="w-6 h-6 text-[#d97706] mb-3 mx-auto" />
                <h5 className="m-0 mb-[6px] text-[13px] font-bold text-[#09090D]">Auto-fix</h5>
                <p className="m-0 text-[11px] text-[#b45309]">Failures loop back to AI repair</p>
              </div>
            </div>
            <p className="text-center text-[13px] text-zinc-500 mt-6">
              The full delivery pipeline — orchestrated inside think4ever, traceable back to the spec at every step.
            </p>
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
          12 specialized agents. One orchestrator. <GradientText>Zero hand-holding.</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          Not one generalist chatbot — a coordinated team where each agent does one job at production depth.
        </motion.p>
      </div>
    </SplitSection>
  );
}
