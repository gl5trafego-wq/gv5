import { Button, type ButtonProps } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { buildWhatsappUrl } from "@/data/especialidades";

type Props = {
  slug: string;
  message: string;
  label?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  ctaVariante?: "hero" | "pos-sinais" | "pos-atendimento" | "final";
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const EspecialidadeWhatsappButton = ({
  slug,
  message,
  label = "Agendar pelo WhatsApp",
  variant = "premium",
  size = "xl",
  className,
  ctaVariante = "hero",
}: Props) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "click_whatsapp_especialidade",
      especialidade: slug,
      cta_variante: ctaVariante,
    });
    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`whitespace-normal text-center ${className ?? ""}`}
      onClick={handleClick}
      data-especialidade={slug}
      data-cta-variante={ctaVariante}
    >
      <Phone className="w-5 h-5 flex-shrink-0" />
      {label}
    </Button>
  );
};

export default EspecialidadeWhatsappButton;
