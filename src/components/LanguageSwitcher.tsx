'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('LanguageSwitcher');

  const changeLocale = (nextLocale: string) => {
    // The pathname from `next/navigation` is the full path with locale.
    // We need to remove the current locale and add the new one.
    let pathWithoutLocale = pathname;
    if (pathname.startsWith(`/${locale}`)) {
      pathWithoutLocale = pathname.substring(locale.length + 1) || '/';
    }

    let newUrl;
    if (nextLocale === 'en') {
      // Default locale doesn't need a prefix.
      newUrl = pathWithoutLocale;
    } else {
      if (pathWithoutLocale === '/') {
        newUrl = `/${nextLocale}`;
      } else {
        newUrl = `/${nextLocale}${pathWithoutLocale}`;
      }
    }
    router.replace(newUrl);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages />
          <span className="sr-only">{t('change_language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => changeLocale('en')}
          disabled={locale === 'en'}
        >
          {t('en')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLocale('fr')}
          disabled={locale === 'fr'}
        >
          {t('fr')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
