import vetImage from "@/assets/vet-professional.jpg";

const team = [
  {
    name: "Dra. Marina Costa",
    role: "Diretora Clínica",
    specialty: "Medicina Felina",
    crmv: "CRMV-SP 12345",
    image: vetImage,
  },
  {
    name: "Dr. Rafael Mendes",
    role: "Cardiologista",
    specialty: "Cardiologia Veterinária",
    crmv: "CRMV-SP 23456",
    image: vetImage,
  },
  {
    name: "Dra. Juliana Santos",
    role: "Cirurgiã",
    specialty: "Cirurgia de Tecidos Moles",
    crmv: "CRMV-SP 34567",
    image: vetImage,
  },
];

const Team = () => {
  return (
    <section id="equipe" className="section-padding gradient-sage">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-primary mb-4 block">
            Nossa Equipe
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Profissionais
            <span className="text-primary"> dedicados</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Uma equipe de especialistas apaixonados pelo que fazem, comprometidos
            com a saúde e bem-estar de cada paciente.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {member.specialty}
                </p>
                <span className="text-xs text-muted-foreground/70 font-mono">
                  {member.crmv}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
