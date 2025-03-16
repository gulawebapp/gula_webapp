const TestPage = () => {
  // Hard-coded data for featured businesses
  const featuredBusinesses = [
    {
      id: 1,
      name: "Wholesale Mart",
      logo: "https://via.placeholder.com/100",
      description: "Your one-stop shop for bulk products at wholesale prices.",
    },
    {
      id: 2,
      name: "Retail Hub",
      logo: "https://via.placeholder.com/100",
      description:
        "Connecting retailers with the best suppliers in the market.",
    },
    {
      id: 3,
      name: "Global Suppliers",
      logo: "https://via.placeholder.com/100",
      description: "Providing high-quality products to retailers worldwide.",
    },
  ];

  // Hard-coded data for popular products
  const popularProducts = [
    {
      id: 1,
      name: "Wireless Earbuds",
      image: "https://via.placeholder.com/150",
      price: 29.99,
    },
    {
      id: 2,
      name: "Organic Coffee Beans",
      image: "https://via.placeholder.com/150",
      price: 15.99,
    },
    {
      id: 3,
      name: "Yoga Mat",
      image: "https://via.placeholder.com/150",
      price: 19.99,
    },
    {
      id: 4,
      name: "Smart Watch",
      image: "https://via.placeholder.com/150",
      price: 99.99,
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">
        Welcome to the B2B Marketplace!
      </h1>

      {/* Featured Businesses Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Featured Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBusinesses.map((business) => (
            <div key={business.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={business.logo}
                alt={business.name}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium">{business.name}</h3>
              <p className="text-gray-600">{business.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                View Product
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why It's Important Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Why This Platform is Important
        </h2>
        <div className="space-y-4">
          <p>
            For <strong>Retailers</strong>, this platform provides access to a
            wide range of products at competitive prices, saving time and
            reducing costs.
          </p>
          <p>
            For <strong>Wholesalers</strong>, it offers a streamlined way to
            reach more customers, manage orders efficiently, and grow their
            business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TestPage;
