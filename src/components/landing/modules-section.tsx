'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const modules = [
    {
      "title": "module1_title",
      "images": "module1_images",
      "content": ["module1_content1", "module1_content2", "module1_content3", "module1_content4"]
    },
    {
      "title": "module2_title",
      "images": "module2_images",
      "content": ["module2_content1", "module2_content2", "module2_content3", "module2_content4"]
    },
    {
      "title": "module3_title",
      "images": "module3_images",
      "content": ["module3_content1", "module3_content2", "module3_content3", "module3_content4"]
    },
    {
      "title": "module4_title",
      "images": "module4_images",
      "content": ["module4_content1", "module4_content2", "module4_content3", "module4_content4"]
    },
    {
      "title": "module5_title",
      "images": "module5_images",
      "content": ["module5_content1", "module5_content2", "module5_content3", "module5_content4"]
    },
    {
      "title": "module6_title",
      "images": "module6_images",
      "content": ["module6_content1", "module6_content2", "module6_content3", "module6_content4"]
    }
  ];

export function ModulesSection() {
  const t = useTranslations('ModulesSection');
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
                    <span className="font-bold text-accent">{t(module.title)}</span>
                    <span className="text-sm font-normal text-muted-foreground">{t(module.images)}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pl-4 pt-2">
                    {module.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-base text-muted-foreground">{t(item)}</span>
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
            <footer className="mt-2 text-base not-italic text-muted-foreground">{t('quote_reference')}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
