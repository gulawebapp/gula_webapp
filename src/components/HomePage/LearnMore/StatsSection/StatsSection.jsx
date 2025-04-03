import { motion } from "framer-motion";
import StatsCard from "./StatsCard";
const stats = [
  {
    value: "10,000+",
    label: "Active Businesses",
  },
  {
    value: "85%",
    label: "Faster Order Processing",
  },
  {
    value: "4.8/5",
    label: "Average Rating",
  },
];

const StatsSection = ({ darkMode = false }) => {
  return (
    <section
      className={`py-16 ${darkMode ? "bg-purple-600 text-white" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <StatsCard {...stat} darkMode={darkMode} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
