'use client';

import { motion } from 'framer-motion';
import { Terminal, TextCursor, Cloud, Plug, GitBranch, Kanban, LayoutGrid, Database } from 'lucide-react';

export default function WorksWith() {
  const tools = [
    { name: 'Claude Code', icon: <Terminal className="w-4 h-4 text-[#07A7E1]" /> },
    { name: 'Cursor', icon: <TextCursor className="w-4 h-4 text-[#07A7E1]" /> },
    { name: 'Codex', icon: <Cloud className="w-4 h-4 text-[#07A7E1]" /> },
    { name: 'MCP', icon: <Plug className="w-4 h-4 text-[#07A7E1]" /> },
    { name: 'GitHub import', icon: <GitBranch className="w-4 h-4 text-[#07A7E1]" /> },
    { name: 'Jira Cloud', icon: <Kanban className="w-4 h-4 text-[#07A7E1]" /> },
    { name: 'Azure deploy', icon: <LayoutGrid className="w-4 h-4 text-[#07A7E1]" /> },
    { name: 'MySQL · Postgres · SQLite', icon: <Database className="w-4 h-4 text-[#07A7E1]" /> },
  ];

  return (
    <div className="bg-[#f8fafc]/50 border-y border-zinc-200/60 py-6 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 flex-wrap">
          <span className="text-[12px] uppercase tracking-[0.15em] text-zinc-500 font-bold">Plays with your stack</span>
          
          <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
            {tools.map((tool, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-[14px] font-semibold text-zinc-600 flex items-center gap-2 hover:text-black transition-colors"
              >
                {tool.icon} {tool.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
