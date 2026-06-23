import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { especialidades } from "@/data/especialidades";

const Footer = () => {
  const sections = [
    { label: "Início", hash: "#inicio" },
    { label: "Sobre", hash: "#sobre" },
    { label: "Equipe", hash: "#equipe" },
    { label: "Clínica", hash: "#clinica" },
    { label: "Contato", hash: "#contato" },
  ];

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Marca */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="VivaZhen Vet"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="font-serif text-xl font-semibold">
                VivaZhen Vet
              </span>
            </div>
            <p className="text-sm text-background/75 leading-relaxed mb-6 max-w-sm">
              Clínica veterinária de alto padrão em Santo André. Referência em
              medicina felina e atendimento humanizado para cães e gatos.
            </p>
            <a
              href="https://www.instagram.com/vivazhenvet/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-background/85 hover:text-secondary transition-colors"
              aria-label="Instagram @vivazhenvet"
            >
              <span className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </span>
              @vivazhenvet
            </a>
          </div>

          {/* Col 2 — Navegação */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5">Navegação</h3>
            <ul className="space-y-2.5 text-sm text-background/75">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              {sections.slice(1).map((s) => (
                <li key={s.label}>
                  <Link
                    to={`/${s.hash}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/especialidades"
                  className="hover:text-secondary transition-colors"
                >
                  Especialidades
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Especialidades */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5">
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-sm text-background/75">
              {especialidades.map((e) => (
                <li key={e.slug}>
                  <Link
                    to={`/especialidades/${e.slug}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {e.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contato */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5">Contato</h3>
            <ul className="space-y-4 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" />
                <a
                  href="https://wa.me/5511972547757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  (11) 97254-7757
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" />
                <a
                  href="mailto:vivazhen.vet@outlook.com"
                  className="hover:text-secondary transition-colors break-all"
                >
                  vivazhen.vet@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-secondary" />
                <a
                  href="https://maps.app.goo.gl/ggPBacf6bu7M58tb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  R. Gonçalo Fernandes, 321 - Jardim Bela Vista, Santo André - SP,
                  09041-410
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 text-center text-xs text-background/60">
          © 2026 VivaZhen Vet. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
