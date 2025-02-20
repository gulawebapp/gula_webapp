export default function TeamSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { name: "John Smith", role: "CEO & Founder" },
            { name: "Sarah Johnson", role: "Operations Director" },
            { name: "Michael Chen", role: "Tech Lead" },
            { name: "Emily Davis", role: "Marketing Manager" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center"
            >
              <img
                src={`/placeholder.svg?height=128&width=128&text=${
                  member.name.split(" ")[0]
                }`}
                alt={member.name}
                className="mx-auto rounded-full mb-4 w-32 h-32"
              />
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
