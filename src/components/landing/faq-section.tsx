'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { useTranslations } from "next-intl";
  
const faqs = [
    {
      "question": "faq1_question",
      "answer": "faq1_answer"
    },
    {
      "question": "faq2_question",
      "answer": "faq2_answer"
    },
    {
      "question": "faq3_question",
      "answer": "faq3_answer"
    },
    {
      "question": "faq4_question",
      "answer": "faq4_answer"
    },
    {
      "question": "faq5_question",
      "answer": "faq5_answer"
    }
  ];

  export function FaqSection() {
    const t = useTranslations('FaqSection');
    return (
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              {t('title')}
            </h2>
          </div>
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{t(faq.question)}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {t(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
