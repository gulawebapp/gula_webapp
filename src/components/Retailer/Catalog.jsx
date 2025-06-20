import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../common/Loading";

const FetchData = async () => {
  const response = await axios.get("");
  return response.data;
};

export default function Catalog() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["wholesaler"],
    queryFn: FetchData,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error:{error.message}</div>;
  return (
    <div className="container mx-auto px-4 py-8">
      {!data ? (
        <div className="text-center py-12">
          <h1 className="text-2xl font-medium text-gray-600">
            No wholesaler products added yet
          </h1>
          <p className="mt-2 text-gray-500">Check back later</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Gallery */}
              <div className="relative h-48 bg-gray-100">
                {product.images && product.images.length > 0 ? (
                  <div className="flex h-full overflow-x-auto snap-x snap-mandatory">
                    {product.images.map((image, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-full h-full snap-start"
                      >
                        <img
                          src={image.url || image.preview} // Handle both URL strings and preview objects
                          alt={`${product.name} - ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/placeholder-product.jpg"; // Fallback image
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">No images available</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-lg text-gray-800">
                    {product.name}
                  </h3>
                  <span className="font-bold text-blue-600">
                    ${product.price?.toFixed(2)}
                  </span>
                </div>

                <div className="mt-2 text-sm text-gray-600">
                  <p>
                    {product.quantity} {product.quantityUnit}
                  </p>
                  <p className="truncate">{product.description}</p>
                </div>

                <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                  <span>
                    {product.category}
                    {product.subcategory && ` / ${product.subcategory}`}
                  </span>
                  {product.images && product.images.length > 1 && (
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      {product.images.length} photos
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
