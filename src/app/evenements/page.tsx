export default function EvenementsPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#F4F6F0] px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-[#172111] tracking-tighter mb-8">
          Vos <span className="text-[#55A630]">Événements</span>
        </h1>
        <p className="font-body text-xl font-bold text-[#172111]/70 leading-relaxed mb-12">
          Mariages, repas d'entreprise, anniversaires. Nous créons des menus sur-mesure pour donner une touche exotique et raffinée à vos célébrations.
        </p>
        <div className="bg-white p-12 rounded-[40px] shadow-2xl">
          <h2 className="font-display font-black text-3xl uppercase text-[#172111] mb-6">Demander un Devis</h2>
          <p className="font-body text-[#172111]/60 mb-8">Contactez-nous directement pour concevoir ensemble le menu parfait pour vos invités.</p>
          <a href="/contact" className="webflow-btn bg-[#172111] text-white inline-flex mx-auto">
            <div className="btn-circle text-[#172111]">
               <span className="font-black">→</span>
            </div>
            <span className="btn-text">Contactez-nous</span>
          </a>
        </div>
      </div>
    </main>
  );
}
