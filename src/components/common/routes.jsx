import { lazy, Suspense } from "react";
import Layout from "./Layout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const About = lazy(() => import("../../pages/About"));
const Services = lazy(() => import("../../pages/Services"));
const Contact = lazy(() => import("../../pages/Contact"));
const ErrorPage = lazy(() => import("../../pages/ErrorPage"));
const Wholesaler = lazy(() => import("../../pages/Wholesaler"));
const Retailer = lazy(() => import("../../pages/Retailer"));
const TestPage = lazy(() => import("../../pages/TestPage"));
const Account = lazy(() => import("../common/SubscriptionDetails"));
const Learn = lazy(() => import("../../pages/LearnMore"));
const LoginForm = lazy(() => import("../common/loginForm"));

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "learnmore", element: <Learn /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/wholesaler",
    element: <Wholesaler />,
  },
  {
    path: "/retailer",
    element: <Retailer />,
  },
  {
    path: "/testpage",
    element: <TestPage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/createaccount",
    element: <Account />,
  },
];

const SuspenseWrappedRoutes = routes.map((route) => ({
  ...route,
  element: <Suspense fallback={<Loading />}>{route.element}</Suspense>,
  children: route.children?.map((child) => ({
    ...child,
    element: <Suspense fallback={<Loading />}>{child.element}</Suspense>,
  })),
}));

export default SuspenseWrappedRoutes;
