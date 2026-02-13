'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const deliverables = [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6"
    ];

export function WhatYouGetSection() {
  const t = useTranslations('WhatYouGetSection');
  return (
    <section id="what-you-get" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                {t('title')}
            </h2>
        </div>
        <Card>
            <CardHeader>
                <Badge className="w-fit mx-auto text-base py-2 px-4 bg-accent text-accent-foreground">{t('badge')}</Badge>
            </CardHeader>
            <CardContent>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <span className="text-lg text-foreground">{t(item)}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
