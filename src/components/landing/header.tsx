import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <Link href="/">
            <div className="text-foreground">
              <div className="font-bold text-xl font-headline tracking-wide">Biblical Geography</div>
              <div className="text-sm text-muted-foreground">from Genesis to Revelation</div>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="https://pay.hotmart.com/Y104372787M?checkoutMode=10">Get It Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
