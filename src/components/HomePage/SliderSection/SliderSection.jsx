import CategoryCard from "../CategoryCard/CategoryCard";
import PropTypes from "prop-types";
import styles from "./SliderSection.module.css";

// Single image imports for each category
import electronicsImg from "./images/electronics.webp";
import fashionImg from "./images/fashion.webp";
import goodsImg from "./images/goods.webp";
import cosmeticsImg from "./images/cosmetics.webp";

const categories = [
  {
    name: "Electronics",
    image: electronicsImg,
  },
  {
    name: "Fashion",
    image: fashionImg,
  },
  {
    name: "Home Goods",
    image: goodsImg,
  },
  {
    name: "Beauty",
    image: cosmeticsImg,
  },
];

const SliderSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Featured Categories
        </h2>
        <div className={styles.slider}>
          <div className={`${styles.slideTrack} gap-6 sm:gap-8`}>
            {[...categories, ...categories].map((category, index) => (
              <div key={index} className={styles.slide}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

SliderSection.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SliderSection;
