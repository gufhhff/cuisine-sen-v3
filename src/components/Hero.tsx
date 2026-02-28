'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-32 pb-20 lg:pt-40 lg:pb-40 flex flex-col items-center overflow-hidden bg-[#F4F6F0]">
      
      {/* Top Center: Logo / CTA */}
      <div className="flex flex-col items-center z-20 mt-4 md:mt-10 mb-8 md:mb-0">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#8E1616] font-display font-black text-3xl md:text-4xl uppercase tracking-tighter mb-6"
        >
          Cuisine Sen
        </motion.div>
        
        <motion.a 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          href="#specialites" 
          aria-label="Découvrir la carte des spécialités"
          className="webflow-btn bg-[#8E1616] text-white group"
        >
          <div className="btn-circle text-[#8E1616] group-hover:scale-110 transition-transform">
            <ArrowRight size={16} aria-hidden="true" />
          </div>
          <span className="btn-text">Découvrir la carte</span>
        </motion.a>
      </div>

      {/* Main Stage Grid */}
      <div className="relative w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-center mt-10 lg:mt-20 z-10 px-6">
        
        {/* Left: Decorative Text and Wiggle Arrow */}
        <div className="hidden lg:flex flex-col items-end pr-10 relative">
          <motion.div 
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: -18 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 right-10 is-wiggle"
          >
            <span className="font-display font-black text-3xl text-[#172111]/20 uppercase leading-none text-right block">
              100%<br/>Locavore
            </span>
          </motion.div>
          <motion.svg 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#8E1616" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" 
            className="mt-20 mr-10 is-wiggle"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </motion.svg>
        </div>

        {/* Center: Main Visual (Product/Dish) */}
        <motion.div 
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center h-[350px] md:h-[500px] w-full"
        >
          {/* Main shape container with real image */}
          <div className="w-[240px] md:w-[300px] h-[320px] md:h-[400px] bg-[#8E1616] rounded-[100px] md:rounded-t-full md:rounded-b-3xl shadow-2xl flex items-center justify-center relative overflow-hidden group">
             <Image 
               src="/images/sen_hero.png" 
               alt="Sen Cuisine Plat Signature" 
               fill 
               priority
               sizes="(max-width: 768px) 240px, 300px"
               className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 mix-blend-overlay"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
             <span className="relative z-10 text-white font-display font-black text-xl md:text-2xl -rotate-90 whitespace-nowrap tracking-widest uppercase">
               L'Âme Khmère
             </span>
          </div>

          {/* Floating Facts */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] md:top-[20%] left-0 md:-left-10 bg-white px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-3xl shadow-xl rotate-[-10deg] z-20"
          >
            <div className="font-display font-black text-2xl md:text-3xl text-[#172111]">100<span className="text-sm">%</span></div>
            <div className="text-[10px] md:text-xs font-bold uppercase text-[#172111]/50">Maison</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] md:bottom-[20%] right-0 md:-right-10 bg-white px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-3xl shadow-xl rotate-[15deg] z-20"
          >
            <div className="font-display font-black text-2xl md:text-3xl text-[#172111]">0<span className="text-sm">km</span></div>
            <div className="text-[10px] md:text-xs font-bold uppercase text-[#172111]/50">Terroir</div>
          </motion.div>
        </motion.div>

        {/* Right: Huge Split Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-10 mt-8 lg:mt-0 z-20">
          <h1 className="font-display font-black text-[15vw] sm:text-[10vw] lg:text-[5vw] leading-[0.85] tracking-tighter text-[#172111] uppercase flex flex-col gap-2">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="overflow-hidden">
              <span className="block text-white" style={{ WebkitTextStroke: '1px #172111' }}>Cambodge</span>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="overflow-hidden">
              <span className="block lowercase italic font-normal text-3xl md:text-4xl text-[#8E1616]">rencontre</span>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="overflow-hidden">
              <span className="block">Niort</span>
            </motion.div>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-base md:text-lg font-bold text-[#172111]/70 max-w-sm px-4 lg:px-0"
          >
            L'alliance parfaite entre les recettes traditionnelles khmères de Sen et les meilleurs ingrédients locaux des Deux-Sèvres.
          </motion.p>
        </div>

      </div>

      {/* Background Wavy SVG at the bottom (Curve) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-[200%] md:w-[150%] h-auto -ml-[50%] md:-ml-[25%] relative -bottom-2">
          <path fill="#172111" fillOpacity="1" d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,213,960,213.3C1120,213,1280,160,1360,133.3L1440,107L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

    </section>
  );
}
