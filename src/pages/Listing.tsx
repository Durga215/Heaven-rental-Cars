// import { useState, useEffect } from "react";
// import { Users } from "lucide-react";
// import { Vehicle, vehiclesData } from "../data/vehicles";

// interface ListingProps {
//   onBookVehicle: (vehicle: Vehicle) => void;
// }

// export default function Listing({ onBookVehicle }: ListingProps) {
//   const [vehicles, setVehicles] = useState<Vehicle[]>([]);
//   const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedSeater, setSelectedSeater] = useState<string>("all");
//   const [selectedType, setSelectedType] = useState<string>("all");

//   const classyBlueGradient = {
//     background: "linear-gradient(270deg, #0ea5e9 0%, #7dd3fc 50%, #e0f2fe 100%)",
//   };

//   useEffect(() => {
//     fetchVehicles();
//   }, []);

//   useEffect(() => {
//     filterVehicles();
//   }, [vehicles, selectedSeater, selectedType]);

//   const fetchVehicles = () => {
//     setVehicles(vehiclesData);
//     setFilteredVehicles(vehiclesData);
//     setLoading(false);
//   };

//   const filterVehicles = () => {
//     let filtered = [...vehicles];
    
//     if (selectedSeater !== "all") {
//       filtered = filtered.filter((v) => v.seater_capacity === parseInt(selectedSeater));
//     }
    
//     if (selectedType !== "all") {
//       filtered = filtered.filter((v) => v.type === selectedType);
//     }
    
//     setFilteredVehicles(filtered);
//   };

//   const uniqueSeaters = Array.from(new Set(vehicles.map((v) => v.seater_capacity))).sort();
//   const uniqueTypes = Array.from(new Set(vehicles.map((v) => v.type)));

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-xl text-gray-600">Loading vehicles...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="text-white py-10 sm:py-12 md:py-16" style={classyBlueGradient}>
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-md">
//             Our Fleet
//           </h1>
//           <p className="text-gray-800 text-base sm:text-lg md:text-xl">
//             Choose the perfect vehicle for your journey
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
        
//         {/* Filter Section - Responsive */}
//         <div className="bg-sky-50/60 backdrop-blur-md border border-sky-100 rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
//           <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">
//             Filter Vehicles
//           </h2>
          
//           <div className="flex flex-col sm:flex-row gap-4">
//             {/* Seater Filter */}
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Seating Capacity
//               </label>
//               <select
//                 value={selectedSeater}
//                 onChange={(e) => setSelectedSeater(e.target.value)}
//                 className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base"
//               >
//                 <option value="all">All Capacities</option>
//                 {uniqueSeaters.map((seater) => (
//                   <option key={seater} value={seater}>
//                     {seater} Seater
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             {/* Type Filter */}
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Vehicle Type
//               </label>
//               <select
//                 value={selectedType}
//                 onChange={(e) => setSelectedType(e.target.value)}
//                 className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base"
//               >
//                 <option value="all">All Types</option>
//                 {uniqueTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Vehicle Cards - Responsive Grid */}
//         {filteredVehicles.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-lg sm:text-xl text-gray-600">
//               No vehicles match your filters
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
//             {filteredVehicles.map((vehicle) => (
//               <div
//                 key={vehicle.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
//               >
//                 <div className="w-full h-48 sm:h-52 md:h-56 bg-gray-100 flex items-center justify-center p-3 overflow-hidden">
//                   <img 
//                     src={vehicle.image_url} 
//                     alt={vehicle.name} 
//                     className="max-h-full max-w-full object-contain"
//                   />
//                 </div>
                
//                 <div className="p-4 sm:p-5 md:p-6">
//                   <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-900">
//                       {vehicle.name}
//                     </h3>
//                     <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded whitespace-nowrap">
//                       {vehicle.type}
//                     </span>
//                   </div>
                  
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                     {vehicle.description}
//                   </p>
                  
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center text-gray-600 gap-1">
//                       <Users className="h-4 w-4 sm:h-5 sm:w-5" />
//                       <span className="text-sm sm:text-base">{vehicle.seater_capacity} Seater</span>
//                     </div>
//                   </div>
                  
//                   <button
//                     onClick={() => onBookVehicle(vehicle)}
//                     className="w-full text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition"
//                     style={classyBlueGradient}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



















import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { Vehicle, vehiclesData } from "../data/vehicles";

interface ListingProps {
  onBookVehicle: (vehicle: Vehicle) => void;
}

export default function Listing({ onBookVehicle }: ListingProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSeater, setSelectedSeater] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const classyBlueGradient = {
    background: "linear-gradient(270deg, #0ea5e9 0%, #7dd3fc 50%, #e0f2fe 100%)",
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    filterVehicles();
  }, [vehicles, selectedSeater, selectedType]);

  const fetchVehicles = () => {
    setVehicles(vehiclesData);
    setFilteredVehicles(vehiclesData);
    setLoading(false);
  };

  const filterVehicles = () => {
    let filtered = [...vehicles];
    
    if (selectedSeater !== "all") {
      filtered = filtered.filter((v) => v.seater_capacity === parseInt(selectedSeater));
    }
    
    if (selectedType !== "all") {
      filtered = filtered.filter((v) => v.type === selectedType);
    }
    
    setFilteredVehicles(filtered);
  };

  const uniqueSeaters = Array.from(new Set(vehicles.map((v) => v.seater_capacity))).sort();
  const uniqueTypes = Array.from(new Set(vehicles.map((v) => v.type)));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading vehicles...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-white py-10 sm:py-12 md:py-16" style={classyBlueGradient}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-md">
            Our Fleet
          </h1>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl">
            Choose the perfect vehicle for your journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
        
        {/* Filter Section */}
        <div className="bg-sky-50/60 backdrop-blur-md border border-sky-100 rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">
            Filter Vehicles
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seating Capacity
              </label>
              <select
                value={selectedSeater}
                onChange={(e) => setSelectedSeater(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base"
              >
                <option value="all">All Capacities</option>
                {uniqueSeaters.map((seater) => (
                  <option key={seater} value={seater}>
                    {seater} Seater
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base"
              >
                <option value="all">All Types</option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Vehicle Cards - NO LEFT/RIGHT GAPS */}
        {filteredVehicles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg sm:text-xl text-gray-600">
              No vehicles match your filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                {/* IMAGE SECTION - NO PADDING, FULL WIDTH */}
                <div className="w-full bg-gray-100 overflow-hidden">
                  <img 
                    src={vehicle.image_url} 
                    alt={vehicle.name} 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {vehicle.name}
                    </h3>
                    <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded whitespace-nowrap">
                      {vehicle.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {vehicle.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600 gap-1">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">{vehicle.seater_capacity} Seater+1</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onBookVehicle(vehicle)}
                    className="w-full text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition mt-auto"
                    style={classyBlueGradient}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}