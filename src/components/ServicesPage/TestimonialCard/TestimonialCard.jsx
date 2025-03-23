import { motion } from "framer-motion";

const testimonials = [
  {
    image: "/placeholder.svg",
    name: "Sarah Johnson",
    role: "CEO, TechCorp Solutions",
    testimonial:
      "Their business consulting services transformed our operations and helped us achieve a 200% growth in revenue within 18 months.",
  },
  // Add more testimonials here
];

const TestimonialCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 overflow-hidden shadow rounded-lg"
    >
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <img
                  src={testimonials.image}
                  alt={name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{testimonials.name}</h4>
                  <p className="text-sm text-gray-500">{testimonials.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonials.testimonial}</p>
            </div>
          </div>
        </div>
      </div>
      ;
    </motion.div>
  );
};

export default TestimonialCard;
