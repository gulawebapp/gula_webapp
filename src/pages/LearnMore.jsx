import CTASection from "../components/HomePage/LearnMore/CTASection/CTASection";
import HeroSection from "../components/HomePage/LearnMore/HeroSection/HeroSection";
import StatsSection from "../components/HomePage/LearnMore/StatsSection/StatsSection";
import TestimonialsSection from "../components/HomePage/LearnMore/TestimonialSection/TestimonialSection";
import UserTypeTabs from "../components/HomePage/LearnMore/UserTypeTabs/UserTabs";
import ValueProposition from "../components/HomePage/LearnMore/ValueProposition/ValueProposition";

const LearnMore = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ValueProposition />
      <UserTypeTabs />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default LearnMore;
