import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const faqs = [
    {
      "question": "How do I receive the material?",
      "answer": "Instantly! After your payment is confirmed, you will receive an email with a link to download all the materials. You can access it on any device: computer, tablet, or smartphone."
    },
    {
      "question": "What format is the material in?",
      "answer": "The main e-book is in PDF format, making it compatible with all devices. The images are in high-resolution JPG format, and other bonuses may be in PDF or other accessible formats."
    },
    {
      "question": "Can I print the material?",
      "answer": "Yes, you can print the e-book and images for your personal use or study groups. The high-resolution format ensures excellent print quality."
    },
    {
      "question": "How long do I have access?",
      "answer": "You have lifetime access to all materials, including all future updates. Pay once and enjoy the content forever."
    },
    {
      "question": "Is it safe to buy?",
      "answer": "Absolutely. Our payment platform uses state-of-the-art security to protect your data. We also offer a 30-day money-back guarantee, so your purchase is completely risk-free."
    }
  ];

  export function FaqSection() {
    return (
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Have questions?
            </h2>
          </div>
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
