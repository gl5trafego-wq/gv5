import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, Phone } from "lucide-react";
import vetImage from "@/assets/vet-professional.jpg";

const credentials = [
  "Médica Veterinária – CRMV-SP 12345",
  "Especialista em Medicina Felina",
  "Pós-graduação em Cardiologia Veterinária",
  "Membro da ABMF (Associação Brasileira de Medicina Felina)",
  "Certificação Cat Friendly – ISFM",
];

const Specialist = () => {
  return (
    <section id="especialista" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={vetImage}
                alt="Dra. Vânia Gomes - Especialista em Medicina Felina"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-lilac-light rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-28 h-28 border-2 border-primary/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-sm mb-4">
              <Heart className="w-4 h-4" />
              A Especialista
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-2">
              Dra. Vânia Gomes
            </h2>
            
            <p className="text-primary font-medium text-lg mb-6">
              Diretora Clínica & Especialista em Medicina Felina
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Com mais de 15 anos dedicados à medicina veterinária, a Dra. Vânia 
                desenvolveu uma paixão especial pelos felinos, tornando-se referência 
                no ABC Paulista.
              </p>
              <p>
                Sua abordagem combina <strong className="text-foreground">competência técnica</strong> com 
                uma <strong className="text-foreground">sensibilidade única</strong> para entender 
                as necessidades de cada paciente e família.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-lilac-light flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{credential}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              variant="premium"
              size="lg"
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta com a Dra. Vânia.", "_blank")}
            >
              <Phone className="w-4 h-4" />
              Agendar com a Dra. Vânia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
