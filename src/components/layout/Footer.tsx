'use client';
import { Instagram, Facebook, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#172111] text-white pt-24 md:pt-40 pb-12 overflow-hidden relative">
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[1000px] h-[1000px] border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 md:gap-32 mb-24 md:mb-40">
          
          {/* BIG BRANDING */}
          <div className="flex flex-col gap-8 md:gap-12 max-w-2xl">
            <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-display font-black leading-[0.9] tracking-tighter uppercase">
              CUISINE <br /> <span className="text-[#8E1616]">SEN</span>
            </h2>
            <p className="text-lg md:text-2xl font-body text-white/40 leading-relaxed">
              L'authenticité du Cambodge, le respect du terroir de Niort. Une cuisine locavore, passionnée et S-Rank.
            </p>
            <div className="flex items-center gap-6 md:gap-8 text-[#D4AF37]">
              <a href="https://www.instagram.com/cuisinesen/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={28} className="hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094032890538" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={28} className="hover:text-white transition-colors cursor-pointer" />
              </a>
            </div>
          </div>

          {/* CONTACT INFO FROM ORIGINAL SITE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 w-full lg:w-auto">
            <div className="flex flex-col gap-8 md:gap-10">
              <span className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-[#8E1616]">Navigation</span>
              <nav className="flex flex-col gap-4 md:gap-6">
                <Link href="/" className="text-lg md:text-xl font-display font-black uppercase hover:text-[#8E1616] transition-colors">Accueil</Link>
                <Link href="/concept" className="text-lg md:text-xl font-display font-black uppercase hover:text-[#8E1616] transition-colors">Concept</Link>
                <Link href="/cambodge" className="text-lg md:text-xl font-display font-black uppercase hover:text-[#8E1616] transition-colors">Le Cambodge</Link>
                <Link href="/specialites" className="text-lg md:text-xl font-display font-black uppercase hover:text-[#8E1616] transition-colors">Spécialités</Link>
                <Link href="/evenements" className="text-lg md:text-xl font-display font-black uppercase hover:text-[#8E1616] transition-colors">Événements</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-8 md:gap-10">
              <span className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-[#8E1616]">Contact</span>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-[10px] md:text-xs font-body text-white/30 uppercase tracking-wider">Email</span>
                  <a href="mailto:contact@cuisine-sen.com" className="text-base md:text-xl font-display font-black hover:text-[#D4AF37] transition-colors break-all">contact@cuisine-sen.com</a>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-[10px] md:text-xs font-body text-white/30 uppercase tracking-wider">Téléphone</span>
                  <a href="tel:0768099661" className="text-base md:text-xl font-display font-black hover:text-[#D4AF37] transition-colors">07 68 09 96 61</a>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-[10px] md:text-xs font-body text-white/30 uppercase tracking-wider">Point de retrait</span>
                  <span className="text-sm md:text-lg font-display font-black uppercase leading-tight">Laboratoire entre le petit Leclerc et les quais Metayer<br/>NIORT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-center md:text-left">
          <p className="text-[8px] md:text-[10px] font-display font-black uppercase tracking-widest text-white/20">
            © 2026 CUISINE SEN. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-display font-black uppercase tracking-widest text-white/20">
            MADE WITH <Heart size={10} fill="#8E1616" className="text-[#8E1616]" /> BY NARUTO V3
          </div>
          <div className="flex gap-8 md:gap-12">
            <Link href="#" className="text-[8px] md:text-[10px] font-display font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="#" className="text-[8px] md:text-[10px] font-display font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
