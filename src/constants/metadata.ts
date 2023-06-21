import { Metadata } from 'next';

export const TITLE_BASE = 'CIS-1962';

export const DEFAULT_METADATA = {
  title: TITLE_BASE,
  description:
    'A CIS Minicourse at UPenn exploring the world of JavaScript. Fall 2023 semester.',
  openGraph: {
    type: 'website',
    title: 'CIS-1962: JavaScript',
  },
} satisfies Metadata;
