import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function PricingSection() {
  const t = useTranslations('Pricing');
  const summary = t.raw('summary') as string[];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary shadow-xl shadow-primary/20">
            <CardHeader className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                    {t('title')}
                </h2>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8 items-center p-8">
                <div>
                    <ul className="space-y-4">
                        {summary.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-lg text-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-background rounded-lg p-8 text-center flex flex-col items-center shadow-inner">
                    <p className="text-lg text-muted-foreground">{t('payment_note')}</p>
                    <div className="my-4">
                        <span className="text-5xl font-bold text-primary">US$5.90</span>
                        <span className="text-2xl text-muted-foreground line-through ml-2">US$49.99</span>
                    </div>
                    <Button asChild size="lg" className="w-full text-xl h-16 mt-4">
                        <Link href="https://pay.hotmart.com/Y104372787M?checkoutMode=10">
                            {t('cta')}
                        </Link>
                    </Button>
                    <div className="mt-6 flex justify-center items-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-sm">{t('features.secure')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            <span className="text-sm">{t('features.instant')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5" />
                            <span className="text-sm">{t('features.payment_methods')}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
