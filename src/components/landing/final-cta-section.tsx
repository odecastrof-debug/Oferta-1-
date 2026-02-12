import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-16 sm:py-24 bg-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl font-headline">
          Ready to see the Bible with new eyes?
        </h2>
        <p className="mt-6 text-lg text-foreground">
          Thousands of students have already discovered a clearer way to study the Scriptures. Today you can be one of them — risk-free.
        </p>
        <p className="mt-8 text-xl font-semibold text-muted-foreground italic">
          You can keep reading the Bible as just text…
        </p>
        <p className="mt-2 text-2xl font-bold text-accent">
          or finally see where it all happened.
        </p>
        <div className="mt-10">
            <p className="text-3xl font-bold text-foreground">
                <span className="text-muted-foreground line-through">US$49.99</span>
                <span className="text-primary ml-4">US$5.90</span>
            </p>
        </div>
        <Button asChild size="lg" className="mt-8 text-lg px-12 py-8">
          <Link href="https://pay.hotmart.com/Y104372787M?checkoutMode=10">
            Explore the Bible on the map now
          </Link>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Instant access · One-time payment · 100% secure payment · 30-day full guarantee
        </p>
      </div>
    </section>
  );
}
