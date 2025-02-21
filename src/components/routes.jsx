import { lazy, Suspense } from "react";

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
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/About",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/Services",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
    ),
  },
  {
    path: "/Contact",
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
];

export default routes;
