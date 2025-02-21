// filepath: /home/matovu/gula_webapp/gula_webapp/src/components/routes.jsx
import { lazy, Suspense } from "react";
import Layout from "./Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

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
];

export default routes;
