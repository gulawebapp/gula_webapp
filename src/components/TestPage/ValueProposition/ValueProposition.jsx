import { FaStar } from "react-icons/fa";

const ValueProposition = () => {
  return (
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
            All businesses undergo strict verification to ensure reliability and
            quality.
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
  );
};

export default ValueProposition;
