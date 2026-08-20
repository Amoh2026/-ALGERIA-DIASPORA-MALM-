import React from 'react';

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
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      
      {/* --- ORIGINAL HEADER SECTION --- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Kultur</h1>
        <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Algerisk Kultur i Sverige</h2>
          <p className="text-gray-700 leading-relaxed">
            Upptäck den rika algeriska kulturen genom musik, mat, konst och traditioner. 
            Här är några av våra senaste evenemang och aktiviteter som visar vår stolta gemenskap.
          </p>
        </div>
      </div>

      {/* --- NEW BEAUTIFUL GALLERY SECTION --- */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-blue-900 mb-2">Våra Aktiviteter</h3>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900 leading-tight">
                    {item.title}
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
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
        <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
          Följ oss på Facebook
        </button>
      </div>

    </div>
  );
}