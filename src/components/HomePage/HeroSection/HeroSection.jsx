import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Button from "../../common/button";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../auth/loginForm";

// WebP versions (modern browsers - better compression)
import happy1_400webp from "./images/happy1_400.webp";
import happy1_600webp from "./images/happy1_600.webp";
import happy1_800webp from "./images/happy1_800.webp";
import happy1_1200webp from "./images/happy1_1200.webp";

// JPEG fallbacks (older browsers)
import happy1_400 from "./images/happy1_400.jpg";
import happy1_600 from "./images/happy1_600.jpg";
import happy1_800 from "./images/happy1_800.jpg";
import happy1_1200 from "./images/happy1_1200.jpg";

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

  // Simplified variants for better performance
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
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
          {/* Simplified text animation - no typewriter effect */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            Linking farmers to markets
          </motion.h1>

          <motion.p
            className="text-base sm:text-3xl text-gray-700 mb-6 sm:mb-8"
            variants={{
              ...fadeInVariants,
              visible: {
                ...fadeInVariants.visible,
                transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            Join our global B2B marketplace connecting farmers with buyers
            worldwide. Experience seamless trade partnerships.
          </motion.p>

          <motion.div
            variants={{
              ...fadeInVariants,
              visible: {
                ...fadeInVariants.visible,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
              },
            }}
            initial="hidden"
            animate="visible"
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

        {/* Image with NO DELAY - loads immediately */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.4, delay: 0 }} // NO DELAY for LCP element
          className="md:w-1/2"
        >
          <picture>
            {/* WebP versions for modern browsers */}
            <source
              srcSet={`
                ${happy1_400webp} 400w,
                ${happy1_600webp} 600w,
                ${happy1_800webp} 800w,
                ${happy1_1200webp} 1200w
              `}
              sizes="(max-width: 480px) 400px, (max-width: 768px) 600px, (max-width: 1024px) 800px, 1200px"
              type="image/webp"
            />

            {/* JPEG fallback for older browsers */}
            <img
              src={happy1_800} // Default fallback
              srcSet={`
                ${happy1_400} 400w,
                ${happy1_600} 600w,
                ${happy1_800} 800w,
                ${happy1_1200} 1200w
              `}
              sizes="(max-width: 480px) 400px, (max-width: 768px) 600px, (max-width: 1024px) 800px, 1200px"
              alt="Happy farmer using agricultural marketplace platform"
              className="rounded-lg w-full h-auto aspect-[3/2] object-cover"
              width={800}
              height={534}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
