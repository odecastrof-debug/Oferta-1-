import { Card } from '@/components/ui/card';
import { Layers, Landmark, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
    {
      icon: Layers,
      title: "Detailed Physical Geography",
      description: "Relief, climate, vegetation, rivers and landscapes recreated with scientific precision."
    },
    {
      icon: Landmark,
      title: "Archaeological Context",
      description: "Ruins and structures based on documented archaeological discoveries."
    },
    {
      icon: Globe,
      title: "Academic Cartography",
      description: "Maps and routes validated by biblical studies specialists."
    }
  ];

export function ChallengeSection() {

  return (
    <section id="detailed-features" className="py-16 sm:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                What you'll find in the Biblical Geography material is unique
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our images are produced based on 3 pillars:
            </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border/20 p-6 text-left">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                         <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-lg italic text-muted-foreground">"You will not find anything like this anywhere else."</p>
        </div>

        <div className="mt-20 flex justify-center items-center gap-8">
            <div className="text-right">
                <p className="text-3xl font-bold text-foreground">
                    <span className="text-xl text-muted-foreground line-through mr-2">$49.99</span>
                    <span className="text-primary ml-2">$5.90</span>
                </p>
            </div>
            <Button asChild size="lg" className="px-10 h-14 text-lg font-bold bg-primary hover:bg-primary/90">
                <Link href="https://pay.hotmart.com/Y104372787M?checkoutMode=10">
                    Buy Now
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
