import CallToAction from "../components/TestPage/CallToAction/CallToAction";
import FeaturedBusinesses from "../components/TestPage/FeaturedBusiness/FeaturedBusiness";
import HeadLine from "../components/TestPage/HeadLine/HeadLine";
import PopularProducts from "../components/TestPage/PopularProducts/PopularProducts";
import ValueProposition from "../components/TestPage/ValueProposition/ValueProposition";

const TestPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HeadLine />
      <FeaturedBusinesses />
      <PopularProducts />
      <ValueProposition />
      <CallToAction />
    </div>
  );
};

export default TestPage;
