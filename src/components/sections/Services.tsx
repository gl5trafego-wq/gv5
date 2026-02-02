import { Cat, Stethoscope, Sparkles, Apple, Activity, Bone, Heart, Eye } from "lucide-react";

const services = [
  {
    icon: Cat,
    title: "Especialista em Felinos",
    description:
      "Atendimento especializado para gatos, com ambiente Cat Friendly certificado e protocolos desenvolvidos especificamente para o bem-estar felino.",
    highlight: true,
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral de Cães e Gatos",
    description:
      "Consultas completas, diagnóstico preventivo e acompanhamento contínuo da saúde do seu pet.",
  },
  {
    icon: Sparkles,
    title: "Dermatologia",
    description:
      "Diagnóstico e tratamento de doenças de pele, pelos e ouvidos com abordagem especializada.",
  },
  {
    icon: Apple,
    title: "Nutrologia",
    description:
      "Orientação nutricional personalizada para cada fase da vida do seu animal.",
  },
  {
    icon: Activity,
    title: "Endocrinologia",
    description:
      "Tratamento de distúrbios hormonais como diabetes, hipotireoidismo e outras condições.",
  },
  {
    icon: Heart,
    title: "Nefrologia",
    description:
      "Diagnóstico e acompanhamento de doenças renais com protocolos atualizados.",
  },
  {
    icon: Bone,
    title: "Ortopedia e Neurologia",
    description:
      "Avaliação e tratamento de problemas locomotores e neurológicos.",
  },
  {
    icon: Stethoscope,
    title: "Gastroenterologia",
    description:
      "Cuidado especializado para distúrbios digestivos e doenças gastrointestinais.",
  },
  {
    icon: Eye,
    title: "Oftalmologia",
    description:
      "Diagnóstico e tratamento de doenças oculares com equipamentos especializados.",
  },
];

const Services = () => {
  return (
    <section id="especialidades" className="section-padding gradient-lilac">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Especialidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Cuidado completo para
            <span className="text-primary"> seu melhor amigo</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Oferecemos atendimento multidisciplinar com especialistas 
            dedicados a cada área da medicina veterinária.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl transition-all duration-300 ${
                service.highlight
                  ? "bg-primary text-primary-foreground shadow-elevated lg:scale-105"
                  : "bg-card hover:bg-lilac-light shadow-soft hover:shadow-medium"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  service.highlight
                    ? "bg-primary-foreground/20"
                    : "bg-lilac-light group-hover:bg-primary/10"
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
                    ? "text-primary-foreground/85"
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
