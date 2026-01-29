import { Instagram, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-semibold">VivaZhen</span>
            <span className="font-serif text-xl font-light opacity-70">Vet</span>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-sm opacity-80">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
            <span>para quem ama seus pets</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/vivazhenvet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/vivazhenvet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
          <p>© {currentYear} VivaZhen Vet. Todos os direitos reservados.</p>
          <p>Santo André - SP | CRMV-SP 12345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
