import { useState } from 'react';
import { X, Users, Clock, Calendar } from 'lucide-react';
import { Vehicle } from '../data/vehicles';
import toast from 'react-hot-toast';
interface BookingModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export default function BookingModal({ vehicle, onClose }: BookingModalProps) {
  const classyBlueGradient = {
    background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #0284c7 100%)",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    members: 1,
    days: 1,
    date: "",
  });

  if (!vehicle) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "918072729424";
    const message = `*New Booking Request*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nVehicle: ${vehicle.name}\nType: ${vehicle.type}\nMembers: ${formData.members}\nDays: ${formData.days}\nDate: ${formData.date}\n\nPlease confirm availability.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    toast.success("Redirecting to WhatsApp...", {
      style: { borderRadius: "10px", background: "#0284c7", color: "#fff" },
    });
    
    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-4 sm:px-5 md:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Book Your Vehicle</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition">
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-4 sm:p-5 md:p-6">
          
          {/* Vehicle Info */}
          <div className="mb-5 sm:mb-6 bg-gray-50 rounded-lg p-3 sm:p-4">
            <div className="flex gap-3 sm:gap-4">
              <img 
                src={vehicle.image_url} 
                alt={vehicle.name} 
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold">{vehicle.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{vehicle.type}</p>
                <div className="flex items-center text-xs sm:text-sm text-gray-600 mt-1">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  {vehicle.seater_capacity} Seater
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg mt-1 text-sm sm:text-base"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg mt-1 text-sm sm:text-base"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg mt-1 text-sm sm:text-base"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                Rental Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg mt-1 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                Number of Members *
              </label>
              <input
                type="number"
                min="1"
                max={vehicle.seater_capacity}
                value={formData.members}
                onChange={(e) => setFormData({ ...formData, members: parseInt(e.target.value) })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg mt-1 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                Number of Days *
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={formData.days}
                onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg mt-1 text-sm sm:text-base"
              />
            </div>

            {/* Info Box */}
            <div className="bg-sky-50 p-3 rounded-lg text-xs sm:text-sm text-sky-800">
              Click confirm booking → You will be redirected to WhatsApp
            </div>

            {/* Buttons */}
            <div className="flex gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 text-white py-2 sm:py-2.5 rounded-lg font-semibold hover:opacity-90 transition text-sm sm:text-base"
                style={classyBlueGradient}
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}