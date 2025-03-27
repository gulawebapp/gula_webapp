import { lazy, Suspense } from "react";
import Layout from "./Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Wholesaler = lazy(() => import("../pages/Wholesaler"));
const Retailer = lazy(() => import("../pages/Retailer"));
const TestPage = lazy(() => import("../pages/TestPage"));
const Account = lazy(() => import("../components/SubscriptionDetails"))
const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
  // Separate routes for Wholesaler and Retailer without Layout
  {
    path: "wholesaler",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Wholesaler />
      </Suspense>
    ),
  },
  {
    path: "retailer",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Retailer />
      </Suspense>
    ),
  },
  {
    path: "testpage",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <TestPage />
      </Suspense>
    ),
  },
  {
    path: "createaccount",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Account />
      </Suspense>
    ),
  },

];

export default routes;
