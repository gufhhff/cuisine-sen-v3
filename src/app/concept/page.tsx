'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

export default function ConceptPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F4F6F0] overflow-x-hidden">
      {/* HEADER CONCEPT */}
      <section className="container mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-2 bg-[#8E1616]/10 text-[#8E1616] rounded-full font-bold text-xs uppercase tracking-widest mb-6"
        >
          Notre Philosophie
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl uppercase text-[#172111] tracking-tighter leading-[0.9] max-w-4xl"
        >
          L'Authenticité <br />
          <span className="text-[#8E1616]">Sans Compromis.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 font-body text-lg md:text-xl font-bold text-[#172111]/70 leading-relaxed max-w-2xl"
        >
          Chez Cuisine Sen, nous croyons qu'un bon plat raconte une histoire. Notre histoire commence au Cambodge et prend racine dans les Deux-Sèvres, avec une promesse : 100% fait maison, 100% passion.
        </motion.p>
      </section>

      {/* THREE PILLARS (Mobile First Vertical, Desktop Grid) */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 bg-[#F4F6F0] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 is-wiggle">
              <UtensilsCrossed size={32} className="text-[#8E1616]" />
            </div>
            <h3 className="font-display font-black text-3xl uppercase text-[#172111] mb-4">Le Vrai <br/> Goût</h3>
            <p className="font-body text-[#172111]/70 font-bold leading-relaxed">
              Pas de glutamate, pas d'artifices. Nos recettes sont celles de nos ancêtres, respectées à la lettre pour préserver la subtilité des épices khmères.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#172111] rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex flex-col items-center text-center group mt-0 lg:-mt-12 mb-0 lg:mb-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#55A630]/5 group-hover:bg-[#55A630]/10 transition-colors" />
            <div className="w-20 h-20 bg-[#55A630]/20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 is-wiggle relative z-10">
              <Leaf size={32} className="text-[#55A630]" />
            </div>
            <h3 className="font-display font-black text-3xl uppercase text-white mb-4 relative z-10">Circuit <br/> Court</h3>
            <p className="font-body text-white/70 font-bold leading-relaxed relative z-10">
              Des légumes sourcés localement, des viandes d'origine française. Nous soutenons l'économie locale pour garantir une fraîcheur absolue dans vos assiettes.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 bg-[#F4F6F0] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 is-wiggle">
              <Heart size={32} className="text-[#D4AF37]" />
            </div>
            <h3 className="font-display font-black text-3xl uppercase text-[#172111] mb-4">Le Cœur <br/> à l'ouvrage</h3>
            <p className="font-body text-[#172111]/70 font-bold leading-relaxed">
              La cuisine est un acte d'amour. Chaque portion est préparée le jour même, avec soin, pour vous garantir une expérience culinaire inoubliable.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-6 py-20 flex justify-center">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#8E1616] w-full max-w-5xl rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full z-0" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-tr-full z-0" />
            
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter relative z-10 leading-tight">
              Prêt à voyager <br/> depuis Niort ?
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/specialites" className="webflow-btn-white justify-center">
                <div className="btn-circle">
                  <UtensilsCrossed size={16} />
                </div>
                <span className="btn-text text-[#172111]">Voir le Menu</span>
              </Link>
              <Link href="/contact" className="webflow-btn bg-[#172111] text-white justify-center">
                <div className="btn-circle text-[#172111]">
                  <ArrowRight size={16} />
                </div>
                <span className="btn-text text-white">Commander</span>
              </Link>
            </div>
          </motion.div>
      </section>

    </main>
  );
}