'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// To let TypeScript know about the ttq object on the window
declare global {
  interface Window {
    ttq?: {
      page: () => void;
    };
  }
}

export function TikTokPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.ttq) {
      window.ttq.page();
    }
  }, [pathname]);

  return null;
}
