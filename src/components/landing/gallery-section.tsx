'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslations } from 'next-intl';

const galleryImageKeys = ['eden', 'red_sea', 'jerusalem', 'jordan_river', 'galilee'];

export function GallerySection() {
  const t = useTranslations('Gallery');

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {galleryImageKeys.map((key) => {
            const imageData = PlaceHolderImages.find(img => img.id === `gallery-${key.replace('_','-')}`);
            if (!imageData) return null;
            return (
              <Card key={key} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={imageData.imageUrl}
                    alt={t(`items.${key}.label`)}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 hover:scale-105"
                    data-ai-hint={imageData.imageHint}
                  />
                </CardContent>
                <CardFooter className="flex-col items-start p-4">
                  <p className="font-semibold text-foreground">{t(`items.${key}.label`)}</p>
                  <p className="text-sm text-muted-foreground">{t(`items.${key}.reference`)}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-foreground">
            <p>{t('quote')}</p>
            <footer className="mt-2 text-base not-italic text-muted-foreground">{t('quote_source')}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
