import { useState } from "react";
import Button from "../../common/button";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let tempErrors = { name: "", email: "", message: "" };
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

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log("Contact form is valid:", formData);
      // Here you would typically send the data to your backend
    } else {
      console.log("Contact form has errors");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-black uppercase tracking-wide mb-2">
            Contact Us
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Get in Touch
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-6">
            <img
              src="/placeholder.svg"
              alt="Contact Map"
              className="w-full h-48 object-cover mb-6"
            />
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-600">
                  123 Business Avenue, Tech City, TC 12345
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600">contact@tunda.com</span>
              </div>
            </div>
          </div>
          <form
            className="w-full md:w-1/2 bg-white rounded-lg shadow p-6"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full px-3 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <Button variant="thirdly" type="submit">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
