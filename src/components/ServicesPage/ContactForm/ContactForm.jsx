import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Select a business", // Changed to empty string as default
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const validateForm = () => {
    let tempErrors = { name: "", email: "", service: "", message: "" };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Service validation - now checks for empty string or default placeholder
    if (!formData.service || formData.service === "default") {
      tempErrors.service = "Please select a business service";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message should be at least 10 characters long";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      // You can add your form submission logic here
    } else {
      console.log("Form has errors");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto"
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <h1 className="flex justify-center items-center mx-auto text-2xl sm:text-4xl">
          Get in touch with Us
        </h1>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700"
          >
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.service ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm`}
          >
            <option value="Business Consulting">Business Consulting</option>
            <option value="Technology Solutions">Technology Solutions</option>
            <option value="Marketing Services">Marketing Services</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500">{errors.service}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            placeholder="Enter your message here"
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
