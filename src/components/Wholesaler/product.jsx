import Button from "../common/button";
// import axios from "axios";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../common/Loading";
import { useState, useEffect } from "react";
// import Catalog from "../Retailer/Catalog";
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
  // const queryClient = useQueryClient();
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
    // images: [],
  });
  //firebase function for fetching data
  // const productCollection = collection(db, "products");

  const getProductList = async () => {
    try {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) {
        setError("User not authenticated");
      }

      //query products only where the id is fo rthe user
      const q = query(
        collection(db, "products"),
        where("ownerId", "==", user.uid)
      );
      // const data = await getDocs(productCollection);
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

  // const [imageError, setImageError] = useState(null);

  // Clean up object URLs when component unmounts
  // useEffect(() => {
  //   return () => {
  //     EditFormData.images.forEach((img) => {
  //       if (img.preview) URL.revokeObjectURL(img.preview);
  //     });
  //   };
  // }, [EditFormData.images]);

  //fetch data from database
  // const fetchData = async () => {
  //   const response = await axios.get("");
  //   return response.data;
  // };

  //delete card function
  // const deleteData = async (id) => {
  //   const response = await axios.delete(`/${id}`);
  //   return response.data;
  // };

  //edit card function with file upload support
  // const editData = async (formData) => {
  //   const data = new FormData();

  //   // Append all fields
  //   Object.keys(formData).forEach((key) => {
  //     if (key !== "images") {
  //       data.append(key, formData[key]);
  //     }
  //   });

  //   // Handle image files
  //   formData.images.forEach((img, index) => {
  //     if (img.file) {
  //       data.append(`images`, img.file);
  //     } else if (typeof img === "string") {
  //       data.append(`images[${index}]`, img);
  //     }
  //   });

  //   const response = await axios.put(`/${formData.id}`, data, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  //   return response.data;
  // };

  //query function for fetching data from database
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchData,
  // });

  //edit mutation
  // const { mutate: editProduct, isLoading: isEditing } = useMutation({
  //   mutationFn: editData,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["products"]);
  //     closeEditModal();
  //   },
  //   onError: (error) => {
  //     setFormError(
  //       error.message || "Failed to update product. Please try again."
  //     );
  //   },
  // });

  //delete mutation
  // const { mutate: deleteProduct } = useMutation({
  //   mutationFn: deleteData,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["products"]);
  //   },
  // });

  //open edit modal with product details
  function EditOpenModal(product) {
    // Convert product.images to array format if it's a string
    // const images = Array.isArray(product.images)
    //   ? product.images
    //   : product.image
    //   ? [product.image]
    //   : [];

    setEditFormData({
      id: product.id,
      name: product.productname,
      price: product.unitprice,
      description: product.description,
      category: product.category,
      subcategory: product.subcategory,
      quantity: product.totalquantity,
      // images: images.map((img) =>
      //   typeof img === "string" ? img : { preview: URL.createObjectURL(img) }
      // ),
    });
    setIsEditModalOpen(true);
    // setImageError(null);
    setFormError(null);
  }

  //close edit modal
  function closeEditModal() {
    // Clean up object URLs
    // EditFormData.images.forEach((img) => {
    //   if (img.preview) URL.revokeObjectURL(img.preview);
    // });

    setIsEditModalOpen(false);
    setEditFormData({
      id: "",
      name: "",
      price: "",
      description: "",
      category: "",
      subcategory: "",
      quantity: "",
      // images: [],
    });
    setFormError(null);
    // setImageError(null);
  }

  //handle form input changes
  function handleFormEditChange(e) {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  }

  //handle image upload
  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   // Clear previous errors
  //   setImageError(null);

  //   if (files.length + EditFormData.images.length > 3) {
  //     setImageError("You can upload a maximum of 3 images");
  //     return;
  //   }

  //   const validFiles = [];
  //   const invalidFiles = [];

  //   files.forEach((file) => {
  //     // Validate image type
  //     if (!file.type.match("image.*")) {
  //       invalidFiles.push(file.name);
  //       return;
  //     }

  //     // Validate image size (5MB max)
  //     if (file.size > 5 * 1024 * 1024) {
  //       invalidFiles.push(file.name);
  //       return;
  //     }

  //     validFiles.push(file);
  //   });

  //   if (invalidFiles.length > 0) {
  //     setImageError(
  //       `The following files are invalid: ${invalidFiles.join(", ")}. ` +
  //         "Please upload image files (JPEG, PNG, GIF) under 5MB."
  //     );
  //   }

  //   if (validFiles.length > 0) {
  //     const newImages = validFiles.map((file) => ({
  //       file,
  //       preview: URL.createObjectURL(file),
  //     }));

  //     setEditFormData((prev) => ({
  //       ...prev,
  //       images: [...prev.images, ...newImages],
  //     }));
  //   }
  // };

  //remove image
  // const removeImage = (index) => {
  //   setImageError(null);
  //   setEditFormData((prev) => {
  //     const newImages = [...prev.images];
  //     if (newImages[index].preview) {
  //       URL.revokeObjectURL(newImages[index].preview);
  //     }
  //     newImages.splice(index, 1);
  //     return { ...prev, images: newImages };
  //   });
  // };

  //update function
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

  //handle edit submit
  function handleEditSubmit(e) {
    e.preventDefault();
    // if (EditFormData.images.length === 0) {
    //   setImageError("At least one image is required");
    //   return;
    // }

    // Basic validation
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
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>error:{error}</p>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-black text-3xl sm:text-5xl">
          Error: {error.message}
        </div>
      </div>
    );
  }

  //handle delete button click
  function removeProduct(id) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Products</h1>
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
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-b">
                <h3 className="text-lg font-medium text-gray-900">
                  Edit Product
                </h3>
                <button
                  onClick={closeEditModal}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  &times;
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4">
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
                      className="w-full p-2 border rounded"
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
                      className="w-full p-2 border rounded"
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
                      className="w-full p-2 border rounded"
                      rows="3"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <input
                        type="text"
                        name="category"
                        value={EditFormData.category}
                        onChange={handleFormEditChange}
                        className="w-full p-2 border rounded"
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
                        className="w-full p-2 border rounded"
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
                      className="w-full p-2 border rounded"
                      min="0"
                    />
                  </div>

                  {/*  Image Upload Section */}
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Images{" "}
                      {EditFormData.images.length > 0 &&
                        `(${EditFormData.images.length}/3)`}
                    </label> */}

                  {/* Error message */}
                  {/* {imageError && (
                      <p className="text-sm text-red-500 mb-2">{imageError}</p>
                    )} */}

                  {/* Image previews */}
                  {/* {EditFormData.images.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {EditFormData.images.map((img, index) => (
                          <div key={index} className="relative">
                            <img
                              src={img.preview || img}
                              alt={`Preview ${index + 1}`}
                              className="h-20 w-20 object-cover rounded border"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )} */}

                  {/* Upload new images */}
                  {/* {EditFormData.images.length < 3 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {EditFormData.images.length === 0
                            ? "Add images"
                            : "Add more images"}
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageChange}
                          className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Supported formats: JPEG, PNG, GIF (Max 5MB each)
                        </p>
                      </div>
                    )} */}
                  {/* </div> */}

                  <div className="flex justify-end space-x-3 pt-4">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={closeEditModal}
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" disabled={loading}>
                      {loading ? "Saving..." : "Save Changes"}
                    </Button>

                    {formError && (
                      <div className="text-red-500 text-sm mt-2">
                        {formError}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products List */}
      {products.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-600 mb-2">
            No Products Found
          </h2>
          <p className="text-gray-500 mb-4">
            You haven't added any products yet.
          </p>
          <Button onClick={onCreateProductClick}>Add Your First Product</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border shadow-2xl rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Product Image Section */}
              {/* <div className="relative h-48 bg-gray-100">
                {product.images && product.images.length > 0 ? (
                  <div className="flex h-full overflow-x-auto snap-x snap-mandatory">
                    {product.images.map((image, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-full h-full snap-start"
                      >
                        <img
                          src={image.url || image.preview}
                          alt={`${product.name} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">No images available</span>
                  </div>
                )}
              </div> */}

              <div className="p-4">
                <div className="flex justify-center text-center gap-x-5">
                  <h3 className="font-semibold text-lg mb-2">
                    Product:{product.productname}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Price per each UGX{product.unitprice}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col text-sm bg-gray-100 px-2 py-1 rounded">
                    <p>Category:</p>
                    <p>{product.category}</p>
                  </div>
                  <div className="flex flex-col text-sm bg-gray-100 px-2 py-1 rounded">
                    <p>Subcategory:</p>
                    <p>{product.subcategory}</p>
                  </div>
                  <div className="flex flex-col text-sm bg-gray-100 px-2 py-1 rounded">
                    <p>Total Qty: {product.totalquantity}</p>
                    <p>Unit Qty: {product.unit}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center text-center text-sm text-gray-500 mb-4">
                  <p>Product message: </p>
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="border-t p-3 bg-gray-50 flex justify-end gap-2">
                <Button
                  variant="primary"
                  onClick={() => EditOpenModal(product)}
                >
                  Edit
                </Button>
                <Button
                  variant="primary"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
