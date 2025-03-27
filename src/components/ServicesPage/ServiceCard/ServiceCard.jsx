import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white overflow-hidden shadow rounded-lg"
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-black rounded-md p-3">{icon}</div>
          <div className="ml-5 w-0 flex-1">
            <dt className="text-lg font-medium text-gray-900">{title}</dt>
            <dd className="mt-2 text-base text-gray-500">{description}</dd>
          </div>
        </div>
        <div className="mt-5">
          <a
            href={link}
            className="text-base font-medium text-black hover:text-gray-900"
          >
            Learn more <ChevronRight className="inline-block w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;