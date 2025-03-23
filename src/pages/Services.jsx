import HeroSection from "../components/ServicesPage/HeroSection/HeroSection";
import ServiceCard from "../components/ServicesPage/ServiceCard/ServiceCard";
import TestimonialCard from "../components/ServicesPage/TestimonialCard/TestimonialCard";
import ContactForm from "../components/ServicesPage/ContactForm/ContactForm";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Services Section */}
      <ServiceCard />

      {/* Testimonials Section */}

      <TestimonialCard />

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
