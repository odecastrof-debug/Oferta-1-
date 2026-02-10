import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const bonuses = [
  { name: "Understand who Israel's enemies were", value: 39 },
  { name: 'Visualize all of biblical history in order', value: 29 },
  { name: 'Locate any biblical place instantly', value: 35 },
  { name: 'Discover the meaning of each sacred place', value: 25 },
  { name: 'Tour Solomon’s Temple room by room', value: 19 },
  { name: 'Deepen your study with guided exercises', value: 19 },
  { name: 'Receive new images without paying more', value: 'Priceless' },
];

export function BonusesSection() {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            7 tools that deepen your study
          </h2>
        </div>
        <div className="mt-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold">
                Included at no extra cost
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                    <span className="text-lg text-foreground">{bonus.name}</span>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-primary">FREE</span>
                      {typeof bonus.value === 'number' && (
                        <span className="ml-2 text-muted-foreground line-through">
                          US${bonus.value}
                        </span>
                      )}
                      {bonus.value === 'Priceless' && (
                         <span className="ml-2 text-muted-foreground line-through">
                          {bonus.value}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
