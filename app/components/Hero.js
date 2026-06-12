'use client';

import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import Link from 'next/link';
import VideoPlayer from './VideoPlayer';
import ProofBar from './ProofBar';
import BreathingBlob from './BreathingBlob';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-28 pb-12 lg:pt-32"
    >
      {/* ── Vertical Watermark "THINK4EVER" ── */}
      <div
        className="
        absolute
        right-[calc(100vw/2-1140px/2)]
        top-0 bottom-0
        [writing-mode:vertical-rl]
        rotate-180
        pointer-events-none select-none
        flex items-center justify-center
        text-[clamp(5rem,10vw,9rem)]
        font-black uppercase
        text-zinc-200
        tracking-[-0.04em]
        opacity-80
        whitespace-nowrap
        z-0
      "
      >
        THINK4EVER
      </div>

      {/* ── Page Container ── */}
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px] w-full z-20 relative flex flex-col justify-start gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center py-4 lg:py-6">
          {/* Left Side: Text Content */}
          <div className="flex flex-col gap-6">
            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h1
                className="
              text-[24px] sm:text-[32px] md:text-[44px] lg:text-[48px] xl:text-[52px]
              leading-[1.1]
              font-extrabold text-black
            "
              >
                <span className="inline-flex items-center gap-x-3 md:gap-x-4">
                  <BreathingBlob className="shrink-0" /> Your AI
                </span>{' '}
                can write any code. It just doesn't know <span className="text-[#0ea5e9]">what you're building.</span>
              </h1>

              <p className="max-w-lg text-[13px] md:text-sm text-zinc-500 leading-relaxed font-medium mt-1">
                think4ever turns your product into a permanent, machine-readable 6-Layer Concept — flows, data models, API contracts, UI designs, roles — that any agent can execute: Claude Code, Cursor, Codex via MCP, or think4ever's own 12-agent workforce that builds, browser-tests, secures, and deploys it for you. Then keeps the spec true by reading your codebase back.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 mt-2">
              {/* Free Path CTA */}
              <div className="flex flex-col items-center gap-1.5">
                <Link
                  href="#pricing"
                  className="w-full sm:w-auto text-center px-8 py-3 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white font-semibold rounded-full shadow-lg shadow-[#093cad]/10 hover:opacity-95 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
                >
                  Start building free
                </Link>
                <span className="text-[11px] text-zinc-400 font-medium select-none text-center">
                  No credit card required
                </span>
              </div>

              {/* Paid Path CTA */}
              <div className="flex flex-col items-center gap-1.5">
                <Link
                  href="../login.html"
                  className="btn-gradient-outline w-full sm:w-auto text-center px-6 py-[10.5px] font-semibold rounded-full active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
                >
                  <span className="btn-text">See the live proof</span>
                </Link>
                <span className="text-[11px] text-zinc-400 font-medium select-none text-center">
                  For Teams & Power Users
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Video Player */}
          <div className="w-full relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="w-full rounded-[20px] md:rounded-[24px] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50"
            >
              <VideoPlayer
                videoId="nW37QETUq3o"
                className="aspect-video bg-zinc-900"
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Proof Bar embedded directly */}
        <div className="w-full">
          <ProofBar className="px-0 pt-0 pb-0 bg-transparent" />
        </div>
      </div>
    </section>
  );
}
