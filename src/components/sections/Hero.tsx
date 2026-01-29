import { Button } from "@/components/ui/button";
import { Phone, Award, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clínica VivaZhen Vet - Ambiente acolhedor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
            Clínica Veterinária Premium em Santo André
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] mb-6 animate-fade-up delay-100">
            Cuidado especializado
            <span className="block text-primary mt-2">para quem você ama</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl animate-fade-up delay-200">
            Referência em medicina felina e atendimento humanizado. 
            Cada paciente recebe atenção individualizada com a delicadeza que merece.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button
              variant="premium"
              size="xl"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na VivaZhen Vet.", "_blank")}
            >
              <Phone className="w-5 h-5" />
              Agendar Consulta
            </Button>
            <Button
              variant="premium-outline"
              size="xl"
              onClick={() => {
                const element = document.querySelector("#especialista");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça a Dra. Vânia
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="container-wide py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 animate-fade-up delay-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lilac-light flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Cat Friendly</p>
                <p className="text-xs text-muted-foreground">Certificação ISFM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lilac-light flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">+15 Anos</p>
                <p className="text-xs text-muted-foreground">de experiência</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lilac-light flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Especialista</p>
                <p className="text-xs text-muted-foreground">em Medicina Felina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
