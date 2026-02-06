import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail, Instagram } from "lucide-react";
const Contact = () => {
  return <section id="contato" className="section-padding bg-background">
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
                  <a href="https://maps.app.goo.gl/ggPBacf6bu7M58tb7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground leading-relaxed hover:text-primary transition-colors">
                    R. Gonçalo Fernandes, 321 - Jardim Bela Vista
                    <br />
                    Santo André - SP, 09041-410
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-lilac-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground leading-relaxed">Segunda a Sexta: 9h às 18h <br />
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
                  <p className="text-muted-foreground">vivazhen.vet@outlook.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-lilac-light flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Instagram</h3>
                  <a href="https://www.instagram.com/vivazhenvet/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    @vivazhenvet
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button variant="premium" size="xl" onClick={() => window.open("https://wa.me/5511972547757?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20VivaZhen%20Vet.", "_blank")}>
                <Phone className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-elevated h-[450px] lg:h-auto min-h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-46.5288!3d-23.6566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42b8c8b1b3d3%3A0x1234567890abcdef!2sR.%20Gon%C3%A7alo%20Fernandes%2C%20321%20-%20Jardim%20Bela%20Vista%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009041-410!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
            border: 0,
            minHeight: "400px"
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização VivaZhen Vet - R. Gonçalo Fernandes, 321 - Jardim Bela Vista, Santo André" />
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;