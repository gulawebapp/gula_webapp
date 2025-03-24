import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PropTypes from "prop-types";

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

export default AnimatedSection;