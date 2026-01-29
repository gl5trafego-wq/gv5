import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding gradient-premium">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
              Contato
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Venha nos
              <span className="text-primary"> conhecer</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Estamos prontos para receber você e seu pet. Agende uma visita e
              conheça nossa estrutura.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua das Palmeiras, 500 - Centro
                    <br />
                    Santo André - SP, 09010-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 20h
                    <br />
                    Sábados: 8h às 14h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground">contato@vivazhenvet.com.br</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button
                variant="whatsapp"
                size="xl"
                onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
              >
                <Phone className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-elevated h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8877788888!2d-46.5288!3d-23.6566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM5JzIzLjgiUyA0NsKwMzEnNDMuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização VivaZhen Vet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
