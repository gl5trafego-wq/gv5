import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda Oliveira",
    pet: "Responsável do Simba",
    text: "Finalmente encontrei uma clínica onde meu gato não fica estressado. A Dra. Vânia tem um carinho imenso pelos felinos e isso faz toda a diferença. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Ricardo Santos",
    pet: "Responsável da Luna e do Thor",
    text: "Atendimento impecável do início ao fim. A equipe explica tudo com paciência e o ambiente é muito acolhedor. Meus pets são tratados como se fossem da família deles.",
    rating: 5,
  },
  {
    name: "Marina Costa",
    pet: "Responsável da Mel",
    text: "A Mel tem problemas cardíacos e a cardiologista da VivaZhen salvou a vida dela. Sou eternamente grata pelo profissionalismo e humanidade de toda a equipe.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            O que dizem
            <span className="text-primary"> nossos pacientes</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            A confiança das famílias que atendemos é nosso maior reconhecimento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.pet}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-lilac-light px-6 py-3 rounded-full">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              5.0 no Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
