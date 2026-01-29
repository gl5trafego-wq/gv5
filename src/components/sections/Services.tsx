import { Cat, Stethoscope, Heart, Syringe, Activity, Scissors } from "lucide-react";

const services = [
  {
    icon: Cat,
    title: "Medicina Felina",
    description:
      "Atendimento especializado para gatos, com ambiente Cat Friendly e protocolos específicos para o bem-estar felino.",
    highlight: true,
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description:
      "Check-ups completos, diagnóstico preventivo e acompanhamento contínuo da saúde do seu pet.",
  },
  {
    icon: Heart,
    title: "Cardiologia",
    description:
      "Avaliação cardíaca completa com eletrocardiograma, ecocardiograma e monitoramento especializado.",
  },
  {
    icon: Activity,
    title: "Ultrassonografia",
    description:
      "Exames de imagem de alta definição para diagnósticos precisos e acompanhamento de tratamentos.",
  },
  {
    icon: Syringe,
    title: "Vacinação",
    description:
      "Protocolo vacinal completo e personalizado de acordo com o estilo de vida do seu animal.",
  },
  {
    icon: Scissors,
    title: "Cirurgias",
    description:
      "Centro cirúrgico equipado para procedimentos eletivos e de urgência com anestesia inalatória.",
  },
];

const Services = () => {
  return (
    <section id="especialidades" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
            Especialidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Cuidado completo para
            <span className="text-primary"> seu melhor amigo</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Oferecemos um atendimento multidisciplinar com especialistas
            dedicados a cada área da medicina veterinária.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:shadow-elevated ${
                service.highlight
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-card hover:bg-sage-light/50"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  service.highlight
                    ? "bg-primary-foreground/20"
                    : "bg-sage-light group-hover:bg-primary/10"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.highlight ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>
              <h3
                className={`font-serif text-xl font-semibold mb-3 ${
                  service.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  service.highlight
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
