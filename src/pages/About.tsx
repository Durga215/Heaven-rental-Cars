import { Users, Award, Heart, Target } from "lucide-react";

export default function About() {
  const values = [
    { icon: Users, title: "Customer First", description: "We prioritize your needs and satisfaction above all else" },
    { icon: Award, title: "Quality Service", description: "Providing well-maintained vehicles and excellent support" },
    { icon: Heart, title: "Trust & Safety", description: "Building lasting relationships through reliable service" },
    { icon: Target, title: "Flexibility", description: "Offering rental options that fit your schedule and budget" },
  ];

  const classyBlueGradient = {
    background: "linear-gradient(270deg, #0ea5e9 0%, #7dd3fc 50%, #e0f2fe 100%)",
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="text-white py-12 sm:py-16 md:py-20 shadow-lg" style={classyBlueGradient}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            About Heaven Brothers
          </h1>
          <p className="text-gray-800 text-base sm:text-lg">
            Your trusted partner for vehicle rentals
          </p>
        </div>
      </div>

      {/* Story Section - Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
              Founded with a vision to make vehicle rentals simple and accessible, Heaven Brothers has been serving our community with reliable transportation solutions. We understand that every journey is important, whether it's a family trip, business meeting, or special occasion.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our fleet includes a wide range of vehicles from compact cars to spacious minivans, all maintained to the highest standards. With transparent pricing and flexible hourly rentals, we make it easy for you to get on the road.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg flex items-center justify-center h-64 sm:h-72 md:h-80">
            <img 
              src="/vehicles/innova2.jpg" 
              alt="Car rental" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Values Section - Responsive Grid */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-5 sm:p-6 bg-white border border-sky-100 rounded-xl shadow-sm hover:shadow-lg hover:border-sky-300 transition"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-sky-50 rounded-full mb-3 sm:mb-4">
                  <value.icon className="h-7 w-7 sm:h-8 sm:w-8 text-sky-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-xl p-8 sm:p-10 text-center text-white shadow-lg" style={classyBlueGradient}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Join Thousands of Happy Customers
          </h2>
          <p className="text-gray-200 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience the convenience and reliability that has made us the preferred choice for vehicle rentals
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">5000+</div>
              <div className="text-gray-200 text-sm sm:text-base">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-gray-200 text-sm sm:text-base">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}