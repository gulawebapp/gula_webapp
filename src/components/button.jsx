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
    "px-6 py-3 rounded-md text-base font-medium shadow-lg flex-shrink-0"; // Added flex-shrink-0

  const variants = {
    primary: "bg-black text-white hover:bg-blue-700",
    secondary: "bg-white text-black border-2 border-black hover:bg-black hover:text-white",
    thirdly: "bg-black text-white hover:bg-gray-800 transition duration-300",
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
  variant: PropTypes.oneOf(["primary", "secondary", "thirdly"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  animate: PropTypes.bool,
};

export default Button;