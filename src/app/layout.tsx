import { Metadata } from 'next';
import './globals.scss';
import { Fira_Sans, Signika } from 'next/font/google';

import { TITLE_BASE } from '@/constants/metadata';

const spaceGrotesk = Signika({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
});
const fira = Fira_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export const metadata = {
  title: TITLE_BASE,
  description: 'Course website for CIS-1962: Javascript, Fall 2023',
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fira.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
