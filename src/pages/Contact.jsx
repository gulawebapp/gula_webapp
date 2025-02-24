import { countries } from "../components/countries";
import { industries } from "../components/industries";
import contact from "../images/contact.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Contact() {
  // Reusable animation logic with unique animations
  const AnimatedSection = ({ children, className, animationType }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    const animations = {
      fadeIn: {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      },
      slideInLeft: {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      },
      slideInRight: {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      },
      scaleUp: {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={animations[animationType]}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  AnimatedSection.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    animationType: PropTypes.oneOf([
      "fadeIn",
      "slideInLeft",
      "slideInRight",
      "scaleUp",
    ]).isRequired,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section - Fade In */}
        <AnimatedSection className="text-center mb-12" animationType="fadeIn">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </AnimatedSection>

        {/* Form and Quick Contact Section - Slide In Left and Right */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection animationType="slideInLeft">
            <div className="bg-white p-6 rounded-lg shadow">
              <form className="space-y-6">
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
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
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
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
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
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
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
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
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
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
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
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="attachment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Attachment
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-3 rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection className="space-y-6" animationType="slideInRight">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-gray-400"
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
                    className="h-5 w-5 mr-2 text-gray-400"
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
                  <span className="text-gray-600">contact@business.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Mon-Fri: 9:00 AM - 6:00 PM (EST)
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">
                Alternative Contact Methods
              </h3>
              <div className="space-y-4">
                <button className="w-full border border-black text-black p-2 rounded-md flex items-center justify-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Schedule Video Call
                </button>
                <button className="w-full border border-black text-black p-2 rounded-md flex items-center justify-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Start Live Chat
                </button>
                <button className="w-full border border-black text-black p-2 rounded-md flex items-center justify-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    />
                  </svg>
                  Connect on LinkedIn
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Contact Image - Scale Up */}
        <AnimatedSection className="mt-12" animationType="scaleUp">
          <img
            src={contact}
            alt="Contact Image"
            className="w-full h-96 object-cover rounded-lg"
          />
        </AnimatedSection>

        {/* FAQ Section - Fade In */}
        <AnimatedSection className="mt-12" animationType="fadeIn">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">
                What industries do you serve?
              </h3>
              <p className="text-gray-600">
                We provide solutions for various industries including
                technology, manufacturing, healthcare, and finance sectors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">
                How quickly can I expect a response?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 business hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">
                Do you offer custom solutions?
              </h3>
              <p className="text-gray-600">
                Yes, we specialize in creating tailored solutions to meet your
                specific business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">
                What support options are available?
              </h3>
              <p className="text-gray-600">
                We offer 24/7 technical support, dedicated account managers, and
                comprehensive documentation.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer - No Animation */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 Tunda. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
