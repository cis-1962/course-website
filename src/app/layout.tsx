import { Metadata } from 'next';
import { IBM_Plex_Sans, Inter } from 'next/font/google';

import { ThemeSelector } from '../components/theme/theme-selector';

import { DEFAULT_METADATA } from '@/constants/metadata';

import './globals.scss';

const displayFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
});
const sansFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

export const metadata = DEFAULT_METADATA satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sansFont.variable} ${displayFont.variable} overflow-y-scroll transition-colors scrollbar-thin scrollbar-track-background scrollbar-thumb-neutral-400 hover:scrollbar-thumb-foreground dark:scrollbar-thumb-neutral-700`}
      >
        <ThemeSelector />
        {children}
      </body>
    </html>
  );
}
