import { Shield, Sparkles, Leaf, Palette } from "lucide-react";
import catCareImage from "@/assets/cat-care.jpg";
import ambienteClinica from "@/assets/ambiente-clinica.jpg";
import salaAtendimento from "@/assets/sala-atendimento.jpg";
const features = [{
  icon: Shield,
  title: "Ambiente Acolhedor",
  description: "Salas preparadas para cães e gatos, com feromônios e música relaxante"
}, {
  icon: Sparkles,
  title: "Tecnologia de Ponta",
  description: "Equipamentos de última geração para diagnósticos precisos"
}, {
  icon: Palette,
  title: "Cromoterapia",
  description: "Salas com cromoterapia para ajudar a reduzir estresse e ansiedade durante os atendimentos"
}, {
  icon: Leaf,
  title: "Espaço Premium",
  description: "Decoração sofisticada pensada para transmitir calma e conforto"
}];
const Clinic = () => {
  return <section id="clinica" className="section-padding gradient-lilac">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Nossa Clínica
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Estrutura pensada para
              <span className="text-primary"> o bem-estar do seu pet</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Nossa estrutura foi projetada para oferecer conforto aos tutores 
              e tranquilidade aos pacientes. Cada detalhe foi escolhido com cuidado 
              para criar uma experiência diferenciada.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => <div key={feature.title} className="flex gap-4">
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
                </div>)}
            </div>
          </div>

          {/* Images Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img alt="Equipe VivaZhen Vet com paciente" className="w-full h-auto aspect-[4/5] object-cover" src="/lovable-uploads/203958fa-5c93-4e0e-939d-e51c6ba054b1.png" />
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img src={ambienteClinica} alt="Recepção da clínica VivaZhen Vet" className="w-full h-auto aspect-[4/3] object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img src={salaAtendimento} alt="Sala de atendimento VivaZhen Vet" className="w-full h-auto aspect-[4/3] object-cover" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>;
};
export default Clinic;