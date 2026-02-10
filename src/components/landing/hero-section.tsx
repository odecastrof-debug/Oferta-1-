import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const trustBullets = [
  "✔ Instant access",
  "✔ Works on mobile",
  "✔ Satisfaction guarantee"
];

export function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:py-32">
       <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm"></div>
       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-semibold text-accent">+5,000 students have already transformed the way they read the Bible</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
          Understand the Bible like never before,
          <br />
          <span className="text-primary">by seeing where and how each story happened</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Over 280 images showing you the exact locations of each biblical event — so you can finally understand the context and feel like you were there.
        </p>
        <div className="mt-10">
          <p className="text-2xl font-semibold text-foreground">Biblical Geography</p>
          <p className="text-lg text-primary">From Genesis to Revelation</p>
        </div>
        <div className="mt-10 flex flex-col gap-y-6 items-center">
          <Button size="lg" className="text-lg px-12 py-8">
            Explore the Bible on the map now
          </Button>
          <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {trustBullets.map((bullet, index) => (
              <span key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                {bullet.replace('✔ ','')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
