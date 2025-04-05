import { motion } from "framer-motion";
import image from "./images/team.webp";

const heroData = {
  title: "The Future of B2B Commerce",
  description:
    "Our platform revolutionizes how retailers and wholesalers connect, trade, and grow together in a digital marketplace.",
  imageSrc: image,
};

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-100 to-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              {heroData.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-700 mb-8"
            >
              {heroData.description}
            </motion.p>
          </div>
          <div className="md:w-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              src={heroData.imageSrc}
              alt="Business partners shaking hands"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
