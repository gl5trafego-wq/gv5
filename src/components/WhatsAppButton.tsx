import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511972547757"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-elevated hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-medium">
        Fale conosco
      </span>
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)] animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;
