import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let tempErrors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setErrors(tempErrors); // Update the errors state
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with login
      console.log("Login form is valid:", formData);
    } else {
      console.log("Login form has errors");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="absolute left-6 top-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BODY-1140245@1x-Vp7Z23Gb7UatlErYjHU5pMISiVyip0.png"
            alt="Logo"
            className="h-8 w-8"
          />
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 border-b-2 pb-4 text-sm font-medium ${
                activeTab === "login"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 border-b-2 pb-4 text-sm font-medium ${
                activeTab === "register"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Register
            </button>
          </div>

          {/* Conditional rendering based on activeTab */}
          {activeTab === "login" ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`block w-full rounded-md border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 pl-10 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className={`block w-full rounded-md border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 pl-10 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm`}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <a
                  href="/forgot-password" // Update this link to your actual forgot password route
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Sign in
              </button>
            </form>
          ) : (
            <CreateAccount />
          )}
        </div>
      </div>
    </div>
  );
}
function CreateAccount() {
  const [formData, setFormData] = useState({
    businessName: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    plan: "monthly",
    accountType: "",
    agreeToTerms: false,
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    cardholderName: "",
  });

  const [errors, setErrors] = useState({
    businessName: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    agreeToTerms: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    cardholderName: "",
  });

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Business Name validation
    if (!formData.businessName.trim()) {
      tempErrors.businessName = "Business name is required";
      isValid = false;
    }

    // Full Name validation
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
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

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Account Type validation
    if (
      !formData.accountType ||
      formData.accountType === "Choose business type"
    ) {
      tempErrors.accountType = "Please select an account type";
      isValid = false;
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      tempErrors.agreeToTerms = "You must agree to the Terms and Conditions";
      isValid = false;
    }

    // Card Details Validations
    const cardNumberRegex = /^\d{16}$/;
    if (!formData.cardNumber) {
      tempErrors.cardNumber = "Card number is required";
      isValid = false;
    } else if (!cardNumberRegex.test(formData.cardNumber)) {
      tempErrors.cardNumber = "Please enter a valid 16-digit card number";
      isValid = false;
    }

    const cardExpiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!formData.cardExpiry) {
      tempErrors.cardExpiry = "Expiration date is required";
      isValid = false;
    } else if (!cardExpiryRegex.test(formData.cardExpiry)) {
      tempErrors.cardExpiry = "Please enter a valid expiration date (MM/YY)";
      isValid = false;
    }

    const cardCvvRegex = /^\d{3,4}$/;
    if (!formData.cardCvv) {
      tempErrors.cardCvv = "CVV is required";
      isValid = false;
    } else if (!cardCvvRegex.test(formData.cardCvv)) {
      tempErrors.cardCvv = "Please enter a valid CVV (3 or 4 digits)";
      isValid = false;
    }

    if (!formData.cardholderName.trim()) {
      tempErrors.cardholderName = "Cardholder name is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log("Form is valid:", formData);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-[600px] rounded-lg border border-gray-200 bg-white shadow">
          <div className="text-center p-6">
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-sm text-gray-600">
              Start your business journey with us
            </p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name */}
              <div className="space-y-2"></div>

              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="fullName"
                  className={`w-full rounded-md border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className={`w-full rounded-md border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className={`w-full rounded-md border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-600">
        © 2024 Gula. All rights reserved.
      </footer>
    </div>
  );
}
