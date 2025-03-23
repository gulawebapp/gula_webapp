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
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-contain"
        loading="lazy"
        width="300"
        height="200"
      />
      <div className="p-4 sm:p-6">
        <h3 className="font-semibold text-lg sm:text-xl mb-2">
          Wholesale {category.name}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
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
