'use client';

import { Card } from '@/components/ui/card';
import { Layers, Landmark, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const features = [
    {
      icon: Layers,
      titleKey: "feature1_title",
      descriptionKey: "feature1_description"
    },
    {
      icon: Landmark,
      titleKey: "feature2_title",
      descriptionKey: "feature2_description"
    },
    {
      icon: Globe,
      titleKey: "feature3_title",
      descriptionKey: "feature3_description"
    }
  ];

export function ChallengeSection() {
  const t = useTranslations('ChallengeSection');

  return (
    <section id="detailed-features" className="py-16 sm:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                {t('title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                {t('description')}
            </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.titleKey} className="bg-card border-border/20 p-6 text-left">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                         <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-sm text-muted-foreground">{t(feature.descriptionKey)}</p>
                    </div>
                </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-lg italic text-muted-foreground">{t('quote')}</p>
        </div>

        <div className="mt-20 flex justify-center items-center gap-8">
            <div className="text-right">
                <p className="text-3xl font-bold text-foreground">
                    <span className="text-xl text-muted-foreground line-through mr-2">$49.99</span>
                    <span className="text-primary ml-2">$8.90</span>
                </p>
            </div>
            <Button asChild size="lg" className="px-10 h-14 text-lg font-bold bg-primary hover:bg-primary/90 motion-safe:animate-pulse-premium">
                <Link href="https://pay.hotmart.com/Y104372787M?checkoutMode=10">
                    {t('cta')}
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}