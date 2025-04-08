import { useState } from "react";
import Button from "../common/button";
import categories from "./Categories";

export default function ProductForm({ onCancel }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    subcategory: "",
    quantity: "",
    customCategory: "",
    customSubcategory: "",
    image: null,
    imagePreview: "",
  });

  const [availableSubcategories, setAvailableSubcategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use custom values if "Other" was selected, otherwise use dropdown selections
    const finalCategory =
      product.category === "Other" ? product.customCategory : product.category;
    const finalSubcategory =
      product.subcategory === "Other"
        ? product.customSubcategory
        : product.subcategory;

    onCancel();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));

    if (name === "category") {
      setAvailableSubcategories(categories[value] || []);
      setProduct((prev) => ({
        ...prev,
        subcategory: "",
        customSubcategory: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Price and Quantity */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Image
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
              {product.imagePreview && (
                <div className="w-16 h-16 rounded overflow-hidden border">
                  <img
                    src={product.imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Category Selection */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required={!product.customCategory}
            >
              <option value="">Select a category</option>
              {Object.keys(categories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>

            {product.category === "Other" && (
              <div className="mt-2">
                <input
                  type="text"
                  name="customCategory"
                  value={product.customCategory}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Please specify your category"
                  required
                />
              </div>
            )}
          </div>

          {/* Subcategory Selection */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Subcategory
            </label>
            {product.category && product.category !== "Other" && (
              <>
                <select
                  name="subcategory"
                  value={product.subcategory}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required={!product.customSubcategory}
                  disabled={!product.category}
                >
                  <option value="">Select a subcategory</option>
                  {availableSubcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>

                {product.subcategory === "Other" && (
                  <div className="mt-2">
                    <input
                      type="text"
                      name="customSubcategory"
                      value={product.customSubcategory}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      placeholder="Please specify your subcategory"
                      required
                    />
                  </div>
                )}
              </>
            )}

            {product.category === "Other" && (
              <div className="mt-2">
                <input
                  type="text"
                  name="customSubcategory"
                  value={product.customSubcategory}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Please specify your subcategory"
                  required
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </div>
  );
}
