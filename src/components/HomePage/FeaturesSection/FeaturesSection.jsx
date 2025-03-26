import PropTypes from "prop-types";

const features = [
  {
    title: "Worldwide Shipping",
    description: "Delivery to 190+ countries",
    icon: "https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/external-worldwide-shipping-ecommerce-vitaliy-gorbachev-fill-vitaly-gorbachev.png",
  },
  {
    title: "24/7 Support",
    description: "Round the clock assistance",
    icon: "https://img.icons8.com/external-prettycons-solid-prettycons/60/external-support-communications-prettycons-solid-prettycons-1.png",
  },
  {
    title: "Secure Shopping",
    description: "100% secure payments",
    icon: "https://img.icons8.com/ios-filled/50/keyhole-shield.png",
  },
  {
    title: "Easy Returns",
    description: "30-day money back",
    icon: "https://img.icons8.com/external-victoruler-outline-victoruler/64/external-return-box-logistics-victoruler-outline-victoruler.png",
  },
];

const Feature = ({ feature }) => (
  <div className="flex items-center">
    <div className="mr-4">
      <img
        src={feature.icon}
        alt={feature.title}
        className="w-[50px] h-[50px]"
        loading="lazy"
        width="50"
        height="50"
      />
    </div>
    <div>
      <h3 className="font-semibold">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  </div>
);

Feature.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

const FeaturesSection = () => (
  <section className="py-16 sm:py-20 bg-gray-50">
 <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
    Our Features
  </h2>
  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <Feature key={index} feature={feature} />
      ))}
    </div>
  </div>
</div>
  </section>
);

export default FeaturesSection;