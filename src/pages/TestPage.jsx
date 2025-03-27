import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TestPage = () => {
  // Hard-coded data for featured businesses
  const featuredBusinesses = [
    {
      id: 1,
      name: "Wholesale Mart",
      logo: "https://via.placeholder.com/100",
      description: "Your one-stop shop for bulk products at wholesale prices.",
      category: "General Merchandise",
    },
    {
      id: 2,
      name: "Retail Hub",
      logo: "https://via.placeholder.com/100",
      description:
        "Connecting retailers with the best suppliers in the market.",
      category: "Supplier Network",
    },
    {
      id: 3,
      name: "Global Suppliers",
      logo: "https://via.placeholder.com/100",
      description: "Providing high-quality products to retailers worldwide.",
      category: "International Trade",
    },
  ];

  // Hard-coded data for popular products
  const popularProducts = [
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

  // Rating component
  const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="w-4 h-4" />
        ))}
        {hasHalfStar && <FaStarHalfAlt key="half" className="w-4 h-4" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="w-4 h-4" />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Connect with Trusted B2B Partners
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Discover wholesale suppliers and high-quality products for your
          business
        </p>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for products or suppliers..."
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Featured Businesses
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBusinesses.map((business) => (
            <div
              key={business.id}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white ml-10 mr-10 sm:ml-0 sm:mr-0"
            >
              <div className="flex items-center mb-4">
                <img
                  src={business.logo}
                  alt={business.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {business.name}
                  </h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {business.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{business.description}</p>
              <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Popular Products</h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Browse all
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
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

      {/* Value Proposition Section */}
      <section className="mb-16 bg-gray-50 rounded-xl p-8 ml-10 mr-10 sm:ml-0 sm:mr-0">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Why Choose Our B2B Marketplace?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaStar className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Verified Suppliers
            </h3>
            <p className="text-gray-600">
              All businesses undergo strict verification to ensure reliability
              and quality.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaStar className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Competitive Pricing
            </h3>
            <p className="text-gray-600">
              Access wholesale prices that help maximize your profit margins.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaStar className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Efficient Order Management
            </h3>
            <p className="text-gray-600">
              Streamlined processes for quotes, orders, and payments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of retailers and wholesalers who are already benefiting
          from our platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/createaccount"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestPage;
