// filepath: /home/matovu/gula_webapp/gula_webapp/src/pages/ErrorPage.jsx

import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-2 bg-blue-600 text-white rounded-md"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
