import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const challenges = [
    {
      id: "01",
      title: "Shapeless places",
      description: "Red Sea, Mount Sinai, Jordan — names that remain abstract, with no visual connection to historical reality."
    },
    {
      id: "02",
      title: "Fragmented context",
      description: "Years of Bible study without understanding the geography that directly influenced the events described."
    },
    {
      id: "03",
      title: "Scarce materials",
      description: "High-quality visual resources are rare, expensive, or incomplete — creating a gap in deep understanding."
    }
  ];

export function ChallengeSection() {
  return (
    <section id="challenge" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            The Challenge
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Most Christians read the Bible without imagining where the events took place
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold font-headline text-accent">
                  {challenge.id} — {challenge.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-lg text-foreground">
            The vast majority of readers never developed a visual understanding of the sacred settings.
          </p>
          <p className="text-lg text-foreground font-semibold">
            This gap limits the depth of your Bible study.
          </p>
        </div>
      </div>
    </section>
  );
}
