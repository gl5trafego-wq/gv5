import { Award, GraduationCap, Users, Star } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Certificação Cat Friendly",
    description: "Clínica certificada pela International Society of Feline Medicine",
  },
  {
    icon: GraduationCap,
    title: "Formação Especializada",
    description: "Equipe com pós-graduação em medicina felina",
  },
  {
    icon: Users,
    title: "+5.000 Pacientes",
    description: "Famílias que confiam em nosso cuidado",
  },
  {
    icon: Star,
    title: "5 Estrelas",
    description: "Avaliação máxima no Google pelos tutores",
  },
];

const Authority = () => {
  return (
    <section className="py-16 bg-lilac-light">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {credentials.map((item, index) => (
            <div
              key={item.title}
              className="text-center p-6 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;
