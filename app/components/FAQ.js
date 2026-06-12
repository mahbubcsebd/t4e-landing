'use client';

import { motion } from 'framer-motion';
import { CircleHelp } from 'lucide-react';
import GradientText from './GradientText';
import SplitSection from './SplitSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "Isn't this just documentation? Docs always go stale.",
      a: <>That's exactly the failure mode we engineered out. The <b className="text-zinc-800">Diffusion Vision service continuously reads your codebase</b> and syncs concepts & flows back, so the spec describes the running system — not last year's intentions. A spec that's cheaper to keep true than to abandon behaves nothing like documentation.</>
    },
    {
      q: "We already use Claude Code / Cursor. Why add a layer?",
      a: <>Keep them — that's the point. They're excellent executors with <b className="text-zinc-800">no durable product brain</b>: every session starts from zero and every developer describes the product differently. think4ever serves all of them the same machine-readable spec over MCP. Your agents get better the day you connect them.</>
    },
    {
      q: "What if we want to leave?",
      a: <>Export the entire structure — all six layers — and take it with you. <b className="text-zinc-800">The no-hostage design is deliberate</b>: formats become standards because users can leave, which is precisely why they don't.</>
    },
    {
      q: "Our code can't leave our infrastructure.",
      a: <>It doesn't have to. The <b className="text-zinc-800">on-prem sync node</b> (own identity, own encryption, own database) runs codebase analysis inside your perimeter and syncs only the derived concept structure. Built with regulated industries in mind.</>
    },
    {
      q: "Which AI models does it depend on?",
      a: <>None exclusively. The platform runs <b className="text-zinc-800">Anthropic, OpenAI, and Google models</b>, supports bring-your-own API keys, and meters credits per agent step. Model churn is a config change, not a migration.</>
    },
    {
      q: "How do we start without a big process change?",
      a: <>Three doors, all small: <b className="text-zinc-800">(1)</b> pick a starter template from the library and customize it; <b className="text-zinc-800">(2)</b> import an existing GitHub repo or ZIP and let analysis agents map your current state; <b className="text-zinc-800">(3)</b> connect your existing coding agent via MCP to one project. Value lands before any workflow changes.</>
    }
  ];

  return (
    <SplitSection
      id="faq"
      watermarkText="FAQ"
      leftTitle="FAQ"
      bottomContent={
        <div className="w-full mt-12 pb-20 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
              <div className="flex flex-col gap-4">
                {faqs.slice(0, 3).map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-[#f8fafc]/50 border border-zinc-200/60 rounded-[16px] overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md">
                    <AccordionTrigger className="px-6 py-5 font-bold text-[15px] text-[#09090D] hover:no-underline [&[data-state=open]>svg]:rotate-90">
                      <div className="flex gap-3 items-center text-left">
                        {faq.q}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0 text-[14px] text-zinc-500 leading-[1.6]">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {faqs.slice(3).map((faq, idx) => (
                  <AccordionItem key={idx + 3} value={`item-${idx + 3}`} className="bg-[#f8fafc]/50 border border-zinc-200/60 rounded-[16px] overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md">
                    <AccordionTrigger className="px-6 py-5 font-bold text-[15px] text-[#09090D] hover:no-underline [&[data-state=open]>svg]:rotate-90">
                      <div className="flex gap-3 items-center text-left">
                        {faq.q}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0 text-[14px] text-zinc-500 leading-[1.6]">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            </Accordion>
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
          The questions skeptics ask <GradientText>first</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          Clear answers to common questions about how think4ever integrates with your existing workflows, coding agents, and strict security requirements.
        </motion.p>
      </div>
    </SplitSection>
  );
}
