import Link from 'next/link';
import Image from 'next/image';
import { Building2, Landmark, Umbrella, Flag, Globe, Heart, Handshake } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[650px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image - Öresundsbron */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Oresundsbron.png"
            alt="Öresundsbron - Bridge between Sweden and Denmark"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-700/75"></div>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* LEFT - Makam Chahid */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-500/50">
                  <Image
                    src="/images/Makam-Chahid.png"
                    alt="Makam Chahid"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🇩🇿 Algeriet
                </div>
              </div>
              <h3 className="text-lg font-bold mt-3 text-yellow-300">Makam Chahid</h3>
              <p className="text-xs text-white/70">Algeriets martyrmonument</p>
            </div>

            {/* CENTER - Title */}
            <div className="text-center py-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-yellow-500/50 hidden sm:block"></div>
                <span className="text-2xl text-yellow-400">✦</span>
                <div className="h-px w-8 bg-yellow-500/50 hidden sm:block"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                🇩🇿 Svensk Algeriska Föreningen
              </h1>
              <p className="text-lg md:text-xl mt-2 text-yellow-300 font-light">
                Malmö — En stad av broar och kulturer
              </p>
              <p className="text-base text-white/80 mt-1">
                Förenar Sverige och Algeriet sedan 1975
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-4">
                <Link href="/register" className="bg-yellow-500 text-blue-900 font-bold px-6 py-2.5 rounded-lg hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg text-sm">
                  Bli Medlem
                </Link>
                <Link href="/about" className="border-2 border-white/30 text-white px-6 py-2.5 rounded-lg hover:bg-white/10 transition transform hover:scale-105 text-sm">
                  Läs Mer
                </Link>
              </div>
            </div>

            {/* RIGHT - Turning Torso */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-blue-400/50">
                  <Image
                    src="/images/Turning-Torso-Malmö.png"
                    alt="Turning Torso"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -left-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🇸🇪 Sverige
                </div>
              </div>
              <h3 className="text-lg font-bold mt-3 text-blue-300">Turning Torso</h3>
              <p className="text-xs text-white/70">Malmös ikoniska landmärke</p>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L60 50C120 60 240 80 360 80C480 80 600 60 720 50C840 40 960 40 1080 50C1200 60 1320 80 1380 80L1440 80V120H0V40Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ===== MALMÖ INTRO ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              🌉 Malmö — En stad av broar och kulturer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-3xl mx-auto">
              Malmö är en av Sveriges mest vibrerande och mångsidiga städer, belägen i södra Skåne. 
              Med sin rika historia, moderna arkitektur och vackra kustlinje har Malmö blivit ett hem 
              för människor från hela världen — inklusive en blomstrande algerisk gemenskap.
            </p>
          </div>
        </div>
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

      {/* ===== SAF INTRODUCTION ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                🇩🇿 Svensk Algeriska Föreningen i Malmö
              </h2>
              <p className="text-xl text-gray-600">En aktiv mötesplats för algerier i Malmö</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Svensk-Algeriska Föreningen i Malmö (SAF)</strong> är en aktiv förening 
                  som samlar algerier och personer med anknytning till Algeriet som bor i Malmö och närområdet.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Föreningen arbetar för att skapa gemenskap, främja det kulturella utbytet och 
                  ge medlemmarna möjlighet att mötas, samarbeta och delta i olika aktiviteter i Malmö.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Föreningen är en del av det lokala föreningslivet och deltar i olika aktiviteter 
                  tillsammans med andra föreningar och organisationer i Malmö, bland annat 
                  <strong> ABF </strong> och andra lokala samarbetspartners.
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Oresundsbron.png"
                  alt="Öresundsbron - Connecting Sweden and Denmark"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-4xl mb-2">🇩🇿</div>
                    <h3 className="text-2xl font-bold">Välkommen till SAF</h3>
                    <p className="text-white/90">En gemenskap där algerisk kultur och svensk vardag möts.</p>
                  </div>
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
            
            {/* Kontakt med Ambassaden - With Link */}
            <a
              href="https://www.embalgeria.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center transform hover:-translate-y-1 block"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Kontakt med Ambassaden</h3>
              <p className="text-gray-600 text-sm">
                Nära samarbete med <strong>Algeriets ambassad i Stockholm</strong>.
                Regelbundna besök i Malmö för konsulär hjälp med pass, visum och dokument.
              </p>
              <span className="inline-block mt-3 text-xs text-blue-600 font-medium">
                Besök hemsidan →
              </span>
            </a>

            {/* Internationellt Nätverk */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Internationellt Nätverk</h3>
              <p className="text-gray-600 text-sm">Samarbete med algeriska föreningar i Skandinavien och Europa.</p>
            </div>

            {/* Ungdomsgrupp */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Ungdomsgrupp</h3>
              <p className="text-gray-600 text-sm">Aktiv tonårsgrupp som organiserar evenemang.</p>
            </div>

            {/* Lokalt Samarbete */}
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

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-3xl mx-auto text-center bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Bli en del av SAF
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Svensk-Algeriska Föreningen i Malmö – gemenskap, kultur och samarbete.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/register" className="bg-blue-900 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition transform hover:scale-105 shadow-lg">
                Bli Medlem idag
              </Link>
              <Link href="/contact" className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition transform hover:scale-105">
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white/60 py-8 text-center text-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-white/80 font-medium">
            🇩🇿 Svensk-Algeriska Föreningen i Malmö – gemenskap, kultur och samarbete.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Svensk Algeriska Föreningen. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    </div>
  );
}