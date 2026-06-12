'use client';

import { motion } from 'framer-motion';
import GradientText from './GradientText';
import SplitSection from './SplitSection';

export default function Layers() {
  const layers = [
    {
      num: '1',
      title: 'Concept & Design Contract',
      text: 'What the product is, for whom — plus the enforced style/UX law every screen obeys',
      tag: 'structured JSON',
    },
    {
      num: '2',
      title: 'User Flows & Business Rules',
      text: 'Named, testable rules — rule_no_double_booking, rule_room_clean_for_checkin',
      tag: 'structured JSON',
    },
    {
      num: '3',
      title: 'Data Model / ERD',
      text: 'Entities, relationships, cardinalities — with sensitive fields flagged & excluded from APIs',
      tag: 'structured JSON',
    },
    {
      num: '4',
      title: 'API Contracts',
      text: 'Endpoints with request/response examples and attached business rules',
      tag: 'structured JSON',
    },
    {
      num: '5',
      title: 'UI Designs & Navigation',
      text: 'Full HTML/CSS/JS per screen, page order, navigation graph — pixel-real, not wireframes',
      tag: 'HTML/CSS/JS',
    },
    {
      num: '6',
      title: 'Roles & Access',
      text: 'Every screen, flow and data object carries roleAccess — agents generate permission-aware code from day one',
      tag: 'structured JSON',
    },
  ];

  return (
    <SplitSection
      id="layers"
      watermarkText="LAYERS"
      leftTitle="The Format"
      bottomContent={
        <div className="w-full mt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-3 relative z-10 max-w-5xl mx-auto"
          >
            {layers.map((layer, idx) => (
              <div
                key={idx}
                className={`group flex flex-col p-8 md:p-10 bg-white transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-zinc-200 hover:z-20 relative origin-center border border-[#E0E0E0] h-full
                  ${idx === 0 ? 'rounded-t-[24px] lg:rounded-none lg:rounded-tl-[24px]' : ''}
                  ${idx === 1 ? '-mt-[1px] lg:mt-0 lg:-ml-[1px]' : ''}
                  ${idx === 2 ? '-mt-[1px] lg:mt-0 lg:-ml-[1px] lg:rounded-tr-[24px]' : ''}
                  ${idx === 3 ? '-mt-[1px] lg:rounded-bl-[24px]' : ''}
                  ${idx === 4 ? '-mt-[1px] lg:-ml-[1px]' : ''}
                  ${idx === 5 ? 'rounded-b-[24px] lg:rounded-none lg:rounded-br-[24px] -mt-[1px] lg:-ml-[1px]' : ''}
                `}
              >
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col">
                    <div className="text-[13px] font-semibold text-[#89A4C4] mb-6">
                      0{layer.num}
                    </div>
                    <h3 className="text-[20px] font-bold text-[#09090D] leading-[1.3] mb-4">
                      {layer.title}
                    </h3>
                    <p className="text-[15px] text-[#5C6E85] leading-relaxed font-medium flex-grow mb-8">
                      {layer.text}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-[6px] rounded-full border border-[#07A7E1]/20 bg-[#07A7E1]/5 text-[#07A7E1] text-[11px] font-bold uppercase tracking-wider leading-none">
                      {layer.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="text-center text-[14px] text-zinc-500 mt-12 font-medium"
          >
            <b className="text-zinc-800">Versioned</b> with a built-in version control system · <b className="text-zinc-800">Auditable</b> via activity logs · <b className="text-zinc-800">Portable</b> — export/import the entire structure.
          </motion.p>
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
          The 6-Layer Concept: one portable definition of <GradientText>your entire product</GradientText>
        </motion.h2>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] font-normal max-w-2xl"
        >
          SQL canonized data. Git canonized history. Docker canonized packaging. OpenAPI canonized interfaces. The 6-Layer Concept canonizes the product itself — every layer structured, versioned, and machine-readable, so agents parse it deterministically instead of interpreting screenshots and PDFs.
        </motion.p>
      </div>
    </SplitSection>
  );
}
