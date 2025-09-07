import PropTypes from "prop-types";
import { Truck, Headphones, Shield, RotateCcw } from "lucide-react";

const features = [
  {
    title: "Worldwide Shipping",
    description: "Delivery to 190+ countries",
    icon: Truck,
  },
  {
    title: "24/7 Support",
    description: "Round the clock assistance",
    icon: Headphones,
  },
  {
    title: "Secure Shopping",
    description: "100% secure payments",
    icon: Shield,
  },
  {
    title: "Easy Returns",
    description: "30-day money back",
    icon: RotateCcw,
  },
];

const Feature = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div className="flex items-start p-2 w-full">
      {/* Fixed icon container dimensions */}
      <div className="mr-3 w-10 h-10 flex items-center justify-center flex-shrink-0 bg-gray-50 rounded-lg">
        <Icon className="w-6 h-6 text-gray-700" aria-hidden="true" />
      </div>

      {/* Fixed content area with consistent spacing */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm md:text-base leading-tight mb-1 h-8 flex items-center">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm leading-tight h-6 flex items-center">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
};

const FeaturesSection = () => (
  <section className="py-8 w-full bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Fixed height for title to prevent shift */}
      <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          Our Features
        </h2>
      </div>

      {/* Container with aspect ratio to prevent layout shift */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-h-[100px] sm:min-h-[120px] flex items-center bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Feature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
