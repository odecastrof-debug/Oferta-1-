'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const carouselItems = [
  { id: 'carousel-artistic-illustrations', title: 'Artistic Illustrations' },
  { id: 'carousel-historical-cartography', title: 'Historical Cartography' },
  { id: 'carousel-real-locations', title: 'Real Locations' },
  { id: 'carousel-3d-recons', title: '3D Recons' },
];

export function WaysToUnderstandSection() {
  return (
    <section id="visual-content-types" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">
            Inside the material
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Different types of visual content
          </h2>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {carouselItems.map((item, index) => {
                const imageData = PlaceHolderImages.find(img => img.id === item.id);
                if (!imageData) return null;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-lg">
                        <CardContent className="relative aspect-[4/3] p-0">
                          <Image
                            src={imageData.imageUrl}
                            alt={imageData.description}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            data-ai-hint={imageData.imageHint}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-lg font-semibold text-white tracking-wider">{item.title.toUpperCase()}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
