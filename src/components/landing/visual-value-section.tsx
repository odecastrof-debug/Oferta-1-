'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslations } from 'next-intl';

const features = [
      "feature1",
      "feature2",
      "feature3",
      "feature4",
      "feature5",
      "feature6",
      "feature7"
    ];

export function VisualValueSection() {
  const t = useTranslations('VisualValueSection');
  const visualImage = PlaceHolderImages.find(img => img.id === 'visual-value-image');

  return (
    <section id="visual-value" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('description')}
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{t(feature)}</span>
                </li>
              ))}
            </ul>
            <Badge className="mt-8 text-base py-2 px-4 bg-accent text-accent-foreground">
              {t('badge')}
            </Badge>
          </div>
          <div className="flex justify-center">
            {visualImage && (
                <Card className="overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-primary/20">
                    <CardContent className="p-0">
                        <Image
                            src={visualImage.imageUrl}
                            alt={visualImage.description}
                            width={500}
                            height={700}
                            className="object-cover"
                            data-ai-hint={visualImage.imageHint}
                        />
                    </CardContent>
                </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
