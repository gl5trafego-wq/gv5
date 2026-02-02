import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Venha nos
            <span className="text-primary"> conhecer</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Estamos prontos para receber você e seu pet. Agende uma visita 
            e conheça nossa estrutura.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-lilac-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rua das Palmeiras, 500 - Centro
                    <br />
                    Santo André - SP, 09010-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-lilac-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Segunda a Sexta: 8h às 20h
                    <br />
                    Sábados: 8h às 14h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-lilac-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Telefone / WhatsApp</h3>
                  <p className="text-muted-foreground">(11) 97254-7757</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-lilac-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">E-mail</h3>
                  <p className="text-muted-foreground">contato@vivazhenvet.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-lilac-light flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Instagram</h3>
                  <p className="text-muted-foreground">@vivazhenvet</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button
                variant="premium"
                size="xl"
                onClick={() => window.open("https://wa.me/5511972547757", "_blank")}
              >
                <Phone className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-elevated h-[450px] lg:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8877788888!2d-46.5288!3d-23.6566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM5JzIzLjgiUyA0NsKwMzEnNDMuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização VivaZhen Vet - Santo André"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
