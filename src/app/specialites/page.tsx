'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {
    category: "Les Plats Signatures",
    items: [
      {
        name: "Amok au Poisson",
        desc: "Le plat national cambodgien. Filet de poisson frais cuit à l'étouffée dans une feuille de bananier, crème de coco, citronnelle et épices douces.",
        price: "16.00€",
        tag: "Best Seller"
      },
      {
        name: "Lok Lak de Bœuf",
        desc: "Bœuf mariné et sauté minute, servi avec son riz à la tomate, un œuf au plat et la fameuse sauce au poivre et citron.",
        price: "15.00€",
        tag: ""
      },
      {
        name: "Poulet au Curry Rouge",
        desc: "Morceaux de poulet tendres mijotés dans une sauce coco parfumée au curry rouge, patates douces et pousses de bambou.",
        price: "14.50€",
        tag: "Épicé"
      }
    ]
  },
  {
    category: "Les Entrées & Accompagnements",
    items: [
      {
        name: "Nems Maison (x4)",
        desc: "Nems croustillants au porc et aux champignons noirs, roulés à la main le matin même.",
        price: "6.50€",
        tag: "Fait Maison"
      },
      {
        name: "Rouleaux de Printemps (x2)",
        desc: "Galette de riz fraîche, crevettes, vermicelles, menthe et crudités de saison.",
        price: "7.00€",
        tag: "Frais"
      },
      {
        name: "Riz Gluant Parfumé",
        desc: "L'accompagnement traditionnel par excellence, cuit à la vapeur douce.",
        price: "3.50€",
        tag: ""
      }
    ]
  }
];

export default function SpecialitesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white overflow-x-hidden">
      
      {/* HEADER SPECS */}
      <section className="container mx-auto px-6 py-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full font-bold text-xs uppercase tracking-widest mb-6"
        >
          La Carte
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-5xl md:text-7xl uppercase text-[#172111] tracking-tighter leading-none"
        >
          Nos <span className="text-[#8E1616]">Spécialités</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 font-body text-lg font-bold text-[#172111]/60 max-w-xl mx-auto"
        >
          Des recettes préparées chaque jour avec des produits frais. Pensez à commander 24h à l'avance.
        </motion.p>
      </section>

      {/* MENU LIST (Mobile First) */}
      <section className="container mx-auto px-6 py-10 max-w-4xl">
        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl text-[#172111] uppercase tracking-tighter mb-8 border-b-4 border-[#F4F6F0] pb-4 inline-block">
              {section.category}
            </h2>
            
            <div className="flex flex-col gap-6">
              {section.items.map((item, itemIdx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIdx * 0.1 }}
                  key={itemIdx}
                  className="bg-[#F4F6F0] rounded-[30px] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between group hover:bg-[#172111] transition-colors duration-300"
                >
                  <div className="flex flex-col gap-2 md:max-w-[70%]">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display font-black text-2xl text-[#172111] group-hover:text-white transition-colors">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="px-3 py-1 bg-[#8E1616] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-[#172111]/70 group-hover:text-white/70 font-medium leading-relaxed transition-colors">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-[#172111]/10 pt-4 md:pt-0 group-hover:border-white/10">
                    <span className="font-display font-black text-3xl text-[#D4AF37]">
                      {item.price}
                    </span>
                    <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-[#172111] group-hover:text-white mt-2 flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
                      Commander <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* BOTTOM CTA */}
      <section className="container mx-auto px-6 py-10 flex justify-center">
        <Link href="/contact" className="webflow-btn bg-[#8E1616] text-white !py-3 !pl-3 !pr-8 group">
          <div className="btn-circle text-[#8E1616] group-hover:scale-110 transition-transform">
            <ShoppingBag size={20} />
          </div>
          <span className="btn-text text-base">Passer ma commande maintenant</span>
        </Link>
      </section>

    </main>
  );
}