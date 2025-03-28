import { motion } from "framer-motion";
import image from "./images/happy.webp";

const testimonials = [
  {
    image: image,
    name: "Sarah Johnson",
    role: "CEO, TechCorp Solutions",
    testimonial:
      "Their business consulting services transformed our operations and helped us achieve a 200% growth in revenue within 18 months.",
  },
  {
    image: image,
    name: "Sarah Johnson",
    role: "CEO, TechCorp Solutions",
    testimonial:
      "Their business consulting services transformed our operations and helped us achieve a 200% growth in revenue within 18 months.",
  },
  {
    image: image,
    name: "Sarah Johnson",
    role: "CEO, TechCorp Solutions",
    testimonial:
      "Their business consulting services transformed our operations and helped us achieve a 200% growth in revenue within 18 months.",
  },

  // Add more testimonials here
];

const TestimonialCard = () => {
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6"
        >
          <div className="flex items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-28 w-28 rounded-full"
            />
            <div className="ml-4">
              <h4 className="text-lg font-bold text-black">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600">{testimonial.testimonial}</p>
        </motion.div>
      ))}
    </>
  );
};

export default TestimonialCard;
