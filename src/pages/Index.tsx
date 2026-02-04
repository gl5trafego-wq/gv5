import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Clinic from "@/components/sections/Clinic";
import ClinicGallery from "@/components/sections/ClinicGallery";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Bloco de autoridade e credibilidade */}
        <Authority />
        
        {/* 3. Quem Somos */}
        <About />
        
        {/* 4. Especialidades */}
        <Services />
        
        {/* 5. Equipe Médica */}
        <Team />
        
        {/* 6. Nossa Clínica */}
        <Clinic />
        
        {/* 7. Galeria de Fotos */}
        <ClinicGallery />
        
        {/* 8. Feedbacks / Pacientes */}
        <Testimonials />
        
        {/* 8. CTA final para agendamento */}
        <FinalCTA />
        
        {/* 9. Contato e localização */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
