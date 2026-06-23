import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { especialidades } from "@/data/especialidades";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEspDropdownOpen, setIsEspDropdownOpen] = useState(false);
  const [isMobileEspOpen, setIsMobileEspOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsEspDropdownOpen(false);
      }
    };
    if (isEspDropdownOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isEspDropdownOpen]);

  const sectionItems = [
    { label: "Início", hash: "#inicio" },
    { label: "Sobre", hash: "#sobre" },
    { label: "Equipe", hash: "#equipe" },
    { label: "Clínica", hash: "#clinica" },
    { label: "Contato", hash: "#contato" },
  ];

  const goToSection = useCallback(
    (hash: string) => {
      setIsMobileMenuOpen(false);
      setIsEspDropdownOpen(false);
      if (location.pathname !== "/") {
        navigate(`/${hash}`);
        return;
      }
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    [location.pathname, navigate],
  );

  const openWhatsapp = () =>
    window.open(
      "https://wa.me/5511972547757?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20VivaZhen%20Vet.",
      "_blank",
      "noopener,noreferrer",
    );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="VivaZhen Vet — Início">
          <img
            src={logo}
            alt="VivaZhen Vet"
            className="h-12 md:h-14 w-12 md:w-14 rounded-full object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {sectionItems.slice(0, 2).map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => goToSection(item.hash)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}

          {/* Especialidades dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsEspDropdownOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              aria-expanded={isEspDropdownOpen}
              aria-haspopup="menu"
            >
              Especialidades
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isEspDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isEspDropdownOpen && (
              <div
                role="menu"
                className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-72 bg-background rounded-2xl shadow-elevated border border-border py-2 z-50"
              >
                <Link
                  to="/especialidades"
                  onClick={() => setIsEspDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-lilac-light transition-colors"
                >
                  Ver todas as especialidades
                </Link>
                <div className="my-1 border-t border-border" />
                {especialidades.map((e) => (
                  <Link
                    key={e.slug}
                    to={`/especialidades/${e.slug}`}
                    onClick={() => setIsEspDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-lilac-light/60 transition-colors"
                  >
                    {e.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {sectionItems.slice(2).map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => goToSection(item.hash)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="premium" size="default" onClick={openWhatsapp}>
            <Phone className="w-4 h-4" />
            Agendar Consulta
          </Button>
        </div>

        <button
          className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-0 bg-black/40 z-[55]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`lg:hidden fixed top-[64px] left-0 right-0 max-h-[calc(100vh-64px)] overflow-y-auto bg-background/98 backdrop-blur-md shadow-medium z-[60] transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="container-wide py-6 flex flex-col gap-2">
          {sectionItems.slice(0, 2).map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => goToSection(item.hash)}
              className="text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors py-3 min-h-[44px]"
            >
              {item.label}
            </button>
          ))}

          {/* Especialidades collapsible */}
          <div>
            <button
              type="button"
              onClick={() => setIsMobileEspOpen((v) => !v)}
              className="w-full flex items-center justify-between text-base font-medium text-muted-foreground hover:text-primary transition-colors py-3 min-h-[44px]"
              aria-expanded={isMobileEspOpen}
            >
              Especialidades
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isMobileEspOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isMobileEspOpen && (
              <div className="pl-3 border-l-2 border-lilac-light ml-1 mb-2 flex flex-col">
                <Link
                  to="/especialidades"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 text-sm font-semibold text-primary"
                >
                  Ver todas
                </Link>
                {especialidades.map((e) => (
                  <Link
                    key={e.slug}
                    to={`/especialidades/${e.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2.5 text-sm text-muted-foreground hover:text-primary"
                  >
                    {e.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {sectionItems.slice(2).map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => goToSection(item.hash)}
              className="text-left text-base font-medium text-muted-foreground hover:text-primary transition-colors py-3 min-h-[44px]"
            >
              {item.label}
            </button>
          ))}

          <Button
            variant="premium"
            size="lg"
            className="mt-4 w-full"
            onClick={() => {
              openWhatsapp();
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
