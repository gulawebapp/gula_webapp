import { motion } from "framer-motion";
import image from "./images/group.webp"; // Pre-optimized image

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      <img
        src={image}
        alt="Our B2B services team"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        width={1920}
        height={1080}
      />

      <div className="absolute inset-0 bg-black/20"></div>
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
            Empowering businesses with innovative solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
