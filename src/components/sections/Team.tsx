import { GraduationCap, Heart } from "lucide-react";
import draVaniaImg from "@/assets/dra-vania-gomes.jpg";
import draBrunaImg from "@/assets/dra-bruna-mainente.jpg";
import draAnnaImg from "@/assets/dra-anna-fernandes.jpg";

const teamMembers = [
  {
    name: "Vânia Gomes",
    role: "Médica Veterinária",
    credentials: [
      "Formação em Medicina Veterinária — 2015",
      "10 anos de experiência total",
      "Especialista em felinos — desde 2018",
      "7 anos dedicados exclusivamente a gatos",
    ],
    image: draVaniaImg,
    highlight: false,
  },
  {
    name: "Anna Fernandes",
    role: "Médica Veterinária",
    credentials: [
      "Médica Veterinária",
      "Especializada em medicina integrativa e nutrologia",
      "7 anos de experiência",
    ],
    image: draAnnaImg,
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
    image: draBrunaImg,
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
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={`relative p-6 rounded-2xl transition-all duration-300 ${
                member.highlight
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card shadow-soft hover:shadow-medium"
              }`}
            >
              {/* Photo */}
              <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-6 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>

              {/* Name & Role */}
              <h3
                className={`font-serif text-xl font-semibold mb-2 text-center ${
                  member.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {member.name}
              </h3>
              <p
                className={`font-medium text-base mb-4 text-center ${
                  member.highlight ? "text-primary-foreground/80" : "text-primary"
                }`}
              >
                {member.role}
              </p>

              {/* Credentials */}
              <div className="space-y-2">
                {member.credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        member.highlight
                          ? "bg-primary-foreground/20"
                          : "bg-lilac-light"
                      }`}
                    >
                      <GraduationCap
                        className={`w-2.5 h-2.5 ${
                          member.highlight ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs leading-relaxed ${
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
