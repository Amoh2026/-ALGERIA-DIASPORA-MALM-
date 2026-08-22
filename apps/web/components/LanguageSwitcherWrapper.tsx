'use client';

import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export function LanguageSwitcherWrapper() {
  const pathname = usePathname();
  
  // You can hide language switcher on certain pages if needed
  const hideOnPaths = ['/login', '/register'];
  if (hideOnPaths.some(path => pathname?.startsWith(path))) {
    return null;
  }

  return <LanguageSwitcher />;
}