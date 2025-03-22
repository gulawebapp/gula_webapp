import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../button";
import { useEffect } from "react";
import img1 from "./images/happy.webp";

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variants for the container (fade-in effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each character's animation
      },
    },
  };

  // Variants for each character (typewriter effect)
  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };
  // Text to animate
  const text = "Connect Wholesalers with Retailers";

  // Text to animate
  const text1 =
    "Join our global B2B marketplace connecting wholesalers and retailers worldwide. Experience seamless trade partnerships.";

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-100 to-transparent"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center min-h-full">
        <div className="md:w-1/2">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={characterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-base sm:text-3xl text-gray-700 mb-6 sm:mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {text1.split("").map((char, index) => (
              <motion.span key={index} variants={characterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button variant="primary">Start Trading</Button>
            <Button variant="secondary">Learn More</Button>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src={img1}
            alt="Hero Image"
            className="rounded-lg w-full"
            loading="lazy"
            width="600"
            height="400"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
