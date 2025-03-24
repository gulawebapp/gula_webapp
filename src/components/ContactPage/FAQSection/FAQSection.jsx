const FAQSection = () => (
    <>
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">What industries do you serve?</h3>
          <p className="text-gray-600">
            We provide solutions for various industries including technology,
            manufacturing, healthcare, and finance sectors.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">How quickly can I expect a response?</h3>
          <p className="text-gray-600">
            We typically respond to all inquiries within 24 business hours.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Do you offer custom solutions?</h3>
          <p className="text-gray-600">
            Yes, we specialize in creating tailored solutions to meet your specific
            business needs.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">What support options are available?</h3>
          <p className="text-gray-600">
            We offer 24/7 technical support, dedicated account managers, and
            comprehensive documentation.
          </p>
        </div>
      </div>
    </>
  );
  
  export default FAQSection;