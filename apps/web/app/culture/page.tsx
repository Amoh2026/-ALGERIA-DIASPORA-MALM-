'use client';

import React from 'react';
import Image from 'next/image';

// Define your image data (Make sure these files exist in your /public/images/ folder)
const cultureGallery = [
  {
    src: '/images/Folketspark-activity.png',
    alt: 'Kulturfestival i Folkets Park',
    title: 'Mångkulturell Festival i Folkets Park',
    description: 'Föreningen deltar aktivt i lokala mångkulturella firanden i Malmö för att visa upp den algeriska kulturen, hantverket och gemenskapen.'
  },
  {
    src: '/images/BonBon-Land.png',
    alt: 'Ungdomsresa till BonBon-Land',
    title: 'Familje- & Ungdomsresor',
    description: 'Vi organiserar regelbundet gemensamma utflykter och nöjesresor för barn, ungdomar och familjer för att stärka samhörigheten.'
  },
  {
    src: '/images/Ambassador.png',
    alt: 'Möte med ambassadören och ungdomar',
    title: 'Diplomatiskt & Kulturellt Utbyte',
    description: 'Ungdomar och föreningsrepresentanter i givande dialoger med den algeriska ambassadören för att främja kulturella band.'
  },
  {
    src: '/images/Politic.png',
    alt: 'Engagemang i samhällsfrågor',
    title: 'Samhällsengagemang & Samverkan',
    description: 'Representanter från föreningen deltar i civilsamhällesdialoger och politiska möten för att representera vårt nätverk.'
  },
  {
    src: '/images/BassUngdomar.png',
    alt: 'Bussresa över Öresundsbron',
    title: 'Gemensamma Utflykter',
    description: 'Glada miner på väg till gemensamma aktiviteter tvärs över regionen och grannländerna.'
  },
  {
    src: '/images/SverigesNationaldag.png',
    alt: 'Firande av Sveriges Nationaldag',
    title: 'Sveriges Nationaldag – 6 Juni',
    description: 'Vi firar Sveriges nationaldag och lyfter den stolta vänskapen mellan det svenska och algeriska folket.'
  }
];

