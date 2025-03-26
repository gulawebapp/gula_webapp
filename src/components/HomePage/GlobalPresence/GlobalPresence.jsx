import world from "./images/world.webp";
export default function GlobalPresence() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Global Presence
        </h2>
        <div className="relative h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <img
            src={world}
            alt="Global Presence Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-10"></div>
        </div>
      </div>
    </section>
  );
}
