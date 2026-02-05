import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  { src: galeriaFachada, alt: "Fachada da clínica VivaZhen Vet" },
  { src: galeriaRecepcaoSofas, alt: "Recepção premium com sofás confortáveis" },
  { src: galeriaBalcaoRecepcao, alt: "Balcão de recepção moderno" },
  { src: galeriaConsultaVeterinaria, alt: "Consulta veterinária em andamento" },
  { src: galeriaEntradaLilas, alt: "Entrada da clínica com identidade visual lilás" },
  { src: galeriaEscritorio, alt: "Escritório administrativo" },
  { src: galeriaAtendimentoCaes, alt: "Atendimento carinhoso a cães" },
  { src: galeriaSalaEspera, alt: "Sala de espera aconchegante" },
  { src: galeriaAreaExterna, alt: "Área externa da clínica" },
  { src: galeriaGatoCama, alt: "Espaço confortável para gatos" },
];

const ClinicGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const getSlideStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalImages = galleryImages.length;
    
    // Handle wrap-around for circular navigation
    let normalizedDiff = diff;
    if (diff > totalImages / 2) normalizedDiff = diff - totalImages;
    if (diff < -totalImages / 2) normalizedDiff = diff + totalImages;

    // Only show -2, -1, 0, 1, 2 positions
    if (Math.abs(normalizedDiff) > 2) {
      return {
        transform: "translateX(0) scale(0.5) rotateY(0deg)",
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    const baseTranslate = normalizedDiff * 180;
    const scale = normalizedDiff === 0 ? 1 : 0.75;
    const rotateY = normalizedDiff * -15;
    const opacity = normalizedDiff === 0 ? 1 : 0.7;
    const zIndex = 10 - Math.abs(normalizedDiff);

    return {
      transform: `translateX(${baseTranslate}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      pointerEvents: normalizedDiff === 0 ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <section id="galeria" className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-sm mb-4">
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

        {/* 3D Carousel - Desktop */}
        <div className="hidden md:block relative">
          <div 
            className="relative h-[400px] flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-500 ease-out"
                  style={getSlideStyle(index)}
                >
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-[400px] h-[280px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm shadow-medium flex items-center justify-center text-foreground hover:bg-background transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm shadow-medium flex items-center justify-center text-foreground hover:bg-background transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Slider */}
        <div className="md:hidden">
          <div className="relative">
            <div 
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center first:ml-4 last:mr-4"
                >
                  <div className="rounded-2xl overflow-hidden shadow-soft">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-[280px] h-[200px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {galleryImages.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;
