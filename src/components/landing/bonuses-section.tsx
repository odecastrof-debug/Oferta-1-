'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

const bonusesData = [
  { "key": "bonus1", "value": 39 },
  { "key": "bonus2", "value": 29 },
  { "key": "bonus3", "value": 35 },
  { "key": "bonus4", "value": 25 },
  { "key": "bonus5", "value": 19 },
  { "key": "bonus6", "value": 19 },
  { "key": "bonus7", "value": "Priceless" }
];

export function BonusesSection() {
  const t = useTranslations('BonusesSection');
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            {t('title')}
          </h2>
        </div>
        <div className="mt-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold">
                {t('badge')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {bonusesData.map((bonus, index) => (
                  <li key={index} className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <span className="text-lg text-foreground">{t(bonus.key)}</span>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-primary">{t('free')}</span>
                      {typeof bonus.value === 'number' && (
                        <span className="ml-2 text-muted-foreground line-through">
                          US${bonus.value}
                        </span>
                      )}
                      {bonus.value === 'Priceless' && (
                         <span className="ml-2 text-muted-foreground line-through">
                          {t('priceless')}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
