import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const Nav = lazy(() => import("./NavBar"));
const Foot = lazy(() => import("./Footer"));
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Suspense fallback={<div>Loading...</div>}>
        <Foot />
      </Suspense>
    </div>
  );
}
