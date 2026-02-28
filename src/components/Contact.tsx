'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { sendEmailAction } from '@/actions/sendEmail';

// Validation Schema Zod
const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  message: z.string().min(10, "Le message doit être plus long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitState('idle');
    const result = await sendEmailAction(data);
    
    if (result.success) {
      setSubmitState('success');
      reset();
      setTimeout(() => setSubmitState('idle'), 6000);
    } else {
      setSubmitState('error');
    }
  };

  return (
    <section className="py-20 md:py-40 bg-[#F4F6F0] relative z-20" id="contact">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase text-[#172111] leading-[0.9] tracking-tighter mb-6">
                Passer <br /> <span className="text-[#8E1616]">Commande</span>
              </h2>
              <p className="font-body text-xl font-bold text-[#172111]/70 leading-relaxed max-w-md">
                Pour vos commandes, merci de nous contacter au moins 24h à l'avance. Sen prépare tout le jour même pour une fraîcheur absolue.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8 mt-4">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#8E1616] shadow-lg group-hover:scale-110 group-hover:bg-[#8E1616] group-hover:text-white transition-all">
                  <Phone size={24} aria-label="Icône téléphone" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-display font-black uppercase tracking-widest text-[#172111]/40">Téléphone</span>
                  <a href="tel:0768099661" className="text-2xl font-display font-black text-[#172111] hover:text-[#8E1616] transition-colors" aria-label="Appeler le 07 68 09 96 61">07 68 09 96 61</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#8E1616] shadow-lg group-hover:scale-110 group-hover:bg-[#8E1616] group-hover:text-white transition-all">
                  <Mail size={24} aria-label="Icône email" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-display font-black uppercase tracking-widest text-[#172111]/40">Email</span>
                  <a href="mailto:contact@cuisine-sen.com" className="text-xl md:text-2xl font-display font-black text-[#172111] hover:text-[#8E1616] transition-colors break-all" aria-label="Envoyer un email à contact@cuisine-sen.com">contact@cuisine-sen.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#8E1616] shadow-lg group-hover:scale-110 group-hover:bg-[#8E1616] group-hover:text-white transition-all shrink-0">
                  <MapPin size={24} aria-label="Icône adresse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-display font-black uppercase tracking-widest text-[#172111]/40">Point de Retrait</span>
                  <span className="text-lg md:text-xl font-display font-black text-[#172111] leading-tight">Laboratoire entre le petit Leclerc<br/>et les quais Metayer, NIORT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Form S-Rank */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden"
          >
            {/* Decos */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4F6F0] rounded-bl-full z-0" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#8E1616]/5 rounded-tr-full z-0" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 relative z-10" noValidate>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-display font-black uppercase tracking-widest text-[#172111]">Votre nom et prénom *</label>
                <input 
                  id="name"
                  type="text" 
                  {...register('name')}
                  aria-invalid={errors.name ? "true" : "false"}
                  className={`w-full bg-[#F4F6F0] rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#8E1616]/50 transition-all font-body ${errors.name ? 'border border-red-500' : 'border border-transparent'}`}
                  placeholder="Jean Dupont"
                />
                {errors.name && <span className="text-xs font-bold text-red-500" role="alert">{errors.name.message}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-display font-black uppercase tracking-widest text-[#172111]">Numéro de portable *</label>
                  <input 
                    id="phone"
                    type="tel" 
                    {...register('phone')}
                    aria-invalid={errors.phone ? "true" : "false"}
                    className={`w-full bg-[#F4F6F0] rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#8E1616]/50 transition-all font-body ${errors.phone ? 'border border-red-500' : 'border border-transparent'}`}
                    placeholder="06 00 00 00 00"
                  />
                  {errors.phone && <span className="text-xs font-bold text-red-500" role="alert">{errors.phone.message}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-display font-black uppercase tracking-widest text-[#172111]">Votre email *</label>
                  <input 
                    id="email"
                    type="email" 
                    {...register('email')}
                    aria-invalid={errors.email ? "true" : "false"}
                    className={`w-full bg-[#F4F6F0] rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#8E1616]/50 transition-all font-body ${errors.email ? 'border border-red-500' : 'border border-transparent'}`}
                    placeholder="jean@exemple.com"
                  />
                  {errors.email && <span className="text-xs font-bold text-red-500" role="alert">{errors.email.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-display font-black uppercase tracking-widest text-[#172111]">Message (Détail de la commande) *</label>
                <textarea 
                  id="message"
                  {...register('message')}
                  rows={4}
                  aria-invalid={errors.message ? "true" : "false"}
                  className={`w-full bg-[#F4F6F0] rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#8E1616]/50 transition-all font-body resize-none ${errors.message ? 'border border-red-500' : 'border border-transparent'}`}
                  placeholder="Je souhaiterais commander 4 portions de Lok Lak pour samedi..."
                />
                {errors.message && <span className="text-xs font-bold text-red-500" role="alert">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="webflow-btn bg-[#172111] text-white self-end mt-4 disabled:opacity-70 disabled:cursor-not-allowed group"
                aria-label="Envoyer la demande de commande"
              >
                <div className="btn-circle text-[#172111]">
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-[#172111] border-t-transparent rounded-full"
                    />
                  ) : (
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </div>
                <span className="btn-text">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </span>
              </button>

              {/* Toast Success / Error */}
              {submitState === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mt-4 p-4 bg-[#55A630]/10 text-[#55A630] font-bold rounded-2xl flex items-center justify-center gap-3 border border-[#55A630]/20"
                  role="status"
                >
                  <CheckCircle2 size={20} />
                  <span>Message envoyé avec succès ! Nous vous recontacterons rapidement.</span>
                </motion.div>
              )}
              
              {submitState === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mt-4 p-4 bg-red-500/10 text-red-600 font-bold rounded-2xl flex items-center justify-center gap-3 border border-red-500/20"
                  role="alert"
                >
                  <AlertCircle size={20} />
                  <span>Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous appeler directement.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
