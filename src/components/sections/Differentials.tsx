import { Award, Clock, Shield, Sparkles, HeartHandshake, Microscope } from "lucide-react";

const differentials = [
  {
    icon: Award,
    title: "Certificação Cat Friendly",
    description:
      "Ambiente projetado para minimizar o estresse felino, com salas separadas e protocolos específicos.",
  },
  {
    icon: Clock,
    title: "Atendimento Humanizado",
    description:
      "Consultas sem pressa, com tempo para ouvir, examinar e explicar cada etapa do cuidado.",
  },
  {
    icon: Shield,
    title: "Tecnologia de Ponta",
    description:
      "Equipamentos modernos para diagnósticos precisos e tratamentos mais eficazes.",
  },
  {
    icon: Sparkles,
    title: "Ambiente Premium",
    description:
      "Espaço pensado para o conforto dos tutores e a tranquilidade dos pacientes.",
  },
  {
    icon: HeartHandshake,
    title: "Medicina Integrativa",
    description:
      "Abordagem que combina medicina tradicional com terapias complementares.",
  },
  {
    icon: Microscope,
    title: "Laboratório Próprio",
    description:
      "Resultados de exames em tempo reduzido para diagnósticos mais ágeis.",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
            Por que nos escolher
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Diferenciais que fazem
            <span className="text-primary"> a diferença</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada detalhe foi pensado para proporcionar a melhor experiência
            para você e seu pet.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-5 p-6 rounded-xl hover:bg-card transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
