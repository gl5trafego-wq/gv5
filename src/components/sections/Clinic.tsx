import { Shield, Sparkles, Leaf, Volume2 } from "lucide-react";
import catCareImage from "@/assets/cat-care.jpg";

const features = [
  {
    icon: Shield,
    title: "Ambiente Cat Friendly",
    description: "Salas separadas para gatos, com feromônios e música relaxante",
  },
  {
    icon: Sparkles,
    title: "Tecnologia de Ponta",
    description: "Equipamentos de última geração para diagnósticos precisos",
  },
  {
    icon: Leaf,
    title: "Espaço Acolhedor",
    description: "Decoração pensada para transmitir calma e conforto",
  },
  {
    icon: Volume2,
    title: "Baixo Estresse",
    description: "Protocolos que minimizam o desconforto dos pacientes",
  },
];

const Clinic = () => {
  return (
    <section id="clinica" className="section-padding gradient-lilac">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Nossa Clínica
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Um espaço pensado para
              <span className="text-primary"> o bem-estar</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Nossa estrutura foi projetada para oferecer conforto aos tutores 
              e tranquilidade aos pacientes. Cada detalhe foi escolhido com cuidado 
              para criar uma experiência diferenciada.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={catCareImage}
                alt="Interior da clínica VivaZhen Vet"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinic;
