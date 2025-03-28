import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const products = [
  {
    title: "Summer Dress Collection",
    subtitle: "Starting from $29.99",
    image: "/summer-dress.jpg",
  },
  {
    title: "Luxury Handbags",
    subtitle: "Premium Collection",
    image: "/handbags.jpg",
  },
  {
    title: "Sports Footwear",
    subtitle: "New Arrivals",
    image: "/footwear.jpg",
  },
];

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Recommended Products</h2>
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="relative h-64 md:h-80">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p>{product.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
