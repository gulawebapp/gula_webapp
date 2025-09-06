import { useState } from "react";
import { Mail, Lock, X, User } from "lucide-react";
import logo from "../common/images/circle.png";
import styles from "../common/login.module.css";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";

export default function LoginForm(props) {
  const navigate = useNavigate();
  const { onClose } = props;
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const validateForm = () => {
    let tempErrors = { email: "", password: "" };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(tempErrors); // Update the errors state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear previous errors
    setErrors({ email: "", password: "", general: "" });

    // Validate form
    if (!validateForm()) {
      console.log("Login form has errors");
      return;
    }

    try {
      setisLoading(true);
      console.log("Attempting login with:", formData);

      // 1. Authenticate user
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredentials.user;
      console.log("User authenticated:", user);

      // 2. Get user data from Firestore
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("User data:", userData);

          // Redirect based on account type
          if (userData.account === "wholesaler") {
            navigate("/wholesaler");
          } else if (userData.account === "retailer") {
            // Fixed the condition here
            navigate("/retailer");
          } else {
            navigate("/login"); // Default redirect if account type isn't set
          }
        } else {
          console.log("No user data found");
          navigate("/login");
        }
      } catch (firestoreError) {
        console.error("Firestore error:", firestoreError);
        setErrors({
          ...errors,
          general: "Couldn't load user data. Please try again.",
        });
      }
    } catch (authError) {
      console.error("Authentication error:", authError);

      // Handle specific auth errors
      if (authError.code === "auth/user-not-found") {
        setErrors({ ...errors, email: "No account found with this email" });
      } else if (authError.code === "auth/wrong-password") {
        setErrors({ ...errors, password: "Incorrect password" });
      } else {
        setErrors({ ...errors, general: "Login failed. Please try again." });
      }
    } finally {
      setisLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6">
          <div className="text-center relative">
            <img src={logo} className={`h-10 w-auto ${styles.spinClockwise}`} />
            <button
              onClick={handleClose}
              className="absolute right-0 top-0 text-gray-500 hover:text-black focus:outline-none"
              aria-label="Close login form"
            >
              <X className="h-6 w-6" />
            </button>
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
                  href="/forgot-password"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                disabled={isLoading}
                type="submit"
                className={`w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "SIgning in" : "Sign in"}
                {errors.general && (
                  <div className="text-sm text-red-500 text-center">
                    {errors.general}
                  </div>
                )}
              </button>
            </form>
          ) : (
            <CreateAccount setActiveTab={setActiveTab} />
          )}
        </div>
      </div>
    </div>
  );
}

function CreateAccount({ setActiveTab }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "Choose business type",
  });

  const [errors, setErrors] = useState({
    businessName: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "",
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

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log("Form is valid:", formData);
    } else {
      console.log("Form has errors");
    }

    //
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        businessname: formData.businessName,
        fullname: formData.fullName,
        phone: formData.phone,
        account: formData.accountType,
        createdAt: new Date(),
      });
      setActiveTab("login");
      console.log("user successfully created", user);
    } catch (err) {
      console.error("error creating account", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="space-y-2">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <div className="relative">
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={`block w-full rounded-md border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } px-3 py-2 pl-10 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm`}
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        {errors.fullName && (
          <p className="text-sm text-red-500">{errors.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
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
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Business Name */}
      <div className="space-y-2">
        <label
          htmlFor="businessName"
          className="block text-sm font-medium text-gray-700"
        >
          Business Name
        </label>
        <div className="relative">
          <input
            id="businessName"
            name="businessName"
            type="text"
            className={`block w-full rounded-md border ${
              errors.businessName ? "border-red-500" : "border-gray-300"
            } px-3 py-2 pl-10 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm`}
            placeholder="Enter your business name"
            value={formData.businessName}
            onChange={handleChange}
          />
          <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        {errors.businessName && (
          <p className="text-sm text-red-500">{errors.businessName}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <div className="relative">
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`block w-full rounded-md border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } px-3 py-2 pl-10 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm`}
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
        </div>
        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
      </div>

      {/* Account Type */}
      <div className="space-y-2">
        <label
          htmlFor="accountType"
          className="block text-sm font-medium text-gray-700"
        >
          Account Type
        </label>
        <select
          id="accountType"
          name="accountType"
          className={`block w-full rounded-md border ${
            errors.accountType ? "border-red-500" : "border-gray-300"
          } px-3 py-2 pl-10 pr-10 text-gray-700 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm`}
          value={formData.accountType}
          onChange={handleChange}
        >
          <option value="Choose business type">Choose business type</option>
          <option value="retailer">Retailer</option>
          <option value="wholesaler">Wholesaler</option>
        </select>
        {errors.accountType && (
          <p className="text-sm text-red-500">{errors.accountType}</p>
        )}
      </div>

      {/* Password */}
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
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />
          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className={`block w-full rounded-md border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } px-3 py-2 pl-10 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm`}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Creating Account" : "Create Account"}
      </button>
    </form>
  );
}

// // Terms agreement validation
// if (!formData.agreeToTerms) {
//   tempErrors.agreeToTerms = "You must agree to the Terms and Conditions";
//   isValid = false;
// }

// // Card Details Validations
// const cardNumberRegex = /^\d{16}$/;
// if (!formData.cardNumber) {
//   tempErrors.cardNumber = "Card number is required";
//   isValid = false;
// } else if (!cardNumberRegex.test(formData.cardNumber)) {
//   tempErrors.cardNumber = "Please enter a valid 16-digit card number";
//   isValid = false;
// }

// const cardExpiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
// if (!formData.cardExpiry) {
//   tempErrors.cardExpiry = "Expiration date is required";
//   isValid = false;
// } else if (!cardExpiryRegex.test(formData.cardExpiry)) {
//   tempErrors.cardExpiry = "Please enter a valid expiration date (MM/YY)";
//   isValid = false;
// }

// const cardCvvRegex = /^\d{3,4}$/;
// if (!formData.cardCvv) {
//   tempErrors.cardCvv = "CVV is required";
//   isValid = false;
// } else if (!cardCvvRegex.test(formData.cardCvv)) {
//   tempErrors.cardCvv = "Please enter a valid CVV (3 or 4 digits)";
//   isValid = false;
// }

// if (!formData.cardholderName.trim()) {
//   tempErrors.cardholderName = "Cardholder name is required";
//   isValid = false;
// }
