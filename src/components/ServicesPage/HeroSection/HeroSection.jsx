import { motion } from "framer-motion";
import group from "./images/group.webp";
const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: `url(${group})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Our Comprehensive B2B Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Empowering businesses with innovative solutions and strategic
            partnerships for sustainable growth and success in the digital age.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
