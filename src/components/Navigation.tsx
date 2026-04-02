import { useState } from 'react';
import { Car, Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const classyBlueGradient = { 
    background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)" 
  };
  
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Vehicles", id: "listing" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-sky-50/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo - Responsive sizing */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group flex-1 sm:flex-none"
            onClick={() => onNavigate("home")}
          >
            <div className="relative">
              <img 
                src="/vehicles/logo.jpeg" 
                alt="Heaven Brothers Logo" 
                className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain rounded-lg" 
                onError={(e) => { 
                  const target = e.target as HTMLImageElement; 
                  target.style.display = "none"; 
                }} 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Heaven Brothers
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 hidden xs:block">
                Premium Car & Van Rentals
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all
                  ${currentPage === item.id 
                    ? "text-sky-700 border-b-2 border-sky-700" 
                    : "text-gray-600 hover:text-sky-600"
                  }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Book Now Button */}
            <button
              onClick={() => onNavigate("listing")}
              style={classyBlueGradient}
              className="ml-2 lg:ml-4 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm shadow-md hover:opacity-90 transition-all flex items-center gap-2"
            >
              <Car className="h-4 w-4" />
              <span className="hidden sm:inline">Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sky-100 transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-sky-100 py-3">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-left text-base font-medium rounded-lg transition-all
                    ${currentPage === item.id 
                      ? "text-sky-700 bg-sky-100" 
                      : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                    }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate("listing");
                  setIsMobileMenuOpen(false);
                }}
                style={classyBlueGradient}
                className="px-4 py-3 text-white rounded-lg font-semibold text-base flex items-center justify-center gap-2 mt-2"
              >
                <Car className="h-5 w-5" />
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}