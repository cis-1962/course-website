import { Metadata } from 'next';

export const TITLE_BASE = 'CIS-1962';

export function makeTitle(pageName: string) {
  return `${pageName} | ${TITLE_BASE}`;
}

export const DEFAULT_METADATA = {
  metadataBase: new URL('https://javascriptclass.org/'),
  title: TITLE_BASE,
  description:
    'A CIS Minicourse at UPenn exploring the world of JavaScript. Fall 2023 semester.',
  openGraph: {
    type: 'website',
    title: 'CIS-1962: JavaScript',
    images: ['/images/meta/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
} satisfies Metadata;
