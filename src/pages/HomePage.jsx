import { lazy, Suspense } from "react";

// Lazy load non-critical sections
const LazyTeamSection = lazy(() =>
  import("../components/HomePage/TeamSection/TeamSection")
);
const LazyGlobalPresence = lazy(() =>
  import("../components/HomePage/GlobalPresence/GlobalPresence")
);

const Hero = lazy(() =>
  import("../components/HomePage/HeroSection/HeroSection")
);

const Features = lazy(() =>
  import("../components/HomePage/FeaturesSection/FeaturesSection")
);

export default function HomePage() {
  return (
    <div className="w-full">
      <main>
        <Suspense fallback={<div>Loading hero...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading Features...</div>}>
          <Features />
        </Suspense>
        {/* <SliderSection /> */}
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
