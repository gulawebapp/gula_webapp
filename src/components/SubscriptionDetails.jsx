import { useState } from "react";

export function CreateAccount() {
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
              <div className="space-y-2">
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium"
                >
                  Business Name
                </label>
                <input
                  id="businessName"
                  className={`w-full rounded-md border ${
                    errors.businessName ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                />
                {errors.businessName && (
                  <p className="text-sm text-red-500">{errors.businessName}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full rounded-md border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Account Type */}
              <div className="space-y-2">
                <label
                  htmlFor="accountType"
                  className="block text-sm font-medium"
                >
                  Account Type
                </label>
                <select
                  id="accountType"
                  className={`w-full rounded-md border ${
                    errors.accountType ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  value={formData.accountType}
                  onChange={(e) =>
                    setFormData({ ...formData, accountType: e.target.value })
                  }
                >
                  <option value="Choose business type">
                    Choose business type
                  </option>
                  <option value="retailer">Retailer</option>
                  <option value="wholesaler">Wholesaler</option>
                </select>
                {errors.accountType && (
                  <p className="text-sm text-red-500">{errors.accountType}</p>
                )}
              </div>

              {/* Subscription Plan */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Subscription Plan
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                    <input
                      type="radio"
                      name="plan"
                      id="monthly"
                      value="monthly"
                      checked={formData.plan === "monthly"}
                      onChange={(e) =>
                        setFormData({ ...formData, plan: e.target.value })
                      }
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="monthly" className="font-medium">
                      Monthly Plan
                    </label>
                    <div className="text-2xl font-bold">$30</div>
                    <span className="text-sm text-gray-600">
                      Billed monthly
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                    <input
                      type="radio"
                      name="plan"
                      id="annual"
                      value="annual"
                      checked={formData.plan === "annual"}
                      onChange={(e) =>
                        setFormData({ ...formData, plan: e.target.value })
                      }
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="annual" className="font-medium">
                      Annual Plan
                    </label>
                    <div className="text-2xl font-bold">$300</div>
                    <span className="text-sm text-gray-600">Save 16%</span>
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreeToTerms: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the Terms and Conditions
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-sm text-red-500">{errors.agreeToTerms}</p>
              )}

              {/* Card Details Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Payment Details</h2>

                {/* Card Number */}
                <div className="space-y-2">
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium"
                  >
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    className={`w-full rounded-md border ${
                      errors.cardNumber ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, cardNumber: e.target.value })
                    }
                  />
                  {errors.cardNumber && (
                    <p className="text-sm text-red-500">{errors.cardNumber}</p>
                  )}
                </div>

                {/* Expiration Date and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="cardExpiry"
                      className="block text-sm font-medium"
                    >
                      Expiration Date
                    </label>
                    <input
                      id="cardExpiry"
                      type="text"
                      className={`w-full rounded-md border ${
                        errors.cardExpiry ? "border-red-500" : "border-gray-300"
                      } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={(e) =>
                        setFormData({ ...formData, cardExpiry: e.target.value })
                      }
                    />
                    {errors.cardExpiry && (
                      <p className="text-sm text-red-500">
                        {errors.cardExpiry}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="cardCvv"
                      className="block text-sm font-medium"
                    >
                      CVV
                    </label>
                    <input
                      id="cardCvv"
                      type="text"
                      className={`w-full rounded-md border ${
                        errors.cardCvv ? "border-red-500" : "border-gray-300"
                      } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                      placeholder="123"
                      value={formData.cardCvv}
                      onChange={(e) =>
                        setFormData({ ...formData, cardCvv: e.target.value })
                      }
                    />
                    {errors.cardCvv && (
                      <p className="text-sm text-red-500">{errors.cardCvv}</p>
                    )}
                  </div>
                </div>

                {/* Cardholder Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="cardholderName"
                    className="block text-sm font-medium"
                  >
                    Cardholder Name
                  </label>
                  <input
                    id="cardholderName"
                    type="text"
                    className={`w-full rounded-md border ${
                      errors.cardholderName
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="John Doe"
                    value={formData.cardholderName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cardholderName: e.target.value,
                      })
                    }
                  />
                  {errors.cardholderName && (
                    <p className="text-sm text-red-500">
                      {errors.cardholderName}
                    </p>
                  )}
                </div>
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
