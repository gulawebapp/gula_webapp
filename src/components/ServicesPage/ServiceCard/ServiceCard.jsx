import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const services = [
  {
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Business Consulting",
    description:
      "Strategic guidance and expert consultation to optimize your business operations and drive growth.",
    link: "#",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Business Consulting",
    description:
      "Strategic guidance and expert consultation to optimize your business operations and drive growth.",
    link: "#",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Business Consulting",
    description:
      "Strategic guidance and expert consultation to optimize your business operations and drive growth.",
    link: "#",
  },
  // Add more services here
];

const ServiceCard = () => {
  return (
    <>
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-black rounded-md p-3">
                {service.icon}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-lg font-medium text-gray-900">
                  {service.title}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {service.description}
                </dd>
              </div>
            </div>
            <div className="mt-5">
              <a
                href={service.link}
                className="text-base font-medium text-black hover:text-gray-900"
              >
                Learn more <ChevronRight className="inline-block w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ServiceCard;
