import { lazy, Suspense } from "react";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import FeaturesSection from "../components/HomePage/FeaturesSection/FeaturesSection";
import SliderSection from "../components/HomePage/SliderSection/SliderSection";

// Lazy load non-critical sections
const LazyTeamSection = lazy(() => import("../components/HomePage/TeamSection/TeamSection"));
const LazyGlobalPresence = lazy(() => import("../components/HomePage/GlobalPresence/GlobalPresence"));

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
          <LazyGlobalPresence />
        </Suspense>
      </main>
    </div>
  );
}
