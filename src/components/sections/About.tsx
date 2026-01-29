import catCareImage from "@/assets/cat-care.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding gradient-premium">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={catCareImage}
                alt="Cuidado veterinário especializado para felinos"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-light rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
              Nossa História
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Dedicação ao bem-estar
              <span className="text-primary"> animal</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A VivaZhen Vet nasceu da paixão genuína pelo cuidado animal. Desde
                2009, nos dedicamos a oferecer medicina veterinária de excelência,
                com foco especial na saúde e bem-estar dos felinos.
              </p>
              <p>
                Nossa equipe é formada por especialistas que compartilham o mesmo
                propósito: proporcionar um atendimento humanizado, onde cada
                paciente recebe atenção individualizada e tratamento baseado nas
                mais recentes evidências científicas.
              </p>
              <p>
                Acreditamos que a medicina veterinária vai além do diagnóstico e
                tratamento. É sobre criar vínculos de confiança com os tutores e
                garantir qualidade de vida para seus companheiros.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-5 bg-card rounded-xl shadow-soft">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Acolhimento
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ambiente projetado para reduzir o estresse dos pacientes
                </p>
              </div>
              <div className="p-5 bg-card rounded-xl shadow-soft">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Excelência
                </h3>
                <p className="text-sm text-muted-foreground">
                  Equipe em constante atualização científica
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
