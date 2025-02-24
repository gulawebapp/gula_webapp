import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState("login");

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

          {/* Form */}
          <form className="space-y-6">
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
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-10 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                  placeholder="Enter your email"
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

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
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-10 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                  placeholder="Enter your password"
                />
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-gray-600 hover:text-gray-800"
              >
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
