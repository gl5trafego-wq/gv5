import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior da clínica VivaZhen Vet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sage-light/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-up">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Santo André – ABC Paulista
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Cuidado veterinário
            <span className="block text-primary">de excelência</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up delay-200">
            Referência em medicina felina e especialidades veterinárias.
            Oferecemos atendimento humanizado e personalizado para o seu
            melhor amigo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
            >
              <Phone className="w-5 h-5" />
              Agendar pelo WhatsApp
            </Button>
            <Button
              variant="premium-outline"
              size="xl"
              onClick={() => {
                const element = document.querySelector("#especialidades");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça nossos serviços
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-up delay-400">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-primary">15+</span>
              <span className="text-sm text-muted-foreground">Anos de experiência</span>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-primary">5000+</span>
              <span className="text-sm text-muted-foreground">Pacientes atendidos</span>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-primary">Cat Friendly</span>
              <span className="text-sm text-muted-foreground">Certificação ISFM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
