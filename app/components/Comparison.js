'use client';

import { motion } from 'framer-motion';
import { Table as TableIcon } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';


export default function Comparison() {
const comparisonData = [
    {
      capability: "Writing & refactoring code",
      claude: { text: "Excellent", color: "text-emerald-600" },
      cursor: { text: "Excellent", color: "text-emerald-600" },
      codex: { text: "Excellent", color: "text-emerald-600" },
      t4e: "Own developer agent + orchestrates all three"
    },
    {
      capability: "Persistent product concept, flows & rules",
      claude: { text: "Chat-bound", color: "text-rose-600" },
      cursor: { text: "Chat-bound", color: "text-rose-600" },
      codex: { text: "Chat-bound", color: "text-rose-600" },
      t4e: "6-Layer Concept, versioned"
    },
    {
      capability: "Machine-readable ERD / API contracts",
      claude: { text: "Invents them", color: "text-rose-600" },
      cursor: { text: "Invents them", color: "text-rose-600" },
      codex: { text: "Invents them", color: "text-rose-600" },
      t4e: "Stored as JSON, agent-parseable"
    },
    {
      capability: "UI design system as enforced contract",
      claude: { text: "Prompt discipline", color: "text-amber-600" },
      cursor: { text: "Prompt discipline", color: "text-amber-600" },
      codex: { text: "Prompt discipline", color: "text-amber-600" },
      t4e: "Global design instructions, per-screen designs"
    },
    {
      capability: "Reverse-engineer legacy code into specs",
      claude: { text: "One-off, in-chat", color: "text-amber-600" },
      cursor: { text: "One-off, in-chat", color: "text-amber-600" },
      codex: { text: "One-off, in-chat", color: "text-amber-600" },
      t4e: "Continuous background service + on-prem node"
    },
    {
      capability: "Browser-level QA with evidence",
      claude: { text: "—", color: "text-rose-600" },
      cursor: { text: "—", color: "text-rose-600" },
      codex: { text: "CI checks", color: "text-amber-600" },
      t4e: "Playwright runs, screenshots, auto-filed issues"
    },
    {
      capability: "Deploy with AI auto-fix loop",
      claude: { text: "Scripted", color: "text-amber-600" },
      cursor: { text: "—", color: "text-rose-600" },
      codex: { text: "CI-dependent", color: "text-amber-600" },
      t4e: "Azure pipeline: deploy → check → repair"
    },
    {
      capability: "Export/import whole product structure",
      claude: { text: "—", color: "text-rose-600" },
      cursor: { text: "—", color: "text-rose-600" },
      codex: { text: "—", color: "text-rose-600" },
      t4e: "Full blueprint portability + template library"
    },
    {
      capability: "Cross-tool, cross-team continuity",
      claude: { text: "Per-user memory", color: "text-rose-600" },
      cursor: { text: "Per-machine", color: "text-rose-600" },
      codex: { text: "Per-run", color: "text-rose-600" },
      t4e: "One spec via MCP for every agent"
    },
    {
      capability: "Governance: RBAC, audit, Jira, version control",
      claude: { text: "—", color: "text-rose-600" },
      cursor: { text: "—", color: "text-rose-600" },
      codex: { text: "—", color: "text-rose-600" },
      t4e: "Built in"
    }
  ];

  return (
    <SplitSection
      id="comparison"
      watermarkText="COMPARE"
      leftTitle="Honest Comparison"
      bottomContent={
        <div className="w-full mt-12 pb-20 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Desktop View: Table */}
            <div className="hidden lg:block w-full bg-[#f8fafc]/50 border border-zinc-200/60 rounded-[24px] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] text-left border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#07A7E1]/5 to-[#093cad]/5 border-b border-zinc-200/60">
                      <th className="p-6 text-sm font-bold text-[#09090D] tracking-wider uppercase whitespace-nowrap">Capability</th>
                      <th className="p-6 text-sm font-bold text-[#09090D] tracking-wider uppercase whitespace-nowrap">Claude Code</th>
                      <th className="p-6 text-sm font-bold text-[#09090D] tracking-wider uppercase whitespace-nowrap">Cursor</th>
                      <th className="p-6 text-sm font-bold text-[#09090D] tracking-wider uppercase whitespace-nowrap">Codex</th>
                      <th className="p-6 text-sm font-bold tracking-wider uppercase whitespace-nowrap"><GradientText>think4ever</GradientText></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/60">
                    {comparisonData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                        <td className="p-6 text-[14px] align-top font-bold text-[#09090D]">{row.capability}</td>
                        <td className={`p-6 text-[14px] align-top font-semibold ${row.claude.color}`}>{row.claude.text}</td>
                        <td className={`p-6 text-[14px] align-top font-semibold ${row.cursor.color}`}>{row.cursor.text}</td>
                        <td className={`p-6 text-[14px] align-top font-semibold ${row.codex.color}`}>{row.codex.text}</td>
                        <td className="p-6 text-[14px] align-top font-bold"><GradientText>{row.t4e}</GradientText></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile View: Cards */}
            <div className="lg:hidden flex flex-col gap-4">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="bg-[#f8fafc]/50 border border-zinc-200/60 rounded-2xl shadow-sm overflow-hidden">
                  <div className="p-4 bg-gradient-to-r from-[#07A7E1]/5 to-[#093cad]/5 border-b border-zinc-200/60 font-bold text-[#09090D]">
                    {row.capability}
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-zinc-500">Claude Code:</span>
                      <span className={`font-semibold ${row.claude.color}`}>{row.claude.text}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-zinc-500">Cursor:</span>
                      <span className={`font-semibold ${row.cursor.color}`}>{row.cursor.text}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-zinc-500">Codex:</span>
                      <span className={`font-semibold ${row.codex.color}`}>{row.codex.text}</span>
                    </div>
                    <div className="mt-2 pt-3 border-t border-zinc-200/60 flex flex-col gap-1">
                      <span className="text-[12px] font-bold text-[#09090D] uppercase tracking-wider">think4ever</span>
                      <span className="text-sm font-bold"><GradientText>{row.t4e}</GradientText></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          What each layer of your stack <GradientText>actually solves</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          think4ever doesn't replace your coding agents — it's the layer they're missing. They answer "how do I write this code?"; think4ever answers "what should this system be — and is it still true?"
        </motion.p>
      </div>
    </SplitSection>
  );
}