export default function KulturPage() {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen">
      
      {/* ===== HERO SECTION WITH ALGERCOMBINE IMAGE AND GOLD WAVE ===== */}
      <section className="relative min-h-125 md:min-h-150 lg:min-h-175 flex items-start justify-center text-white overflow-hidden pt-8 md:pt-12 lg:pt-16">
        
        {/* Background Image - AlgerCombine.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/AlgerCombine.png"
            alt="Algerisk Kultur"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content - Text on the image */}
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Kultur
            </h1>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Algerisk Kultur i Sverige
            </h2>
            <p className="text-xl text-white/95 leading-relaxed font-medium max-w-3xl mx-auto">
              Upptäck den rika algeriska kulturen genom musik, mat, konst och traditioner. 
              Här är några av våra senaste evenemang och aktiviteter som visar vår stolta gemenskap.
            </p>
          </div>
        </div>

        {/* ===== GOLD WAVE AT BOTTOM OF THE IMAGE ===== */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0 60L60 75C120 90 240 120 360 120C480 120 600 90 720 75C840 60 960 60 1080 75C1200 90 1320 120 1380 120L1440 120V180H0V60Z" 
              fill="#C9A84C"
            />
          </svg>
        </div>

        {/* ===== SOFT FADE GRADIENT TO BLEND WITH WHITE PAGE ===== */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Våra Aktiviteter</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Genom fest, resor, dialog och engagemang bygger vi broar mellan Malmö och Algeriet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureGallery.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden border border-gray-100"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text Container */}
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-blue-900 leading-tight">
                      {item.title}
                    </h3>
                    <div className="w-2 h-2 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed grow">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                    <span className="text-xs font-medium text-blue-800 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      Läs mer →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CONTACT FORM SECTION - READABLE TEXT --- */}
        <div className="relative rounded-3xl overflow-hidden mb-16 min-h-150">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Kontakt.png"
              alt="Kontakta oss"
              fill
              className="object-cover"
              priority
            />
            {/* Darker overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Subtle gold glow */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-800/30 via-yellow-700/20 to-amber-600/30"></div>
          </div>

          {/* Form Content */}
          <div className="relative z-10 px-6 py-16 md:py-20 lg:py-24">
            <div className="max-w-3xl mx-auto">
              {/* Gold decorative divider */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-0.5 bg-linear-to-r from-transparent to-amber-300"></div>
                  <span className="text-4xl drop-shadow-lg">✨</span>
                  <div className="w-16 h-0.5 bg-linear-to-l from-transparent to-amber-300"></div>
                </div>
              </div>

              <div className="text-center mb-10">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                  Kontakta Oss
                </h3>
                <div className="w-24 h-1 bg-linear-to-r from-amber-200 via-yellow-400 to-amber-200 mx-auto rounded-full mb-4"></div>
                <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.5)' }}>
                  Har du frågor eller vill du veta mer om vår verksamhet? 
                  Tveka inte att höra av dig till oss!
                </p>
              </div>

              {/* Transparent form with readable inputs */}
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm uppercase tracking-wider" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                      Förnamn
                    </label>
                    <input
                      type="text"
                      placeholder="Ditt förnamn"
                      className="w-full px-5 py-3.5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-white/20 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm uppercase tracking-wider" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                      Efternamn
                    </label>
                    <input
                      type="text"
                      placeholder="Ditt efternamn"
                      className="w-full px-5 py-3.5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-white/20 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-white font-medium mb-2 text-sm uppercase tracking-wider" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                    E-postadress
                  </label>
                  <input
                    type="email"
                    placeholder="din.epost@exempel.se"
                    className="w-full px-5 py-3.5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-white/20 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-white font-medium mb-2 text-sm uppercase tracking-wider" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                    Ämne
                  </label>
                  <input
                    type="text"
                    placeholder="Vad gäller ditt meddelande?"
                    className="w-full px-5 py-3.5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-white/20 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-white font-medium mb-2 text-sm uppercase tracking-wider" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                    Meddelande
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Skriv ditt meddelande här..."
                    className="w-full px-5 py-3.5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-white/20 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                {/* Gold Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-8 text-lg font-bold text-white rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #B8860B 0%, #D4A017 25%, #FFD700 50%, #D4A017 75%, #B8860B 100%)',
                    backgroundSize: '200% 200%',
                    boxShadow: '0 8px 32px rgba(184, 134, 11, 0.4), inset 0 1px 0 rgba(255, 215, 0, 0.4)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>Skicka Meddelande</span>
                    <span className="text-xl">✨</span>
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </button>

                {/* Gold decorative line */}
                <div className="mt-6 flex justify-center">
                  <div className="w-32 h-px bg-linear-to-r from-transparent via-amber-300/50 to-transparent"></div>
                </div>
              </form>

              {/* Contact info - readable badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-white text-sm">
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <span className="text-amber-300">📧</span>
                  <span className="drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>info@algeriskaföreningen.se</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <span className="text-amber-300">📞</span>
                  <span className="drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>+46 70 123 45 67</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <span className="text-amber-300">📍</span>
                  <span className="drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>Malmö, Sverige</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM CTA SECTION --- */}
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
          <div className="flex justify-center space-x-4 mb-4">
            <span className="text-3xl">🇩🇿</span>
            <span className="text-3xl">🤝</span>
            <span className="text-3xl">🇸🇪</span>
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Vill du vara med?</h3>
          <p className="text-gray-600 mb-4">
            Vi välkomnar alla som vill vara en del av vår gemenskap. Följ oss på Facebook för kommande evenemang och aktiviteter.
          </p>
          <a 
            href="https://www.facebook.com/p/Svensk-Algeriska-F%C3%B6reningen-100080588589924/"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg inline-block"
          >
            Följ oss på Facebook
          </a>
        </div>
      </div>
    </div>
  );
}