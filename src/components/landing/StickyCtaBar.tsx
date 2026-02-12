'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function StickyCtaBar() {
  const t = useTranslations('StickyCta');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-t border-border/50 p-4 transition-transform duration-300 ease-in-out',
        'transform',
        isVisible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center sm:items-baseline gap-2 sm:gap-4">
            <span className="text-xl font-bold text-primary">US$5.90</span>
            <span className="hidden sm:inline text-md text-muted-foreground line-through">US$49.99</span>
        </div>
        <Button asChild size="lg" className="shrink-0">
          <Link href="https://pay.hotmart.com/Y104372787M?checkoutMode=10">
            {t('cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
