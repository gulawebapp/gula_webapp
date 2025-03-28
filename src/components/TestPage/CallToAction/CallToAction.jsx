import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-gray-950 rounded-xl p-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Join thousands of retailers and wholesalers who are already benefiting
        from our platform.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/createaccount"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
