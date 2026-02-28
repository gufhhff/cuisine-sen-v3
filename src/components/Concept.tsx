'use client';
import { motion } from 'framer-motion';

const conceptFeatures = [
  {
    title: "Cuisine Authentique",
    desc: "Nous proposons des recettes traditionnelles transmises de génération en génération pour vous offrir la véritable saveur du Cambodge.",
    emoji: "🥢",
    align: "left"
  },
  {
    title: "Ingrédients Locaux",
    desc: "Nous sélectionnons soigneusement nos ingrédients auprès de producteurs locaux de Niort et nationaux pour une fraîcheur garantie.",
    emoji: "🌱",
    align: "right"
  },
  {
    title: "Fait Maison",
    desc: "Chaque plat est préparé avec passion par Sen, avec un savoir-faire unique et un amour du métier incontestable.",
    emoji: "❤️",
    align: "left"
  }
];

export default function Concept() {
  return (
    <section className="py-20 md:py-32 bg-[#F4F6F0] relative z-10 overflow-hidden" id="concept">
      {/* Background SVG wavy lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 flex flex-col justify-around overflow-hidden">
        <svg viewBox="0 0 1440 691" fill="none" className="w-[200%] md:w-full -ml-[50%] md:ml-0">
          <path d="M-11 627.781C31.2318 652.606 151.814 698.642 199.05 645.884C264.5 572.781 199.05 472.107 47.547 363.054C-103.956 254 -52.529 150.083 24.5115 108.595C210.583 8.39218 434.763 502.251 720.049 329.362C981.436 170.957 1134 -69.7188 1490 2.78121" stroke="#172111" strokeWidth="40" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Responsive Sticky Cards */}
        <div className="flex flex-col gap-12 md:gap-24 items-center max-w-4xl mx-auto">
          {conceptFeatures.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`bg-white rounded-[30px] md:rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] w-full flex flex-col gap-6 relative md:sticky top-32`}
              style={{ 
                zIndex: idx + 10,
                // On desktop, push them slightly left or right
                marginLeft: feature.align === 'right' ? 'auto' : '0',
                marginRight: feature.align === 'left' ? 'auto' : '0',
                maxWidth: '90%'
              }}
            >
              {/* Badge */}
              <div className={`absolute -top-6 ${feature.align === 'left' ? 'left-8 md:left-12' : 'right-8 md:right-12'} w-12 h-12 bg-[#8E1616] text-white rounded-full flex items-center justify-center text-xl shadow-lg is-wiggle`}>
                {feature.emoji}
              </div>

              <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-[#172111] uppercase tracking-tighter leading-none text-center pt-4">
                {feature.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? 'text-[#8E1616]' : ''}>{word}<br/></span>
                ))}
              </h2>
              
              <div className="flex flex-col items-center gap-4 mt-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F4F6F0] rounded-full flex items-center justify-center is-wiggle">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-dashed border-[#172111]/20 animate-[spin_10s_linear_infinite]" />
                </div>
                <p className="font-body text-base md:text-lg text-center text-[#172111]/70 leading-relaxed font-bold">
                  {feature.desc.split('. ')[0]}.
                  <br className="hidden md:block" />
                  <span className="text-[#172111]/40 font-normal">{feature.desc.split('. ')[1]}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final large text block */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-40 text-center flex flex-col items-center"
        >
          <h2 className="font-display font-black text-4xl md:text-7xl uppercase text-[#172111] tracking-tighter leading-[1.1] md:leading-none mb-8">
            Le Cambodge, <br /> Juste comme <br />
            <span className="text-[#8E1616]">vous l'aimez.</span>
          </h2>
          
          <div className="relative w-full max-w-sm md:max-w-lg mx-auto h-[150px] md:h-[200px] mt-6 flex justify-center items-center">
            <div className="absolute left-0 md:-left-10 top-0 rotate-[-15deg] is-wiggle">
              <div className="px-4 py-2 md:px-6 md:py-3 bg-[#D4AF37] text-white font-display font-black uppercase text-xs md:text-sm rounded-full shadow-xl">
                Locavore
              </div>
            </div>
            <div className="absolute right-0 md:-right-10 bottom-0 rotate-[10deg] is-wiggle" style={{ animationDelay: '0.2s' }}>
              <div className="px-4 py-2 md:px-6 md:py-3 bg-[#55A630] text-white font-display font-black uppercase text-xs md:text-sm rounded-full shadow-xl">
                Authentique
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-[200%] md:w-[150%] h-auto -ml-[50%] md:-ml-[25%] relative -bottom-2">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,138.7C672,149,768,203,864,224C960,245,1056,235,1152,197.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
