'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image - adjusted to fit and show full image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/OmOss.png"
          alt="Om Oss"
          fill
          className="object-contain"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - Text directly on the image */}
      <div className="container mx-auto px-4 py-4 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">
          Om Oss
        </h1>
        
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
            Vår Historia
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-3 text-white/95 font-medium">
            Svensk Algeriska Föreningen grundades med syftet att förena svenska och algeriska kulturer i Malmö. 
            Föreningen har sedan dess varit en viktig mötesplats för den algeriska gemenskapen i Sverige.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2 drop-shadow-lg">
            Vårt Uppdrag
          </h2>
          <p className="text-xl md:text-2xl text-white/95 font-medium mb-2">
            Vi arbetar för att:
          </p>
          <ul className="list-disc list-inside text-xl md:text-2xl text-white/95 font-medium space-y-1">
            <li>Skapa gemenskap bland algerier i Malmö</li>
            <li>Främja kulturellt utbyte mellan Sverige och Algeriet</li>
            <li>Bevara och dela algeriska traditioner och kultur</li>
            <li>Stödja integration och samarbete i det svenska samhället</li>
            <li>Organisera evenemang och aktiviteter för alla åldrar</li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-1 drop-shadow-lg">
            Våra Värderingar
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-0">
            <div className="p-4 rounded-lg text-center">
              <div className="text-5xl mb-2">🤝</div>
              <h3 className="font-bold text-2xl text-white drop-shadow-lg">Gemenskap</h3>
              <p className="text-lg text-white/90 font-medium">Vi bygger starka relationer och en inkluderande miljö för alla medlemmar.</p>
            </div>
            <div className="p-4 rounded-lg text-center">
              <div className="text-5xl mb-2">🌍</div>
              <h3 className="font-bold text-2xl text-white drop-shadow-lg">Kultur</h3>
              <p className="text-lg text-white/90 font-medium">Vi bevarar och delar vårt rika kulturarv med glädje och stolthet.</p>
            </div>
            <div className="p-4 rounded-lg text-center">
              <div className="text-5xl mb-2">💪</div>
              <h3 className="font-bold text-2xl text-white drop-shadow-lg">Engagemang</h3>
              <p className="text-lg text-white/90 font-medium">Vi arbetar för alla medlemmar och strävar efter att göra skillnad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}