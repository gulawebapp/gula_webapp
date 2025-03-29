import happyteam from "./images/happyteam.webp";
export const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-top py-12 md:py-24 min-h-[400px]"
      style={{
        backgroundImage: `url(${happyteam})`,
      }}
    >
      {/* Semi-transparent overlay - try different bg-opacity values */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            <span className="block">Transform Your</span>
            <span className="block text-blue-300"> Business Future</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Leading the way in innovative business solutions since 2010. We help
            companies navigate digital transformation and achieve
          </p>
        </div>
      </div>
    </div>
  );
};
