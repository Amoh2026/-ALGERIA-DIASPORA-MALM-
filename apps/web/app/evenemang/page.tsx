import React from 'react';
import Image from 'next/image';

export default function EvenemangPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Evenemang.png"
          alt="Evenemang"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - Text directly on the image */}
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-10 text-white drop-shadow-lg">
          Evenemang
        </h1>
        
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Kommande Aktiviteter
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-6 text-white/95 font-medium">
            Här hittar du alla våra kommande evenemang, fester och kulturella sammankomster. 
            Vi återkommer snart med uppdaterade datum!
          </p>
          
          <div className="border-t border-white/20 pt-6 mt-4">
            <p className="text-xl text-white/90 font-medium italic">
              Inga evenemang inbokade just nu. Följ oss på Facebook för uppdateringar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}