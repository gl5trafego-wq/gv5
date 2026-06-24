import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EspecialidadeWhatsappButton from "@/components/EspecialidadeWhatsappButton";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";
import {
  especialidades,
  buildWhatsappUrl,
  WHATSAPP_GENERICO,
} from "@/data/especialidades";

const Especialidades = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Especialidades Veterinárias | VivaZhen Vet — Santo André</title>
        <meta
          name="description"
          content="Conheça as especialidades veterinárias da VivaZhen Vet em Santo André: medicina felina, nefrologia, oftalmologia, dermatologia, nutrologia e mais."
        />
        <link
          rel="canonical"
          href="https://gv5.lovable.app/especialidades"
        />
        <meta
          property="og:title"
          content="Especialidades Veterinárias | VivaZhen Vet"
        />
        <meta
          property="og:description"
          content="Cuidado veterinário especializado para cada necessidade do seu pet em Santo André."
        />
        <meta property="og:url" content="https://gv5.lovable.app/especialidades" />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative section-padding pt-32 md:pt-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground/90" />
          </div>
          <div className="container-wide text-center max-w-3xl mx-auto relative z-10">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">
              Especialidades
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-background leading-tight mb-6">
              Nossas <span className="text-secondary">Especialidades</span>
            </h1>
            <p className="text-lg text-background/90 leading-relaxed">
              Cuidado veterinário especializado para cada necessidade do seu pet.
              Conheça as áreas em que a VivaZhen Vet é referência e agende com
              quem entende do assunto.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {especialidades.map((e) => {
                const Icon = e.icon;
                return (
                  <article
                    key={e.slug}
                    className="group relative flex flex-col p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium hover:bg-lilac-light transition-all duration-300"
                  >
                    <Link
                      to={`/especialidades/${e.slug}`}
                      className="absolute inset-0 z-0 rounded-2xl"
                      aria-label={`Saiba mais sobre ${e.nome}`}
                    />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-end mb-4">
                        <Link
                          to={`/especialidades/${e.slug}`}
                          className="relative z-10 inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                        >
                          Conheça a especialidade <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-primary-foreground" strokeWidth={2.25} />
                      </div>
                      <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                        {e.nome}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                        {e.descricaoCard}
                      </p>
                      <div className="relative z-10">
                        <EspecialidadeWhatsappButton
                          slug={e.slug}
                          message={e.whatsappMessage}
                          size="default"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="section-padding gradient-purple text-primary-foreground">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Ainda em dúvida sobre qual especialidade buscar?
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-8">
              Fale com a nossa equipe pelo WhatsApp e nós ajudamos você a
              encontrar o cuidado ideal para o seu pet.
            </p>
            <Button
              variant="whatsapp"
              size="xl"
              className="whitespace-normal"
              onClick={() =>
                window.open(
                  buildWhatsappUrl(WHATSAPP_GENERICO),
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <Phone className="w-5 h-5" />
              Agendar pelo WhatsApp
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Especialidades;
