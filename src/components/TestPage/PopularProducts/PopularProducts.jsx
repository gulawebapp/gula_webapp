import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import { FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    image: "https://via.placeholder.com/150",
    price: 29.99,
    rating: 4.5,
    reviews: 128,
    moq: 50,
  },
  {
    id: 2,
    name: "Organic Coffee Beans (1kg)",
    image: "https://via.placeholder.com/150",
    price: 15.99,
    rating: 4.8,
    reviews: 76,
    moq: 20,
  },
  {
    id: 3,
    name: "Premium Yoga Mat",
    image: "https://via.placeholder.com/150",
    price: 19.99,
    rating: 4.3,
    reviews: 42,
    moq: 30,
  },
  {
    id: 4,
    name: "Smart Watch X3",
    image: "https://via.placeholder.com/150",
    price: 99.99,
    rating: 4.7,
    reviews: 215,
    moq: 10,
  },
];
const PopularProducts = () => {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Products</h2>
        <Link to="" className="text-blue-600 hover:text-blue-800 font-medium">
          Browse all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white ml-10 mr-10 sm:ml-0 sm:mr-0"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                <FaStar className="h-5 w-5 text-yellow-400" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>
              <div className="flex items-center mb-2">
                <RatingStars rating={product.rating} />
                <span className="text-xs text-gray-500 ml-1">
                  ({product.reviews})
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-gray-800">
                  ${product.price}
                </span>
                <span className="text-xs text-gray-500">
                  MOQ: {product.moq}+
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
