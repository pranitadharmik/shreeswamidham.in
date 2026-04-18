import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
// import ProjectsSection from "@/components/ProjectsSection";
import LocationAdvantage from "@/components/LocationAdvantage";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
// import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      {/* <ProjectsSection /> */}
      <LocationAdvantage />
      <TestimonialsSection />
      <FAQSection />
      {/* <ContactSection /> */}
    </main>
    <Footer />
  </>
);

export default Index;
