const services = [
  {
    title: "Strategic Growth",
    description:
      "Develop comprehensive strategies tailored to your business objectives and market position.",
    icon: "https://img.icons8.com/pulsar-line/48/growth-and-flag.png",
    alt: "growth-and-flag",
  },
  {
    title: "Expert Consultation",
    description:
      "Access our network of industry experts for personalized guidance and solutions.",
    icon: "https://img.icons8.com/ios-glyphs/30/conference-call--v1.png",
    alt: "conference-call--v1",
  },
  {
    title: "Innovation Focus",
    description:
      "Stay ahead with cutting-edge solutions and innovative business approaches.",
    icon: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/50/external-rocket-startups-tanah-basah-glyph-tanah-basah.png",
    alt: "external-rocket-startups-tanah-basah-glyph-tanah-basah",
  },
];

export const MissionSection = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-black uppercase tracking-wide mb-2">
            Our Mission
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Empowering Business Growth
          </p>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            We are dedicated to providing innovative solutions that help
            businesses thrive in the digital age. Our approach combines industry
            expertise with cutting-edge technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 pt-16 relative"
            >
              <div className="absolute -top-8 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <img
                  src={service.icon || "/placeholder.svg"}
                  alt={service.alt}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
