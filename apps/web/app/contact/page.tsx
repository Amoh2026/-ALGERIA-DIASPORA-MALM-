'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Kontakt.png"
          alt="Kontakt"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - Just text on the image */}
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-10 text-white drop-shadow-lg">
          Kontakt
        </h1>
        
        <div className="text-white">
          <p className="text-xl md:text-2xl text-white/95 font-medium mb-8 text-center">
            Har du frågor? Tveka inte att kontakta oss!
          </p>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-white/80" />
              <p className="text-xl md:text-2xl text-white/95 font-medium">
                <strong className="text-white">Email:</strong> info@algeriskaföreningen.se
              </p>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-white/80" />
              <p className="text-xl md:text-2xl text-white/95 font-medium">
                <strong className="text-white">Telefon:</strong> +46 70 123 45 67
              </p>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-white/80" />
              <p className="text-xl md:text-2xl text-white/95 font-medium">
                <strong className="text-white">Adress:</strong> Malmö, Sverige
              </p>
            </div>
          </div>

          {/* Social Media Section - Just text */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg">
              🌟 Följ oss på sociala medier
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.facebook.com/p/Svensk-Algeriska-F%C3%B6reningen-100080588589924/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl text-white/95 font-medium hover:text-white transition"
              >
                Facebook - Svensk Algeriska Föreningen
              </a>
              
              <span className="text-white/50 text-2xl hidden sm:inline">|</span>
              
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl text-white/95 font-medium hover:text-white transition"
              >
                Instagram - @svenskalgeriska
              </a>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 font-medium mt-6 drop-shadow-lg">
              ✅ Följ oss för uppdateringar om evenemang, kultur och gemenskap!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}