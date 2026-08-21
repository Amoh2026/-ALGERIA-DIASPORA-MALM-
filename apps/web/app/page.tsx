import Link from 'next/link';
import Image from 'next/image';
import { Building2, Landmark, Umbrella, Flag, Globe, Heart, Handshake } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* ===== HERO SECTION WITH TEXT AT TOP AND GOLD WAVE AT BOTTOM ===== */}
      <section className="relative min-h-[650px] md:min-h-[750px] lg:min-h-[850px] flex items-start justify-center text-white overflow-hidden pt-8 md:pt-12 lg:pt-16">
        
        {/* Background Image - homepage.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage.png"
            alt="Välkomna till Svensk Algeriska Föreningen i Malmö"
            fill
            className="object-contain object-center"
            priority
          />
          {/* Medium overlay for text readability */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Text content at the top of the image */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 drop-shadow-lg">
              Välkomna till Svensk Algeriska Föreningen i Malmö
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              🌉 Malmö — En stad av broar och kulturer
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Malmö är en av Sveriges mest vibrerande och mångsidiga städer, belägen i södra Skåne. 
              Med sin rika historia, moderna arkitektur och vackra kustlinje har Malmö blivit ett hem 
              för människor från hela världen — inklusive en blomstrande algerisk gemenskap.
            </p>
          </div>
        </div>

        {/* ===== LARGER GOLD WAVE AT BOTTOM ===== */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0 60L60 75C120 90 240 120 360 120C480 120 600 90 720 75C840 60 960 60 1080 75C1200 90 1320 120 1380 120L1440 120V180H0V60Z" 
              fill="#C9A84C"
            />
          </svg>
        </div>

        {/* ===== SOFT FADE GRADIENT TO BLEND WITH WHITE PAGE ===== */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* ===== MALMÖ HIGHLIGHTS ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            🏙️ Upptäck Malmö
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden bg-blue-100">
                <Image
                  src="/images/Turning-Torso-Malmö.png"
                  alt="Turning Torso"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5" /> Turning Torso
                </h3>
                <p className="text-gray-600">Malmös mest ikoniska landmärke i Västra Hamnen.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden bg-yellow-100">
                <Image
                  src="/images/Stortorget.png"
                  alt="Stortorget"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Landmark className="h-5 w-5" /> Stortorget
                </h3>
                <p className="text-gray-600">Malmös äldsta och vackraste torg.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden bg-teal-100">
                <Image
                  src="/images/Beach-Malmö.png"
                  alt="Ribersborg Beach"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Umbrella className="h-5 w-5" /> Ribersborg Beach
                </h3>
                <p className="text-gray-600">"Ribban" - populär strand längs Öresund.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SAF INTRODUCTION - TEXT OVERLAY ON IMAGE ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                🇩🇿 Svensk Algeriska Föreningen i Malmö
              </h2>
              <p className="text-xl text-gray-600">En aktiv mötesplats för algerier i Malmö</p>
            </div>

            {/* Image as background with text overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[500px] md:min-h-[550px]">
              <Image
                src="/images/Oresundsbron.png"
                alt="Öresundsbron - Connecting Sweden and Denmark"
                fill
                className="object-cover"
              />
              {/* Lighter overlay for text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Text content overlaid on image */}
              <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[500px] md:min-h-[550px]">
                <div className="max-w-3xl">
                  <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                    <strong className="text-white">Svensk-Algeriska Föreningen i Malmö (SAF)</strong> är en aktiv förening 
                    som samlar algerier och personer med anknytning till Algeriet som bor i Malmö och närområdet.
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Föreningen arbetar för att skapa gemenskap, främja det kulturella utbytet och 
                    ge medlemmarna möjlighet att mötas, samarbeta och delta i olika aktiviteter i Malmö.
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mt-4">
                    Föreningen är en del av det lokala föreningslivet och deltar i olika aktiviteter 
                    tillsammans med andra föreningar och organisationer i Malmö, bland annat 
                    <strong className="text-white"> ABF</strong> och andra lokala samarbetspartners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">💫 Vår Verksamhet</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <a href="https://www.embalgeria.se/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center transform hover:-translate-y-1 block">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Kontakt med Ambassaden</h3>
              <p className="text-gray-600 text-sm">
                Nära samarbete med <strong>Algeriets ambassad i Stockholm</strong>.
              </p>
              <span className="inline-block mt-3 text-xs text-blue-600 font-medium">Besök hemsidan →</span>
            </a>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Internationellt Nätverk</h3>
              <p className="text-gray-600 text-sm">Samarbete med algeriska föreningar i Skandinavien och Europa.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Ungdomsgrupp</h3>
              <p className="text-gray-600 text-sm">Aktiv tonårsgrupp som organiserar evenemang.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Lokalt Samarbete</h3>
              <p className="text-gray-600 text-sm">Aktivt deltagande i ABF och andra lokala organisationer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION - LARGER BACKGROUND IMAGE ===== */}
      <section className="relative overflow-hidden min-h-[700px] md:min-h-[800px] lg:min-h-[900px] flex items-center">
        {/* Background Image - larger and shows full image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/enDelMed.png"
            alt="Bli en del av SAF"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content directly on the image */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl md:text-8xl mb-6">🌟</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Bli en del av SAF</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">Svensk-Algeriska Föreningen i Malmö – gemenskap, kultur och samarbete.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/medlemsregistrering" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-10 py-5 rounded-lg text-xl transition transform hover:scale-105 shadow-lg inline-block"
              >
                Bli Medlem idag
              </Link>
              <Link 
                href="/contact" 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white px-10 py-5 rounded-lg text-xl transition transform hover:scale-105 inline-block"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white/60 py-8 text-center text-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-white/80 font-medium">🇩🇿 Svensk-Algeriska Föreningen i Malmö – gemenskap, kultur och samarbete.</p>
          <p className="mt-2">© {new Date().getFullYear()} Svensk Algeriska Föreningen. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    </div>
  );
}