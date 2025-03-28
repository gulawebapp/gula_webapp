const HeadLine = () => {
  return (
    <section className="text-center mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Connect with Trusted B2B Partners
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        Discover wholesale suppliers and high-quality products for your business
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
  );
};

export default HeadLine;
