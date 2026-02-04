import { Camera } from "lucide-react";

// Import all gallery images
import galeriaEscritorio from "@/assets/galeria-escritorio.jpg";
import galeriaGatoCama from "@/assets/galeria-gato-cama.jpg";
import galeriaFachada from "@/assets/galeria-fachada.jpg";
import galeriaAreaExterna from "@/assets/galeria-area-externa.jpg";
import galeriaRecepcaoSofas from "@/assets/galeria-recepcao-sofas.jpg";
import galeriaSalaEspera from "@/assets/galeria-sala-espera.jpg";
import galeriaBalcaoRecepcao from "@/assets/galeria-balcao-recepcao.jpg";
import galeriaEntradaLilas from "@/assets/galeria-entrada-lilas.jpg";
import galeriaAtendimentoCaes from "@/assets/galeria-atendimento-caes.jpg";
import galeriaConsultaVeterinaria from "@/assets/galeria-consulta-veterinaria.jpg";

const galleryImages = [
  {
    src: galeriaFachada,
    alt: "Fachada da clínica VivaZhen Vet",
  },
  {
    src: galeriaRecepcaoSofas,
    alt: "Recepção premium com sofás confortáveis",
  },
  {
    src: galeriaBalcaoRecepcao,
    alt: "Balcão de recepção moderno",
  },
  {
    src: galeriaConsultaVeterinaria,
    alt: "Consulta veterinária em andamento",
  },
  {
    src: galeriaEntradaLilas,
    alt: "Entrada da clínica com identidade visual lilás",
  },
  {
    src: galeriaEscritorio,
    alt: "Escritório administrativo",
  },
  {
    src: galeriaAtendimentoCaes,
    alt: "Atendimento carinhoso a cães",
  },
  {
    src: galeriaSalaEspera,
    alt: "Sala de espera aconchegante",
  },
  {
    src: galeriaAreaExterna,
    alt: "Área externa da clínica",
  },
  {
    src: galeriaGatoCama,
    alt: "Espaço confortável para gatos",
  },
];

const ClinicGallery = () => {
  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-sm mb-4">
            <Camera className="w-4 h-4" />
            Ambiente da Clínica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Conheça nossa
            <span className="text-primary"> estrutura</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Um ambiente moderno, acolhedor e pensado para proporcionar conforto 
            aos tutores e bem-estar aos pets durante toda a visita.
          </p>
        </div>

        {/* Gallery Grid - 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;
