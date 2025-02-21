import { motion } from "framer-motion";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/api/placeholder/128/128",
    },
    {
      name: "Sarah Johnson",
      role: "Operations Director",
      image: "/api/placeholder/128/128",
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      image: "/api/placeholder/128/128",
    },
    {
      name: "Emily Davis",
      role: "Marketing Manager",
      image: "/api/placeholder/128/128",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const memberVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
        >
          Our Team
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={memberVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center transform transition-shadow hover:shadow-xl"
            >
              <motion.div
                whileHover="hover"
                className="relative inline-block mb-4"
              >
                <motion.img
                  variants={imageVariants}
                  src={member.image}
                  alt={member.name}
                  className="mx-auto rounded-full w-32 h-32 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-10 rounded-full"
                />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-semibold text-lg sm:text-xl mb-2"
              >
                {member.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-sm sm:text-base"
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
