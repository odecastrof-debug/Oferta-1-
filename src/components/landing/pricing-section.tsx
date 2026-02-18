
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const comparisonItems = [
  { labelKey: "comparison1_label", valueKey: "comparison1_value" },
  { labelKey: "comparison2_label", valueKey: "comparison2_value" },
  { labelKey: "comparison3_label", valueKey: "comparison3_value" }
];

const bulletPoints = [
  "bullet1",
  "bullet2",
  "bullet3",
  "bullet4",
  "bullet5"
];

export function PricingSection() {
  const t = useTranslations('PricingSection');
  
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="flex flex-col items-center gap-4 mb-16 max-w-lg mx-auto">
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

        {/* Main Offer Block */}
        <Card className="border-2 border-primary shadow-2xl shadow-primary/10 overflow-hidden bg-[#1A1A1A]">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-10">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none mb-6 px-4 py-1 text-sm uppercase tracking-wider font-bold">
                {t('offer_badge')}
              </Badge>
              <h3 className="text-4xl sm:text-5xl font-bold text-foreground font-headline mb-2">
                {t('product_title')}
              </h3>
              <p className="text-xl text-primary font-medium tracking-wide">
                {t('product_subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Bullet List */}
              <div className="space-y-5">
                <ul className="space-y-4">
                  {bulletPoints.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1 rounded-full mt-1">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg text-foreground/90">{t(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Display and CTA */}
              <div className="flex flex-col items-center">
                <div className="text-center mb-8">
                  <span className="text-muted-foreground line-through text-2xl font-medium block mb-2 opacity-60">
                    US$49.99
                  </span>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">{t('for_only')}</p>
                  <div className="flex items-start justify-center text-primary">
                    <span className="text-2xl mt-2 font-bold">US$</span>
                    <span className="text-7xl sm:text-8xl font-black font-headline tracking-tighter ml-1">5.90</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 font-medium italic opacity-80">
                    {t('payment_period')}
                  </p>
                </div>

                <div className="w-full">
                  <div className="bg-green-500/10 text-green-400 text-xs font-bold text-center py-2 rounded-t-lg border-x border-t border-green-500/20 uppercase tracking-widest">
                    {t('notice')}
                  </div>
                  <Button asChild size="lg" className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 rounded-t-none shadow-lg shadow-primary/20">
                    <Link href="https://pay.hotmart.com/Y104372787M?checkoutMode=10">
                      {t('cta_text')}
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                  </Button>
                </div>

                {/* Trust Row */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-muted-foreground opacity-70">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{t('secure_payment')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{t('instant_access')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{t('payment_methods')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
