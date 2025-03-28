import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const businesses = [
  {
    id: 1,
    name: "Wholesale Mart",
    description: "Your one-stop shop for bulk products at wholesale prices.",
    category: "General Merchandise",
  },
  {
    id: 2,
    name: "Retail Hub",
    description: "Connecting retailers with the best suppliers in the market.",
    category: "Supplier Network",
  },
  {
    id: 3,
    name: "Global Suppliers",
    description: "Providing high-quality products to retailers worldwide.",
    category: "International Trade",
  },
];

const FeaturedBusinesses = () => {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Featured Businesses
        </h2>
        <Link
          to="/businesses"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white ml-10 mr-10 sm:ml-0 sm:mr-0"
          >
            <div className="flex items-center mb-4">
              <FaUser className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
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
  );
};

export default FeaturedBusinesses;
