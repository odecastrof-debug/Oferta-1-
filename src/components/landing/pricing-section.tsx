'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

const comparisonItems = [
  { labelKey: "comparison1_label", valueKey: "comparison1_value" },
  { labelKey: "comparison2_label", valueKey: "comparison2_value" },
  { labelKey: "comparison3_label", valueKey: "comparison3_value" }
];

export function PricingSection() {
  const t = useTranslations('PricingSection');
  
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground italic">
            {t('subtitle')}
          </p>
        </div>

        {/* Value Comparison */}
        <div className="flex flex-col items-center gap-4 mb-20 max-w-lg mx-auto">
          {comparisonItems.map((item, index) => (
            <Card key={index} className="w-full bg-card/50 border-border/20 shadow-sm">
              <CardContent className="flex items-center justify-between p-4 sm:px-6">
                <span className="text-foreground font-medium">{t(item.labelKey)}</span>
                <span className="text-muted-foreground line-through font-semibold italic">
                  {t(item.valueKey)}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          {/* Main Product: Biblical Geography */}
          <Card id="offer" className="scroll-mt-24 max-w-md w-full bg-[#1A1A1A] border-border/20 overflow-hidden flex flex-col shadow-lg">
            <div className="relative aspect-[16/9] w-full">
              <Image 
                src="https://i.postimg.cc/jjFxghdb/book-cover-Ck3q7dk0.jpg"
                alt="Biblical Geography Book Cover"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-primary">{t('product1_title')}</CardTitle>
              <div className="flex flex-col mt-2">
                <span className="text-sm text-muted-foreground line-through">$49.99</span>
                <div className="text-3xl font-bold text-foreground">{t('product1_price')}</div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{t(`product1_bullet${i}`)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <div className="bg-green-500/10 text-green-400 text-xs font-bold text-center py-2 rounded-t-lg border-x border-t border-green-500/20 uppercase tracking-widest mb-0">
                {t('notice')}
              </div>
              <Button asChild className="w-full h-14 text-lg font-bold rounded-t-none motion-safe:animate-pulse-premium">
                <Link href="https://pay.hotmart.com/Y104372787M?checkoutMode=10">
                  {t('cta_text')}
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
