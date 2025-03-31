import { useState } from "react";

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
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
    phone: "",
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

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number";
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
    <div className="min-h-screen bg-emerald-950">
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
