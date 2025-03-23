const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Solutions Inc",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "Director, Global Innovations",
    image: "/placeholder.svg",
  },
  {
    name: "Amanda Rodriguez",
    role: "COO, Future Enterprises",
    image: "/placeholder.svg",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-black uppercase tracking-wide mb-2">
            Testimonials
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Our Clients Say
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">
                Their{" "}
                {index === 0
                  ? "strategic insights transformed our business operations and helped us achieve unprecedented growth"
                  : index === 1
                  ? "expertise and dedication to our success made them an invaluable partner in our growth journey"
                  : "innovative solutions and strategic approach helped us navigate complex challenges effectively"}
                .
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
