import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import GallerySection from "./sections/GallerySection";
import AboutSection from "./sections/AboutSection";
import ProcessSection from "./sections/ProcessSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "./sections/CTASection";
import ContactSection from "./sections/ContactSection";
import Carousell from "./sections/Carousell";
import Gallery from "./sections/ClientGallery";
export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <Gallery />

        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
