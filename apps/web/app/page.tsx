import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* ============================================ */}
      {/* RED BAR WITH 2 LOGOS + SCROLLING TEXT */}
      {/* ============================================ */}
      <div 
        className="w-full" 
        style={{ 
          backgroundColor: '#f87171',
          borderBottom: '6px solid #e8b830'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2" style={{ height: '70px' }}>
            
            {/* LEFT LOGO */}
            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition">
              <img
                src="/images/svensk-algeriska-foreningen-logo.png"
                alt="Svensk Algeriska Föreningen"
                style={{ height: '50px', width: 'auto' }}
              />
            </Link>
            
            {/* SCROLLING TEXT - CENTER with BETTER COLORS */}
            <div className="flex-1 overflow-hidden mx-4">
              <div className="scrolling-wrapper">
                <div className="scrolling-text-content">
                  {/* Swedish text - WHITE for better contrast */}
                  <span className="text-lg font-bold text-white whitespace-nowrap" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                    Svensk Algeriska Föreningen &nbsp;•&nbsp; 
                  </span>
                  {/* Arabic text - YELLOW for contrast */}
                  <span className="text-base font-bold text-yellow-300 whitespace-nowrap" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)', fontFamily: '"Traditional Arabic", "Arabic Typesetting", Arial, sans-serif' }}>
                    الجمعية الجزائرية السويدية &nbsp;•&nbsp;
                  </span>
                  {/* Swedish text - WHITE */}
                  <span className="text-lg font-bold text-white whitespace-nowrap" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                    Svensk Algeriska Föreningen &nbsp;•&nbsp; 
                  </span>
                  {/* Arabic text - YELLOW */}
                  <span className="text-base font-bold text-yellow-300 whitespace-nowrap" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)', fontFamily: '"Traditional Arabic", "Arabic Typesetting", Arial, sans-serif' }}>
                    الجمعية الجزائرية السويدية &nbsp;•&nbsp;
                  </span>
                  {/* Swedish text - WHITE */}
                  <span className="text-lg font-bold text-white whitespace-nowrap" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                    Svensk Algeriska Föreningen &nbsp;•&nbsp; 
                  </span>
                  {/* Arabic text - YELLOW */}
                  <span className="text-base font-bold text-yellow-300 whitespace-nowrap" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)', fontFamily: '"Traditional Arabic", "Arabic Typesetting", Arial, sans-serif' }}>
                    الجمعية الجزائرية السويدية &nbsp;•&nbsp;
                  </span>
                </div>
              </div>
            </div>
            
            {/* RIGHT LOGO */}
            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition">
              <img
                src="/images/svensk-algeriska-foreningen-logo.png"
                alt="Svensk Algeriska Föreningen"
                style={{ height: '50px', width: 'auto' }}
              />
            </Link>
            
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* ORIGINAL NAVIGATION BAR */}
      {/* ============================================ */}
      <nav className="bg-blue-900 border-b-4 border-yellow-500 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Left side - Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <img
                src="/images/svensk-algeriska-foreningen-logo.png"
                alt="Svensk Algeriska Föreningen"
                style={{ height: '40px', width: 'auto' }}
              />
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg leading-tight">
                  Svensk Algeriska Föreningen
                </span>
                <span className="text-yellow-400 text-sm block" style={{ fontFamily: '"Traditional Arabic", "Arabic Typesetting", Arial, sans-serif' }}>
                  الجمعية الجزائرية السويدية
                </span>
              </div>
            </Link>
            
            {/* Center - Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-white hover:text-yellow-400 transition font-medium">
                Hem
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-400 transition font-medium">
                Om Oss
              </Link>
              <Link href="/events" className="text-white hover:text-yellow-400 transition font-medium">
                Evenemang
              </Link>
              <Link href="/culture" className="text-white hover:text-yellow-400 transition font-medium">
                Kultur
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 transition font-medium">
                Kontakt
              </Link>
            </div>
            
            {/* Right side - Login/Register */}
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-white hover:text-yellow-400 transition font-medium">
                Logga in
              </Link>
              <Link href="/register" className="bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-lg hover:bg-yellow-400 transition">
                Bli Medlem
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Välkommen till Svensk Algeriska Föreningen
          </h1>
          <p className="text-xl mb-8">Förenar Sverige och Algeriet sedan 1975</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/register" className="bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
              Bli Medlem
            </Link>
            <Link href="/about" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Läs Mer
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-xl font-bold text-blue-900">Kultur</h3>
            <p className="text-gray-600">Upptäck algerisk kultur</p>
            <Link href="/culture" className="inline-block mt-3 text-yellow-600 hover:text-yellow-700 font-medium">
              Läs mer →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-xl font-bold text-blue-900">Evenemang</h3>
            <p className="text-gray-600">Delta i våra evenemang</p>
            <Link href="/events" className="inline-block mt-3 text-yellow-600 hover:text-yellow-700 font-medium">
              Läs mer →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-bold text-blue-900">Gemenskap</h3>
            <p className="text-gray-600">Träffa andra medlemmar</p>
            <Link href="/about" className="inline-block mt-3 text-yellow-600 hover:text-yellow-700 font-medium">
              Läs mer →
            </Link>
          </div>
        </div>
      </main>

      {/* CSS for Scrolling Text */}
      <style>{`
        .scrolling-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .scrolling-text-content {
          display: inline-block;
          animation: scroll-left 20s linear infinite;
          white-space: nowrap;
        }

        .scrolling-text-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Hide right logo on mobile */
        @media (max-width: 768px) {
          .flex.items-center.justify-between > :last-child {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
