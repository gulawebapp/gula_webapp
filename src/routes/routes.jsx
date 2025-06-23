import { lazy, Suspense } from "react";
import Loading from "../components/common/Loading";
import Layout from "../components/common/Layout";
import { element } from "prop-types";
import Cart from "../components/Retailer/cart";
const HomePage = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Wholesaler = lazy(() => import("../pages/Wholesaler"));
const Retailer = lazy(() => import("../pages/Retailer"));
const Account = lazy(() => import("../components/common/SubscriptionDetails"));
const Learn = lazy(() => import("../pages/LearnMore"));
const LoginForm = lazy(() => import("../components/auth/loginForm"));
const CartPage = lazy(() => import("../components/Retailer/cart"));

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
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/createaccount",
    element: <Account />,
  },
  {
    path: "/cart",
    element: <CartPage />,
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
