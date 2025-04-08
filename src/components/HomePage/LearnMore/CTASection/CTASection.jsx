import { useNavigate } from "react-router-dom";
import Button from "../../../common/button";

const CTASection = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login", { state: { from: window.location.pathname } });
  };
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our platform today and experience the future of B2B commerce.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={handleLogin}>
            Get Started for Free
          </Button>
          <Button variant="primary">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
