export default function ConceptPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-[#F4F6F0] px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-[#172111] tracking-tighter mb-8">
          Notre <span className="text-[#8E1616]">Concept</span>
        </h1>
        <p className="font-body text-xl font-bold text-[#172111]/70 leading-relaxed mb-12">
          L'alliance parfaite entre les recettes traditionnelles khmères et les meilleurs ingrédients locaux des Deux-Sèvres.
        </p>
        <div className="aspect-[16/9] w-full bg-white rounded-[40px] shadow-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#8E1616]/5 mix-blend-multiply" />
          <span className="font-display font-black text-3xl uppercase text-[#8E1616] opacity-30">Concept Vidéo / Image</span>
        </div>
      </div>
    </main>
  );
}
