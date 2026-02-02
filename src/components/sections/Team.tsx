import { GraduationCap, Cat, Heart, Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Vânia Gomes",
    role: "Diretora Clínica",
    credentials: [
      "Formação em Medicina Veterinária — 2015",
      "10 anos de experiência total",
      "Especialista em felinos — desde 2018",
      "7 anos dedicados exclusivamente a gatos",
    ],
    icon: Cat,
    highlight: true,
  },
  {
    name: "Bruna Mainente",
    role: "Médica Veterinária",
    credentials: [
      "Médica Veterinária",
      "Mestre em Reiki",
      "7 anos de experiência",
    ],
    icon: Sparkles,
    highlight: false,
  },
];

const Team = () => {
  return (
    <section id="equipe" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-sm mb-4">
            <Heart className="w-4 h-4" />
            Equipe Médica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Profissionais
            <span className="text-primary"> dedicados</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Nossa equipe combina experiência, especialização e amor pelos animais 
            para oferecer o melhor cuidado ao seu pet.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                member.highlight
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card shadow-soft hover:shadow-medium"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  member.highlight
                    ? "bg-primary-foreground/20"
                    : "bg-lilac-light"
                }`}
              >
                <member.icon
                  className={`w-8 h-8 ${
                    member.highlight ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>

              {/* Name & Role */}
              <h3
                className={`font-serif text-2xl font-semibold mb-2 ${
                  member.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {member.name}
              </h3>
              <p
                className={`font-medium text-lg mb-6 ${
                  member.highlight ? "text-primary-foreground/80" : "text-primary"
                }`}
              >
                {member.role}
              </p>

              {/* Credentials */}
              <div className="space-y-3">
                {member.credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        member.highlight
                          ? "bg-primary-foreground/20"
                          : "bg-lilac-light"
                      }`}
                    >
                      <GraduationCap
                        className={`w-3 h-3 ${
                          member.highlight ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        member.highlight ? "text-primary-foreground/90" : "text-foreground"
                      }`}
                    >
                      {credential}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
