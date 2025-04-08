import { useState } from "react";
import Button from "../../common/button";
import { countries } from "./countries";
import { industries } from "./industries";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    country: "",
    industry: "",
    message: "",
    attachment: null,
  });

  const [errors, setErrors] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    country: "",
    industry: "",
    message: "",
  });

  const validateForm = () => {
    let tempErrors = {
      company: "",
      contact: "",
      email: "",
      phone: "",
      country: "",
      industry: "",
      message: "",
    };
    let isValid = true;

    // Company validation
    if (!formData.company.trim()) {
      tempErrors.company = "Company name is required";
      isValid = false;
    }

    // Contact person validation
    if (!formData.contact.trim()) {
      tempErrors.contact = "Contact person is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Business email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation (basic check)
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (formData.phone.trim().length < 8) {
      tempErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Country validation
    if (!formData.country) {
      tempErrors.country = "Please select a country";
      isValid = false;
    }

    // Industry validation
    if (!formData.industry) {
      tempErrors.industry = "Please select an industry";
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
      // Add your form submission logic here
    } else {
      console.log("Form has errors");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.company ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-500">{errors.company}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Person
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Full name"
              value={formData.contact}
              onChange={handleChange}
              className={`mt-1 block w-full border ${
                errors.contact ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm p-2`}
            />
            {errors.contact && (
              <p className="mt-1 text-sm text-red-500">{errors.contact}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@company.com"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm p-2`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm p-2`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country/Region
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`mt-1 block w-full border ${
                errors.country ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm p-2`}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-500">{errors.country}</p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-gray-700"
          >
            Industry Sector
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.industry ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
          >
            <option value="">Select an industry</option>
            {industries.map((industry) => (
              <option
                key={industry}
                value={industry.toLowerCase().replace(/\s+/g, "_")}
              >
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
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
            id="message"
            name="message"
            rows={4}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="attachment"
            className="block text-sm font-medium text-gray-700"
          >
            Attachment
          </label>
          <div
            className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${
              errors.attachment ? "border-red-500" : "border-gray-300"
            } border-dashed rounded-md`}
          >
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
              {formData.attachment && (
                <p className="text-sm text-gray-600">
                  Selected file: {formData.attachment.name}
                </p>
              )}
              {errors.attachment && (
                <p className="mt-1 text-sm text-red-500">{errors.attachment}</p>
              )}
            </div>
          </div>
        </div>
        <Button variant="thirdly" type="submit">
          <p>send message</p>
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
