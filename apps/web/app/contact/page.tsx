import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Kontakt</h1>
      
      {/* Contact Info */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <p className="text-gray-700 mb-4">Har du frågor? Tveka inte att kontakta oss!</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <p><strong>Email:</strong> info@algeriskaföreningen.se</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <p><strong>Telefon:</strong> +46 70 123 45 67</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <p><strong>Adress:</strong> Malmö, Sverige</p>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h3 className="font-semibold mb-4 flex items-center gap-2 text-lg">
          <span>📱</span> Följ oss på sociala medier
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="https://www.facebook.com/p/Svensk-Algeriska-F%C3%B6reningen-100080588589924/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 hover:border-blue-400"
          >
            {/* Facebook SVG Icon */}
            <svg className="h-6 w-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="font-medium">Facebook</span>
            <span className="text-sm text-gray-500 hidden sm:inline">- Svensk Algeriska Föreningen</span>
          </a>
          
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 hover:border-pink-400"
          >
            {/* Instagram SVG Icon */}
            <svg className="h-6 w-6 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="font-medium">Instagram</span>
            <span className="text-sm text-gray-500 hidden sm:inline">- @svenskalgeriska</span>
          </a>
        </div>
        
        <p className="text-sm text-gray-500 mt-4 border-t border-blue-200 pt-3">
          💡 Följ oss för uppdateringar om evenemang, kultur och gemenskap!
        </p>
      </div>
    </div>
  );
}