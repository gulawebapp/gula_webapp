import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const ValueProposition = () => {
  const features = [
    {
      title: "Streamlined Ordering",
      description:
        "Place bulk orders with just a few clicks, saving you hours of manual work.",
      icon: "📦",
    },
    {
      title: "Real-Time Inventory",
      description:
        "See up-to-date stock levels from all your suppliers in one dashboard.",
      icon: "📊",
    },
    {
      title: "Competitive Pricing",
      description:
        "Compare prices across multiple wholesalers to get the best deals.",
      icon: "💰",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Our Platform Stands Out
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've built a specialized solution addressing the unique needs of
            B2B transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
