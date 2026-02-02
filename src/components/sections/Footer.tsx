import { Instagram, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="VivaZhen Vet" 
              className="h-12 w-12 rounded-full object-cover"
            />
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
              href="https://www.instagram.com/vivazhenvet/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
          <p>© {currentYear} VivaZhen Vet. Todos os direitos reservados.</p>
          <a 
            href="https://maps.app.goo.gl/ggPBacf6bu7M58tb7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            R. Gonçalo Fernandes, 321 - Jardim Bela Vista, Santo André - SP
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
