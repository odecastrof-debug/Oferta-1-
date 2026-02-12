'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const moduleKeys = ["patriarchs", "exodus", "conquest", "prophets", "jesus", "early_christianity"];

export function ModulesSection() {
  const t = useTranslations('Modules');

  const modules = moduleKeys.map(key => ({
    key,
    title: t(`items.${key}.title`),
    images: t.raw(`items.${key}.images`),
    content: t.raw(`items.${key}.content`) as string[]
  }));

  return (
    <section id="modules" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            {t('title')}
          </h2>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {modules.map((module, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <span className="font-bold text-accent">{module.title}</span>
                    <span className="text-sm font-normal text-muted-foreground">(+{module.images} {t('images_count')})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pl-4 pt-2">
                    {module.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-base text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-foreground">
            <p>{t('quote')}</p>
            <footer className="mt-2 text-base not-italic text-muted-foreground">{t('quote_source')}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
