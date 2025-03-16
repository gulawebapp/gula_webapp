import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import group from "../images/group.webp";

const Services = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: `url(${group})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              <span className="block xl:inline">Our Comprehensive</span>{" "}
              <span className="block xl:inline">B2B Services</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                },
              }}
              className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Empowering businesses with innovative solutions and strategic
              partnerships for sustainable growth and success in the digital
              age.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.4 },
                },
              }}
              className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10"
                >
                  Learn more
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-black rounded-md p-3">
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
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-lg font-medium text-gray-900">
                        Business Consulting
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Strategic guidance and expert consultation to optimize
                        your business operations and drive growth.
                      </dd>
                    </div>
                  </div>
                  <div className="mt-5">
                    <a
                      href="#"
                      className="text-base font-medium text-black hover:text-gray-900"
                    >
                      Learn more{" "}
                      <ChevronRight className="inline-block w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Service Card 2 */}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-black rounded-md p-3">
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
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-lg font-medium text-gray-900">
                        Technology Solutions
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Custom software development and digital transformation
                        services to modernize your business.
                      </dd>
                    </div>
                  </div>
                  <div className="mt-5">
                    <a
                      href="#"
                      className="text-base font-medium text-black hover:text-gray-900"
                    >
                      Learn more{" "}
                      <ChevronRight className="inline-block w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Service Card 3 */}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-black rounded-md p-3">
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
                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-lg font-medium text-gray-900">
                        Marketing Services
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Comprehensive marketing strategies to enhance your brand
                        presence and reach target audiences.
                      </dd>
                    </div>
                  </div>
                  <div className="mt-5">
                    <a
                      href="#"
                      className="text-base font-medium text-black hover:text-gray-900"
                    >
                      Learn more{" "}
                      <ChevronRight className="inline-block w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Client Success Stories
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                },
              }}
              className="mt-4 text-xl text-gray-500"
            >
              See how we have helped businesses achieve their goals and drive
              success.
            </motion.p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="bg-gray-50 overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg"
                      alt="Sarah Johnson"
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500">
                        CEO, TechCorp Solutions
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Their business consulting services transformed our
                    operations and helped us achieve a 200% growth in revenue
                    within 18 months.
                  </p>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="bg-gray-50 overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg"
                      alt="Michael Chen"
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">Michael Chen</h4>
                      <p className="text-sm text-gray-500">CTO, InnovateNow</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    The technology solutions provided by the team have
                    significantly improved our efficiency and customer
                    satisfaction rates.
                  </p>
                </div>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                className="bg-gray-50 overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg"
                      alt="Emma Thompson"
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">Emma Thompson</h4>
                      <p className="text-sm text-gray-500">
                        Marketing Director, Global Reach
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Their marketing strategies helped us penetrate new markets
                    and establish a strong brand presence internationally.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                },
              }}
              className="mt-4 text-xl text-gray-500"
            >
              Contact us to discuss how we can help your business grow.
            </motion.p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <form action="#" method="POST" className="grid grid-cols-1 gap-6">
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
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
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
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
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
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                >
                  <option>Business Consulting</option>
                  <option>Technology Solutions</option>
                  <option>Marketing Services</option>
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
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                ></textarea>
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img src="/placeholder.svg" alt="Company logo" className="h-10" />
              <p className="text-gray-400 text-base">
                Empowering businesses with innovative solutions for sustainable
                growth.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Services
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white"
                      >
                        Business Consulting
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white"
                      >
                        Technology Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white"
                      >
                        Marketing Services
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Connect
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-300 hover:text-white"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 Tunda. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
