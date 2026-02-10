const stats = [
    { number: '280+', label: 'High-resolution images' },
    { number: '66', label: 'Books covered' },
    { number: '100%', label: 'Historical accuracy' },
  ];
  
  export function StatsSection() {
    return (
      <section id="stats" className="bg-background py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-4xl sm:text-5xl font-bold text-primary">{stat.number}</p>
                <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  