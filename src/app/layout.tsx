import './globals.css';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function RootLayout({children}: Props) {
  // This layout is required by Next.js and is shared across all locales.
  // It should not contain any markup that is locale-specific.
  return children;
}
