import PropTypes from "prop-types";
import { motion } from "framer-motion";
/* // Variants for slide-in effect */

const slideInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      variants={slideInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer w-full h-full"
    >
      <img
        src={category.image1x} // 288×192 version
        srcSet={`${category.image1x} 1x, ${category.image2x} 2x`}
        alt={category.name}
        className="w-72 h-48 object-cover mx-auto" // Changed to object-cover
        loading="lazy"
        width="288" // Matches w-72 (72×4=288)
        height="192" // Matches h-48 (48×4=192)
      />
      <div className="p-4 sm:p-6 flex flex-col justify-center items-center mx-auto">
        <h3 className="font-semibold text-lg sm:text-xl mb-2">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base text-center">
          {" "}
          {/* Added text-center */}
          Bulk {category.name.toLowerCase()} and accessories
        </p>
      </div>
    </motion.div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
