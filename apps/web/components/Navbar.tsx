'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Hem' },
  { href: '/about', label: 'Om Oss' },
  { href: '/events', label: 'Evenemang' },
  { href: '/culture', label: 'Kultur' },
  { href: '/contact', label: 'Kontakt' },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthenticated = !loading && user !== null;

  const handleLogout = async () => {
    try {
      await logout();
      // Force reload to clear all state
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
      window.location.href = '/';
    }
  };

  const getUserArea = () => {
    if (!isAuthenticated) return 'Public';
    if (pathname?.startsWith('/admin')) return 'Admin';
    if (pathname?.startsWith('/member')) return 'Member';
    return 'Public';
  };

  const userArea = getUserArea();

  return (
    <nav className="bg-blue-900 border-b-4 border-yellow-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-yellow-400 transition font-medium ${
                  pathname === item.href ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}

            {!isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-white hover:text-yellow-400 transition font-medium"
                >
                  Logga in
                </Link>
                <Link
                  href="/register"
                  className="bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-lg hover:bg-yellow-400 transition"
                >
                  Bli Medlem
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {user?.role === 'ADMIN' && (
                  <Link
                    href="/admin/dashboard"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname?.startsWith('/admin') 
                        ? 'bg-yellow-500 text-blue-900' 
                        : 'bg-yellow-500/80 hover:bg-yellow-500 text-blue-900'
                    } transition`}
                  >
                    Admin
                  </Link>
                )}
                <span className="text-white text-sm hidden lg:block">
                  {user?.name}
                </span>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800"
                  onClick={handleLogout}
                >
                  Logga ut
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-yellow-400 transition p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blue-800">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white hover:text-yellow-400 transition font-medium py-2 ${
                    pathname === item.href ? 'text-yellow-400' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {!isAuthenticated ? (
                <div className="pt-2 border-t border-blue-800 flex flex-col gap-2">
                  <Link
                    href="/login"
                    className="text-white hover:text-yellow-400 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Logga in
                  </Link>
                  <Link
                    href="/register"
                    className="bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-lg hover:bg-yellow-400 transition text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Bli Medlem
                  </Link>
                </div>
              ) : (
                <div className="pt-2 border-t border-blue-800">
                  <p className="text-white text-sm py-1">Inloggad som: {user?.name}</p>
                  {user?.role === 'ADMIN' && (
                    <Link
                      href="/admin/dashboard"
                      className="block text-yellow-400 hover:text-yellow-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="text-white hover:text-yellow-400 py-2 w-full text-left"
                  >
                    Logga ut
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}