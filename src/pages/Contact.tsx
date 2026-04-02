import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const classyBlueGradient = {
    background: "linear-gradient(270deg, #0ea5e9 0%, #7dd3fc 50%, #e0f2fe 100%)",
  };
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "8072203607";
    const message = `Hello, I have an enquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: "8072203607, 6383887268" },
    { icon: Mail, title: "Email", content: "heavenbrothers23@gmail.com" },
    { icon: MapPin, title: "Address", content: "Observatory puthukatu Kodaikanal 624-103" },
    { icon: Clock, title: "Hours", content: "24/7 Support" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="text-white py-12 sm:py-16 md:py-20 shadow-lg" style={classyBlueGradient}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-gray-800 text-base sm:text-lg">
            We'd love to hear from you
          </p>
        </div>
      </div>

      {/* Contact Section - Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Have questions about our vehicles or rental process? Send us a message and our team will respond as soon as possible.
            </p>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-sky-50 rounded-lg">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-sky-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base break-words">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-50 rounded-xl p-5 sm:p-6 md:p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-700 focus:border-transparent text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-700 focus:border-transparent text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-700 focus:border-transparent text-sm sm:text-base"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-700 focus:border-transparent text-sm sm:text-base"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full text-white py-3 sm:py-4 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
                style={classyBlueGradient}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}