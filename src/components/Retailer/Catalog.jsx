import { useState, useEffect } from "react";
import Loading from "../common/Loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWholesalerProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Fetching wholesalers...");
        // First get all wholesaler users
        const usersQuery = query(
          collection(db, "users"),
          where("account", "==", "wholesaler") // Using 'account' field as per your login system
        );
        const usersSnapshot = await getDocs(usersQuery);

        if (usersSnapshot.empty) {
          console.log("No wholesalers found");
          setProducts([]);
          return;
        }

        // Create map of wholesaler IDs to business names
        const wholesalersMap = {};
        usersSnapshot.forEach((doc) => {
          wholesalersMap[doc.id] = doc.data().businessname; // Using 'businessname' (lowercase) as per your login system
        });

        console.log("Found wholesalers:", wholesalersMap);

        // Now get products from these wholesalers
        console.log("Fetching products from wholesalers...");
        const productIds = Object.keys(wholesalersMap);
        const productsQuery = query(
          collection(db, "products"),
          where("ownerId", "in", productIds.length > 0 ? productIds : [""]) // Ensure we don't pass empty array
        );
        const productsSnapshot = await getDocs(productsQuery);

        const productsData = productsSnapshot.docs.map((doc) => {
          const productData = doc.data();
          return {
            ...productData,
            id: doc.id,
            wholesalerName:
              wholesalersMap[productData.ownerId] || "Unknown Wholesaler",
            // Map your product fields correctly
            productname: productData.productname,
            unitprice: productData.unitprice,
            totalquantity: productData.totalquantity,
            unit: productData.unit,
            description: productData.description,
            category: productData.category,
            subcategory: productData.subcategory,
          };
        });

        console.log("Fetched products:", productsData);
        setProducts(productsData);
      } catch (err) {
        console.error("Failed to fetch wholesaler products:", err);
        setError(`Failed to load products: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchWholesalerProducts();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="mx-auto px-4 py-8">
      {products.length === 0 ? (
        <div className="text-center py-12">
          <h1 className="text-2xl font-medium text-gray-600">
            No wholesaler products available
          </h1>
          <p className="mt-2 text-gray-500">
            {!loading && "No products found from registered wholesalers."}
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedProducts).map(([category, products]) => (
            <div
              key={category}
              className="flex flex-col justify-center text-center space-y-4"
            >
              <h2 className="text-sm sm:text-xl font-semibold text-gray-800 border-b pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col justify-center mx-auto text-center bg-white rounded-lg w-60 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-2 sm:p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg text-gray-800">
                          {product.productname}
                        </h3>
                        <span className="font-bold text-blue-600">
                          Price for one item UGX{product.unitprice?.toFixed(2)}
                        </span>
                      </div>

                      <div className="mt-1 text-sm text-gray-500">
                        <p>Sold by: {product.wholesalerName}</p>
                      </div>

                      <div className="mt-2 text-sm text-gray-600 gap-y-4">
                        <p>Total stock: {product.totalquantity}</p>
                        <p className="flex gap-x-2 justify-center items-center">
                          <p>Measured in:</p>
                          {product.unit}
                        </p>
                        <p className="truncate">
                          <p>Message about product</p>
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                        <span>
                          {product.category}
                          {product.subcategory && ` / ${product.subcategory}`}
                        </span>
                      </div>
                    </div>

                    <div className="border-t p-3 bg-gray-50">
                      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                        Add to Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
