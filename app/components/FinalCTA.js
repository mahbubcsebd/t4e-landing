'use client';

import { motion } from 'framer-motion';
import { Rocket, Shield } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-32 overflow-hidden border-y border-zinc-200/60"
    >
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px] mx-auto bg-[#f8fafc]/50 p-10 md:p-14 rounded-[32px] border border-zinc-200/60 shadow-sm"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-black text-[#09090D] leading-[1.1] tracking-tight mb-6">
            Stop re-explaining your product to your AI.
          </h2>
          <p className="text-[16px] md:text-[18px] text-zinc-500 leading-relaxed font-medium mb-10">
            Spec once — in six layers. Build everywhere — with your agents or
            ours. Stay true — with continuous code-to-spec sync. The product
            brain your AI era is missing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-semibold rounded-full shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
            >
              <Rocket className="w-4 h-4" /> Start free — one project
            </Link>
            <Link
              href="../enterprise.html"
              className="btn-gradient-outline w-full sm:w-auto inline-flex items-center justify-center px-6 py-[10.5px] font-semibold rounded-full active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
            >
              <span className="btn-text flex items-center gap-2">
                <Shield className="w-4 h-4" /> Enterprise pitch deck
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
