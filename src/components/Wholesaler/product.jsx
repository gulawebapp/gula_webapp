import Button from "../common/button";
import Loading from "../common/Loading";
import { useState, useEffect } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../../firebase";

export default function ProductPage({ onCreateProductClick }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [formError, setFormError] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [EditFormData, setEditFormData] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    category: "",
    subcategory: "",
    quantity: "",
  });

  const getProductList = async () => {
    try {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) {
        setError("User not authenticated");
      }

      const q = query(
        collection(db, "products"),
        where("ownerId", "==", user.uid)
      );
      const querysnapshot = await getDocs(q);
      const filteredData = querysnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(filteredData);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        getProductList();
      }
    });
    return () => unsubscribe();
  }, []);

  function EditOpenModal(product) {
    setEditFormData({
      id: product.id,
      name: product.productname,
      price: product.unitprice,
      description: product.description,
      category: product.category,
      subcategory: product.subcategory,
      quantity: product.totalquantity,
    });
    setIsEditModalOpen(true);
    setFormError(null);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
    setEditFormData({
      id: "",
      name: "",
      price: "",
      description: "",
      category: "",
      subcategory: "",
      quantity: "",
    });
    setFormError(null);
  }

  function handleFormEditChange(e) {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  }

  const updateProduct = async (productId, updatedData) => {
    try {
      setLoading(true);
      const productDoc = doc(db, "products", productId);
      await updateDoc(productDoc, updatedData);
      await getProductList();
      closeEditModal();
    } catch (err) {
      console.error(err);
      setFormError("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  function handleEditSubmit(e) {
    e.preventDefault();

    if (!EditFormData.name || !EditFormData.price) {
      setFormError("Name and price are required fields");
      return;
    }
    const productData = {
      productname: EditFormData.name,
      unitprice: EditFormData.price,
      description: EditFormData.description,
      category: EditFormData.category,
      subcategory: EditFormData.subcategory,
      totalquantity: EditFormData.quantity,
    };
    updateProduct(EditFormData.id, productData);
  }

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    getProductList();
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="text-red-600 text-lg sm:text-xl md:text-2xl text-center">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Your Products
        </h1>
      </div>

      {/* Edit Product Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeEditModal}
          ></div>

          {/* Modal container */}
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            {/* Modal content */}
            <div
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-sm sm:max-w-md lg:max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-b">
                <h3 className="text-lg font-medium text-gray-900">
                  Edit Product
                </h3>
                <button
                  onClick={closeEditModal}
                  className="text-gray-400 hover:text-gray-500 text-xl"
                >
                  <span className="sr-only">Close</span>
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 sm:p-6">
                <form onSubmit={handleEditSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={EditFormData.name}
                      onChange={handleFormEditChange}
                      className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={EditFormData.price}
                      onChange={handleFormEditChange}
                      className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={EditFormData.description}
                      onChange={handleFormEditChange}
                      className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows="3"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <input
                        type="text"
                        name="category"
                        value={EditFormData.category}
                        onChange={handleFormEditChange}
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subcategory
                      </label>
                      <input
                        type="text"
                        name="subcategory"
                        value={EditFormData.subcategory}
                        onChange={handleFormEditChange}
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={EditFormData.quantity}
                      onChange={handleFormEditChange}
                      className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="0"
                    />
                  </div>

                  {/* Error message */}
                  {formError && (
                    <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md">
                      {formError}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={closeEditModal}
                      disabled={loading}
                      className="w-full sm:w-auto"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={loading}
                      className="w-full sm:w-auto"
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products List */}
      {products.length === 0 ? (
        <div className="text-center py-12 px-4">
          <h2 className="text-lg sm:text-xl font-medium text-gray-600 mb-2">
            No Products Found
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-4">
            You haven't added any products yet.
          </p>
          <Button onClick={onCreateProductClick} className="w-full sm:w-auto">
            Add Your First Product
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-black shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4 sm:p-5">
                {/* Product Header */}
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-900 line-clamp-2">
                    {product.productname}
                  </h3>
                  <p className="text-blue-600 font-bold text-lg sm:text-xl">
                    UGX {product.unitprice}
                  </p>
                </div>

                {/* Product Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 mb-4">
                  <div className="text-xs sm:text-sm bg-gray-100 px-3 py-2 rounded-md">
                    <p className="font-medium text-gray-700">Category:</p>
                    <p className="text-gray-600 truncate">{product.category}</p>
                  </div>
                  <div className="text-xs sm:text-sm bg-gray-100 px-3 py-2 rounded-md">
                    <p className="font-medium text-gray-700">Subcategory:</p>
                    <p className="text-gray-600 truncate">
                      {product.subcategory}
                    </p>
                  </div>
                </div>

                {/* Quantity Info */}
                <div className="text-xs sm:text-sm bg-blue-50 px-3 py-2 rounded-md mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">
                      Total Qty:
                    </span>
                    <span className="text-gray-600">
                      {product.totalquantity}
                    </span>
                  </div>
                  {product.unit && (
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-medium text-gray-700">Unit:</span>
                      <span className="text-gray-600">{product.unit}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {product.description && (
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Description:
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="border-t bg-gray-50 p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    variant="primary"
                    onClick={() => EditOpenModal(product)}
                    className="flex-1 text-sm"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this product?"
                        )
                      ) {
                        deleteProduct(product.id);
                      }
                    }}
                    className="flex-1 text-sm bg-red-50 text-red-600 hover:bg-red-100 border-red-200"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
