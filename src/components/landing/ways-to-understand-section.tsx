'use client';
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

const itemLabels = {
      "cartography": "item_cartography",
      "real_locations": "item_real_locations",
      "reconstructions": "item_reconstructions",
      "landscapes": "item_landscapes"
    };

const carouselItemData = [
  { id: 'carousel-historical-cartography', key: 'cartography' },
  { id: 'carousel-real-locations', key: 'real_locations' },
  { id: 'carousel-3d-recons', key: 'reconstructions' },
  { id: 'gallery-galilee', key: 'landscapes' },
];

export function WaysToUnderstandSection() {
  const t = useTranslations('WaysToUnderstandSection');
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id="visual-content-types"
      className="py-16 sm:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">
            {t('prelude')}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t('title')}
          </h2>
        </div>

        <div className="mt-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {carouselItemData.map((item, index) => {
                const imageData = PlaceHolderImages.find(
                  (img) => img.id === item.id
                );
                if (!imageData) return null;
                const labelKey = itemLabels[item.key as keyof typeof itemLabels];
                return (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1 group">
                      <Card className="overflow-hidden rounded-2xl shadow-lg border-none">
                        <CardContent className="relative aspect-[3/2] p-0">
                          <Image
                            src={imageData.imageUrl}
                            alt={t(labelKey)}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={imageData.imageHint}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg" />
                          <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-lg font-semibold text-white tracking-wider font-headline">
                              {t(labelKey).toUpperCase()}
                            </h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          <div className="mt-8 flex justify-center items-center gap-3">
            {Array.from({ length: count }).map((_, i) => (
                <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                    'h-2.5 w-2.5 rounded-full transition-all duration-300',
                    i === current
                    ? 'w-10 bg-primary'
                    : 'bg-foreground/20 hover:bg-foreground/30'
                )}
                aria-label={t('slide_aria', {number: i + 1})}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
