import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { HeroSection } from "../components/AboutPage/HeroSection/HeroSection";
import { MissionSection } from "../components/AboutPage/MissionSection/MissionSection";
import { ImpactSection } from "../components/AboutPage/ImpactSection/ImpactSection";
import { TestimonialsSection } from "../components/AboutPage/TestimonialsSection/TestimonialsSection";
import { ContactSection } from "../components/AboutPage/ContactSection/ContactSection";

export default function About() {
  // Reusable animation logic with unique animations
  const AnimatedSection = ({ children, className, animationType }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    const animations = {
      fadeIn: {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      },
      slideInLeft: {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      },
      slideInRight: {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      },
      scaleUp: {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animations[animationType]}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  AnimatedSection.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    animationType: PropTypes.oneOf([
      "fadeIn",
      "slideInLeft",
      "slideInRight",
      "scaleUp",
    ]).isRequired,
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <HeroSection />

      <AnimatedSection
        className="bg-white py-16 md:py-24"
        animationType="slideInLeft"
      >
        <MissionSection />
      </AnimatedSection>

      <AnimatedSection
        className="bg-gray-50 py-16 md:py-24"
        animationType="slideInRight"
      >
        <ImpactSection />
      </AnimatedSection>

      <AnimatedSection
        className="bg-white py-16 md:py-24"
        animationType="scaleUp"
      >
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection
        className="bg-gray-50 py-16 md:py-24"
        animationType="fadeIn"
      >
        <ContactSection />
      </AnimatedSection>
    </div>
  );
}
