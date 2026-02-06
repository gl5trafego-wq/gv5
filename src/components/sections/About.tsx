import { Heart } from "lucide-react";
import aboutGatoConforto from "@/assets/about-gato-conforto.jpg";
import aboutFachadaExterna from "@/assets/about-fachada-externa.jpg";
const About = () => {
  return <section id="sobre" className="section-padding bg-background">
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
              em criar um ambiente onde responsáveis e pets se sintam verdadeiramente acolhidos.
            </p>
            <p>
              Nossa missão é proporcionar <strong className="text-foreground">saúde, bem-estar e qualidade de vida</strong>, 
              construindo vínculos de confiança que atravessam gerações.
            </p>
          </div>

          {/* Photo Cards - Replacing text cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
              <img src={aboutGatoConforto} alt="Ambiente acolhedor para gatos na VivaZhen Vet" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
              <img src={aboutFachadaExterna} alt="Fachada externa da clínica VivaZhen Vet" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;