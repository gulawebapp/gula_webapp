import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SuspenseWrappedRoutes from "./routes/routes";

// GTM loading function
const loadGTM = () => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-RPECLKR7CM";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-RPECLKR7CM");
};

// Simple wrapper component
function AppWithGTM() {
  useEffect(() => {
    const handleInteraction = () => {
      loadGTM();
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("scroll", handleInteraction);

    // Fallback
    const timer = setTimeout(loadGTM, 3000);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
      clearTimeout(timer);
    };
  }, []);

  return <RouterProvider router={router} />;
}

const router = createBrowserRouter(SuspenseWrappedRoutes);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppWithGTM />
    </QueryClientProvider>
  </StrictMode>
);
