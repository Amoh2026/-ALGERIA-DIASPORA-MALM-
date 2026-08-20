import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-yellow-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              🇩🇿 Svensk Algeriska Föreningen
            </h3>
            <p className="text-sm">
               Förenar Sverige och Algeriet. Vi bygger broar mellan kulturer genom gemenskap och evenemang.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-yellow-400 transition">Om Oss</Link></li>
              <li><Link href="/events" className="hover:text-yellow-400 transition">Evenemang</Link></li>
              <li><Link href="/culture" className="hover:text-yellow-400 transition">Kultur</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@algeriskaföreningen.se">info@algeriskaföreningen.se</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+46701234567">+46 70 123 45 67</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Malmö, Sverige</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Följ Oss</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.facebook.com/p/Svensk-Algeriska-F%C3%B6reningen-100080588589924/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-[#1877F2] hover:text-white transition group"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm group-hover:text-white">Facebook</span>
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-[#E4405F] hover:text-white transition group"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="text-sm group-hover:text-white">Instagram</span>
              </a>
            </div>
            <p className="text-sm mt-4 text-gray-400">
              #SvenskAlgeriska #Malmö
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Svensk Algeriska Föreningen. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}