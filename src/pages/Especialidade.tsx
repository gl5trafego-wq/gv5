import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EspecialidadeWhatsappButton from "@/components/EspecialidadeWhatsappButton";
import heroImage from "@/assets/hero-clinic.jpg";
import {
  getEspecialidade,
  PORQUE_VIVAZHEN,
  CTA_POS_SINAIS,
  CTA_POS_ATENDIMENTO_LABEL,
} from "@/data/especialidades";

const Especialidade = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = getEspecialidade(slug);

  if (!data) return <Navigate to="/especialidades" replace />;

  const Icon = data.icon;
  const canonical = `https://gv5.lovable.app/especialidades/${data.slug}`;
  const posSinais = CTA_POS_SINAIS[data.slug];
  const posAtendimentoLabel =
    CTA_POS_ATENDIMENTO_LABEL[data.slug] ?? "Agende a consulta do seu pet";

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: data.h1,
    description: data.metaDescription,
    url: canonical,
    about: {
      "@type": "MedicalSpecialty",
      name: data.nome,
    },
    provider: {
      "@type": "VeterinaryCare",
      name: "VivaZhen Vet",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Gonçalo Fernandes, 321 - Jardim Bela Vista",
        addressLocality: "Santo André",
        addressRegion: "SP",
        postalCode: "09041-410",
        addressCountry: "BR",
      },
      telephone: "+55-11-97254-7757",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
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
          <div className="container-wide max-w-4xl mx-auto relative z-10">
            <Link
              to="/especialidades"
              className="inline-flex items-center gap-2 text-secondary font-medium mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Ver todas as especialidades
            </Link>
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary-foreground" strokeWidth={2.25} />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-background leading-tight mb-6">
              {data.h1}
            </h1>
            <p className="text-lg md:text-xl text-background/90 leading-relaxed mb-10 max-w-3xl">
              {data.subheadline}
            </p>
            <EspecialidadeWhatsappButton
              slug={data.slug}
              message={data.whatsappMessage}
              ctaVariante="hero"
            />
          </div>
        </section>

        {/* O que é */}
        <section className="section-padding bg-background">
          <div className="container-wide max-w-3xl mx-auto">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              O que é
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Entenda a especialidade
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.oQueE}
            </p>
          </div>
        </section>

        {/* Sinais de alerta */}
        <section className="section-padding gradient-lilac">
          <div className="container-wide max-w-3xl mx-auto">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Sinais de alerta
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Fique atento a estes sinais
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {data.sinais.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 bg-card p-5 rounded-xl shadow-soft"
                >
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
            {posSinais && (
              <div className="mt-10 flex justify-center">
                <EspecialidadeWhatsappButton
                  slug={data.slug}
                  message={posSinais.message}
                  label={posSinais.label}
                  ctaVariante="pos-sinais"
                />
              </div>
            )}
          </div>
        </section>

        {/* Como é o atendimento */}
        <section className="section-padding bg-background">
          <div className="container-wide max-w-3xl mx-auto">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Como é o atendimento
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Cada passo pensado para o seu pet
            </h2>
            <ol className="space-y-5">
              {data.atendimento.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-5 bg-card p-6 rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-foreground leading-relaxed pt-1.5">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex justify-center">
              <EspecialidadeWhatsappButton
                slug={data.slug}
                message={data.whatsappMessage}
                label={posAtendimentoLabel}
                ctaVariante="pos-atendimento"
              />
            </div>
          </div>
        </section>

        {/* Por que na VivaZhen */}
        <section className="section-padding gradient-lilac">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Por que na VivaZhen Vet
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {PORQUE_VIVAZHEN}
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding gradient-purple text-primary-foreground">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              {data.ctaFinal}
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-10">
              Fale com a nossa equipe pelo WhatsApp e marque um horário.
            </p>
            <div className="flex justify-center">
              <EspecialidadeWhatsappButton
                slug={data.slug}
                message={data.whatsappMessage}
                variant="whatsapp"
                ctaVariante="final"
              />
            </div>
            <div className="mt-10">
              <Link
                to="/especialidades"
                className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> Ver todas as especialidades
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Especialidade;
