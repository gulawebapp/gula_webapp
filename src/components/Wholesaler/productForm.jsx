import { useState } from "react";
import Button from "../common/button";
import categories from "./Categories";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const quantityUnits = [
  { value: "in", label: "Select unit" },
  { value: "pcs", label: "Pieces" },
  { value: "kg", label: "Kilograms" },
  { value: "g", label: "Grams" },
  { value: "l", label: "Liters" },
  { value: "ml", label: "Milliliters" },
  { value: "box", label: "Boxes" },
  { value: "pack", label: "Packs" },
  { value: "custom", label: "Custom unit..." },
];

export default function ProductForm({ onCancel }) {
  const queryClient = useQueryClient();

  // State to manage form data
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    subcategory: "",
    quantity: "",
    quantityUnit: "in",
    customCategory: "",
    customSubcategory: "",
    images: [],
  });

  // State for custom unit
  const [showCustomUnit, setShowCustomUnit] = useState(false);
  const [customUnit, setCustomUnit] = useState("");

  // Add form data to database
  const addData = async (formData) => {
    const response = await axios.post("", formData);
    return response.data;
  };

  // Mutation to add data to form
  const { mutate } = useMutation({
    mutationFn: addData,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
    onError: (error) => {
      console.log("Error submitting form", error);
    },
  });

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    quantityUnit: "",
    category: "",
    subcategory: "",
    customCategory: "",
    customSubcategory: "",
    images: "",
  });

  const [availableSubcategories, setAvailableSubcategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let tempErrors = {
      name: "",
      price: "",
      description: "",
      quantity: "",
      quantityUnit: "",
      category: "",
      subcategory: "",
      customCategory: "",
      customSubcategory: "",
      images: "",
    };
    let isValid = true;

    // Name validation
    if (!product.name.trim()) {
      tempErrors.name = "Product name is required";
      isValid = false;
    } else if (product.name.trim().length < 3) {
      tempErrors.name = "Product name must be at least 3 characters";
      isValid = false;
    }

    // Price validation
    if (!product.price) {
      tempErrors.price = "Price is required";
      isValid = false;
    } else if (isNaN(product.price)) {
      tempErrors.price = "Price must be a number";
      isValid = false;
    } else if (parseFloat(product.price) <= 0) {
      tempErrors.price = "Price must be greater than 0";
      isValid = false;
    }

    // Description validation
    if (product.description.length > 500 || product.description.length === 0) {
      tempErrors.description = "Description must be less than 500 characters";
      isValid = false;
    }

    // Quantity validation
    if (!product.quantity) {
      tempErrors.quantity = "Quantity is required";
      isValid = false;
    } else if (isNaN(product.quantity)) {
      tempErrors.quantity = "Quantity must be a number";
      isValid = false;
    } else if (parseInt(product.quantity) <= 0) {
      tempErrors.quantity = "Quantity must be greater than 0";
      isValid = false;
    }

    // Quantity unit validation
    if (!product.quantityUnit || (showCustomUnit && !customUnit)) {
      tempErrors.quantityUnit = "Please select or enter a unit";
      isValid = false;
    }

    // Category validation
    if (!product.category) {
      tempErrors.category = "Category is required";
      isValid = false;
    } else if (product.category === "Other" && !product.customCategory.trim()) {
      tempErrors.customCategory = "Custom category is required";
      isValid = false;
    }

    // Subcategory validation
    if (
      product.category &&
      product.category !== "Other" &&
      !product.subcategory
    ) {
      tempErrors.subcategory = "Subcategory is required";
      isValid = false;
    } else if (
      product.subcategory === "Other" &&
      !product.customSubcategory.trim()
    ) {
      tempErrors.customSubcategory = "Custom subcategory is required";
      isValid = false;
    } else if (
      product.category === "Other" &&
      !product.customSubcategory.trim()
    ) {
      tempErrors.customSubcategory = "Custom subcategory is required";
      isValid = false;
    }

    if (product.images.length === 0) {
      tempErrors.images = "At least one product image is recommended";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If custom unit was selected but not filled
    if (showCustomUnit && !customUnit) {
      setErrors((prev) => ({
        ...prev,
        quantityUnit: "Please enter a custom unit",
      }));
      return;
    }

    if (validateForm()) {
      setIsSubmitting(true);

      const finalCategory =
        product.category === "Other"
          ? product.customCategory
          : product.category;
      const finalSubcategory =
        product.subcategory === "Other"
          ? product.customSubcategory
          : product.subcategory;
      const finalQuantityUnit = showCustomUnit
        ? customUnit
        : product.quantityUnit;

      mutate(
        {
          ...product,
          category: finalCategory,
          subcategory: finalSubcategory,
          quantityUnit: finalQuantityUnit,
        },
        {
          onSettled: () => {
            setIsSubmitting(false);
            onCancel();
          },
        }
      );
    } else {
      console.log("Form has errors");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "quantityUnit") {
      if (value === "custom") {
        setShowCustomUnit(true);
        setProduct((prev) => ({ ...prev, quantityUnit: "" }));
      } else {
        setShowCustomUnit(false);
        setCustomUnit("");
        setProduct((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (name === "category") {
      setAvailableSubcategories(categories[value] || []);
      setProduct((prev) => ({
        ...prev,
        subcategory: "",
        customSubcategory: "",
        quantity: `${product.quantity} ${product.quantityUnit}`,
      }));
    }
  };

  const handleCustomUnitChange = (e) => {
    const { value } = e.target;
    setCustomUnit(value);
    setProduct((prev) => ({ ...prev, quantityUnit: value }));

    if (errors.quantityUnit) {
      setErrors((prev) => ({ ...prev, quantityUnit: "" }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + product.images.length > 3) {
      setErrors((prev) => ({
        ...prev,
        images: "You can upload a maximum of 3 images",
      }));
      return;
    }

    const validFiles = [];
    const invalidFiles = [];

    files.forEach((file) => {
      // Validate image type
      if (!file.type.match("image.*")) {
        invalidFiles.push(file.name);
        return;
      }

      // Validate image size (e.g., 5MB max)
      if (file.size > 5 * 1024 * 1024) {
        invalidFiles.push(file.name);
        return;
      }

      validFiles.push(file);
    });

    if (invalidFiles.length > 0) {
      setErrors((prev) => ({
        ...prev,
        images: `Some files are invalid (${invalidFiles.join(
          ", "
        )}. Please upload image files (JPEG, PNG, GIF) less than 5MB.`,
      }));
    }

    if (validFiles.length > 0) {
      const newImages = validFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      setProduct((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));

      setErrors((prev) => ({ ...prev, images: "" }));
    }
  };

  const removeImage = (index) => {
    setProduct((prev) => {
      const newImages = [...prev.images];
      // Revoke the object URL to prevent memory leaks
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return { ...prev, images: newImages };
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Add New Product</h2>
      <p className="text-gray-600 mb-6">
        Fill in the details below to add a new product to your inventory
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6 mb-8">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
              placeholder="e.g. Wireless Headphones"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Price and Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unit Price ($) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className={`w-full pl-8 pr-4 py-2.5 border ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                />
              </div>
              {errors.price && (
                <p className="mt-1 text-sm text-red-500">{errors.price}</p>
              )}
            </div>

            {/* Quantity field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Quantity <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col gap-2">
                <div className="flex">
                  <input
                    type="number"
                    name="quantity"
                    value={product.quantity}
                    onChange={handleChange}
                    className={`w-2/3 px-4 py-2.5 border ${
                      errors.quantity ? "border-red-500" : "border-gray-300"
                    } rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                    placeholder="0"
                    min="0"
                  />
                  <select
                    name="quantityUnit"
                    value={showCustomUnit ? "custom" : product.quantityUnit}
                    onChange={handleChange}
                    className={`w-1/3 px-2 py-2.5 border-t border-b border-r ${
                      errors.quantityUnit ? "border-red-500" : "border-gray-300"
                    } rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none`}
                  >
                    {quantityUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label}
                      </option>
                    ))}
                  </select>
                </div>

                {showCustomUnit && (
                  <div>
                    <input
                      type="text"
                      value={customUnit}
                      onChange={handleCustomUnitChange}
                      className={`w-full px-4 py-2.5 border ${
                        errors.quantityUnit
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                      placeholder="Enter custom unit (e.g., bottles, bags)"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter the unit of measurement for this product
                    </p>
                  </div>
                )}

                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-500">{errors.quantity}</p>
                )}
                {errors.quantityUnit && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.quantityUnit}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Images{" "}
              {product.images.length > 0 && `(${product.images.length}/3)`}
            </label>
            <div className="flex flex-col gap-4">
              {/* Image previews */}
              {product.images.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-32 h-32 object-cover rounded border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        aria-label="Remove image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Upload area */}
              {product.images.length < 3 && (
                <label className="cursor-pointer w-full">
                  <div
                    className={`flex items-center justify-center px-4 py-10 border-2 border-dashed ${
                      errors.images ? "border-red-500" : "border-gray-300"
                    } rounded-lg hover:border-blue-500 transition-colors w-full`}
                  >
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600">
                        Click to upload{" "}
                        {product.images.length === 0
                          ? "images"
                          : "another image"}
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF (Max 3 images, 5MB each)
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      multiple
                    />
                  </div>
                </label>
              )}
            </div>
            {errors.images && (
              <p className="mt-1 text-sm text-red-500">{errors.images}</p>
            )}
          </div>

          {/* Category Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border ${
                errors.category ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjQ3NTU2NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.25rem_1.25rem]`}
            >
              <option value="">Select a category</option>
              {Object.keys(categories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-500">{errors.category}</p>
            )}

            {product.category === "Other" && (
              <div className="mt-2">
                <input
                  type="text"
                  name="customCategory"
                  value={product.customCategory}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border ${
                    errors.customCategory ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                  placeholder="Enter custom category"
                />
                {errors.customCategory && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.customCategory}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Subcategory Selection */}
          {product.category && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subcategory <span className="text-red-500">*</span>
              </label>

              {product.category !== "Other" ? (
                <>
                  <select
                    name="subcategory"
                    value={product.subcategory}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.subcategory ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjQ3NTU2NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.25rem_1.25rem]`}
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
                  {errors.subcategory && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subcategory}
                    </p>
                  )}

                  {product.subcategory === "Other" && (
                    <div className="mt-2">
                      <input
                        type="text"
                        name="customSubcategory"
                        value={product.customSubcategory}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border ${
                          errors.customSubcategory
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                        placeholder="Enter custom subcategory"
                      />
                      {errors.customSubcategory && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.customSubcategory}
                        </p>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <input
                    type="text"
                    name="customSubcategory"
                    value={product.customSubcategory}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.customSubcategory
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                    placeholder="Enter custom subcategory"
                  />
                  {errors.customSubcategory && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.customSubcategory}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
              rows="4"
              placeholder="Provide detailed information about the product..."
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
            <p className="text-xs text-gray-500 mt-1 text-right">
              {product.description.length}/500 characters
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Adding...
              </>
            ) : (
              "Add Product"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
