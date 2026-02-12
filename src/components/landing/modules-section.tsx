import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react";

const modules = [
    {
      "title": "Module 01 — Era of the Patriarchs",
      "images": 45,
      "content": ["Creation and the Garden of Eden", "The Flood and Noah’s Ark", "Abraham, Isaac, and Jacob", "Joseph in Egypt"]
    },
    {
      "title": "Module 02 — Exodus and Wilderness",
      "images": 50,
      "content": ["The Plagues of Egypt", "Crossing the Red Sea", "Mount Sinai and the Commandments", "40 years in the wilderness"]
    },
    {
      "title": "Module 03 — Conquest and Kingdom",
      "images": 55,
      "content": ["Joshua and the Promised Land", "Era of the Judges", "Kings David and Solomon", "The Temple of Jerusalem"]
    },
    {
      "title": "Module 04 — Prophets and Exile",
      "images": 40,
      "content": ["Elijah and Elisha", "Fall of Israel and Judah", "Babylonian exile", "Return to Jerusalem"]
    },
    {
      "title": "Module 05 — Life of Jesus",
      "images": 60,
      "content": ["Bethlehem and Nazareth", "Ministry in Galilee", "Jerusalem in the time of Jesus", "Crucifixion and Resurrection"]
    },
    {
      "title": "Module 06 — Early Christianity",
      "images": 35,
      "content": ["Paul’s missionary journeys", "Churches in Asia Minor", "Ancient Rome", "Visions of Revelation"]
    }
  ];

export function ModulesSection() {
  return (
    <section id="modules" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            6 modules covering all of biblical history
          </h2>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {modules.map((module, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <span className="font-bold text-accent">{module.title}</span>
                    <span className="text-sm font-normal text-muted-foreground">(+{module.images} images)</span>
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
            <p>“Blessed are those who hunger and thirst for righteousness, for they will be filled.”</p>
            <footer className="mt-2 text-base not-italic text-muted-foreground">Matthew 5:6</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
