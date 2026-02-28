'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="nav-container"
      >
        <div className="nav-grid flex lg:grid justify-between">
          {/* Left: Social Media Circles (Hidden on small mobile, shown on tablet/desktop) */}
          <div className="hidden sm:flex gap-2 justify-self-start">
            <a href="https://www.instagram.com/cuisinesen/" target="_blank" rel="noreferrer" className="nav-social-circle group">
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094032890538" target="_blank" rel="noreferrer" className="nav-social-circle group">
              <Facebook size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Center: Pill shaped links */}
          <div className="nav-links-pill hidden lg:flex">
            <Link href="#concept" className="nav-link relative overflow-hidden group">
              <span className="relative z-10">Concept</span>
            </Link>
            <Link href="#specialites" className="nav-link relative overflow-hidden group">
              <span className="relative z-10">Spécialités</span>
            </Link>
          </div>

          {/* Right: Custom Button & Mobile Toggle */}
          <div className="nav-cta-wrapper flex items-center gap-4">
            <Link href="/contact" className="webflow-btn-white hidden md:flex group">
              <div className="btn-circle group-hover:bg-[#8E1616] group-hover:text-white transition-colors duration-300">
                <ArrowRight size={16} />
              </div>
              <span className="btn-text">Réserver</span>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden nav-social-circle !bg-white/90 backdrop-blur-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-[#F4F6F0] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <Link href="#concept" onClick={() => setIsOpen(false)} className="text-4xl font-display font-black text-[#172111] uppercase tracking-tighter">Concept</Link>
            <Link href="#specialites" onClick={() => setIsOpen(false)} className="text-4xl font-display font-black text-[#172111] uppercase tracking-tighter">Spécialités</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-4xl font-display font-black text-[#172111] uppercase tracking-tighter">Contact</Link>
            
            <div className="flex gap-4 mt-8">
              <a href="https://www.instagram.com/cuisinesen/" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md text-[#172111]">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094032890538" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md text-[#172111]">
                <Facebook size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
