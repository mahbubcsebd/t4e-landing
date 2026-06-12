'use client';

import { motion } from 'framer-motion';
import { Shield, GitBranch, Users, History, Kanban, BookOpen, Key, EyeOff, Server, Presentation } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function Enterprise() {
  const features = [
    { icon: <GitBranch className="w-5 h-5 text-blue-600" />, bg: "bg-blue-100/80", title: "Concept version control", text: "A real version control system for product definitions — see how the spec evolved, who changed what, and roll back." },
    { icon: <Users className="w-5 h-5 text-indigo-600" />, bg: "bg-indigo-100/80", title: "Groups, roles & permissions", text: "Platform-level RBAC: user groups, per-project permissions, and roleAccess down to individual screens, flows, and data objects." },
    { icon: <History className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-100/80", title: "Full activity & audit logs", text: "Every action recorded. 'Which requirement produced this code?' has an answer your auditors can read — before the audit, not after." },
    { icon: <Kanban className="w-5 h-5 text-blue-500" />, bg: "bg-blue-100/80", title: "Jira Cloud integration", text: "Issues and tasks bridge into the workflow your organization already runs. No rip-and-replace." },
    { icon: <BookOpen className="w-5 h-5 text-amber-600" />, bg: "bg-amber-100/80", title: "Knowledge base with collaboration", text: "Team knowledge pages with collaboration and feedback loops — product knowledge and tribal knowledge finally in one governed place." },
    { icon: <Key className="w-5 h-5 text-purple-600" />, bg: "bg-purple-100/80", title: "Your models, your keys", text: "Bring-your-own API keys across Anthropic, OpenAI, and Google. Per-step credit metering shows exactly what every agent action costs." },
    { icon: <EyeOff className="w-5 h-5 text-rose-600" />, bg: "bg-rose-100/80", title: "Sensitive-data awareness", text: "ERD fields flagged sensitive (ID documents, birth dates) are excluded from generated APIs. Privacy lives in the model, not in a wiki." },
    { icon: <Presentation className="w-5 h-5 text-sky-600" />, bg: "bg-sky-100/80", title: "Board-ready outputs", text: "Concepts export to native PowerPoint and Word; the presentation and video agents turn specs into stakeholder communication automatically." }
  ];

  return (
    <SplitSection
      id="enterprise"
      watermarkText="GOVERN"
      leftTitle="Enterprise-Grade"
      bottomContent={
        <div className="w-full mt-12 pb-20 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] p-6"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${feature.bg}`}>
                  {feature.icon}
                </div>
                <h3 className="text-[15px] font-bold text-[#09090D] leading-[1.3] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-[1.6] font-normal m-0">
                  {feature.text}
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
          Governance that was <GradientText>built in, not bolted on</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          Everything an AI-governance review asks for — already in the platform.
        </motion.p>
      </div>
    </SplitSection>
  );
}
