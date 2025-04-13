import CategoryCard from "../CategoryCard/CategoryCard";
import PropTypes from "prop-types";
import styles from "./SliderSection.module.css";
// Standard resolution imports
import electronics1x from "./images/electronics-288.webp";
import fashion1x from "./images/fashion-288.webp";
import goods1x from "./images/goods-288.webp";
import cosmetics1x from "./images/cosmetics-288.webp";

// High resolution imports
import electronics2x from "./images/electronics-576.webp";
import fashion2x from "./images/fashion-576.webp";
import goods2x from "./images/goods-576.webp";
import cosmetics2x from "./images/cosmetics-576.webp";

const categories = [
  {
    name: "Electronics",
    image1x: electronics1x,
    image2x: electronics2x,
  },
  {
    name: "Fashion",
    image1x: fashion1x,
    image2x: fashion2x,
  },
  {
    name: "Home Goods",
    image1x: goods1x,
    image2x: goods2x,
  },
  {
    name: "Beauty",
    image1x: cosmetics1x,
    image2x: cosmetics2x,
  },
];

const SliderSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
