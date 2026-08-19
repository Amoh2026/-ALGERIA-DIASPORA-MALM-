"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function TopBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let position = 0;
    const speed = 0.8;

    const scroll = () => {
      position += speed;
      if (position >= scrollContainer.scrollWidth / 2) {
        position = 0;
      }
      scrollContainer.scrollLeft = position;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      className="w-full" 
      style={{ 
        backgroundColor: '#86efac',
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
          
          {/* SCROLLING TEXT - CENTER */}
          <div className="flex-1 overflow-hidden mx-4">
            <div className="scrolling-wrapper">
              <div 
                ref={scrollRef}
                className="scrolling-text-content"
                style={{ 
                  display: 'flex',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  gap: '0'
                }}
              >
                {/* Duplicate content for seamless scroll */}
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center" style={{ flexShrink: 0 }}>
                    <span className="text-lg font-bold text-blue-900 whitespace-nowrap" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>
                      Svensk Algeriska Föreningen &nbsp;•&nbsp; 
                    </span>
                    <span className="text-base font-bold text-yellow-600 whitespace-nowrap" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)', fontFamily: '"Traditional Arabic", "Arabic Typesetting", Arial, sans-serif' }}>
                      الجمعية الجزائرية السويدية &nbsp;•&nbsp;
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* RIGHT LOGO */}
          <Link href="/" className="flex-shrink-0 hover:opacity-80 transition hidden sm:block">
            <img
              src="/images/svensk-algeriska-foreningen-logo.png"
              alt="Svensk Algeriska Föreningen"
              style={{ height: '50px', width: 'auto' }}
            />
          </Link>
          
        </div>
      </div>

      <style>{`
        .scrolling-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .scrolling-text-content {
          display: inline-flex;
          animation: scroll-left 25s linear infinite;
          white-space: nowrap;
        }
        .scrolling-text-content:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}