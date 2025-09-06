import { useState, useEffect } from "react";
import Loading from "../common/Loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import useCartStore from "../../Store/Cart";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [savedQuantities, setSavedQuantities] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { addItem } = useCartStore();

  useEffect(() => {
    const fetchWholesalerProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Fetching wholesalers...");
        const usersQuery = query(
          collection(db, "users"),
          where("account", "==", "wholesaler")
        );
        const usersSnapshot = await getDocs(usersQuery);

        if (usersSnapshot.empty) {
          console.log("No wholesalers found");
          setProducts([]);
          return;
        }

        const wholesalersMap = {};
        usersSnapshot.forEach((doc) => {
          wholesalersMap[doc.id] = doc.data().businessname;
        });

        console.log("Found wholesalers:", wholesalersMap);

        console.log("Fetching products from wholesalers...");
        const productIds = Object.keys(wholesalersMap);
        const productsQuery = query(
          collection(db, "products"),
          where("ownerId", "in", productIds.length > 0 ? productIds : [""])
        );
        const productsSnapshot = await getDocs(productsQuery);

        const productsData = productsSnapshot.docs.map((doc) => {
          const productData = doc.data();
          return {
            ...productData,
            id: doc.id,
            wholesalerName:
              wholesalersMap[productData.ownerId] || "Unknown Wholesaler",
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

  const handleAddToOrder = (product) => {
    setCurrentProduct(product);
    if (!quantities[product.id]) {
      setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
    }
    setShowModal(true);
  };

  const handleQuantityChange = (productId, value) => {
    const numValue = parseInt(value) || 1;
    const product = products.find((p) => p.id === productId);
    const maxQuantity = product?.totalquantity || 1;

    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, Math.min(numValue, maxQuantity)),
    }));
  };

  const handleSaveQuantity = () => {
    if (!currentProduct) return;
    setSavedQuantities((prev) => ({
      ...prev,
      [currentProduct.id]: quantities[currentProduct.id] || 1,
    }));
    setShowModal(false);
  };

  const handleAddToCart = (product) => {
    const quantity = savedQuantities[product.id] || 1;
    const totalPrice = quantity * product.unitprice;

    addItem({
      productId: product.id,
      productName: product.productname,
      quantity: quantity,
      totalPrice: totalPrice,
      wholesalerName: product.wholesalerName,
    });
  };

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
      {/* Quantity Selection Modal */}
      {showModal && currentProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">
              {currentProduct.productname}
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity (in {currentProduct.unit})
              </label>
              <input
                type="number"
                min="1"
                max={currentProduct.totalquantity}
                value={quantities[currentProduct.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(currentProduct.id, e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <p className="text-xs text-gray-500 mt-1">
                Available: {currentProduct.totalquantity}{" "}
                {currentProduct.productname}
              </p>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveQuantity}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save Quantity
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Display */}
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
              className="flex flex-col justify-center text-center mx-auto space-y-4"
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
                        <input type="text" placeholder="search anything" />

                        <span className="font-bold text-blue-600">
                          UGX{product.unitprice?.toFixed(2)} for one
                        </span>
                      </div>

                      <div className="mt-1 text-sm text-gray-500">
                        <p>Sold by: {product.wholesalerName}</p>
                      </div>

                      <div className="mt-2 text-sm text-gray-600 gap-y-4">
                        <p>
                          Available: {product.totalquantity}{" "}
                          {product.productname}
                        </p>
                        <p>Measured in {product.unit}</p>
                        <p className="truncate">{product.description}</p>
                      </div>

                      <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                        <span>
                          {product.category}
                          {product.subcategory && ` / ${product.subcategory}`}
                        </span>
                      </div>
                    </div>

                    <div className="border-t p-3 bg-gray-50 space-y-2">
                      {savedQuantities[product.id] > 0 && (
                        <div className="text-sm text-gray-700">
                          <p>
                            Quantity: {savedQuantities[product.id]}{" "}
                            {product.productname}
                          </p>
                          <p className="font-semibold">
                            Total: UGX
                            {(
                              savedQuantities[product.id] * product.unitprice
                            ).toFixed(2)}
                          </p>
                        </div>
                      )}

                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleAddToOrder(product)}
                          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                          {savedQuantities[product.id] > 0
                            ? "Change"
                            : "Add to Order"}
                        </button>

                        {savedQuantities[product.id] > 0 && (
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
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
