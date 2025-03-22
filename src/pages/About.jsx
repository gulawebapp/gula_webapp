import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import happyteam from "../images/happyteam.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../components/button";

export default function About() {
  const services = [
    {
      title: "Strategic Growth",
      description:
        "Develop comprehensive strategies tailored to your business objectives and market position.",
      icon: "https://img.icons8.com/pulsar-line/48/growth-and-flag.png",
      alt: "growth-and-flag",
    },
    {
      title: "Expert Consultation",
      description:
        "Access our network of industry experts for personalized guidance and solutions.",
      icon: "https://img.icons8.com/ios-glyphs/30/conference-call--v1.png",
      alt: "conference-call--v1",
    },
    {
      title: "Innovation Focus",
      description:
        "Stay ahead with cutting-edge solutions and innovative business approaches.",
      icon: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/50/external-rocket-startups-tanah-basah-glyph-tanah-basah.png",
      alt: "external-rocket-startups-tanah-basah-glyph-tanah-basah",
    },
  ];
  const businessData = [
    { year: "2019", revenue: 3000, profit: 1400 },
    { year: "2020", revenue: 4500, profit: 2000 },
    { year: "2021", revenue: 5200, profit: 2400 },
    { year: "2022", revenue: 6800, profit: 3100 },
    { year: "2023", revenue: 8500, profit: 3800 },
  ];

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
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section - Fade In */}
      <div
        className="relative bg-cover bg-center py-12 md:py-24 min-h-[400px]"
        style={{
          backgroundImage: `url(${happyteam})`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              <span className="block">Transform Your</span>
              <span className="block text-blue-300">Business Future</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Leading the way in innovative business solutions since 2010. We
              help companies navigate digital transformation and achieve
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission Section - Slide In Left */}
      <AnimatedSection
        className="bg-white py-16 md:py-24"
        animationType="slideInLeft"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-black uppercase tracking-wide mb-2">
              Our Mission
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Empowering Business Growth
            </p>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              We are dedicated to providing innovative solutions that help
              businesses thrive in the digital age. Our approach combines
              industry expertise with cutting-edge technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 pt-16 relative"
              >
                <div className="absolute -top-8 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.alt}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Impact Section - Slide In Right */}
      <AnimatedSection
        className="bg-gray-50 py-16 md:py-24"
        animationType="slideInRight"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-black uppercase tracking-wide mb-2">
              Our Impact
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Business Statistics
            </p>
          </div>
          <div className="w-full h-64 md:h-96 bg-white rounded-lg shadow p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={businessData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                <Bar dataKey="profit" fill="#82ca9d" name="Profit" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section - Scale Up */}
      <AnimatedSection
        className="bg-white py-16 md:py-24"
        animationType="scaleUp"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-black uppercase tracking-wide mb-2">
              Testimonials
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
              What Our Clients Say
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, Tech Solutions Inc",
                image: "/placeholder.svg",
              },
              {
                name: "Michael Chen",
                role: "Director, Global Innovations",
                image: "/placeholder.svg",
              },
              {
                name: "Amanda Rodriguez",
                role: "COO, Future Enterprises",
                image: "/placeholder.svg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Their{" "}
                  {index === 0
                    ? "strategic insights transformed our business operations and helped us achieve unprecedented growth"
                    : index === 1
                    ? "expertise and dedication to our success made them an invaluable partner in our growth journey"
                    : "innovative solutions and strategic approach helped us navigate complex challenges effectively"}
                  .
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Us Section - Fade In */}
      <AnimatedSection
        className="bg-gray-50 py-16 md:py-24"
        animationType="fadeIn"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <form className="w-full md:w-1/2 bg-white rounded-lg shadow p-6">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                />
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                />
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                ></textarea>
              </div>
              <Button variant="thirdly">Send message</Button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
