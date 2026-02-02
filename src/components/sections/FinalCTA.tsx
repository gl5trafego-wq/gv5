import { Button } from "@/components/ui/button";
import { Phone, Calendar, Heart } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding gradient-purple text-primary-foreground">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-8">
            <Heart className="w-8 h-8" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Pronto para cuidar de quem
            <span className="block mt-2">você mais ama?</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-10 max-w-2xl mx-auto">
            Agende uma consulta e descubra o que significa ter uma clínica 
            verdadeiramente dedicada ao bem-estar do seu pet.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/5511972547757", "_blank")}
            >
              <Phone className="w-5 h-5" />
              Agendar pelo WhatsApp
            </Button>
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => {
                const element = document.querySelector("#contato");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Calendar className="w-5 h-5" />
              Ver horários
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-sm text-primary-foreground/70 mt-8">
            Atendimento de segunda a sexta, das 8h às 20h • Sábados das 8h às 14h
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
