'use client';
import { motion } from 'framer-motion';

export default function Specialties() {
  return (
    <section className="py-20 md:py-32 bg-white relative z-20" id="specialites">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          
          {/* Left: Big Headings */}
          <div className="flex flex-col gap-8 md:gap-10">
            <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase text-[#172111] leading-[1] md:leading-[0.9] tracking-tighter">
              Vous méritez <br /> l'excellence. <br />
              <span className="text-[#8E1616]">Vous méritez <br/> Sen.</span>
            </h2>
            <p className="font-body text-lg md:text-xl font-bold text-[#172111]/70 leading-relaxed max-w-md">
              Validé par les gourmets niortais, chaque plat contient l'âme du Cambodge et la fraîcheur de notre terroir. Irrésistiblement savoureux. Totalement fait maison.
            </p>
            
            <div className="flex flex-col gap-6 mt-4">
              <a href="/specialites" className="webflow-btn bg-[#172111] text-white self-start">
                <div className="btn-circle text-[#172111]">
                  <span className="font-black">+</span>
                </div>
                <span className="btn-text">Voir toutes les spécialités</span>
              </a>
              
              <div className="flex items-center gap-4 mt-2">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                <span className="font-bold text-xs md:text-sm text-[#172111]/60">100% Avis Positifs</span>
              </div>
            </div>
          </div>

          {/* Right: The Media Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative mt-10 lg:mt-0">
            {/* Card 1 */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] sm:aspect-[4/5] bg-[#F4F6F0] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl sm:rotate-[-2deg] sm:mt-10 group"
            >
              <div className="absolute inset-0 bg-[#8E1616]/5 group-hover:bg-[#8E1616]/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <span className="font-display font-black text-2xl md:text-3xl uppercase text-[#8E1616] leading-tight">Amok au Poisson</span>
              </div>
              <div className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="font-black text-[#172111]">1</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[3/4] sm:aspect-[4/5] bg-[#172111] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl sm:rotate-[3deg] group"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <span className="font-display font-black text-2xl md:text-3xl uppercase text-[#D4AF37] leading-tight">Lok Lak de Bœuf</span>
              </div>
              <div className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="font-black text-[#172111]">2</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
