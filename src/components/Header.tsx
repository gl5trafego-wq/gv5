import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Equipe", href: "#equipe" },
    { label: "Clínica", href: "#clinica" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#inicio");
          }}
          className="flex items-center"
        >
          <img 
            src={logo} 
            alt="VivaZhen Vet" 
            className="h-12 md:h-14 w-12 md:w-14 rounded-full object-cover"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="premium"
            size="default"
            onClick={() => window.open("https://wa.me/5511972547757?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20VivaZhen%20Vet.", "_blank")}
          >
            <Phone className="w-4 h-4" />
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-0 bg-black/40 z-[55]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[64px] left-0 right-0 bg-background/98 backdrop-blur-md shadow-medium z-[60] transition-all duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="container-wide py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-3 min-h-[44px] flex items-center"
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="premium"
            size="lg"
            className="mt-4 w-full"
            onClick={() => {
              window.open("https://wa.me/5511972547757?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20VivaZhen%20Vet.", "_blank");
              setIsMobileMenuOpen(false);
            }}
          >
            <Phone className="w-4 h-4" />
            Agendar Consulta
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
