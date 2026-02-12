import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            {t('copyright', {year: currentYear})}
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('terms')}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('privacy')}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
