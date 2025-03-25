import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  animate = true,
  ...props
}) => {
  const baseStyles =
    "px-2 py-2 sm:px-6 sm:py-3 rounded-md text-base sm:text-lg font-medium shadow-lg";

  const variants = {
    primary: "bg-black text-white hover:bg-blue-700",
    secondary:
      "bg-white text-black border-2 border-black hover:bg-black hover:text-white",
    thirdly:
      "bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300",
  };

  const ButtonComponent = animate ? motion.button : "button";

  return (
    <ButtonComponent
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={animate ? { scale: 1.05 } : undefined}
      whileTap={animate ? { scale: 0.95 } : undefined}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  animate: PropTypes.bool,
};

export default Button;
