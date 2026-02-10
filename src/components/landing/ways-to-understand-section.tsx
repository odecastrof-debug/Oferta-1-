import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Map, Camera, Mountain, Paintbrush, View } from 'lucide-react';

const ways = [
    { icon: Paintbrush, title: "Artistic illustrations", description: "Visualize scenes you could only imagine" },
    { icon: Map, title: "Historical cartography", description: "Understand the location of each event" },
    { icon: Camera, title: "Real locations", description: "Connect the Bible with the modern world" },
    { icon: View, title: "3D reconstructions", description: "See temples and cities as they were" },
    { icon: Mountain, title: "Biblical landscapes", description: "Feel the context of each story" },
];

const bullets = [
    "See the exact terrain of each story",
    "Discover what archaeology revealed",
    "Follow the routes with precise maps",
    "Everything organized for you",
];

export function WaysToUnderstandSection() {
  return (
    <section id="ways-to-understand" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Multiple ways to understand
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each type of image brings you closer to the story
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {ways.map((way) => (
                <Card key={way.title} className="text-center">
                    <CardHeader>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <way.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <CardTitle className="mt-4 text-lg font-semibold text-foreground">{way.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{way.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-4">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <span className="text-lg text-foreground">{bullet}</span>
                        </li>
                    ))}
                </ul>
                <div className="text-center">
                    <Button size="lg" className="text-lg">
                        See where biblical events happened
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
