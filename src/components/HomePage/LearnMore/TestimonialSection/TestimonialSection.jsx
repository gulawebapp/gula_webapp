import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "This platform cut our ordering time by 70% and helped us discover new suppliers.",
    author: "Sarah K., Retail Store Owner",
  },
  {
    quote:
      "We've doubled our customer base since joining without increasing our sales team.",
    author: "Michael T., Wholesale Distributor",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of businesses who have transformed their supply
            chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
