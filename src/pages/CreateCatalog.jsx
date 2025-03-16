import { useState } from "react";
import useProductStore from "../Store/ProductCatalog";

const CreateCatalog = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  const [success, setSuccess] = useState("");
  const addProduct = useProductStore((state) => state.addProduct);

  const validateForm = () => {
    let tempErrors = {
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image: "",
    };
    let isValid = true;

    // Name validation
    if (!product.name.trim()) {
      tempErrors.name = "Product name is required";
      isValid = false;
    }

    // Description validation
    if (!product.description.trim()) {
      tempErrors.description = "Description is required";
      isValid = false;
    } else if (product.description.length < 10) {
      tempErrors.description =
        "Description must be at least 10 characters long";
      isValid = false;
    } else if (product.description.length > 500) {
      tempErrors.description = "Description cannot exceed 500 characters";
      isValid = false;
    }

    // Price validation
    if (!product.price) {
      tempErrors.price = "Price is required";
      isValid = false;
    } else if (isNaN(product.price) || parseFloat(product.price) <= 0) {
      tempErrors.price = "Price must be a positive number";
      isValid = false;
    }

    // Category validation
    if (!product.category.trim()) {
      tempErrors.category = "Category is required";
      isValid = false;
    }

    // Stock validation
    if (!product.stock) {
      tempErrors.stock = "Stock is required";
      isValid = false;
    } else if (isNaN(product.stock) || parseInt(product.stock) < 0) {
      tempErrors.stock = "Stock must be a non-negative number";
      isValid = false;
    }

    // Image validation
    if (!product.image) {
      tempErrors.image = "Product image is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image: "",
    });
    setSuccess("");

    if (!validateForm()) {
      return;
    }

    try {
      const productWithId = { ...product, id: Date.now().toString() };
      addProduct(productWithId);

      setSuccess("Product added successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        image: null,
      });
    } catch (err) {
      setErrors({
        ...errors,
        general: `Failed to add product: ${err.message}`,
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl sm:w-xl">
        <h2 className="text-2xl font-bold mb-4">Create Product Catalog</h2>
        {errors.general && (
          <div className="mb-4 text-red-500">{errors.general}</div>
        )}
        {success && <div className="mb-4 text-green-500">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.price ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.category ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.stock ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.stock && (
              <p className="text-sm text-red-500">{errors.stock}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.image ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.image && (
              <p className="text-sm text-red-500">{errors.image}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCatalog;
