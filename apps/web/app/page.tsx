'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Landmark, Umbrella, Flag, Globe, Heart, Handshake } from 'lucide-react';
import { t, getCurrentLanguage } from '@/lib/translations';

export default function Home() {
  const [lang, setLang] = useState('sv');

  useEffect(() => {
    setLang(getCurrentLanguage());
  }, []);

  const tr = (key: string) => t(lang, key, 'home');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-162.5 md:min-h-187.5 lg:min-h-212.5 flex items-start justify-center text-white overflow-hidden pt-8 md:pt-12 lg:pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage.png"
            alt={tr('heroTitle')}
            fill
            className="object-contain object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 drop-shadow-lg">
              {tr('heroTitle')}
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {tr('heroSubtitle')}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              {tr('heroDescription')}
            </p>
          </div>
        </div>

        {/* Gold Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path 
              d="M0 60L60 70C120 80 240 100 360 100C480 100 600 80 720 70C840 60 960 60 1080 70C1200 80 1320 100 1380 100L1440 100V120H0V60Z" 
              fill="#C9A84C"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Malmö Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            {tr('discoverMalmo')}
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
                  <Building2 className="h-5 w-5" /> {tr('turningTorso')}
                </h3>
                <p className="text-gray-600">{tr('turningTorsoDesc')}</p>
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
                  <Landmark className="h-5 w-5" /> {tr('stortorget')}
                </h3>
                <p className="text-gray-600">{tr('stortorgetDesc')}</p>
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
                  <Umbrella className="h-5 w-5" /> {tr('ribersborg')}
                </h3>
                <p className="text-gray-600">{tr('ribersborgDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAF Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                {tr('associationTitle')}
              </h2>
              <p className="text-xl text-gray-600">{tr('associationSubtitle')}</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-125 md:min-h-137.5">
              <Image
                src="/images/Oresundsbron.png"
                alt="Öresundsbron"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              
              <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-125 md:min-h-137.5">
                <div className="max-w-3xl">
                  <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                    <strong className="text-white">{tr('associationIntro')}</strong>
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    {tr('associationWork')}
                  </p>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mt-4">
                    {tr('associationPartners')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            {tr('ourActivities')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <a href="https://www.embalgeria.se/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center transform hover:-translate-y-1 block">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{tr('embassy')}</h3>
              <p className="text-gray-600 text-sm">
                {tr('embassyDesc')}
              </p>
              <span className="inline-block mt-3 text-xs text-blue-600 font-medium">{tr('embassyLink')}</span>
            </a>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{tr('network')}</h3>
              <p className="text-gray-600 text-sm">{tr('networkDesc')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{tr('youth')}</h3>
              <p className="text-gray-600 text-sm">{tr('youthDesc')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{tr('local')}</h3>
              <p className="text-gray-600 text-sm">{tr('localDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden min-h-175 md:min-h-200 lg:min-h-225 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/enDelMed.png"
            alt={tr('callToAction')}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl md:text-8xl mb-6">🌟</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {tr('callToAction')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              {tr('callToActionDesc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/medlemsregistrering" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-10 py-5 rounded-lg text-xl transition transform hover:scale-105 shadow-lg inline-block"
              >
                {tr('joinNow')}
              </Link>
              <Link 
                href="/contact" 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white px-10 py-5 rounded-lg text-xl transition transform hover:scale-105 inline-block"
              >
                {tr('contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white/60 py-8 text-center text-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-white/80 font-medium">
            🇩🇿 {tr('footerTagline')}
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} {tr('footerCopyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}