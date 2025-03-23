import { lazy, Suspense } from "react";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import FeaturesSection from "../components/HomePage/FeaturesSection/FeaturesSection";
import SliderSection from "../components/HomePage/SliderSection/SliderSection";
import world from "../images/world.webp";
// Lazy load non-critical sections
const LazyTeamSection = lazy(() => import("../components/TeamSection"));
const LazyGlobalPresence = lazy(() => import("../components/GlobalPresence"));

export default function HomePage() {
  return (
    <div className="w-full">
      <main>
        <HeroSection />
        <FeaturesSection />
        <SliderSection />
        <Suspense fallback={<div>Loading Team...</div>}>
          <LazyTeamSection />
        </Suspense>
        <Suspense fallback={<div>Loading Global Presence...</div>}>
          <LazyGlobalPresence world={world} />
        </Suspense>
      </main>
    </div>
  );
}
