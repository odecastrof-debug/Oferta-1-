'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function CtaButtonSection() {
  const t = useTranslations('CtaButtonSection');
  return (
    <section className="bg-background pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Button asChild size="lg" className="px-8 py-7 text-lg motion-safe:animate-pulse-premium">
          <Link href="https://pay.hotmart.com/Y104372787M?checkoutMode=10">
            {t('cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          {t('subtext')}
        </p>
      </div>
    </section>
  );
}