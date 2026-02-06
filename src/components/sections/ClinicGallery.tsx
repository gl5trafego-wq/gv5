import { useState, useRef, useCallback } from "react";
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
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  }, [goToNext, goToPrevious]);

  const getNormalizedDiff = (index: number) => {
    const diff = index - currentIndex;
    const totalImages = galleryImages.length;
    let normalizedDiff = diff;
    if (diff > totalImages / 2) normalizedDiff = diff - totalImages;
    if (diff < -totalImages / 2) normalizedDiff = diff + totalImages;
    return normalizedDiff;
  };

  const getDesktopSlideStyle = (index: number) => {
    const normalizedDiff = getNormalizedDiff(index);

    if (Math.abs(normalizedDiff) > 2) {
      return {
        transform: "translateX(0) translateZ(-300px) scale(0.5)",
        opacity: 0,
        zIndex: 0,
        visibility: "hidden" as const,
        pointerEvents: "none" as const,
      };
    }

    const isCenter = normalizedDiff === 0;
    const baseTranslate = normalizedDiff * 220;
    const scale = isCenter ? 1 : 0.85;
    const rotateY = normalizedDiff * -25;
    const translateZ = isCenter ? 100 : -50;
    const zIndex = 10 - Math.abs(normalizedDiff);

    return {
      transform: `translateX(${baseTranslate}px) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity: 1,
      zIndex,
      visibility: "visible" as const,
      pointerEvents: isCenter ? ("auto" as const) : ("none" as const),
    };
  };

  const getMobileSlideStyle = (index: number) => {
    const normalizedDiff = getNormalizedDiff(index);

    if (Math.abs(normalizedDiff) > 2) {
      return {
        transform: "translateX(0) scale(0.5)",
        opacity: 0,
        zIndex: 0,
        visibility: "hidden" as const,
        pointerEvents: "none" as const,
      };
    }

    const isCenter = normalizedDiff === 0;
    const baseTranslate = normalizedDiff * 140;
    const scale = isCenter ? 1 : 0.78;
    const rotateY = normalizedDiff * -15;
    const translateZ = isCenter ? 60 : -30;
    const zIndex = 10 - Math.abs(normalizedDiff);

    return {
      transform: `translateX(${baseTranslate}px) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity: 1,
      zIndex,
      visibility: "visible" as const,
      pointerEvents: isCenter ? ("auto" as const) : ("none" as const),
    };
  };

  const getSlideFilter = (index: number) => {
    const normalizedDiff = getNormalizedDiff(index);
    if (normalizedDiff === 0) return "none";
    return "brightness(0.92) saturate(0.95)";
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
            aos responsáveis e bem-estar aos pets durante toda a visita.
          </p>
        </div>

        {/* Desktop 3D Carousel */}
        <div className="hidden md:block relative" style={{ isolation: "isolate" }}>
          <div 
            className="relative h-[420px] flex items-center justify-center"
            style={{ 
              perspective: "1200px",
              perspectiveOrigin: "center center"
            }}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{ 
                transformStyle: "preserve-3d",
                transform: "translateZ(0)"
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    ...getDesktopSlideStyle(index),
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    willChange: "transform",
                    transformOrigin: "center center",
                  }}
                >
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-elevated"
                    style={{
                      width: "420px",
                      height: "300px",
                      contain: "paint",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center block"
                      style={{ filter: getSlideFilter(index) }}
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

        {/* Mobile 3D Carousel (lighter version) */}
        <div className="md:hidden relative" style={{ isolation: "isolate" }}>
          <div 
            className="relative h-[280px] flex items-center justify-center"
            style={{ 
              perspective: "800px",
              perspectiveOrigin: "center center"
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{ 
                transformStyle: "preserve-3d",
                transform: "translateZ(0)"
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-400 ease-out"
                  style={{
                    ...getMobileSlideStyle(index),
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    willChange: "transform",
                    transformOrigin: "center center",
                  }}
                >
                  <div 
                    className="relative rounded-xl overflow-hidden shadow-medium"
                    style={{
                      width: "260px",
                      height: "185px",
                      contain: "paint",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center block"
                      style={{ filter: getSlideFilter(index) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-soft flex items-center justify-center text-foreground"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-soft flex items-center justify-center text-foreground"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-1.5 mt-5">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-5"
                    : "bg-muted-foreground/30 w-1.5"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;
