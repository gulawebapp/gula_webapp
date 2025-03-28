import ContactForm from "../components/ServicesPage/ContactForm/ContactForm";
import HeroSection from "../components/ServicesPage/HeroSection/HeroSection";
import ServiceCard from "../components/ServicesPage/ServiceCard/ServiceCard";
import TestimonialCard from "../components/ServicesPage/TestimonialCard/TestimonialCard";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Services Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard />
          </div>
        </div>
      </div>

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
