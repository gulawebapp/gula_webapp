import AnimatedSection from "../components/ContactPage/AnimatedSection/AnimatedSection";
import ContactForm from "../components/ContactPage/ContactForm/ContactForm";
import ContactInfo from "../components/ContactPage/ContactInfo/ContactInfo";
import ContactMethods from "../components/ContactPage/ContactMethods/ContactMethods";
import FAQSection from "../components/ContactPage/FAQSection/FAQSection";
import contact from "../images/contact.webp";

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-12" animationType="fadeIn">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </AnimatedSection>

        {/* Form and Quick Contact Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection animationType="slideInLeft">
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection className="space-y-6" animationType="slideInRight">
            <ContactInfo />
            <ContactMethods />
          </AnimatedSection>
        </div>

        {/* Contact Image */}
        <AnimatedSection className="mt-12" animationType="scaleUp">
          <img
            src={contact}
            alt="Contact Image"
            className="w-full h-96 object-cover rounded-lg"
          />
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="mt-12" animationType="fadeIn">
          <FAQSection />
        </AnimatedSection>
      </main>
    </div>
  );
}