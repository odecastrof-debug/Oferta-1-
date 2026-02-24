'use client';

import React, { useEffect, useState } from 'react';
import { X, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function PromoPopup() {
  const t = useTranslations('PromoPopup');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial trigger: 5 seconds after load
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, []);

  // Recurring trigger: Re-show every 20 seconds after it's hidden
  useEffect(() => {
    let intervalTimer: NodeJS.Timeout;
    
    if (!isVisible) {
      intervalTimer = setTimeout(() => {
        setIsVisible(true);
      }, 20000);
    }

    return () => {
      if (intervalTimer) clearTimeout(intervalTimer);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleLinkClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-[520px] bg-[#11151B] border border-primary/20 rounded-2xl p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="bg-primary/10 p-4 rounded-full mb-6">
            <Gift className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-2xl font-bold text-primary font-headline mb-4">
            {t('title')}
          </h2>

          <div className="relative w-full aspect-[16/9] my-4 rounded-[12px] overflow-hidden shadow-lg border border-white/5">
            <Image
              src="https://i.postimg.cc/JzzqJFFd/Chat-GPT-Image-Feb-24-2026-02-00-34-PM.png"
              alt="Complete Combo Offer"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <p className="text-muted-foreground mb-8">
            {t('description')}
          </p>

          <div className="w-full space-y-4">
             <div className="flex flex-col items-center mb-6">
                <span className="text-muted-foreground line-through text-lg opacity-60">$18.80</span>
                <span className="text-4xl font-bold text-white font-headline">$16.90</span>
             </div>

            <Button
              asChild
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 motion-safe:animate-pulse-premium"
              onClick={handleLinkClick}
            >
              <Link href="https://pay.hotmart.com/O104611346K?checkoutMode=10">
                {t('cta')}
              </Link>
            </Button>
            
            <button
              onClick={handleClose}
              className="text-sm text-muted-foreground hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
