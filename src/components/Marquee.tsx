'use client';
import { motion } from 'framer-motion';

export default function Marquee() {
  return (
    <div className="w-full bg-[#172111] overflow-hidden relative flex flex-col justify-center items-center py-12 md:py-24">
      
      {/* Absolute wave background for style */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 442" className="w-[150%] md:w-full h-auto">
          <path stroke="#F4F6F0" strokeWidth="160" d="M-71 371.6C126.3 260 593.5 65.8 934.5 80.8c313 13.8 497 136 572 200"></path>
        </svg>
      </div>

      {/* Rotating Marquee Track to look dynamic but safe on mobile */}
      <div className="relative w-[150%] md:w-[120%] -rotate-3 bg-[#172111] py-4 border-y border-[#F4F6F0]/10 flex overflow-hidden">
        <div className="marquee-track flex gap-8 md:gap-16 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-center whitespace-nowrap">
              <span className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter text-[#F4F6F0]">AUTHENTIQUE</span>
              <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#D4AF37]"></span>
              <span className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter text-[#F4F6F0]">LOCAVORE</span>
              <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#8E1616]"></span>
              <span className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter text-[#F4F6F0]">NIORT</span>
              <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#55A630]"></span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse Marquee Track */}
      <div className="relative w-[150%] md:w-[120%] rotate-2 bg-[#172111] py-4 flex overflow-hidden mt-8">
        <div className="marquee-track flex gap-8 md:gap-16 items-center" style={{ animationDirection: 'reverse', animationDuration: '50s' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-center whitespace-nowrap">
              <span className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px #F4F6F0' }}>CAMBODGE</span>
              <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#F4F6F0]/20"></span>
              <span className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px #F4F6F0' }}>PASSION</span>
              <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#F4F6F0]/20"></span>
              <span className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px #F4F6F0' }}>S-RANK</span>
              <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#F4F6F0]/20"></span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
