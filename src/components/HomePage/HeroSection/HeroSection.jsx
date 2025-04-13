import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import img1 from "./images/happy.webp";
import Button from "../../common/button";
import LoginForm from "../../common/loginForm";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleStartTradingClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  // Variants for the container (fade-in effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  const text = "Connect Wholesalers with Retailers";
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
      className="bg-gradient-to-r from-purple-100 to-transparent relative"
    >
      {showLoginForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.9)]"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <LoginForm onClose={handleCloseLoginForm} />
            </div>
          </div>
        </div>
      )}

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
            className="flex flex-row gap-4 flex-wrap"
          >
            <Button variant="primary" onClick={handleStartTradingClick}>
              Start Trading
            </Button>
            <Button variant="secondary" onClick={() => navigate("/learnmore")}>
              Learn More
            </Button>
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
            src={img1} // Make sure this is a WebP/AVIF image (see Step 1 below)
            alt="Hero Image"
            className="rounded-lg"
            width="600"
            height="400"
            loading="eager" // Overrides lazy-loading for LCP elements
            fetchpriority="high" // Prioritizes loading (Chrome 101+)
            decoding="async" // Prevents render-blocking
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
