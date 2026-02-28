export default function CambodgePage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-white px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-[#172111] tracking-tighter mb-8">
          Le <span className="text-[#D4AF37]">Cambodge</span>
        </h1>
        <p className="font-body text-xl font-bold text-[#172111]/70 leading-relaxed mb-12">
          Un voyage culinaire au cœur de l'Asie du Sud-Est. Découvrez les épices, les herbes et les traditions qui rendent notre cuisine unique.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-[#F4F6F0] rounded-[40px] shadow-xl flex items-center justify-center relative overflow-hidden">
            <span className="font-display font-black text-2xl uppercase text-[#D4AF37] opacity-50">Poivre de Kampot</span>
          </div>
          <div className="aspect-square bg-[#172111] rounded-[40px] shadow-xl flex items-center justify-center relative overflow-hidden">
             <span className="font-display font-black text-2xl uppercase text-white opacity-30">Lait de Coco</span>
          </div>
        </div>
      </div>
    </main>
  );
}
