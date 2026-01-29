import { Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <span className="inline-flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-sm mb-6">
            <Heart className="w-4 h-4" />
            Quem Somos
          </span>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8">
            Onde o cuidado encontra
            <span className="text-primary"> a excelência</span>
          </h2>

          {/* Mission Text */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A <strong className="text-foreground">VivaZhen Vet</strong> nasceu do desejo de oferecer 
              medicina veterinária de alto padrão, com um olhar atento às necessidades únicas de cada paciente.
            </p>
            <p>
              Acreditamos que cada animal merece ser tratado com <em>delicadeza, respeito e competência</em>. 
              Por isso, investimos em formação contínua, tecnologia de ponta e, acima de tudo, 
              em criar um ambiente onde tutores e pets se sintam verdadeiramente acolhidos.
            </p>
            <p>
              Nossa missão é proporcionar <strong className="text-foreground">saúde, bem-estar e qualidade de vida</strong>, 
              construindo vínculos de confiança que atravessam gerações.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 bg-lilac-light rounded-2xl text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Acolhimento genuíno
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada visita é uma oportunidade de cuidar com carinho. 
                Nosso ambiente foi pensado para reduzir o estresse e proporcionar conforto.
              </p>
            </div>
            <div className="p-8 bg-lilac-light rounded-2xl text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Excelência científica
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Atualizações constantes, equipamentos modernos e protocolos 
                baseados nas melhores práticas da medicina veterinária mundial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
