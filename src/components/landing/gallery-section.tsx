'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslations } from 'next-intl';

const galleryItems = {
      "eden": { "labelKey": "item_eden_label", "referenceKey": "item_eden_reference" },
      "red_sea": { "labelKey": "item_red_sea_label", "referenceKey": "item_red_sea_reference" },
      "jerusalem": { "labelKey": "item_jerusalem_label", "referenceKey": "item_jerusalem_reference" },
      "jordan_river": { "labelKey": "item_jordan_river_label", "referenceKey": "item_jordan_river_reference" },
      "galilee": { "labelKey": "item_galilee_label", "referenceKey": "item_galilee_reference" }
    };
const galleryImageKeys = Object.keys(galleryItems);


export function GallerySection() {
  const t = useTranslations('GallerySection');
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
            const item = galleryItems[key as keyof typeof galleryItems];
            if (!imageData) return null;
            return (
              <Card key={key} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={imageData.imageUrl}
                    alt={t(item.labelKey)}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 hover:scale-105"
                    data-ai-hint={imageData.imageHint}
                  />
                </CardContent>
                <CardFooter className="flex-col items-start p-4">
                  <p className="font-semibold text-foreground">{t(item.labelKey)}</p>
                  <p className="text-sm text-muted-foreground">{t(item.referenceKey)}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-foreground">
            <p>{t('quote')}</p>
            <footer className="mt-2 text-base not-italic text-muted-foreground">{t('quote_reference')}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
