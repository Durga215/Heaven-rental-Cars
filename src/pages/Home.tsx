import { Car, Shield, Clock, Users, Star } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    { icon: Car, title: "Premium Fleet", description: "Well-maintained cars and vans perfect for Kodaikanal scenic routes" },
    { icon: Clock, title: "24/7 Availability", description: "Round the clock service for your travel needs" },
    { icon: Shield, title: "Safe & Insured", description: "All vehicles fully insured and serviced" },
  ];

  const placesToVisit = [
    { src: "/vehicles/sam1.jpg", name: "Village Tour" },
    { src: "/vehicles/sam7.jpg", name: "Forest Tour" },
    { src: "/vehicles/sam2.jpg", name: "Truckking Tour" },
    { src: "/vehicles/sam8.jpg", name: "Valley Tour" }
  ];

  const classyBlueGradient = {
    background: "linear-gradient(270deg, #0ea5e9 0%, #7dd3fc 50%, #e0f2fe 100%)",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white text-gray-800">
      
      {/* HERO SECTION - Responsive */}
      <div className="relative overflow-hidden text-gray-900" style={classyBlueGradient}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center mb-6 sm:mb-8 md:mb-10 leading-tight">
            Explore the <span className="text-white">Princess of Hill Stations</span>
          </h1>
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch">
            
            {/* Left Card */}
            <div className="flex justify-center w-full">
              <div className="bg-white/60 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-3xl md:rounded-[50px] shadow-xl max-w-md w-full text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-sky-900 mb-2 sm:mb-3">
                  Rooms Also Available
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                  Stay in comfort while exploring Kodaikanal. Affordable and cozy rooms available for all travelers.
                </p>
                <p className="text-gray-900 font-semibold text-sm sm:text-base">
                  More Details:
                </p>
                <p className="text-sky-800 font-bold text-base sm:text-lg">
                  8072203607
                </p>
              </div>
            </div>
            
            {/* Right Card */}
            <div className="flex justify-center w-full">
              <div className="bg-white/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg max-w-md w-full">
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  Rent quality cars and vans and explore Kodaikanal freely.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
                  <button
                    onClick={() => onNavigate("listing")}
                    className="bg-sky-700 text-white px-4 py-3 rounded-lg font-medium hover:bg-sky-800 transition flex-1"
                  >
                    Browse Vehicles
                  </button>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="border border-sky-700 text-sky-700 px-4 py-3 rounded-lg font-medium hover:bg-sky-700 hover:text-white transition flex-1"
                  >
                    Contact Us
                  </button>
                </div>
                
                {/* Stats */}
                <div className="flex justify-center sm:justify-start gap-6 pt-3 border-t border-gray-300">
                  <div className="flex items-center gap-2 text-gray-800">
                    <Users className="h-4 w-4 text-sky-700" />
                    <span className="text-sm font-medium">5000+ Happy Customers </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <Star className="h-4 w-4 text-sky-700" />
                    <span className="text-sm font-medium">4.8 Rating</span>
                    {/* //★ */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PLACES TO VISIT - Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-3 sm:mb-4">
            Explore
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Places to Visit
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Discover the most beautiful spots in Kodaikanal
          </p>
        </div>
        
        {/* Responsive Image Grid - 1 on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {placesToVisit.map((place, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={place.src} 
                  alt={place.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-base font-semibold text-gray-800">
                {place.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION - Responsive */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-3 sm:mb-4">
              Why Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Why Travelers Choose Us
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Experience the best service with our premium fleet
            </p>
          </div>
          
          {/* Responsive Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md border border-white/40 rounded-xl p-6 shadow-lg hover:border-sky-400 transition-all text-center"
              >
                <div className="bg-sky-50 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-sky-700" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="relative text-gray-900" style={classyBlueGradient}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Explore Kodaikanal?
          </h2>
          <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">
            Book your vehicle now and enjoy the freedom of the open road
          </p>
          <button
            onClick={() => onNavigate("listing")}
            className="bg-white text-sky-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 mx-auto"
          >
            <Car size={18} />
            Browse Vehicles
          </button>
          <p className="text-gray-900 mt-4 sm:mt-6 text-xs sm:text-sm">
            * Special rates for long-term rentals
          </p>
        </div>
      </div>
    </div>
  );
}